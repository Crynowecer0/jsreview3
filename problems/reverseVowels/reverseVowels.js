/**
 * two pointer problem
 * given a string, return the same string with the vowels in reverse order
 * amazing -> imazang
 *
 * i - a string
 * o - a string with the vowels appearing in reverse order of the input string
 * c - return the same string->modify the exisiting string
 * e - case needs to be preserved for the string returned
 *
 * psuedocode
 *
 * create an array to hold all the existing vowels
 * convert the input string to an array
 *
 * use two pointer approach
 *
 * set left to 0
 * set right to index of last char
 *
 * while left is less than right
 *   move the left pointer until it hits a vowel
 *   move the right pointer until it hits a vowel
 *
 * swap left and right
 *
 * increment left
 * decrement right
 * back to the top
 *
 * return the newly reversed string

 */

function reverseVowels(string) {
  const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

  let array = string.split("");

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (!vowels.includes(array[left])) {
      left++;
      continue;
    }
    if (!vowels.includes(array[right])) {
      right--;
      continue;
    }

    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }

  return array.join("");
}

reverseVowels("amazing");
