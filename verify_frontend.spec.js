const { test, expect } = require('@playwright/test');

test('should display the new reviews on the main page', async ({ page }) => {
  // Navigate to the local server
  await page.goto('http://localhost:8000/perfil.html');

  // Wait for the reviews to be loaded
  await page.waitForSelector('.album-card');

  // Take a screenshot of the entire page
  await page.screenshot({ path: 'perfil_screenshot.png', fullPage: true });
});
