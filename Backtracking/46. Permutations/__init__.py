from typing import Deque, List


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        result = []

        if len(nums) == 1:
            return [nums[:]]

        for i in range(len(nums)):
            n = nums.pop(0)
            perms = self.permute(nums)
            print(perms)

            for perm in perms:
                perm.append(n)
            result.extend(perms)
            nums.append(n)

        return result


solution = Solution()
result = solution.permute([1, 2, 3])
print(result)
