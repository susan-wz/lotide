// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

/* Instructions
take in two objects and returns true or false, based on a perfect match. 
Needs identical keys with identical values
*/

// ACTUAL FUNCTION TO WORK ON
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let each of Object.keys(object1)) { 
      if (Array.isArray(object1[each]) && (Array.isArray(object2[each]))) {
        if (!eqArrays(object1[each],object2[each])) {
          return false;
        }
      } else {
        if (object1[each] !== object2[each]) {
          return false;
        }
      }
    }
  } return true;
};

/* TEST CODE for PRIMITIVES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
*/

// TEST FOR FOR ARRAYS
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const dc2 = { d: [2, 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
assertEqual(eqObjects(cd, cd2), false); // => false
assertEqual(eqObjects(dc, dc2), false); // => false