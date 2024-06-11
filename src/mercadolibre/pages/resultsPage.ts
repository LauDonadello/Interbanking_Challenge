import {basePage} from "../base/basePage";
import {Locator, Page} from "@playwright/test";


export class resultsPage extends basePage {
    private readonly firstResult: Locator;
    private readonly masTardeButton: Locator;

    /**
     * Constructor of the class.
     */
    constructor(page: Page) {
        super(page);
        this.firstResult = page.locator('//*[@id=":R2l5e6:"]/div[2]/div[2]/a[1]')
        this.masTardeButton = page.locator('div+div>div>div>div+div>button+button')
    }

    /**
     * Click on mas tarde message
     */
    async clickMasTarde(): Promise<void> {
        this.logger.info('Click on mas tarde message')
        await this.masTardeButton.click();
    }

    /**
     * Click the first result
     */
    async clickFirstResult(): Promise<void> {
        this.logger.info('Click on first result')
        await this.firstResult.click();
    }
}