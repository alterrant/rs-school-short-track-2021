/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = n.split('-');
  let bool = true;
  arr.forEach((item) => {
    if (!((item[0] <= 9 && item[0] >= 0) || item[0] === 'A' || item[0] === 'B' || item[0] === 'C' || item[0] === 'D' || item[0] === 'E' || item[0] === 'F')) bool = false;
    if (!((item[1] <= 9 && item[1] >= 0) || item[1] === 'A' || item[1] === 'B' || item[1] === 'C' || item[1] === 'D' || item[1] === 'E' || item[1] === 'F')) bool = false;
  });
  return bool;
}

module.exports = isMAC48Address;
