import { type Page } from '@playwright/test';
import CommonActions from '../utilities/action-utils';


export default class HomePage {

    private page: Page;
    private sofaBoxLink: string;
    private actions: CommonActions;

    constructor(page: Page) {
        this.actions = new CommonActions(page)
        this.sofaBoxLink = '//section//a[@href="/department/sofas"]';
    }

    async go() {
        await this.actions.navigate("https://shopist.io/")
    }

    async clickProductCategory() {
        await this.actions.click(this.sofaBoxLink);
    }


}