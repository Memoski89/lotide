const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), 2);
  });
  it("returns" +[]+" for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(middle([5,6,7]), 6);
  })
  it('returns "Lighthouse" for ["Hello", "Lighthouse", "Labs"]',() => {
    assert.strictEqual(middle(["Hello", "Lighthouse", "Labs"]), "Lighthouse");
  })
  it('returns ' + [] + ' for []', () => {
    assert.deepEqual(middle([]), []);
  })
  it('returns ' + [] + ' for []', () => {
    assert.deepEqual(middle([]), []);
  })
  it('returns ' + [] + ' for []', () => {
    assert.deepEqual(middle([]), []);

  })
});




/* const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const input = [1,2,3];
const output = middle(input);
assertArraysEqual(output, [2]);
const newInput = [10,14,25,36];
const newOutput = middle(newInput);
assertArraysEqual(newOutput, [14,25]) */