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
  const obj = {};
  let nameRam = '';
  let indexRam = 0;
  domains.forEach((item, index) => {
    const split = item.split('.').reverse();
    split.forEach((itemEach) => {
      if (indexRam !== index) {
        nameRam = '';
        indexRam = index;
      }
      const latter = `.${itemEach}`;
      nameRam += latter;
      if (!obj[nameRam]) obj[nameRam] = 1;
      else obj[nameRam] += 1;
    });
  });
  return obj;
}

module.exports = getDNSStats;
