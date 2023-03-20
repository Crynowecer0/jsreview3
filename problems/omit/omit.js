//given an object and an array, create a new object containing all of the keys
//from the original object that are NOT present in the array

//i - object as obj, array as keys
//o - a new object

//c - none indicated

//e - aside from missing/invalid input, cannot think of any

function omit(obj, keys) {
  //create variable to hold a new object, results
  const results = {};

  //loop over the keys in the argument object
  for (const key in obj) {
    //check if the key exists in the argument array
    //if it does NOT, add the key:value pair to the results object
    if (!keys.includes(key)) {
      results[key] = obj[key];
    }
  }

  //return the results object declared above
  return results;
}
