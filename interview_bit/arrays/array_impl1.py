def performOps(A):
    blen = 2 * len(A)
    B = [0]*blen
    for i in xrange(len(A)):
        B[i] = A[i]
        B[i + len(A)] = A[(len(A) - i) % len(A)]
    return B


A = [5, 10, 2, 1]
B = performOps(A)
for i in xrange(len(B)):
    print B[i]
