import { Locator, Page } from "@playwright/test";

export class LogOutpage {
    readonly page: Page
    readonly logoutbtn: Locator

    constructor(page: Page) {
        this.page = page
        this.logoutbtn = page.getByRole('link', { name: 'Logout' })
    }
    async logoutsession() {
        await this.logoutbtn.click()
    }
   
}
