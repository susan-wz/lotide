// importing and assertEqual
const assertEqual = require('../assertEqual');
const tail = require('../tail');

//TEST CODE - using mocha and chai
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for ['yup']", () => {
    assert.deepEqual(tail(["yup"]), []); 
  });
});