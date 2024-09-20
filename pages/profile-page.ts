import { type Page, type Locator } from '@playwright/test';
import CommonActions from '../utilities/action-utils';


export default class ProfilePage {

    private actions: CommonActions;
    private editBtnPath: string;
    private firstNamePath: string;
    private submitBtnPath: string;
    private sucessbannerPath: string;


    constructor(page: Page) {
        this.actions = new CommonActions(page);
        this.editBtnPath = '//a[@href="/profile-edit"]';
        this.firstNamePath = '//input[@id="firstname"]';
        this.submitBtnPath = "//*[contains(text(), 'Save profile')]";
        this.sucessbannerPath = '//div[@class="success banner"]';
    }

    async go() {
        await this.actions.navigate('https://shopist.io/profile');
    }
    
    async clickEdit() {
        await this.actions.click(this.editBtnPath);
    }

    async firstNameEdit(fname: string) {
        await this.actions.enterText(this.firstNamePath, fname);
    }

    async clickSubmit() {
        await this.actions.click(this.submitBtnPath);
    }

    async successMsg() {
        return await this.actions.getText(this.sucessbannerPath);
    }
}