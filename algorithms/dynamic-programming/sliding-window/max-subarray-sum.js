const assert = require('assert')

/**
 * Find maximum sum subarray of desired size in a given array.
 *
 * @param inputArr - An array of integers.
 * @param subarraySize - Desired subarray size as a positive integer.
 * @returns [] - A subarray of size {subarraySize} that has the maximum possible sum.
 */
function getMaxSubarray (inputArr, subarraySize) {

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
