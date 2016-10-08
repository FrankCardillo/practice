class Solution:
    # @param A : tuple of list of integers
    # @return a list of integers
    def spiralOrder(self, A):
        num_rows = len(A)
        num_cols = len(A[0])
        top_row = 0
        bottom_row = num_rows-1
        left_column = 0
        right_column = num_cols-1
        direction = 0 # 0 -> right, 1 -> down, 2 -> left, 3 -> up
        result = []

        while top_row <= bottom_row and left_column <= right_column:
            if direction == 0:
                for i in range(left_column, right_column+1):
                    result.append(A[top_row][i])
                top_row += 1
                direction = 1
            elif direction == 1:
                for i in range(top_row, bottom_row+1):
                    result.append(A[i][right_column])
                right_column -= 1
                direction = 2
            elif direction == 2:
                for i in range(right_column, left_column-1, -1):
                    result.append(A[bottom_row][i])
                bottom_row -= 1
                direction = 3
            else:
                for i in range(bottom_row, top_row-1, -1):
                    result.append(A[i][left_column])
                left_column += 1
                direction = 0

        return result

solution = Solution()

matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]
print solution.spiralOrder(matrix)
