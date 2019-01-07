# You are going to be given an array of integers.
# Your job is to take that array and find an index N
# where the sum of the integers to the left of N is equal
# to the sum of the integers to the right of N.
# If there is no index that would make this happen, return -1.

def find_even_index(arr)
  arr.each_with_index do |element, index|
    if index > 0 && index < arr.length - 1
      left_total = 0
      right_total = 0
      arr[0..index].each { |elem| left_total += elem }
      arr[index..arr.length - 1].each { |elem| right_total += elem }
      if left_total == right_total
        return index
      end
    end
  end
  return -1
end
