# Dance Ready Project — danceready.org

Next.js 14 (App Router) + TypeScript + Tailwind. Statically generated for SEO and AI-crawler readability.

## Stack

- Next.js 14 (App Router, SSG)
- TypeScript, React 18
- Tailwind CSS + ported design tokens from `_design/danceready-final.html`
- `next/font/google`: Cormorant Garamond (display) + DM Sans (body)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes pre-rendered)
npm run start
```

## Pages

`/` · `/assessment` · `/dansebridge` · `/education` · `/events` · `/about` · `/affiliates` · `/contact`

## SEO / Crawler files

- `app/sitemap.ts` → `/sitemap.xml`
- `app/robots.ts` → `/robots.txt`
- `public/llms.txt` (AI crawler discovery)

Every page renders its primary content in raw HTML on first load — no client-side rendering for headlines, body copy, or CTAs.

## Deferred (post-v1)

- Sanity CMS + `/blog`
- New Zenler newsletter form wiring
- Course detail pages

## Reference assets

`_design/` contains the source-of-truth HTML mock (`danceready-final.html`), the URL inventory, and an alternate "Kinetic Lab" design system that we are **not** using.

## Project conventions

See `CLAUDE.md` at the repo root.
