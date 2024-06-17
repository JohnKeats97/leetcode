// https://leetcode.com/problems/diameter-of-binary-tree/

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

function diameterOfBinaryTree(root: TreeNode | null): number {
    // поиск вглубину с подсчетом максимума
    function findMax(root: TreeNode | null) {
        if (!root) {
            return {
                n: 0,
                max: 0,
            }
        };

        let { n: leftN, max: leftMax } = findMax(root.left);
        let { n: rightN, max: rightMax } = findMax(root.right);

        return {
            n: Math.max(leftN, rightN) + 1, // самая длинная ветка
            max: Math.max(leftN + rightN, leftMax, rightMax) // что больше, слева масимум, справа или новый максимум
        };
    }

    return findMax(root).max;
};