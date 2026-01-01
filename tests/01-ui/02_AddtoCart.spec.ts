import { test, expect } from "@playwright/test"
import { loginOrSignupUser } from "../../utils/loginHelper"
import users from "../../utils/users.json"
import { addProductToCart } from "../../utils/cartHelper"
import { CartPage } from "../../src/Pages/CartPage"

test('Add to Cart', async ({ page }) => {
    const Cart = new CartPage(page)
    //Login as the User
    await loginOrSignupUser(page, users.newUser)
    // Add the Product
    await addProductToCart(page)
    // Assert the product was added
    expect(await Cart.ProductQuantity()).toBeGreaterThan(0)
})