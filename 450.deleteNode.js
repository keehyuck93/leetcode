/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  const size = root.length;

  function find(value) {
    if (value === root[0]) return 0;
    else return findIndex(value, 0)
  }

  function findIndex(value, index) {
    if (value < root[index]) {
        return findIndex(value, index * 2 + 1)
    }
    if (value > root[index]) {
        return findIndex(value, index * 2 + 2)
    }
    if (value === root[index]) {
        return index;
    }
    if (index >= size) {
      return -1;
    }
  }

  function deleteNodeByIndex(index) {
    const value = root[index];
    const left = root[index * 2 + 1];
    const right = root[index * 2 + 2];

    if (!left && !right) {
      root[index] =  null;
    }
    if (left || !right) {}
    if (!left || right) {}
    if (left && right) {
      
    }
  }

  const index = find(key);
  if (index === -1) return root;
  else {
    deleteNodeByIndex(index);
    return root;
  }
  
};
