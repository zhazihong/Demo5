/**
 * 二叉树的前序遍历 ：使用栈通过迭代算法实现
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 */
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let res = [];
    let stack = [];
    if (root) stack.push(root);
    while (stack.length) {
        const n = stack.pop();
        res.push(n.val);
        if (n.right) stack.push(n.right);
        if (n.left) stack.push(n.left);
    }
    return res;
};

