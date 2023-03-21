/**
 * given an N x N matrix, return a sum of top-bottom diagonals. Matrix has two
 * diags, top left to bottom right, and top right to bottom left
 *
 * i - an N by N matrix
 * o - the sum of the diagonals of that matrix
 * c - matrix will always be NxN
 * e - aside from missing/invalid inputs - none that I can think of
 *
 * psuedocode
 * l-r
 * needs to grab 00, 11, 22..n-1,n-1
 * r-l
 * needs to go
 * 0:n-1,1-n-2....n-1,0
 *
 * two function, firstDiag and secondDiag, first gets top left to bottom right
 * second gets bottom left to top right
 *
 */
function sumUpDiagonals(matrix) {
  let sum = 0;

  //sum left to right
  for (let row = 0; row < matrix.length; row++) {
    sum += matrix[row][row];
  }

  //sum right to left
  for (let row = 0; row < matrix.length; row++) {
    sum += matrix[row][matrix.length - 1 - row];
  }

  return sum;
}

const matrix1 = [
  [1, 2],
  [3, 4],
];
sumUpDiagonals(matrix1);
//should be 10
//first diag should be 5
//second should be 5

const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

sumUpDiagonals(matrix2);
//should be 30
//first should be 15
//second should be 15
