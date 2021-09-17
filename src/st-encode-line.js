import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  if (str.length == 0)
    return "";
  let result = [str[0]]
  for (let i = 1; i < str.length; i++){
    if (str[i] == str[i - 1]) {
      result[result.length - 1] += str[i];
    } else {
      result.push(str[i])
    }
  }
  return result.map(item => (item.length > 1 ? item.length: "") + item[0]).join("")

}
