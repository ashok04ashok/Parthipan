import { expect } from 'chai';

import HomePage from '../pages/HomePage';
import { getRowFromExcel, launchUrl } from '../pages/BasePage';

let homePage = new HomePage();

describe('Purchase a product from Flipkart', () => {

  before("Launch Flipkart", async () => {
    await launchUrl("https://www.flipkart.com");
  });

  it('Search and purchase laptops on Flipkart', async () => {
    await homePage.searchAndClick('laptop','laptop hp');
    const title = await browser.getTitle();
    expect(title.toLowerCase()).to.include('laptop');

    const row = await getRowFromExcel("TestData/laptopTestData.xlsx", "Sheet1", 1);
    console.log("First Laptop Row:", row);
  });

});