const assert = require('assert')

/**
 * Given two arrays, find their longest common subsequence.
 *
 * @param inputArr1 - First array.
 * @param inputArr2 - Second array.
 * @returns {[]} - Longest common subsequence of the two inputs.
 */
function longestCommonSubsequence_BottomUp (inputArr1, inputArr2) {
  const lcs = []

  inputArr1.forEach((char1, index1) => {
    inputArr2.forEach((char2, index2) => {
      // rules:
      //   if char1 !== char2: take largest of the right diagonal value
      //   if char1 === char2: take left diagonal value + 1
      if (char1 === char2) lcs.push([])
    })
  })

  return lcs
}

// same algorithms but implemented with Dynamic Programming (memoized recursion)
// this is a way worse solution both in space and time complexity but easier to write
function longestCommonSubsequence_Recursion (inputArr1, inputArr2) {
  const lcs = []



  return lcs
}

/**
 * Tests
 */

// test case #1
const inputArr1 = 'abccdef'
const inputArr2 = 'abed'
const solution1 = 'abd'

const calculatedSolution1 = longestCommonSubsequence_BottomUp(inputArr1.split(''), inputArr2.split(''))

console.log(`Example Input #1: ${inputArr1}, Input #2: ${inputArr2}, Solution: ${calculatedSolution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)

// todo: test for lcs of '' and 'abcc..'
