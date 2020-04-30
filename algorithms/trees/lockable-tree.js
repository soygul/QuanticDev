const assert = require('assert')

/**
 * Tree node that can be locked only if all of the parent/child nodes are unlocked.
 * Locking/unlocking operations runs in O(h) time (h = height of the tree).
 */
class Node {
  /**
   * Node constructor.
   * @param parent - Optional parent node.
   * @param children - Optional child nodes.
   */
  constructor (parent, children) {
    this.parent = parent
    this.leftChild = leftChild
    this.rightChild = rightChild
    this._locked = false
  }

  isLocked = () => this._locked

  lock = () => {
    // todo: check children
    if (this._locked) {
      return false
    } else {
      this._locked = true
      return true
    }
  }

  unlock = () => {
    // todo: check children
    if (this._locked) {
      return false
    } else {
      this._locked = true
      return true
    }
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
