/**
 * given an array of numbers, return a boolean indicting if ANY single value is odd
 * use .some or .every
 *
 * every returns true if ALL values pass a test
 * some returns true if ANY value passes a test
 */

function hasOnlyOddNumbers(nums) {


  //implementation of .some()
  const isEven = (num) => num % 2 == 0;
  return !nums.some(isEven);

  // implementation of .every()
  // const isOdd = (num) => num % 2 != 0;
  // return nums.every(isOdd)
}

hasOnlyOddNumbers([1, 3, 5]);
