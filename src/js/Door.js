import MessageEmitter from './MessageEmitter';
import { requiredConstructorValue } from './utils';

class Door {
  constructor({
    destination,
    isLocked,
    requiredKey,
    lockedText,
    unlockFailureText,
    unlockSuccessText,
  }) {
    this.destination = requiredConstructorValue(destination);
    this.isLocked = requiredConstructorValue(isLocked);
    this.requiredKey = requiredKey;
    this.lockedText = lockedText;
    this.unlockSuccessText = unlockSuccessText;
    this.unlockFailureText = unlockFailureText;
  }

  unlock(possibleKey) {
    if (possibleKey.type === this.requiredKey.type
      && possibleKey.name === this.requiredKey.name) {
      this.isLocked = false;
      MessageEmitter.emitGameMessage(this.unlockSuccessText);
    } else {
      MessageEmitter.emitGameMessage(this.unlockFailureText);
    }
  }

  open() {
    if (this.isLocked) {
      MessageEmitter.emitGameMessage(this.lockedText);
    } else {
      MessageEmitter.emitRoomMovement(this.destination);
    }
  }
}

export default Door;
