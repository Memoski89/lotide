const middle = function (array) {
  let empty = [];
  if (array.length <= 2) {
    return empty;
  } else if (array.length > 2 && array.length % 2 !== 0) {
    return array[Math.floor(array.length / 2)];
  } else if (array.length > 2 && array) {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  }else
  return undefined;
};

module.exports = middle;
