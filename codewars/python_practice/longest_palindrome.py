# Find the length of the longest substring in the given string s that is the same in reverse.
#
# As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
#
# If the length of the input string is 0, return value must be 0.

def isPalindrome(s):
    if s == s[::-1]:
        return True
    else:
        return False

def longest_palindrome(text):
    text = text.lower()
    longest_palindrome = ''
    for idy, item in enumerate(text):
        for idx, item in enumerate(text):
            current_palindrome = text[idy:idx+1]
            if isPalindrome(current_palindrome) and (len(current_palindrome) > len(longest_palindrome)):
                longest_palindrome = current_palindrome
    return len(longest_palindrome)
