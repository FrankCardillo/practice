def abbreviate(s):
    sentence_list = s.split()

    for i in xrange(len(sentence_list)):
        if len(sentence_list[i]) >= 4:
            if '-' in sentence_list[i]:
                hyphen_index = sentence_list[i].find('-')
                sentence_list[i] = sentence_list[i][0] + str(len(sentence_list[i][1:hyphen_index-1])) + sentence_list[i][hyphen_index-1] + sentence_list[i][hyphen_index] + sentence_list[i][hyphen_index + 1] + str(len(sentence_list[i][hyphen_index+2:-1])) + sentence_list[i][-1]
            else:
                sentence_list[i] = sentence_list[i][0] + str(len(sentence_list[i]) - 2) + sentence_list[i][-1]
    output = ' '.join(sentence_list)
    return output
