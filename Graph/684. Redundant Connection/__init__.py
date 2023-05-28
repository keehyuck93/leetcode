from typing import List


class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        n = len(edges)
        parents = [i for i in range(n+1)]
        rank = [1] * (len(edges) + 1)

        def find(x):
            if parents[x] != x:
                parents[x] = find(parents[x])

            return parents[x]

        def union(x, y):
            rootX = find(x)
            rootY = find(y)

            if rootX == rootY:
                return False
            if rank[rootX] > rank[rootY]:
                parents[rootY] = rootX
            else:
                parents[rootX] = rootY
                rank[rootY] += 1
            return True

        for start, end in edges:
            if not union(start, end):
                return [start, end]


sol = Solution()
res = sol.findRedundantConnection([[1, 5], [1, 2], [2, 3], [3, 4], [1, 4], ])
print(res)
