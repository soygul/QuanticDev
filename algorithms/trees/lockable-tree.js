const assert = require('assert')

/**
 * Lockable tree node that can be locked only if all of the ancestors and descendants are unlocked.
 * Locking/unlocking operations run in O(h) time (h = height of the tree).
 * This is a very minimal implementation and could be improved with getters/setters, parameter validation, and thread safety.
 */
class LockableNode {
  /**
   * Node constructor.
   * @param children - Optional child nodes.
   * @param parent - Optional parent node.
   */
  constructor (children, parent) {
    children && children.forEach(c => c.parent = this)
    this.children = children
    this.parent = parent
    this.locked = false
    this.lockedDescendantCount = 0
  }

  /**
   * Locks the node if all of the ancestors and descendants are unlocked.
   * @returns {boolean} - True if the node is successfully locked, or has already been locked. False otherwise.
   */
  lock = () => {
    if (this.locked) return true
    if (this.lockedDescendantCount > 0) return false

    // check ancestors
    // since every descendant informs their ancestors about their locking status, we don't need to check our descendants separately
    for (let parent = this.parent; parent !== undefined; parent = parent.parent) {
      if (parent.locked) return false
    }

    // inform all ancestors that their locked descendant count increased by one
    for (let parent = this.parent; parent !== undefined; parent = parent.parent) {
      parent.lockedDescendantCount++
    }

    this.locked = true
    return true
  }

  /**
   * Unlocks the node if it was locked.
   */
  unlock = () => {
    if (!this.locked) return

    // inform all ancestors that one of their locked descendant count decreased by one
    for (let parent = this.parent; parent !== undefined; parent = parent.parent) {
      parent.lockedDescendantCount--
    }

    this.locked = false
  }
}

/**
 * Tests
 */

/**
 * Initial testing tree with a single locked node.
 *
 * [unlocked]
 *     |--------[unlocked]
 *     |            |--------[!!!!LOCKED!!!!!]
 *     |                            |--------[unlocked]
 *     |                            |--------[unlocked]
 *     |                            |--------[unlocked]
 *     |            |--------[unlocked]
 *     |--------[unlocked]
 *     |            |--------[unlocked]
 *     |            |--------[unlocked]
 *     |--------[unlocked]
 *                  |--------[unlocked]
 *
 * @type {LockableNode}
 */
const rootNode = new LockableNode([
  new LockableNode([
    new LockableNode([
      new LockableNode([]),
      new LockableNode([]),
      new LockableNode([])
    ]),
    new LockableNode([])
  ]),
  new LockableNode([
    new LockableNode([]),
    new LockableNode([])
  ]),
  new LockableNode([
    new LockableNode([])
  ])
])

// lock the node [Root:1:1] to complete the sample tree above and do some validations
// note: array indices start from 0 where out tree index notation starts from 1 like [Root:1:1]
assert.deepStrictEqual(rootNode.children[0].children[0].lock(), true, 'Tree node [Root:1:1] should be lockable.')
assert.deepStrictEqual(rootNode.children[0].children[0].locked, true, 'Tree node [Root:1:1] should be locked.')
assert.deepStrictEqual(rootNode.children[0].children[0].lock(), true, 'Tree node [Root:1:1] should already be locked.')
assert.deepStrictEqual(rootNode.children[0].children[0].lockedDescendantCount, 0, 'Tree node [Root:1:1] should not have locked descendants.')
assert.deepStrictEqual(rootNode.children[0].lockedDescendantCount, 1, 'Tree node [Root:1] should have 1 locked descendant.')
assert.deepStrictEqual(rootNode.lockedDescendantCount, 1, 'Tree node [Root] should have 1 locked descendant.')
assert.deepStrictEqual(rootNode.children[0].children[0].children[0].lock(), false, 'Tree node [Root:1:1:1] should not be lockable.')
assert.deepStrictEqual(rootNode.children[0].children[0].children[2].lock(), false, 'Tree node [Root:1:1:3] should not be lockable.')
assert.deepStrictEqual(rootNode.children[0].lock(), false, 'Tree node [Root:1] should not be lockable.')
assert.deepStrictEqual(rootNode.lock(), false, 'Tree node [Root] should not be lockable.')

// lock [Root:1:2] and more validations
// this is the sibling of [Root:1:1] so it should be lockable
assert.deepStrictEqual(rootNode.children[0].children[1].lock(), true, 'Tree node [Root:1:2] should be lockable.')
assert.deepStrictEqual(rootNode.children[0].children[1].locked, true, 'Tree node [Root:1:2] should be locked.')
assert.deepStrictEqual(rootNode.children[0].lockedDescendantCount, 2, 'Tree node [Root:1] should have 2 locked descendants.')
assert.deepStrictEqual(rootNode.lockedDescendantCount, 2, 'Tree node [Root] should have 2 locked descendants.')

// unlock the node [Root:1:1] and do some validations
rootNode.children[0].children[0].unlock()
assert.deepStrictEqual(rootNode.children[0].children[0].locked, false, 'Tree node [Root:1:1] should be unlocked.')
assert.deepStrictEqual(rootNode.children[0].children[0].lockedDescendantCount, 0, 'Tree node [Root:1:1] should not have locked descendants.')
assert.deepStrictEqual(rootNode.children[0].lockedDescendantCount, 1, 'Tree node [Root:1] should have 1 locked descendant.')
assert.deepStrictEqual(rootNode.lockedDescendantCount, 1, 'Tree node [Root] should have 1 locked descendant.')

console.log('All lockable tree tests pass.')
