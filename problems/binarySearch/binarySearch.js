/**
 * given a value and an array, return the index where the value exists in the
 * array, or -1 if the value does not exist by implenting the binary search algorithm
 *
 * psuedocode
 * set the min value to 0
 * set the max value equal to the length of the input array - 1
 *
 *
 * repeat the following steps until the array has been searched

 * set the midpoint equal to the min + (max-min) / 2

 * check if the mid is the target, if it is return it
 * if the the array at index mid is less than the target
 * set the min equal to mid + 1
 *
 * otherwise
 * set the hi equal to the mid - 1
 *
 * if the above completes, return -1
 */

function binarySearch(array, target) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let mid = Math.round(min + (max - min) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return -1;
}

binarySearch([1, 2, 3, 4], 2);
