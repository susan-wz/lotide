// importing function
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE - using mocha and chai
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(middle([0, 1]), []); 
  });
});