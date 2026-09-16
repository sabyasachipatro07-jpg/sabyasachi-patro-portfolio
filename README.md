# Sabyasachi Patro — APM Portfolio

A Next.js (App Router) + TypeScript + Tailwind CSS portfolio built around
product case studies, framed for an Associate Product Manager career
transition.

## Stack

- Next.js 14 (App Router), TypeScript
- Tailwind CSS
- Lucide React icons
- `next/font` with Fraunces (display) + Inter (body) — no external font CDN
  needed beyond Google Fonts at build time

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build locally
```

> Note: `next/font/google` fetches font files from Google Fonts **at build
> time**, so `npm run build` needs internet access. This is normal for any
> Next.js site using `next/font/google` and works out of the box on Vercel.

## Project structure

```
app/
  layout.tsx              Root layout, fonts, metadata, no-flash theme script
  page.tsx                Home: hero, About/Experience previews (with links
                           to the full pages), skills,
                           education, contact
  about/page.tsx           Full transition story + transferable strengths
  experience/page.tsx      Full experience timeline
  case-studies/
    page.tsx               Case study index with category filter
    [slug]/page.tsx         Case study detail template
  not-found.tsx
  globals.css              Design tokens as CSS variables (dark default,
                            .light class override)
components/
  Nav.tsx                  Responsive nav with mobile menu + theme toggle
  Footer.tsx
  Hero.tsx                 Client component; single orchestrated entrance
                            animation (Framer Motion)
  ThemeToggle.tsx          Sun/moon toggle, persists to localStorage,
                            respects system preference
  SectionHeading.tsx
  CaseStudyCard.tsx        Separate "Read case study" / "View prototype"
                            actions; shows "Prototype in progress" when a
                            case study has no prototype link yet
  CaseStudiesGrid.tsx      Client component powering the category filter
lib/
  site-config.ts           Contact info, experience, education, skills —
                            edit this file to update most of the site's text
                            content
  case-studies.ts          All five case studies as structured data —
                            add a new case study by adding an object here;
                            a new route is generated automatically
```

There is no Resume section, page, or download link anywhere in the site —
resumes are shared directly per job application, as requested.

## Theme toggle

Dark is the default theme. The sun/moon button in the nav toggles a `.light`
class on `<html>`, which flips every color token (defined as CSS variables
in `app/globals.css`) to a light-mode value. The choice is saved to
`localStorage` and respected on the next visit; if there's no saved choice
yet, the site falls back to the visitor's OS-level light/dark preference. A
small inline script in `app/layout.tsx` applies the right theme before the
page paints, so there's no flash of the wrong theme on load.

## Content model

Case studies live in `lib/case-studies.ts` as typed objects, not hardcoded
JSX — add, edit, or reorder projects there without touching page templates.
Every field is optional except `slug`, `title`, `category`, `tags`,
`oneLiner`, and `description`, so lighter case studies (fewer confirmed
details) render fine with fewer sections than fully fleshed-out ones.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: Vercel auto-detects Next.js — no config needed.
4. Deploy. Every push to your main branch redeploys automatically.

Alternatively, from the project root with the [Vercel CLI](https://vercel.com/docs/cli) installed:

```bash
npm install -g vercel
vercel
```

## Before publishing — replace these

All of the following are marked `REPLACE_ME` or called out directly in
`lib/site-config.ts` and `lib/case-studies.ts`:

- [ ] **Email** — `siteConfig.email`
- [ ] **GitHub URL** — `siteConfig.github`
- [ ] **Employment dates** — every `dateRange` in `lib/site-config.ts`
      (`experience` and `education` arrays) currently reads
      `REPLACE_ME — add dates`; fill in real dates or remove the field
      to hide it
- [ ] **`metadataBase` URL** in `app/layout.tsx` — currently a placeholder
      (`https://example.com`); set it to your real deployed domain once you
      have one, so Open Graph/social preview links resolve correctly
- [ ] **Case study depth** — `TravelSouls`, `Meta Storyteller`, and `GEO for
      Product Discovery` are intentionally lighter (concept-stage) than
      `Apollo Medicine Companion` and the `Google Maps` case study; expand
      them in `lib/case-studies.ts` as those projects mature
- [ ] **`assumptionsNote`** on each case study — these exist so recruiters
      know which parts are labeled assumptions vs. real research; keep this
      pattern if you add new case studies, rather than presenting assumptions
      as validated findings

Nothing in the codebase invents employment dates, user research findings,
metrics, or testimonials — every case study's `research`, `metrics`, and
similar fields are explicitly framed as proposed/assumed where real data
wasn't provided.
