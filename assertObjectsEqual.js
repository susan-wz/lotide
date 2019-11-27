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

// eqobjects function
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

// FUNCTION TO WORK ON

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect; 
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertion Passed: First Object ${inspect(obj1)} === Second Object ${inspect(obj2)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: First Object ${inspect(obj1)} !== Second Object ${inspect(obj2)}`);
  }
};

// TEST CODE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const dc2 = { d: [2, 3], c: "1" };
// assertObjectsEqual(cd, dc); // => true
// assertObjectsEqual(cd, cd2); // => false
// assertObjectsEqual(dc, dc2); // => false