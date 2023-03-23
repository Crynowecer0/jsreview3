
/**
 * given two strings, return the sum of the number of times that characters at
 * the same position are different. if the input strings are not the same length
 * return NaN
 *
 * inputs
 * -two strings, may not be of equal lengths
 *
 * outputs
 * -the sum of the number of times that the strings contain different characters
 * at the same index
 *
 * assuming that strings will only contain alphabeticical characters based on tests
 * case should be ignored
 *
 * breakdown
 * set a gaurd against the edge case of inputs of different lengths
 *
 * declare a variable to hold the sum, initialize to 0
 *
 * loop over the first string, accessing both the index and the character
 * cast the character to lower case
 * check if the lowercase character is equal to the character at the current index
 * of the second string, casting that character to lowercase as well
 * -if false, increment the sum variable declared earlier
 *
 * return the some variable
 *
 */


function hammingDistance(str1, str2) {
  if (str1.length !== str2.length) return NaN;

let sum = 0;

for (const index in str1) {
  let char = str1[index].toLowerCase()
  if (char !== str2[index].toLowerCase()) sum++
}
return sum;
}
