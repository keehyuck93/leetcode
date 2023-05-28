from typing import List


class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        visited = set()
        n = len(edges)
        adj = [[0 for i in range(n)] for j in range(n)]

        for start, end in edges:
            adj[start-1][end-1] = 1
            adj[end-1][start-1] = 1

        def dfs(node):
            visited.add(node)

            for i in range(len(adj[node])):
                if adj[node][i] == 1 and i not in visited:
                    dfs(i)

        for i in range(n-1, -1, -1):
            start, end = edges[i]
            adj[start-1][end-1] = 0
            adj[end-1][start-1] = 0

            dfs(i)
            if len(visited) == n:
                return edges[i]

            adj[start-1][end-1] = 1
            adj[end-1][start-1] = 1
            visited = set()


sol = Solution()
res = sol.findRedundantConnection([[1, 5], [1, 2], [2, 3], [3, 4], [1, 4], ])
print(res)
