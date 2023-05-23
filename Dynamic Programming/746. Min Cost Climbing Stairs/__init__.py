from typing import List


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        idx = 0 if cost[0] < cost[1] else 1
        totalCost = 0

        while idx < len(cost):
            totalCost += cost[idx]

            if idx+1 < len(cost) and cost[idx+2] < len(cost):
                if cost[idx+1] < cost[idx+2]:
                    idx += 1
                else:
                    idx += 2
