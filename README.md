# Paul Dumas — Portfolio

React + Vite implementation of the "Paul Dumas Portfolio" Claude Design project, built on the **Organic** design system.

```bash
npm install
npm run dev      # local dev server
npm run build    # static build in dist/
```

## Where things live

- `src/data/content.js` — all copy, roadmap items, experience, skills, contact details and feature toggles (`config`).
- `src/styles/organic.css` — the Organic design-system stylesheet (tokens + component classes), copied verbatim. Retune the look here.
- `src/styles/app.css` — page-level layout, built only from Organic tokens.
- `src/pages/` — Home, AI Roadmap, Resume, Contact. Pages are hash-routed (`#/roadmap`, `#/resume`, `#/contact`).

## Still placeholder

Illustrations and profile photo (dashed frames), LinkedIn/GitHub URLs, the recipe app / demo links, the resume PDF, and the three bullets for the current Betclic role.
