const assert = require('assert')

/**
 * Tournament Tree implementation used in my K-Way Merge algorithm video: https://www.youtube.com/watch?v=Xo54nlPHSpg
 *
 * This implementation is specifically called a "loser tournament tree" since smallest element becomes the root (similar to a min-heap).
 * Hence a "winner tournament tree" is similar to a max-heap.
 *
 * Both K-Way Merge and Tournament Trees have interesting uses in computer science, especially in distributed computing.
 * Check out the video if you want to see some examples.
 * The video is fully animated to make it easy for you to understand these complex topics, and the relevant programming interview questions.
 */
class TournamentTree {
  nodes = []
  missingLeafIndex = null

  constructor (dataArr) {
    // validate the input
    assert(Array.isArray(dataArr) && dataArr.length > 0, 'Input should be an array, and it should have at least one element in it.')

    // we use flat representation using a simple array, just like in a binary heap: https://en.wikipedia.org/wiki/Heap_(data_structure)#Implementation
    // the only difference is, we also store the descendent index along with the value (i.e. [4, 76], so we can trace the nodes from root to leaf
    this.nodes = dataArr.map(n => [n, null])

    // make sure that nodes array has required amount of leaves
    const requiredLeafCount = 2 ** Math.ceil(Math.log2(this.nodes.length))
    while (this.nodes.length < requiredLeafCount) this.nodes.push([Infinity, null])

    // make sure that the nodes array has space (to the left) for the ancestor nodes
    const requiredNodeCount = requiredLeafCount *  2 - 1
    while (this.nodes.length < requiredNodeCount) this.nodes.unshift([null, null])

    // fill in the values for the blank ancestor nodes
    // to do this, we traverse the array from left to right, hence traversing the tree bottom up
    for (let i = this.nodes.length - 1; i > 0; i -= 2) {
      const rightValue = this.nodes[i][0]
      const leftValue = this.nodes[i - 1][0]

      this.nodes[i / 2 - 1] = rightValue < leftValue ? [rightValue, i] : [leftValue, i - 1]
    }
  }

  popRoot () {
    // working our way back, remove all the branches that the root element came from
    const rootNodeValue = this.nodes[0][0]

    // loop until we reach a node without a descendant (a leaf node)
    for (let i = 0, currentNode = this.nodes[i]; true; i = currentNode[1], currentNode = this.nodes[i]) {
      this.nodes[i] = [null, null]

      if (currentNode[1] === null) {
        this.missingLeafIndex = i
        break
      }
    }

    return rootNodeValue
  }

  pushLeaf (value) {
    // insert the leaf into the blank spot
    this.nodes[this.missingLeafIndex] = [value, null]

    // make sure we start iterating from right hand side leaf
    const startIndex = this.missingLeafIndex % 2 === 0 ? this.missingLeafIndex : this.missingLeafIndex + 1

    // rebuild the missing branches
    for (let i = startIndex; i > 0; i = i / 2 - 1) {
      // make sure we start from the right hand side leaf
      i = i % 2 === 0 ? i : i + 1

      const rightValue = this.nodes[i][0]
      const leftValue = this.nodes[i - 1][0]

      let ancestorIndex = i / 2 - 1
      if (ancestorIndex < 0) ancestorIndex = 0

      this.nodes[ancestorIndex] = rightValue < leftValue ? [rightValue, i] : [leftValue, i - 1]
    }

    this.missingLeafIndex = null
  }

  sort () {
    // return the full sorted array by repeatedly popping the root node
    // and pushing Infinity as sentinel value for the missing leaves
    const sorted = []
    for (let root = this.popRoot(); root !== Infinity; root = this.popRoot()) {
      sorted.push(root)
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
const exampleInput3 = [2, 2, 2, 2, 2]
const solution3 = [2, 2, 2, 2, 2]
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
