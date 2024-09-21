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
        await this.page.locator(selector).fill(text);
    }
}