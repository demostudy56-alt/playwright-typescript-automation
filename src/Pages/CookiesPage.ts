import { Locator, Page } from "@playwright/test"
//export pageclass

export class CookiesPage {
    readonly page: Page
    readonly acceptcookies: Locator

    constructor(page: Page) {
        this.page = page
        this.acceptcookies = page.getByRole('button', { name: 'consent' })
    }

    //Popup appears
    async clickcookie() {
        if (await this.acceptcookies.isVisible()) {

            await this.acceptcookies.click()
        }
    }
}