import { chromium, Browser, Page, expect } from '@playwright/test';

import { Given, When, Then } from '@cucumber/cucumber';

import { HomePage } from '@src/pages/home.page';

let browser: Browser;
let page: Page;

let home: HomePage;

Given('I open browser', async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
});

When('I navigate to Playwright web site', async function () {
  home = new HomePage(page);
  await home.open();
  await page.goto('https://playwright.dev');
});

When('I click to Get Started', async function () {
  await page.getByRole('link', { name: 'Get started' }).click();
});

Then('I see the {string} title', async function (title: string) {
  await expect.soft(page).toHaveTitle(new RegExp(title));
  await browser.close();
});
