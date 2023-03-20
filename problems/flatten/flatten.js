//restate
//given an array with one more more levels of nesting, return an array with one less
//level of nesting

//i - an array with one or more levels of nesting

//o - an array with one less level of nesting than the input array

//c - only remove one level of nesting

//e - aside from empty/invalid, cannot think of any

function flatten(items) {
  //create a variable to hold our results array
  let results = [];

  //declare a variable to indicate if flattening should occur
  let shouldFlatten = true;

  //loop over the the input array
  for (const item of items) {
    //if the item is an array, push each of its values into results
    if (Array.isArray(item)) {
      for (const element of item) {
        results.push(element);
      }
    } else {
      results.push(item);
    }
  }
  //return results
  return results;
}

console.log(flatten([[1], [2]])); //should be [1, 2];
