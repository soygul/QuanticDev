const assert = require('assert')

/**
 * Binary heap implementation used in my "Distributed Sorting" video: https://www.youtube.com/watch?v=vgKjatRVtys
 */
class BinaryHeap {
  // we use the flat array representation of a heap as it is visualized here: https://en.wikipedia.org/wiki/Heap_(data_structure)#Implementation
  nodes = []

  // we assume a max-heap if this is true, min-heap otherwise
  isMaxHeap = true

  constructor (dataArr, isMaxHeap) {
    this.nodes = dataArr
    if (isMaxHeap !== undefined) this.isMaxHeap = isMaxHeap

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
    const root = this.nodes[0]

    // assign the bottom right-most child as the new root and sift that value down
    this.nodes[0] = this.nodes.pop()
    this.siftDown(0)

    return root
  }

  getParentIndex (i) {
    return Math.floor((i - 1) / 2)
  }

  getLeftChildIndex (i) {
    return 2 * i + 1
  }

  siftDown (i) {
    let currentNodeIndex = i, currentNodeValue, leftChildIndex, leftChildValue, rightChildIndex, rightChildValue, swapToIndex

    while (true) {
      currentNodeValue = this.nodes[currentNodeIndex]
      leftChildIndex = this.getLeftChildIndex(currentNodeIndex)
      leftChildValue = this.nodes[leftChildIndex]
      rightChildIndex = leftChildIndex + 1
      rightChildValue = this.nodes[rightChildIndex]

      if (leftChildValue === undefined) break

      // swap the parent with the larger (for max heap) or smaller (for min heap) of the children if necessary
      if (this.isMaxHeap) {
        swapToIndex = leftChildValue >= rightChildValue ? leftChildIndex : rightChildIndex
        if (currentNodeValue >= this.nodes[swapToIndex]) break
      } else {
        swapToIndex = leftChildValue <= rightChildValue ? leftChildIndex : rightChildIndex
        if (currentNodeValue <= this.nodes[swapToIndex]) break
      }

      this.nodes[currentNodeIndex] = this.nodes[swapToIndex]
      this.nodes[swapToIndex] = currentNodeValue
    }
  }
}

module.exports = BinaryHeap

/**
 * Tests
 */

// test case #1
const exampleInput1 = [4, 3, 1, 5]
const solution1 = [1, 4, 3, 5]

const heap1 = new BinaryHeap([], false)
exampleInput1.forEach(e => heap1.insert(e))
const calculatedSolution1 = heap1.nodes

console.log(`Example Input Array #1: ${exampleInput1}, and the exact solution: ${solution1}, and calculated solution: ${calculatedSolution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)

// test case #1
const exampleInput2 = [4, 3, 1, 5, 2]

const heap2 = new BinaryHeap([], false)
exampleInput2.forEach(e => heap2.insert(e))

assert.deepStrictEqual(heap2.popRoot(), 1)
assert.deepStrictEqual(heap2.popRoot(), 2)
assert.deepStrictEqual(heap2.popRoot(), 3)
assert.deepStrictEqual(heap2.popRoot(), 4)
assert.deepStrictEqual(heap2.popRoot(), 5)
