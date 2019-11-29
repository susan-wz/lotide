// assertEqual function
const assertEqual = function (actual, expected) {
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

// SOME HELPERS
const isObject = function (object) {
  if (typeof object === "object") {
    return true;
  } else {return false}
}

// ACTUAL FUNCTION TO WORK ON
const eqObjects = function (obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (let item of Object.keys(obj1)) {
      if (typeof obj1[item] !== typeof obj2[item]) {
        return false;
      } else if (isObject(obj1[item])) {
        if (!eqObjects(obj1[item], obj2[item])) {
          return false;
        }
      } else if (Array.isArray(obj1[item])) {
        if (!eqArrays(obj1[item], obj2[item])) {
          return false;
        }
      } else {
        if (obj1[item] !== obj2[item]) {
          return false;
        }
      }
    }
  } return true;
};

// TEST CODE FOR OBJECTS
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false
console.log(eqObjects({
  a: { z: 1 },
  b: 2,
  c: { q: 5, w: { t: 6 }, e: 7, r: 8 }
},
  {
    a: { z: 1 },
    b: 2,
    c: { q: 5, w: { t: 6, h: 7 }, e: 7, r: 8 }
  },
)) // => false