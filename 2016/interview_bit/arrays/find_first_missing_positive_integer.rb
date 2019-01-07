class Solution
    # param a : array of integers
    #return an integer
  def firstMissingPositive(a)
    n = a.length
    if n == 1
      if a[0] <= 0
        return 1
      else
        return a[0] + 1
      end
    end

    a.each_with_index do |element, index|
      while a[index] != index do
        if a[index] < 0 || a[index] >= n
          break
        end

        if a[index] == a[a[index]]
          break
        end

        temp = a[index]
        a[index] = a[temp]
        a[temp] = temp
      end
    end

    a.each_with_index do |element, index|
      if a[index] != index && index > 0
        return index
      end
    end

    return n + 1
  end
end

class Solution
    # param a : array of integers
    #return an integer
  def firstMissingPositive(a)
    i = 0
    while i < a.length do
      if a[i] > 0 && a[i] <= a.length && a[i] != i + 1 && a[i] != a[a[i]-1]
        temp = a[a[i]-1]
        a[a[i]-1] = a[i]
        a[i] = temp
      else
        i += 1
      end
    end

    i = 0
    while i < a.length && a[i] == i + 1 do
      i += 1
    end
    return i + 1
  end
end
