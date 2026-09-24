export const hrefFor = (key) => (key === 'home' ? '#/' : `#/${key}`);

// Placeholder links: keep them clickable in the layout without navigating anywhere.
export const noop = (e) => e.preventDefault();
