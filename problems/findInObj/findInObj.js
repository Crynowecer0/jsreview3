/**
 * given an array of objects, a key, and a target value return the first object
 * that contains the key value pair from the arugments, or undefined if that key
 * value pair does not exist in any of the sub-objects.
 *
 * breakdown
 * loop over the objects in the array -> need to return early
 *
 * on each iteration, check if the argument key is equal to the argument value
 * for the current object
 *
 * if it is, return the object
 *
 * if the above loop completes without a return, return undefined
 *
 *
 */

function findInObj(objs, key, targetVal) {
  for (const object of objs) {
    if (object[key] === targetVal) return object;
  }

  return undefined;
}
