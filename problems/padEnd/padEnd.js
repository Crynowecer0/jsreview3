//i - a string, a number (a min length), and an optional string

//o - the put string with NUMBER characters of padding added on
//the padding characters will either be spaces, or the optional string
//repeated, up to NUMBER of characters

//c
//padding characters will be truncated/repeated as needed to fit into specified
//amount of padding

//if minLength is less than phrase length, simply return the input phrase

//e

//summary
//given a string, a number, and an optional string, return a new string that is equal
//to the length of the STRING + NUMBER. If the optional string is provided
//the characters in the returned string occuring at string.length onwards will the optional
//string, which will be repeated/truncated as needed to fill the space. If no optional string is provided
//the padding will be all empty space.

//print a string with a number of empty spaces concated to the end

//print a string with another string concated to the end
//the padding string will be equal to the optional inputted string, repated/truncated as needed

function padEnd(string, minLength, padding = ' ') {
  if (minLength < string.length) return string;

  let results = string;
  let paddingLength = minLength - string.length;

  while (results.length < minLength) {
    results = results + padding;
  }

  return results.slice(0, minLength)
}

