/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const indexZero = new Set();
  let sum = 0;
  matrix.forEach((itemUp) => {
    const newMatrix = itemUp.map((itemDown, indexDown) => {
      let someItem = itemDown;
      if (indexZero.has(indexDown)) someItem = 0;
      if (itemDown === 0) indexZero.add(indexDown);
      return someItem;
    });
    sum = newMatrix.reduce((sumMatrix, item) => {
      let resultSum = sumMatrix;
      resultSum += item;
      return resultSum;
    }, sum);
    return sum;
  });
  return sum;
}

module.exports = getMatrixElementsSum;
