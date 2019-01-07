def getLengthOfMissingArray(array_of_arrays)
  if array_of_arrays.nil? || array_of_arrays.length == 0 || array_of_arrays.include?(nil) || array_of_arrays.include?([nil]) || array_of_arrays.include?([])
    return 0
  end
  lengths = []
  array_of_arrays.each do |interior_array|
    lengths.push(interior_array.length)
  end
  lengths.sort!
  lengths.each_with_index do |element, index|
    if element < lengths[index+1]-1
      return element + 1
    end
  end
end
