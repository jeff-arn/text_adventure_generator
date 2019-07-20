import Item from './Item';

describe('Item', () => {
  it('constructs properly', () => {
    const expected = {
      name: 'sword',
      type: 'weapon',
      keywords: ['sword', 'dagger', 'third thing'],
    };

    const result = new Item({
      name: 'sword',
      type: 'weapon',
      keywords: ['sword', 'dagger', 'third thing'],
    });

    expect(result).toEqual(expected);
  });
});
