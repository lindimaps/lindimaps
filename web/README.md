# LindiMaps — Web

Production website built with Next.js App Router, React, TypeScript and Sanity CMS.

## Development

```sh
npm ci
npm run dev
```

Validation:

```sh
npm run lint
npm run build
```

Vercel uses `web/` as the project root.

## Content

Published content is read server-side from Sanity project `oyagunrg`, dataset `production`, with a 60-second revalidation interval. `data/starter.json` is intentionally retained as the CMS fallback and import source.

## Public site

The main website is bilingual (SQ/EN), responsive and supports light/dark themes. Shared navigation, footer, branding and CMS content are implemented in `components/`, `lib/` and `app/`.

## Protected legacy systems

The following applications are intentionally preserved and served from `public/` without changing their internal logic:

- `/aktiviteteASIG`
- `/raportASIG`
- `/pagesat`
- `/pushimet`
- `/pyjetnezonatembrojtura`

Routing for these applications is defined in `next.config.ts`. They are not part of the public navigation and are excluded from search indexing through `app/robots.ts`.

## Sanity Studio

The Studio is maintained separately in the repository's `studio/` directory.
