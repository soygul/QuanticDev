const assert = require('assert')
const TournamentTree = require('../trees/tournament-tree/tournament-tree')

/**
 * Given k sorted arrays, merge them into a single sorted array.
 *
 * In this solution, we will use tournament trees to generate a single sorted array as efficiently as possible.
 *
 * This is a rather large topic and I highly recommend you check out my animated video on this topic to get a better
 * understanding of this problem and it's variants (like distributed sort) and their solutions.
 * You can find the video here: https://www.youtube.com/watch?v=Xo54nlPHSpg
 *
 * Time Complexity: Θ(n logk) - Notice the big Theta notation. k is the number of given input arrays.
 * Auxiliary Space: ~2k (to store the tournament tree) + n to store the output
 *
 * @param inputArrays - An array of arrays to be merged.
 * @returns - The merged array (sorted).
 */
function kWayMerge (inputArrays) {
  // validate the input
  assert(Array.isArray(inputArrays) && inputArrays.every(arr => Array.isArray(arr)), 'Input should be an array of arrays.')

  const totalElements = inputArrays.map(a => a.length).reduce((total, current) => total + current)
  const tree = new TournamentTree(inputArrays.map(a => a.shift()))
  const mergedArr = []

  // put the top element from each array into a tournament tree and get the smallest element from the tree root
  for (let i = 1; i <= totalElements; i++) {
    mergedArr.push(tree.popRoot())

    if (inputArrays[tree.missingLeafIndex]) {
      tree.pushLeaf(inputArrays[tree.missingLeafIndex].shift())
    } else {
      tree.pushLeaf(Infinity)
    }
  }

  return mergedArr
}

/**
 * Tests
 */

// test case #1: mixed integers
const exampleInput1 = [[4, 9], [1, 7], [3, 6]]
const solution1 = [1, 3, 4, 6, 7, 9]

const calculatedSolution1 = kWayMerge(exampleInput1)

console.log(`Example Input #1: Expected Solution: ${JSON.stringify(solution1)}, Calculated Solution: ${JSON.stringify(calculatedSolution1)}`)
assert.deepStrictEqual(calculatedSolution1, solution1)
