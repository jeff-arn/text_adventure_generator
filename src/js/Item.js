import { requiredConstructorValue } from './utils';

class Item {
  constructor({
    name,
    type,
    keywords,
  }) {
    this.name = requiredConstructorValue(name);
    this.type = requiredConstructorValue(type);
    this.keywords = keywords;
  }
}

export default Item;
