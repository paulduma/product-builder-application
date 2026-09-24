import { useEffect, useRef, useState } from 'react';
import { contact } from '../data/content.js';
import Placeholder from '../components/Placeholder.jsx';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from '../components/Icons.jsx';

const cards = [
  { key: 'email', label: 'Email', value: contact.email, Icon: MailIcon, iconBg: 'var(--color-accent-200)', iconFg: 'var(--color-accent-800)' },
  { key: 'phone', label: 'Phone', value: contact.phone, Icon: PhoneIcon, iconBg: 'var(--color-accent-2-200)', iconFg: 'var(--color-accent-2-800)' },
  { key: 'linkedin', label: 'LinkedIn', value: contact.linkedin, Icon: LinkedinIcon, iconBg: 'var(--color-accent-100)', iconFg: 'var(--color-accent-800)' },
  { key: 'github', label: 'GitHub', value: contact.github, Icon: GithubIcon, iconBg: 'var(--color-accent-2-100)', iconFg: 'var(--color-accent-2-800)' },
];

export default function Contact() {
  const [copied, setCopied] = useState(null);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = (key, text) => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(key);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(null), 1600);
  };

  return (
    <section className="contact" data-screen-label="Contact">
      <div data-reveal>
        <div className="avatar">
          <div className="blob" style={{ width: 60, background: 'var(--color-accent-2-300)', right: -14, top: -6 }} />
          <Placeholder>[Profile photo placeholder]</Placeholder>
        </div>
        <h1>Let's talk product, AI, or rugby.</h1>
        <p className="contact-lede">I usually reply within a day. Click any card to copy.</p>
      </div>
      <div className="contact-list">
        {cards.map(({ key, label, value, Icon, iconBg, iconFg }) => (
          <button key={key} type="button" data-reveal className="contact-card" onClick={() => copy(key, value)}>
            <span className="contact-icon" style={{ background: iconBg, color: iconFg }}><Icon size={20} /></span>
            <span className="contact-text">
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
            </span>
            <span className={`tag ${copied === key ? 'tag-accent-2' : 'tag-outline'}`} aria-live="polite">
              {copied === key ? 'Copied!' : 'Copy'}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
