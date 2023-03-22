/**
 * given and array of objects and a key, return a new array that contains all of
 * the objects that contain the input key
 * use the .filter method to solve this
 *
 * create a variable to hold the new array to be returned, call it results
 * use a looping structure to loop over each object in the array
 * check if each object contains the given key
 * if it does, push that object into results
 *
 * return results
 */

function filterByKey(objs, keyName) {
  return objs.filter((object, index)=>{
    if (keyName in object) return object
  })
}
