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

/* Assignment
Implement middle which will take in an array and return the middle-most element(s) of the given array.
 - For arrays with one or two elements, there is no middle. Return an empty array.
 - For arrays with odd number of elements, an array containing a single middle element should be returned.
 - For arrays with an even number of elements, an array containing the two elements in the middle should be returned
 Write test assertions for the various scenarios with middle. 
 */

// ACTUAL MIDDLE FUNCTION

function middle (arr) {
  let theMiddle = [];
  if (arr.length === 1 || arr.length === 2) {
    return theMiddle;
  } else if (arr.length % 2 === 0) {
    let lowerMid = arr.length/2 - 1;
    let upperMid = (arr.length/2);
    theMiddle.push(arr[lowerMid], arr[upperMid]);
    return theMiddle;
  } else {
    theMiddle.push(Math.floor(arr.length/2));
    return theMiddle;
  }
}

assertArraysEqual(middle([0, 1]), [])
assertArraysEqual(middle([0, 1, 2, 3, 4]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])