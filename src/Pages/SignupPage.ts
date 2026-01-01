import { Locator, Page, expect } from "@playwright/test";


export class SignupPage {
    readonly page: Page
    readonly nameInput: Locator
    readonly emailInput: Locator
    readonly signupbtn: Locator
    readonly titleInput: Locator
    readonly passwordInput: Locator
    readonly dayInput: Locator
    readonly monthInput: Locator
    readonly yearInput: Locator
    readonly newsletterInput: Locator
    readonly FirstnameInput: Locator
    readonly LastnameInput: Locator
    readonly companyInput: Locator
    readonly addressInput: Locator
    readonly countryInput: Locator
    readonly stateInput: Locator
    readonly cityInput: Locator
    readonly ZipcodeInput: Locator
    readonly MobilenumberInput: Locator
    readonly createaccountbtn: Locator
    readonly emailExistsError: Locator
    readonly continuebtn: Locator
readonly accountcreatedmsg:Locator



    constructor(page: Page) {
        this.page = page
        this.nameInput = page.getByPlaceholder('Name')
        this.emailInput = page.locator('input[data-qa="signup-email"]')
        this.signupbtn = page.getByRole('button', { name: 'Signup' })
        //Enter Account Information
        this.titleInput = page.locator('#id_gender2')
        this.passwordInput = page.locator('#password')
        this.dayInput = page.locator('#days')
        this.monthInput = page.locator('#months')
        this.yearInput = page.locator('#years')
        this.newsletterInput = page.getByRole('checkbox', { name: 'newsletter' })
        //Enter Address Information
        this.FirstnameInput = page.locator('#first_name')
        this.LastnameInput = page.locator('#last_name')
        this.companyInput = page.locator('#company')
        this.addressInput = page.locator('#address1')
        this.countryInput = page.locator('#country')
        this.stateInput = page.locator('#state')
        this.cityInput = page.locator('#city')
        this.ZipcodeInput = page.locator('#zipcode')
        this.MobilenumberInput = page.locator('#mobile_number')
        //Create Account
        this.createaccountbtn = page.getByRole('button', { name: 'Create Account' })
        //Continue 
        this.accountcreatedmsg=page.locator('[data-qa="account-created"]')
        this.continuebtn = page.getByRole('link', { name: 'Continue' })
        //User exists
        this.emailExistsError = page.locator('p', { hasText: 'Email Address already exist!' });


    }
    async signupUser(username: string, emailaddress: string) {
        await this.nameInput.fill(username)
        await this.emailInput.fill(emailaddress)
        await this.signupbtn.click()
    }

    async accountinformation(password: string, day: string, month: string, year: string) {
        await this.titleInput.click()
        await this.passwordInput.fill(password)
        await this.dayInput.selectOption(day)
        await this.monthInput.selectOption(month)
        await this.yearInput.selectOption(year)
        await this.newsletterInput.check()
    }

    async addressInformation(firstName: string, LastName: string, CompanyName: string, address: string,
        country: string, state: string, city: string, Zipcode: string, phnumber: string) {
        await this.FirstnameInput.fill(firstName)
        await this.LastnameInput.fill(LastName)
        await this.companyInput.fill(CompanyName)
        await this.addressInput.fill(address)
        await this.countryInput.selectOption(country)
        await this.stateInput.fill(state)
        await this.cityInput.fill(city)
        await this.ZipcodeInput.fill(Zipcode)
        await this.MobilenumberInput.fill(phnumber)
    }

    async createaccount() {
        await this.createaccountbtn.click()
    }
    async continue() {
        await this.continuebtn.click()
    }
    async IsEmailexist(): Promise<boolean> {
        return await this.emailExistsError.isVisible()
    }
}