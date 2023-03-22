/**
 * given any number of arrays, return an array of arrays. The sub-arrays will contain
 * the first elements, second elements (or undefined), and so forth.
 *
 * declare a variable to hold results and init to empty array
 * very similar structure to the unzip matrix problem
 * loop over and down
 * access the first element of each subbarray
 *   push it or undefined to a temporary array
 *
 * push the temp array to the results array
 *
 * return the results array
 *
 */
function zip(...arrays) {
  const results = [];
  let index = 0;

  while (index < arrays[0].length) {
let tempArr = []
    for (let i = 0; i < arrays.length; i++) {
      tempArr.push(arrays[i][index])
    }
    results.push(tempArr)
    index++
  }
  return results;
}


