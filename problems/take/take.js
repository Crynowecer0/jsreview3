//i - array, number (optional, defaults to 1)
//o - a copy of the input array, from start through count
//c - if count > array length, clone the array
//e - aside from invalid inputs, already covered in constraints

//summary
//given an arrat an a number, return the first number items of the array. If the
//number is longer than the length of the array, return the whole array

function take(array, count = 1) {
  //handle edge case of count > array.length
  if (count > array.length) return array.slice();

  //return a slice of the array from 0 to count
  return array.slice(0,count)
}
