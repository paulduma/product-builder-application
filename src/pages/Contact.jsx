import { useEffect, useRef, useState } from 'react';
import { contact } from '../data/content.js';
import Placeholder from '../components/Placeholder.jsx';
import {
  CheckIcon, CopyIcon, ExternalLinkIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon,
} from '../components/Icons.jsx';

// Strip the scheme, "www." and trailing slash so the card shows e.g. "github.com/paulduma".
const shortUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

// `copy` cards put the value on the clipboard; `link` cards open the profile in a new tab.
const cards = [
  { key: 'email', label: 'Email', action: 'copy', value: contact.email, Icon: MailIcon, iconBg: 'var(--color-accent-200)', iconFg: 'var(--color-accent-800)' },
  { key: 'phone', label: 'Phone', action: 'copy', value: contact.phone, Icon: PhoneIcon, iconBg: 'var(--color-accent-2-200)', iconFg: 'var(--color-accent-2-800)' },
  { key: 'linkedin', label: 'LinkedIn', action: 'link', value: contact.linkedin, Icon: LinkedinIcon, iconBg: 'var(--color-accent-100)', iconFg: 'var(--color-accent-800)' },
  { key: 'github', label: 'GitHub', action: 'link', value: contact.github, Icon: GithubIcon, iconBg: 'var(--color-accent-2-100)', iconFg: 'var(--color-accent-2-800)' },
];

function CardBody({ label, text, Icon, iconBg, iconFg }) {
  return (
    <>
      <span className="contact-icon" style={{ background: iconBg, color: iconFg }}><Icon size={20} /></span>
      <span className="contact-text">
        <span className="contact-label">{label}</span>
        <span className="contact-value">{text}</span>
      </span>
    </>
  );
}

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

  const copiedCard = cards.find((c) => c.key === copied);

  return (
    <section className="contact" data-screen-label="Contact">
      <div data-reveal>
        <div className="avatar">
          <div className="blob" style={{ width: 60, background: 'var(--color-accent-2-300)', right: -14, top: -6 }} />
          <Placeholder>[Profile photo placeholder]</Placeholder>
        </div>
        <h1>Let's talk product, AI, or rugby.</h1>
        <p className="contact-lede">I usually reply within a day. Copy my email or phone, or open my profiles.</p>
      </div>
      <div className="contact-list">
        {cards.map((card) => (card.action === 'link' ? (
          <a key={card.key} href={card.value} target="_blank" rel="noopener noreferrer" data-reveal
            className="contact-card" aria-label={`Open my ${card.label} profile (new tab)`}>
            <CardBody {...card} text={shortUrl(card.value)} />
            <span className="contact-action" aria-hidden="true"><ExternalLinkIcon size={18} /></span>
          </a>
        ) : (
          <button key={card.key} type="button" data-reveal className="contact-card"
            onClick={() => copy(card.key, card.value)} aria-label={`Copy my ${card.label.toLowerCase()}: ${card.value}`}>
            <CardBody {...card} text={card.value} />
            <span className={`contact-action${copied === card.key ? ' is-done' : ''}`} aria-hidden="true">
              {copied === card.key ? <CheckIcon size={18} /> : <CopyIcon size={18} />}
            </span>
          </button>
        )))}
      </div>
      <p className="sr-only" aria-live="polite">{copiedCard ? `${copiedCard.label} copied` : ''}</p>
    </section>
  );
}
