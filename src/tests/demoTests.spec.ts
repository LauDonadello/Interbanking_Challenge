import { test, expect } from '@playwright/test';
import { homePage } from '../mercadolibre/pages/homePage';

test.describe('Demo Challenge Tests', () => {
    test('Search', async ({ page }, testInfo) => {
        //Arrange
        const home = new homePage(page);
    
        //Act
        await home.navigateToHomePage()

    });
});
