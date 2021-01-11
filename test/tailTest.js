const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5'); 
  });
  it("returns 7 for [5,6,7]", () => {
    assert.strictEqual(tail([5,6,7]), 7);
  })
  it('returns "Labs" for ["Hello", "Lighthouse", "Labs"]',() => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");
  })
  it('returns ' + undefined + ' for []', () => {
    assert.strictEqual(tail([]), undefined);
  })
  it('returns ' + undefined + ' for []', () => {
    assert.strictEqual(tail([]), undefined);
  })
  it('returns ' + undefined + ' for []', () => {
    assert.strictEqual(tail([]), );

  })
});



/* 
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements! */