import { requiredConstructorValue } from './utils';

class Inventory {
  constructor({ items }) {
    this.items = requiredConstructorValue(items);
  }

  add(item) {
    if (!item) {
      throw new Error('Item must be a valid object');
    }

    this.items = [...this.items, item];
  }

  remove(item) {
    const filteredInventory = this.items.filter(existingItem => (
      existingItem.name !== item.name
    ));

    this.items = filteredInventory;
  }
}

export default Inventory;
