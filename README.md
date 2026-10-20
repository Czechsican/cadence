# Cadence (cadence-mock)

A single-page React marketing site mock for **Cadence Leadership + Communication**, a leadership coaching practice that works with senior leaders on coaching, group courses, 360° assessments, and speaking engagements. The site is built as a static front end with Vite and React 19, and covers the full landing-page flow: navigation, hero, service overview, 360 process, testimonials, team, insights, and calls to action.

Content is hard-coded in the components. Images are loaded from Unsplash. Several sections still contain placeholder copy (for example, "Coach name" and "Senior Coach" in the team section).

## Tech stack

- [React](https://react.dev) 19
- [Vite](https://vite.dev) 8 for dev server and builds
- [Vitest](https://vitest.dev) with jsdom and Testing Library for tests
- ESLint 10 with React Hooks and React Refresh plugins
- CSS Modules for component styles, plus global `App.css`, `index.css`, and `reset.css`

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm (the repo includes a `package-lock.json`)

### Install

```bash
git clone https://github.com/Czechsican/cadence.git
cd cadence
npm install
```

### Run the dev server

```bash
npm run dev
```

Vite serves the site at `http://localhost:5173` by default and hot-reloads on changes.

## Scripts

| Command           | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot module replacement |
| `npm run build`   | Produce a production build in `dist/`                 |
| `npm run preview` | Serve the production build locally for a final check  |
| `npm run lint`    | Run ESLint across the project                         |
| `npm test`        | Run the Vitest suite once with verbose output         |

## Project structure

```
cadence/
├── index.html              # HTML entry point, mounts #root
├── public/                 # Static assets (favicon)
├── src/
│   ├── main.jsx            # React root, wrapped in StrictMode
│   ├── App.jsx             # Page layout and all section content
│   ├── App.css / index.css / reset.css
│   └── components/
│       ├── SiteNav/        # Top navigation with mobile burger menu
│       ├── HeroSection/    # Intro hero with eyebrow and CTAs
│       ├── StatCounter/    # Animated number counter and StatRow
│       ├── PageSection/    # Card-based section with corner tab
│       ├── Assessments/    # 360 process: banner, copy, and Step list
│       ├── Testimonials/   # Client quote block
│       ├── Band/           # Full-width call-to-action band (optional dark mode)
│       ├── FeatureSection/ # "About Cadence" feature block
│       ├── Card/           # Reusable card
│       ├── CornerTab/      # Small section label
│       ├── Button/         # ButtonLink / Button (primary and secondary styles)
│       ├── Footer/
├── vite.config.js          # Vite + React plugin, Vitest config (jsdom)
├── vitest.setup.js         # Testing Library matchers and cleanup
└── eslint.config.js
```

Most components are colocated with their CSS Modules and a `index.test.jsx` file with a Vitest snapshot in `__snapshots__/`.

## How the page is assembled

`App.jsx` defines the content for each section as plain objects and passes them to shared components:

- `PageSection` renders the service cards ("What We Do") and the team and insight grids. It takes a `cards` array, a `cornerTab` label, and optional CTA settings.
- `Band` renders the full-width callouts. Set `dark: true` for the dark variant.
- `FeatureSection`, `Testimonials`, `Assessments`, `StatRow`, `HeroSection`, `SiteNav`, and `Footer` render fixed content with their own props or hard-coded text.

To change copy or images, edit the objects in `App.jsx` or the relevant component.

## Testing

```bash
npm test
```

Tests use Vitest in a jsdom environment with `@testing-library/react` and `@testing-library/jest-dom`. Each component test renders the component and checks it against a stored snapshot. After an intentional markup change, update the snapshots with `npx vitest --run -u`.

## Notes and known issues

- **Placeholder content:** the team cards read "Coach name" and "Senior Coach", and the slider data in `App.jsx` is sample content.

## License

No license file is included. Add one before publishing or accepting outside contributions.
