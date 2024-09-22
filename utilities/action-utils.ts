export default class CommonActions {
    
    private page: any;

    constructor(page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async find(selector: string){
        await this.page.locator(selector);
    }

    async click(selector: string) {
        await this.page.click(selector);
    }

    async getText(selector: string) {
        return await this.page.locator(selector).textContent();
    }

    async enterText(selector: string, text: string) {
        await this.page.waitForSelector(selector, { state: "visible", timeout: 20000});
        await this.page.locator(selector).fill(text);
    }

    async keypress(key: string) {
        await this.page.keyboard.press(key);
    }

    async upload(selector:string, imgPath: string) {
        await this.page.locator(selector).setInputFiles(imgPath);
    }

    async snapshot(imgPath: string) {
        await this.page.screenshot({path: imgPath})
    }
}