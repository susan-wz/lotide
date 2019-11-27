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
Need to return all the indices (zero-based positions) in the string where each character is found.
For each letter, instead of returning just one number to represent its number of occurrences, 
multiple numbers may be needed to represent all the places in the string that it shows up.
don't forget to skip spaces. 
*/

// ACTUAL FUNCTION 
const letterPositions = function(sentence) {
  const result = {};
  for (i = 0; i < sentence.length; i++) {
    if (result[sentence[i]]) {
      result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [i]; 
    }
  } delete result[" "];
 return result;
};

/*PSEUDOCODE
start by skipping spaces - done
loop through each letter in the sentence - done
if it's there (true), then add the index as a value to the key
if it's not (false), then create a key named for the letter and add the index as a value to the key
 */

// TEST CODE
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);