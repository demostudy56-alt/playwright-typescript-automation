import{test,expect} from "@playwright/test"
import{loginOrSignupUser} from "../../utils/loginHelper"
import{addProductToCart} from "../../utils/cartHelper"
import { OrderPage } from "../../src/Pages/Orderpage"
import{PlaceOrder,isOrderPlaced} from "../../utils/orderHelper"
import user from "../../utils/users.json"
import paymentJSON from "../../utils/payment.json"
import { PaymentData } from "../../src/Types/PaymentTypes"

test('Place the Order',async({page})=>{
    const BillingInput: PaymentData = paymentJSON.PaymentDetails
    const ConfirmOrder = new OrderPage(page)
    //Login as the User
    await loginOrSignupUser(page,user.newUser)
    // Add the Product to Cart
    await addProductToCart(page)
    // Place the Order
    await PlaceOrder(page,BillingInput)
    // Assert the order has been placed
    expect(await isOrderPlaced(page)).toBeTruthy()
    //Continue the page
    await ConfirmOrder.continuePage()

})