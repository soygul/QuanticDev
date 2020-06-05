const assert = require('assert')

/**
 * Given an array of integers, find the subarray with the maximum/minimum possible sum.
 * Solution is implemented using Kadane's Algorithm.
 *
 * @param inputArr - An array of integers.
 * @param isMaxSum - If true, find the subarray with the maximum possible sum. If false, find the minimum instead.
 * @returns [] - The subarray with the maximum/minimum possible sum.
 */
function getMaxMinSubarray (inputArr, isMaxSum = true) {
  // validate the input
  assert(inputArr.length > 0, 'Input array should have at least one element.')

  // now calculate the maximum (or minimum) sum up to each index using kadane's algo
  let currentSum = 0; let currentSumStart = 0; let currentSumEnd = 0
  let maxSum = 0; let maxSumStart = 0; let maxSumEnd = 0
  const maxMinFn = isMaxSum ? Math.max : Math.min

  inputArr.forEach((n, i) => {
    currentSumEnd = i
    currentSum = maxMinFn(0, currentSum + n)
    if (currentSum === 0) currentSumStart = i

    maxSum = maxMinFn(maxSum, currentSum)
    if (maxSum === currentSum) {
      maxSumStart = currentSumStart
      maxSumEnd = currentSumEnd
    }
  })

  return inputArr.slice(maxSumStart + 1, maxSumEnd + 1)
}

/**
 * Tests
 */

// test case #1
const exampleInput1 = [-5, 2, -1, 3, -2]
const maxSolution1 = [2, -1, 3]
const minSolution1 = [-5]

const calculatedMaxSolution1 = getMaxMinSubarray(exampleInput1, true)
const calculatedMinSolution1 = getMaxMinSubarray(exampleInput1, false)

console.log(`Example Input #1: ${JSON.stringify(exampleInput1)}, Max Sum Subarray: ${JSON.stringify(calculatedMaxSolution1)}, Min Sum Subarray: ${JSON.stringify(calculatedMinSolution1)}`)
assert.deepStrictEqual(calculatedMaxSolution1, maxSolution1)
assert.deepStrictEqual(calculatedMinSolution1, minSolution1)

// all negative numbers, all 0, and other edge cases
