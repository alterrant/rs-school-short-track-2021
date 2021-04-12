/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const number = n.toString().split('').reduce((sum, item) => {
    let sumItems = sum;
    sumItems += +item;
    return sumItems;
  }, 0);
  if (n >= 0 && n <= 9) return number;
  return getSumOfDigits(number);
}

module.exports = getSumOfDigits;
