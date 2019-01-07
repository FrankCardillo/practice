class Solution:
    # @param matrix : list of list of integers
    # @return the same list modified
    def setZeroes(self, matrix):
        if len(matrix) == 0:
            return
        if len(matrix[0]) == 0:
            return
        num_rows = len(matrix)
        num_cols = len(matrix[0])
        rows_contain_zeroes = [False for i in range(num_rows)]
        cols_contain_zeroes = [False for i in range(num_cols)]
        for i in range(num_rows):
            for j in range(num_cols):
                if matrix[i][j] == 0:
                    rows_contain_zeroes[i] = True
                    cols_contain_zeroes[j] = True
        for i in range(num_rows):
            for j in range(num_cols):
                if rows_contain_zeroes[i] or cols_contain_zeroes[j]:
                    matrix[i][j] = 0
        return matrix
