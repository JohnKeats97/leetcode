// https://leetcode.com/problems/subtree-of-another-tree/

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
// если нашел значение равное значению sub корня, делаю проверку на равность, пока не пройду все дерево или не найду
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root) {
        return !subRoot;
    }

    if (root.val === subRoot.val && isSameTree(root, subRoot)) {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

// проспатриваю обходом вширину
// если нашел значение равное значению sub корня, делаю проверку на равность, пока не пройду все дерево или не найду
// function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
//     const q = [root];

//     while (q.length) {
//         const cur = q.shift();

//         if (cur?.val === subRoot?.val && isSameTree(cur, subRoot)) {
//             return true;
//         }

//         if (cur) {
//             q.push(cur.left, cur.right);
//         }
//     }

//     return false;
// };