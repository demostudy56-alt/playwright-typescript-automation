import { Locator, Page } from "@playwright/test";

export class OrderPage {
    readonly page: Page
    readonly Checkoutbtn: Locator
    readonly PlaceOrderbtn: Locator
    readonly NameInput: Locator
    readonly CardnumberInput: Locator
    readonly CvvInput: Locator
    readonly ExpiremonthInput: Locator
    readonly ExpiryyearInput: Locator
    readonly ConfirmOrderbtn: Locator
    readonly Invoicebtn: Locator
    readonly Continuebtn: Locator
    readonly ordertitle: Locator
    readonly confirmMsg: Locator


    constructor(page: Page) {
        this.page = page
        this.Checkoutbtn = page.locator('a', { hasText: 'Proceed To Checkout' })
        //Payment
        this.PlaceOrderbtn = page.getByRole('link', { name: 'Place Order' })
        this.NameInput = page.locator('[data-qa="name-on-card"]')
        this.CardnumberInput = page.locator('[data-qa="card-number"]')
        this.CvvInput = page.getByPlaceholder("ex. 311")
        this.ExpiremonthInput = page.getByPlaceholder('MM')
        this.ExpiryyearInput = page.getByPlaceholder('YYYY')
        this.ConfirmOrderbtn = page.getByRole('button', { name: 'Pay and Confirm Order' })

        //Download Invoice
        this.ordertitle = page.locator('[data-qa="order-placed"]')
        this.confirmMsg = page.locator('p', { hasText: 'Congratulations! Your order has been confirmed!' })
        this.Invoicebtn = page.getByRole('link', { name: 'Download Invoice' })
        this.Continuebtn = page.getByRole('link', { name: 'Continue' })

    }

    async orderItem() {
        await this.Checkoutbtn.click()
        await this.PlaceOrderbtn.click()
    }

    async Billing(FullName: string, CardNumber: string, CVV: string, Expiration: string, ExpiryYear: string) {
        await this.NameInput.fill(FullName)
        await this.CardnumberInput.fill(CardNumber)
        await this.CvvInput.fill(CVV)
        await this.ExpiremonthInput.fill(Expiration)
        await this.ExpiryyearInput.fill(ExpiryYear)
        await this.ConfirmOrderbtn.click()
    }

    async DownloadInvoice() {
        await this.Invoicebtn.click()
    }
    async ischeckOut(): Promise<boolean> {
        return await this.confirmMsg.isVisible()
    }
    async continuePage() {
        await this.Continuebtn.click()
    }


}