import {basePage} from "../base/basePage";
import {Locator, Page} from "@playwright/test";

export class loginPage extends basePage {
    private readonly ingresarButton: Locator;
    private readonly loginMessage: Locator;

    /**
     * Constructor of the class.
     */
    constructor(page: Page) {
        super(page);
        this.ingresarButton = page.locator('a:nth-child(2)>[class="andes-button__content"]')
        this.loginMessage = page.getByRole('heading', { name: 'Ingresá tu e‑mail, teléfono o usuario de Mercado Libre' })
    }

    /**
     * Click on ingresar button
     */
    async clickIngresar(): Promise<void> {
        this.logger.info('Click on ingresar button')
        await this.ingresarButton.click();
    }

    /**
     * Gets login request message
     */
    async getLoginMessage(): Promise<string|null>{
        this.logger.info("Gets login request message")
        await this.loginMessage.waitFor({ state: 'attached' });
        this.logger.info(this.loginMessage.textContent())
        return await this.loginMessage.textContent();
    }
}