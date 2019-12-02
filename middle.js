// importing eqArrays and assertArrays Equal
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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
    theMiddle.push(arr[Math.floor(arr.length/2)]);
    return theMiddle;
  }
}

console.log(middle([1, 2, 3]));

module.exports = middle;