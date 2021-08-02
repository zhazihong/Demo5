/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
/**
 * 237. 删除链表中的节点
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。
 * 输入：head = [4,5,1,9], node = 5
 * 输出：[4,1,9]
 * 解释：给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
 * 链接：https://leetcode-cn.com/problems/delete-node-in-a-linked-list
 */
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};


/**
 * 206. 反转链表
 * @param {ListNode} head
 * @return {ListNode}
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 * 解释：p1，p2双指针遍历，反转核心让p2.next = p1 
 * 链接：https://leetcode-cn.com/problems/reverse-linked-list/
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
 var reverseList = function(head) {
    let p1 = head;
    let p2 = null;
    while(p1) {
        const temp = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = temp;
    }
    return p2;
};

/**
 * 2. 两数相加
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 链接：https://leetcode-cn.com/problems/add-two-numbers
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
 var addTwoNumbers = function(l1, l2) {
    let sum = new ListNode('0');
    let head = sum;
    let addOne = 0; // 进位
    while (l1 || l2) {
        let val1 = l1 !== null ? l1.val : 0; 
        let val2 = l2 !== null ? l2.val : 0;
        let r1 = val1 + val2 + addOne;
        addOne = r1 > 9 ? 1 : 0;
        sum.next = new ListNode(r1 % 10);
        sum = sum.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (addOne) {
        sum.next = new ListNode(addOne);
    }
    return head.next;
};
