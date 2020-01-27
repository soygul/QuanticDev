const assert = require('assert')

/**
 * Given a string and n characters, find the shortest substring that contains all given characters.
 * @param string - Any string.
 * @param characters - An array of characters that the substring should contain.
 * @returns {string} - The shortest substring containing all the desired characters.
 */
function getShortestSubstring(string, characters) {
  let substringStartIndex = 0

  for (let i = 0; i < string.length; i++) {

  }

  return 'asdf'
}


/**
 * Tests
 */

// test case #1
const exampleInput1 = 'asb1.9d/d"!304#b$%^%!ksd,1294iubasdmc'
const desiredCharacters1 = ['b', '$', '#', '1']
const solution1 = '#b$%^%!ksd,1'

const calculatedSolution1 = getShortestSubstring(exampleInput1, desiredCharacters1)

console.log(`Example Input #1: ${exampleInput1}, Desired Characters: ${desiredCharacters1}, Solution: ${calculatedSolution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)
