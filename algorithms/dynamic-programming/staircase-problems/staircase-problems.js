const assert = require('assert')

/**
 * Given n number of stairs, you can climb at most m stairs at a time.
 * For instance, for m=3, you can climb 1, 2, or 3 stairs at a time.
 * Count the number of different ways that you can reach to the top.
 *
 * Solution below uses the optimal approach of calculating the solution using a Fibonacci-like sequence.
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

  // first two Fibonacci-like numbers are always 0 and 1 so just return them as is
  if (stairCount <= 1) return stairCount

  // if you can only take 1 step at a time, no matter how many stairs there are, there is only 1 way to climb it
  if (maxSteps === 1) return 1

  // Fibonacci-like numbers sequence where each number is the sum of m numbers before it
  const stairs = [1]

  // calculate next Fibonacci-like number and push it to the end of the array
  for (let i = 0; i < stairCount; i++) {
    // sum previous m numbers
    stairs.push(stairs.reduce((total, n) => total + n))

    // remove the first number, since we only need to know last m numbers
    if (stairs.length > maxSteps) stairs.shift()
  }

  return stairs.pop()
}

/**
 * Solution to the same {climbStairs} question above, but using recursion.
 * This is a terrible solution since both processor time use and call stack depth grow exponential with the total number of stairs.
 *
 * Time Complexity: O(2^n) (Size of recursion tree will grow exponentially.)
 * Space Complexity: O(1)
 * Call Stack: O(n) (Depth of recursion tree will grow linearly. See the related article for the visualization of this.)
 */
function climbStairs_bad (stairCount, maxSteps) {
  // validate input
  assert(stairCount >= 0, 'Cannot have negative stairs.')
  assert(maxSteps > 0, 'Max no of stairs you can climb at a time must be greater than 0.')

  let numWays = 0

  for (let i = 1; i <= maxSteps && i <= stairCount; i++) {
    if (i === stairCount) numWays++
    else numWays += climbStairs_bad(stairCount - i, maxSteps)
  }

  return numWays
}

/**
 * Solution to the same {climbStairs} question above, but using recursion with memoization.
 * This is not as bad as the recursive only solution, but still worse than the Fibonacci-like solution.
 * This could be an acceptable answer in an interview situation if you cannot come up with the Fibonacci-like solution.
 *
 * Time Complexity: O(n) (Size of the recursion tree will be linear this time due to result reuse.)
 * Space Complexity: O(n)
 * Call Stack: O(n) (Depth of recursion tree will grow linearly.)
 */
function climbStairs_bad2 (stairCount, maxSteps, visitedSteps = []) {
  // validate input
  assert(stairCount >= 0, 'Cannot have negative stairs.')
  assert(maxSteps > 0, 'Max no of stairs you can climb at a time must be greater than 0.')

  let numWays = 0

  for (let i = 1; i <= maxSteps && i <= stairCount; i++) {
    if (i === stairCount) {
      numWays++
    } else {
      if (!visitedSteps[stairCount - i]) visitedSteps[stairCount - i] = climbStairs_bad2(stairCount - i, maxSteps, visitedSteps)
      numWays += visitedSteps[stairCount - i]
    }
  }

  return numWays
}

/**
 * Given n number of stairs, you can climb [x, y, z, ...] stairs at a time.
 * For instance, you can climb 2, 5 or 6 stairs at a time.
 * Count the number of different ways that you can reach to the top.
 *
 * This can again be solved using a Fibonacci-like sequence instead of recursion.
 *
 * Time Complexity: O(m*n)
 * Space Complexity: O(n) // can be optimized to O(m)
 *  (m is the length of possibleStepsList array)
 *
 * @param stairCount - No of stairs to climb.
 * @param possibleStepsList - A sorted list of integers representing the number of different steps that can be taken at a time.
 * @returns {number} - Number of different ways to reach the top.
 */
function climbStairsWithVariableSteps (stairCount, possibleStepsList) {
  // validate input
  assert(stairCount >= 0, 'Cannot have negative stairs.')
  if (!possibleStepsList || !possibleStepsList.length) return 0

  // calculate the Fibonacci-like sequence
  const stairs = [1]

  for (let i = 1; i <= stairCount; i++) {
    stairs[i] = 0
    possibleStepsList.forEach(s => stairs[i] += stairs[i - s] || 0)
    // todo: trim the stairs array to save space
  }

  return stairs.pop()
}

/**
 * Tests
 */

// test case #0
const stairCount0 = 0
const maxSteps0 = 2
const solution0 = 0

const calculatedSolution0 = climbStairs(stairCount0, maxSteps0)
const calculatedSolution0_bad = climbStairs_bad(stairCount0, maxSteps0)
const calculatedSolution0_bad2 = climbStairs_bad2(stairCount0, maxSteps0)

