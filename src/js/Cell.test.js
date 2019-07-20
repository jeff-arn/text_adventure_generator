import Cell from './Cell';

describe('Cell', () => {
  it('constructs correctly', () => {
    const expected = {
      monsters: [],
      items: [],
      entranceText: 'hello',
      door: null,
    };

    const result = new Cell({
      monsters: [],
      items: [],
      entranceText: 'hello',
      door: null,
    });

    expect(result).toEqual(expected);
  });

  it('emits entranceText on entrance', () => {
    document.dispatchEvent = jest.fn();

    const cell = new Cell({
      monsters: [],
      items: [],
      entranceText: 'hello',
      door: null,
    });

    cell.enter();

    const expected = new CustomEvent('gameMessage', {
      details: 'hello',
    });

    expect(document.dispatchEvent)
      .toHaveBeenCalledWith(expected);
  });
});
