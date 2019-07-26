const sum = require('./sum');

describe('sum function', () => {

  it('should sum two positive numbers', () => {
    const result = sum(1, 2);

    expect(result).toEqual(3);
  });

  it('should sum positive and negative numbers', () => {
    fail();
  });

  it('should sum two negative numbers', () => {
    fail();
  });

});

