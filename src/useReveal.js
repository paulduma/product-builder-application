import { useEffect } from 'react';

// Fades [data-reveal] elements up as they scroll into view. Re-runs whenever `key` changes
// (i.e. on page switch) so the new page's elements get armed.
export default function useReveal(key, enabled) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!enabled || reduced) return undefined;

    const els = [...document.querySelectorAll('[data-reveal]:not(.reveal-armed), .reveal-pending')];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('reveal-pending');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach((el) => {
      el.classList.add('reveal-armed', 'reveal-pending');
      io.observe(el);
    });
    return () => io.disconnect();
  }, [key, enabled]);
}
