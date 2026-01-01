import { Locator, Page, expect } from "@playwright/test"

export class CartPage {
    readonly page: Page
    readonly emptyCartMessage: Locator
    readonly hereInput: Locator
    readonly carturl: Locator
    readonly HomeurlInput: Locator
    readonly viewproductInput: Locator
    readonly AddtoCart: Locator
    readonly selectdress: Locator
    readonly ViewCart: Locator
    readonly productadded: Locator

    constructor(page: Page) {
        this.page = page
        this.carturl = page.getByRole('link', { name: 'Cart' })
        this.emptyCartMessage = page.locator('b', { hasText: 'Cart is empty!' })
        this.hereInput = page.locator('a', { hasText: 'here' }).first()
        this.HomeurlInput = page.getByRole('link', { name: 'Home', exact: true })
        this.selectdress = page.locator('p', { hasText: 'Winter Top' }).first()
        this.viewproductInput = page.locator('a', { hasText: 'View Product' }).nth(4)
        this.AddtoCart = page.getByRole('button', { name: 'Add to Cart' })
        this.ViewCart = page.locator('a', { hasText: 'View Cart' })
        this.productadded = page.locator('.cart_quantity')

    }

    async GotoCart() {
        await this.carturl.click()

    }
    async ischeckCartEmpty() {
        return await this.emptyCartMessage.isVisible()
    }

    async addcart() {
        await this.hereInput.click()
    }

    async ViewProduct() {
        await this.selectdress.isVisible()
        await this.viewproductInput.click()
        await this.AddtoCart.click()
        await this.ViewCart.click()
    }
    async ProductQuantity(): Promise<number> {
        const value = await this.productadded.textContent()
        return Number(value)
    }
}