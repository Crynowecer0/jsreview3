//inputs
//Array, OPTIONAL number of items to drop from start of array

//outputs
//NEW array, with NUMBER items dropped from start

//relation between
//

//labeling

//summary
//given an array, return a NEW array, which will be a copy of the input array with
//the first NUMBER items removed

//if OPTIONAL NUMBER is greater than array length, return empty array

//IF OPTIONAL NUMBER is undefined, a copy of the input array with the first item removed

function drop(array, numDrop) {
//handle case of numDrop > array.length
if (numDrop > array.length) return []
//handle case of undefined numDrop
if (numDrop === undefined) return array.slice(1)

//handle all other cases
//return a NEW array with first numDrop items removed
return array.slice(numDrop)

}
