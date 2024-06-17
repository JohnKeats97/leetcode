// https://leetcode.com/problems/invert-binary-tree/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function invertTree(root: TreeNode | null): TreeNode | null {
    // иду вглубину и меняю местами

    if (!root) {
        return null;
    }

    let left = invertTree(root.left);
    let right = invertTree(root.right);

    let swap = root.left;

    root.left = root.right;
    root.right = swap;

    return root;
};