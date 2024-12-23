const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = str.split('');
  let count = 1;
  return res
    .reduce((acc, elem, i, arr) => {
      if (elem !== arr.at(i + 1)) {
        if (count > 1) {
          acc.push(count);
        }
        acc.push(elem);
        count = 0;
      }
      count += 1;
      return acc;
    }, []).join('');
}

module.exports = {
  encodeLine
};
