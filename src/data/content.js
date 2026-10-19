// All portfolio copy and data lives here, so updating the site rarely means touching markup.

// Toggles carried over from the design's editor props.
export const config = {
  animations: true, // scroll-reveal motion (always off under prefers-reduced-motion)
  showTimeline: true, // career path chips on the home page
};

export const contact = {
  email: 'paul.dumas9@gmail.com',
  phone: '07 77 34 84 90',
  linkedin: 'https://www.linkedin.com/in/paul-dumas-b0b9b814b/',
  github: 'https://github.com/paulduma',
};

export const pages = [
  { key: 'home', label: 'Home' },
  { key: 'roadmap', label: 'My AI OS' },
  { key: 'resume', label: 'Resume' },
  { key: 'contact', label: 'Contact', inNav: false }, // reached via the "Get in touch" button
];

export const pathSteps = [
  { label: 'Prépa', cls: 'tag-neutral' },
  { label: 'Centrale Lyon', cls: 'tag-neutral' },
  { label: 'Cubyn / HelloFresh', cls: 'tag-accent-2' },
  { label: 'Betclic · Data PM', cls: 'tag-accent' },
  { label: 'Betclic · PM Acquisition & KYC', cls: 'tag-accent' },
];

// — My AI OS —
// One step per stage of the journey, top to bottom. `status`: 'done' | 'progress'.
// Drop an image in src/assets and set `image` (plus `imageAlt`) to replace a step's placeholder.

export const roadmapSteps = [
  {
    status: 'done',
    title: 'Turning my PM work into Claude skills',
    desc: 'It started with me: I wrote reusable Claude skills for the work I repeat every week — specs, Linear tickets, weekly reviews, stakeholder updates, benchmarks. Each skill encodes how I actually work, so the output is consistent from one run to the next.',
    tags: ['Claude', 'Skills', 'Prompts'],
    illustration: 'Paul at a workbench, turning sticky notes into neat little skill cards',
  },
  {
    status: 'done',
    title: 'Sharing it with the Product tribe — and training them',
    desc: 'Skills only matter if people use them. I presented the setup to the Product tribe and ran training sessions so every PM could pick it up in their own workflows.',
    tags: ['Adoption', 'Training', 'Product tribe'],
    illustration: 'Paul in front of a small group of PMs, a big skill card on the whiteboard',
  },
  {
    status: 'done',
    title: 'Packaged as a plugin, shared through Git',
    desc: 'To make it easy to install and to keep everyone up to date, I bundled the skills into a plugin, versioned in Git. One install, and every improvement reaches the whole team.',
    tags: ['Plugin', 'Git', 'Versioning'],
    illustration: 'A gift box labelled "plugin" travelling along a Git branch to several laptops',
  },
  {
    status: 'done',
    title: 'A real Product OS, in Claude Code & the terminal',
    desc: 'Next, I turned the plugin into a proper Product OS: the same skills now run in Claude Code and straight from the terminal, connected to our tools (Linear, Notion) — not just in a chat window.',
    tags: ['Claude Code', 'Terminal', 'MCP connectors'],
    illustration: 'A friendly terminal window with a Product OS logo, plugged into Linear and Notion',
  },
  {
    status: 'done',
    title: 'Frameworks: several skills, chained end to end',
    desc: 'Then came frameworks — tools that run several skills one after the other. From a two-line feature idea to a written spec, a functional summary and ready-to-use Linear tickets, with a check-in at each step.',
    tags: ['Frameworks', 'Workflows', 'Linear'],
    illustration: 'Skill cards clicking together like train carriages, from "idea" to "tickets"',
  },
  {
    status: 'progress',
    target: true,
    title: 'An autonomous agent you can talk to on Teams',
    desc: 'The real target: an autonomous agent my colleagues can simply message on Microsoft Teams. It picks the right skills and frameworks on its own and comes back with the work done — moving from pull-based tools to a proactive assistant.',
    tags: ['Agents', 'Microsoft Teams', 'Autonomy'],
    illustration: 'A friendly agent character popping out of a Teams chat bubble, handing over a finished doc',
  },
];

// Smaller builds that sit alongside the main journey.
// Each one opens `#/build/<key>`. Every page uses the same template (`sideBuildSections`).
// To write one up, add `sections` on that build — same shape, with a `body` on each.
// A section with an empty body keeps its placeholder. Drop an image in src/assets and set
// `image` (plus `imageAlt`) to replace the illustration placeholder.
export const sideBuildSections = [
  { title: 'Why I built it', hint: 'The friction this removes, in a few sentences.' },
  { title: 'How it works', hint: 'The path from a plain-language request to the result.' },
  { title: 'What I built', hint: 'The pieces: skills, connectors, and where it runs.' },
  { title: "What's next", hint: 'What is already shipped, and what is still open.' },
];

export const sideBuilds = [
  {
    key: 'calendar-assistant',
    title: 'Calendar assistant',
    desc: 'Updates my Google Agenda on request, in plain language.',
    status: 'done',
    tags: ['Claude', 'MCP connectors', 'Google Calendar'],
    illustration: 'A calendar page rewriting itself from one short sentence',
  },
  {
    key: 'portfolio-chatbot',
    title: 'Portfolio & interview chatbot',
    desc: 'Answers recruiters’ questions about my background, grounded in my resume.',
    status: 'done',
    tags: ['Claude', 'Prompts', 'RAG'],
    illustration: 'A small chatbot answering questions from a resume, sitting on a desk',
  },
  {
    key: 'recipe-planner',
    title: 'Recipe planning platform',
    desc: 'Weekly meal plans with automatic shopping-list generation.',
    status: 'progress',
    tags: ['Cursor', 'Claude', 'React'],
    illustration: 'A weekly meal grid turning into a shopping list on the fridge',
  },
  {
    key: 'output-evals',
    title: 'Output evaluation & prompt versioning',
    desc: 'Test sets and scoring so every prompt change is measured, not guessed.',
    status: 'progress',
    tags: ['Evals', 'Prompts', 'Python'],
    illustration: 'Prompt cards on a shelf, each with a score, the newest one highlighted',
  },
];

// — Resume —

export const resume = {
  title: 'Product Builder',
  subtitle: 'AI & Data',
  location: 'Bordeaux, France',
  about: 'Product Manager with 5+ years experience across product & strategy roles in tech scale-ups and regulated industries. Passionate about AI, I thrive on turning ambitious visions into concrete solutions and building AI-first tools.I love the 0 to 1 energy, building things from scratch and pushing beyond my scope.',
};

// Each role can hold several phases (e.g. a promotion within the same company).
export const experience = [
  {
    role: 'Product Builder', company: 'Betclic', location: 'Bordeaux', dates: '2023 – present',
    dot: 'var(--color-accent)',
    phases: [
      {
        title: 'Product Manager, Account Management',
        intro: 'Leading transverse topics around Identity verification and Account Management.',
        metrics: [
          { v: '', l: 'Bridging the gap between Product, Operations, Acquisition and Compliance teams' },
        ],
        bullets: [
          'Currently reshaping the full registration funnel, to increase the Verified accounts Conversion using integration with banks and other external providers.',
          'Owned the full customer lifecycle, providing a clear audit trail of main events from account creation, to KYC validation and AML or fraud screening.',
          'Shipped an internal AI product-os (mixing Claude skills, agentic workflows and tools) to boost productivity of all PMs, and ran training sessions to drive adoption.',
        ],
      },
      {
        title: 'Data Product Owner, Responsible Gaming',
        intro: 'Led a 7 people Data & AI squad, for the Responsible Gaming Strategy & Operations.',
        metrics: [
          { v: '3×', l: 'Volume' },
          { v: '3×', l: 'Accuracy' },
          { v: '+25%', l: 'Ops productivity' },
        ],
        bullets: [
          'Built the data product vision and strategy, to protect players and meet regulatory requirements.',
          'Delivered a full detection system, shipping ML & LLMs to analyze millions of transactions. Multiplied volume of reviews as well as accuracy by 3.',
          'Worked closely with Ops teams (50 people) on an internal back-office with automated actions (+25% productivity), and on evaluating AI alerts.',
          'Delivered continuous data-driven insights and tools to track performance.',
        ],
      },
    ],
  },
  {
    role: 'Strategic Projects Manager', company: 'Cubyn', location: 'Paris', dates: '2021 – 2023',
    dot: 'var(--color-accent-2)',
    phases: [
      {
        intro: 'Contributed to shaping the Product & Business strategy for a Next40 company, working closely with all C-levels.',
        metrics: [
          { v: '€9M', l: 'funding secured' },
        ],
        bullets: [
          'Identified key market segments and opportunities with quantitative analysis and user research, to build the product roadmap and the OKRs.',
          'Built a live pricing simulator for the Sales team, to negotiate margins in real time. Also contributed to building tailored offers and winning deals.',
          'Bridged the gap between Sales & Product to prioritize key features by impact, and track Sales Operations metrics.',
          'Redesigned the whole pricing strategy to meet margin goals, and translated it on financial budget & forecasts, supporting a Series D fundraising (15M).',
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
