import {basePage} from "../base/basePage";
import {Locator, Page} from "@playwright/test";

export class productPage extends basePage {
    private readonly addToCartButton: Locator;

    /**
     * Constructor of the class.
     */
    constructor(page: Page) {
        super(page);
        this.addToCartButton = page.locator('[class="ui-pdp-actions"]>div>button+button')
    }

    /**
     * Click add to cart
     */
    async clickAddToCart(): Promise<void> {
        this.logger.info('Click add to cart')
        await this.addToCartButton.click();
    }
}