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
          <p className="hero-lede">I'd like to reach out to help you build the future of sales with AI. I'd like to bring my proven record of working at the crossroad of Tech, Business, Sales and Operations in Product companies, and would love to know more about your vision for this position.</p>
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

      <section className="split" data-screen-label="Home · About me">
        <div data-reveal className="prose">
          <span className="eyebrow">A little bit about myself</span>
          <h2 className="section-title">My journey across product</h2>
          <p>I've always wanted to be a builder. I didn't end up in construction as planned, but I found another way of building: in tech startups. Whether at HelloFresh, Cubyn or Betclic, I was always amazed to see what we could achieve with new technologies.</p>
          <p>Over the last few years, what I've enjoyed most is working more and more with AI. It broke the time barrier for building, let me unleash my creativity, and allowed me to build the products I imagined myself.</p>
          <p>Today, looking for a new challenge, I'm curious to hear more about the Product Builder role, that fits the ambitions that I have for what's next.</p>
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
          <h2 className="section-title">Fast iterations, strong feedback loops</h2>
          <p>I strongly believe this is a technology you need to feel and experiment with, more than any other. At first, I might have lost some time reading and listening about AI features, or watching cool demos, but that didn't help me much in making it work for my own use cases. Now that iterating is so easy, <strong>testing and working directly with the core users</strong> is at the center of my approach.</p>
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
            <div className="app-card-title">I've built it for Product Teams</div>
            <div className="app-card-sub">An example of use cases I tackled for the Product Teams I'm working with</div>
          </div>
          <a href={hrefFor('roadmap')} className="btn btn-primary">See my AI OS →</a>
        </div>
      </section>

      <section className="split split--last" data-screen-label="Home · Why me">
        <div data-reveal className="art">
          <div className="blob" style={{ width: '34%', background: 'var(--color-accent-2-200)', right: '-4%', top: '-8%' }} />
          <Placeholder tone="terracotta-soft" style={{ aspectRatio: '5 / 4', maxWidth: 520, borderRadius: '64px 160px 64px 64px', padding: 40 }}>
            [Illustration placeholder: the builder character waving next to a freshly built website]
          </Placeholder>
        </div>
        <div data-reveal className="prose">
          <span className="eyebrow">Why me</span>
          <h2 className="section-title">A builder for your AI sales team</h2>
          <p>I strongly believe I could be a good fit for this position, thanks to my experience in scale-ups working with sales teams, my data and AI expertise, and my PM skills. I have a builder mindset that I want to bring to this role.</p>
          <p>Feel free to explore this website to learn more about me. You'll find my contact details below if you'd like to reach out.</p>
          <div style={{ marginTop: 28 }}>
            <a href={hrefFor('contact')} className="btn btn-primary">Get in touch →</a>
          </div>
        </div>
      </section>
    </>
  );
}
