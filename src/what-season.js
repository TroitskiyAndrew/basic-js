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
  if (date instanceof Date) {
    try {
      let x = isNaN(date);
    } catch {
      throw new Error('Invalid date!');
    }
    let month = date.getMonth();
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
  } else {
    throw new Error('Invalid date!');
    
  }
}
