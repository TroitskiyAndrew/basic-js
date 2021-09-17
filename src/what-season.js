import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (arguments.length == 0)
    return 'Unable to determine the time of year!'
  try {
    let month = date.prototype.getMonth();
    if (month >= 11 ||  month <= 1) {
      return "winter"
    }else if(month >= 8) {
      return "autumn"
    }else if(month >= 5) {
      return "summer"
    }
    else if(month >= 2) {
      return "spring"
    }
  } catch {
    throw new NotImplementedError('Invalid date!');
  }
}
