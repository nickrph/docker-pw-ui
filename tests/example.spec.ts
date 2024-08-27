import { test, expect } from '@playwright/test';

test('page has loaded', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveScreenshot();
});