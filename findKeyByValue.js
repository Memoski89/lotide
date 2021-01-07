const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎Assertion failed: ${actual} !== ${expected}`);
  }
};
const findKeyByValue = function(listOfShows, tvShow) {
  for (const [key, value] of Object.entries(listOfShows)) {
    if (tvShow === value) {
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
