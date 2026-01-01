import { Locator, Page } from "@playwright/test"
//export pageclass

export class Homepage {
    readonly page: Page
    readonly loginurl: Locator
    readonly acceptcookies: Locator

    constructor(page: Page) {
        this.page = page
        this.loginurl = page.getByRole('link', { name: ' Signup / Login' })
        this.acceptcookies = page.getByRole('button', { name: 'consent' })
    }

    //Go to URL
    async goto() {
        await this.page.goto(`${process.env.BASE_URL}`)
    }

    //Popup appears
    async cookies() {

        if (await this.acceptcookies.isVisible()) {
            await this.acceptcookies.click()
        }
    }

    // Go to Signup Page
    async signup() {
        await this.loginurl.click()
    }
}