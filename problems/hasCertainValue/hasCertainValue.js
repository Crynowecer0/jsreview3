/**
 * given an array of objects, a key name, and a target value, return TRUE if every
 * object in the objects array contains the target value at the input key, otherwise
 * return false
 *
 * inputs:
 * - array of objects->objs
 * - a string -> keyName
 * - any value -> searchValue
 *
 * breakdown:
 * using .some() -> some returns true if any value passes the test
 *
 * for the purposes of this problem, needs to return FALSE if any value passes the test
 *
 * test -> object[key] === targetVal
 *
 * using .every() -> every returns true if ALL values pass the test
 *
 * for the purpose of this problem, needs to return true if all values pass the test
 *
 * test -> object
 *
 *
 *
 */

//implementation with .some()
// function hasCertainValue(objs, keyName, targetVal) {
//   //return false if any object has a different value at the target key
//   return !objs.some((object) => {
//     return object[keyName] !== targetVal;
//   });
// }

//implementation with .every()
function hasCertainValue(objs, keyName, targetVal) {
  //return true if all objects have target val at key name
  return objs.every((object) => {
    return object[keyName] === targetVal;
  });
}