// tests/signupLogin.spec.ts
import { test, expect } from "@playwright/test"
import { loginOrSignupUser } from "../../utils/loginHelper"
import { LogintoAccount } from "../../src/Pages/LogintoAccountPage"
import users from "../../utils/users.json"

test('SignUp or Login depending on user', async ({ page }) => {
    const Login = new LogintoAccount(page)
    await loginOrSignupUser(page, users.newUser)
    // Assert the user has logged in
     expect(await Login.isLoggedin()).toBeTruthy()
})
