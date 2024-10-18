
"""
    1. If x < 0 always return False
    2. if x >= 0 and x < 10 return True
    3. 맨 앞자 수와 맨 뒷자리 수를 비교하며 계속 수를 갱신하며 palidrome인지 체크
"""
import math

class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0: return False
        if x >= 0 and x < 10: return True

        digit = math.log10(x) + 1
        while digit >= 1:
            divider =  10 ** (digit - 1) 
            if (x // divider) - (x % 10) != 0:
                return False
            
            x = (x % divider) // 10
            digit -= 2


        return True


print(Solution.isPalindrome(Solution, 333))
