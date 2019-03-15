# Given an array A of integers and another non negative integer k, find if there exists 2 indices i and j such that 
# A[i] - A[j] = k, i != j.

# Return 0 || 1 for this problem.

# Example :

# Input :
# A : [1 5 3]
# k : 2

# Output :
# 1

# as 3 - 1 = 2

def diffK(arr, val):
    for element1 in arr:
        for element2 in arr:
            if element1 - element2 == val or element2 - element1 == val:
                return 1
    return 0




# Expected Output: 1
print("diffK([1, 2, 3], 2): ")
print(diffK([1, 2, 3], 2))

# Expected Output: 1
print("diffK([5, 4, 3, 2, 1], 3): ")
print(diffK([5, 4, 3, 2, 1], 3))

# Expected Output: 0
print("diffK([2, 2, 34, 3, 9], 100): ")
print(diffK([2, 2, 34, 3, 9], 100))

# Expected Output: 0
print("diffK([5, 4, 3, 2, 1], 9): ")
print(diffK([5, 4, 3, 2, 1], 9))