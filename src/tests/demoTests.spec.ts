import { test, expect } from '@playwright/test';
import { homePage } from '../mercadolibre/pages/homePage';
import { filters } from '../mercadolibre/components/filters';
import { resultsPage } from '../mercadolibre/pages/resultsPage';
import { productPage } from '../mercadolibre/pages/productPage';
import { loginPage } from '../mercadolibre/pages/loginPage.ts';
import assert from 'assert';


test.describe('Demo Challenge Tests', () => {
    test('Search', async ({ page }, testInfo) => {
        //Arrange
        const home = new homePage(page);
        const filter = new filters(page);
        const results = new resultsPage(page);
        const product = new productPage(page);
        const login = new loginPage(page);
        const keyword = 'iphone 13';
        const numMemory = '256';
        const noValidMemory = '200';
        const loginTitle = 'Ingresá tu e‑mail, teléfono o usuario de Mercado Libre';
    
        //Act
        await home.navigateToHomePage()
        await home.clickSearchBar()
        await home.enterkeyword(keyword)
        await home.pressEnter()
        await filter.clickMinField()
        await filter.enterMinMemory(numMemory)
        await filter.clickMaxField()
        await filter.enterMaxMemory(numMemory)
        await filter.clickSubmitIntMemory()
        await filter.clickFreeDelivery()
        await results.clickMasTarde()
        await results.clickFirstResult()
        await product.clickAddToCart();

        //assert
        assert.equal(await login.getLoginMessage(), loginTitle,
      'El mensaje de alerta no es: '+ loginTitle);


    });
});
