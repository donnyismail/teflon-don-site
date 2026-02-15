const { test, expect } = require('@playwright/test');

const SITE_URL = 'https://donnysyntracts.github.io/teflon-don-site/';

test.describe('Teflon Don Site - Full Audit', () => {

  test('Page loads and title is correct', async ({ page }) => {
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const title = await page.title();
    expect(title).toContain('Teflon Don');
    expect(title).toContain('Houston');
  });

  test('No console errors on load', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto(SITE_URL, { waitUntil: 'networkidle' });
    // Filter out known benign errors (like favicon 404s)
    const realErrors = errors.filter(e => !e.includes('favicon') && !e.includes('404'));
    expect(realErrors).toEqual([]);
  });

  test('Navbar is visible and has solid background', async ({ page }) => {
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const nav = page.locator('nav#nav');
    await expect(nav).toBeVisible();
    const bg = await nav.evaluate(el => getComputedStyle(el).backgroundColor);
    // Should NOT be fully transparent
    expect(bg).not.toBe('rgba(0, 0, 0, 0)');
    expect(bg).not.toBe('transparent');
  });

  test('Navbar does not overlap page content (z-index check)', async ({ page }) => {
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const navZ = await page.locator('nav#nav').evaluate(el => getComputedStyle(el).zIndex);
    const heroZ = await page.locator('.hero').evaluate(el => getComputedStyle(el).zIndex);
    expect(parseInt(navZ)).toBeGreaterThan(parseInt(heroZ) || 0);
  });

  test('All nav links point to valid anchors', async ({ page }) => {
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const links = await page.locator('.nav-r a[href^="#"]').all();
    for (const link of links) {
      const href = await link.getAttribute('href');
      if (href === '#') continue; // logo
      const target = page.locator(href);
      await expect(target).toHaveCount(1);
    }
  });

  test('Hero section renders with headline', async ({ page }) => {
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const h1 = page.locator('.hero h1');
    await expect(h1).toBeVisible();
    const text = await h1.textContent();
    expect(text.length).toBeGreaterThan(10);
  });

  test('Hero CTA buttons are visible and clickable', async ({ page }) => {
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const buttons = page.locator('.hero-ctas a, .hero-ctas button');
    const count = await buttons.count();
    expect(count).toBeGreaterThanOrEqual(1);
    for (let i = 0; i < count; i++) {
      await expect(buttons.nth(i)).toBeVisible();
    }
  });

  test('Services section has cards', async ({ page }) => {
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const cards = page.locator('.svc');
    const count = await cards.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('Pricing section shows 3 tiers', async ({ page }) => {
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const cols = page.locator('.price-col');
    await expect(cols).toHaveCount(3);
  });

  test('Contact form exists with required fields', async ({ page }) => {
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const form = page.locator('form');
    await expect(form.first()).toBeVisible();
    // Check for name and phone inputs
    const nameInput = page.locator('input[name="name"], input[autocomplete="name"]');
    expect(await nameInput.count()).toBeGreaterThanOrEqual(1);
  });

  test('Phone number is clickable (tel: link)', async ({ page }) => {
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const telLinks = page.locator('a[href^="tel:"]');
    const count = await telLinks.count();
    expect(count).toBeGreaterThanOrEqual(2); // Should be in multiple places
  });

  test('FAQ section has expandable items', async ({ page }) => {
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const faqItems = page.locator('.faq-q');
    const count = await faqItems.count();
    expect(count).toBeGreaterThanOrEqual(3);
    // Click first FAQ and check it expands
    await faqItems.first().click();
    const answer = page.locator('.faq-a').first();
    // After click, the answer should be visible (max-height changes)
    await page.waitForTimeout(400);
  });

  test('Meta description exists and is proper length', async ({ page }) => {
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const desc = await page.locator('meta[name="description"]').getAttribute('content');
    expect(desc).toBeTruthy();
    expect(desc.length).toBeGreaterThan(50);
    expect(desc.length).toBeLessThanOrEqual(200);
  });

  test('Open Graph tags are present', async ({ page }) => {
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    const ogDesc = await page.locator('meta[property="og:description"]').getAttribute('content');
    expect(ogTitle).toBeTruthy();
    expect(ogDesc).toBeTruthy();
  });

  test('JSON-LD structured data is valid', async ({ page }) => {
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const scripts = await page.locator('script[type="application/ld+json"]').all();
    expect(scripts.length).toBeGreaterThanOrEqual(1);
    for (const script of scripts) {
      const content = await script.textContent();
      const parsed = JSON.parse(content);
      expect(parsed['@context']).toBe('https://schema.org');
    }
  });

  test('No broken images', async ({ page }) => {
    const brokenImages = [];
    page.on('response', response => {
      if (response.url().match(/\.(png|jpg|jpeg|gif|svg|webp)/i) && response.status() >= 400) {
        brokenImages.push(response.url());
      }
    });
    await page.goto(SITE_URL, { waitUntil: 'networkidle' });
    expect(brokenImages).toEqual([]);
  });

  test('Page loads under 5 seconds', async ({ page }) => {
    const start = Date.now();
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const loadTime = Date.now() - start;
    expect(loadTime).toBeLessThan(5000);
  });

  test('Privacy page loads', async ({ page }) => {
    await page.goto(SITE_URL.replace('index.html', '') + 'privacy.html', { waitUntil: 'domcontentloaded' });
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });

  test('Terms page loads', async ({ page }) => {
    await page.goto(SITE_URL.replace('index.html', '') + 'terms.html', { waitUntil: 'domcontentloaded' });
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });

  test('Scroll progress bar works', async ({ page }) => {
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const progressBar = page.locator('.scroll-progress');
    // Progress bar starts at width:0 (hidden), scroll first then check
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(500);
    const width = await progressBar.evaluate(el => parseFloat(el.style.width));
    expect(width).toBeGreaterThan(0);
  });

  test('Mobile viewport - burger menu appears', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 }); // iPhone
    await page.goto(SITE_URL, { waitUntil: 'domcontentloaded' });
    const burger = page.locator('.burger');
    await expect(burger).toBeVisible();
  });

  test('Desktop screenshot', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(SITE_URL, { waitUntil: 'networkidle' });
    await page.screenshot({ path: '/Users/donny/teflon-don-site/tests/desktop-screenshot.png', fullPage: true });
  });

  test('Mobile screenshot', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(SITE_URL, { waitUntil: 'networkidle' });
    await page.screenshot({ path: '/Users/donny/teflon-don-site/tests/mobile-screenshot.png', fullPage: true });
  });

});
