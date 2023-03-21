/**
 * given any number of arrays, return a NEW array of unique values from all of
 * the input arrays
 *
 * i - any number of arrays
 * o - an array containing only unique values from each array
 * c - assuming that there will be no nesting
 * e - assuming no nesting and all inputs are valid, none
 *
 * psuedocode
 *
 * flatten input arrays into one array
 *
 * dedupe that array
 *
 * return it
 *
 *
 * return results
 *
 *
 */
function union(...arrays) {
  //flatten the inputs into one array
  const results = [];
  const flatInputs = arrays.flat();

  //dedupe the flattened array
  flatInputs.forEach((item) => {
    if (!results.includes(item)) results.push(item);
  });

  return results;
}

union([2], [1, 2]);
