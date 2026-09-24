// All portfolio copy and data lives here, so updating the site rarely means touching markup.

// Toggles carried over from the design's editor props.
export const config = {
  animations: true, // scroll-reveal motion (always off under prefers-reduced-motion)
  showTimeline: true, // career path chips on the home page
  showNextColumn: true, // "Next" column on the AI roadmap
};

export const contact = {
  email: 'paul.dumas9@gmail.com',
  phone: '07 77 34 84 90',
  linkedin: '[LinkedIn URL placeholder]',
  github: '[GitHub URL placeholder]',
};

export const pages = [
  { key: 'home', label: 'Home' },
  { key: 'roadmap', label: 'AI Roadmap' },
  { key: 'resume', label: 'Resume' },
  { key: 'contact', label: 'Contact' },
];

export const pathSteps = [
  { label: 'Prépa', cls: 'tag-neutral' },
  { label: 'Centrale Lyon', cls: 'tag-neutral' },
  { label: 'Cubyn / HelloFresh', cls: 'tag-accent-2' },
  { label: 'Betclic · Data PM', cls: 'tag-accent' },
  { label: 'Betclic · PM Acquisition & KYC', cls: 'tag-accent' },
];

export const roadmapColumns = [
  {
    key: 'done', title: 'Done', badge: 'Done', tagCls: 'tag-accent-2', dot: 'var(--color-accent-2)',
    items: [
      { title: 'Calendar assistant', desc: 'Updates my Google Agenda on request, in plain language.', tags: ['Claude', 'MCP connectors', 'Google Calendar'] },
      { title: 'Portfolio & interview chatbot', desc: 'Answers recruiters’ questions about my background, grounded in my resume.', tags: ['Claude', 'Prompts', 'RAG'] },
      { title: 'Shared agent setup for colleagues', desc: 'A packaged set of agents my teammates use in their daily workflows.', tags: ['Claude', 'MCP connectors', 'Docs'] },
    ],
  },
  {
    key: 'progress', title: 'In progress', badge: 'In progress', tagCls: 'tag-accent', dot: 'var(--color-accent)',
    items: [
      { title: 'Recipe planning platform', desc: 'Weekly meal plans with automatic shopping-list generation.', tags: ['Cursor', 'Claude', 'React'] },
      { title: 'Output evaluation & prompt versioning', desc: 'Test sets and scoring so every prompt change is measured, not guessed.', tags: ['Evals', 'Prompts', 'Python'] },
    ],
  },
  {
    key: 'next', title: 'Next', badge: 'Next', tagCls: 'tag-neutral', dot: 'var(--color-neutral-500)',
    items: [
      { title: 'Proactive daily brief', desc: 'An assistant that surfaces the right action at the right time — before I ask.', tags: ['Agents', 'Scheduling', 'Placeholder'] },
    ],
  },
];

export const experience = [
  {
    role: 'Product Manager, Acquisition & KYC', company: 'Betclic', location: 'Bordeaux', dates: '2025 – present',
    dot: 'var(--color-accent)',
    metrics: [],
    bullets: [
      '[Placeholder] Own the acquisition & KYC funnel end-to-end, from sign-up to verified account.',
      '[Placeholder] Impact bullet with a key metric.',
      '[Placeholder] Impact bullet on cross-team delivery.',
    ],
  },
  {
    role: 'Data Product Manager, Responsible Gaming', company: 'Betclic', location: 'Bordeaux', dates: '2023 – 2025',
    dot: 'var(--color-accent)',
    metrics: [
      { v: '3×', l: 'cases & accuracy vs 2023' },
      { v: '7', l: 'person data squad' },
      { v: 'All', l: 'operating countries' },
    ],
    bullets: [
      'Led a 7-person data squad (analysts, scientists, engineers); built product vision & data strategy aligned with OKRs.',
      'Shipped an end-to-end detection & protection system for at-risk players — ML models + rule-based alerts in an in-house backoffice.',
      'Automated actions and user-facing features, deployed in all operating countries.',
    ],
  },
  {
    role: 'Strategic Projects Manager', company: 'Cubyn', location: 'Paris', dates: '2021 – 2023',
    dot: 'var(--color-accent-2)',
    metrics: [
      { v: '€9M', l: 'fundraise supported' },
      { v: 'Next40', l: 'scale-up' },
    ],
    bullets: [
      'Product & business strategy with C-levels; market segmentation & user research feeding the roadmap.',
      'Bridge between Sales & Product; redesigned pricing to meet margin goals, supporting a €9M fundraise.',
      'Led internal comms: OKRs, roadmap, All-Hands.',
    ],
  },
];

export const earlierRoles = [
  { role: 'Financial Auditor', company: 'EY', year: '2021' },
  { role: 'Innovation Consultant', company: 'In Extenso', year: '2020' },
];

export const education = [
  { school: 'École Centrale de Lyon', meta: 'Engineering degree · 2017–2021' },
  { school: 'Prépa MP, Lycée Stanislas', meta: 'Maths & Physics · 2015–2017' },
];

export const skills = [
  ...['SQL', 'Python', 'Tableau', 'Metabase', 'Amplitude'].map((label) => ({ label, cls: 'tag-accent-2' })),
  ...['HTML/CSS', 'React', 'Node.js'].map((label) => ({ label, cls: 'tag-neutral' })),
  ...['Cursor', 'Claude', 'Lovable', 'Figma Make'].map((label) => ({ label, cls: 'tag-accent' })),
];

export const interests = [
  'French Tech & product culture',
  'AI side projects',
  'Competitive rugby, 20+ years',
  'Trail running',
];
