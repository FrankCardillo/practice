# The following code is supposed to rotate the array A by B positions.
#
# So, for example,
#
#
# A : [1 2 3 4 5 6]
# B : 1
#
# The output :
#
# [2 3 4 5 6 1]
# However, there is a small bug in the problem. Fix the bug and submit the problem.


def rotateArray(self, a, b):
    return a[b % len(a):] + a[:b % len(a)]
