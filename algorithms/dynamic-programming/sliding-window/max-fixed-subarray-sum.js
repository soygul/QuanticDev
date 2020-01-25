const assert = require('assert')

/**
 * Given an array of integers, find maximum contiguous sum subarray of a fixed size.
 *
 * @param inputArr - An array of integers.
 * @param subarraySize - Desired subarray size as a positive integer.
 * @returns [] - A subarray of size {subarraySize} that has the maximum possible sum.
 */
function getMaxSubarray (inputArr, subarraySize) {
  let currentSum = 0
  let maxSum = 0; let maxSumEndIndex = 0

  inputArr.forEach((item, index) => {
    currentSum += item

    if (index > subarraySize) currentSum -= inputArr[index - subarraySize]

    if (currentSum > maxSum) {
      maxSum = currentSum
      maxSumEndIndex = index
    }
  })

  return inputArr.slice(maxSumEndIndex - subarraySize + 1, maxSumEndIndex + 1)
}

/**
 * Tests
 */

// test case #1
const exampleInput1 = [-1, 2, 3, 0, -3, 9]
const subarraySize1 = 2
const solution1 = [-3, 9]

const calculatedSolution1 = getMaxSubarray(exampleInput1, subarraySize1)

assert.deepStrictEqual(calculatedSolution1, solution1)

console.log(`Example Input #1: ${JSON.stringify(exampleInput1)}, Subarray Size: ${subarraySize1}, Solution: ${JSON.stringify(calculatedSolution1)}`)
