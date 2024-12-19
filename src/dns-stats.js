const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats(domains) {
  const res = {};
  domains.forEach(domain => {
    const arrOfDomain = domain.split('.').reverse();
    let current = '';
    arrOfDomain.forEach(item => {
      current = `${current}.${item}`;
      let count = res[current];
      if (!count) {
        count = 0;
      }
      count += 1;
      res[current] = count;
    });
  });
  return res;
}

module.exports = {
  getDNSStats
};
