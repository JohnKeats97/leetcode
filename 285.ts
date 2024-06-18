// https://leetcode.com/problems/inorder-successor-in-bst/

// иду обходом in в глубину пока не найду свое, помечаю флаг и беру следующее

function inorderSuccessor(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
	let flag = false;
    let ans = null;

    function inOr(root) {
        if (!root) return;

        inOr(root.left);
        
        if (flag && !ans) {
            ans = root;
            
            return;
        }

        if (root.val === p.val) {
            flag = true;
        }

        inOr(root.right);
    }

    inOr(root);

    return ans;
};
