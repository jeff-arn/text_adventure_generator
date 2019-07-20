import MessageEmitter from './MessageEmitter';
import { requiredConstructorValue } from './utils';

class Room {
  constructor({
    cells,
    entranceText,
    startingCellPosition,
    activeCell,
  }) {
    this.cells = requiredConstructorValue(cells);
    this.entranceText = requiredConstructorValue(entranceText);
    this.startingCellPosition = requiredConstructorValue(startingCellPosition);
    this.activeCell = requiredConstructorValue(activeCell);
  }

  enter() {
    MessageEmitter.emitGameMessage(this.entranceText);
  }
}

export default Room;
