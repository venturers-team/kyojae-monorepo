import { test, expect } from '@playwright/test';

test.describe('paperclip smoke', () => {
  test('home page renders without console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (err) => errors.push(err.message));

    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/PaperClip/i);
    await expect(page.locator('main')).toBeVisible();
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
  });

  test('quick-start chapter page loads', async ({ page }) => {
    const response = await page.goto('/00-quick-start/');
    expect(response?.status()).toBe(200);
    await expect(page.locator('main')).toBeVisible();
    await expect(page).toHaveTitle(/PaperClip/i);
  });

  test('home → quick-start navigation', async ({ page }) => {
    await page.goto('/');
    const link = page.locator('a[href$="/00-quick-start/"]').first();
    await link.click();
    await expect(page).toHaveURL(/\/00-quick-start\/?$/);
    await expect(page.locator('main')).toBeVisible();
  });

  test('sidebar navigation between chapters', async ({ page }) => {
    await page.goto('/00-quick-start/');
    const link = page.locator('a[href$="/01-setup/01-install/"]').first();
    await link.click();
    await expect(page).toHaveURL(/\/01-setup\/01-install/);
    await expect(page.locator('main')).toBeVisible();
  });
});
