const assert = require('assert')

/**
 * Binary tree node that can be locked/unlocked only if all of the parent/child nodes are unlocked.
 * Locking/unlocking runs in O(h) time (h = height of the tree).
 */
class LockableNode {
  /**
   * Node constructor.
   * @param parent - Optional parent node.
   * @param leftChild - Optional left child node.
   * @param rightChild - Optional right child node.
   */
  constructor (parent, leftChild, rightChild) {
    this.parent = parent
    this.leftChild = leftChild
    this.rightChild = rightChild
    this.locked = false
  }
}


/**
 * Tests
 */

// test case #1
const inputArr1 = 'abccdef'
const inputArr2 = 'abed'
const solution1 = 'abd'

const calculatedSolution1 = none(inputArr1.split(''), inputArr2.split(''))

console.log(`Example Input #1: ${inputArr1}, Input #2: ${inputArr2}, Solution: ${calculatedSolution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)
