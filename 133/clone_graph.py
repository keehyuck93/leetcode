"""
# Definition for a Node.

"""

from typing import Optional

class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        node_list = []
        list.append(Node(1, [2,4]))
        return node_list
        


Solution.cloneGraph(Solution, Node(1, [2,4]))