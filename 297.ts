// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/

// ЗНАЮ как решить если все значения уникальные

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

 // я знаю как из preorder и inorder проходов собрать дерево (работает только если все значения уникальные !!!)
 // собираю preorder и inorder проходы
 // собираб из прозодов дерево

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    const preorder = [];
    const inorder = [];

    function glub(root) {
        if (!root) return;

        preorder.push(root.val);
        glub(root.left);
        inorder.push(root.val);
        glub(root.right);
    }

    glub(root);

    return JSON.stringify({preorder, inorder});
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const { preorder, inorder } = JSON.parse(data);

    function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
        // иду по preorder, preorderIndex это моя нода
        // ищу ее в inorder, все что слева в inorder - левая ветка, все что справа - правая ветка
        // и так рекурсивно, создаю ноду и вызываю функцию для ее левой части и правой части
        // передаю inorder для них, если inorder пустой - то это конец ветки

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

    return buildTree(preorder, inorder);
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */