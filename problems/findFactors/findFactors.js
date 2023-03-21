/**
 * given a number, num, return an array that contains every number num is evenly
 * divisible by, starting with one and going up to and through num itself
 */

function findFactors(num) {
  const results = []
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) results.push(i)
  }
  return results
}
