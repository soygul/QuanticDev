// todo: implement more methods found in: https://github.com/joowani/binarytree/blob/master/binarytree/__init__.py

class Tree {
  /**
   * General tree implementation.
   * @param root - Optional root node.
   */
  constructor (root = new Node()) {
    this.root = root
  }

  /**
   * Traverse the tree from left to right, top to bottom, like reading a book.
   * Tree is traversed without recursion.
   *   Time complexity:
   *   Space complexity:
   * @param callback - Callback function to receive the next node. Traversal continues as long as callback returns true.
   */
  traverseBreadthFirst = (callback) => {
    // todo: use Symbol.iterator instead for a much simple syntax
    while (callback()) {
    }
  }

  /**
   * Traverse the tree from top to bottom, left to right.
   * Tree is traversed without recursion.
   *   Time complexity:
   *   Space complexity:
   * @param callback - Callback function to receive the next node. Traversal continues as long as callback returns true.
   */
  traverseDepthFirst = (callback) => {
    while (callback()) {
    }
  }
}

class Node {
  /**
   * Node constructor.
   * @param children - Optional child nodes.
   * @param parent - Optional parent node.
   */
  constructor (children, parent) {
    children && children.forEach(c => c.parent = this)
    this.children = children
    this.parent = parent
  }
}