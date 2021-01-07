const assert = require('assert')

/**
 * Sorts given data using desired number of computers (compute nodes).
 *
 * Data is divided into equally sized chunks and sent over to the compute nodes to be
 * sorted using quicksort. Once all data is sorted, the coordinator node pulls
 * the smallest element from each compute node and builds a min-heap.
 * After that, the element at the tip of the heap (smallest element) is returned
 * and another element is pulled from the node that provided the returned element
 * and the min-heap is re-heapified. This process continues until all the data in
 * all the nodes is consumed.
 *
 * Since a full implementation would require networking,
 * below code is simplified to make everything happen on the same computer.
 *
 * Time Complexity: O(2*n*logn) = O(n*logn)
 * Space Complexity: O(n)
 *
 * @param data - An array of integers to sort.
 * @param nodeCount - Number of computers to distribute this calculation over.
 * @returns {number} - Number of different ways to reach the top.
 */
function distributedQuicksort (data, nodeCount) {
}

/**
 * Tests
 */

// test case #1
// const stairCount1 = 1
// const maxSteps1 = 2
// const solution1 = 1
//
// const calculatedSolution1 = climbStairs(stairCount1, maxSteps1)
// const calculatedSolution1_bad = climbStairs_bad(stairCount1, maxSteps1)
// const calculatedSolution1_bad2 = climbStairs_bad2(stairCount1, maxSteps1)
//
// console.log(`Example Stairs #1: stairCount: ${stairCount1}, maxSteps: ${maxSteps1}, Solution: ${solution1}`)
// assert.deepStrictEqual(calculatedSolution1, solution1)
// assert.deepStrictEqual(calculatedSolution1_bad, solution1)
// assert.deepStrictEqual(calculatedSolution1_bad2, solution1)
