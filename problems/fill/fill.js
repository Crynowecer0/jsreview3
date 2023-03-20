/* given an array and a value, return the same array with each existing value
replaced with the argument value */

//i - an array and a value
//o - a modified array
//c - cannot think of any
//e - cannot think of any


function fill(items, fillVal) {
  //loop each item in items
  for (let i = 0; i < items.length; i++) {
    items[i] = fillVal
  }

  //replace the existing item with fillval
  //return items
  return items
}
