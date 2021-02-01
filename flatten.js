// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`👍👍👍Assertion Passed: ${array1} === ${array2}`);
//   } else {

//     console.log(`👎👎👎Assertion failed: ${array1} !== ${array2}`);
//   }
// };
// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }

//     }
//   } return true;
// };

const flatten = function (array) {
  let result = [];
  for (let i of array) {
    if (!Array.isArray(i)) {
      result.push(i);
    } else if (Array.isArray(i)) {
      for (let ii of i) {
        result.push(ii);
      }
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
