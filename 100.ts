// https://leetcode.com/problems/same-tree/description/

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

// через обход в ширину сравниваю
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let queue = [p, q];

    while (queue.length) {
        let p = queue.shift();
        let q = queue.shift();

        if (p?.val !== q?.val) {
            return false;
        }

        // добавляю оба левых, потом оба правых и беру так же, 
        // чтобы левый всегда сравнивался с левым
        p && queue.push(p.left);
        q && queue.push(q.left);
        p && queue.push(p.right);
        q && queue.push(q.right);
    }

    return true;
};

// через обход вглубину
//  function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//     // копаю вглубь, если по пути копания не равны - false
//     // если дошел до конца и оба null - true

//     if (!p && !q) {
//         return true;
//     }

//     if (p?.val !== q?.val) {
//         return false;
//     }

//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };