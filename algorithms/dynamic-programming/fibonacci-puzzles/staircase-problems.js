const assert = require('assert')

/**
 * Given a number of stairs, you can climb at most m stairs at a time.
 * For instance, for m=3, you can climb 1, 2, or 3 stairs at a time.
 * Count the number of different ways that you can reach the top.
 *
 * @param stairCount - No of stairs to climb.
 * @param maxSteps - Max no of stairs you can climb at a time.
 * @returns {number} - Number of different ways to reach the top.
 */

// worst solution with:
//   Time complexity: O()
//   Space complexity: O()
//   Call Stack: O()
function climbStairsRecursive (stairCount, maxSteps) {
  let stepsTaken = 0

  for (let i = 1; i <= maxSteps && stairCount - 1 > 0; i++) {
    stepsTaken += climbStairsRecursive(stairCount - 1, maxSteps)
  }

  return stepsTaken
}

// acceptable solution with:
//   Time complexity: O()
//   Space complexity: O()
//   Call Stack: O()
function climbStairsRecursiveMemoized (stairCount, maxSteps) {}

// best solution with:
//   Time complexity: O()
//   Space complexity: O()
//   Call Stack: O()
function climbStairsFibonacci (stairCount, maxSteps) {
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

const calculatedSolution0_recursive = climbStairsRecursive(stairs0, maxSteps0)
const calculatedSolution0_recursiveMemoized = climbStairsRecursiveMemoized(stairs0, maxSteps0)
const calculatedSolution0_fibonacci = climbStairsFibonacci(stairs0, maxSteps0)

console.log(`Example Stairs #0: ${stairs0}, maxSteps: ${maxSteps0}, Solution: ${solution0}`)
assert.deepStrictEqual(calculatedSolution0_recursive, solution0)
assert.deepStrictEqual(calculatedSolution0_recursiveMemoized, solution0)
assert.deepStrictEqual(calculatedSolution0_fibonacci, solution0)

// test case #1
const stairs1 = 1
const maxSteps1 = 2
const solution1 = 1

const calculatedSolution1_recursive = climbStairsRecursive(stairs1, maxSteps1)
const calculatedSolution1_recursiveMemoized = climbStairsRecursiveMemoized(stairs1, maxSteps1)
const calculatedSolution1_fibonacci = climbStairsFibonacci(stairs1, maxSteps1)

console.log(`Example Stairs #1: ${stairs1}, maxSteps: ${maxSteps1}, Solution: ${solution1}`)
assert.deepStrictEqual(calculatedSolution1_recursive, solution1)
assert.deepStrictEqual(calculatedSolution1_recursiveMemoized, solution1)
assert.deepStrictEqual(calculatedSolution1_fibonacci, solution1)

// test case #2
const stairs2 = 2
const maxSteps2 = 2
const solution2 = 2

const calculatedSolution2_recursive = climbStairsRecursive(stairs2, maxSteps2)
const calculatedSolution2_recursiveMemoized = climbStairsRecursiveMemoized(stairs2, maxSteps2)
const calculatedSolution2_fibonacci = climbStairsFibonacci(stairs2, maxSteps2)

console.log(`Example Stairs #2: ${stairs2}, maxSteps: ${maxSteps2}, Solution: ${solution2}`)
assert.deepStrictEqual(calculatedSolution2_recursive, solution2)
assert.deepStrictEqual(calculatedSolution2_recursiveMemoized, solution2)
assert.deepStrictEqual(calculatedSolution2_fibonacci, solution2)

// test case #3
const stairs3 = 7
const maxSteps3 = 2
const solution3 = 21

const calculatedSolution3_recursive = climbStairsRecursive(stairs3, maxSteps3)
const calculatedSolution3_recursiveMemoized = climbStairsRecursiveMemoized(stairs3, maxSteps3)
const calculatedSolution3_fibonacci = climbStairsFibonacci(stairs3, maxSteps3)

console.log(`Example Stairs #3: ${stairs3}, maxSteps: ${maxSteps3}, Solution: ${solution3}`)
assert.deepStrictEqual(calculatedSolution3_recursive, solution3)
assert.deepStrictEqual(calculatedSolution3_recursiveMemoized, solution3)
assert.deepStrictEqual(calculatedSolution3_fibonacci, solution3)

// test case #4
const stairs4 = 40
const maxSteps4 = 1
const solution4 = 1

const calculatedSolution4_recursive = climbStairsRecursive(stairs4, maxSteps4)
const calculatedSolution4_recursiveMemoized = climbStairsRecursiveMemoized(stairs4, maxSteps4)
const calculatedSolution4_fibonacci = climbStairsFibonacci(stairs4, maxSteps4)

console.log(`Example Stairs #4: ${stairs4}, maxSteps: ${maxSteps4}, Solution: ${solution4}`)
assert.deepStrictEqual(calculatedSolution4_recursive, solution4)
assert.deepStrictEqual(calculatedSolution4_recursiveMemoized, solution4)
assert.deepStrictEqual(calculatedSolution4_fibonacci, solution4)

// test case #5
const stairs5 = 16
const maxSteps5 = 7
const solution5 = 31489

const calculatedSolution5_recursive = climbStairsRecursive(stairs5, maxSteps5)
const calculatedSolution5_recursiveMemoized = climbStairsRecursiveMemoized(stairs5, maxSteps5)
const calculatedSolution5_fibonacci = climbStairsFibonacci(stairs5, maxSteps5)

console.log(`Example Stairs #5: ${stairs5}, maxSteps: ${maxSteps5}, Solution: ${solution5}`)
assert.deepStrictEqual(calculatedSolution5_recursive, solution5)
assert.deepStrictEqual(calculatedSolution5_recursiveMemoized, solution5)
assert.deepStrictEqual(calculatedSolution5_fibonacci, solution5)

// test case #6
const stairs6 = 30
const maxSteps6 = 30
const solution6 = 536870912

const calculatedSolution6_recursive = climbStairsRecursive(stairs6, maxSteps6)
const calculatedSolution6_recursiveMemoized = climbStairsRecursiveMemoized(stairs6, maxSteps6)
const calculatedSolution6_fibonacci = climbStairsFibonacci(stairs6, maxSteps6)

console.log(`Example Stairs #6: ${stairs6}, maxSteps: ${maxSteps6}, Solution: ${solution6}`)
assert.deepStrictEqual(calculatedSolution6_recursive, solution6)
assert.deepStrictEqual(calculatedSolution6_recursiveMemoized, solution6)
assert.deepStrictEqual(calculatedSolution6_fibonacci, solution6)
