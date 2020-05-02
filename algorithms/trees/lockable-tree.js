const assert = require('assert')

/**
 * Lockable tree node that can be locked only if all of the ancestors and descendants are unlocked.
 * Locking/unlocking operations run in O(h) time (h = height of the tree).
 * This is a very minimal implementation and could be improved with getters/setters and parameter validation.
 */
class LockableNode {
  /**
   * Node constructor.
   * @param parent - Optional parent node.
   * @param children - Optional child nodes.
   */
  constructor (parent, children) {
    this.parent = parent
    this.children = children
    this.locked = false
    this.hasLockedDescendant = false
  }

  /**
   * Locks the node if  all of the ancestors and descendants are unlocked.
   * @returns {boolean} - True if the node was successfully locked, or has already been locked. False otherwise.
   */
  lock = () => {
    if (this.locked || this.hasLockedDescendant) return true

    // check ancestors
    for (let parent = this.parent; parent !== undefined; parent = parent.parent) {
      if (parent.locked) return false
    }

    // inform all ancestors that they now have a locked descendant
    for (let parent = this.parent; parent !== undefined; parent = parent.parent) {
      parent.hasLockedDescendant = true
    }

    this.locked = true
    return true
  }

  /**
   * Unlocks the node.
   */
  unlock = () => {
    if (!this.locked) return

    // inform all ancestors that their locked descendant released the lock
    for (let parent = this.parent; parent !== undefined; parent = parent.parent) {
      parent.hasLockedDescendant = false
    }

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
