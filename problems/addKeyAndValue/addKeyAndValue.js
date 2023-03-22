/**
 *
 *
 * given an array of objects, a key, and a value, return the same array with
 * the key and value added to each object
 *
 * breakdown
 * loop over the objects in the objs array
 * for each object, set a new key value pair equal to the passed in key and value
 * return the original objs array
 *
 */

function addKeyAndValue(objs, key, value) {

  for (const object of objs) {
    object[key] = value;
  }

  return objs
}
