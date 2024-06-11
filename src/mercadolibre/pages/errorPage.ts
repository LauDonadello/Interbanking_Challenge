import {basePage} from "../base/basePage";
import {Locator, Page} from "@playwright/test";


export class errorPage extends basePage {
    private readonly ProductNotFoundMessage: Locator;

    /**
     * Constructor of the class.
     */
    constructor(page: Page) {
        super(page);
        this.ProductNotFoundMessage = page.locator('ui-search-rescue__title')


    }

/**
     * Gets error message. Product not found
     * @returns {Promise<void>}
     */
async getProductNotFoundMessage(): Promise<string>{
    this.logger.info("Gets error message. Product not found")
    const text = await this.ProductNotFoundMessage.textContent();
    const safeText = text ?? 'Mensaje no encontrado';
    this.logger.info("Mensaje obtenido:" + safeText);
    return safeText;
}

}