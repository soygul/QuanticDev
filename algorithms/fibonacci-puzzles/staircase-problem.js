const assert = require('assert')

/**
 * Given n stairs, you can climb at most x stairs at a time.
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

  // first two fibonacci-like numbers are always 0 and 1 so just return them as is
  if (stairCount <= 1) return stairCount

  // if you can only take 1 step at a time, no matter how high the stairs, there is only 1 way to climb it
  if (x === 1) return 1

  // fibonacci-like numbers sequence where each number is the sum of x numbers before it
  // first 2 fibonacci numbers are 0 and 1 so we start with those
  const fib = [0, 1]

  // calculate next fibonacci-like number and push it to the end of the array
  for (let i = 0; i < stairCount; i++) {
    // sum previous x numbers
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
const x0 = 2
const solution0 = 0

const calculatedSolution0 = climbStairs(stairs0, x0)

console.log(`Example Stairs #0: ${stairs0}, X: ${x0}, Solution: ${solution0}`)
assert.deepStrictEqual(calculatedSolution0, solution0)

// test case #1
const stairs1 = 1
const x1 = 2
const solution1 = 1

const calculatedSolution1 = climbStairs(stairs1, x1)

console.log(`Example Stairs #1: ${stairs1}, X: ${x1}, Solution: ${solution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)

// test case #2
const stairs2 = 2
const x2 = 2
const solution2 = 2

const calculatedSolution2 = climbStairs(stairs2, x2)

console.log(`Example Stairs #2: ${stairs2}, X: ${x2}, Solution: ${solution2}`)
assert.deepStrictEqual(calculatedSolution2, solution2)

// test case #3
const stairs3 = 7
const x3 = 2
const solution3 = 21

const calculatedSolution3 = climbStairs(stairs3, x3)

console.log(`Example Stairs #3: ${stairs3}, X: ${x3}, Solution: ${solution3}`)
assert.deepStrictEqual(calculatedSolution3, solution3)

// test case #4
const stairs4 = 40
const x4 = 1
const solution4 = 1

const calculatedSolution4 = climbStairs(stairs4, x4)

console.log(`Example Stairs #4: ${stairs4}, X: ${x4}, Solution: ${solution4}`)
assert.deepStrictEqual(calculatedSolution4, solution4)

// test case #5
const stairs5 = 16
const x5 = 7
const solution5 = 31489

const calculatedSolution5 = climbStairs(stairs5, x5)

console.log(`Example Stairs #5: ${stairs5}, X: ${x5}, Solution: ${solution5}`)
assert.deepStrictEqual(calculatedSolution5, solution5)

// test case #6
const stairs6 = 30
const x6 = 30
const solution6 = 536870912

const calculatedSolution6 = climbStairs(stairs6, x6)

console.log(`Example Stairs #6: ${stairs6}, X: ${x6}, Solution: ${solution6}`)
assert.deepStrictEqual(calculatedSolution6, solution6)
