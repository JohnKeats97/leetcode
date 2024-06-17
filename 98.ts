// https://leetcode.com/problems/validate-binary-search-tree/description/

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

// https://www.youtube.com/watch?v=EaoIKt7bK1g
// https://learnc.info/adt/binary_tree_traversal.html
// делаю префиксный обход, записываю в массив
// должен получиться массив по возрастанию без повторяющихся элементов
function isValidBST(root: TreeNode | null): boolean {
    const inArray = [];

    function inOrder(root) {
        if (!root) return;

        inOrder(root.left);

        inArray.push(root.val);

        inOrder(root.right);
    }

    inOrder(root);

    for (let i = 0; i < inArray.length -1; i++) {
        if (inArray[i] >= inArray[i + 1]) {
            return false;
        }
    }

    return true;
};