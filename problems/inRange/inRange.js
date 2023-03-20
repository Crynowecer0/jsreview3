//restate the problem
//check if a number is between EXCLUSIVE of start and end

//inputs
//a target number, a starting number, an ending number

//outputs
//a boolean

//can inputs determine outputs
//yes - the output checks if the TARGET is BETWEEN the start and end, EXCLUSIVE
//of the start and end themselves

//labeling
//target, start end

//edge cases
//none, aside from invalid inputs

//constraints
//if END is absent
//end = start
//start = 0

//if START is greater than END, swap them

//no contraints listed for handling missing start, so for purposes of this problem
//assume that it will never be missing

function inRange(target, start, end) {
  //handle the sets of constraints as listed above, problem statement indicates to handle them seperately
  if (!end) {
    // end = start;
    // start = 0;

    [end, start] = [start, 0]
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  //return a boolean representing if target is greater than start and less than end
  return (target > start && target < end)
}
