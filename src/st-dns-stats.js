import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats( domains) {
  let result = {};
  for (let dom of domains) {
    let currDNS = "";
    let parts = dom.split(".").reverse();
    for (let part of parts) {
      currDNS += "." + part;
      result[currDNS] = result[currDNS] != undefined ? result[currDNS] +1 : 1
    }
  }
  return result;
}
