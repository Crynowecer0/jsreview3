/**
 *
 * given an array of words, return a NEW array that contains strings comprised
 * of the first and last character of each word in the original array
 *
 * i - an array of strings
 * o - a new array of modified strings
 * would this need to be case sensitive? tests do not indicate
 *
 * create a new variable to hold our results that will be returned later
 * us a looping structure to loop over each word in words
 * will not need to break early, and do not need to access the index->for in
 *
 * on each iteration of the loop
 * declare a temporary string variable
 * push the first character of the current word into temp variable
 * push the last character of current word into temp variable
 * --if current word is single char, push it again
 * push the temp string into results array
 *
 * once the looping structure has completed, return the results array
 *
 */
function firstAndLast(words) {
  const results = []

  for (const word of words) {
    let tempStr = '';
    tempStr += word.slice(0,1)
    tempStr += word.slice(-1)
    results.push(tempStr)
  }

  return results;
}
