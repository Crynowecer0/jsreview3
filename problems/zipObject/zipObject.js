/**
 * given two arrays, return an object where they keys are the values in the first array
 * and the values are the values in the second array
 * -if first array is longer, the value for the keys should be undefined
 * -if the second array is longer, ignore it
 *
 * i - two arrays, the first array contains keys, the second array contains values
 * o - an object with all of the keys from the first array, mapped to the values
 * (or undefined if first is longer) from the second array
 * c - the first array will always contain the keys
 * e - aside from missing/invalid - none
 *
 * psuedocode
 *
 * create an object to hold results
 *
 * loop over the entire first array
 * set results[first item] equal to second item at index i OR undefined
 *
 * return the results object
 *
 */

function zipObject(keys, values) {
  const results = {};

  for (const index in keys) {
    let item = keys[index];
    results[item] = values[index] || undefined;
  }
  return results;
}
