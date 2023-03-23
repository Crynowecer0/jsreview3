/**
 * given an array and two indexes, return a mutated array where the values at the
 * indexes passed into the function are swapped
 *
 * simple to solve with destructuring swap syntax
 *
 */
function swap(items, index1, index2) {
  [items[index1], items[index2]] = [items[index2], items[index1]]
  return items;
}
