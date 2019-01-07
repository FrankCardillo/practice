def find_second_highest_num(array)
  array.sort!
  array.uniq!
  array[-2]
end
