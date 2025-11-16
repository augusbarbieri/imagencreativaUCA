const { test, expect } = require('@playwright/test');

test('should display the new reviews on the main page', async ({ page }) => {
  // Navigate to the local server
  await page.goto('http://localhost:8000/main.html');

  // Clear localStorage for the origin and reload
  await page.evaluate(() => {
    localStorage.clear();
  });
  await page.reload();

  // Wait for the reviews to be loaded and rendered
  await page.waitForSelector('.review-card');

  // Verify that the new reviews are visible
  await expect(page.getByText('The Strokes')).toBeVisible();
  await expect(page.getByText('Is This It')).toBeVisible();
  await expect(page.getByText('Future Nostalgia')).toBeVisible();
  await expect(page.getByText('Dua Lipa')).toBeVisible();

  // Take a screenshot to confirm
  await page.screenshot({ path: '/home/jules/verification/verification.png' });
});
