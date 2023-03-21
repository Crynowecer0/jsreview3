/* given an array and a number (positive or negative) return the nth element in
the case of a positive number, and the nth element from the end in the case of a negative number
 */

//i - an array, and a number
//o - an element at an array index, either nth if positive or nth from end if negative
//c - none stated - can I use slice for this?
//e - invalid/missing inputs, decimal number, 0 index? 0 is non-negative, so does handle with
//as a non-negative number

function nth(array, idx) {
  //seperate cases for positive and negative idx
  //if idx >= 0
  if (idx >= 0) return array[idx]
  //if ix < 0
  return array.slice(idx)[0];
}
