const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* Assignment
Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
Use assertEqual to write test cases for various scenarios.
*/

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

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false)// => PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => PASS

/* Pseudocode
check that each of the arrays are of equal length or else it's false
loop through each element in first array
compare to element in the same position in the second array
return false is any of them don't match and quit the loop
*/
