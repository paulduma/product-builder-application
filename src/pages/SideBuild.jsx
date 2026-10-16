import { sideBuildSections, sideBuilds } from '../data/content.js';
import { hrefFor } from '../nav.js';
import Placeholder from '../components/Placeholder.jsx';

const SHAPES = ['64px 64px 64px 160px', '160px 64px 64px 64px', '64px 160px 64px 64px', '64px 64px 160px 64px'];
const TONES = ['sage', 'terracotta-soft'];

const STATUS = {
  done: { label: 'Done', cls: 'tag-accent-2' },
  progress: { label: 'In progress', cls: 'tag-accent' },
};

export default function SideBuild({ buildKey }) {
  const index = sideBuilds.findIndex((b) => b.key === buildKey);
  const build = sideBuilds[index];
  if (!build) return null;

  const sections = build.sections?.length ? build.sections : sideBuildSections;
  const prev = sideBuilds[index - 1];
  const next = sideBuilds[index + 1];
  const status = STATUS[build.status];
  const radius = SHAPES[index % SHAPES.length];

  return (
    <section className="page build-page" data-screen-label={`Side build · ${build.title}`}>
      <a data-reveal href={hrefFor('roadmap')} className="back-link">← My AI OS</a>

      <div className="build-hero">
        <div data-reveal>
          <div className="build-kicker">
            <span className="eyebrow eyebrow--sage">Side build {String(index + 1).padStart(2, '0')}</span>
            <span className={`tag ${status.cls}`}>{status.label}</span>
          </div>
          <h1 className="page-title">{build.title}</h1>
          <p className="page-lede">{build.desc}</p>
          <div className="row build-tags">
            {build.tags.map((t) => <span key={t} className="tag tag-neutral">{t}</span>)}
          </div>
        </div>
        <div data-reveal className="art build-art">
          <div className="blob" style={{ width: '34%', background: 'var(--color-accent-200)', right: '-4%', top: '-8%' }} />
          {build.image ? (
            <div className="step-frame" style={{ borderRadius: radius }}>
              <img src={build.image} alt={build.imageAlt || ''} />
            </div>
          ) : (
            <Placeholder tone={TONES[index % TONES.length]} style={{ aspectRatio: '5 / 4', borderRadius: radius, padding: 40 }}>
              [Illustration placeholder: {build.illustration}]
            </Placeholder>
          )}
        </div>
      </div>

      <div className="build-sections">
        {sections.map((section, i) => (
          <article key={section.title} data-reveal className="build-section">
            <h2>{section.title}</h2>
            {section.body ? (
              <p>{section.body}</p>
            ) : (
              <Placeholder
                tone={i % 2 ? 'sage' : 'terracotta-soft'}
                className="build-slot"
              >
                {section.hint}
              </Placeholder>
            )}
          </article>
        ))}
      </div>

      <nav className="build-pager" aria-label="Other side builds">
        {prev ? (
          <a data-reveal href={hrefFor(`build/${prev.key}`)} className="build-pager-link">
            <span className="build-pager-label">Previous</span>
            <span className="build-pager-title">← {prev.title}</span>
          </a>
        ) : <span />}
        {next ? (
          <a data-reveal href={hrefFor(`build/${next.key}`)} className="build-pager-link build-pager-link--next">
            <span className="build-pager-label">Next</span>
            <span className="build-pager-title">{next.title} →</span>
          </a>
        ) : <span />}
      </nav>
    </section>
  );
}
