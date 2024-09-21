import { type Page } from '@playwright/test';
import CommonActions from '../utilities/action-utils';

export default class ProductDetailsPage {
    private page: Page;
    private actions: CommonActions;
    private addtocartBtn: string;
    private cartLink: string;

    constructor(page: Page) {
        this.actions = new CommonActions(page);
        this.addtocartBtn = '.purchase-button';
        this.cartLink = '//a[@class="cart"]//div[contains(text(), "Cart")]'
    }

    async addToCart() {
        await this.actions.click(this.addtocartBtn);
    }

    async clickCart() {
        await this.actions.click(this.cartLink);
    }
}