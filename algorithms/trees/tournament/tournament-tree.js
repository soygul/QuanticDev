const assert = require('assert')

class TournamentTree {
  constructor (dataArr) {
    // store entire tree as array of arrays in a bottom-up manner
    // index 0 = leaves, index 1 = bottom branches, index 1++ = higher branches all the way to the root
    this.nodes = [dataArr]

    // construct the rest of the tournament tree
    for (let level = 0; this.nodes[level].length > 1; level++) {
      // create next level
      this.nodes.push([])

      // assign this level's tournament winners to next level
      for (let i = 0; i < this.nodes[level].length; i = i + 2) {
        const left = this.nodes[level][i]
        const right = this.nodes[level][i + 1] || Infinity

        this.nodes[level + 1].push(left < right ? left : right)
      }
    }

    throw new Error(JSON.stringify(this.nodes))
  }
}

module.exports = TournamentTree

/**
 * Tests
 */

// test case #1: mixed integers
const exampleInput1 = [4, 3, 1, 2, 5]
const solution1 = [1, 2, 3, 4, 5]

const calculatedMaxSolution1 = new TournamentTree(exampleInput1)
// const calculatedMinSolution1 = getMaxMinSubarray(exampleInput1, false)
//
// console.log(`Example Input #1: ${JSON.stringify(exampleInput1)}, Max Sum Subarray: ${JSON.stringify(calculatedMaxSolution1)}, Min Sum Subarray: ${JSON.stringify(calculatedMinSolution1)}`)
// assert.deepStrictEqual(calculatedMaxSolution1, maxSolution1)
// assert.deepStrictEqual(calculatedMinSolution1, minSolution1)
//
// // test case #2: empty array
// const exampleInput2 = []
// const maxSolution2 = []
// const minSolution2 = []
//
// const calculatedMaxSolution2 = getMaxMinSubarray(exampleInput2, true)
// const calculatedMinSolution2 = getMaxMinSubarray(exampleInput2, false)
//
// console.log(`Example Input #2: ${JSON.stringify(exampleInput2)}, Max Sum Subarray: ${JSON.stringify(calculatedMaxSolution2)}, Min Sum Subarray: ${JSON.stringify(calculatedMinSolution2)}`)
// assert.deepStrictEqual(calculatedMaxSolution2, maxSolution2)
// assert.deepStrictEqual(calculatedMinSolution2, minSolution2)
//
// // test case #3: all 0's
// const exampleInput3 = [0, 0, 0]
// const maxSolution3 = []
// const minSolution3 = []
//
// const calculatedMaxSolution3 = getMaxMinSubarray(exampleInput3, true)
// const calculatedMinSolution3 = getMaxMinSubarray(exampleInput3, false)
//
// console.log(`Example Input #3: ${JSON.stringify(exampleInput3)}, Max Sum Subarray: ${JSON.stringify(calculatedMaxSolution3)}, Min Sum Subarray: ${JSON.stringify(calculatedMinSolution3)}`)
// assert.deepStrictEqual(calculatedMaxSolution3, maxSolution3)
// assert.deepStrictEqual(calculatedMinSolution3, minSolution3)
//
// // test case #4: all negative
// const exampleInput4 = [-1, -2, -3, -4, -5]
// const maxSolution4 = []
// const minSolution4 = [-1, -2, -3, -4, -5]
//
// const calculatedMaxSolution4 = getMaxMinSubarray(exampleInput4, true)
// const calculatedMinSolution4 = getMaxMinSubarray(exampleInput4, false)
//
// console.log(`Example Input #4: ${JSON.stringify(exampleInput4)}, Max Sum Subarray: ${JSON.stringify(calculatedMaxSolution4)}, Min Sum Subarray: ${JSON.stringify(calculatedMinSolution4)}`)
// assert.deepStrictEqual(calculatedMaxSolution4, maxSolution4)
// assert.deepStrictEqual(calculatedMinSolution4, minSolution4)
//
// // test case #5: all positive
// const exampleInput5 = [1, 2, 3, 4, 5]
// const maxSolution5 = [1, 2, 3, 4, 5]
// const minSolution5 = []
//
// const calculatedMaxSolution5 = getMaxMinSubarray(exampleInput5, true)
// const calculatedMinSolution5 = getMaxMinSubarray(exampleInput5, false)
//
// console.log(`Example Input #5: ${JSON.stringify(exampleInput5)}, Max Sum Subarray: ${JSON.stringify(calculatedMaxSolution5)}, Min Sum Subarray: ${JSON.stringify(calculatedMinSolution5)}`)
// assert.deepStrictEqual(calculatedMaxSolution5, maxSolution5)
// assert.deepStrictEqual(calculatedMinSolution5, minSolution5)
