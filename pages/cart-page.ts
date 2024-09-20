import { type Page } from "@playwright/test";
import CommonActions from "../utilities/action-utils";

export default class CartPage {
    private page: Page;
    private actions: CommonActions;
    private checkoutBtn: string;

    constructor(page: Page) {
        this.actions = new CommonActions(page);
        this.checkoutBtn = '//div[@class="checkout"][1]';
    }

    async clickCheckout() {
        await this.actions.click(this.checkoutBtn);
    }
}