console.log(`Example Stairs #0: stairCount: ${stairCount0}, maxSteps: ${maxSteps0}, Solution: ${solution0}`)
assert.deepStrictEqual(calculatedSolution0, solution0)
assert.deepStrictEqual(calculatedSolution0_bad, solution0)
assert.deepStrictEqual(calculatedSolution0_bad2, solution0)

// test case #1
const stairCount1 = 1
const maxSteps1 = 2
const solution1 = 1

const calculatedSolution1 = climbStairs(stairCount1, maxSteps1)
const calculatedSolution1_bad = climbStairs_bad(stairCount1, maxSteps1)
const calculatedSolution1_bad2 = climbStairs_bad2(stairCount1, maxSteps1)

console.log(`Example Stairs #1: stairCount: ${stairCount1}, maxSteps: ${maxSteps1}, Solution: ${solution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)
assert.deepStrictEqual(calculatedSolution1_bad, solution1)
assert.deepStrictEqual(calculatedSolution1_bad2, solution1)

// test case #2
const stairCount2 = 2
const maxSteps2 = 2
const solution2 = 2

const calculatedSolution2 = climbStairs(stairCount2, maxSteps2)
const calculatedSolution2_bad = climbStairs_bad(stairCount2, maxSteps2)
const calculatedSolution2_bad2 = climbStairs_bad2(stairCount2, maxSteps2)

console.log(`Example Stairs #2: stairCount: ${stairCount2}, maxSteps: ${maxSteps2}, Solution: ${solution2}`)
assert.deepStrictEqual(calculatedSolution2, solution2)
assert.deepStrictEqual(calculatedSolution2_bad, solution2)
assert.deepStrictEqual(calculatedSolution2_bad2, solution2)

// test case #3
const stairCount3 = 7
const maxSteps3 = 2
const solution3 = 21

const calculatedSolution3 = climbStairs(stairCount3, maxSteps3)
const calculatedSolution3_bad = climbStairs_bad(stairCount3, maxSteps3)
const calculatedSolution3_bad2 = climbStairs_bad2(stairCount3, maxSteps3)

console.log(`Example Stairs #3: stairCount: ${stairCount3}, maxSteps: ${maxSteps3}, Solution: ${solution3}`)
assert.deepStrictEqual(calculatedSolution3, solution3)
assert.deepStrictEqual(calculatedSolution3_bad, solution3)
assert.deepStrictEqual(calculatedSolution3_bad2, solution3)

// test case #4
const stairCount4 = 40
const maxSteps4 = 1
const solution4 = 1

const calculatedSolution4 = climbStairs(stairCount4, maxSteps4)
const calculatedSolution4_bad = climbStairs_bad(stairCount4, maxSteps4)
const calculatedSolution4_bad2 = climbStairs_bad2(stairCount4, maxSteps4)

console.log(`Example Stairs #4: stairCount: ${stairCount4}, maxSteps: ${maxSteps4}, Solution: ${solution4}`)
assert.deepStrictEqual(calculatedSolution4, solution4)
assert.deepStrictEqual(calculatedSolution4_bad, solution4)
assert.deepStrictEqual(calculatedSolution4_bad2, solution4)

// test case #5
const stairCount5 = 16
const maxSteps5 = 7
const solution5 = 31489

const calculatedSolution5 = climbStairs(stairCount5, maxSteps5)
const calculatedSolution5_bad = climbStairs_bad(stairCount5, maxSteps5)
const calculatedSolution5_bad2 = climbStairs_bad2(stairCount5, maxSteps5)

console.log(`Example Stairs #5: stairCount: ${stairCount5}, maxSteps: ${maxSteps5}, Solution: ${solution5}`)
assert.deepStrictEqual(calculatedSolution5, solution5)
assert.deepStrictEqual(calculatedSolution5_bad, solution5)
assert.deepStrictEqual(calculatedSolution5_bad2, solution5)

// test case #6
const stairCount6 = 30
const maxSteps6 = 30
const solution6 = 536870912

const calculatedSolution6 = climbStairs(stairCount6, maxSteps6)
const calculatedSolution6_bad = climbStairs_bad(stairCount6, maxSteps6)
const calculatedSolution6_bad2 = climbStairs_bad2(stairCount6, maxSteps6)

console.log(`Example Stairs #6: stairCount: ${stairCount6}, maxSteps: ${maxSteps6}, Solution: ${solution6}`)
assert.deepStrictEqual(calculatedSolution6, solution6)
assert.deepStrictEqual(calculatedSolution6_bad, solution6)
assert.deepStrictEqual(calculatedSolution6_bad2, solution6)

// test case #7 (for variable steps question)
const stairCount7 = 9
const possibleStepsList = [2, 5, 7]
const solution7 = 5

const calculatedSolution7 = climbStairsWithVariableSteps(stairCount7, possibleStepsList)

console.log(`Example Stairs #7 (for variable steps question): stairCount: ${stairCount7}, possibleStepsList: ${JSON.stringify(possibleStepsList)}, Solution: ${solution7}`)
assert.deepStrictEqual(calculatedSolution7, solution7)
