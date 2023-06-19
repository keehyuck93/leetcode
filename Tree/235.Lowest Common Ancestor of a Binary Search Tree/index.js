/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (p.val > root.val && q.val > root.val) { 
        return lowestCommonAncestor(root.right, p, q)
    } 
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    } 
    
    return root
};

console.log(lowestCommonAncestor(createTree([6,2,8,0,4,7,9,null,null,3,5]), 9,7))
