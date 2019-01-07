def solution(a)
  if a.length <= 1
    return -1
  end

  a.each_with_index do |element, index|
    if index == a.length-1
      if a[0..index].reduce(:+) == 0
        return index
      end
    end
    if a[0..index].reduce(:+) == a[index..-1].reduce(:+)
      return index
    end
  end

  return -1
end
