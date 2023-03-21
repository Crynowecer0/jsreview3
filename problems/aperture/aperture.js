/**
 * given a number and an array, return a new array, composed of subbarrays of size N
 * containing consecutive elements from the input array.
 * in case of n > array length & n < 1, return an empty array
 */

//i - a number and an array
//o - a new array of sub-arrays OR a an empty array, depending on the value of N in relation
//to array length
//e - empty array in cases of n > length and n < 1

//psuedocode
//handle stated edge cases

//declare variable to hold empty array

//starting from element 0, loop over items
//grab a slice of items with a length of n
//if the length of the slice is equal to n, push it to results
//if not, break the loop

//return result

function aperture(n, items) {
  if (n > items.length || n < 1) return [];

  const results = [];

  for (let i = 0; i < items.length; i++) {
    let piece = items.slice(i, i + n);
    if (piece.length != n) break;
    results.push(piece);
  }

  return results;
}
