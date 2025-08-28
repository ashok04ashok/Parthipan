import { waitForElement, enterText, clickElement, waitTimout } from "../utils/actions";

class HomePage {
  public get searchBox() { return $('//input[@name="q"]'); }
  public get searchButton() { return $('//button[@type="submit"]'); }
  // public get Processor() { return $(`//div[text()='Processor']/parent::div/parent::section//div[text()='Core i7']`); }
  // public get Processor() { return $(`//div[text()='Customer Ratings']/parent::div/parent::section//div[text()='4★ & above']`); }
  // public get Processor() { return $(`//nav/a[text()='4']`); }

  async searchAndClick(enterProduct: string, selectProduct: string) {
    waitForElement(this.searchBox);
    await enterText(this.searchBox, enterProduct);
    await waitTimout(2000);
    const words = selectProduct.split(' ');
    const firstWord = words[0];
    const restWords = words.slice(1).join(' ');
    const clickProduct = $(`//ul//li//div[span[text()='${firstWord}'] and contains(text(),'${restWords}')]`)
    waitForElement(clickProduct);
    await clickElement(clickProduct);
  }

}

export default new HomePage();