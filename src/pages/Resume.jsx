import {
  contact, education, experience, interests, languages, resume, skillGroups, skillsNote,
} from '../data/content.js';
import { DownloadIcon } from '../components/Icons.jsx';
import { noop } from '../nav.js';

function Phase({ phase }) {
  return (
    <div className="phase">
      {phase.title && (
        <div className="phase-head">
          <h4>{phase.title}</h4>
          <span className="experience-dates">{phase.dates}</span>
        </div>
      )}
      <p className="phase-intro">{phase.intro}</p>
      {phase.metrics.length > 0 && (
        <div className="metrics">
          {phase.metrics.map((m) => (
            <div key={m.l} className="metric">
              <span className="metric-value">{m.v}</span>
              <span className="metric-label">{m.l}</span>
            </div>
          ))}
        </div>
      )}
      <ul className="bullets">
        {phase.bullets.map((b) => (
          <li key={b}><span className="bullet-dot" aria-hidden="true" /><span>{b}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default function Resume() {
  return (
    <section className="page" data-screen-label="Resume">
      <div data-reveal className="resume-head">
        <div>
          <span className="eyebrow">Resume</span>
          <h1 className="page-title">Paul Dumas</h1>
          <p className="resume-sub">{resume.title} <span className="resume-sub-alt">| {resume.subtitle}</span></p>
          <p className="resume-contact">{contact.phone} · {contact.email} · {resume.location}</p>
        </div>
        <a href="#" className="btn btn-primary btn-download" onClick={noop}>
          <DownloadIcon size={18} />
          Download PDF
        </a>
      </div>

      <div data-reveal className="about">
        <span className="eyebrow eyebrow--sage">About me</span>
        <p>{resume.about}</p>
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
                  {x.phases.map((p) => <Phase key={p.intro} phase={p} />)}
                </article>
              </div>
            ))}
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
            <div className="skill-groups">
              <div>
                <div className="skill-label">Languages</div>
                <div className="skill-text">{languages}</div>
              </div>
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <div className="skill-label">{g.label}</div>
                  <div className="row">
                    {g.items.map((s) => <span key={s} className={`tag ${g.cls}`}>{s}</span>)}
                  </div>
                </div>
              ))}
              <p className="skill-note">{skillsNote}</p>
            </div>
          </div>
          <div data-reveal className="panel panel--terracotta">
            <h3>Other interests</h3>
            <ul className="interests">
              {interests.map((i) => (
                <li key={i.label}>
                  <span className="bullet-dot" aria-hidden="true" />
                  <span><strong>{i.label}</strong> — {i.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
