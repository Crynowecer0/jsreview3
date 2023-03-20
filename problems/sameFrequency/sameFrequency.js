//i - two numbers
//o - a boolean
//c - none
//e - aside from empty/improper inputs, none that I can think of

//summary
//take two numbers and determine if the digit frequency is the same for both of them

function sameFrequency(num1, num2) {
  const num1String = num1.toString();
  const num1frequencyTable = {};

  for (let i = 0; i < num1String.length; i++) {
    let digit = num1String[i];
    if (num1frequencyTable[digit]) {
      num1frequencyTable[digit]++;
    } else {
      num1frequencyTable[digit] = 1;
    }
  }

  const num2String = num2.toString();
  const num2frequencyTable = {};

  for (let i = 0; i < num2String.length; i++) {
    let digit = num2String[i];
    if (num2frequencyTable[digit]) {
      num2frequencyTable[digit]++;
    } else {
      num2frequencyTable[digit] = 1;
    }
  }

  for (const key in num1frequencyTable) {
    if (num1frequencyTable[key] != num2frequencyTable[key]) return false;
  }

  return true;
}

console.log(sameFrequency(1122, 1212)); //should be true
