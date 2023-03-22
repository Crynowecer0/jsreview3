/**
 * Given an array of objets and a target key, return a boolean indicating if every
 * object in the array of object contains the target key
 * return TRUE if every object contains key
 * return FALSE if any object does NOT contain key
 *
 * breakdown
 * inputs are array of objects -> objs, target key->targetKey
 *
 * use some/every to
 */
function hasCertainKey(objs, targetKey) {
  return objs.every((object, index) => {
    return (targetKey in object);
  });
}
