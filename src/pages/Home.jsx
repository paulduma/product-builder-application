import { useEffect, useState } from 'react';
import { visionPoints } from '../data/content.js';
import Placeholder from '../components/Placeholder.jsx';
import { hrefFor } from '../nav.js';
import verdi from '../assets/verdi.jpg';

// Hero title job: types "Owner", swaps it for "Manager", then lands on "Builder" and stays.
const ROLES = ['Owner', 'Manager', 'Builder'];
const TYPE_MS = 90;
const ERASE_MS = 50;
const HOLD_MS = 1100;

function TypedRole() {
  const final = ROLES[ROLES.length - 1];
  const longest = ROLES.reduce((a, b) => (b.length > a.length ? b : a));
  const reduceMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [text, setText] = useState(reduceMotion ? final : '');
  const [done, setDone] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) return undefined;
    let role = 0;
    let len = 0;
    let erasing = false;
    let timer;
    const tick = () => {
      const word = ROLES[role];
      if (!erasing) {
        len += 1;
        setText(word.slice(0, len));
        if (len < word.length) { timer = setTimeout(tick, TYPE_MS); return; }
        if (role === ROLES.length - 1) { setDone(true); return; }
        erasing = true;
        timer = setTimeout(tick, HOLD_MS);
      } else {
        len -= 1;
        setText(word.slice(0, len));
        if (len > 0) { timer = setTimeout(tick, ERASE_MS); return; }
        erasing = false;
        role += 1;
        timer = setTimeout(tick, TYPE_MS * 3);
      }
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <>
      <span className="sr-only">{final}.</span>
      {/* The invisible longest word holds the space, so the title doesn't reflow while typing. */}
      <span aria-hidden="true" className="typed-role">
        <span className="typed-ghost">{longest}.</span>
        <span className="typed-text">
          {text}
          <span className={`typed-caret${done ? ' typed-caret--done' : ''}`} />.
        </span>
      </span>
    </>
  );
}

export default function Home() {
  return (
    <>
      <section className="split hero" data-screen-label="Home">
        <div data-reveal>
          <h1>
            <span className="hello">Hello 👋</span>
            <span>My name is Paul, I'm a Product <TypedRole /></span>
          </h1>
          <p className="hero-lede">The two things that I love most in my job: <strong>Building</strong>, for the creative side of turning ideas into real products; and <strong>Translating</strong>, while being at the crossroad of tech, business, sales and exec.</p>
          <div className="row">
            <a href={hrefFor('resume')} className="btn btn-secondary">Check my resume</a>
            <a href={hrefFor('roadmap')} className="btn btn-primary">See my AI OS</a>
          </div>
        </div>
        <div data-reveal className="art">
          <div className="blob" style={{ width: '46%', background: 'var(--color-accent-200)', right: '-4%', top: '-8%' }} />
          <div className="blob" style={{ width: '22%', background: 'var(--color-accent-2-300)', left: '-3%', bottom: '-4%' }} />
          <div className="hero-art">
            <img
              src={verdi}
              alt="Verdi, a brown and white dog, lying on the floor"
            />
          </div>
        </div>
      </section>

      <section className="split" data-screen-label="Home · My path">
        <div data-reveal className="prose">
          <span className="eyebrow">My path</span>
          <h2 className="section-title">From engineering school to product</h2>
          <p>I discovered Product during engineering school, after preparatory classes in Maths &amp; Physics and École Centrale de Lyon.</p>
          <p>I then navigated tech startups and scale-ups in Paris (Cubyn, HelloFresh) as Strategic Projects Manager, before becoming a Product Manager at Betclic.</p>
          <p>Today, I'm looking for a new challenge: building something from scratch, taking my AI skills further, and putting them to work where they move the business. That's exactly what draws me to [Company].</p>
        </div>
        <div data-reveal className="art">
          <div className="blob" style={{ width: '38%', background: 'var(--color-accent-100)', left: '-6%', top: '-6%' }} />
          <Placeholder style={{ aspectRatio: '1', maxWidth: 460, marginLeft: 'auto', borderRadius: '50%', padding: 56 }}>
            [Illustration placeholder: a winding path from a school building to a product whiteboard]
          </Placeholder>
        </div>
      </section>

      <section className="vision" data-screen-label="Home · My AI vision">
        <div data-reveal className="prose vision-intro">
          <span className="eyebrow eyebrow--sage">My AI vision</span>
          <h2 className="section-title">AI, for everything and anything. Build, build, build.</h2>
          <p>To me, AI isn't a tool you open once in a while. It's a layer across everything I do, and the best version of it comes to you instead of waiting to be asked.</p>
        </div>
        <div className="vision-grid">
          {visionPoints.map((v) => (
            <div key={v.kicker} data-reveal className={`card vision-card${v.highlight ? ' vision-card--highlight' : ''}`}>
              <span className="card-kicker">{v.kicker}</span>
              <h3 className="card-title">{v.title}</h3>
              <p className="card-body">{v.body}</p>
            </div>
          ))}
        </div>
        <div data-reveal className="card app-card">
          <div className="app-card-text">
            <div className="app-card-title">My AI OS at Betclic</div>
            <div className="app-card-sub">Skills, a plugin and agents I built for the Product tribe</div>
          </div>
          <a href={hrefFor('roadmap')} className="btn btn-primary">See my AI OS →</a>
        </div>
      </section>

      <section className="split split--last" data-screen-label="Home · About this site">
        <div data-reveal className="art">
          <div className="blob" style={{ width: '34%', background: 'var(--color-accent-2-200)', right: '-4%', top: '-8%' }} />
          <Placeholder tone="terracotta-soft" style={{ aspectRatio: '5 / 4', maxWidth: 520, borderRadius: '64px 160px 64px 64px', padding: 40 }}>
            [Illustration placeholder: the builder character waving next to a freshly built website]
          </Placeholder>
        </div>
        <div data-reveal className="prose">
          <span className="eyebrow">About this site</span>
          <h2 className="section-title">Built quickly, built for you</h2>
          <p>I built this site in a few days, with my own AI setup, just to apply to [Company]. It's my way of showing how interested I am in the role and in what [Company] stands for: [value 1], [value 2], [value 3].</p>
          <p>I'd be really happy to connect and talk about the position.</p>
          <div style={{ marginTop: 28 }}>
            <a href={hrefFor('contact')} className="btn btn-primary">Get in touch →</a>
          </div>
        </div>
      </section>
    </>
  );
}
