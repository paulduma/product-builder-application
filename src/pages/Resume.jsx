import { earlierRoles, education, experience, interests, skills } from '../data/content.js';
import { DownloadIcon } from '../components/Icons.jsx';
import { noop } from '../nav.js';

export default function Resume() {
  return (
    <section className="page" data-screen-label="Resume">
      <div data-reveal className="resume-head">
        <div>
          <span className="eyebrow">Resume</span>
          <h1 className="page-title">Paul Dumas</h1>
          <p className="resume-sub">Product Builder (PM/PO) with strong Data &amp; AI expertise</p>
        </div>
        <a href="#" className="btn btn-primary btn-download" onClick={noop}>
          <DownloadIcon size={18} />
          Download PDF
        </a>
      </div>

      <div className="resume-body">
        <div className="experience">
          <div className="experience-rail" aria-hidden="true" />
          <div className="experience-list">
            {experience.map((x) => (
              <div key={x.role} data-reveal className="experience-item">
                <span className="experience-node" style={{ background: x.dot }} aria-hidden="true" />
                <article className="card experience-card">
                  <div className="experience-top">
                    <h3>{x.role}</h3>
                    <span className="experience-dates">{x.dates}</span>
                  </div>
                  <div className="experience-company">{x.company} · {x.location}</div>
                  {x.metrics.length > 0 && (
                    <div className="metrics">
                      {x.metrics.map((m) => (
                        <div key={m.l} className="metric">
                          <span className="metric-value">{m.v}</span>
                          <span className="metric-label">{m.l}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <ul className="bullets">
                    {x.bullets.map((b) => (
                      <li key={b}><span className="bullet-dot" aria-hidden="true" /><span>{b}</span></li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
            <div data-reveal className="experience-item">
              <span className="experience-node experience-node--earlier" aria-hidden="true" />
              <div className="earlier">
                <span className="eyebrow eyebrow--muted">Earlier</span>
                {earlierRoles.map((r) => (
                  <div key={r.role} className="earlier-row">
                    <span><strong>{r.role}</strong> — {r.company}</span>
                    <span className="year">{r.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="resume-aside">
          <div data-reveal className="panel panel--sage">
            <h3>Education</h3>
            <div className="education">
              {education.map((e) => (
                <div key={e.school}>
                  <div className="education-school">{e.school}</div>
                  <div className="education-meta">{e.meta}</div>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal className="panel panel--neutral">
            <h3>Skills</h3>
            <div className="row">
              {skills.map((s) => <span key={s.label} className={`tag ${s.cls}`}>{s.label}</span>)}
            </div>
          </div>
          <div data-reveal className="panel panel--terracotta">
            <h3>Interests</h3>
            <ul className="interests">
              {interests.map((i) => (
                <li key={i}><span className="bullet-dot" aria-hidden="true" />{i}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
