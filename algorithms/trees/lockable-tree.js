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
    this.hasLockedDescendant = false
  }

  /**
   * Locks the node if all of the ancestors and descendants are unlocked.
   * @returns {boolean} - True if the node is successfully locked, or has already been locked. False otherwise.
   */
  lock = () => {
    if (this.locked) return true
    if (this.hasLockedDescendant) return false

    // check ancestors
    // since every descendant informs their ancestors about their locking status, we don't need to check our descendants separately
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
   * Unlocks the node if it was locked.
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

// construct the initial testing tree with a single locked node
//
// [unlocked]
//     |--------[unlocked]
//     |            |--------[!!!!LOCKED!!!!!]
//     |                            |--------[unlocked]
//     |                            |--------[unlocked]
//     |                            |--------[unlocked]
//     |            |--------[unlocked]
//     |--------[unlocked]
//     |            |--------[unlocked]
//     |            |--------[unlocked]
//     |--------[unlocked]
//     |            |--------[unlocked]
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

// run some locking tests on the starting tree above
assert.deepStrictEqual(rootNode.children[0].children[0].lock(), true, 'Tree node [Root:1:1] should be lockable.')
assert.deepStrictEqual(rootNode.children[0].children[0].locked, true, 'Tree node [Root:1:1] should be locked.')
assert.deepStrictEqual(rootNode.children[0].children[0].lock(), true, 'Tree node [Root:1:1] should already be locked.')
assert.deepStrictEqual(rootNode.children[0].children[0].hasLockedDescendant, false, 'Tree node [Root:1:1] should not have locked descendants.')
assert.deepStrictEqual(rootNode.children[0].hasLockedDescendant, true, 'Tree node [Root:1] should have locked descendants.')
assert.deepStrictEqual(rootNode.children[0].hasLockedDescendant, true, 'Tree node [Root] should have locked descendants.')
assert.deepStrictEqual(rootNode.children[0].children[0].children[0].lock(), false, 'Tree node [Root:1:1:1] should not be lockable.')
assert.deepStrictEqual(rootNode.children[0].children[0].children[2].lock(), false, 'Tree node [Root:1:1:3] should not be lockable.')
assert.deepStrictEqual(rootNode.children[0].lock(), false, 'Tree node [Root:1] should not be lockable.')
assert.deepStrictEqual(rootNode.lock(), false, 'Tree node [Root] should not be lockable.')

// unlock the node [Root:1:1] and lock [Root:2:1] and run some tests
rootNode.children[0].children[0].unlock()
assert.deepStrictEqual(rootNode.children[0].children[0].locked, false, 'Tree node [Root:1:1] should be unlocked.')

console.log('All tree tests pass.')
