const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arrForCheck = new Map();
  const res = names.map((elem) => {
    if (arrForCheck.has(elem)) {
      const count = arrForCheck.get(elem);
      const newElem = `${elem}(${count})`;
      arrForCheck.set(elem, count + 1);
      arrForCheck.set(newElem, 1);
      return newElem;
    } else {
      arrForCheck.set(elem, 1);
      return elem;
    }
  });
  return res;
}

module.exports = {
  renameFiles
};
