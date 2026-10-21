// All portfolio copy and data lives here, so updating the site rarely means touching markup.

import productOsStructure from '../assets/product-os-structure.jpg';
import claudePluginSkills from '../assets/claude-plugin-skills.png';
import workspaceStructure from '../assets/workspace-structure.jpg';
import agentWorkflow from '../assets/agent-workflow.jpg';
import teamsAgentFlow from '../assets/teams-agent-flow.jpg';

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
    kicker: 'Access',
    title: 'AI where people already work',
    body: "Claude Code is great, but working in a terminal doesn't suit everyone. I'm drawn to building AI into the very tools people already use: mobile only (as in my recent hackathon), or a Teams or Slack thread, which fit my use cases even better than an AI embedded in a CRM.",
  },
  {
    kicker: 'Hyper-personalization',
    title: 'Not just human: sounding like you',
    body: "One of the biggest challenges: not only making it sound human, but making it sound like you, with your memory and your ways of working. Reusing someone else's setup rarely works, it just feels standard.",
  },
  {
    kicker: 'Autonomy',
    title: 'From agentic workflows to real workers',
    body: "My real target, and one every team could benefit from: agents you can hire and delegate to. They collect deals, prepare your meetings and summarise what happened, freeing your mental load because, in the end, you don't even have to ask. Next comes cross-collaboration: how could my agent tell a colleague's agent about an interesting call I just had?",
    highlight: true,
  },
  {
    kicker: 'Data',
    title: 'Structured data, everywhere',
    body: 'Whether on inbound or outbound, every interaction should be captured and structured so it can be reused. A hard challenge, and one my data experience can help solve.',
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
    desc: "I started with Claude skills I could use every day: refining specs, replacing repetitive tasks, communicating with stakeholders... But those skills were not easy to share with the team. So I created a dedicated space for them, with context about our team, our processes and our tools.",
    image: productOsStructure,
    imageAlt: 'The product-os/ folder: .claude-plugin/ (plugin manifest), skills/ (the team skills), agents/ (agentic workflows using skills), tools/ (AI-generated tools & services), docs/ (team context, how-tos & guidelines) and templates/ (files to copy for each new project).',
    imageFit: 'contain',
  },
  {
    status: 'done',
    title: 'Sharing it with the Product tribe as a Claude plugin',
    desc: "Skills only matter if people use them. And for some, such a repository is still a hard tech barrier slowing down adoption. To get feedbacks faster, I have embedded those skills into a Claude plugin that everyone can use. PMs were able to review the skills and make it their own from the Claude dekstop interface.",
    illustration: 'Screenshot of Claude with the Product plugin installed and its skills listed',
    image: claudePluginSkills,
    imageAlt: "Claude desktop's skill menu, listing the Identity product operations plugin skills (betclic-mobile-prototype, data-query, identity-sprint-report, jira-backlog-audit, jira-user-story) with the sprint report skill's description shown.",
    imageFit: 'contain',
  },
  {
    status: 'done',
    title: 'Driving adoption to the real repo',
    desc: 'Next, I pushed the team into actually forking the Product OS and contributing to it. I wrote how-tos and documentation, and animated recurring demo sessions for the tribe to share progress and get their hands on to the solution. The plugin now has many contribution from the most active PMs and most AI-enthusiastic ones. It can also be launched from actual prototypes, to work with the full context of the team repositories and documentation living in the claude session.',
    illustration: 'Screenshot of the AI OS folder structure (skills, docs, connectors)',
    image: workspaceStructure,
    imageAlt: 'The Desktop/My_Projects/ workspace: product-os/ (the skills, tools & workflows), prod_repos/ (read-only access to the tribe repositories, for context) and Projects/ (analysis, prototypes), with a claude-pm alias that launches Claude from a prototype with access to both folders.',
    imageFit: 'contain',
  },
  {
    status: 'progress',
    title: 'Building agents: the Product Forge',
    desc: "With a strong set up and a first set up of useful skills, the next natural steps was starting to build agentic workflows. We started with an agent taking all the skills we used for the different steps of our discoveries and delivery tracking to turn it into a structured end-to-end workflow.",
    illustration: 'A forge where skill cards from several PMs are melted into a few small agent characters working side by side',
    image: agentWorkflow,
    imageAlt: 'Agent workflow in four steps: 1. Frames the idea, 2. Challenges the solution, 3. Prepares the delivery, 4. Follows up delivery & plans the roll-out.',
    imageFit: 'contain',
  },
  {
    status: 'future',
    target: true,
    title: 'An AI OS you can reach from anywhere, anytime',
    desc: "At a recent internal hackathon, I built a prototype where the AI OS was running directly from Microsoft Teams, for a wider non-tech audience to be able to package skills they're using and call them without even being at their desk. That's where it's heading: a Product OS that's always within reach.",
    illustration: 'A phone showing a Teams chat with the agent replying with a finished doc',
    image: teamsAgentFlow,
    imageAlt: 'How it flows: the user asks a question or shares an idea, chats in Teams with the agent where the team already works, OpenAI agents process the request, and docs are written and updated in Obsidian.',
    imageFit: 'contain',
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
  about: 'Product Manager with 5+ years experience across product & strategy roles in tech scale-ups and regulated industries. I thrive on turning ambitious visions into concrete solutions and building AI-first tools. I love the 0 to 1 energy, building things from scratch and pushing beyond my scope.',
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
          { v: '', l: 'Bridging the gap between Product, Operations, Growth & Acquisition and Compliance teams' },
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
