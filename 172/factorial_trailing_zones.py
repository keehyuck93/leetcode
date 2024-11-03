class Solution:
    def trailingZeroes(self, n: int) -> int:
        def get_zero(k: int) -> int:
            return n // k

        count = 0
        k = 5
        while k <= n:
            count += get_zero(k)
            k = k * 5
        
        return count


def factorial(n:int) -> int:
    if n == 1: return 1
    return n * factorial(n-1)

def get_zero(n:int) -> int:
    count = 0
    while True:
        remain = n % 10
        if remain > 0:
            break
        n = n // 10
        count += 1
    
    return count

print(get_zero(factorial(9999)))
Solution.trailingZeroes(Solution, 9999)