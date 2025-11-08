import { type Locator, type Page } from "@playwright/test";

export abstract class BaseLocator {
  protected readonly page: Page;
  public cachedLocators: Record<string, Locator> = {};

  constructor(page: Page) {
    this.page = page;
  }
}