# LindiMaps — Next.js

Run `npm ci` and `npm run dev` in `web/`. The Albanian homepage is `/`; English is `/en`.

## Sanity

Server-side queries read published `homePage`, `siteSettings`, `service`, and `project` documents from project `oyagunrg`, dataset `production`. Public identifiers have defaults; optional overrides are in `.env.example`. No write token is needed for the public dataset. Queries use the published perspective and revalidate every 60 seconds; a subsequent request triggers cache refresh. Publishing in Studio does not require a new deployment.

Create and **Publish** Home and Site settings, then Services and Projects in Studio. Fill both SQ and EN fields. Empty fields use the homepage defaults; empty collections show an honest empty state. Projects link to their Live URL when provided. If multiple Home/settings documents exist, the most recently updated published document is used. Fetch failures are logged on the server and fall back to base content.

## Validation

`npm run lint` and `npm run build`.

## Vercel

Import this repository using Next.js and set **Root Directory** to `web`. The standard build is `npm run build`; no custom output directory is required. First verify a preview deployment. The existing static site and GitHub Pages configuration remain at the repository root.

The homepage and core service, project, about and contact pages are connected to CMS. See the migration status below before moving the production domain.

## Content migration — phase 2

The original six services, three projects, bilingual profile, history and values are preserved in `data/starter.json`. Existing public URLs are kept: `/sq/sherbime`, `/sq/projekte`, `/sq/rreth_nesh`, `/sq/kontakte` and their English counterparts. Header and footer are shared; language switching opens the equivalent page.

Before the first import, the original content is shown locally as starter content. Once Site settings exist, collections are controlled entirely by Sanity unless **Use starter content** is enabled. A failed CMS request falls back to the saved original content. Uploaded images take precedence over the original image URLs. The profile portrait must be uploaded in Studio; the expiring signed URL from the old site is not copied. The old placeholder phone number and CV link pointing to a QGIS tutorial are deliberately not carried over.

From `studio/`, run:

```sh
npx sanity exec scripts/import-content.mjs --with-user-token -- --dry-run
npx sanity exec scripts/import-content.mjs --with-user-token
```

Log in with `npx sanity login` first if necessary. This uses your local Sanity session; do not share or commit a token. The script creates missing documents with stable IDs, skips existing singletons and matching projects/services (including drafts), and never replaces or deletes a document. It imports published content already present on the public site. Existing document edits remain authoritative. Original image links are retained; replacing them with CMS uploads is recommended before they expire or change.

The contact page currently uses direct email and professional links. The old Supabase contact form, map interactions, academy, publications, privacy/terms pages and internal tools remain outstanding; this is not yet a complete production-domain migration.
