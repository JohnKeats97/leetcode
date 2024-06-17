// https://leetcode.com/problems/binary-tree-maximum-path-sum/description/

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

function maxPathSum(root: TreeNode | null): number {
    function findMax(root: TreeNode | null) {
        if (!root) {
            return {
                n: 0,
                max: null, // нет максимума, так как естьотрицательные числа и 0 не подойдет
            }
        };

        let { n: leftN, max: leftMax } = findMax(root.left);
        let { n: rightN, max: rightMax } = findMax(root.right);

        return {
            n: Math.max(leftN, rightN, 0) + root.val, // высчитываю максимальный вес ветки учитываю текущую ветку 
            max: Math.max( // ищу максимальный вес
                leftN + rightN + root.val, // эта нода связывает 2 ветки и образует новый максимум
                leftN + root.val, // эта нода становится частью левой ветки и обновляет максимум
                rightN + root.val, // эта нода становится частью правой ветки и обновляет максимум
                leftMax === null ? root.val : leftMax, // левая ветки есть максимум, а нода ее только уменьшает
                rightMax === null ? root.val : rightMax, // правая ветки есть максимум, а нода ее только уменьшает
                root.val // нодо сама по себе больше максимума и он ее только уменьшит
            )
        };
    }

    return findMax(root).max;
};