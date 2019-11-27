// assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* INSTRUCTIONS
This function should take in a collection of items and return counts for a specific subset of those items. 
It won't count everything. It will be given which items we want to count, ignoring the others.
Items in our case will be limited to Strings.
countOnly will be given an array and an object. 
It will return an object containing counts of everything that the input object listed.
*/

// ACTUAL FUNCTION
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  for (let item of allItems) {
    if (itemsToCount[item]) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
    console.log(item);
  }
  return results;
}

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);