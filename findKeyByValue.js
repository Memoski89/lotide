const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎Assertion failed: ${actual} !== ${expected}`);
  }
};
const findKeyByValue = function(object, ValuePara) {
  for (const [key, value] of Object.entries(object)) {
    if (ValuePara === value) {
      return key;
    }
  }
  return undefined;
};
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
/* findKeyByValue(bestTVShowsByGenre, "action") */
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);