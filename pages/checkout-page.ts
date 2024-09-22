import { type Page } from "@playwright/test";
import CommonActions from "../utilities/action-utils";

export default class CheckoutPage {

    private page: Page;
    private actions: CommonActions;
    private thankyouMsg: string;

    constructor(page: Page) {
        this.actions = new CommonActions(page);
        this.thankyouMsg = '//div[@class="checkout-title"]';
    }

    async snap() {
        await this.actions.snapshot("screenshots/checkout-order-completed.png");
    }

    async getMsg() {
        return await this.actions.getText(this.thankyouMsg);
    }
}