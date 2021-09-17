import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let sortedArr = arr.filter((num) => num != -1).sort((a,b) => a-b);
  let result = [];
  let i = 0;
  for (let num of arr) {
    if (num === -1) {
      result.push(num)
    } else {
      result.push(sortedArr[i++])
    }
  }
  return result;
}
