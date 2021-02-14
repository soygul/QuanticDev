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

  // we assume a max-heap if this is true, min-heap otherwise
  isMaxHeap = true

  // we assume binary heap if something else is not specified
  maxChildrenPerNode = 2

  constructor (dataArr, isMaxHeap, maxChildrenPerNode) {
    this.nodes = dataArr
    if (isMaxHeap !== undefined) this.isMaxHeap = isMaxHeap
    if (maxChildrenPerNode !== undefined) this.maxChildrenPerNode = maxChildrenPerNode

    this.heapify()
  }

  heapify () {
    // heapify the nodes array using siftDown method by Floyd: https://en.wikipedia.org/wiki/Heapsort#Algorithm
  }

  insert (value) {
    // insert the new value into the first empty spot (which is the end of the array) and start pushing it up
    // until the tree satisfies the heap property again
    this.nodes.push(value)
    let tmp
    for (let currentNodeIndex = this.nodes.length - 1, parentNodeIndex = this.getParentIndex(currentNodeIndex); parentNodeIndex > -1; currentNodeIndex = parentNodeIndex) {
      if ((this.isMaxHeap && this.nodes[currentNodeIndex] > this.nodes[parentNodeIndex]) || (!this.isMaxHeap && this.nodes[currentNodeIndex] < this.nodes[parentNodeIndex])) {
        tmp = this.nodes[currentNodeIndex]
        this.nodes[currentNodeIndex] = this.nodes[parentNodeIndex]
        this.nodes[parentNodeIndex] = tmp
      } else {
        break
      }
    }
  }

  popRoot () {
    return null
  }

  getParentIndex (i) {
    return Math.floor((i - 1) / 2)
  }

  getLeftmostChildIndex (i) {
    return 2 * i + 1
  }

  siftDown (i) {

  }
}

module.exports = Heap

/**
 * Tests
 */

// test case #1
const exampleInput1 = [4, 3, 1, 5]
const solution1 = [1, 4, 2, 5]

const heap = new Heap([], false)
exampleInput1.forEach(e => heap.insert(e))

const calculatedSolution1 = heap.nodes

console.log(`Example Input Array #1: ${exampleInput1}, and the exact solution: ${solution1}, and calculated solution: ${calculatedSolution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)
