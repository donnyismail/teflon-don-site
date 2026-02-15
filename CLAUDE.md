# CLAUDE.md - AI Context for Teflon Don LLC Site

## Project Overview

Teflon Don LLC is Donny's solo web dev / SEO / AI automation agency in Houston, TX. This repo contains the main marketing website plus internal business strategy documents. The site targets local small business owners who need websites, SEO, and AI automation at flat-rate pricing ($499-$2499).

## File Map

| File | Purpose |
|------|---------|
| `index.html` | Main site - all sections, CSS, and JS inline. ~1100 lines. |
| `privacy.html` | Privacy policy page |
| `terms.html` | Terms of service page |
| `dashboard.html` | Internal team command center. NOT deployed to production. |
| `404.html` | Custom 404 page with auto-redirect |
| `robots.txt` | SEO directives, disallows dashboard |
| `sitemap.xml` | Sitemap for search engines |
| `package.json` | Dev deps: Playwright for testing |
| `.github/workflows/deploy.yml` | GitHub Pages deploy on push to main |
| `tests/site-audit.spec.js` | Full site audit (17 tests) |
| `tests/scroll-screenshots.spec.js` | Screenshot capture tests |
| `*.md` (business docs) | Strategy, financial model, sales playbook, etc. |

## Current State

- Site is fully built and functional
- All Playwright tests passing
- Deployed via GitHub Pages at `donnysyntracts.github.io/teflon-don-site`
- Repo is **private** (business docs are committed)
- Contact form uses Formspree (needs form ID registered at formspree.io)
- Dashboard excluded from production deploy
- robots.txt and sitemap.xml in place

## Key Decisions

- **No frameworks** - Pure HTML/CSS/JS, everything inline in single files
- **Formspree** for form backend (free tier, 50/month)
- **GitHub Pages** for hosting via Actions workflow
- **Private repo** to protect business strategy documents
- **dashboard.html** is internal only, excluded from deploy

## TODO (Not Yet Done)

- [ ] Purchase `teflondon.dev` domain
- [ ] Configure DNS (CNAME to GitHub Pages)
- [ ] Register Formspree form and update form ID in index.html
- [ ] Add Google Analytics or Plausible analytics
- [ ] Set up Google Business Profile
- [ ] Add real portfolio screenshots/case studies
- [ ] Configure Formspree email notifications

## Coding Conventions

- **Inline everything** - CSS in `<style>`, JS in `<script>`, no external files
- **No build step** - Open HTML files directly or use `npx serve`
- **Dark theme** - `--black: #08080C` background, `--accent: #FF4D00` (orange)
- **Fonts** - Space Grotesk (headings), Inter (body), JetBrains Mono (code/labels)
- **CSS variables** defined in `:root` at top of each HTML file
- **Vanilla JS** - No jQuery, no frameworks. ES5-compatible for broad support.
- **Mobile-first** responsive design with burger nav on mobile
- Sections follow pattern: wave separator -> section with `.sec` class

## Test Commands

```bash
npx playwright test                    # Run all tests
npx playwright test --headed           # Run with visible browser
npx playwright test -g "Page loads"    # Run specific test
```

Tests run against the live deployed site URL.

## Deploy Process

Push to `main` -> GitHub Actions auto-deploys to Pages. The workflow selectively copies public files (excludes dashboard, node_modules, tests, business docs).

## Important Notes

- **DO NOT expose business docs** (STRATEGY.md, FINANCIAL_MODEL.md, etc.) on the public site
- **dashboard.html is internal only** - excluded from the deploy workflow
- The repo is private - keep it that way
- Contact info: (518) 698-9870 / dismail93@gmail.com
- Business address: Houston, TX (no physical office listed)
