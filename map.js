const words = ["ground", "control", "to", "major", "tom"];

const lol = ["Laughing", "Out", "Loud"];

const elite = ["leader",38,37,"Team"];

const randomNumbers = [623847803925834279294820394820394820];

const map = function (array, callback) {
  /* console.log('array: ', array);
  console.log('callback: ', callback); */
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    /*     console.log("item BEFORE: ", item);
    console.log("item AFTER: ", callback(item));
    console.log("---"); */
  }
  return results;
};

/* const results1 = */ 
map(words, (word) => word[0]);
map(lol, (word) => word[0]);
map(elite, (word) => word[0]);
map(randomNumbers, (word) => word[0]); 


 /* console.log(results1); */

const eqArrays = function (array1, array2) {
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
const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`👍👍👍Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`👎👎👎Assertion failed: ${array1} !== ${array2}`);
  }
};

const firstLetters = map(words, (word) => word[0]);
const firstLetters2 = map(lol, (word) => word[0]);
const firstLetters3 = map(elite, (word) => word[0]);
const firstLetters4 = map(randomNumbers, (word) => word[0]); 


assertArraysEqual(firstLetters, ['g', 'c','t','m','t'])
assertArraysEqual(firstLetters2, ['L','O','L'])
assertArraysEqual(firstLetters3, ['l',3,3,'t'])
assertArraysEqual(firstLetters4, [6,9])
/* assertArraysEqual([1, 2, 3], [1, 2, 3]) */
