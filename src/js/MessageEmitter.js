class MessageEmitter {
  static emitGameMessage(messageText) {
    const gameMessageEvent = new CustomEvent('gameMessage', {
      details: messageText,
    });

    document.dispatchEvent(gameMessageEvent);
  }

  static emitUserMessage(messageText) {
    const userMessageEvent = new CustomEvent('userMessage', {
      details: messageText,
    });

    document.dispatchEvent(userMessageEvent);
  }

  static emitRoomMovement(destination) {
    const movementEvent = new CustomEvent('moveToRoom', {
      details: destination,
    });

    document.dispatchEvent(movementEvent);
  }
}

export default MessageEmitter;
