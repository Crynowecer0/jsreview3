//restate
//given three numbers (target, min, and max) return the target if it is between the min and max
//return the min if the target is less than the min
//return the max if the target is greater than the max

//i - 3 numbers

//o - one of the numbers, depending on the conditions above

//c - not sure if min/max checking is inclusive or exclusive, tests do not really
//provide insight.

//e - cannot think of any not mentioned in constraints

/* given three numbers, return the target number if inbetween the bounds, the lower
bound if the target is less than the lower bound, and the upper bound if the target is greater
than the upper bound */

function clamp(value, lowerBound, upperBound) {
  if (value > lowerBound && value < upperBound) return value;
  if (lowerBound >= value) return lowerBound;
  if (value >= upperBound) return upperBound;
}
