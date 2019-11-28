// eqArrays function
function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } return true;
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

/* INSTRUCTIONS
map funcion will take in two arguments: an array to map and a callback function. 
The map function will return a new array based on the results of the callback function.
*/

const words = ["ground", "control", "to", "major", "tom"];

const map = function(arrayToMap, callback) {
  const results = [];
  for (let item of arrayToMap) {
    results.push(callback(item));
  }
  return results;
}

// TEST CODE
const results1 = map(words, word => word[0]);
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])
const results2 = map(words, word => word + word);
assertArraysEqual(map(words, word => word + word), [ 'groundground', 'controlcontrol', 'toto', 'majormajor', 'tomtom' ])