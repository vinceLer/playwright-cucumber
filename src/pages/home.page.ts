import { type Page } from "@playwright/test";

import { BasePage } from "@core/base/base-page";

import { HomeLocators } from "@src/locators/pages/home.locators";

import { BASE_PAGE_PLAYWRIGHT } from "@common/data/urls";

export class HomePage extends BasePage {
  readonly locators: HomeLocators;

  constructor(page: Page) {
    super(page, "Home page", BASE_PAGE_PLAYWRIGHT);
    this.locators = new HomeLocators(page);
  }

  async clickOnGetStarted() {
    await this.locators.getStartedLink.first().click();
  }
}