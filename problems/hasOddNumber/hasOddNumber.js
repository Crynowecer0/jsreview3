/**
 * given an array, return a boolean indicating if the array contains at least
 * one odd number
 * use .some or .every
 *
 * breakdown
 * loop over each value in the array
 * test if the current value is an odd number
 * if it is, return true
 *
 * return false
 *
 */

function hasOddNumber(nums) {
const isOdd = (element) => element % 2 != 0;

return nums.some(isOdd)
}


