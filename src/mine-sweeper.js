const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;

  const res = new Array(row).fill(0);
  const result = res.map(() => new Array(col).fill(0));
  const temp = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  for (let r = 0; r < row; r += 1) {
    for (let c = 0; c < col; c += 1) {

      result[r][c] = temp.reduce((acc, [x, y]) => {
        const resR = r + x;
        const resC = c + y;
        if (resR >= 0 && resR < row && resC >= 0 && resC < col) {
          if (matrix[resR][resC]) {
            acc += 1;
          }
        }
        return acc;
      }, 0)
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
