// https://leetcode.com/problems/binary-tree-level-order-traversal/

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

// обычный обход в ширину
// но храним в очереди не только ноду, но и ее уровень
// уровень - это индекс в массиве ответов
function levelOrder(root: TreeNode | null): number[][] {
    const q: [[TreeNode | null, number]] = [[root, 0]];
    const ans = [];

    while (q.length) {
        const cur = q.shift();

        if (cur[0]) {
            if (!ans[cur[1]]) {
                ans[cur[1]] = [cur[0].val];
            } else {
                ans[cur[1]].push(cur[0].val);
            }
            q.push([cur[0].left, cur[1] + 1]);
            q.push([cur[0].right, cur[1] + 1]);
        }
    }

    return ans;
};