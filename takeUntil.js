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
// assertArraysEqual function
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

/* INSTRUCTIONS
Function to take in two parameters: the array to work with and the callback. 
The function will return a "slice of the array with elements taken from the beginning." 
It should keep going until the callback returns a truthy value.
The callback should only have one parameter: the item in the array. 
*/

// ACTUAL CODE
const takeUntil = function(array, callback) {
  results = [];
  for (item of array) {
    if (callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
}

const myArray1 = ["this", "is", "an", "array", ",", "and", "it's", "cool"] 
// const results1 = takeUntil(myArray, (item) => {if (item !== ",") {return true}})
const results1 = takeUntil(myArray1, item => item !== ",")
assertArraysEqual(takeUntil(myArray1, item => item !== ","), [ 'this', 'is', 'an', 'array' ])

const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const results2 = takeUntil(myArray2, item => item < 6 );
assertArraysEqual(takeUntil(myArray2, item => item < 6 ), [ 1, 2, 3, 4, 5 ])