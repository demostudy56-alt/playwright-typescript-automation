import { Page } from "@playwright/test"
import { OrderPage } from "../src/Pages/Orderpage"
import { PaymentData } from "../src/Types/PaymentTypes"

export async function PlaceOrder(page: Page, Payment: PaymentData) {
    const ConfirmOrder = new OrderPage(page)
    await ConfirmOrder.orderItem()
    await ConfirmOrder.Billing(Payment.FullName, Payment.CardNumber, Payment.CVV,
        Payment.Expiration, Payment.ExpiryYear
    )
    await ConfirmOrder.DownloadInvoice()
}

export async function isOrderPlaced(page: Page): Promise<boolean> {
    const ConfirmOrder = new OrderPage(page)
    return await ConfirmOrder.ischeckOut()
}
