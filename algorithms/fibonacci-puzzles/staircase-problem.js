const assert = require('assert')

/**
 * Given n stairs, you can climb 1 or 2 stairs at a time.
 * Count the number of different ways that you can reach the top.
 *
 * @param stairs - No of available stairs.
 * @returns {number} - Count of ways to reach the top.
 */
function climbStairs (stairs) {
  // a, b = first and second fibonacci numbers
  let a = 1; let b = 1; let tmp = 0

  // calculate next fibonacci number
  for (let i = 0; i < stairs; i++) {
    tmp = b
    b = a + b
    a = tmp
  }

  return a
}

/**
 * Tests
 */

// test case #1
const stairs1 = 1
const solution1 = 1

const calculatedSolution1 = climbStairs(stairs1)

console.log(`Example Stairs #1: ${stairs1}, Solution: ${solution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)

// test case #2
const stairs2 = 2
const solution2 = 2

const calculatedSolution2 = climbStairs(stairs2)

console.log(`Example Stairs #2: ${stairs2}, Solution: ${solution2}`)
assert.deepStrictEqual(calculatedSolution2, solution2)

// test case #3
const stairs3 = 3
const solution3 = 3

const calculatedSolution3 = climbStairs(stairs3)

console.log(`Example Stairs #3: ${stairs3}, Solution: ${solution3}`)
assert.deepStrictEqual(calculatedSolution3, solution3)

// test case #4
const stairs4 = 4
const solution4 = 5

const calculatedSolution4 = climbStairs(stairs4)

console.log(`Example Stairs #4: ${stairs4}, Solution: ${solution4}`)
assert.deepStrictEqual(calculatedSolution4, solution4)

// test case #5
const stairs5 = 5
const solution5 = 8

const calculatedSolution5 = climbStairs(stairs5)

console.log(`Example Stairs #5: ${stairs5}, Solution: ${solution5}`)
assert.deepStrictEqual(calculatedSolution5, solution5)
