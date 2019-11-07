export default class ItemModel {

  constructor(name = "", price = 0, onSale = false) {
    this.id = Math.floor(Math.random() * 999999);
    this.name = name;
    this.price = price;
    this.onSale = onSale;
  }
}