import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { config, contact, pages, sideBuilds } from './data/content.js';
import useReveal from './useReveal.js';
import { hrefFor } from './nav.js';
import { GithubIcon, LinkedinIcon, MailIcon } from './components/Icons.jsx';
import Home from './pages/Home.jsx';
import Roadmap from './pages/Roadmap.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import SideBuild from './pages/SideBuild.jsx';

const PAGE_KEYS = pages.map((p) => p.key);
const BUILD_KEYS = new Set(sideBuilds.map((b) => b.key));

function routeFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '');
  if (PAGE_KEYS.includes(raw)) return { page: raw, buildKey: '' };
  const buildKey = raw.startsWith('build/') ? raw.slice('build/'.length) : '';
  if (buildKey && BUILD_KEYS.has(buildKey)) return { page: 'build', buildKey };
  return { page: 'home', buildKey: '' };
}

export default function App() {
  const [route, setRoute] = useState(routeFromHash);
  const { page, buildKey } = route;

  useEffect(() => {
    const onHash = () => {
      setRoute(routeFromHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useReveal(`${page}:${buildKey}`, config.animations);

  return (
    <div className="shell">
      <header className="site-header">
        <nav className="site-nav container" aria-label="Main">
          <a href={hrefFor('home')} className="brand">
            <span className="brand-dot" aria-hidden="true" />Paul Dumas
          </a>
          <div className="nav-links">
            {pages.filter((p) => p.inNav !== false).map((p) => (
              <a key={p.key} href={hrefFor(p.key)} className="nav-link"
                aria-current={page === p.key || (page === 'build' && p.key === 'roadmap') ? 'page' : undefined}>
                {p.label}
              </a>
            ))}
          </div>
          <a href={hrefFor('contact')} className="btn btn-primary">Get in touch</a>
        </nav>
      </header>

      <main className="container">
        {page === 'home' && <Home />}
        {page === 'roadmap' && <Roadmap />}
        {page === 'resume' && <Resume />}
        {page === 'contact' && <Contact />}
        {page === 'build' && <SideBuild buildKey={buildKey} />}
      </main>

      <footer className="site-footer container">
        <p>Let me know what you think! And let's talk about the Product Builder role</p>
        <div className="social-links">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link"><LinkedinIcon size={18} /></a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link"><GithubIcon size={18} /></a>
          <a href={`mailto:${contact.email}`} aria-label="Email" className="social-link"><MailIcon size={18} /></a>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}
