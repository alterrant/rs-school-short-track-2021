/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const words = s1.split('');
  const addWords = [];
  s2.split('').forEach((item) => {
    if (words.includes(item)) {
      words.splice(words.indexOf(item), 1);
      addWords.push(item);
    }
  });
  return addWords.length;
}

module.exports = getCommonCharacterCount;
