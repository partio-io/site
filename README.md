# partio marketing website

Marketing site for [partio](https://github.com/ArvosAI/partio) — an open-source CLI that captures AI agent sessions alongside Git commits, so you always know _why_ every line was written.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Prerequisites

- Node.js 18+
- npm

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for production

```bash
npm run build
npm start
```

## Project structure

```
site/
├── public/                  # Static assets (logo SVG)
├── src/
│   ├── app/                 # Next.js App Router (layout + single page)
│   │   ├── favicon.ico
│   │   ├── globals.css      # Tailwind imports & CSS custom properties
│   │   ├── layout.tsx       # Root layout (fonts, metadata)
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Hero, Features, HowItWorks, CliDemo, OpenSource
│   │   └── ui/              # Button, Badge, Terminal, FeatureCard
│   └── lib/
│       └── utils.ts         # Utilities (cn class-merge helper)
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Available scripts

| Script          | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start dev server             |
| `npm run build` | Production build             |
| `npm start`     | Serve production build       |
| `npm run lint`  | Run ESLint                   |

## Styling

The site uses Tailwind CSS v4 with a dark-only theme defined via CSS custom properties in `src/app/globals.css`. Key color tokens:

- `--background`, `--foreground` — base colors
- `--accent`, `--accent-light`, `--accent-dark` — indigo brand accent
- `--surface`, `--surface-light` — card/section backgrounds
- `--border`, `--muted` — borders and secondary text
- `--success`, `--warning` — status colors

Fonts are Inter (sans) and JetBrains Mono (mono), loaded via `next/font/google`.

## Related projects

- [partio CLI](https://github.com/ArvosAI/partio) — the core CLI tool
- [partio docs](https://docs.partio.io) — documentation site

## License

MIT
