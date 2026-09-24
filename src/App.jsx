import { useEffect, useState } from 'react';
import { config, contact, pages } from './data/content.js';
import useReveal from './useReveal.js';
import { hrefFor } from './nav.js';
import { GithubIcon, LinkedinIcon, MailIcon } from './components/Icons.jsx';
import Home from './pages/Home.jsx';
import Roadmap from './pages/Roadmap.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';

const PAGE_KEYS = pages.map((p) => p.key);

function pageFromHash() {
  const key = window.location.hash.replace(/^#\/?/, '');
  return PAGE_KEYS.includes(key) ? key : 'home';
}

export default function App() {
  const [page, setPage] = useState(pageFromHash);

  useEffect(() => {
    const onHash = () => {
      setPage(pageFromHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useReveal(page, config.animations);

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
                aria-current={page === p.key ? 'page' : undefined}>
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
      </main>

      <footer className="site-footer container">
        <p>Built with curiosity, coffee and a few AI agents.</p>
        <div className="social-links">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link"><LinkedinIcon size={18} /></a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link"><GithubIcon size={18} /></a>
          <a href={`mailto:${contact.email}`} aria-label="Email" className="social-link"><MailIcon size={18} /></a>
        </div>
      </footer>
    </div>
  );
}
