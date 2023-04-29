/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let result = true
    let lastVisited = null;
    const inorder = (node) => {
        if (!result || !node) return;

        inorder(node.left);
        
        if (lastVisited !== null && lastVisited >= node.val) result = false;
        else lastVisited = node.val
        
        inorder(node.right);
    }

    inorder(root);
    return result;
};