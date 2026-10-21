import { useEffect, useRef } from 'react';
import { roadmapSteps } from '../data/content.js';
import Placeholder from '../components/Placeholder.jsx';

// Visual rhythm for the steps: frame shapes, tints and decorative blobs cycle like on the home page.
const SHAPES = ['64px 64px 64px 160px', '160px 64px 64px 64px', '64px 160px 64px 64px', '64px 64px 160px 64px'];
const TONES = ['sage', 'terracotta-soft'];
const BLOBS = [
  { width: '34%', background: 'var(--color-accent-200)', right: '-4%', top: '-8%' },
  { width: '26%', background: 'var(--color-accent-2-300)', left: '-4%', bottom: '-6%' },
  { width: '30%', background: 'var(--color-accent-2-200)', right: '2%', bottom: '-7%' },
  { width: '24%', background: 'var(--color-accent-300)', left: '-3%', top: '-6%' },
];

const STATUS = {
  done: { label: 'Done', cls: 'tag-accent-2' },
  progress: { label: 'In progress', cls: 'tag-accent' },
  future: { label: 'The future', cls: 'tag-outline' },
};

// Fills the thread as the reader scrolls, and lights up each step's node once it's passed.
function useJourneyProgress(ref) {
  useEffect(() => {
    const root = ref.current;
    const rail = root.querySelector('.journey-rail');
    const nodes = [...root.querySelectorAll('.step-node')];
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.6;
      const r = rail.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (line - r.top) / r.height));
      root.style.setProperty('--journey-progress', progress.toFixed(4));
      nodes.forEach((n) => {
        const nr = n.getBoundingClientRect();
        n.classList.toggle('is-reached', nr.top + nr.height / 2 <= line);
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref]);
}

function StepArt({ step, i }) {
  const radius = SHAPES[i % SHAPES.length];
  return (
    <div data-reveal className="art step-art">
      <div className="blob" style={BLOBS[i % BLOBS.length]} />
      {step.image ? (
        <div
          className={`step-frame${step.imageFit === 'contain' ? ' step-frame--contain' : ''}`}
          style={{ borderRadius: step.imageFit === 'contain' ? 18 : radius }}
        >
          <img src={step.image} alt={step.imageAlt || ''} />
        </div>
      ) : (
        <Placeholder tone={TONES[i % TONES.length]} style={{ aspectRatio: '5 / 4', borderRadius: radius, padding: 40 }}>
          [Illustration placeholder: {step.illustration}]
        </Placeholder>
      )}
    </div>
  );
}

export default function Roadmap() {
  const journeyRef = useRef(null);
  useJourneyProgress(journeyRef);

  const count = (status) => roadmapSteps.filter((s) => s.status === status).length;
  const shipped = count('done');
  const inProgress = count('progress');
  const upcoming = count('future');

  return (
    <section className="page" data-screen-label="My AI OS">
      <div data-reveal className="roadmap-intro">
        <span className="eyebrow">My AI OS</span>
        <h1 className="page-title">Structuring and scaling AI usage for fellow Product Managers.</h1>
        <p className="page-lede">I'm genuinely enthusiastic about all the new AI tools that keep emerging. As many, I first used them for myself, to boost my productivity at work and to ship personal side projects. But I realized that others were also working on their own tools and assistants, duplicating work and efforts across the company, and I came up with this initiative to faster AI adoption among our Tribe.</p>
        <p className="page-lede">It's one example of an AI topic I've successfully driven and rolled out, that I wanted to share as part of my application for this role. You can scroll down to follow the journey.</p>
        <div className="journey-summary">
          <span className="tag tag-accent-2">{shipped} steps shipped</span>
          <span className="tag tag-accent">{inProgress} in progress</span>
          {upcoming > 0 && <span className="tag tag-outline">{upcoming} upcoming</span>}
        </div>
      </div>

      <div className="journey" ref={journeyRef}>
        <div className="journey-rail" aria-hidden="true"><div className="journey-rail-fill" /></div>
        <ol className="steps">
          {roadmapSteps.map((step, i) => {
            const status = STATUS[step.status];
            return (
              <li key={step.title} className={`step${step.target ? ' step--target' : ''}`}>
                <span className={`step-node step-node--${step.status}`} aria-hidden="true">{i + 1}</span>
                <StepArt step={step} i={i} />
                <div data-reveal className="step-text">
                  <div className="step-meta">
                    <span className="step-number">Step {String(i + 1).padStart(2, '0')}</span>
                    <span className={`tag ${status.cls}`}>{status.label}</span>
                    {step.target && <span className="tag tag-outline">The real target</span>}
                  </div>
                  <h2 className="step-title">{step.title}</h2>
                  <p className="step-desc">{step.desc}</p>
                  {step.tags?.length > 0 && (
                    <div className="row">
                      {step.tags.map((t) => <span key={t} className="tag tag-neutral">{t}</span>)}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <aside data-reveal className="tldr" aria-label="Summary">
        <span className="tldr-label">tl;dr</span>
        <p className="tldr-text">This project is an example of how I was able to ship a set of AI tools adopted by an audience of people with different technical backgrounds, different goals, sharing their goals and feedbacks to make it better.</p>
      </aside>
    </section>
  );
}
