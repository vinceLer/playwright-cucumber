import { type Cookie, type Page } from "@playwright/test";

export abstract class BasePage {
  protected readonly BASE_PAGE = "";
  protected readonly PAGE_NAME: string;
  protected readonly PAGE_URL: string;
  protected readonly page: Page;
  protected pageStatusCode!: number;

  constructor(page: Page, pageName: string, pageUrl = "") {
    this.page = page;
    this.PAGE_NAME = pageName;
    this.PAGE_URL = pageUrl;
    page.on("response", async (response) => {
      if (response.url() === `${this.BASE_PAGE}${this.PAGE_URL}`) {
        this.pageStatusCode = response.status();
      }
    });
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        console.warn(`JS error : ${msg.text()}`);
      }
    });
  }

  public async open(): Promise<void> {
    await this.page.goto(`${this.BASE_PAGE}${this.PAGE_URL}`);
  }

  public async getPageUrl(): Promise<string> {
    return `${this.BASE_PAGE}${this.PAGE_URL}`;
  }

  public async getPageStatusCode(): Promise<number> {
    return this.pageStatusCode;
  }

  public async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  public async getCookies(): Promise<Cookie[]> {
    return this.page.context().cookies();
  }

  public async waitForElement(selector: string): Promise<void> {
    await this.page.waitForSelector(selector, { state: "visible" });
  }
}