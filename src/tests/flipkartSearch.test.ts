import FlipkartHomePage from '../pages/FlipkartHomePage';
import { expect } from 'chai';

describe('Flipkart Search', () => {
  it('should search for laptops', async () => {
    const home = new FlipkartHomePage();
    await home.open();
    await home.search('laptop');

    await browser.pause(5000); // wait for results
    const title = await browser.getTitle();
    expect(title.toLowerCase()).to.include('laptop');
  });
});