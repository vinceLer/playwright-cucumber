import { type Page } from "@playwright/test";

export abstract class BaseLayout {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}