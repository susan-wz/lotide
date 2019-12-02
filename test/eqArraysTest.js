// importing eqArrays and assertEqual
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
assertEqual(eqArrays(["1", ["2", 5, [7, 5]], "3", "4"], ["1", ["2", 5, [7, 5]], "3", "4"]), true)