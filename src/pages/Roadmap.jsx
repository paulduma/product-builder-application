import { config, roadmapColumns } from '../data/content.js';

export default function Roadmap() {
  const columns = config.showNextColumn ? roadmapColumns : roadmapColumns.filter((c) => c.key !== 'next');

  return (
    <section className="page" data-screen-label="AI Roadmap">
      <div data-reveal className="roadmap-intro">
        <span className="eyebrow">AI Roadmap</span>
        <h1 className="page-title">My AI assistants, built in the open.</h1>
        <p className="page-lede">I'm building a small fleet of AI assistants — agents, prompts, connectors and evaluation — first for myself, then for my colleagues. The goal: tools that come to you with the right action, instead of waiting to be asked.</p>
        <div className="row">
          {['Agents', 'Prompts', 'Connectors', 'Evaluation'].map((t) => (
            <span key={t} className="tag tag-outline">{t}</span>
          ))}
        </div>
      </div>

      <div className="board">
        {columns.map((col) => (
          <div key={col.key} data-reveal className="column">
            <div className="column-head">
              <span className="column-dot" style={{ background: col.dot }} aria-hidden="true" />
              <h3>{col.title}</h3>
              <span className="column-count">{col.items.length}</span>
            </div>
            <div className="column-items">
              {col.items.map((it) => (
                <article key={it.title} className="roadmap-card">
                  <div className="roadmap-card-head">
                    <h4>{it.title}</h4>
                    <span className={`tag ${col.tagCls}`}>{col.badge}</span>
                  </div>
                  <p>{it.desc}</p>
                  <div className="row">
                    {it.tags.map((t) => <span key={t} className="tag tag-neutral">{t}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
