/* given a number, return a boolean indicating if that number is a primary number
 */

//i - a number
//o - a boolean
//c - making assumption that input will always be a whole, positive number
//e - invalid inputs, 0, 1, 2

function isPrime(num) {
  //guard conditions for the edge cases
  if (!num || num === 1) return false;
  if (num === 2) return true;


  //declare intermediary variable to hold 1/2num + 1 for readibility
  let halfNumPlusOne = num / 2 + 1;

  //loop from 2 up to the number divided by 2
  for (let i = 2; i <= halfNumPlusOne; i++) {
    //check if each number starting at 2 divides evenly into the argument number
    if (num % i === 0) return false
    //if it does, return false
  }

  //return true if the above operation is able to complete without a return
  return true;
}
