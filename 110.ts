// https://leetcode.com/problems/balanced-binary-tree/


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

function isBalanced(root: TreeNode | null): boolean {
    // иду вгрубину и на всплытии считаю максимальную глубину погружения и смотрю, если максимальная глубина левая и правая соответствует балансу, то все ок, если где-то не соответствует, то везде не соответствует

    function glub(root) {
        if (!root) {
            return {
                isBalanced: true,
                max: 0
            }
        }

        const { isBalanced: isBalancedLeft, max: maxLeft } = glub(root.left);
        const { isBalanced: isBalancedRight, max: maxRight } = glub(root.right);

        return {
            isBalanced: isBalancedLeft && isBalancedRight && (maxLeft === maxRight || maxLeft + 1 === maxRight || maxRight + 1 === maxLeft),
            max: Math.max(maxLeft, maxRight) + 1
        }
    }

    return glub(root).isBalanced;
};