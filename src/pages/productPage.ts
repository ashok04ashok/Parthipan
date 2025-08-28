
class ProductPage {
    get addToCartBtn() { return $('//button[text()="Add to cart"]'); }
    async addToCart() {
        await this.addToCartBtn.click();
    }
}

export default new ProductPage();
