import {
  contact, education, experience, interests, resume,
} from '../data/content.js';
import { DownloadIcon } from '../components/Icons.jsx';
import cv from '../assets/CV_Paul_Dumas.pdf';

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
          {/* <p className="resume-contact">{contact.phone} · {contact.email} · {resume.location}</p> */}
        </div>
        <a href={cv} download="CV_Paul_Dumas.pdf" className="btn btn-primary btn-download">
          <DownloadIcon size={18} />
          Download PDF
        </a>
      </div>

      <div data-reveal className="about">
        <span className="eyebrow eyebrow--sage">About me</span>
        <p>{resume.about}</p>
      </div>

      <div className="resume-body">
        <section data-reveal className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div className="education">
            {education.map((e) => (
              <div key={e.school}>
                <div className="education-school">{e.school}</div>
                <div className="education-meta">{e.meta}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 data-reveal className="resume-section-title">Experience</h2>
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
        </section>

        <section data-reveal className="resume-section">
          <h2 className="resume-section-title">Other interests</h2>
          <ul className="interests">
            {interests.map((i) => (
              <li key={i.label}>
                <span className="bullet-dot" aria-hidden="true" />
                <span><strong>{i.label}</strong> — {i.text}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
