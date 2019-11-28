// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findkeybyvalue function (REFERENCE)
const findKeyByValue = function(objectToSearch, valueToFind) {
  for (let item in objectToSearch) {
    if (objectToSearch[item] === valueToFind) {
      return item;
    }
  }
};

/* INSTRUCTIONS
Implement the function findKey which takes in an object and a callback.
It should scan the object and return the first key for which the callback returns a truthy value.
If no key is found, then it should return undefined.
*/

const findKey = function(objectToSearch, callback) {
  for (let item in objectToSearch) {
    if (callback(objectToSearch[item])) {
      return item;
    }
  }
};

let movies = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(movies, item => item.stars === 3), "Akaleri");
assertEqual(findKey(movies, item => item.stars === 2), "noma");