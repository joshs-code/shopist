import { type Page } from '@playwright/test';
import CommonActions from "../utilities/action-utils";

export default class ProductShopPage {
    
    private page: Page;
    private actions: CommonActions;
    private greyTuftedCouchProduct: string;

    constructor(page: Page){
        this.actions = new CommonActions(page);
        this.greyTuftedCouchProduct = '//a[@href="/department/sofas/product/10"]';
    }
    
    async clickProduct() {
        await this.actions.click(this.greyTuftedCouchProduct);
    }
}