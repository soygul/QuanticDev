const assert = require('assert')

/**
 * Tournament Tree implementation used in my K-Way Merge algorithm video: https://www.youtube.com/watch?v=Xo54nlPHSpg
 *
 * Both K-Way Merge and Tournament Trees have interesting uses in computer science, especially in distributed computing.
 * Check out the video if you want to see some examples.
 * Video is fully animated to make it easy for you to understand these complex topics, and relevant programming interview questions.
 */
class TournamentTree {
  nodes = [] // each element is represented like [value, ownChildIndex]
  missingLeafIndex = null

  constructor (dataArr) {
    // store entire tree as array of arrays in a bottom-up manner
    // index 0 = leaves, index 1 = bottom branches, index 1++ = higher branches all the way to the root
    this.nodes = [dataArr.map(e => [e, null])]

    // construct the rest of the tournament tree
    for (let level = 0; this.nodes[level].length > 1; level++) {
      // create next level
      this.nodes.push([])

      // assign this level's tournament winners to next level
      for (let i = 0; i < this.nodes[level].length; i = i + 2) {
        const left = this.nodes[level][i][0]
        const right = this.nodes[level][i + 1] ? this.nodes[level][i + 1][0] : Infinity

        // store the node value along with its index in the lower level so we can track it backward when removing the root
        this.nodes[level + 1].push(left < right ? [left, i] : [right, i + 1])
      }
    }
  }

  popRoot () {
    // working our way back, remove all the branches that the root element came from
    let ancestor = this.nodes[this.nodes.length - 1][0]
    let currentIndex = 0
    const root = ancestor[0]
    for (let level = this.nodes.length - 1; level >= 0; level--) {
      // current node will become the ancestor in the next loop
      ancestor = this.nodes[level][currentIndex]
      this.nodes[level][currentIndex] = Infinity

      if (level === 0) this.missingLeafIndex = currentIndex
      currentIndex = ancestor[1]
    }

    return root
  }

  pushLeaf (value) {
    // insert the leaf into the blank spot
    this.nodes[0][this.missingLeafIndex] = [value, null]

    // rebuild the missing branches
    let index1 = this.missingLeafIndex
    for (let level = 0; level < this.nodes.length - 1; level++) {
      let index2 = index1 - 1
      let nextLevelIndex = index2 / 2
      if (index1 % 2 === 0) {
        index2 = index1 + 1
        nextLevelIndex = index1 / 2
      }

      const e1 = this.nodes[level][index1][0]
      const e2 = this.nodes[level][index2] ? this.nodes[level][index2][0] : Infinity
      this.nodes[level + 1][nextLevelIndex] = e1 < e2 ? [e1, index1] : [e2, index2]
      index1 = nextLevelIndex
    }

    this.missingLeafIndex = null
  }

  sort () {
    // return the full sorted array by repeatedly popping the root node
    // and pushing Infinity as sentinel value for the missing leaves
    const sorted = []
    for (let i = 0; i < this.nodes[0].length; i++) {
      sorted.push(this.popRoot())
      this.pushLeaf(Infinity)
    }

    return sorted
  }
}

module.exports = TournamentTree

/**
 * Tests
 */

// test case #1
const exampleInput1 = [5, 1, 9, 3]
const tree1 = new TournamentTree(exampleInput1)

assert.deepStrictEqual(tree1.popRoot(), 1)
tree1.pushLeaf(2)
assert.deepStrictEqual(tree1.popRoot(), 2)
tree1.pushLeaf(Infinity) // need this since popRoot leaves blank branches behind
assert.deepStrictEqual(tree1.popRoot(), 3)
tree1.pushLeaf(1)
assert.deepStrictEqual(tree1.popRoot(), 1)
tree1.pushLeaf(10)
assert.deepStrictEqual(tree1.popRoot(), 5)

// test case #2
const exampleInput2 = [4, 3, 1, 2, 5]
const solution2 = [1, 2, 3, 4, 5]
const calculatedSolution2 = new TournamentTree(exampleInput2).sort()

console.log(`Example Input Array #1: ${exampleInput2}, and the exact solution: ${solution2}, and calculated solution: ${calculatedSolution2}`)
assert.deepStrictEqual(calculatedSolution2, solution2)
