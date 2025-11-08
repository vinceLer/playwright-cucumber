import { type Locator, Page } from "@playwright/test";

export abstract class BaseUI {
  protected locator: Locator;
  protected page: Page;

  constructor(page: Page, protected label: string) {
    this.page = page;
    this.locator = this.resolveLocator();
  }

  protected abstract resolveLocator(): Locator;

  get raw(): Locator {
    return this.locator;
  }
}