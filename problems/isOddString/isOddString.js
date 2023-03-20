//restate
//the function should calculate the sum of of each characters alphabet position,
//and then return true if the sum is an odd number

//i - a string

//o - a boolean, true/false

//c - use .charCodeAt to make this easier

//e - spec/tests indicate for this implementation we can assume strings
//will be all lowercase letters. In a different spec, edge cases could be
//accounting for case, accounting for none-letter characters.

function isOddString(string) {
  //create a variable to hold the sum
  let sum = 0;

  //loop over the input string and calculate the sum based on the provided rule
  for (let index = 0; index < string.length; index++) {
    //convert char code per prompt
    let charValue = string.charCodeAt(index) - 96;

    sum += charValue;
  }

  //test if the sum is odd, and if it is return true
  if (sum % 2 != 0) return true

  //return false
  return false;
}
