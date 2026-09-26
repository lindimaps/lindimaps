# LindiMaps — Next.js

Run `npm ci` and `npm run dev` in `web/`. The Albanian homepage is `/`; English is `/en`.

## Sanity

Server-side queries read published `homePage`, `siteSettings`, `service`, and `project` documents from project `oyagunrg`, dataset `production`. Public identifiers have defaults; optional overrides are in `.env.example`. No write token is needed for the public dataset. Queries use the published perspective and revalidate every 60 seconds; a subsequent request triggers cache refresh. Publishing in Studio does not require a new deployment.

Create and **Publish** Home and Site settings, then Services and Projects in Studio. Fill both SQ and EN fields. Empty fields use the homepage defaults; empty collections show an honest empty state. Projects link to their Live URL when provided. If multiple Home/settings documents exist, the most recently updated published document is used. Fetch failures are logged on the server and fall back to base content.

## Validation

`npm run lint` and `npm run build`.

## Vercel

Import this repository using Next.js and set **Root Directory** to `web`. The standard build is `npm run build`; no custom output directory is required. First verify a preview deployment. The existing static site and GitHub Pages configuration remain at the repository root.

This is the first CMS-connected homepage. Other existing static pages, interactive maps, academy, publications, and internal tools have not yet been ported. Do not move the production domain until their migration and URL handling have been verified.
