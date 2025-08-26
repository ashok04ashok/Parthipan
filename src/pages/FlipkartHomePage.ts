export default class FlipkartHomePage {
  public get searchBox() { return $('input[name="q"]'); }
  public get searchButton() { return $('button[type="submit"]'); }

  async open() {
    await browser.url('https://www.flipkart.com');
  }

  async search(product: string) {
    await this.searchBox.setValue(product);
    await this.searchButton.click();
  }
}