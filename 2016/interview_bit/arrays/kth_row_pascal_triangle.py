class Solution:
    # @param A : integer
    # @return a list of integers
    def getRow(self, A):
        line = [1]
        for k in range(A):
            line.append(line[k] * (A-k) / (k+1))
        return line
