import { test, expect } from '@playwright/test';

import { HomePage } from '@src/pages/home.page';

test('has title', async ({ page }) => {
  const home = new HomePage(page);

  await home.open();

  await expect.soft(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  const home = new HomePage(page);
  await home.open();

  await home.clickOnGetStarted();

  await expect.soft(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
