import {BaseComponent} from "../base/baseComponent";
import {Locator, Page} from "@playwright/test";

/**
 * Class for header
 */
export class header extends BaseComponent{
    private readonly homeButton: Locator;
    private readonly createAccountButton: Locator;
    private readonly loginButton: Locator;
    private readonly myOrdersButton: Locator;

    /**
     * Constructor of the class.
     * @param page
     */
    constructor(page: Page){
        super(page);
        this.homeButton = this.page.locator('header>div>div:nth-child(1)>a:nth-child(3)');
        this.createAccountButton = this.page.locator('div > nav > a:nth-child(1)')
        this.loginButton = this.page.locator('div > nav > a:nth-child(2)')
        this.myOrdersButton = this.page.locator('div > nav > a:nth-child(3)')
    }

    /**
     * Goes to the home page.
     */
    async goToHomePage(): Promise<void> {
        this.logger.info('Go to Home Page')
        await this.homeButton.click();
    }

    /**
     * Goes to the account creation page.
     */
    async goToCreateAccountPage(): Promise<void> {
        this.logger.info('Go to the account creation page')
        await this.createAccountButton.click();
    }

    /**
     * Goes to the login page.
     */
    async goToLoginPage(): Promise<void> {
        this.logger.info('Go to the login page')
        await this.loginButton.click();
    }

    /**
     * Goes to the purchases page.
     */
    async goToMyOrdersPage(): Promise<void> {
        this.logger.info('Go to the orders page')
        await this.myOrdersButton.click();
    }
}