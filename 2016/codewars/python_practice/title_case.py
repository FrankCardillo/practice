#  A string is considered to be in title case if each word in the string is either
# (a) capitalised (that is, only the first letter of the word is in upper case) or
# (b) considered to be an exception and put entirely into lower case unless it is the first word,
# which is always capitalised.
#
# Write a function that will convert a string into title case, given an optional list of exceptions (minor words).
# The list of minor words will be given as a string with each word separated by a space.
# Your function should ignore the case of the minor words string --
# it should behave in the same way even if the case of the minor word string is changed.

def title_case(title, minor_words=''):
    if title == '':
        return ''
    minor_words_list = minor_words.lower().split(' ')
    title_list = title.split(' ')
    for x in range(0, len(title_list)):
        if title_list[x].lower() in minor_words_list:
            title_list[x] = title_list[x].lower()
        else:
            title_list[x] = title_list[x][0].upper() + title_list[x][1:].lower()
    title_list[0] = title_list[0][0].upper() + title_list[0][1:].lower()
    return ' '.join(title_list)
