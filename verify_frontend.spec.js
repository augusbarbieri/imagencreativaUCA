const { test, expect } = require('@playwright/test');

test('should display the new reviews on the main page', async ({ page }) => {
  // Navigate to the local server
  await page.goto('http://localhost:8000/resenas.html');

  // Wait for the reviews to be loaded and rendered
  await page.waitForSelector('.trustpilot-card');

  // Verify that the new reviews are visible
  await expect(page.getByText('TaylorFan')).toBeVisible();
  await expect(page.getByText('YeezyFan')).toBeVisible();
  await expect(page.getByText('QueenLover')).toBeVisible();

  // Take a screenshot to confirm
  await page.screenshot({ path: 'verification.png' });
});
