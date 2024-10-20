# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        result = ListNode()
        current = result
        count = 0
        while l1 != None or l2 != None:
            val1 = l1.val if l1 != None else 0
            val2 = l2.val if l2 != None else 0
            sum = val1 + val2
            if count == 1 and sum == 9:
                current.next = ListNode(0)
                count = 1
            elif sum >= 10:
                current.next = ListNode(sum - 10 + count)
                count = 1
            else:
                current.next = ListNode(sum + count)
                count = 0
                
            if l1: l1 = l1.next
            if l2: l2 = l2.next
            current = current.next

        if count == 1:
            current.next = ListNode(1)

        return result.next



l1 = ListNode(2)
l1.next = ListNode(4)
l1.next.next = ListNode(3)

l2 = ListNode(5)
l2.next = ListNode(6)
l2.next.next = ListNode(4)



# l1 = ListNode(2)
# l1.next = ListNode(3)
# l1.next.next = ListNode(4)
# l1.next.next.next = ListNode(5)
# l1.next.next.next.next = ListNode(6)

# l2 = ListNode(8)
# l2.next = ListNode(7)
# l2.next.next = ListNode(5)
# l2.next.next.next = ListNode(5)

Solution.addTwoNumbers(Solution, l1=l1, l2=l2)
# 23456 + 8755


#   4 4 4 5
#   5 5 5 5

#   9 
#   9 9
#   9 9 9
#   9 9 9 0


# 1 0
# 
# prev -> if not 9 move