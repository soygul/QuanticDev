const assert = require('assert')

/**
 * Given a string and n characters, find the shortest substring that contains all given characters.
 * @param string - Any string.
 * @param characters - A string of characters that the substring should contain.
 * @returns {string} - The shortest substring containing all the desired characters.
 */
function getShortestSubstring (string, characters) {
  const smallestSubstring = {startIndex: 0, endIndex: 0, length: 0}
  let substringStartIndex = 0; let substringEndIndex = 0
  let neededChars = characters.split('')

  for (let i = 0; i < string.length; i++) {
    let j = neededChars.indexOf(string[i])
    if (j > -1) neededChars.splice(j, 1)

    if (neededChars.length === 0) {
      substringEndIndex = i
      break
    }
  }

  return string.slice(substringStartIndex, substringEndIndex + 1)
}

/**
 * Tests
 */

// test case #1
const exampleInput1 = 'a93kdabc991cba35fg'
const desiredCharacters1 = 'abcabc'
const solution1 = 'abc991cba'

const calculatedSolution1 = getShortestSubstring(exampleInput1, desiredCharacters1)

console.log(`Example Input #1: ${exampleInput1}, Desired Characters: ${desiredCharacters1}, Solution: ${calculatedSolution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)

// test case #2
const exampleInput2 = 'asb2.9d/d"!304#b$%^%!ksd,2294iubasdmc'
const desiredCharacters2 = 'b$#2'
const solution2 = '#b$%^%!ksd,2'

const calculatedSolution2 = getShortestSubstring(exampleInput2, desiredCharacters2)

console.log(`Example Input #2: ${exampleInput2}, Desired Characters: ${desiredCharacters2}, Solution: ${calculatedSolution2}`)
assert.deepStrictEqual(calculatedSolution2, solution2)