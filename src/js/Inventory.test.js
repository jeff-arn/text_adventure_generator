import Inventory from './Inventory';

describe('Inventory', () => {
  it('Constructs properly', () => {
    const expected = {
      items: [],
    };

    const result = new Inventory({
      items: [],
    });

    expect(result).toEqual(expected);
  });

  it('can add an item', () => {
    const inventory = new Inventory({
      items: [],
    });

    const expected = {
      name: 'sword',
      type: 'weapon',
      keywords: [],
    };

    inventory.add(expected);

    expect(inventory.items).toHaveLength(1);
    expect(inventory.items[0]).toEqual(expected);
  });

  it('throws error if invalid object added to inventory', () => {
    const inventory = new Inventory({
      items: [],
    });

    expect(() => {
      inventory.add(null);
    }).toThrow();
  });

  it('can remove an item', () => {
    const inventory = new Inventory({
      items: [
        {
          name: 'sword',
          type: 'weapon',
          keywords: [],
        },
      ],
    });

    inventory.remove({
      name: 'sword',
      type: 'weapon',
      keywords: [],
    });

    expect(inventory.items).toHaveLength(0);
  });

  it('doesnt remove an item if not specified', () => {
    const inventory = new Inventory({
      items: [
        {
          name: 'sword',
          type: 'weapon',
          keywords: [],
        },
      ],
    });

    inventory.remove({
      name: 'dagger',
      type: 'weapon',
      keywords: [],
    });

    expect(inventory.items).toHaveLength(1);
  });
});
