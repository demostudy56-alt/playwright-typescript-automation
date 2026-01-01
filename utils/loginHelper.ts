import { Page,expect } from "@playwright/test";
import { Homepage } from "../src/Pages/Homepage";
import { SignupPage } from "../src/Pages/SignupPage";
import { LogintoAccount } from "../src/Pages/LogintoAccountPage";
import { UserData } from "../src/Types/types";

export async function loginOrSignupUser(page: Page, user: UserData) {
    const homepage = new Homepage(page);
    const signup = new SignupPage(page);
    const loginPage = new LogintoAccount(page);

    await homepage.goto();
    await homepage.cookies();
    await homepage.signup();
    await signup.signupUser(user.username, user.email);

    if (await signup.IsEmailexist()) {
        await loginPage.exisitinguser();
    } else {
        await signup.accountinformation(user.password, user.day, user.month, user.year);
        await signup.addressInformation(
            user.firstName, user.lastName, user.company, user.address,
            user.country, user.state, user.city, user.zipcode, user.phoneNumber
        );
        await signup.createaccount();
        await signup.continue();
    }
      // Verify user is logged in
    await expect(loginPage.loggedmsg).toBeVisible();
}
