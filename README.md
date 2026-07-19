# Mohd Moin Khan — Portfolio

A modern, data-driven personal portfolio built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**, deployable straight to **GitHub Pages** with zero backend.

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

## Deploy to GitHub Pages

1. Push this repo to GitHub (default branch `main`).
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
3. Push to `main` — the included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically.

Routing uses **HashRouter** with `base: "./"`, so deep links and refreshes work on Pages regardless of repository name — no 404 hacks needed.

## Editing content (the whole point)

All content lives in `src/data/`. **No portfolio information is hardcoded in components.**

| File | Controls |
|---|---|
| `profile.ts` | Name, title, intro, bio, typing phrases, email |
| `navigation.ts` | Pages in navbar / command palette / footer |
| `projects.ts` | Project cards, tags, filtering, featured work |
| `experience.ts` | Experience timeline |
| `skills.ts` | Skill categories |
| `education.ts` | Education cards |
| `achievements.ts` | Achievements timeline |
| `certifications.ts` | Certification cards (currently placeholder) |
| `timeline.ts` | Growth timeline (About + Timeline pages) |
| `blog.ts` | Blog posts (currently empty — cards/search/tags ready) |
| `opensource.ts` | GitHub username, pinned repos, live stats |
| `roadmap.ts` | Future goals / learning journey |
| `socials.ts` | Social links (footer, home, contact) |

### Adding a new page

1. Create `src/pages/MyPage.tsx` (copy any existing page as a template).
2. Register the route in `src/routes.tsx`.
3. Add an entry in `src/data/navigation.ts` (`inNav: true` to show it in the top bar).

It then appears automatically in the navbar, mobile menu, footer, and ⌘K command palette.

## TODOs before going live

- [ ] Replace `TODO@example.com` in `profile.ts` and `socials.ts` with your real email
- [ ] Replace `USERNAME` links in `socials.ts` and `opensource.ts` (enables live GitHub charts)
- [ ] Fill in Chevron responsibilities in `experience.ts` as you settle in
- [ ] Add real certifications / roadmap items (placeholders are flagged with `todo: true`)
- [ ] Update `public/robots.txt` and `public/sitemap.xml` with your Pages URL
- [ ] Optional: connect the contact form to Formspree/EmailJS
- [ ] Replace `public/resume.pdf` whenever your resume updates

## Features

Dark mode by default with light toggle · ⌘K command palette · scroll progress bar · back-to-top · project filtering/search/sort with expandable detail cards · skills filtering/search · typing hero animation · page transitions & scroll reveals (reduced-motion respected) · copy-email button · SEO meta + Open Graph + JSON-LD structured data · sitemap/robots · 404 page · fully responsive · lazy-loaded routes.

## Stack

React 18 · Vite 5 · TypeScript (strict) · Tailwind CSS 3 · Framer Motion 11 · React Router 6 · React Icons · clsx
