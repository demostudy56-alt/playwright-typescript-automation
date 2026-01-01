import { Page } from "@playwright/test"
import { CartPage } from "../src/Pages/CartPage"


export async function addProductToCart(page: Page) {
    const Cart = new CartPage(page)
    await Cart.GotoCart()
    if (await Cart.ischeckCartEmpty()) {
        await Cart.addcart()
        await Cart.ViewProduct()
    }


}