const assert = require('assert')

/**
 * Given an array of integers, find the subarray with the maximum/minimum possible sum.
 * Solution is implemented using Kadane's Algorithm.
 *
 * @param inputArr - An array of integers.
 * @param max - If true, find the subarray with the maximum possible sum. Find the minimum if false.
 * @returns [] - The subarray with the maximum/minimum possible sum.
 */
function getMaxMinSubarray (inputArr, max = true) {
  // validate input

}

/**
 * Tests
 */

// test case #1
const exampleInput1 = [-5, 2, -1, 3, -2]
const solution1 = [ 2, -1, 3]

const calculatedSolution1 = getMaxMinSubarray(exampleInput1, max = true)

console.log(`Example Input #1: ${JSON.stringify(exampleInput1)}, Max Sum Subarray: ${JSON.stringify(calculatedSolution1)}`)
assert.deepStrictEqual(calculatedSolution1, solution1)
