/**
 * given an array of objects and the name of a key, return a new array that contains
 * the value stored at the given key name in each object of the input array
 *
 * inputs:
 * array of objects -> objs
 * a string -> keyName
 *
 * output:
 * an array of the values stored at keyName in each object in objs
 *
 *
 * breakdown
 *
 * create a new, empty array if not using an HOF.
 *
 * loop over the objs array
 * check if there is a value at key name in the current object
 * if there is, push the value into the results array declared above
 *
 * return the results array
 *
 */
function extractValue(objs, keyName) {
  const results = [];
  for (const object of objs) {
    if (keyName in object) {
      results.push(object[keyName])
    }
  }
  return results;
}

//test case for console.logs
// const people = [
//   {name: "Sam"},
//   {name: "Kate", dogOwner: true},
//   {name: "Yong"},
// ];

// extractValue(people, "name") //["Sam", "Kate", "Yong"]
