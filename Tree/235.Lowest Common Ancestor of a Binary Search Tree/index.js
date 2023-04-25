/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 1. p, q를 traverse 한다.
 * 2. 1에서 traverse하는과정에서 만나는 node를 기록한다.
 * 3. 기록한 node에서 가장 하위 조상을 찾는다.
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let cur = root;

    while(cur) {
        if (p > cur.val && q > cur.val) cur = cur.right
        else if (p < cur.val && q < cur.val) cur = cur.left
        else return cur.val
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function insertLevelOrder(arr, i) {
    let root = null;

    if (i < arr.length) {
        root = new TreeNode(arr[i]);
        root.left = insertLevelOrder(arr, 2 * i + 1);
        root.right = insertLevelOrder(arr, 2 * i + 2);
    }
    return root;
}

const createTree = (arr) => {
    root = insertLevelOrder(arr, 0);
    return root;
}

console.log(lowestCommonAncestor(createTree([6,2,8,0,4,7,9,null,null,3,5]), 9,7))
