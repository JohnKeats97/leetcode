// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

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

// делаю префиксный обход, записываю в массив
// k - 1 (так как в задании идем от 1) элемент массива - мой результат
function kthSmallest(root: TreeNode | null, k: number): number {
    const inArray = [];

    function inOrder(root) {
        if (!root) return;

        inOrder(root.left);

        inArray.push(root.val);

        inOrder(root.right);
    }

    inOrder(root);

    return inArray[k - 1];
};