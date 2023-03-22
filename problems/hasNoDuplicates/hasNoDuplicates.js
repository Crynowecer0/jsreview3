/**
 * give an array of numbers, return a boolean indicating if the array contains
 * any duplicate values
 * TRUE if no dupes
 * FALSE if dupes
 *
 * solve using Set, .some, and .every
 *
 * using Set
 * create a new set from the argument array
 * return the boolean result of comparing the set length to the argument array length
 * if they are the same, the input array has no duplicates and we return true
 * if they are not the same, the input array contains duplicates and we return false
 */

// function hasNoDuplicates(nums) {
//   const set = new Set(nums);
//   return set.size === nums.length;
// }

//.some - check if ANY number is include in the rest of the array
//return TRUE if NOT INCLUDED
//return FALSE if INCLUDED
// function hasNoDuplicates(nums) {
//   return !nums.some((num, index) => {
//     return nums.slice(index + 1).includes(num);
//   });
// }

//.every - EVERY item passes the test->every item is not a duplicate

function hasNoDuplicates(nums) {
  return nums.every((num, index)=>{
    return !nums.slice(index+1).includes(num)
  })
}
