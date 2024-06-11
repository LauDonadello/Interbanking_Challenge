import { test, expect } from '@playwright/test';
import { homePage } from '../mercadolibre/pages/homePage';
import { filters } from '../mercadolibre/components/filters';



test.describe('Demo Challenge Tests', () => {
    test('Search', async ({ page }, testInfo) => {
        //Arrange
        const home = new homePage(page);
        const results = new filters(page);
        const keyword = 'iphone 13';
        const minMemory = '256';
        const maxMemory = '256';
    
        //Act
        await home.navigateToHomePage()
        await home.clickSearchBar()
        await home.enterkeyword(keyword)
        await home.pressEnter()
        await results.clickMinField()
        await results.enterMinMemory(minMemory)
        await results.clickMaxField()
        await results.enterMaxMemory(maxMemory)
        await results.clickSubmitIntMemory();

    });
});
