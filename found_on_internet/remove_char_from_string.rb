def remove_char_from_string(char, string)
  array = string.split('')
  array.each_with_index do |element, index|
    if element == char
      array[index] = ''
    end
  end
  array.join('')
end

def remove_char_from_string(char, string)
  return string = string.sub(char, '')
end
