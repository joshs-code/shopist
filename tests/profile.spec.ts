import { test,  expect } from '@playwright/test';
import ProfilePage from '../pages/profile-page';


test.describe("Edit profile testing", () => {

    test("Edit all profile fileds", async ({page}) => {
        const pp = new ProfilePage(page);
        await pp.go();
        await pp.clickEdit();
        await pp.firstNameEdit("Joshua");
        await pp.clickSubmit();
        const msg = await pp.successMsg();
        expect(msg).toContain("Profile successfully saved.");
    })
})