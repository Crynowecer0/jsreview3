/**
 * given a N by M matrix, return an M x N matrix from the same elements
 *
 * [[1, 2], [3, 4]] -> [[1, 3], [2, 4]]
 *
 *
 * declare a new array to hold the new array to be returned
 *
 * matrix.length -> num of rows
 * row.length -> num of columns
 *
 *
 * loop over the columns in the matrix
 *  declare temp array to hold the complete column
 *   for column, loop down the rows
 *    access the item at matrix row, col
 *    push that item the temp array declared earlier
 *   push the temp array into the results array declared above
 *
 * return results
 */

function unzip(matrix) {
  const results = [];
  let col = 0;

  while (col < matrix[0].length) {
    let tempArr = []
    for (let row = 0; row < matrix.length; row++) {
      tempArr.push(matrix[row][col])
    }
    results.push(tempArr)
    col++
  }

  return results
}

unzip([
  [1, 2],
  [3, 4],
]);

unzip([[1, 2, 3], [4, 5, 6]])
