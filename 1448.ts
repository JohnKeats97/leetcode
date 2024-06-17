// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

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

// обход в глубину
// запонинаем максимум на пути по ветке (сверху вниз) и сравниваем к нодой,
// если нода больше или равна максимуму, то ок и значение ноды - новый максимум для всех нижних
function goodNodes(root: TreeNode | null): number {
    let count = 0;

    function glub(root, max) {
        if (!root) {
            return;
        }

        if (root.val >= max) {
            count++;

            max = root.val;
        }

        glub(root.left, max);
        glub(root.right, max);
    }

    glub(root, root.val);

    return count;
};