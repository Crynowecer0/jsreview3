/**
 * given two strings, return true if they are valid anagrams, false if not
 *
 *
 * create a frequency table containing letter counts for str1
 * create a frequency table containing letter counts for str2
 *
 * loop over the first table
 *  if the current key does not exist in the second table, return false
 *  if the value stored at the current key is not the same as the value at the current
 *  key in the second table, return false
 *
 * return true
 *
 */

function validAnagram(str1, str2) {
  const str1Chars = {};
  const str2Chars = {};

  //create frequency table of chracters for str1
  for (const char of str1) {
    str1Chars[char] = str1Chars[char] + 1 || 1;
  }
  //create frequency table for characters of str2
  for (const char of str2) {
    str2Chars[char] = str2Chars[char] + 1 || 1;
  }

  // console.log(str1Chars, str2Chars)
  //compare the two tables
  for (const key in str1Chars) {
    if (!key in str2Chars) return false;
    if (str1Chars[key] !== str2Chars[key]) return false;
  }

  return true;
}

validAnagram("aaz", "zza")
