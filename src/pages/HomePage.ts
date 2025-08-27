import { waitForElement, enterText, clickElement } from "../utils/actions";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {
  public get searchBox() { return $('//input[@name="q"]'); }
  public get searchButton() { return $('//button[@type="submit"]'); }

  async search(product: string) {
    waitForElement(this.searchBox);
    await enterText(this.searchBox, product);
    waitForElement(this.searchButton);
    await clickElement(this.searchButton);
  }
  
}