const assert = require('assert')

/**
 * Given a list of integers, finds the contiguous sub-lists of integers adds up to a number.
 * @param inputArr
 * @param desiredSum
 * @returns {[]}
 */
function subArrays(inputArr, desiredSum) {
  let sum = 0, sumStartIndex = 0, solutions = []

  inputArr.forEach((item, index) => {
    sum += item

    while (sum > desiredSum) {
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

console.log(`Example Input: ${JSON.stringify(exampleInput1)}, Desired Sum: ${desiredSum1}, Solution: ${JSON.stringify(calculatedSolution1)}`)