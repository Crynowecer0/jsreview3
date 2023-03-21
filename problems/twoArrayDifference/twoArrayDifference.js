/**
 * givent two arrays, return an array containg all of the values that are in arr1
 * but NOT in array2
 * making assumption here that we do not need a new array, so using filter
 */

function twoArrayDifference(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item))
}
