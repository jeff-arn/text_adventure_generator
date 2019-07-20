import * as utils from './utils';

describe('Utils', () => {
  describe('requiredConstructorValue', () => {
    it('returns the value if not null', () => {
      const expected = 5;
      const result = utils.requiredConstructorValue(5);
      expect(result).toEqual(expected);
    });

    it('throws an error if provided value is null', () => {
      expect(() => {
        utils.requiredConstructorValue(null);
      }).toThrow();
    });
  });
});
