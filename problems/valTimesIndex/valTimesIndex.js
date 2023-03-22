/**
 * given an array of numbers, return a new array containing the result of of multiplying
 * each number in the input array by the index at which it appears
 */
function valTimesIndex(array) {
  return array.map((num, index) => num * index);
}
