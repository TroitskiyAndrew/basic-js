import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options = {}) {
  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';
  let add = ""
  if (options.addition !== undefined)
    add = options.addition
  if (options.addition !== undefined && options.additionRepeatTimes) {
    for (let i = 2; i <= options.additionRepeatTimes; i++){
      add += options.additionSeparator + options.addition
    }
  }
  if (add != "")
    str += add;
  let result = str;
  if (options.repeatTimes !== undefined) {
    for (let i = 2; i <= options.repeatTimes; i++){
      result += options.separator + str;
    }
  }
  return result;
}
