# A digital root is the recursive sum of all the digits in a number.
# Given n, take the sum of the digits of n.
# If that value has two digits, continue reducing in this way until a single-digit number is produced.
# This is only applicable to the natural numbers.

def digital_root(n):
    total = 0
    stringified = str(n)
    for char in stringified:
        total += int(char)
    if total <= 9:
        return total
    else:
        stringified_total = str(total)
        total = 0
        for char in stringified_total:
            total += int(char)
    return total
