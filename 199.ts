// https://leetcode.com/problems/binary-tree-right-side-view/

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

// иду обходом вширину
// собираю все значения по уровням
// беру последние элементы из уровней
function rightSideView(root: TreeNode | null): number[] {
    const q: [[TreeNode | null, number]] = [[root, 0]];
    const levels = [];

    while(q.length) {
        const cur = q.shift();

        if (cur[0]) {
            if (levels[cur[1]]) {
                levels[cur[1]].push(cur[0].val);
            } else {
                levels[cur[1]] = [cur[0].val];
            }

            q.push([cur[0].left, cur[1] + 1]);
            q.push([cur[0].right, cur[1] + 1]);
        }
    }

    return levels.reduce((res, level) => {
        res.push(level.pop()); // беру последний элемент на уровну (самый правый)

        return res;
    }, [])
};