# Omar Antar — Portfolio (v2)

My personal portfolio: a single-page site built with [Next.js](https://nextjs.org) (App Router), TypeScript and [Tailwind CSS](https://tailwindcss.com), deployed on [Vercel](https://vercel.com).

> **v1:** the original Create React App version is still live at [omarantar7.github.io/Portfolio](https://omarantar7.github.io/Portfolio/) (served from the `gh-pages` branch). Its source is at the [`v1.0.0`](https://github.com/omarantar7/Portfolio/tree/v1.0.0) tag.

## Features

- About, Experience, Projects and Education sections with a sticky sidebar and scroll-aware navigation
- Mouse-following spotlight effect and accessible, keyboard-friendly links
- SEO built in: metadata, JSON-LD `Person` schema, generated Open Graph image, `sitemap.xml` and `robots.txt`
- All content lives in one data file, so updating the site rarely means touching components
- CI on GitHub Actions: lint and typecheck on every change, preview deploys for pull requests, production deploys from `main`

## Tech stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · react-icons · Vercel · GitHub Actions

## Getting started

Requires Node.js 20.9 or newer (CI uses Node 24).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command             | Description                                   |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the dev server                          |
| `npm run build`     | Production build                              |
| `npm run start`     | Serve the production build                    |
| `npm run lint`      | Lint with ESLint                              |
| `npm run typecheck` | Generate route types and type-check with `tsc` |

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, fonts, site-wide metadata
│   ├── page.tsx                # The portfolio page
│   ├── globals.css             # Tailwind theme tokens (colors, fonts)
│   ├── opengraph-image.tsx     # Generated social preview image
│   ├── sitemap.ts / robots.ts  # SEO routes
│   └── icon.svg                # Favicon
├── components/                 # Nav, Section, Card, ArrowLink, TagList, …
└── data/
    └── portfolio.ts            # Profile, experience, projects, education
public/
├── images/projects/            # Project screenshots
├── Profile.jpeg                # Profile photo
└── Omar Antar's CV.pdf         # Résumé linked from the site
```

## Updating content

Edit [`src/data/portfolio.ts`](src/data/portfolio.ts):

- `profile`: name, role, links, résumé path
- `experiences`: work history
- `projects`: featured projects (put screenshots in `public/images/projects/`)
- `education` and `certifications`

Colors and fonts are theme tokens in [`src/app/globals.css`](src/app/globals.css); use those tokens in components instead of hard-coded values.

## Environment variables

| Variable               | Where              | Purpose                                                                                       |
| ---------------------- | ------------------ | --------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Vercel (Production) | Absolute site URL used for canonical links, the sitemap and social cards. Falls back to Vercel's production domain, then `http://localhost:3000`. |

## Deployment

Deploys run from GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) using the Vercel CLI:

| Trigger                | Result                                              |
| ---------------------- | --------------------------------------------------- |
| Pull request           | Lint + typecheck, then a **preview** deploy (URL in the run summary) |
| Push to `main`         | Lint + typecheck, then a **production** deploy      |
| Manual (`Run workflow`) | Same as above for the chosen branch                |

Vercel's own Git deploys are disabled in [`vercel.json`](vercel.json), so the workflow is the only deploy path and the `gh-pages` branch is never built by Vercel.

### One-time setup

1. Link the project: `npx vercel login` then `npx vercel link` (creates `.vercel/project.json`, which is git-ignored).
2. Create a token at [vercel.com/account/settings/tokens](https://vercel.com/account/settings/tokens).
3. Add these GitHub **repository secrets** (Settings → Secrets and variables → Actions):

   | Secret              | Value                                 |
   | ------------------- | ------------------------------------- |
   | `VERCEL_TOKEN`      | The Vercel token                      |
   | `VERCEL_ORG_ID`     | `orgId` from `.vercel/project.json`     |
   | `VERCEL_PROJECT_ID` | `projectId` from `.vercel/project.json` |

4. After the first production deploy, set `NEXT_PUBLIC_SITE_URL` in Vercel and re-run the workflow.
