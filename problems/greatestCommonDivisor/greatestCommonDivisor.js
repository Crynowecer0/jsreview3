/*
 *given two whole numbers, return the LARGEST number that evenly divides both numbers
 * i - two WHOLE numbers
 * o - the largest number that evenly divdes both numbers
 * c - both numbers will be whole
 * e - aside from missing/invalid, none
 *
 * psuedocode
 * set guards against edge cases, if any
 * declare variable to hold results
 *
 * loop from 1 to the smaller of the two numbers
 * if both numbers divide evenly by the current number
 * check if the current number is greater than the current value of results
 * if so, set results equal to the current numbers
 *
 * return results
 */

function greatestCommonDivisor(num1, num2) {
  //no edge cases
  let min = Math.min(...arguments);
  let results = 0;

  for (let i = 1; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      if (i > results) results = i;
    }
  }

  return results;
}
