/* const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } return true;
};
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {

    console.log(`👎👎👎Assertion failed: ${actual} !== ${expected}`);
  }
}; */
const without = function (input, undesirables) {
  let output = [];
  let flag = true;
  for (let i = 0; i < input.length; i++) {
    if (!undesirables.includes(input[i])) {
      output.push(input[i]);
    }
  } return output
}
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));