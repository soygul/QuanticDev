const assert = require('assert')

/**
 * Given two arrays (or strings), find their longest common subsequence.
 *
 * @param inputArr1 - First array/string.
 * @param inputArr2 - Second array/string.
 * @returns {[]} - Longest common subsequence of the two inputs.
 */
function longestCommonSubsequence (inputArr1, inputArr2) {
  const lcs = []

  inputArr1.forEach((char1, index1) => {
    inputArr2.forEach((char2, index2) => {
      // rules:
      //   if char1 !== char2: take largest of the right diagonal value
      //   if char1 === char2: take left diagonal value + 1
      if (char1 === char2) lcs.push([])
    })
  })
}

/**
 * Tests
 */

// test case #1
const inputArr1 = 'xabcf'
const inputArr2 = 'ayfo'
const solution1 = 'af'

const calculatedSolution1 = longestCommonSubsequence(inputArr1, inputArr2)

console.log(`Example Input #1: ${inputArr1}, Input #2: ${inputArr2}, Solution: ${calculatedSolution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)
