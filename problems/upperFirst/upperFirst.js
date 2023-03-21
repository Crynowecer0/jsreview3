/* given a string as input, return a copy of that string with the first character capitalized
if input is an empty string, return an empty string
*/

//i - a string
//o - a (new?) string with the first letter capitalized
//c - empty string needs to return an empty string
//e - aside from missing/invalid - cannot think of any

function upperFirst(string) {
  if (string.length === 0) return "";

  return string[0].toUpperCase() + string.slice(1);
}
