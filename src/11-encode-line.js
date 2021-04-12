/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let ramArray = [];
  const finalArray = [];
  str.split('').forEach((item) => {
    if (ramArray[0] === item) ramArray.push(item);
    else {
      if (ramArray.length) {
        if (ramArray.length > 1) finalArray.push(ramArray.length);
        finalArray.push(ramArray[0]);
      }
      ramArray = [];
      ramArray.push(item);
    }
  });
  if (ramArray.length) {
    if (ramArray.length > 1) finalArray.push(ramArray.length);
    finalArray.push(ramArray[0]);
  }
  return finalArray.join('');
}

module.exports = encodeLine;
