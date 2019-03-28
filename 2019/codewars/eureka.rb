# The number 89 is the first integer with more than one digit that fulfills this 
# property. This sum gives the same number.

# In effect: 89 = 8^1 + 9^2

# The next number with this property is 135.

# See this property again: 135 = 1^1 + 3^2 + 5^3

# We need a function to collect these numbers, that may receive two integers a, b 
# that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that 
# fulfills the property described above.

def sum_dig_pow(a, b)
  output_arr = []

  for i in a..b do
    eureka_result = check_for_eureka(i)

    if eureka_result
      output_arr.push(eureka_result)
    end
  end

  return output_arr
end

def check_for_eureka(num)
  digits_arr = num.to_s.split('')
  sum = 0

  digits_arr.each_with_index { |digit, index|
    sum += (digit.to_i ** (index + 1))
  }

  if sum == num
    return num
  else
    return false
  end
end