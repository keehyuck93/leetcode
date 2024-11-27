from typing import List


class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        N = len(matrix[0])
        for step in range(0, N, 2):
            offset = step // 2
            if offset == N - offset - 1:
                break
            
            for i in range(offset, N - 1 - offset):
                print(i)
                start = matrix[offset][i]
                matrix[offset][i] = matrix[N-i-1][offset]
                matrix[N-i-1][offset] = matrix[N-1-offset][N-i-1]
                matrix[N-1-offset][N-i-1] = matrix[i][N-1-offset]
                matrix[i][N-1-offset] = start

        print(matrix)
print(Solution.rotate(Solution, [[1,2,3,4]]))