// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/description/

import { createTree } from "./utils"

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  return new TreeNode(root.val, invertTree(root.right), invertTree(root.left))
}

const tree1 = createTree([4, 2, 7, 1, 3, 6, 9])
console.log(invertTree(tree1)) // [4, 7, 2, 9, 6, 3, 1]

const tree2 = createTree([2, 1, 3])
console.log(invertTree(tree2)) // [2, 3, 1]

const tree3 = createTree([])
console.log(invertTree(tree3)) // []

export { }
