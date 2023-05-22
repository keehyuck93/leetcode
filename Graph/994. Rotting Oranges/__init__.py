from collections import deque
from typing import List


class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        q = deque()
        result = 0

        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == 2:
                    q.append((row, col, result))

        while q:
            r, c, min = q.popleft()
            result = max(result, min)

            directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
            for dr, dc in directions:
                row, col = r + dr, c + dc

                if row in range(rows) and col in range(cols) and grid[row][col] == 1:
                    q.append((row, col, min + 1))
                    grid[row][col] = 2

        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == 1:
                    return -1

        return result


solution = Solution()
result = solution.orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 2]])

print(result)

# 2 1 1
# 0 1 1
# 1 0 1
