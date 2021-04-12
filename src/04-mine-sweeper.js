/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rowMines = [];
  const columnMines = [];
  const matrixReplaceFalse = matrix.map((item, index) => {
    const reItemMap = item.map((itemFalse, indexFalse) => {
      let mapFalse = itemFalse;
      if (itemFalse === false) mapFalse = 0;
      else {
        rowMines.push(index);
        columnMines.push(indexFalse);
      }
      return mapFalse;
    });
    return reItemMap;
  });
  for (let i = 0; i < rowMines.length; i++) {
    if (typeof (matrixReplaceFalse[rowMines[i]][columnMines[i] + 1]) === 'number') matrixReplaceFalse[rowMines[i]][columnMines[i] + 1] = matrixReplaceFalse[rowMines[i]][columnMines[i] + 1] + 1;
    if (typeof (matrixReplaceFalse[rowMines[i]][columnMines[i] - 1]) === 'number') matrixReplaceFalse[rowMines[i]][columnMines[i] - 1] = matrixReplaceFalse[rowMines[i]][columnMines[i] - 1] + 1;
    if (typeof (matrixReplaceFalse[rowMines[i] + 1][columnMines[i]]) === 'number') matrixReplaceFalse[rowMines[i] + 1][columnMines[i]] = matrixReplaceFalse[rowMines[i] + 1][columnMines[i]] + 1;
    if (((rowMines[i] - 1) >= 0) && typeof (matrixReplaceFalse[rowMines[i] - 1][columnMines[i]]) === 'number') matrixReplaceFalse[rowMines[i] - 1][columnMines[i]] = matrixReplaceFalse[rowMines[i] - 1][columnMines[i]] + 1;
    if (typeof (matrixReplaceFalse[rowMines[i] + 1][columnMines[i] + 1]) === 'number') matrixReplaceFalse[rowMines[i] + 1][columnMines[i] + 1] = matrixReplaceFalse[rowMines[i] + 1][columnMines[i] + 1] + 1;
    if (typeof (matrixReplaceFalse[rowMines[i] + 1][columnMines[i] - 1]) === 'number') matrixReplaceFalse[rowMines[i] + 1][columnMines[i] - 1] = matrixReplaceFalse[rowMines[i] + 1][columnMines[i] - 1] + 1;
    if (((rowMines[i] - 1) >= 0) && typeof (matrixReplaceFalse[rowMines[i] - 1][columnMines[i] + 1]) === 'number') matrixReplaceFalse[rowMines[i] - 1][columnMines[i] + 1] = matrixReplaceFalse[rowMines[i] - 1][columnMines[i] + 1] + 1;
    if (((rowMines[i] - 1) >= 0) && typeof (matrixReplaceFalse[rowMines[i] - 1][columnMines[i] - 1]) === 'number') matrixReplaceFalse[rowMines[i] - 1][columnMines[i] - 1] = matrixReplaceFalse[rowMines[i] - 1][columnMines[i] - 1] + 1;
  }
  return matrixReplaceFalse.map((itemUpTrue) => {
    const reItem = itemUpTrue.map((itemTrue) => {
      let itemChangeTrue = itemTrue;
      if (itemTrue === true) itemChangeTrue = 1;
      return itemChangeTrue;
    });
    return reItem;
  });
}

module.exports = minesweeper;
