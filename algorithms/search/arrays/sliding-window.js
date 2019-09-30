const assert = require('assert')

/**
 * Given a list of integers, finds the contiguous sub-lists of integers adds up to a number.
 *
 * @param inputArr - An array of integers (0, negative, or positive numbers).
 * @param desiredSum - An integer.
 * @returns {[]} - An array of subarrays that add up to the desired sum.
 */
function subArrays (inputArr, desiredSum) {
  let sum = 0
  let sumStartIndex = 0
  const solutions = []

  inputArr.forEach((item, index) => {
    sum += item

    while ((desiredSum >= 0 && sum > desiredSum) || (desiredSum < 0 && sum < desiredSum)) {
      sum -= inputArr[sumStartIndex]
      sumStartIndex++
    }

    if (sum === desiredSum) solutions.push(inputArr.filter((_, i) => i >= sumStartIndex && i <= index))
  })

  return solutions
}

/**
 * Tests
 */

// test case #1
const exampleInput1 = [1, 7, 4, 3, 0, 2, 1, 5, 1, 0]
const desiredSum1 = 7
const actualSolution1 = [[7], [4, 3], [4, 3, 0], [1, 5, 1], [1, 5, 1, 0]]

const calculatedSolution1 = subArrays(exampleInput1, desiredSum1)

assert.deepStrictEqual(calculatedSolution1, actualSolution1)

console.log(`Example Input #1: ${JSON.stringify(exampleInput1)}, Desired Sum: ${desiredSum1}, Solution: ${JSON.stringify(calculatedSolution1)}`)

// test case #2
const exampleInput2 = [10, 2, -2, -20, 8, -3, -7]
const desiredSum2 = -10
const actualSolution2 = [[10, 2, -2, -20], [-3, -7]]

const calculatedSolution2 = subArrays(exampleInput2, desiredSum2)

assert.deepStrictEqual(calculatedSolution2, actualSolution2)

console.log(`Example Input: ${JSON.stringify(exampleInput2)}, Desired Sum: ${desiredSum2}, Solution: ${JSON.stringify(calculatedSolution2)}`)
