/**
 * given a binary number, convert it to to the matching decimal number
 *
 * decimal is equal to sum of binary digts * there power
 * power of digit 0 is equal to length of binary sequence-1, power of last didgit is 0
 *
 */

function binaryToDecimal(binaryNum) {
  let stringInput = binaryNum.toString();
  let n = stringInput.length - 1;

  let decimal = 0;

  for (const index in stringInput) {
    let digit = stringInput[index]
    decimal += digit * (2**(n-index))
  }

  return decimal;
}

binaryToDecimal("1001") //should be 9
