import Door from './Door';

describe('Door', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('constructs correctly', () => {
    const expected = {
      destination: 'room two',
      isLocked: false,
      requiredKey: null,
      lockedText: null,
    };

    const result = new Door({
      destination: 'room two',
      isLocked: false,
      requiredKey: null,
      lockedText: null,
    });

    expect(result).toEqual(expected);
  });

  it('properly unlocks', () => {
    const key = {
      name: 'key',
      type: 'key',
      keywords: ['key'],
    };

    const door = new Door({
      destination: 'room two',
      isLocked: true,
      requiredKey: key,
      lockedText: 'It is locked.',
    });

    door.unlock(key);

    expect(door.isLocked).toBe(false);
  });

  it('emits lockedText if open called while locked', () => {
    document.dispatchEvent = jest.fn();

    const door = new Door({
      destination: 'room two',
      isLocked: true,
      requiredKey: {},
      lockedText: 'It is locked.',
    });

    door.open();

    const expectedEvent = new CustomEvent('gameMessage', {
      details: 'It is locked.',
    });

    expect(document.dispatchEvent)
      .toHaveBeenCalledWith(expectedEvent);
  });

  it('emits destination when opened', () => {
    document.dispatchEvent = jest.fn();

    const door = new Door({
      destination: 'room two',
      isLocked: false,
      requiredKey: {},
      lockedText: 'It is locked.',
    });

    door.open();

    const expectedEvent = new CustomEvent('moveToRoom', {
      details: 'room two',
    });

    expect(document.dispatchEvent)
      .toHaveBeenCalledWith(expectedEvent);
  });
});
