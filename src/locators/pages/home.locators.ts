import { type Locator } from "@playwright/test";

import { BaseLocator } from "@core/base/base-locator";

export class HomeLocators extends BaseLocator {

    get getStartedLink(): Locator {
        return this.page.getByRole('link', { name: 'Get started' });
    }
}