from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result = []
        unique_number_map = {}
        for num in nums:
            unique_number_map[num] = unique_number_map.get(num, 0) + 1

        def sort_three(a, b, c):
            if a > b:
                a, b = b, a
            if a > c:
                a, c = c, a
            if b > c:
                b, c = c, b
            return (a, b, c)
        
        unique_numbers = list(unique_number_map.keys())
        for unique_number in unique_numbers:
            count = unique_number_map.get(unique_number, 0)
            if unique_number != 0 and count > 1 and unique_number_map.get(-2* unique_number, None) is not None:
                result.append([unique_number, unique_number, -2 * unique_number])
            if unique_number == 0 and count > 2:
                result.append([0,0,0])

        tuple_set = set()
        for i in range(0, len(unique_numbers) - 1):
            for j in range(i+1, len(unique_numbers)):
                a = unique_numbers[i]
                b = unique_numbers[j]
                sum = a + b

                if -a == -sum or b == sum:
                    continue

                tuple = sort_three(a,b,-sum)
                if tuple not in tuple_set and unique_number_map.get(-sum, None) is not None:
                    result.append([a,b,-sum])
                    tuple_set.add(tuple)
            

        return result






Solution.threeSum(Solution, [-1,0,1,2,-1,-4])
# Solution.threeSum(Solution, [-1, 0,0,0,0,0,0,0, 1])
# Solution.threeSum(Solution, [-1,0,1,0])
# Solution.threeSum(Solution, [-1,0,1,3,-4,4,-5])