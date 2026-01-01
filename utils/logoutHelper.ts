import { Page, expect } from "@playwright/test";
import { LogOutpage } from "../src/Pages/LogoutPage";

export async function signOut(page: Page) {
    const Logout = new LogOutpage(page)
    await Logout.logoutsession()

}
export async function isLoggedOut(page: Page): Promise<boolean>{
    const Logout = new LogOutpage(page)
    return await page.locator('a', { hasText: "Logout" }).isHidden()
}