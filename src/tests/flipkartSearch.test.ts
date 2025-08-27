import { expect } from 'chai';

import BasePage from '../pages/BasePage';
import HomePage from '../pages/HomePage';

let basePage = new BasePage();
let homePage = new HomePage();

describe('Purchase a product from Flipkart', () => {
  before("Launch Flipkart", async () => {
    await basePage.launchUrl("https://www.flipkart.com");
  });

  it('Search and purchase laptops on Flipkart', async () => {
    await homePage.search('laptop');
    const title = await browser.getTitle();
    expect(title.toLowerCase()).to.include('laptop');
  });

});