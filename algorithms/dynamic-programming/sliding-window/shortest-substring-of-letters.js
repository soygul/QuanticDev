const assert = require('assert')

/**
 * Given a string and n characters, find the shortest contiguous substring that contains all the given characters.
 *
 * @param inputString - Any string.
 * @param characters - A string of characters that the substring should contain.
 * @returns {string} - The shortest substring containing all the desired characters.
 */
function getShortestSubstring (inputString, characters) {
  // current sliding window starting index
  let substringStartIndex = 0

  // start/end indexes of smallest window that has all the needed chars
  let smallestSubstringStartIndex = 0; let smallestSubstringEndIndex = 0

  // calculate how many times of which characters we need to find
  const neededCharCounts = characters.split('').reduce((freq, char) => { freq[char] ? freq[char]++ : freq[char] = 1; return freq }, {})

  // how many of the needed chars we didn't find yet in the current window
  let missingCharCount = characters.length

  // traverse the entire string and look for missing needed chars
  for (let substringEndIndex = 0; substringEndIndex < inputString.length; substringEndIndex++) {
    const char = inputString[substringEndIndex]

    // if we find one of the missing needed chars, decrease its missing count by one
    if (neededCharCounts[char]) {
      missingCharCount--
      neededCharCounts[char]--
    }

    // if we managed to find all the needed chars in the current sliding window
    // shrink the window until we have one of the needed chars is outside of the window
    // so we can continue looking for it on the right side as we increase the window size
    if (!missingCharCount) {
      while (substringStartIndex < substringEndIndex && neededCharCounts[inputString[substringStartIndex]] < 0) {
        neededCharCounts[inputString[substringStartIndex]]++
        substringStartIndex++
      }

      if (!smallestSubstringEndIndex || (substringEndIndex - substringEndIndex) < (smallestSubstringEndIndex - smallestSubstringStartIndex)) {
        smallestSubstringStartIndex = substringStartIndex
        smallestSubstringEndIndex = substringEndIndex
      }
    }
  }

  return inputString.slice(smallestSubstringStartIndex, smallestSubstringEndIndex + 1)
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
const exampleInput2 = 'asb2.9d/d!304#b$%^%!ksd,2294iubasdmc'
const desiredCharacters2 = 'b$#2'
const solution2 = '#b$%^%!ksd,2'

const calculatedSolution2 = getShortestSubstring(exampleInput2, desiredCharacters2)

console.log(`Example Input #2: ${exampleInput2}, Desired Characters: ${desiredCharacters2}, Solution: ${calculatedSolution2}`)
assert.deepStrictEqual(calculatedSolution2, solution2)

// test case #3
const exampleInput3 = 'xad9dk0293nc'
const desiredCharacters3 = 'xd3'
const solution3 = 'xad9dk0293'

const calculatedSolution3 = getShortestSubstring(exampleInput3, desiredCharacters3)

console.log(`Example Input #3: ${exampleInput3}, Desired Characters: ${desiredCharacters3}, Solution: ${calculatedSolution3}`)
assert.deepStrictEqual(calculatedSolution3, solution3)

// test case #4
const exampleInput4 = 'gho8cbb'
const desiredCharacters4 = 'bob'
const solution4 = 'o8cbb'

const calculatedSolution4 = getShortestSubstring(exampleInput4, desiredCharacters4)

console.log(`Example Input #4: ${exampleInput4}, Desired Characters: ${desiredCharacters4}, Solution: ${calculatedSolution4}`)
assert.deepStrictEqual(calculatedSolution4, solution4)
