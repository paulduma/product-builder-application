// All portfolio copy and data lives here, so updating the site rarely means touching markup.

import productOsStructure from '../assets/product-os-structure.jpg';
import claudePluginSkills from '../assets/claude-plugin-skills.png';
import workspaceStructure from '../assets/workspace-structure.jpg';

// Toggles carried over from the design's editor props.
export const config = {
  animations: true, // scroll-reveal motion (always off under prefers-reduced-motion)
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

// — Home · My AI vision — one card each; `highlight` marks the one tailored to the company.
export const visionPoints = [
  {
    kicker: 'Personally',
    title: 'Learning by shipping',
    body: 'Cursor + Claude (paid plans) to build side products in my free time: a recipe app, a calendar assistant, and a backlog full of others (sommelier, sports coach…).',
  },
  {
    kicker: 'At work',
    title: 'An AI OS for a whole Product tribe',
    body: 'At Betclic, I turned my PM work into shared Claude skills, packaged them as a plugin, trained the team (even the least technical) and am now building agents on top.',
  },
  {
    kicker: 'What I explore',
    title: 'Agents that live where people work',
    body: 'Multi-agent setups, connecting AI to real tools (MCP), and moving from chat windows to assistants you reach from Teams or your phone.',
  },
  {
    kicker: 'For [Company]',
    title: 'A proactive sales funnel',
    body: "Where I think AI pays off most: assistants that surface the right lead, prep the next call, draft the follow-up and keep the CRM clean. Sales teams move from pull-based tools to the right action at the right time.",
    highlight: true,
  },
];

// — My AI OS —
// One step per stage of the journey, top to bottom. `status`: 'done' | 'progress' | 'future'.
// Drop an image in src/assets and set `image` (plus `imageAlt`) to replace a step's placeholder.
// Set `imageFit: 'contain'` to show the whole image at its own ratio instead of cropping it to the frame.

export const roadmapSteps = [
  {
    status: 'done',
    title: 'Turning my PM work into Claude skills',
    desc: "It started with Claude skills I could use every day: refining specs, replacing repetitive tasks (feature performance reviews, stakeholder updates, benchmarks..), building. I wanted to improve my productivity, but most importantly to be able to iterate fast, update these on the go while having access to my full context. The AI OS system seemed like the perfect solution",
    tags: ['Claude', 'Skills', 'Day-to-day ops'],
    image: productOsStructure,
    imageAlt: 'The product-os/ folder: .claude-plugin/ (plugin manifest), skills/ (the team skills), agents/ (agentic workflows using skills), tools/ (AI-generated tools & services), docs/ (team context, how-tos & guidelines) and templates/ (files to copy for each new project).',
    imageFit: 'contain',
  },
  {
    status: 'done',
    title: 'Sharing it with the Product tribe as a Claude plugin',
    desc: "Skills only matter if people use them. To get feedbacks faster, with differrent technical background, abilities and enthusiasm among the tribe, I have first embedded those skills into a Claude plugin that everyone was able to use with no code integration. PMs were able to review the skills and make it their own from the Claude dekstop interface.",
    tags: ['Plugin', 'Training', 'Product tribe'],
    illustration: 'Screenshot of Claude with the Product plugin installed and its skills listed',
    image: claudePluginSkills,
    imageAlt: "Claude desktop's skill menu, listing the Identity product operations plugin skills (betclic-mobile-prototype, data-query, identity-sprint-report, jira-backlog-audit, jira-user-story) with the sprint report skill's description shown.",
    imageFit: 'contain',
  },
  {
    status: 'done',
    title: 'Driving adoption to the real repo',
    desc: 'Next, I pushed the team into actually forking the Product OS and run it contributing to it. I wrote how-tos and documentation, and animated recurring demo sessions for the tribe to share progress and get their hands on to the solution. The plugin now has many contribution from the most active PMs and most AI-enthusiastic ones.',
    tags: ['Fork', 'Documentation', 'MCP connectors'],
    illustration: 'Screenshot of the AI OS folder structure (skills, docs, connectors)',
    image: workspaceStructure,
    imageAlt: 'The Desktop/My_Projects/ workspace: product-os/ (the skills, tools & workflows), prod_repos/ (read-only access to the tribe repositories, for context) and Projects/ (analysis, prototypes), with a claude-pm alias that launches Claude from a prototype with access to both folders.',
    imageFit: 'contain',
  },
  {
    status: 'progress',
    title: 'Building agents: the Product Forge',
    desc: "With a strong set up and a first set up of useful skills, the next natural steps was starting to build agentic workflows. The first natural step for Product Managers, widely documented among this community, is the creation of a Product Forge: which takes all the skills we're using for the different steps of our discoveries and delivery tracking and organizes it into a structured end-to-end workflow. The tribe's best practices get combined instead of staying in separate repos.",
    tags: ['Agents', 'Multi-agent', 'Product Forge'],
    illustration: 'A forge where skill cards from several PMs are melted into a few small agent characters working side by side',
  },
  {
    status: 'future',
    target: true,
    title: 'An AI OS you can reach from Teams, even on mobile',
    desc: "At a recent internal hackathon, I built a prototype where the AI OS was running directly inside Microsoft Teams, for a wider non-tech audience to be able to package skills they're using and call them without even being at their desk. That's where it's heading: a Product OS that's always within reach.",
    tags: ['Hackathon', 'Microsoft Teams', 'Mobile'],
    illustration: 'A phone showing a Teams chat with the agent replying with a finished doc',
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
  { label: 'Side Projects', text: 'Building AI-first PWAs (sports planner via LLM API + Google Calendar, Recipe planner with Supabase..), exploring how to move from simple chatbots to proactive AI-first products' },
];
