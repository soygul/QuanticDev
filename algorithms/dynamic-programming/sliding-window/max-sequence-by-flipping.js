const assert = require('assert')

/**
 * Given an array of 0's and 1's,
 * find the maximum sequence of continuous 1's that can be formed by flipping at-most k 0's to 1's.
 *
 * @param inputArr - An array of 0's and 1's.
 * @param maxFlips - Maximum no of 0's that can be flipped to 1's.
 * @returns {number} - Length of the maximum possible sequence of continuous 1's.
 */
function getMaxSequence (inputArr, maxFlips) {
  let subArrStart = 0; let subArrEnd = 0
  let longestSubArr = 0; let zeroes = 0

  inputArr.forEach((item, index) => {
    // always start by increasing window size
    subArrEnd = index

    if (item === 0) zeroes++

    let subArrLen = 1 + subArrEnd - subArrStart
    if (zeroes <= maxFlips && subArrLen > longestSubArr) longestSubArr = subArrLen

    // decrease window size until we are less than or equal to the max flip limit
    while (zeroes > maxFlips) {
      if (inputArr[subArrStart] === 0) zeroes--

      subArrStart++
    }
  })

  return longestSubArr
}

/**
 * Tests
 */

// test case #1
const exampleInput1 = [1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0]
const maxFlips1 = 2
const solution1 = 6

const calculatedSolution1 = getMaxSequence(exampleInput1, maxFlips1)

console.log(`Example Input #1: ${JSON.stringify(exampleInput1)}, Maximum Flips: ${maxFlips1}, Solution: ${JSON.stringify(calculatedSolution1)}`)
assert.deepStrictEqual(calculatedSolution1, solution1)

// test case #2
const exampleInput2 = [23, 1, 6, 9, 15, 8]
const maxFlips2 = 24
const solution2 = [[23, 1], [9, 15]]

const calculatedSolution2 = getMaxSequence(exampleInput2, maxFlips2)

console.log(`Example Input #2: ${JSON.stringify(exampleInput2)}, Maximum Flips: ${maxFlips2}, Solution: ${JSON.stringify(calculatedSolution2)}`)
assert.deepStrictEqual(calculatedSolution2, solution2)
