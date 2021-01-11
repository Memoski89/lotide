const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const input = [1,2,3];
const output = middle(input);
assertArraysEqual(output, [2]);
const newInput = [10,14,25,36];
const newOutput = middle(newInput);
assertArraysEqual(newOutput, [14,25])