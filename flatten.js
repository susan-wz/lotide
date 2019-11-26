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
Create a function flatten which will take in an array of arrays and return a "flattened" version of the array.
*/ 

function flatten(sourceArray) {
  let newArray = [];
  for (i = 0; i < sourceArray.length; i++) {
    if (Array.isArray(sourceArray[i])) {
      for (u = 0; u < sourceArray[i].length; u++) {
        newArray.push(sourceArray[i][u]);
      }
    } else {
      newArray.push(sourceArray[i]);
    }
  } return newArray;
}

//TEST CODE
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, ["hello", 4], "hi", [6]])) // => [1, 2, "hello", 4, "hi", 6]
assertArraysEqual(flatten([1, 2, ["hello", 4], "hi", [6]]), [1, 2, "hello", 4, "hi", 6]);