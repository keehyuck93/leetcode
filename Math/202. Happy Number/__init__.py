class Solution:
    def isHappy(self, n: int) -> bool:
        if n == 1:
            return True
        if n / 4 == 1:
            return False

        digits = str(n)
        digits_sum = sum(int(digit) ** 2 for digit in digits)

        return self.isHappy(digits_sum)
