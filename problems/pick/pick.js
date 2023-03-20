//restate
//given an object and an array, return a new object containing only the keys that
//exist as values in the array

//i - an object and an array

//o - a new object

//c - new object that is returned contains only key values pairs in which the key
//exists as a value in the given array

//e - empty, invalid inputs

function pick(obj, keys) {
  const result = {};

  for (const item of keys) {
    if (item in obj) {
      result[item] = obj[item];
    }
  }

  return result;
}
