import { env } from "../../../load-env";
import { URLBuilder } from "../../utils/URLBuilder";
import {basePage} from "../base/basePage";
import {Locator, Page} from "@playwright/test";

export class homePage extends basePage {
    private readonly searchBar: Locator;

    /**
     * Constructor of the class.
     */
    constructor(page: Page) {
        super(page);
        this.searchBar = page.locator('[class="nav-search-input"]')
    }
/**
     * Open navigator
     * Navigates to the login page
     * @returns {Promise<void>}
     */
async navigateToHomePage(): Promise<void> {
    const urlBuilder = new URLBuilder(env.APP_ENV, env.APP_LANG);
    const url = urlBuilder.buildURL('');
    await this.page.goto(url);
    await this.page.setViewportSize(this.viewportSize);
}

/**
     * Click the search bar
     * @returns {Promise<void>}
     */
async clickSearchBar(): Promise<void> {
    this.logger.info('Click on Forms button')
    await this.searchBar.click();
}

/**
     * Enter keyword
     * @returns {Promise<void>}
     */
async enterkeyword(keyword): Promise<void> {
    this.logger.info('Click on Forms button')
    await this.searchBar.fill(keyword);
}

   
/**
     * Click the search button
     * @returns {Promise<void>}
     */
async pressEnter(): Promise<void> {
    this.logger.info('Press enter to search')
    await this.searchBar.press('Enter')
    await this.page.waitForTimeout(2000);
}

}