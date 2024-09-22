import { Page } from '@playwright/test';
import CommonActions from '../utilities/action-utils';


export default class ProfilePage {

    private actions: CommonActions;
    private editBtnPath: string;
    private picturePath: string;
    private firstNamePath: string;
    private lastNamePath: string;
    private addressPath: string;
    private cityPath: string;
    private statePath: string;
    private zipCodePath: string;
    private phoneNumberPath: string;
    private submitBtnPath: string;
    private sucessbannerPath: string;
    private requireMsgPath: string;

    constructor(page: Page) {
        this.actions = new CommonActions(page);
        this.editBtnPath = '//a[@href="/profile-edit"]';
        this.picturePath = '//input[@id="picture"]';
        this.firstNamePath = '//input[@id="firstname"]';
        this.lastNamePath = '//input[@id="lastname"]';
        this.addressPath = '//input[@id="address1"]';
        this.cityPath = '//input[@id="addressCity"]';
        this.statePath = '//input[@class="vs__search"]';
        this.zipCodePath = '//input[@id="addressZipcode"]';
        this.phoneNumberPath = '//input[@id="phone"]';
        this.submitBtnPath = "//*[contains(text(), 'Save profile')]";
        this.sucessbannerPath = '//div[@class="success banner"]';
        this.requireMsgPath = '//p[@class="error"]';
    }

    async go() {
        await this.actions.navigate('https://shopist.io/profile');
    }
    
    async clickEdit() {
        await this.actions.click(this.editBtnPath);
    }

    async profilePic(path: string) {
        await this.actions.upload(this.picturePath,'ProfileImg.jpeg');
    }

    async firstNameEdit(fname: string) {
        await this.actions.enterText(this.firstNamePath, fname);
    }

    async lastNameEdit(lname: string) {
        await this.actions.enterText(this.lastNamePath, lname);
    }

    async addressEdit(addr: string) {
        await this.actions.enterText(this.addressPath, addr);
    }

    async cityEdit(city: string) {
        await this.actions.enterText(this.cityPath, city);
    }

    async zipEdit(zip: string) {
        await this.actions.enterText(this.zipCodePath, zip);
    }

    async phoneEdit(phone: string) {
        await this.actions.enterText(this.phoneNumberPath, phone);
    }

    async clickSubmit() {
        await this.actions.click(this.submitBtnPath);
    }

    async successMsg() {
        return await this.actions.getText(this.sucessbannerPath);
    }

    async errorMsg() {
        return await this.actions.getText(this.requireMsgPath);
    }

    async profileEditAll(
        fname: string,
        lname: string,
        addr: string,
        city: string,
        zip: string,
        phone: string
    ) {
        await this.actions.click(this.editBtnPath);
        await this.profilePic('ProfileImg.jpeg');
        await this.firstNameEdit(fname);
        await this.lastNameEdit(lname);
        await this.addressEdit(addr);
        await this.cityEdit(city);
        await this.actions.enterText(this.statePath, "AZ");
        await this.actions.keypress('Enter');
        await this.zipEdit(zip);
        await this.phoneEdit(phone);
        await this.clickSubmit();
    }

    async snap() {
        await this.actions.snapshot("screenshots/profileedit.png")
    }
}
