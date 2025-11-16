const { test, expect } = require('@playwright/test');

const pages = [
  'main.html',
  'crear-resena.html',
  'juegos.html',
  'perfil.html',
  'resenas.html',
];

for (const pageName of pages) {
  test(`should scroll to the bottom of ${pageName}`, async ({ page }) => {
    await page.goto(`http://localhost:8000/${pageName}`);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500); // Wait for scrolling to finish
    await expect(page).toHaveScreenshot(`${pageName.replace('.html', '')}-screenshot.png`, { fullPage: true });
  });
}
