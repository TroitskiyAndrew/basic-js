import { NotImplementedError } from '../extensions/index.js';

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
export default function minesweeper(matrix) {
  let result = [];
  let count;
  for (let i = 0; i < matrix.length; i++){
    result.push([])
    for (let j = 0; j < matrix[i].length; j++){
      count = 0;
      if (i > 0) {
        count += matrix[i - 1].filter((item, index) => { return item && Math.abs(index - j) <= 1 }).length;
      }
      count += matrix[i].filter((item, index) => { return item && Math.abs(index - j) == 1 }).length;
      if (i +1 < matrix.length) {
        count += matrix[i + 1].filter((item, index) => { return item && Math.abs(index - j) <= 1 }).length;
      }
      result[i].push(count);
    }
  }
  return result;
}
