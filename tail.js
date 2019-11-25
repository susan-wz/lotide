//assertEqual part
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//tail function part
const tail = function(arr) {
  return arr.slice(1);
};

// TEST CODE to check that the original array is not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
const test1 = [];
const test2 = ["yup"];
assertEqual(tail(test1), []);
assertEqual(tail(test2), []);