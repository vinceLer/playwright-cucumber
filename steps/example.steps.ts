import { expect } from '@playwright/test';

import { Given, When, Then } from '@cucumber/cucumber';

import { HomePage } from '@src/pages/home.page';

import { pageFixture } from '@setup/hooks/pageFeature';

let home: HomePage;

Given('I navigate to Playwright web site', async function () {
  home = new HomePage(pageFixture.page);
  await home.open();
});

When('I click to Get Started', async function () {
  await pageFixture.page.getByRole('link', { name: 'Get started' }).click();
});

Then('I see the {string} title', async function (title: string) {
  await expect.soft(pageFixture.page).toHaveTitle(new RegExp(title));
});
