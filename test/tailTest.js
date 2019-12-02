// importing and asserEqual
const assertEqual = require('../assertEqual');
const tail = require('../tail');


// TEST CODE to check that the original array is not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
const test1 = [];
const test2 = ["yup"];
assertEqual(tail(test1), []);
assertEqual(tail(test2), []);
