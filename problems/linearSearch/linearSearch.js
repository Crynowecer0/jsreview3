//basically clone IndexOf
//i - Array, target value
//o - index of target value OR -1
//c - dont use native indexOf
//e - aside from invalid/missing inputs, cannot think of any

//summary


function linearSearch(array, target) {
  //loop over the array
  //test each value of array to see if it is equal to target
  //if it is, return the index
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (value === target) return i;
  }

  //if the above operation completes without a return, return -1
  return -1
}
