import World from './World';

const mockRooms = [
  {
    cells: [],
    entranceText: 'room one',
    startingCellPosition: { x: 0, y: 0 },
    activeCell: {},
  },
  {
    cells: [],
    entranceText: 'room two',
    startingCellPosition: { x: 0, y: 0 },
    activeCell: {},
  },
  {
    cells: [],
    entranceText: 'room three',
    startingCellPosition: { x: 0, y: 0 },
    activeCell: {},
  },
];

describe('World', () => {
  it('constructs properly', () => {
    const expected = {
      rooms: [],
      player: {},
      activeRoom: {},
    };

    const result = new World({
      rooms: [],
      player: {},
      activeRoom: {},
    });

    expect(result).toEqual(expected);
  });

  it('initializes rooms correctly', () => {
    const world = new World({
      rooms: [],
      player: {},
      activeRoom: {},
    });

    world.initializeRooms(mockRooms);

    expect(world.rooms).toEqual(mockRooms);
  });

  it('initializes player correctly', () => {

  });

  it('handlers user commands properly', () => {

  });
});
