const assert = require('assert')

/**
 * Given n stairs, you can climb 1 to x stairs at a time.
 * For instance, for x=3, you can climb 1, 2, or 3 stairs at a time.
 * Count the number of different ways that you can reach the top.
 *
 * @param stairCount - No of available stairs.
 * @param x - Max no of stairs you can climb at a time.
 * @returns {number} - Number of different ways to reach the top.
 */
function climbStairs (stairCount, x) {
  // validate input
  assert(stairCount >= 0, 'Cannot have negative stairs.')
  assert(x > 0, 'Max no of stairs you can climb at a time must be greater than 0.')
  if (stairCount < 2) return stairCount

  // fibonacci-like numbers sequence where each number is the sum of x numbers before it
  let fib = [0, 1]

  // calculate next fibonacci-like number and push it to the end of the array
  for (let i = 0; i < stairCount; i++) {
    fib.push(fib.reduce((total, n) => total + n))

    // we only need to know last x numbers so remove any extras
    if (fib.length > x) fib.shift()
  }

  return fib.pop()
}

/**
 * Tests
 */

// test case #0
const stairs0 = 0
const solution0 = 0

const calculatedSolution0 = climbStairs(stairs0, 2)

console.log(`Example Stairs #0: ${stairs0}, Solution: ${solution0}`)
assert.deepStrictEqual(calculatedSolution0, solution0)

// test case #1
const stairs1 = 1
const solution1 = 1

const calculatedSolution1 = climbStairs(stairs1, 2)

console.log(`Example Stairs #1: ${stairs1}, Solution: ${solution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)

// test case #2
const stairs2 = 2
const solution2 = 2

const calculatedSolution2 = climbStairs(stairs2, 2)

console.log(`Example Stairs #2: ${stairs2}, Solution: ${solution2}`)
assert.deepStrictEqual(calculatedSolution2, solution2)

// test case #7
const stairs7 = 7
const solution7 = 21

const calculatedSolution7 = climbStairs(stairs7, 2)

console.log(`Example Stairs #7: ${stairs7}, Solution: ${solution7}`)
assert.deepStrictEqual(calculatedSolution7, solution7)

// test case where x =1