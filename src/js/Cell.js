import MessageEmitter from './MessageEmitter';
import { requiredConstructorValue } from './utils';

class Cell {
  constructor({
    monsters,
    items,
    entranceText,
    door,
  }) {
    this.monsters = requiredConstructorValue(monsters);
    this.items = requiredConstructorValue(items);
    this.entranceText = requiredConstructorValue(entranceText);
    this.door = door;
  }

  enter() {
    MessageEmitter.emitGameMessage(this.entranceText);
  }
}

export default Cell;
