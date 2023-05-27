from typing import List


class Solution:
    def rob(self, nums: List[int]) -> int:
        moneys = [0] * len(nums)
        result = 0

        for i in range(len(nums)-1, -1, -1):
            money = nums[i]

            if i+2 not in range(len(nums)):
                moneys[i] = money
            else:
                for j in range(i + 2, len(nums)):
                    moneys[i] = max(moneys[i], money + moneys[j])

            result = max(result, moneys[i])

        return result


sol = Solution()
sol.rob([2, 1, 3, 100, 5, 4, 10, 20])
