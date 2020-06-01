const assert = require('assert')

/**
 * Given an array of integers, find the subarray with the maximum/minimum possible sum with at least k elements.
 * Solution is implemented using Kadane's Algorithm.
 *
 * @param inputArr - An array of integers.
 * @param minElements - Minimum no of elements that the subarray should have.
 * @param max - If true, find the subarray with the maximum possible sum. Find the minimum if false.
 * @returns [] - The subarray with the maximum/minimum possible sum.
 */
function getMaxMinSubarray (inputArr, minElements = 0, max = true) {
  // validate the input
  assert(inputArr.length > 0, 'Input array should have at least one element.')
  assert(minElements >= 0, 'Minimum no of elements should be greater than or equal to 0.')

  let maxSum = 0; let currentSum = 0
}

/**
 * Tests
 */

// test case #1
const exampleInput1 = [-5, 2, -1, 3, -2]
const maxSolution1 = [2, -1, 3]
const minSolution1 = [-5]

const calculatedSolution1 = getMaxMinSubarray(exampleInput1, max = true)

console.log(`Example Input #1: ${JSON.stringify(exampleInput1)}, Max Sum Subarray: ${JSON.stringify(calculatedSolution1)}`)
assert.deepStrictEqual(calculatedSolution1, solution1)

// all negative numbers, all 0, and other edge cases
