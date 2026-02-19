# CLAUDE.md — site/

Marketing website for partio, an open-source CLI that captures AI agent sessions alongside Git commits.

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion 12

## Commands

```bash
npm run dev    # Start dev server on localhost:3000
npm run build  # Production build
npm run lint   # Run ESLint
```

## Architecture

- **App Router** — single-page app with `src/app/layout.tsx` (root layout) and `src/app/page.tsx` (home)
- **Components** are organized into three directories:
  - `src/components/layout/` — Navbar, Footer
  - `src/components/sections/` — Hero, Features, HowItWorks, CliDemo, OpenSource
  - `src/components/ui/` — reusable primitives (Button, Badge, Terminal, FeatureCard)
- **Lib** — `src/lib/utils.ts` contains the `cn()` class-merge helper (clsx)
- **Path alias** — `@/*` maps to `./src/*`

## Conventions

- **Client components** — section components, Navbar, FeatureCard, and Terminal use `"use client"` because they depend on Framer Motion. The root layout, Footer, Badge, and Button are server components.
- **Styling** — Tailwind CSS v4 utility classes only. Theme colors are defined as CSS custom properties in `src/app/globals.css` and registered via `@theme inline`. Use the semantic tokens (e.g. `bg-background`, `text-accent`, `border-border`) rather than raw hex values.
- **Animations** — Framer Motion with `motion.div`, `useInView`, and staggered variants. Follow the existing animation patterns when adding new sections.
- **Class merging** — use `cn()` from `@/lib/utils` to merge Tailwind classes.
- **TypeScript** — interfaces are defined inline in component files, not in separate type files.
- **State** — no state management library. Use local `useState` where needed.
- **Static content** — all copy is hardcoded in component files. There is no CMS or content layer.
- **No API routes or server actions** — this is a purely static marketing site.
- **No environment variables** — none are currently used.

## External links

- Docs: https://docs.partio.io
- CLI repo: https://github.com/partio-io/cli
