
/**
 * given a number, return a boolean indicating if that number contains at least
 * one zero
 * use .some or .every to solve this
 *
 * create a function to test if a character is equal to 0
 *
 * convert the number to an array
 *
 * return the result of calling .every on the array, passing in the zero testing
 * function as the callback
 *
 *
 *
 *
 *
 */

function hasAZero(num) {
  const inputAsArray = num.toString().split('')

  const isZero = char => char == 0;

  return inputAsArray.some(isZero)
}
