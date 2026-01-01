import { test, expect } from "@playwright/test"
import { loginOrSignupUser } from "../../utils/loginHelper"
import { isLoggedOut, signOut } from "../../utils/logoutHelper"
import user from "../../utils/users.json"

test('Logout as user', async ({ page }) => {
    // Sign in as user
    await loginOrSignupUser(page, user.newUser)
    //Log out as user
    await signOut(page)
    //Assert the user has logged out
    expect( await isLoggedOut(page)).toBeTruthy()
})