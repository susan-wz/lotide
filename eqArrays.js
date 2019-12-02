const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* Assignment
Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
Use assertEqual to write test cases for various scenarios.
Update to handle nested arrays using recursion. 
*/

function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        if (!eqArrays(arr1[i], arr2[i])) {
          return false;
        }
      } else if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } return true;
}

console.log(eqArrays(["1", ["2", 5, [7, 5]], "3", "4"], ["1", ["2", 5, [7, 5]], "3", "4"]));

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
assertEqual(eqArrays(["1", ["2", 5, [7, 5]], "3", "4"], ["1", ["2", 5, [7, 5]], "3", "4"]), true)

/* Pseudocode
check that each of the arrays are of equal length or else it's false
loop through each element in first array
compare to element in the same position in the second array
return false is any of them don't match and quit the loop
*/
