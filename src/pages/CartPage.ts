// import BasePage from './BasePage';

// class CartPage extends BasePage {
//     get cartItems() { return $$('a._2Kn22P.gBNbID'); }
//     get buyNowButton() { return $('button._2KpZ6l._2ObVJD._3AWRsL'); }

//     async verifyCartItem(expectedItem: string) {
//         const items = await this.cartItems;
//         let found = false;
//         for (const item of items) {
//             const text = await item.getText();
//             if (text.includes(expectedItem)) {
//                 found = true;
//                 break;
//             }
//         }
//         return found;
//     }

//     async buyNow() {
//         await this.click(this.buyNowButton);
//     }
// }

// export default new CartPage();
