const assert = require('assert')

/**
 * Tournament Tree implementation used in my K-Way Merge algorithm video: https://www.youtube.com/watch?v=Xo54nlPHSpg
 *
 * Both K-Way Merge and Tournament Trees have interesting uses in computer science, especially in distributed computing.
 * Check out the video if you want to see some examples.
 * Video is fully animated to make it easy for you to understand these complex topics, and relevant programming interview questions.
 */
class TournamentTree {
  nodes = []
  missingLeafIndex = null

  constructor (dataArr) {
    // we use flat representation using a simple array, just like in a binary heap: https://en.wikipedia.org/wiki/Heap_(data_structure)#Implementation
    this.nodes = dataArr

    // make sure that nodes array has required amount of leaves
    const requiredLeafCount = 2 ** Math.ceil(Math.log2(this.nodes.length))
    while (this.nodes.length < requiredLeafCount) this.nodes.push(Infinity)

    // make sure that the nodes array has space (to the left) for the ancestor nodes
    const requiredNodeCount = requiredLeafCount *  2 - 1
    while (this.nodes.length < requiredNodeCount) this.nodes.unshift(null)

    // fill in rest of the array to complete the tournament tree
    for (let i = 0; this.nodes.length > 1; i++) {

      // // assign this level's tournament winners to next level
      // for (let i = 0; i < this.nodes[level].length; i = i + 2) {
      //   const left = this.nodes[level][i][0]
      //   const right = this.nodes[level][i + 1] ? this.nodes[level][i + 1][0] : Infinity
      //
      //   // store the node value along with its index in the lower level so we can track it backward when removing the root
      //   this.nodes[level + 1].push(left < right ? [left, i] : [right, i + 1])
      // }
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
console.log(`Example Input Array #1: ${exampleInput1}, and the tree: ${JSON.stringify(tree1)}, passed.`)

// test case #2
const exampleInput2 = [4, 3, 1, 2, 5]
const solution2 = [1, 2, 3, 4, 5]
const calculatedSolution2 = new TournamentTree(exampleInput2).sort()

console.log(`Example Input Array #2: ${exampleInput2}, and the exact solution: ${solution2}, and calculated solution: ${calculatedSolution2}`)
assert.deepStrictEqual(calculatedSolution2, solution2)

// test case #3
const exampleInput3 = []
const solution3 = []
const calculatedSolution3 = new TournamentTree(exampleInput3).sort()

console.log(`Example Input Array #3: ${JSON.stringify(exampleInput3)}, and the exact solution: ${JSON.stringify(solution3)}, and calculated solution: ${JSON.stringify(calculatedSolution3)}`)
assert.deepStrictEqual(calculatedSolution3, solution3)

// test case #4
const exampleInput4 = [47]
const solution4 = [47]
const calculatedSolution4 = new TournamentTree(exampleInput4).sort()

console.log(`Example Input Array #4: ${JSON.stringify(exampleInput4)}, and the exact solution: ${JSON.stringify(solution4)}, and calculated solution: ${JSON.stringify(calculatedSolution4)}`)
assert.deepStrictEqual(calculatedSolution4, solution4)

// test case #5
const exampleInput5 = [-5, 0, -9, 1, -1, 10]
const solution5 = [-9, -5, -1, 0, 1, 10]
const calculatedSolution5 = new TournamentTree(exampleInput5).sort()

console.log(`Example Input Array #5: ${JSON.stringify(exampleInput5)}, and the exact solution: ${JSON.stringify(solution5)}, and calculated solution: ${JSON.stringify(calculatedSolution5)}`)
assert.deepStrictEqual(calculatedSolution5, solution5)
