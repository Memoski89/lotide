const eqArrays = function(array1, array2) {
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
    return `👍👍👍Assertion Passed: ${actual} === ${expected}`;
  } else {
  
    return `👎👎👎Assertion failed: ${actual} !== ${expected}`;
  }
};
const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length > 2 && array.length % 2 !== 0) {
    return [array[Math.floor(array.length / 2)]];
  } else {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  }
  
};
const input = [1,2,3];
const output = middle(input);
console.log(assertArraysEqual(output, [2]));
const newInput = [10,14,25,36];
const newOutput = middle(newInput);
console.log(assertArraysEqual(newOutput, [14,25]));