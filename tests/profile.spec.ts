import { test, expect } from '@playwright/test';
import ProfilePage from '../pages/profile-page';
import { faker } from '@faker-js/faker';

test.describe("Positive Testing On Profile Edit Page", () => {

    test("Edit all profile fileds", async ({ page }) => {
        const pp = new ProfilePage(page);
        await pp.go();
        await pp.profileEditAll(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.location.streetAddress(),
            faker.location.city(),
            faker.location.zipCode(),
            faker.phone.number()
        );

        const success = await pp.successMsg();
        expect(success).toMatch(/\s*Profile successfully saved\.\s*View updated profile\s*/);
        await pp.snap();
    });

})

test.describe("Negative Testing On Profile Edit Page", () => {

    test("Leave First Name Blank", async ({ page }) => {
        const pp = new ProfilePage(page);
        pp.go();
        await pp.profileEditAll(
            "",
            faker.person.lastName(),
            faker.location.streetAddress(),
            faker.location.city(),
            faker.location.zipCode(),
            faker.phone.number()
        )

        const errorMsg = await pp.errorMsg();
        expect(errorMsg).toMatch(/^\s*Please enter a firstname\s*$/);
        await pp.snap();

    });
})