import { config, pathSteps } from '../data/content.js';
import Placeholder from '../components/Placeholder.jsx';
import { hrefFor, noop } from '../nav.js';
import handshake from '../assets/paul-shaking-hands.png';

export default function Home() {
  return (
    <>
      <section className="split hero" data-screen-label="Home">
        <div data-reveal>
          <h1>
            <span className="hello">Hello 👋</span>
            <span>My name is Paul, I'm a Product Builder.</span>
          </h1>
          <p className="hero-lede">Product Manager with a strong Data &amp; AI edge — I turn ambitious ideas into shipped products.</p>
          <div className="row">
            <a href={hrefFor('roadmap')} className="btn btn-primary">See my AI roadmap</a>
            <a href={hrefFor('resume')} className="btn btn-secondary">Download my resume</a>
          </div>
        </div>
        <div data-reveal className="art">
          <div className="blob" style={{ width: '46%', background: 'var(--color-accent-200)', right: '-4%', top: '-8%' }} />
          <div className="blob" style={{ width: '22%', background: 'var(--color-accent-2-300)', left: '-3%', bottom: '-4%' }} />
          <div className="hero-art">
            <img
              src={handshake}
              alt="Paul shaking hands with a friendly character"
            />
          </div>
        </div>
      </section>

      <section className="split" data-screen-label="Home · My path">
        <div data-reveal className="prose">
          <span className="eyebrow">My path</span>
          <h2 className="section-title">From engineering school to product</h2>
          <p>I discovered Product during engineering school — the classic path: preparatory classes in Maths &amp; Physics, then École Centrale de Lyon.</p>
          <p>I then navigated tech startups and scale-ups in Paris (Cubyn, HelloFresh) as Strategic Projects Manager, close to C-levels and product teams.</p>
          <p>Back in my hometown, Bordeaux, I became Data Product Manager at Betclic — creating a brand-new Safer Gaming department (7-person data squad, ML-based detection of at-risk players, <strong>3× cases &amp; accuracy</strong>) — and then Product Manager on Acquisition &amp; KYC.</p>
          {config.showTimeline && (
            <div className="timeline">
              {pathSteps.map((s, i) => (
                <span key={s.label} className="timeline-step">
                  <span className={`tag ${s.cls}`}>{s.label}</span>
                  {i < pathSteps.length - 1 && <span className="timeline-arrow" aria-hidden="true">→</span>}
                </span>
              ))}
            </div>
          )}
        </div>
        <div data-reveal className="art">
          <div className="blob" style={{ width: '38%', background: 'var(--color-accent-100)', left: '-6%', top: '-6%' }} />
          <Placeholder style={{ aspectRatio: '1', maxWidth: 460, marginLeft: 'auto', borderRadius: '50%', padding: 56 }}>
            [Illustration placeholder: a winding path from a school building to a product whiteboard]
          </Placeholder>
        </div>
      </section>

      <section className="split" data-screen-label="Home · AI side passion">
        <div data-reveal className="art">
          <div className="blob" style={{ width: '30%', background: 'var(--color-accent-2-300)', right: '2%', bottom: '-5%' }} />
          <Placeholder tone="sage" style={{ aspectRatio: '5 / 4', maxWidth: 520, borderRadius: '160px 64px 64px 64px', padding: 40 }}>
            [Illustration placeholder: Paul at a laptop, a chef's hat and a code editor side by side]
          </Placeholder>
        </div>
        <div data-reveal className="prose">
          <span className="eyebrow eyebrow--sage">My side passion</span>
          <h2 className="section-title">AI, for everything and anything. Build, build, build.</h2>
          <p style={{ maxWidth: '54ch' }}>My personal setup: Cursor + Claude (paid plans), used to build other products in my free time. Because let's be honest — what PM has never tried to build their own cooking app?</p>
          <div className="card app-card">
            <div className="app-card-text">
              <div className="app-card-title">My recipe app</div>
              <div className="app-card-sub">Meal planning + shopping lists · links are placeholders</div>
            </div>
            <div className="row">
              <a href="#" className="btn btn-primary" onClick={noop}>Try my recipe app</a>
              <a href="#" className="btn btn-ghost" onClick={noop}>Watch the demo</a>
            </div>
          </div>
          <div className="sticky-note">
            <strong>PS</strong>My backlog is full: sommelier app, sports coach app, …
          </div>
        </div>
      </section>

      <section className="split split--last" data-screen-label="Home · AI at work">
        <div data-reveal className="prose">
          <span className="eyebrow">AI at work</span>
          <h2 className="section-title">And AI at work</h2>
          <p>My latest work: designing and building a setup of AI agents and making it available to my colleagues, so they can use it in their daily workflows.</p>
          <p>It's a topic I truly love — and it echoes strongly with how I see the future of sales teams: moving from <strong>pull-based tools</strong> to <strong>proactive AI assistants</strong> that surface the right action at the right time.</p>
          <div style={{ marginTop: 28 }}>
            <a href={hrefFor('roadmap')} className="btn btn-secondary">Learn more →</a>
          </div>
        </div>
        <div data-reveal className="art">
          <div className="blob" style={{ width: '34%', background: 'var(--color-accent-2-200)', right: '-4%', top: '-8%' }} />
          <Placeholder tone="terracotta-soft" style={{ aspectRatio: '5 / 4', maxWidth: 520, marginLeft: 'auto', borderRadius: '64px 160px 64px 64px', padding: 40 }}>
            [Illustration placeholder: friendly assistant characters handing cards to a team]
          </Placeholder>
        </div>
      </section>
    </>
  );
}
