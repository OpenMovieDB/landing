# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Landing page for **Open Movie API** (openmovieapi.dev) — a movie/TV database API aggregating data from KinoPoisk, IMDB, TMDB, TVDB, Rotten Tomatoes, and JustWatch. Single-page static marketing site built with Astro and React islands for interactive elements.

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Static build to dist/
npm run preview   # Preview production build
```

## Tech Stack

- **Astro 5** (static output) with TypeScript (strict mode)
- **React 18** — only for interactive islands (framer-motion animations)
- **Framer Motion** — parallax scrolling, scroll-linked animations, animated counters (loaded lazily via `client:visible`)
- **PostCSS** — postcss-import, postcss-nested, autoprefixer, cssnano
- **Yandex Metrika** (inline script) + sitemap via `@astrojs/sitemap`
- Custom font: **PP Neue Machina** (Inktrap + Plain, woff2 only, from `/public/fonts/`)

## Architecture

Single page (`src/pages/index.astro`) composed of landing sections:
`BackgroundNoise → BackgroundScene (video bg) → Header → Hero → Stats → ExampleSection → Tariffs → Support → FreeCTA → Footer`

### Islands Architecture

Most components are **zero-JS Astro components** (`.astro` files). Only scroll-dependent animations use React islands with `client:visible`:

- `src/components/interactive/StatsSection.tsx` — parallax stats slides (desktop only, hidden below 1024px)
- `src/components/interactive/ScrollingText.tsx` — horizontal scrolling title text
- `src/components/interactive/ScrollingSlider.tsx` — horizontal slider for movie info rows
- `src/components/interactive/Connectors.tsx` — scroll-animated SVG path connectors
- `src/components/interactive/AnimatedCounter.tsx` — number animation on viewport entry

### CSS Organization

Layered CSS architecture in `src/styles/` imported via `main.css`:
- `base/` — variables.css (design tokens as CSS custom properties), reset.css, typography.css (@font-face), animations.css (@keyframes)
- `layout/` — container.css, header.css, footer.css
- `components/` — buttons.css (link-gradient, link-underline, link-opacity), cards.css (section-title, section-body)
- `sections/` — hero.css, stats.css, example.css (sources, circles, connectors, movie info), tariffs.css, support.css, free.css, background.css

### Data

- `src/data/movie.ts` — hardcoded movie demo data, source icons, types (Movie, Source, Actor, Award)
- All content is in Russian, hardcoded in components (no i18n)

### Key Patterns

- Path aliases: `@/*` → `src/*`, `@components/*`, `@layouts/*`, `@styles/*`
- Design tokens in CSS custom properties (`--color-primary`, `--font-primary`, `--gradient-*`)
- SVG circles use `<animateTransform>` for rotation (no JS needed)
- postcss-nested enables nesting media queries inside selectors
