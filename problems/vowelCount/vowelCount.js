/**
 * given a string, return an object that contains a case-insensitive frequency
 * table of all of the vowels in the input string
 *
 * declare an empty object to hold the results
 * declare an array to hold vowels
 * use a looping structure to iterate over each character in the passed in string
 *   declare a temp variable holding a lowercase version of current character
 *   if the character exists in the object as a key, increment the value at that key
 *   if the character does not exist as a key, create it and initialize its value to one
 *
 * return the frequency table object
 *
 */
function vowelCount(phrase) {
  const results = {};
  const vowels = ["a", "e", "i", "o", "u"];
  const phraseLowerCase = phrase.toLowerCase()

  for (const char of phraseLowerCase) {
    if (vowels.includes(char)) {
      results[char] = results[char] + 1 || 1;
    }
  }

  return results;
}
