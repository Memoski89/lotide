const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎Assertion failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function (string) {
  const results = {};
  const cleanString = string.replace(/\s+/g, "");
  for (const letter of cleanString) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

const result1 = "lighthouse in the house";
console.log(countLetters(result1));
