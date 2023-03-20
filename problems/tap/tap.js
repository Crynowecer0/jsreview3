//restate
//the function will accept an array and a callback that will may or may not modify
//the argument array. tap will return the array, and will ignore the return value of the callback

//i - an array and a callback. The callback will be invoked with array as an argument

//o - the array, with any modifications to it performed by the call back

//c - the return value of the callback is not relevent

//e - aside from improper/missing values, cannot think of any

function tap(items, cb) {
  //invoke the callback, passing in the array as an argument
  cb(items)
  //return the array
  return items;
}
