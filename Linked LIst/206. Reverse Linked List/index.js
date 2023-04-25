/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
     
var reverseList = function(head) {
    let current = head;
    let prev = ListNode(null);
    let next = ListNode(null);

    while(current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    const reuslt = [];
    while(prev) {
        reuslt.push(prev.val);
        prev = prev.next;
    }
    return reuslt;
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseList(head));
