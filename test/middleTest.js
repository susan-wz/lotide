// importing function
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
assertArraysEqual(middle([0, 1]), [])
assertArraysEqual(middle([0, 1, 2, 3, 4]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])