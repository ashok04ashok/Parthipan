// import BasePage from './BasePage';
// import * as XLSX from 'xlsx';

// class ProductListPage extends BasePage {
//     get productCards() { return $$('div._1AtVbE'); } // Flipkart product cards
//     get productNames() { return $$('div._4rR01T'); }
//     get productRatings() { return $$('span._1lRcqv span'); }
//     get productOffers() { return $$('div._3xFhiH'); }
//     get addToCartButtons() { return $$('button._2KpZ6l._2U9uOA._3v1-ww'); }

//     async getBestLaptop() {
//         const laptops = [];

//         const names = await this.productNames;
//         const ratings = await this.productRatings;
//         const offers = await this.productOffers;

//         for (let i = 0; i < names.length; i++) {
//             const name = await names[i].getText();
//             const rating = ratings[i] ? parseFloat(await ratings[i].getText()) : 0;
//             const offer = offers[i] ? await offers[i].getText() : "No offer";
//             laptops.push({ name, rating, offer });
//         }

//         // sort by rating desc, then offers (just a simple check on length of text)
//         laptops.sort((a, b) => b.rating - a.rating || b.offer.length - a.offer.length);

//         // Save details to Excel
//         const ws = XLSX.utils.json_to_sheet(laptops);
//         const wb = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(wb, ws, "Laptops");
//         XLSX.writeFile(wb, "BestLaptops.xlsx");

//         return laptops[0]; // best laptop
//     }

//     async selectLaptop(laptopName: string) {
//         const names = await this.productNames;
//         for (const name of names) {
//             if ((await name.getText()).includes(laptopName)) {
//                 await name.click();
//                 break;
//             }
//         }
//     }
// }

// export default new ProductListPage();
