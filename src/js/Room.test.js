import Room from './Room';

const mockCells = [
  {
    position: { x: 0, y: 0 },
    monsters: [],
    items: [],
    entranceText: 'cell one',
    door: null,
  },
  {
    position: { x: 1, y: 0 },
    monsters: [],
    items: [],
    entranceText: 'cell two',
    door: null,
  },
  {
    position: { x: 2, y: 0 },
    monsters: [],
    items: [],
    entranceText: 'cell three',
    door: null,
  },
];

describe('Room', () => {
  it('constructs correctly', () => {
    const expected = {
      cells: [],
      entranceText: 'hello room',
      startingCellPosition: { x: 0, y: 0 },
      activeCell: {},
    };

    const result = new Room({
      cells: [],
      entranceText: 'hello room',
      startingCellPosition: { x: 0, y: 0 },
      activeCell: {},
    });

    expect(result).toEqual(expected);
  });

  it('emits entranceText on enter', () => {
    document.dispatchEvent = jest.fn();

    const room = new Room({
      cells: [],
      entranceText: 'hello room',
      startingCellPosition: { x: 0, y: 0 },
      activeCell: {},
    });

    room.enter();

    const event = new CustomEvent('gameMessage', {
      details: 'hello room',
    });

    expect(document.dispatchEvent)
      .toHaveBeenCalledWith(event);
  });

  it('correctly updates room on setActiveCell', () => {

  });
});
