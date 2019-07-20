import { requiredConstructorValue } from './utils';

class Monster {
  constructor({
    name,
  }) {
    this.name = requiredConstructorValue(name);
  }
}

export default Monster;
