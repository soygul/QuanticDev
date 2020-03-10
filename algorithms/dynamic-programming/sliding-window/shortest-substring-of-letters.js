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
  let windowStartIndex = 0

  // start/end indexes of smallest window that has all the needed chars
  let smallestWindowStartIndex = 0; let smallestWindowEndIndex = 0

  // calculate how many times of which characters we need to find, resulting object will be like: {a: 2, b: 4, x: 1}
  const neededCharCounts = characters.split('').reduce((freq, char) => { freq[char] ? freq[char]++ : freq[char] = 1; return freq }, {})

  // how many of the needed chars we didn't find yet in the current window
  let missingCharCount = characters.length

  // traverse the entire string and look for missing needed chars
  for (let windowEndIndex = 0; windowEndIndex < inputString.length; windowEndIndex++) {
    const char = inputString[windowEndIndex]

    // if we found one of the missing needed chars, decrease its needed count by one
    if (char in neededCharCounts) {
      if (neededCharCounts[char] > 0) missingCharCount--

      // needed count might fall to negative since the current window might contain the needed char too many times
      neededCharCounts[char]--
    }

    // if we managed to find all the needed chars in the current sliding window
    // shrink the window until we have none of the unneeded chars inside the window
    if (!missingCharCount) {
      let leftChar = inputString[windowStartIndex]
      while (windowStartIndex < windowEndIndex && (!(leftChar in neededCharCounts) || neededCharCounts[leftChar] < 0)) {
        if (leftChar in neededCharCounts) neededCharCounts[leftChar]++
        windowStartIndex++
        leftChar = inputString[windowStartIndex]
      }

      // take note of the smallest window (that has all the needed chars) that we found up to this moment
      if (!smallestWindowEndIndex || (windowEndIndex - windowStartIndex) < (smallestWindowEndIndex - smallestWindowStartIndex)) {
        smallestWindowStartIndex = windowStartIndex
        smallestWindowEndIndex = windowEndIndex
      }
    }
  }

  return inputString.slice(smallestWindowStartIndex, smallestWindowEndIndex + 1)
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
