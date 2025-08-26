import FlipkartHomePage from '../pages/FlipkartHomePage';
import { expect } from 'chai';
 let home = new FlipkartHomePage();

describe('Flipkart Search', () => {
  before("launch", async () => {
    await browser.maximizeWindow();
    await home.open();
})

  it('should search for laptops', async () => {
    await home.search('laptop');
    await browser.pause(5000); // wait for results
    const title = await browser.getTitle();
    expect(title.toLowerCase()).to.include('laptop');
  });
});