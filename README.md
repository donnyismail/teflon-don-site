# Teflon Don LLC - Website

**Houston Web Developer | SEO & AI Automation**

The marketing site for Teflon Don LLC, Donny's solo web dev / SEO / AI automation agency based in Houston, TX. Built to convert local business owners into clients with flat-rate pricing, fast delivery, and no agency markup.

**Live site:** [donnysyntracts.github.io/teflon-don-site](https://donnysyntracts.github.io/teflon-don-site/)

## Tech Stack

- **HTML/CSS/JS** - No frameworks, no build tools. Single-file inline architecture.
- **Google Fonts** - Space Grotesk, Inter, JetBrains Mono
- **Formspree** - Contact form backend (free tier, 50 submissions/month)
- **GitHub Pages** - Hosting via Actions deployment
- **Playwright** - Automated site testing

## File Structure

```
teflon-don-site/
├── index.html          # Main site (all sections, CSS, JS inline)
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── dashboard.html      # Internal team command center (NOT deployed)
├── 404.html            # Custom 404 page
├── robots.txt          # Search engine directives
├── sitemap.xml         # Sitemap for SEO
├── package.json        # Dev dependencies (Playwright)
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages auto-deploy on push to main
├── tests/
│   ├── site-audit.spec.js      # Full site audit tests
│   └── scroll-screenshots.spec.js  # Screenshot capture tests
├── AI_BLUEPRINT.md     # AI automation strategy
├── CLIENT_AGREEMENT.md # Client contract template
├── CONTENT_STRATEGY.md # Content marketing plan
├── FINANCIAL_MODEL.md  # Revenue projections
├── LOCAL_SEO_GUIDE.md  # Local SEO playbook
├── SALES_PLAYBOOK.md   # Sales process & scripts
├── STRATEGY.md         # Overall business strategy
└── TECH_GUIDE.md       # Technical implementation guide
```

## Local Development

No build step required. Just open the files:

```bash
# Option 1: Open directly
open index.html

# Option 2: Local server (better for testing)
npx serve .
```

## Running Tests

Tests use Playwright and run against the live deployed site:

```bash
# Install Playwright browsers (first time only)
npx playwright install chromium

# Run all tests
npx playwright test

# Run with visible browser
npx playwright test --headed
```

## Deployment

The site auto-deploys to GitHub Pages on every push to `main`:

1. Push to `main` branch
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers
3. Site files are uploaded (excluding `dashboard.html`, `node_modules`, tests, etc.)
4. Live at [donnysyntracts.github.io/teflon-don-site](https://donnysyntracts.github.io/teflon-don-site/)

**Note:** `dashboard.html` is excluded from deployment - it's for internal use only.

## Domain Setup (Future)

When `teflondon.dev` is purchased:

1. Add domain in GitHub Pages settings (repo > Settings > Pages > Custom domain)
2. Create DNS records:
   - `CNAME` record: `teflondon.dev` -> `donnysyntracts.github.io`
   - Or `A` records pointing to GitHub's IPs
3. Enable "Enforce HTTPS" in Pages settings
4. Update `canonical` URLs and `og:url` meta tags in HTML files
5. Update `sitemap.xml` and `robots.txt` URLs

## Contact Form (Formspree)

The contact form submits to [Formspree](https://formspree.io):

- **Endpoint:** `https://formspree.io/f/{form_id}` (update in `index.html` once registered)
- **Free tier:** 50 submissions/month
- **Setup:** Register at formspree.io, create a form, replace the placeholder ID in `index.html`
- Fields: Name*, Phone*, Email, Business, Service, Message

## Business Docs

All strategic/business documents are tracked in this private repo:

| Document | Description |
|----------|-------------|
| `STRATEGY.md` | Overall business strategy and positioning |
| `FINANCIAL_MODEL.md` | Revenue projections and pricing model |
| `SALES_PLAYBOOK.md` | Sales process, scripts, and objection handling |
| `CLIENT_AGREEMENT.md` | Client contract template |
| `AI_BLUEPRINT.md` | AI automation service offerings |
| `CONTENT_STRATEGY.md` | Content marketing and SEO content plan |
| `LOCAL_SEO_GUIDE.md` | Local SEO implementation playbook |
| `TECH_GUIDE.md` | Technical implementation reference |

## Contact

- **Phone:** (518) 698-9870
- **Email:** dismail93@gmail.com
- **Location:** Houston, TX
