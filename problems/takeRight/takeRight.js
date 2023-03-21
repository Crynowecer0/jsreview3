/* given an array and an OPTIONAL number, return the following
  - a new array containing only the last element (if N is missing)
  - a new, empty array if N is 0
  - a copy of array containing the last N items of array if N is present and positive
  - a copy of array if N is > the length of array

 */

//i - an array, and a number
//o - a NEW array based on the conditions above
//c - making assumption that N will be positive
//e - missing/invalid inputs, N negative (assuming this will not be the case based on tests)
// N is 0

function takeRight(items, n) {
  if (n === undefined) return items.slice(-1)

  if (n > items.length) return items.slice();

  if (n === 0) return [];

  return items.slice(-n)


}
