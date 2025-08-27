import { waitForElement, enterText, clickElement, waitTimout ,sleep} from "../utils/actions";

export default class HomePage {
  public get searchBox() { return $('//input[@name="q"]'); }
  public get searchButton() { return $('//button[@type="submit"]'); }

  async searchAndClick(enterProduct: string, selectProduct: string) {
    waitForElement(this.searchBox);
    await enterText(this.searchBox, enterProduct);
    // waitTimout(10000)
    await sleep(10000);
    const words = selectProduct.split(' ');
    const firstWord = words[0];
    const restWords = words.slice(1).join(' ');
    const clickProduct = $(`//ul//li//div[span[text()='${firstWord}'] and contains(text(),'${restWords}')]`)
    waitForElement(clickProduct);
    await clickElement(clickProduct);
  }

}