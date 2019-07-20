import MessageEmitter from './MessageEmitter';

describe('MessageEmitter', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('emits game messages', () => {
    document.dispatchEvent = jest.fn();

    MessageEmitter.emitGameMessage('hello game');

    const expected = new CustomEvent('gameMessage', {
      details: 'hello game',
    });

    expect(document.dispatchEvent)
      .toHaveBeenCalledWith(expected);
  });

  it('emits user messages', () => {
    document.dispatchEvent = jest.fn();

    MessageEmitter.emitUserMessage('hello user');

    const expected = new CustomEvent('userMessage', {
      details: 'hello user',
    });

    expect(document.dispatchEvent)
      .toHaveBeenCalledWith(expected);
  });

  it('emits player movement', () => {
    document.dispatchEvent = jest.fn();

    MessageEmitter.emitRoomMovement('room two');

    const expected = new CustomEvent('moveToRoom', {
      details: 'room two',
    });

    expect(document.dispatchEvent)
      .toHaveBeenCalledWith(expected);
  });
});
