const assert = require('assert')
const BinaryHeap = require('../../trees/heap/binary-heap')
const TournamentTree = require('../../trees/tournament-tree/tournament-tree')

/**
 * Distributed sorting algorithm implementation for my "Distributed Sorting" video: https://www.youtube.com/watch?v=vgKjatRVtys
 * The video explains the algorithm using animations so I highly recommend checking it out before reading the code.
 *
 * Sorts given data using desired number of computers (compute nodes).
 *
 * Data is divided into equally sized chunks and sent over to the compute nodes to be
 * sorted using heapsort. Once all data is sorted, the coordinator node pulls
 * the first element from each compute node and builds a loser tournament tree to do an n-way merge.
 * After that, the root node of the tournament tree (smallest element) is returned
 * and another element is pulled from the node that provided the returned element
 * and the root of the tournament tree is recalculated. This process continues until all the data in
 * all the nodes is consumed.
 *
 * Since a full implementation would require networking,
 * below code is simplified to make everything happen on the same computer.
 *
 * @param data - An array of integers to sort.
 * @param nodeCount - Number of computers to distribute this calculation over.
 * @returns {[]} - Sorted data.
 */
function distributedSort (data, nodeCount) {
  // split the data to chunks to be send to each node
  const nodes = []
  const dataChunkLength = Math.ceil(data.length / nodeCount)

  for (let i = 0; i < nodeCount; i++) {
    nodes.push(createNode(data.slice(i * dataChunkLength, (i + 1) * dataChunkLength)))
  }

  // signal each node to start sorting their data
  nodes.forEach(n => n.sort())

  // create a tournament tree and start doing k-way merge
  // by pulling one value at a time from each node
  const tree = new TournamentTree(nodes.map(n => n.getValue()))
  const mergedArr = []

  for (let i = 1; i <= data.length; i++) {
    mergedArr.push(tree.popRoot())

    const val = nodes[tree.missingLeafIndex].getValue()
    if (val) {
      tree.insertLeaf(val)
    } else {
      // when we exhaust all the data in a node, just plug in a sentinel value
      tree.insertLeaf(Infinity)
    }
  }

  return mergedArr
}

// creates and returns a compute node for sorting a chunk of data
function createNode (dataChunk) {
  return {
    dataChunk: dataChunk,
    minHeap: new BinaryHeap([], false),
    sort: function () {
      this.dataChunk.forEach(val => this.minHeap.insert(val))
    },
    getValue: function () {
      return this.minHeap.popRoot()
    }
  }
}

/**
 * Tests
 */

// test case #1
const exampleInput1 = [4, 10, 1, 14, 7, 9, 3, 5]
const solution1 = [1, 3, 4, 5, 7, 9, 10, 14]

const calculatedSolution1 = distributedSort(exampleInput1, 2)

console.log(`Example Input Array #1: ${exampleInput1}, and the exact solution: ${solution1}, and calculated solution: ${calculatedSolution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)
