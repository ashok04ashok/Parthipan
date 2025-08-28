import { expect } from 'chai';
import { launchUrl } from '../pages/BasePage';
import { waitTimout } from '../utils/actions';
import HomePage from '../pages/HomePage';
import SearchResultsPage from '../pages/searchResultsPage';

describe('Purchase a product from Flipkart', () => {

  before("Launch Flipkart", async () => {
    await launchUrl("https://www.flipkart.com");
  });

  it('Search and purchase laptops on Flipkart', async () => {
    await HomePage.searchAndClick('laptop', 'laptop hp');
    const title = await browser.getTitle();
    expect(title.toLowerCase()).to.include('laptop');
    await SearchResultsPage.applyFilters();
     waitTimout(5000)
    const bestLaptop = await SearchResultsPage.selectLaptopByReviewAndOffer();
    console.log("bestLaptop: ", bestLaptop);
    SearchResultsPage.clickFirstProduct();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[handles.length - 1]);

    waitTimout(5000)
    const title2 = await browser.getTitle();
    console.log('title2?', title2);
    const element = await $('(//h1/span)[1]');
    const isVisible = await element.isDisplayed();
    console.log('Visible?', isVisible);

    if (isVisible) {
      const text = await element.getText();
      console.log('Text:', text);
    }



    // await ProductPage.addToCart();
    // await CartPage.buyNow();


    // Switch to the last tab (the newly opened product page)
    //  await bestLaptop.click();
    // await productPage.addToCart();
    // await CartPage.buyNow();


    //   const laptopDetails = {
    //       name: await bestLaptop.$('._4rR01T').getText(),
    //       price: await bestLaptop.$('._30jeq3').getText(),
    //       rating: await bestLaptop.$('._3LWZlK').getText()
    //   };
    //   saveToExcel([laptopDetails], 'laptops.xlsx');

    //   await bestLaptop.click();
    // await ProductPage.addToCart();
    // await CartPage.buyNow();

    await waitTimout(10000);
  });

});