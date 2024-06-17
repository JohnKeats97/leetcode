// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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

function maxDepth(root: TreeNode | null, n = 0): number {
    // иду вглубину и считаю сколько прошел,
    //  а в конце сравниваю, где больше, слева или справа

    if (!root) {
        return n;
    }

    n++;

    let left = maxDepth(root.left, n);
    let right = maxDepth(root.right, n);

    return Math.max(left, right);
};