// ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// countLetters Function

const countLetters = function(allLetters) {
  let result = {};
  allLetters = allLetters.split(" ").join("");
  for (eachLetter of allLetters) {
    if(result[eachLetter]) {
    result[eachLetter] += 1;
    } else {
      result[eachLetter] = 1;
    }
  } return result;
}

// TEST CODE

let pileLetters = "lighthouse in the house";
console.log(countLetters(pileLetters));