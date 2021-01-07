const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎Assertion failed: ${actual} !== ${expected}`);
  }
};
const findKeyByValue = function(object, value) {
  const result ={}
  for (const obj of Object.keys(object)) {
    if (value[obj] !== value) {
      console.log("eggs")
    } 
    /* console.log(`${object} ${value}`); // “a 5”, “b 7", “c 9” */
   }
return result
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
/* findKeyByValue(bestTVShowsByGenre, "action") */
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); 