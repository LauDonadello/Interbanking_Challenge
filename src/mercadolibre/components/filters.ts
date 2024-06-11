import {BaseComponent} from "../base/baseComponent";
import {Locator, Page} from "@playwright/test";

/**
 * Class for filters
 */
export class filters extends BaseComponent{
    private readonly minInternalMemory: Locator;
    private readonly maxInternalMemory: Locator;
    private readonly freeDelivery: Locator;
    private readonly submitInternalMemory: Locator;
    
    /**
     * Constructor of the class.
     */
    constructor(page: Page) {
        super(page);
        this.minInternalMemory = page.locator('[data-testid="Minimum-INTERNAL_MEMORY"]')
        this.maxInternalMemory = page.locator('[data-testid="Maximum-INTERNAL_MEMORY"]')
        this.submitInternalMemory = page.locator('[data-testid="submit-INTERNAL_MEMORY"]')
        this.freeDelivery = page.locator('[title="Envío gratis"]')
    }
    
/**
     * Click on the min internal memory field
     * @returns {Promise<void>}
     */
async clickMinField(): Promise<void> {
    this.logger.info('Click on the min internal memory field')
    await this.minInternalMemory.click();
}
    
/**
     * Enter min memory
     * @returns {Promise<void>}
     */
async enterMinMemory(minMemory): Promise<void> {
    this.logger.info('Enter min memory')
    await this.minInternalMemory.fill(minMemory);
}
    
/**
    * Click on the max internal memory field
    * @returns {Promise<void>}
    */
async clickMaxField(): Promise<void> {
    this.logger.info('Click on the max internal memory field')
    await this.maxInternalMemory.click();
}
    
/**
     * Enter max memory
     * @returns {Promise<void>}
     */
async enterMaxMemory(maxMemory): Promise<void> {
    this.logger.info('Enter max memory')
    await this.maxInternalMemory.fill(maxMemory);
}

/**
     * Submit internal memory filter
     * @returns {Promise<void>}
     */
async clickSubmitIntMemory(): Promise<void> {
    this.logger.info('Submit internal memory filter')
    await this.submitInternalMemory.click();
}

/**
     * Click on the free delivery option
     * @returns {Promise<void>}
     */
async clickFreeDelivery(): Promise<void> {
    this.logger.info('Click on the free delivery option')
    await this.freeDelivery.click();
}

}