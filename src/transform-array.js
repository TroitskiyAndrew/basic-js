import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (Array.isArray(arr)) {
    let result = []
    let blackLAbel = -1;
    for (let i in arr) {
      i = +i
      if (i === blackLAbel)
        continue;
      if (arr[i] == "--discard-next") {
        if (arr[i + 1] != undefined)
          blackLAbel = i + 1;
        continue;
      }
      
      if (arr[i] == "--discard-prev") {
        if (arr[i - 1] != undefined && i-1 != blackLAbel)
          result.pop()
        continue;
      }
      
      if (arr[i] == "--double-next"){
        if (arr[i + 1] != undefined)
          result.push(arr[i + 1]);
        continue;
      }
      
      if (arr[i] == "--double-prev") {
        if (arr[i - 1] != undefined && i-1 != blackLAbel)
          result.push(arr[i - 1]);
        continue;
      }

      if (arr[i] == "none"){
        continue;
      }
      result.push(arr[i])
      
    }
    return result
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}
