function createMatrix(numCols, numRows) {
  const matrix = [];

  for (let row = 0; row < numRows; row++) {
    let row = [];
    for (let col = 0; col < numCols; col++) {
      row.push(0);
    }
    matrix.push(row)
  }
  return matrix;
}
