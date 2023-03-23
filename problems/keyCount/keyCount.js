/**
 * given an array of objects, return a new object that contains a frequenecy table
 * the frequency table will list the frequency that each key appears across the array
 * of objects
 *
 * inputs
 * -an array of objects, objs
 *
 * outputs
 * -an object containing a count of each key that appears across all of the individual
 * objects in the array of objects
 *
 * breakdown
 *
 * create a new empty object to store results in
 *
 * iterate over the objects in the input array
 * -for each object, iterate over each key in the object
 *   -if the key exists as key in results, increment the value pointed to by the key
 *   -if the key does not exist in results, create it and point it to 1
 *
 * return the results object
 *
 */
function keyCount(objs) {
  const results = {}

  for (const object of objs) {
    for (const key in object) {
      results[key] = results[key] + 1 || 1
    }
  }

  return results;
}


keyCount([
  {name: "Elie", catOwner: false},
  {name: "Moxie", isCat: true},
])

//{name: 2, catOwner: 1, isCat: 1};
