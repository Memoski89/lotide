const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`👍👍👍Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`👎👎👎Assertion failed: ${array1} !== ${array2}`);
  }
};
const letterPositions = function(sentence) {
  const results = {};
  let counter = 0;
  for (const letter of sentence) {
    if (results[letter]) {
      results[letter].push(counter);
    } else {
      results[letter] = [counter];
    }
    counter++;
  }

  return results;
};
const randomString = "hello";
console.log(letterPositions(randomString));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").e, [4]);