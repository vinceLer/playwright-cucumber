import { After, Before } from '@cucumber/cucumber';

import { Browser, chromium, Page } from '@playwright/test';

import { pageFixture } from '@setup/hooks/pageFeature';

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  pageFixture.page = page;
});

After(async function () {
  await pageFixture.page.close();
  await browser.close();
});