//Guide: https://jestjs.io/docs/en/using-matchers

describe('equality and identity', () => {

  describe('a', () => {
    const a = ["1234"];
    const b = ["1234"];


    it('should be equal to b', () => {
      fail()
    });

    it('should be a', () => {
      fail()
    });

    it('should not be b', () => {
      fail()
    });

  });

});


describe('true, false, truthiness and falsiness', () => {

  describe('true', () => {

    it('should be true', () => {
      fail();
    });

    it('should be truthy', () => {
      fail();
    });

  });

  describe('false', () => {

    it('should be false', () => {
      fail();
    });

    it('should be falsy', () => {
      fail();
    });

  });

  describe('0', () => {

    it('should be falsy', () => {
      fail();
    });

    it('should not be false', () => {
      fail();
    });

  });

  describe('1', () => {

    it('should be truthy', () => {
      fail();
    });

    it('should not be true', () => {
      fail();
    });

  });

});

describe('numbers', () => {

  describe('5', () => {

    it('should be greater than 4', () => {
      fail();
    });

    it('should be greater or equal than 4 and 5', () => {
      fail();
    });

    it('should be less than 6', () => {
      fail();
    });

    it('should be less then or equal than 6 and 5', () => {
      fail();
    });

  });

});

describe('lists', () => {

  const fruitBasket = [
    "banana",
    "apple",
    "orange",
    "pear"
  ];

  describe('fuitBasket', () => {

    it('should contain apple', () => {
      fail();
    });

  });

});