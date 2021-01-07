const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  if (obj1Keys.length === obj2Keys.length) {
    for (const key1 of obj1Keys) {
      for (const key2 of obj2Keys) {
        if (key1 === key2) {
          if (Array.isArray(object1[key1])) {
            if (!eqArrays(object1[key1], object2[key2])) {
              return false;
            }
          } else if (object1[key1] !== object2[key2]) {
            return false;
          }
        }
      }

      /* return true; */
    }
    /* console.log('before false') */
  } else {
    return false;
  }
  return true;
};

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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👍👍👍Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
  
    console.log(`👎👎👎Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  
  }
  // Implement me!
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false
