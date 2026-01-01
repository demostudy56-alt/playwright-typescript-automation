import { Locator, Page } from "@playwright/test"

export class LogintoAccount {
    readonly page: Page
    readonly loginemailInput: Locator
    readonly loginpasswordInput: Locator
    readonly loginbtn: Locator
    readonly loggedmsg:Locator
    readonly logoutbtn:Locator

    constructor(page: Page) {
        this.page = page
        this.loginemailInput = page.locator('input[data-qa="login-email"]')
        this.loginpasswordInput = page.getByPlaceholder('password')
        this.loginbtn = page.getByRole('button', { name: 'Login' })
        this.loggedmsg=page.locator('a',{hasText:'Logged in as '})
        this.logoutbtn = page.getByRole('link', { name: 'Logout' })

    }

    async exisitinguser() {
        await this.loginemailInput.fill(`${process.env.EXISTING_USER}`)
        await this.loginpasswordInput.fill(`${process.env.EXISTING_USER_PASSWORD}`)
        await this.loginbtn.click()

    }
    async isLoggedin():Promise<boolean>{
       return await this.logoutbtn.isVisible()
    }
}