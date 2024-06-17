// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

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


// иду по preorder, preorderIndex это моя нода
// ищу ее в inorder, все что слева в inorder - левая ветка, все что справа - правая ветка
// и так рекурсивно, создаю ноду и вызываю функцию для ее левой части и правой части
// передаю inorder для них, если inorder пустой - то это конец ветки

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let preorderIndex = 0;

    function createTree(localInorder) {
        if (!localInorder.length) {
            return null;
        }

        const node = new TreeNode(preorder[preorderIndex]);
        const indexInorder = localInorder.indexOf(preorder[preorderIndex]);

        preorderIndex++;

        node.left = createTree(localInorder.slice(0, indexInorder));
        node.right = createTree(localInorder.slice(indexInorder + 1, localInorder.length));

        return node;
    } 

    return createTree(inorder);
};