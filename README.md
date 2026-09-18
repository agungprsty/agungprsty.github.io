# Welcome to my website portfolio

Check 👉 [PORTOFOLIO](https://agungprsty.github.io/)

## Stack

- Vite
- React 18
- TypeScript
- TailwindCSS v4
- React Router v7

## Requirement

- node (recommended >= 18)
- npm

## Installation

```bash
npm install
npm run dev
```

## Available Scripts

### `npm run dev`

Runs the app in development mode with Vite dev server (default port 5173).

### `npm run build`

Builds the app for production to the `build` folder, runs `tsc` for type
checking, and copies `index.html` to `404.html` so GitHub Pages SPA routing
(e.g. `/projects`) works on a hard refresh.

### `npm run preview`

Serves the production build locally for preview.

### `npm run lint`

Runs ESLint across the project.

### `npm run lint:fix`

Runs ESLint and auto-fixes issues.

### `npm run format`

Formats the codebase with Prettier.

### `npm run deploy`

Builds the app (`predeploy`) then publishes the `build` folder to the
`gh-pages` branch via the `gh-pages` package. GitHub Pages is configured to
serve from that branch.

- `public/agung-prasetyo-resume.pdf` — resume/CV yang diunduh lewat tombol "Download CV".

## Deployment to GitHub Pages

The site is hosted at `https://agungprsty.github.io/` and served from the
`gh-pages` branch. To deploy the latest version:

```bash
npm run deploy
```

The `gh-pages` branch is gitignored from the source tree and only exists as
the deployment output, so it can be safely overwritten on every deploy.

## Project Structure

```
src/
├── components/       # Header, Navbar, Footer, ProjectContainer, Projects, etc.
├── contexts/         # Theme (dark mode) context
├── pages/            # Home, Experience, ProjectDetail, NotFound
├── types/            # Portfolio type definitions
├── utils/            # Shared helpers (e.g. project meta)
├── App.tsx           # Routes & layout
├── index.css         # Tailwind entry + global styles
├── main.tsx          # App entry point
└── portfolio.ts      # Personal data & project content (single source of truth)
```

## Adding a Project

Add an entry to `src/portfolio.ts` following the `Project` interface defined
in `src/types/portfolio.ts`. The list page, detail page, and homepage render
dynamically from this data.

## Adding Experience

Add an entry to the `experience` array in `src/portfolio.ts` following the
`Experience` interface. The `/experience` page renders a timeline from this
data.

## Adding / Updating Skills

Skills are defined as a flat `string[]` in `src/portfolio.ts`. They are
rendered as badges in the Skills section on the homepage and on the
`/experience` page.

## Updating the CV

Replace `public/agung-prasetyo-resume.pdf` with your latest resume. The "Download
CV" button in the hero section links to it via the `resume` constant in
`src/portfolio.ts`.