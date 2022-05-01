const { threadId } = require('worker_threads');
const Product = require('./model/product');

class FakeDb {

  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'Sample text 1',
        heading2: 'Sample text 2',
        heading3: 'Sample text 3',
        headingText1: 'this is headingSample 1',
        headingText2: 'this is headingSample 2',
        headingText3: 'this is headingSample 3',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'Sample text 1',
        heading2: 'Sample text 2',
        heading3: 'Sample text 3',
        headingText1: 'this is headingSample 1',
        headingText2: 'this is headingSample 2',
        headingText3: 'this is headingSample 3',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: 'Sample text 1',
        heading2: 'Sample text 2',
        heading3: 'Sample text 3',
        headingText1: 'this is headingSample 1',
        headingText2: 'this is headingSample 2',
        headingText3: 'this is headingSample 3',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone 13 Pro',
        price: 1200,
        description: 'I wanto to iPhone 13 Pro',
        heading1: 'Sample text 1',
        heading2: 'Sample text 2',
        heading3: 'Sample text 3',
        headingText1: 'this is headingSample 1',
        headingText2: 'this is headingSample 2',
        headingText3: 'this is headingSample 3',
      }
    ]
  }

  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  }

  async cleanDb() {
    await Product.deleteMany({});
  }

  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    })
  }

  seeDb() {
    this.pushProductsToDb();
  }
}

module.exports = FakeDb;
