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
Implement without which will return a subset of a given array, removing unwanted elements.
This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
Use assertArraysEqual to write test cases for various scenarios.
Among your test cases, be sure to include an important test that is easy to overlook: The without function should be returning a new array and not modify the original array that is passed in. Let's write a test case to ensure this:
Must test this too
Loop through all, and check for all items to remove? Or loop through the number of times of the item to remove? 
*/

//ACTUAL without function

function without(source, itemsToRemove) {
  let newArray = []; let addIt = true;
  for (i = 0; i < source.length; i++) {
    addIt = true;
    for (u = 0; u < itemsToRemove.length; u++) {
      if(source[i] === itemsToRemove[u]) {
        addIt = false;
      }
    } if (addIt === true) {
      newArray.push(source[i]);
    }
  } return newArray;
}

// TEST CODE
// console.log(without([1, 2, 3, 4], [1])) // should give [2, 3, 4]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // should give ["1", "2"]
// console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]))

// ASSERTIONS
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3, 4], [1]),[2, 3, 4]);