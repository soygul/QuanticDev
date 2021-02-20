const assert = require('assert')

/**
 * In-pace insertion sort implementation.
 * See my animated video if you want a visualization.
 *
 * This will perform really well on already mostly sorted data, or small arrays.
 * It will perform terribly on large arrays however.
 * Hence it is very useful as a second-stage algorithm of a divide-and-conquer sorting strategy.
 *
 * Time complexity: O(n^2)
 * Auxiliary space: O(1)
 *
 * @param data - Input data array.
 * @returns {[]} - Sorted data.
 */
function insertionSort (data) {
  // validate the input
  assert(Array.isArray(data), 'Input should be an array.')

  // use a simple nested iteration
  for (let i = 1, current = data[i]; i < data.length; i++, current = data[i]) {
    // shift elements up until we find the correct spot for the current element
    for (let j = i - 1; j >= 0; j--) {
      if (data[j] > current) {
        data[j + 1] = data[j]
      } else {
        data[j] = current
        break
      }
    }
  }

  return []
}

/**
 * Tests
 */

// test case #1
const exampleInput1 = [[4, 9], [1, 7], [3, 6]]
const solution1 = [1, 3, 4, 6, 7, 9]

const calculatedSolution1 = insertionSort(exampleInput1)

console.log(`Example Input #1: Expected Solution: ${JSON.stringify(solution1)}, Calculated Solution: ${JSON.stringify(calculatedSolution1)}`)
assert.deepStrictEqual(calculatedSolution1, solution1)
