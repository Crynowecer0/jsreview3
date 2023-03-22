/**
 * given an array of objects and a key, return a new array containing the value
 * pointed to by the key argument in each of the objects in the argument array
 *
 * use the built in map function
 */
function extractKey(objs, keyName) {
  return objs.map((object, index) => {
    return object[keyName];
  });
}
