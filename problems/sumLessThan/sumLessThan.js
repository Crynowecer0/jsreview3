/**
 * given an array of numbers and an individual number, return a single number that
 * is the some of all of the numbers in the array of numbers that are strictly LESS
 * than the input number
 *
 * breakdown
 * inputs
 * an array of numbers: nums
 * an individual number: maxNum
 *
 * output
 * a number -> the some of all the numbers in the array less than maxNum
 *
 * maxNum is determined by adding up all numbers in the array less than maxNum
 *
 * psuedocode
 * create a variable to hold the sum, initialize it to 0
 * use a looping structure to loop over every num in Nums
 * -on each iteration, if the curren number is < maxNum, set the sum eqaul to
 * its current value plus the value of the current number
 *
 * return the sum
 */
function sumLessThan(nums, maxNum) {
  let sum = 0;

  for (const num of nums) {
    if (num < maxNum) sum += num;
  }

  return sum;
}
