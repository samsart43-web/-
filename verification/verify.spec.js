import { test, expect } from '@playwright/test';

test('capture screenshots', async ({ page }) => {
  await page.goto('http://localhost:4173');
  await page.waitForTimeout(2000); // Wait for animations
  await page.screenshot({ path: 'verification/final_hero.png' });
  await page.screenshot({ path: 'verification/final_full.png', fullPage: true });
});
