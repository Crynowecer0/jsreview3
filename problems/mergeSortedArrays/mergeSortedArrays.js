/**
 * given two sorted arrays, merge them togther so that we return one fully sorted array
 * do not use .sort()
 *
 * basically
 *
 * 1.) merge the date with concat or another relatively simple method
 *
 * 2.) sort the merged data
 * -bubble sort, insertion sort, etc
 *
 * bubble sort below
 *
 * loop over each element in the array
 * run an inner loop over each element in the array, always starting with the first element
 * --starting with elements 0 and 1, check if 0 is greater than 1
 * --if it is, swap them
 *
 * continue this pattern for the new 1 and 2, 2 and 3, etc and so on through the
 * array.
 *
 *
 *
 *


 */
function mergeSortedArrays(array1, array2) {
  let results = array1.concat(array2);

  for (let i = 0; i < results.length; i++) {
    for (let j = 0; j < results.length - 1; j++) {
      if (results[j] > results[j + 1]) {
        [results[j], results[j + 1]] = [results[j + 1], results[j]];
      }
    }
  }

  return results;
}
