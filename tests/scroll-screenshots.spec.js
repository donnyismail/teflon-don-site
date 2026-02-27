const { test } = require('@playwright/test');

const SITE_URL = 'https://teflondon.dev/';

test('Scroll through site and capture section screenshots', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(SITE_URL, { waitUntil: 'networkidle' });

  // Wait for hero animations
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/Users/donny/teflon-don-site/tests/section-01-hero.png' });

  // Scroll to pain section
  await page.evaluate(() => {
    document.querySelector('.pain')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/Users/donny/teflon-don-site/tests/section-02-pain.png' });

  // Scroll to services
  await page.evaluate(() => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/Users/donny/teflon-don-site/tests/section-03-services.png' });

  // Scroll to results
  await page.evaluate(() => {
    document.querySelector('.results')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/Users/donny/teflon-don-site/tests/section-04-results.png' });

  // Scroll to work
  await page.evaluate(() => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/Users/donny/teflon-don-site/tests/section-05-work.png' });

  // Scroll to about
  await page.evaluate(() => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/Users/donny/teflon-don-site/tests/section-06-about.png' });

  // Scroll to pricing
  await page.evaluate(() => {
    document.querySelector('#pricing')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/Users/donny/teflon-don-site/tests/section-07-pricing.png' });

  // Scroll to FAQ
  await page.evaluate(() => {
    document.querySelector('#faq')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/Users/donny/teflon-don-site/tests/section-08-faq.png' });

  // Scroll to contact
  await page.evaluate(() => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/Users/donny/teflon-don-site/tests/section-09-contact.png' });
});
