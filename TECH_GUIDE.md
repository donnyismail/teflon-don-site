# Teflon Don LLC -- Technical Guide

**Author:** CTO, Teflon Don LLC
**Last Updated:** 2026-02-15
**Site:** Single-file static site (`index.html`) -- HTML, inline CSS, inline JS, zero dependencies

---

## Table of Contents

1. [Deployment Guide](#1-deployment-guide)
2. [Performance Optimization](#2-performance-optimization)
3. [Tech Stack Recommendations (Scaling)](#3-tech-stack-recommendations-for-scaling)
4. [Tooling & Automation](#4-tooling--automation)
5. [Security Checklist](#5-security-checklist)
6. [Backup Strategy](#6-backup-strategy)

---

## 1. Deployment Guide

### Current State

The site is a single `index.html` file with all CSS and JS inlined. No build step required. No dependencies. No `node_modules`. This is the simplest possible deployment scenario -- just put the file on a server.

---

### 1A. Deploying to Netlify (Recommended -- Free Tier)

Netlify is the recommended host. Free tier includes HTTPS, custom domains, form handling, and a global CDN.

#### Step 1: Create a Git Repository

```bash
cd /Users/donny/teflon-don-site
git init
git add index.html
git commit -m "Initial commit: Teflon Don site"
```

#### Step 2: Push to GitHub

```bash
# Create a repo on GitHub first at https://github.com/new
# Name it: teflon-don-site
# Set it to Private

git remote add origin git@github.com:YOUR_USERNAME/teflon-don-site.git
git branch -M main
git push -u origin main
```

#### Step 3: Connect Netlify

1. Go to https://app.netlify.com/signup and sign up with your GitHub account.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select **GitHub** as the Git provider.
4. Authorize Netlify to access your repositories.
5. Select `teflon-don-site`.
6. Configure build settings:
   - **Build command:** (leave blank -- no build step needed)
   - **Publish directory:** `.` (root, since `index.html` is in root)
7. Click **"Deploy site"**.

Your site will be live at a URL like `https://random-name-12345.netlify.app` within 60 seconds.

#### Step 4: Set a Custom Subdomain on Netlify

1. Go to **Site settings** > **Domain management** > **Custom domains**.
2. Click **"Change site name"** and set it to `teflondon` so the URL becomes `https://teflondon.netlify.app`.

#### Alternative: Drag-and-Drop Deploy (No Git)

1. Go to https://app.netlify.com/drop
2. Drag the entire `/Users/donny/teflon-don-site` folder onto the browser.
3. Site deploys instantly.

**Limitation:** drag-and-drop sites cannot be updated via Git pushes. You must re-drag to update. Use the Git method for production.

---

### 1B. Deploying to Vercel (Alternative)

#### Step 1: Install the Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Deploy

```bash
cd /Users/donny/teflon-don-site
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name: teflon-don-site
# - Directory: ./
# - Override settings? N
```

#### Step 3: Deploy to Production

```bash
vercel --prod
```

Your site will be live at `https://teflon-don-site.vercel.app`.

#### Git Integration (Preferred)

1. Push to GitHub (same steps as above).
2. Go to https://vercel.com/new
3. Import your GitHub repository.
4. Framework Preset: **Other**
5. Build Command: (leave blank)
6. Output Directory: `.`
7. Click **Deploy**.

---

### 1C. Custom Domain Setup

#### Purchasing a Domain

Recommended registrar: **Namecheap** (https://www.namecheap.com) or **Cloudflare Registrar** (https://dash.cloudflare.com -- at-cost pricing, cheapest option).

Suggested domains to check:
- `teflondon.com`
- `teflondonllc.com`
- `teflondonweb.com`
- `teflondon.io`
- `teflondon.co`

**Purchase steps (Namecheap):**

1. Go to https://www.namecheap.com
2. Search for your desired domain.
3. Add to cart and purchase ($8-15/year for `.com`).
4. Do NOT buy any upsells (WhoisGuard free is fine, skip everything else).

**Purchase steps (Cloudflare -- cheapest):**

1. Create a Cloudflare account at https://dash.cloudflare.com/sign-up
2. Go to **Domain Registration** > **Register Domains**.
3. Search and purchase. Cloudflare charges wholesale pricing (no markup).

#### Connecting Custom Domain to Netlify

1. In Netlify: **Site settings** > **Domain management** > **Add custom domain**.
2. Type your domain (e.g., `teflondon.com`). Click **Verify** > **Add domain**.
3. Netlify will tell you to update DNS.

#### DNS Configuration

You have two options:

**Option A: Use Netlify DNS (Recommended -- simplest)**

1. In Netlify domain settings, click **"Set up Netlify DNS"** for your domain.
2. Netlify gives you nameservers, typically:
   ```
   dns1.p05.nsone.net
   dns2.p05.nsone.net
   dns3.p05.nsone.net
   dns4.p05.nsone.net
   ```
3. Go to your registrar (Namecheap / Cloudflare).
4. Find **DNS** or **Nameservers** settings.
5. Change nameservers from the default to the four Netlify nameservers above.
6. Save. Propagation takes 15 minutes to 48 hours (usually under 1 hour).

**Option B: Keep DNS at Your Registrar (Manual Records)**

If you want to keep DNS at Namecheap/Cloudflare and just point to Netlify:

1. In your registrar's DNS settings, add these records:

| Type  | Host/Name | Value                           | TTL  |
|-------|----------|----------------------------------|------|
| A     | @        | 75.2.60.5                        | 3600 |
| CNAME | www      | your-site-name.netlify.app       | 3600 |

2. The A record (`75.2.60.5`) is Netlify's load balancer IP.
3. The CNAME makes `www.teflondon.com` point to Netlify.

**For Vercel** the process is similar:

| Type  | Host/Name | Value                           | TTL  |
|-------|----------|----------------------------------|------|
| A     | @        | 76.76.21.21                      | 3600 |
| CNAME | www      | cname.vercel-dns.com             | 3600 |

#### Verify DNS Propagation

```bash
# Check if DNS has propagated
dig teflondon.com +short
# Should return the correct IP

nslookup teflondon.com
# Should show the correct nameservers or A record

# Or use an online tool:
# https://dnschecker.org/#A/teflondon.com
```

---

### 1D. SSL / HTTPS Certificate

**Netlify:** Automatic. Once DNS is pointed, Netlify provisions a free Let's Encrypt SSL certificate. No action needed. HTTPS is forced by default. Takes 5-15 minutes after DNS propagates.

**Vercel:** Automatic. Same deal. Zero configuration.

**To verify SSL is working:**

```bash
curl -I https://teflondon.com
# Look for: HTTP/2 200
# Look for: strict-transport-security header
```

Or just visit `https://teflondon.com` in a browser and confirm the padlock icon appears.

---

### 1E. Deployment Checklist

Before going live with a custom domain, verify:

- [ ] `index.html` loads correctly on the Netlify/Vercel preview URL.
- [ ] Domain purchased and DNS records configured.
- [ ] DNS propagation confirmed (`dig` or dnschecker.org).
- [ ] SSL certificate issued (padlock in browser).
- [ ] `www` subdomain redirects to root (or vice versa) -- Netlify handles this automatically.
- [ ] Contact form mailto link works.
- [ ] Phone number `tel:` link works on mobile.
- [ ] Mobile menu (hamburger) opens and closes.
- [ ] All anchor links scroll to correct sections.

---

## 2. Performance Optimization

### Current Architecture Audit

The site is a single 757-line HTML file with:
- **All CSS inlined** in a `<style>` tag (~305 lines of CSS)
- **All JS inlined** in a `<script>` tag (~78 lines of JS)
- **3 external Google Fonts** (Space Grotesk, Inter, JetBrains Mono)
- **Zero images** -- all icons are inline SVGs
- **Zero external JS libraries** -- vanilla JavaScript only

This is an exceptionally lean architecture. The estimated transfer size is under 25KB gzipped (excluding fonts).

---

### 2A. Estimated Lighthouse Scores

Based on the code audit:

| Category       | Estimated Score | Notes                                  |
|----------------|:--------------:|----------------------------------------|
| Performance    | 90-95          | Near-perfect; fonts are the bottleneck |
| Accessibility  | 75-82          | Missing some ARIA labels and landmarks |
| Best Practices | 90-95          | Clean code, HTTPS assumed              |
| SEO            | 88-92          | Has meta desc and viewport; missing some tags |

**Run your own Lighthouse audit:**

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run against the live URL
lighthouse https://teflondon.netlify.app --output=html --output-path=./lighthouse-report.html

# Or run against a local server
npx serve /Users/donny/teflon-don-site -p 8080
lighthouse http://localhost:8080 --output=html --output-path=./lighthouse-report.html
```

Or use Chrome DevTools: F12 > Lighthouse tab > Generate Report.

---

### 2B. CSS Optimization

**Current state:** All CSS is already inlined and minified (class names are short). This is ideal for a single-page site because there is zero render-blocking CSS.

**Opportunities:**

1. **Remove unused CSS for mobile breakpoints on desktop (and vice versa).**
   This is a micro-optimization and not worth the complexity for a single-page site. Skip it.

2. **Minify the CSS.**
   There are still readable whitespace and comments in the inline styles. To minify:

   ```bash
   # Extract, minify, and re-inline (manual approach)
   # Or use an online tool: https://cssnano.github.io/cssnano/playground/

   # Automated approach if you add a build step later:
   npm install -g html-minifier-terser
   html-minifier-terser \
     --collapse-whitespace \
     --remove-comments \
     --minify-css true \
     --minify-js true \
     index.html -o index.min.html
   ```

   **Estimated savings:** 3-5KB before gzip (minimal real-world impact since gzip compresses whitespace well).

3. **CSS Custom Properties (already used).**
   The site already uses CSS variables (`--accent`, `--black`, etc.), which is the correct approach. No changes needed.

4. **`will-change` hints for animations.**
   Add to the blob animations and cursor glow for GPU compositing:

   ```css
   .blob { will-change: transform; }
   .cursor-glow { will-change: left, top; }
   ```

   This tells the browser to promote these elements to their own compositor layer, avoiding repaints.

5. **`contain` property for performance isolation.**
   Add layout containment to card grids:

   ```css
   .pain-card, .svc, .price-col, .result-card { contain: content; }
   ```

---

### 2C. JavaScript Performance

**Current JS audit:**

1. **`requestAnimationFrame` cursor glow loop (lines 690-696).**

   ```js
   (function moveGlow() {
     gx += (mx - gx) * 0.08;
     gy += (my - gy) * 0.08;
     glow.style.left = gx + 'px';
     glow.style.top = gy + 'px';
     requestAnimationFrame(moveGlow);
   })();
   ```

   **Issue:** This runs every frame (~60fps) forever, even when the mouse is not moving. This consumes CPU/battery continuously.

   **Fix:** Only run the loop when the mouse has actually moved, and stop after settling:

   ```js
   const glow = document.getElementById('cursorGlow');
   let mx = 0, my = 0, gx = 0, gy = 0;
   let glowRunning = false;

   document.addEventListener('mousemove', e => {
     mx = e.clientX;
     my = e.clientY;
     if (!glowRunning) {
       glowRunning = true;
       moveGlow();
     }
   });

   function moveGlow() {
     gx += (mx - gx) * 0.08;
     gy += (my - gy) * 0.08;
     glow.style.left = gx + 'px';
     glow.style.top = gy + 'px';
     // Stop the loop when the glow has caught up to the mouse (within 0.5px)
     if (Math.abs(mx - gx) > 0.5 || Math.abs(my - gy) > 0.5) {
       requestAnimationFrame(moveGlow);
     } else {
       glowRunning = false;
     }
   }
   ```

   **Impact:** Eliminates 100% of idle CPU usage from this animation. The loop only runs when the mouse is in motion.

2. **`IntersectionObserver` usage (lines 711-714, 717-733).**

   Two observers are created:
   - One for `.rv` (reveal-on-scroll) elements -- `threshold: 0.06`.
   - One for `[data-target]` (counter animation) elements -- `threshold: 0.5`.

   **Assessment:** This is correct and performant. `IntersectionObserver` is the right API for scroll-triggered animations. Both observers `unobserve` after triggering (the counter observer explicitly, the reveal observer implicitly since `vis` class is only added once). No changes needed.

3. **Scroll event listeners (lines 681-683, 700).**

   Two `scroll` listeners exist:
   - Scroll progress bar width calculation.
   - Nav class toggle.

   **Optimization:** Combine into a single listener and throttle with `requestAnimationFrame`:

   ```js
   let ticking = false;
   window.addEventListener('scroll', () => {
     if (!ticking) {
       requestAnimationFrame(() => {
         const h = document.documentElement.scrollHeight - window.innerHeight;
         prog.style.width = (window.scrollY / h * 100) + '%';
         nav.classList.toggle('scrolled', window.scrollY > 60);
         ticking = false;
       });
       ticking = true;
     }
   });
   ```

   **Impact:** Prevents layout thrashing by batching DOM reads/writes into a single animation frame.

4. **Smooth scroll handler (lines 749-754).**

   Uses `window.scrollTo` with `behavior: 'smooth'`. This is fine. The CSS `scroll-behavior: smooth` on `<html>` already handles this, so the JS handler is redundant for browsers that support the CSS property. But having both is harmless -- the JS version provides the 70px offset for the fixed nav.

---

### 2D. Font Loading Strategy

**Current state (line 10):**

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

**Problems:**

1. **Three font families = 12 font files.** Each weight is a separate WOFF2 file. The browser downloads them on demand, but the CSS file itself is render-blocking.
2. **`display=swap`** is already set (good -- text renders immediately in a fallback font, then swaps when the custom font loads).
3. **`preconnect` hints** are already present for `fonts.googleapis.com` and `fonts.gstatic.com` (good).

**Optimization recommendations:**

1. **Reduce font weight count.** The site does not use all declared weights. Audit actual usage:

   | Font           | Declared Weights  | Actually Used              |
   |----------------|-------------------|----------------------------|
   | Space Grotesk  | 400, 500, 600, 700 | 600, 700 (headings only) |
   | Inter          | 300, 400, 500, 600, 700 | 300, 400, 500, 600 (body text, buttons) |
   | JetBrains Mono | 400, 500          | 400 (mono tags, labels)   |

   **Trimmed URL:**

   ```html
   <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
   ```

   **Savings:** Eliminates 5 font weight files from being available. Actual download savings depend on which weights the browser requests.

2. **Consider dropping JetBrains Mono.** It is used only for tiny labels (`.sec-num`, `.svc-tag`, `.p-tier`, etc.) at 0.58-0.68rem. At that size, the visual difference between JetBrains Mono and a system monospace font is negligible. Replace with:

   ```css
   --mono: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
   ```

   **Savings:** Eliminates one entire font family download (~15-25KB).

3. **Self-host fonts for maximum performance.** Download WOFF2 files and serve them from your own domain to eliminate the two extra DNS lookups and round-trips to Google:

   ```bash
   # Use google-webfonts-helper to get self-hosted files
   # https://gwfh.mranftl.com/fonts/space-grotesk?subsets=latin
   # Download the WOFF2 files and place in /fonts/ directory

   mkdir /Users/donny/teflon-don-site/fonts
   ```

   Then replace the Google Fonts `<link>` with local `@font-face` declarations:

   ```css
   @font-face {
     font-family: 'Space Grotesk';
     font-style: normal;
     font-weight: 600;
     font-display: swap;
     src: url('/fonts/space-grotesk-v16-latin-600.woff2') format('woff2');
   }
   @font-face {
     font-family: 'Space Grotesk';
     font-style: normal;
     font-weight: 700;
     font-display: swap;
     src: url('/fonts/space-grotesk-v16-latin-700.woff2') format('woff2');
   }
   /* ... repeat for Inter weights ... */
   ```

   **Impact:** Eliminates 2 DNS lookups, 2 TCP connections, and 1 CSS file download. Fonts load from your CDN (Netlify/Vercel), which is already optimized.

4. **Preload the most critical font.**

   ```html
   <link rel="preload" href="/fonts/space-grotesk-v16-latin-700.woff2" as="font" type="font/woff2" crossorigin>
   ```

   This tells the browser to start downloading the hero heading font immediately, before it parses the CSS.

---

### 2E. Critical CSS Inlining

**Current state:** All CSS is already inline. There is no external stylesheet. This means the browser can begin rendering immediately after parsing the `<head>` -- there is zero render-blocking CSS (aside from the Google Fonts `<link>`).

**Assessment: No action needed.** The current architecture is already optimal for critical CSS. Inlining is the strategy, and it is already implemented.

The one improvement is to make the Google Fonts link non-render-blocking:

```html
<!-- Replace the current Google Fonts link with: -->
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@300;400;500;600&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@300;400;500;600&display=swap"></noscript>
```

This loads fonts asynchronously so they never block first paint. Text renders immediately in system fonts, then swaps to custom fonts when loaded.

---

### 2F. Additional SEO Tags to Add

Add these to the `<head>` for better social sharing and SEO:

```html
<!-- Open Graph (Facebook, LinkedIn, iMessage previews) -->
<meta property="og:title" content="Teflon Don | Bulletproof Websites for Houston Businesses">
<meta property="og:description" content="Bulletproof websites, SEO, and AI automation for Houston local businesses. One guy. No agency markup. Sites live in 7 days.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://teflondon.com">
<meta property="og:image" content="https://teflondon.com/og-image.png">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Teflon Don | Bulletproof Websites for Houston Businesses">
<meta name="twitter:description" content="Bulletproof websites, SEO, and AI automation for Houston local businesses.">
<meta name="twitter:image" content="https://teflondon.com/og-image.png">

<!-- Favicon (create a simple one at https://favicon.io) -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

<!-- Canonical URL (prevents duplicate content) -->
<link rel="canonical" href="https://teflondon.com">

<!-- Local Business Structured Data (helps Google show rich results) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Teflon Don LLC",
  "description": "Bulletproof websites, SEO, and AI automation for Houston local businesses.",
  "url": "https://teflondon.com",
  "telephone": "+15186989870",
  "email": "dismail93@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Houston"
  },
  "priceRange": "$499-$2499",
  "serviceType": ["Web Design", "SEO", "AI Automation"]
}
</script>
```

Create the OG image (1200x630px) using Figma or Canva with the Teflon Don branding. This is what shows up when someone shares the link on social media.

---

## 3. Tech Stack Recommendations (For Scaling)

### 3A. Client Site Builder -- Frameworks for Speed

When building sites for clients, you need to ship fast. Here are the recommended tools ranked by speed-to-deploy:

#### Tier 1: Fastest (same-day builds)

| Tool | What It Is | Cost | Best For |
|------|-----------|------|----------|
| **Astro** (https://astro.build) | Static site framework, zero JS by default | Free | Brochure sites, landing pages |
| **11ty (Eleventy)** (https://www.11ty.dev) | Static site generator, template-based | Free | Simple business sites |

**Astro** is the top recommendation. It outputs pure HTML/CSS with zero client-side JavaScript unless you explicitly add it. Perfect for the "bulletproof website" brand.

```bash
# Create a new client site in under 5 minutes
npm create astro@latest -- --template basics client-site-name
cd client-site-name
npm run dev
```

Build a set of reusable Astro components (hero, services grid, contact form, pricing table, FAQ accordion) that match the Teflon Don style. Then each client site becomes: swap content, adjust colors, deploy. Under 2 hours per site.

#### Tier 2: More Features

| Tool | What It Is | Cost | Best For |
|------|-----------|------|----------|
| **Next.js** (https://nextjs.org) | React framework | Free | Sites needing dynamic features (auth, dashboards) |
| **Hugo** (https://gohugo.io) | Go-based static generator, fastest builds | Free | Blog-heavy sites, content sites |

#### Recommended Template Strategy

Build 3-4 base templates in Astro:

1. **"Launch Pad"** template -- single-page site, matches the $499 tier. Hero + services + contact.
2. **"Revenue Machine"** template -- multi-page site with blog, matches the $999 tier.
3. **"Market Leader"** template -- full site with CMS integration, blog, booking, matches the $2,499 tier.
4. **"Restaurant"** template -- menu, hours, reservation widget. High demand in Houston.

Store these in a private GitHub repo. Clone per client. This is how you build a $499 site in under a day.

---

### 3B. CMS Options for Client Self-Editing

Clients will ask "can I edit my own site?" These are the options, ranked:

#### Best Option: Decap CMS (formerly Netlify CMS)

- **URL:** https://decapcms.org
- **Cost:** Free
- **How it works:** Adds a `/admin` route to any static site. Client logs in with their GitHub/Netlify Identity, edits content through a visual interface, and the CMS commits changes to Git. Netlify auto-deploys.
- **Setup:** Drop two files into the repo:

  ```
  /admin/index.html
  /admin/config.yml
  ```

  ```yaml
  # /admin/config.yml
  backend:
    name: git-gateway
    branch: main
  media_folder: "images"
  collections:
    - name: "pages"
      label: "Pages"
      files:
        - label: "Home"
          name: "home"
          file: "src/content/home.json"
          fields:
            - { label: "Hero Title", name: "heroTitle", widget: "string" }
            - { label: "Hero Description", name: "heroDesc", widget: "text" }
            - { label: "Phone", name: "phone", widget: "string" }
  ```

- **Why this wins:** No database. No server. No monthly fee. Client edits go through Git so you always have version history. If they break something, you revert the commit.

#### Other Options

| CMS | Cost | Complexity | Best For |
|-----|------|-----------|----------|
| **Sanity** (https://sanity.io) | Free tier (3 users) | Medium | Clients who need structured content |
| **Contentful** (https://contentful.com) | Free tier | Medium | Multi-language content |
| **WordPress** (headless) | Hosting cost | High | Clients who insist on WordPress |
| **Tina CMS** (https://tina.io) | Free tier | Medium | Visual editing directly on the page |

**Recommendation:** Start with Decap CMS for all client sites. Move to Sanity only if a client has complex content needs (e.g., a restaurant with menus, locations, and events).

---

### 3C. Hosting Infrastructure for Client Sites

#### Strategy: One Netlify Account, Many Sites

Netlify allows unlimited sites on the free tier. Each client site is a separate Netlify site connected to a separate Git repo.

**Account structure:**

```
Netlify Account: donny@teflondonllc.com
|
|-- Site: teflondon.netlify.app       (your site)
|-- Site: client-plumber.netlify.app  (Joe's Plumbing)
|-- Site: client-salon.netlify.app    (Maria's Salon)
|-- Site: client-roofing.netlify.app  (Texas Top Roofing)
```

**Each client site connects to their custom domain.** The client never logs into Netlify. You manage everything.

**Netlify Free Tier Limits (per site):**
- 100GB bandwidth/month (more than enough for a local business)
- 300 build minutes/month
- 1 concurrent build
- HTTPS included
- Form submissions: 100/month

**When to upgrade:** If a client site gets heavy traffic (unlikely for a local business), Netlify Pro is $19/month per member. A single Pro account covers all your sites.

**Alternative for high-traffic clients:** Cloudflare Pages (https://pages.cloudflare.com). Unlimited bandwidth on the free tier. Same deployment model as Netlify.

---

### 3D. Domain Management -- Bulk Strategy

#### Registrar: Cloudflare Registrar

**Why:** At-cost pricing. A `.com` domain is ~$10.11/year through Cloudflare vs. $12-15 at Namecheap/GoDaddy. Over 30 clients, that saves $60-150/year. More importantly, all domains and DNS live in one dashboard.

**Workflow:**

1. Register all client domains under your Cloudflare account.
2. Point DNS to Netlify (or wherever the site is hosted).
3. Charge the client for the domain as part of their annual hosting fee.

**Recommended pricing to clients:**
- Bundle domain cost into the monthly hosting fee ($15-50/month depending on tier).
- You pay ~$10/year for the domain. Client pays $180-600/year in hosting. Healthy margin.

**Domain naming convention for clients:**

```
Client business name    -> Domain purchased
Joe's Plumbing          -> joesplumbinghtx.com
Maria's Salon           -> mariassalonhouston.com
Texas Top Roofing       -> texastoproofing.com
```

Always include the city or state in the domain when possible -- helps with local SEO.

**Bulk purchasing:**
- Cloudflare has no bulk discount, but at-cost pricing is already the floor.
- Keep a spreadsheet tracking: domain name, registrar, expiration date, client name, DNS host.

---

### 3E. Email Setup -- Professional Business Email

#### For Teflon Don LLC

**Option 1: Google Workspace (Recommended)**

- **URL:** https://workspace.google.com
- **Cost:** $7.20/month (Business Starter)
- **What you get:** `donny@teflondon.com` (or whatever your domain is), 30GB storage, Gmail interface, Google Calendar, Google Meet, Google Drive.

**Setup:**

1. Purchase Google Workspace at https://workspace.google.com/pricing
2. Verify domain ownership (add a TXT record to DNS).
3. Add MX records to your DNS:

   | Priority | Mail Server                |
   |----------|----------------------------|
   | 1        | ASPMX.L.GOOGLE.COM        |
   | 5        | ALT1.ASPMX.L.GOOGLE.COM   |
   | 5        | ALT2.ASPMX.L.GOOGLE.COM   |
   | 10       | ALT3.ASPMX.L.GOOGLE.COM   |
   | 10       | ALT4.ASPMX.L.GOOGLE.COM   |

4. Set up SPF, DKIM, and DMARC records (Google Workspace walks you through this).

**Option 2: Zoho Mail (Free)**

- **URL:** https://www.zoho.com/mail/
- **Cost:** Free for 1 user (up to 5 users on free plan)
- **What you get:** `donny@teflondon.com`, 5GB storage, web interface.
- **Good for:** Starting out before revenue justifies $7.20/month.

#### For Client Sites

Do NOT set up email for clients unless they pay for it. Email hosting is a support burden.

If a client wants professional email:
1. Recommend they purchase Google Workspace themselves ($7.20/month).
2. Help them set up DNS records as a one-time service (charge $50-100).
3. Do NOT manage their email ongoing. That is a support nightmare.

---

## 4. Tooling & Automation

### 4A. Invoicing & Payments

#### Stripe (Recommended)

- **URL:** https://stripe.com
- **Cost:** 2.9% + $0.30 per transaction
- **Setup:**
  1. Create account at https://dashboard.stripe.com/register
  2. Verify identity (requires SSN or EIN for Teflon Don LLC).
  3. Create **Payment Links** for each pricing tier:

     ```
     Launch Pad:      https://buy.stripe.com/your-link-499
     Revenue Machine: https://buy.stripe.com/your-link-999
     Market Leader:   https://buy.stripe.com/your-link-2499
     ```

  4. Embed these links directly on the pricing section of your site (replace the `#contact` hrefs on the "Get Started" buttons).
  5. Stripe handles invoicing, receipts, tax reporting.

- **Recurring payments:** Set up Stripe Subscriptions for the monthly hosting fees ($15/25/50 per month). Stripe auto-charges clients monthly.

#### Stripe Invoice Workflow

```
Client says yes -> You create invoice in Stripe -> Client pays via link ->
You get paid in 2 days -> Stripe sends receipt -> You start work
```

Create invoice templates in Stripe for:
- Website build (one-time)
- Monthly hosting (recurring)
- Add-on services (hourly/project)

#### Square (Alternative)

- **URL:** https://squareup.com
- **Cost:** 2.6% + $0.10 per transaction (cheaper per transaction than Stripe)
- **Best for:** In-person payments (if you meet clients face-to-face).
- **Square Invoices** are free to send. Client pays online.

**Recommendation:** Use Stripe for online payments and recurring billing. Use Square only if you need in-person card processing.

---

### 4B. Client Communication -- CRM

#### Tier 1: Starting Out (Free)

**HubSpot CRM Free**
- **URL:** https://www.hubspot.com/products/crm
- **Cost:** Free forever (paid tiers start at $20/month)
- **What you get:**
  - Contact management (track every client, lead, and prospect)
  - Deal pipeline (track each project from lead to paid to delivered)
  - Email tracking (know when clients open your emails)
  - Meeting scheduler (like Calendly but built-in)
  - Email templates

**Set up a deal pipeline in HubSpot:**

```
Lead In -> Audit Sent -> Mockup Sent -> Approved -> Building -> Delivered -> Paid
```

Every new inquiry goes into "Lead In." Move it through the pipeline as the project progresses.

#### Tier 2: Growing (When you have 10+ active clients)

**GoHighLevel (GHL)**
- **URL:** https://www.gohighlevel.com
- **Cost:** $97/month (Agency Starter) or $297/month (Agency Unlimited)
- **What you get:** CRM, website builder, funnel builder, email marketing, SMS marketing, reputation management, booking calendar, and more. This is the all-in-one platform for agencies.
- **When to switch:** When you have enough recurring revenue that $97/month is less than 5% of your monthly income from clients.

#### Day-to-Day Communication

- **Texting clients:** Use your personal phone number (already listed on the site). Consider **Google Voice** (https://voice.google.com) for a free second number to keep personal and business separate.
- **Email:** Use your professional email (`donny@teflondon.com`) for all client communication. Never use `dismail93@gmail.com` for client work -- keep that as a personal backup.
- **Video calls:** Google Meet (free with Google Workspace) or Zoom free tier.

---

### 4C. Project Management

#### For Solo Operation (Now)

**Notion** (https://notion.so)
- **Cost:** Free for personal use
- **Use it for:**
  - Client database (name, business, domain, hosting tier, payment status)
  - Project tracker (what stage each build is in)
  - Templates library (proposal template, audit template, onboarding checklist)
  - Knowledge base (how-to guides for yourself)

**Set up a Notion client tracker:**

| Client | Business | Domain | Tier | Status | Paid | Launch Date | Monthly Due |
|--------|----------|--------|------|--------|------|-------------|-------------|
| Joe    | Joe's Plumbing | joesplumbinghtx.com | Launch Pad | Live | Yes | 2026-01-15 | $15 on 15th |

#### For Scaling (3+ Concurrent Projects)

**Linear** (https://linear.app)
- **Cost:** Free for small teams
- **Why:** Purpose-built for tracking development work. Each client project becomes a "Project" in Linear. Tasks like "Build hero section," "Set up DNS," "Deploy to Netlify" become trackable issues.

---

### 4D. Design Tools for Mockups

#### Figma (Primary Tool)

- **URL:** https://figma.com
- **Cost:** Free for 3 projects (plenty to start)
- **What you use it for:**
  - Designing client mockups before building.
  - Creating the OG image for social sharing.
  - Designing logos if clients need one.
  - Presenting designs to clients via shareable link (they don't need a Figma account to view).

**Workflow:**

```
1. Client fills out contact form
2. You do free audit (15 min)
3. You design mockup in Figma (1-2 hours)
4. Send client a Figma view link
5. Client approves or requests changes
6. You build the real site
```

**Figma template library:** Build a Figma file with reusable components matching the Teflon Don style (dark theme, orange accents, Space Grotesk headings). Clone this file per client and customize.

#### Relume (Speed Boost)

- **URL:** https://www.relume.io
- **Cost:** $40/month
- **What it does:** AI-generated wireframes. Describe a business, and Relume generates a full site wireframe with copy. Export to Figma.
- **When to get it:** When you are doing 4+ sites per month and need to speed up the mockup phase.

#### Quick Mockup Alternative: Screenshots

For the $499 tier, a full Figma mockup may not be worth your time. Instead:

1. Clone your "Launch Pad" Astro template.
2. Swap in the client's business name and colors.
3. Run `npm run dev` and take screenshots.
4. Send screenshots to the client. This takes 20 minutes instead of 2 hours.

---

### 4E. Analytics Setup

#### Google Analytics 4 (GA4) -- For Every Client Site

**Setup:**

1. Go to https://analytics.google.com
2. Create an account for Teflon Don LLC.
3. Create a new **Property** for each client site.
4. Get the **Measurement ID** (format: `G-XXXXXXXXXX`).
5. Add this script to the client's `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Key metrics to track for clients:**
- Users (how many people visit the site)
- Sessions (how many visits)
- Bounce rate (percentage who leave immediately)
- Top pages (which pages get the most traffic)
- Traffic sources (Google search, direct, social, referral)
- Conversions (form submissions, phone clicks)

**Set up conversion tracking** for:
- Contact form submission (track the `handleSubmit` function firing)
- Phone number clicks (track clicks on `tel:` links)

```js
// Add to the handleSubmit function:
gtag('event', 'generate_lead', {
  'event_category': 'Contact',
  'event_label': 'Contact Form Submission'
});

// Add to phone links:
// <a href="tel:+15186989870" onclick="gtag('event','click',{event_category:'Phone',event_label:'Header CTA'})">
```

#### Google Search Console -- For SEO Monitoring

1. Go to https://search.google.com/search-console
2. Add property (the client's domain).
3. Verify ownership via DNS TXT record.
4. Monitor:
   - Which search queries bring traffic
   - Which pages are indexed
   - Any crawl errors
   - Mobile usability issues

#### Simpler Alternative: Plausible Analytics

- **URL:** https://plausible.io
- **Cost:** $9/month for up to 10k monthly pageviews
- **Why:** Privacy-friendly (no cookies, no consent banners needed), simpler dashboard than GA4. One line of code:

```html
<script defer data-domain="teflondon.com" src="https://plausible.io/js/script.js"></script>
```

**Recommendation:** Use GA4 for client sites (it is free and clients expect it). Consider Plausible for your own site if you want a cleaner dashboard.

---

## 5. Security Checklist

### 5A. Your Site (teflondon.com)

- [x] **HTTPS enforced.** Automatic with Netlify/Vercel. Force HTTPS redirect in Netlify settings.
- [x] **No server-side code.** Static HTML = no server to hack. No database to breach. No admin panel to brute-force. The attack surface is essentially zero.
- [x] **No user data stored.** The contact form uses `mailto:` which opens the user's email client. No data is sent to a server or stored anywhere.
- [ ] **Add security headers.** Create a `_headers` file (Netlify) or `vercel.json` (Vercel):

**Netlify `_headers` file** (place in root of repo alongside `index.html`):

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://www.google-analytics.com
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

**Vercel `vercel.json`:**

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Strict-Transport-Security", "value": "max-age=31536000; includeSubDomains; preload" }
      ]
    }
  ]
}
```

- [ ] **Set up Subresource Integrity (SRI) if you add external scripts.** Currently no external JS is loaded, so this is not needed yet. If you add GA4:

  The `gtag.js` script from Google does not support SRI because Google updates it frequently. This is acceptable for GA4 specifically.

- [ ] **Email address hardening.** The site exposes `dismail93@gmail.com` in the HTML source. Bots scrape this for spam. Consider:
  - Using a contact form service (Netlify Forms, Formspree) instead of `mailto:`.
  - Obfuscating the email with JavaScript (encode it, decode on click).
  - Switching to a professional email that has better spam filtering (Google Workspace).

### 5B. Client Sites

- [ ] **HTTPS on every client site.** Non-negotiable. Netlify/Vercel handle this automatically.
- [ ] **Security headers on every client site.** Copy the `_headers` file into every client repo.
- [ ] **Keep dependencies updated.** If using Astro/Next.js for client sites:

  ```bash
  # Check for outdated packages
  npm outdated

  # Update all dependencies
  npm update

  # Check for known vulnerabilities
  npm audit
  ```

  Run this monthly for every active client site.

- [ ] **If using a CMS (Decap/Sanity):**
  - Enable two-factor authentication (2FA) on all CMS accounts.
  - Use Netlify Identity with email confirmation for Decap CMS access.
  - Restrict CMS access to only the client (not public registration).

- [ ] **If clients have forms that submit to a server:**
  - Rate-limit form submissions (Netlify Forms does this automatically).
  - Add honeypot fields (hidden fields that only bots fill in) to block spam.
  - Use CAPTCHA only as a last resort (it hurts conversion rates).

  Netlify Forms honeypot example:
  ```html
  <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
    <p class="hidden" style="display:none">
      <label>Don't fill this out: <input name="bot-field" /></label>
    </p>
    <!-- rest of form fields -->
  </form>
  ```

- [ ] **Never put API keys in client-side JavaScript.** If a client site needs to call an API (e.g., for a chatbot), use Netlify Functions or Vercel Serverless Functions as a proxy:

  ```
  Client browser -> Your serverless function (has the API key) -> External API
  ```

  The API key lives in Netlify environment variables, never in the HTML/JS source.

### 5C. Account Security (Your Accounts)

- [ ] **Enable 2FA on every account:** GitHub, Netlify, Vercel, Cloudflare, Google Workspace, Stripe, Namecheap, HubSpot.
- [ ] **Use a password manager:** Bitwarden (https://bitwarden.com -- free) or 1Password ($3/month).
- [ ] **Separate personal and business accounts.** Use your `@teflondon.com` email for all business services. Use a unique, strong password for each.
- [ ] **SSH keys for Git.** Do not use password authentication for GitHub:

  ```bash
  # Generate SSH key
  ssh-keygen -t ed25519 -C "donny@teflondon.com"

  # Add to ssh-agent
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_ed25519

  # Copy public key
  pbcopy < ~/.ssh/id_ed25519.pub

  # Add to GitHub: Settings > SSH and GPG keys > New SSH key
  ```

---

## 6. Backup Strategy

### 6A. Code Backups

**Primary:** GitHub. Every site lives in a Git repository. Git itself is a backup -- every commit is a snapshot of the entire project.

**Setup:**

```bash
# For your site
cd /Users/donny/teflon-don-site
git init
git add index.html
git commit -m "Initial commit"
git remote add origin git@github.com:YOUR_USERNAME/teflon-don-site.git
git push -u origin main

# For each client site, repeat the process with a separate repo:
# git@github.com:YOUR_USERNAME/client-joes-plumbing.git
# git@github.com:YOUR_USERNAME/client-marias-salon.git
```

**Repository naming convention:**

```
teflon-don-site           (your site)
teflon-don-templates      (reusable Astro templates)
client-joes-plumbing      (client site)
client-marias-salon       (client site)
client-texas-top-roofing  (client site)
```

**All repos should be PRIVATE.** Never make client code public.

**Secondary backup:** Clone all repos to a second location. Options:

1. **External drive (monthly):**

   ```bash
   # Create a backup script
   mkdir -p /Volumes/BackupDrive/teflon-don-repos

   # Clone all repos (first time)
   cd /Volumes/BackupDrive/teflon-don-repos
   gh repo list YOUR_USERNAME --limit 100 --json name,sshUrl | \
     jq -r '.[].sshUrl' | \
     xargs -I {} git clone {}

   # Update all repos (subsequent runs)
   for dir in /Volumes/BackupDrive/teflon-don-repos/*/; do
     cd "$dir" && git pull && cd ..
   done
   ```

2. **GitLab mirror (automatic):**
   - Create a GitLab account.
   - For each repo, set up a mirror: GitLab project > Settings > Repository > Mirroring repositories.
   - GitLab pulls from GitHub automatically every hour.

### 6B. Client Data Backups

**What client data do you store?**

- Client contact info (in HubSpot CRM) -- HubSpot backs this up automatically.
- Client contracts/agreements (store in Google Drive).
- Client site content (in Git repos -- already backed up).
- Client DNS records (in Cloudflare -- screenshot or export quarterly).

**Google Drive backup structure:**

```
Google Drive/
  Teflon Don LLC/
    Clients/
      Joes Plumbing/
        contract.pdf
        brand-assets/
        notes.md
      Marias Salon/
        contract.pdf
        brand-assets/
        notes.md
    Financials/
      invoices/
      expenses/
    Templates/
      proposal-template.docx
      contract-template.pdf
      onboarding-checklist.md
```

### 6C. Email Backups

**Google Workspace:** Google backs up email automatically. Your email lives in Google's infrastructure with 99.9% uptime SLA.

**Additional protection:**

1. **Enable Google Vault** (included in Business Plus, $18/month) for email archiving and legal hold. Only needed if you anticipate contractual disputes.

2. **Local backup (overkill but safe):**

   ```bash
   # Use gmvault to backup Gmail locally
   pip install gmvault
   gmvault sync donny@teflondon.com

   # Run monthly as a cron job
   # Backups stored in ~/gmvault-db/
   ```

### 6D. Backup Schedule Summary

| What | Where | Frequency | Method |
|------|-------|-----------|--------|
| Site code (all repos) | GitHub (primary) | Every commit (real-time) | `git push` |
| Site code (mirror) | GitLab or external drive | Hourly (GitLab) or Monthly (drive) | Auto-mirror or manual pull |
| Client data | Google Drive | As created | Manual upload |
| CRM contacts | HubSpot | Automatic | HubSpot built-in |
| Email | Google Workspace | Automatic | Google built-in |
| DNS records | Cloudflare dashboard | Quarterly | Screenshot / export |
| Stripe data | Stripe dashboard | Automatic | Stripe built-in |
| Local machine | Time Machine (macOS) | Hourly | macOS built-in |

**Enable Time Machine NOW if it is not already running:**

```
System Settings > General > Time Machine > Add Backup Disk
```

This backs up your entire machine (including all local code, documents, and config files) to an external drive every hour. If your laptop dies, you restore from Time Machine and are back to work within an hour.

---

## Quick Reference: Monthly Maintenance Checklist

Run through this every month:

- [ ] `npm audit` on all client sites with Node.js dependencies.
- [ ] Check domain expiration dates (Cloudflare dashboard).
- [ ] Verify all client sites are loading (use https://uptimerobot.com -- free for 50 monitors).
- [ ] Review Stripe for overdue invoices.
- [ ] Check Google Search Console for crawl errors on all sites.
- [ ] Pull latest analytics for client sites; send monthly report if on Revenue Machine or Market Leader tier.
- [ ] Back up repos to secondary location if not using auto-mirror.
- [ ] Review and rotate any API keys or tokens that are older than 90 days.

---

## Quick Reference: New Client Deployment Checklist

For each new client, follow this exact sequence:

```
1.  [ ] Client inquiry received (HubSpot: Lead In)
2.  [ ] Free audit completed and sent to client
3.  [ ] Mockup designed in Figma and sent to client
4.  [ ] Client approves mockup
5.  [ ] Stripe invoice sent and paid
6.  [ ] Domain purchased (Cloudflare Registrar)
7.  [ ] Git repo created (GitHub, private)
8.  [ ] Site built from template (Astro or raw HTML)
9.  [ ] Content populated (client's text, images, branding)
10. [ ] SEO tags added (title, meta description, OG tags, schema.org JSON-LD)
11. [ ] Google Analytics added (GA4 measurement ID)
12. [ ] Security headers added (_headers file)
13. [ ] Site deployed to Netlify
14. [ ] Custom domain connected (DNS records updated)
15. [ ] SSL verified (padlock in browser)
16. [ ] Google Search Console property created
17. [ ] Google Business Profile set up (if Revenue Machine or Market Leader tier)
18. [ ] Client walkthrough call (show them the live site)
19. [ ] Recurring billing set up in Stripe (monthly hosting)
20. [ ] HubSpot deal moved to "Delivered"
```

---

*This document is the single source of truth for all technical operations at Teflon Don LLC. Update it as the business evolves.*
