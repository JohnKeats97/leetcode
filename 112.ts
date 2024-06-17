// https://leetcode.com/problems/path-sum/description/

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

// иду сверху вниз и каждый раз уменьшаю сумму на значение ноды
// когда достиг листа - отнимаю его значение и смотрю
// если сумму = 0, то начальная сумма собралась и возвращаю true по цепочке вверх
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false;
    }

    // если это лист
    if (!root.left && !root.right) {
        return !(targetSum - root.val);
    }

    let left = hasPathSum(root.left, targetSum - root.val);
    let right = hasPathSum(root.right, targetSum - root.val);

    return left || right;
};