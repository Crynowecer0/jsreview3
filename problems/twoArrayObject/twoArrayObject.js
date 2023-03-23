/**
 * given two an array of keys and an array of values, create a new object with
 * corresponding key and value pairs
 * --if there are not enough values, the value of keys without values should be null
 * --if there are not enough keys, ignore the rest of the values
 *
 * inputs
 * -an array of keys
 * -an array of values
 * arrays may not be the same length
 * see constraints/how to handle above
 *
 * outputs
 * -a new object built from the key value pairs and corresponding indices across
 * the two arrays
 *
 * breakdown
 *
 * create an object a new object to hold the results
 *
 * loop over the array of keys, accessing both the value and the index. Loop over
 * the whole array (no early breaks) -> use forEach
 *
 * for each iteration, set a new key in results equal to the value at the current
 * index in values. If that value does not exist, set the key equal to null
 *
 * return the results object
 */
function twoArrayObject(keys, values) {
  const results = {};

  keys.forEach((key, index) => {
    results[key] = values[index] || null;
  });

  return results;
}
