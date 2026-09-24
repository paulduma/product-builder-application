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

// — Resume —

export const resume = {
  title: 'Product Manager — AI & Data',
  subtitle: 'Product Builder (PM/PO)',
  location: 'Bordeaux, France',
  about: 'Product Manager with 5+ years across product & strategy roles in tech scale-ups and regulated industries. Passionate about AI, I turn ambitious visions into shipped products, and build AI-first tools and agents that help sales, ops and product teams work faster.',
};

// Each role can hold several phases (e.g. a promotion within the same company).
export const experience = [
  {
    role: 'Data Product Owner → Product Manager', company: 'Betclic', location: 'Bordeaux', dates: '2023 – present',
    dot: 'var(--color-accent)',
    phases: [
      {
        title: 'Product Manager, Identity', dates: '2026',
        intro: 'Promoted to Product Manager: driving 3 squads (Data, Back, Front) with designers, aligned with directors via dedicated routines.',
        metrics: [
          { v: '3', l: 'squads' },
          { v: '~½', l: 'sign-up journey length' },
        ],
        bullets: [
          'Reshaping the sign-up funnel with external bank-provider integrations: journey cut by ~half, higher verified-account conversion.',
          'Own the customer lifecycle (account creation, AML & fraud screening, personal details) incl. an account-linking strategy (business rules + AI).',
          'Shipped an internal AI product-OS (Claude skills & prompts, agents, workflows) to boost productivity of all PMs, and ran training sessions to drive adoption.',
        ],
      },
      {
        title: 'Data Product Owner, Responsible Gaming', dates: '2023 – 2026',
        intro: 'Led a 7-person Data & AI squad (analysts, scientists, engineers) for Responsible Gaming.',
        metrics: [
          { v: '3×', l: 'review volume & accuracy' },
          { v: '+25%', l: 'ops productivity' },
          { v: '7', l: 'person Data & AI squad' },
        ],
        bullets: [
          'Defined the product vision, strategy and OKR-aligned roadmap to protect players and meet regulatory requirements.',
          'Shipped an end-to-end detection system (ML models + LLMs) on millions of transactions, owning model evaluation: 3× review volume and accuracy.',
          'Partnered with a 50-person Operations team (scaled from 20): shipped an internal back-office and automated manual workflows (+25% productivity).',
          'Set up delivery rituals from scratch, and custom dashboards to measure impact and iterate on data-driven insights.',
        ],
      },
    ],
  },
  {
    role: 'Strategic Projects Manager', company: 'Cubyn', location: 'Paris', dates: '2021 – 2023',
    dot: 'var(--color-accent-2)',
    phases: [
      {
        intro: 'Shaped the Product & Sales strategy of a Next40 logistics scale-up, working closely with all C-levels.',
        metrics: [
          { v: '€15M', l: 'Series E supported' },
          { v: '0', l: 'negative-margin clients' },
        ],
        bullets: [
          'Combined market & competitor analysis, user research and Sales win/loss feedback to prioritize target verticals and the product roadmap.',
          'Built a live pricing simulator for the Sales team: input client data during sales calls and adjust negotiation margins in real time, for stronger offers.',
          'Bridged Sales & Product: structured field feedback into a prioritized backlog, and defined company OKRs (2022, 2023) with the CPO & COO.',
          'Redesigned the pricing strategy (per-client P&L, item-level pricing): zero negative-margin clients; supported a €15M Series E (incl. €9M refinancing).',
        ],
      },
    ],
  },
  {
    role: 'Financial Auditor · Innovation Consultant', company: 'EY · In Extenso', location: 'Paris & Bordeaux', dates: '2021 & 2020',
    dot: 'var(--color-neutral-400)',
    phases: [
      {
        intro: 'Gained cross-functional expertise in corporate & innovation funding with internships:',
        metrics: [],
        bullets: [
          'Audited financial statements of large French companies, assessed financial and operational risks.',
          'Advised early-stage tech startups on product strategy, funding research efforts (CIR, CII, JEI…), and preparing innovation contests.',
        ],
      },
    ],
  },
];

export const education = [
  { school: 'École Centrale de Lyon', meta: 'Intrapreneurship & Business Development · 2017–2021' },
  { school: 'Lycée Stanislas, Paris', meta: 'Preparatory Classes (MP) · 2015–2017' },
  { school: 'Lycée St-Genès, Bordeaux', meta: 'Bac S (TB) · 2015' },
];

export const languages = 'French & English, fully fluent (written & spoken)';

export const skillGroups = [
  { label: 'AI & building', cls: 'tag-accent', items: ['LLMs', 'Prompt design', 'AI agents', 'MCP connectors', 'RAG', 'Claude Code', 'Cursor', 'Vercel', 'Supabase'] },
  { label: 'Data', cls: 'tag-accent-2', items: ['SQL', 'Python', 'Tableau', 'Metabase', 'Amplitude'] },
  { label: 'Product', cls: 'tag-neutral', items: ['Roadmap & prioritization', 'OKRs', 'Discovery', 'Linear', 'Notion'] },
];

export const skillsNote = 'Curious and keen on learning, I regularly take new certifications — more on my LinkedIn.';

export const interests = [
  { label: 'Sports', text: 'Rugby in competition (20+ years), Trail' },
  { label: 'Side Projects', text: 'Building AI-first PWAs (sports planner via LLM API + Google Calendar, recipe planner, RAG-based CV generator), exploring how to move from simple chatbots to proactive AI-first products' },
];
