import test, { type Cookie, type Page } from "@playwright/test";

export abstract class BasePage {
  protected readonly BASE_PAGE = "";
  protected readonly PAGE_NAME: string;
  protected readonly PAGE_URL: string;
  protected readonly page: Page;
  protected pageStatusCode!: number;
  protected startTime: number;
  protected loadTime!: number;

  constructor(page: Page, pageName: string, pageUrl = "") {
    this.page = page;
    this.PAGE_NAME = pageName;
    this.PAGE_URL = pageUrl;
    this.startTime = Date.now();
    page.on("response", async (response) => {
      if (response.url() === `${this.BASE_PAGE}${this.PAGE_URL}`) {
        const endTime = Date.now();
        this.loadTime = endTime - this.startTime;
        this.pageStatusCode = response.status();
        test.info().annotations.push({
          type: "page loaded ⏳",
          description: `${this.PAGE_NAME} in ${this.loadTime} ms`,
        }); // ⏳ 🚀 ⚡ 🌐
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

  public async getLoadTime(): Promise<number> {
    return this.loadTime;
  }

  public async getCookies(): Promise<Cookie[]> {
    return this.page.context().cookies();
  }

  public async waitForElement(selector: string): Promise<void> {
    await this.page.waitForSelector(selector, { state: "visible" });
  }
}