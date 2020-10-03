const assert = require('assert')

/**
 * Given n number of stairs, you can climb at most m stairs at a time.
 * For instance, for m=3, you can climb 1, 2, or 3 stairs at a time.
 * Count the number of different ways that you can reach the top.
 *
 * Solution below uses the optimal approach of calculating a fibonacci-like sequence.
 *
 * Time Complexity: O(m*n)
 * Space Complexity: O(m)
 *
 * @param stairCount - No of stairs to climb (n).
 * @param maxSteps - Max no of stairs you can climb at a time (m).
 * @returns {number} - Number of different ways to reach the top.
 */
function climbStairs (stairCount, maxSteps) {
  // validate input
  assert(stairCount >= 0, 'Cannot have negative stairs.')
  assert(maxSteps > 0, 'Max no of stairs you can climb at a time must be greater than 0.')

  // first two fibonacci-like numbers are always 0 and 1 so just return them as is
  if (stairCount <= 1) return stairCount

  // if you can only take 1 step at a time, no matter how high the stairs, there is only 1 way to climb it
  if (maxSteps === 1) return 1

  // fibonacci-like numbers sequence where each number is the sum of m numbers before it
  // first 2 fibonacci numbers are 0 and 1 so we start with those
  const fib = [0, 1]

  // calculate next fibonacci-like number and push it to the end of the array
  for (let i = 0; i < stairCount; i++) {
    // sum previous m numbers
    fib.push(fib.reduce((total, n) => total + n))

    // we only need to know last m numbers so remove any extras
    if (fib.length > maxSteps) fib.shift()
  }

  return fib.pop()
}

// worst solution with recursion:
//   Time complexity: O(2 ^ stairCount)
//   Space complexity: O()
//   Call Stack: O()
function climbStairs_bad (stairCount, maxSteps) {
  if (maxSteps > stairCount) maxSteps = stairCount

  let numWays = 0

  for (let i = 1; i <= maxSteps && i <= stairCount; i++) {
    if (i === stairCount) return i
    numWays += climbStairs_bad(stairCount - i, maxSteps)
  }

  return numWays
}

// still a bad solution with recursion plus memoization:
//   Time complexity: O()
//   Space complexity: O()
//   Call Stack: O()
function climbStairs_bad2 (stairCount, maxSteps) {
  // todo: implement me
  return climbStairs(stairCount, maxSteps)
}

/**
 * very similar climbStairs except possibleStepsList = [1, 2, 4, 7]
 * this can still be solved using fibonacci-like sequences instead of recursion,
 * but we need to calculate all of [1, 2, 3, 4, 5, 6, 7] since upper steps can depend on any of them
 * @param stairCount
 * @param possibleStepsList
 */
function climbStairsWithVariableSteps (stairCount, possibleStepsList) {}

/**
 * Tests
 */

// test case #0
const stairs0 = 0
const maxSteps0 = 2
const solution0 = 0

const calculatedSolution0 = climbStairs(stairs0, maxSteps0)
const calculatedSolution0_bad = climbStairs_bad(stairs0, maxSteps0)
const calculatedSolution0_bad2 = climbStairs_bad2(stairs0, maxSteps0)

console.log(`Example Stairs #0: ${stairs0}, maxSteps: ${maxSteps0}, Solution: ${solution0}`)
assert.deepStrictEqual(calculatedSolution0, solution0)
assert.deepStrictEqual(calculatedSolution0_bad, solution0)
assert.deepStrictEqual(calculatedSolution0_bad2, solution0)

// test case #1
const stairs1 = 1
const maxSteps1 = 2
const solution1 = 1

const calculatedSolution1 = climbStairs(stairs1, maxSteps1)
const calculatedSolution1_bad = climbStairs_bad(stairs1, maxSteps1)
const calculatedSolution1_bad2 = climbStairs_bad2(stairs1, maxSteps1)

console.log(`Example Stairs #1: ${stairs1}, maxSteps: ${maxSteps1}, Solution: ${solution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)
assert.deepStrictEqual(calculatedSolution1_bad, solution1)
assert.deepStrictEqual(calculatedSolution1_bad2, solution1)

// test case #2
const stairs2 = 2
const maxSteps2 = 2
const solution2 = 2

const calculatedSolution2 = climbStairs(stairs2, maxSteps2)
const calculatedSolution2_bad = climbStairs_bad(stairs2, maxSteps2)
const calculatedSolution2_bad2 = climbStairs_bad2(stairs2, maxSteps2)

console.log(`Example Stairs #2: ${stairs2}, maxSteps: ${maxSteps2}, Solution: ${solution2}`)
assert.deepStrictEqual(calculatedSolution2, solution2)
assert.deepStrictEqual(calculatedSolution2_bad, solution2)
assert.deepStrictEqual(calculatedSolution2_bad2, solution2)

// test case #3
const stairs3 = 7
const maxSteps3 = 2
const solution3 = 21

const calculatedSolution3 = climbStairs(stairs3, maxSteps3)
const calculatedSolution3_bad = climbStairs_bad(stairs3, maxSteps3)
const calculatedSolution3_bad2 = climbStairs_bad2(stairs3, maxSteps3)

console.log(`Example Stairs #3: ${stairs3}, maxSteps: ${maxSteps3}, Solution: ${solution3}`)
assert.deepStrictEqual(calculatedSolution3, solution3)
assert.deepStrictEqual(calculatedSolution3_bad, solution3)
assert.deepStrictEqual(calculatedSolution3_bad2, solution3)

// test case #4
const stairs4 = 40
const maxSteps4 = 1
const solution4 = 1

const calculatedSolution4 = climbStairs(stairs4, maxSteps4)
const calculatedSolution4_bad = climbStairs_bad(stairs4, maxSteps4)
const calculatedSolution4_bad2 = climbStairs_bad2(stairs4, maxSteps4)

console.log(`Example Stairs #4: ${stairs4}, maxSteps: ${maxSteps4}, Solution: ${solution4}`)
assert.deepStrictEqual(calculatedSolution4, solution4)
assert.deepStrictEqual(calculatedSolution4_bad, solution4)
assert.deepStrictEqual(calculatedSolution4_bad2, solution4)

// test case #5
const stairs5 = 16
const maxSteps5 = 7
const solution5 = 31489

const calculatedSolution5 = climbStairs(stairs5, maxSteps5)
const calculatedSolution5_bad = climbStairs_bad(stairs5, maxSteps5)
const calculatedSolution5_bad2 = climbStairs_bad2(stairs5, maxSteps5)

console.log(`Example Stairs #5: ${stairs5}, maxSteps: ${maxSteps5}, Solution: ${solution5}`)
assert.deepStrictEqual(calculatedSolution5, solution5)
assert.deepStrictEqual(calculatedSolution5_bad, solution5)
assert.deepStrictEqual(calculatedSolution5_bad2, solution5)

// test case #6
const stairs6 = 30
const maxSteps6 = 30
const solution6 = 536870912

const calculatedSolution6 = climbStairs(stairs6, maxSteps6)
const calculatedSolution6_bad = climbStairs_bad(stairs6, maxSteps6)
const calculatedSolution6_bad2 = climbStairs_bad2(stairs6, maxSteps6)

console.log(`Example Stairs #6: ${stairs6}, maxSteps: ${maxSteps6}, Solution: ${solution6}`)
assert.deepStrictEqual(calculatedSolution6, solution6)
assert.deepStrictEqual(calculatedSolution6_bad, solution6)
assert.deepStrictEqual(calculatedSolution6_bad2, solution6)
