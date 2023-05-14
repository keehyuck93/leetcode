from typing import List


class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize != 0:
            return False

        sortedArr = sorted(hand)
        i = 0
        arr = []
        n = 0
        while True:
            elem = sortedArr.pop(i)

            if len(sortedArr) == 0:
                break

            while elem == sortedArr[i]:
                i += 1

            arr.append(elem)
            if len(arr) == groupSize:
                arr = []
                n += 1
                i = 0

        print(n)
        return n == len(hand) / groupSize


solution = Solution()
result = solution.isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)
print(result)
