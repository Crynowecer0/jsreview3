//input: array of numbers, starting index, ending index
//output: sum of values between start and end, INCLUSIVE
//constraints:
//Start default to 0 if missing
//end defaults to length of input array if missing OR if greater than arg array length
//if end param is > array length, end param should equal array end
//edge cases: cant think of any, addressed in constraints
//summary:
//return the sum of the digits at index start through index end in an argument
//array. both start and end should default to 0, and if end is greater than
//array length, return through the end
//similar to native slice/splice?? functionality.

function rangeInArray(array, start = 0, end = array.length - 1) {
  //handle end edge cases
  if (end > array.length) end = array.length - 1;
  if (!Array.isArray(array)) return null;

  let sum = 0;

  //main function body
  for (let i = start; i <= end; i++) {
    sum += array[i];
  }

  return sum;
  //starting at start, loop up through end.
  // Add any parameters you need. Good luck!
}


console.log(rangeInArray([1, 2, 3, 4], 1)) //should be 9
console.log(rangeInArray([1, 2, 3, 4])) //should be 10
