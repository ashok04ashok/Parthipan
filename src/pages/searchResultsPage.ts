class SearchResultsPage {
  public get filterProcessor() { return $(`//div[text()='Processor']/parent::div/parent::section//div[text()='Core i7']`); }
  public get filterRating() { return $(`//div[text()='Customer Ratings']/parent::div/parent::section//div[text()='4★ & above']`); }
  // get filterProcessor() { return $('//div[text()="Processor"]/following-sibling::div//label[contains(text(),"i7")]'); }
  // get filterRating() { return $('//div[text()="Customer Ratings"]/following-sibling::div//label[contains(text(),"4★ & above")]'); }
  get priceFilter() { return $('input[placeholder="Min"]'); }
  get laptops() { return $$('//div[@data-id]//div[@class="KzDlHZ"]'); }
  get firstProduct() { return $('(//div[@data-id])[1]'); }

  async applyFilters() {
    await this.filterProcessor.click();
    await this.filterRating.click();
  }

  async selectLaptopByReviewAndOffer() {
    const texts = await browser.execute(() => {
      return Array.from(document.querySelectorAll('div[data-id] .KzDlHZ'))
        .map(el => el.textContent?.trim() || '');
    });
    console.log(texts);

   

    //=======================
    // Await the element array first
    // const laptopElements = await $$('//div[@data-id]//div[@class="KzDlHZ"]');

    // // Map getText() promises and resolve them all
    // const texts = await Promise.all(
    //     laptopElements.map(el => el.getText())
    // );

    // console.log(texts);





    // const elements = await this.laptops; // unwrap the ChainablePromiseArray
    // const texts = await Promise.all(elements.map(el => el.getText()));
    // console.log(texts);














    // const laptopTexts = await Promise.all(laptopsArray.map(l => l.getText()));

    // console.log('Laptop Names:', laptopTexts);
    // // Map each laptop to an object containing its score
    // const laptopsWithScore = await Promise.all(
    //     laptopsArray.map(async (laptop) => {
    //         let review = 0;
    //         const reviewElem = await laptop.$('._3LWZlK');
    //         if (await reviewElem.isExisting()) {
    //             review = parseFloat(await reviewElem.getText()) || 0;
    //         }

    //         const offer = await laptop.$('._2Tpdn3').isExisting() ? 1 : 0;
    //         const score = review + offer;

    //         return { laptop, score };
    //     })
    // );

    // Sort laptops by score descending
    // laptopsWithScore.sort((a, b) => b.score - a.score);

    // // Get the best laptop
    // const bestLaptop = laptopsWithScore[0]?.laptop || null;

    // console.log('Best Laptop found with score:', laptopsWithScore[0]?.score ?? 0);
    return "bestLaptop";
  }

      async clickFirstProduct() {
        await this.firstProduct.click();
    }


}

export default new SearchResultsPage();
