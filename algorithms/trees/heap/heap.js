const assert = require('assert')

/**
 * Heap implementation used in my "Distributed Sorting" video: https://www.youtube.com/watch?v=vgKjatRVtys
 *
 * This implementation is specifically called a "loser tournament tree" since smallest element becomes the root (similar to a min-heap).
 * Hence a "winner tournament tree" is similar to a max-heap.
 *
 * Both K-Way Merge and Tournament Trees have interesting uses in computer science, especially in distributed computing.
 * Check out the video if you want to see some examples.
 * The video is fully animated to make it easy for you to understand these complex topics, and the relevant programming interview questions.
 */
class Heap {
  // we use the flat array representation of a heap as it is visualized here: https://en.wikipedia.org/wiki/Heap_(data_structure)#Implementation
  nodes = []

  // we assume binary heap if something else is not specified
  maxChildrenPerNode = 2

  // we assume a max-heap if this is true, min-heap otherwise
  isMaxHeap = true

  constructor (dataArr, maxChildrenPerNode, isMaxHeap) {
    this.nodes = dataArr
    if (maxChildrenPerNode) this.maxChildrenPerNode = maxChildrenPerNode
    if (isMaxHeap) this.isMaxHeap = isMaxHeap

    // heapify the nodes array using siftDown method as invented by Floyd: https://en.wikipedia.org/wiki/Heapsort#Algorithm
  }

  insert (value) {

  }

  popRoot () {
    return null
  }
}

module.exports = Heap

/**
 * Tests
 */

// test case #1
const exampleInput1 = [4, 3, 1, 1, 5]
const solution1 = [1, 1, 3, 4, 5]
const calculatedSolution1 = new TournamentTree(exampleInput1).sort()

console.log(`Example Input Array #1: ${exampleInput1}, and the exact solution: ${solution1}, and calculated solution: ${calculatedSolution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)
