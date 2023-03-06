// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// left -> node -> right

function inorderTraversal(root) {
  let stack = [];
  let result = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    }
  }
  return result;
}
