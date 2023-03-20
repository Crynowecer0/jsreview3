//i - one value
//o - a boolean
//c - needs to return True in cases of input being undefined OR null, else return false
//e - None

//summary
//takes on argument, a value. this function serves as a test to see if a value is null or undefined

function isNil(val) {
  //test if the value is NOT one of the true cases and return false
  if (val != undefined || val != null) return false;

  //return true
  return true;
}
