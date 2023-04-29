function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var buildTree = function(preorder, inorder) {
    if (preorder.length < 1) return null;
    const root = new TreeNode(null, null, null);
    
    const idx = inorder.indexOf(preorder[0]);

    root.val = inorder[idx];
    root.left = buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx))
    root.right = buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1))

    return root;
};
