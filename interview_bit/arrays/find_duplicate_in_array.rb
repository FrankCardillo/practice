class Solution
    # param a : array of integers
    #return an integer
    def repeatedNumber(a)
        duplicate = nil
        a.each do |element|
           if a.count(element) > 1
               duplicate = element
               break
           end
        end
        if duplicate.nil?
            return -1
        end
        return duplicate
    end
end

class Solution
    # param a : array of integers
    #return an integer
    def repeatedNumber(a)
        sum_of_sequence = (a.max * (a.max + 1)) / 2

	    a.each do |element|
		    sum_of_sequence -= element
		end

	    return sum_of_sequence.abs
    end
end

class Solution
    # param a : array of integers
    #return an integer
    def repeatedNumber(a)
        temp={}
        a.each do |element|
            if !temp.has_key?(element)
                temp[element]=1
            else
                return element
            end
        end
    end
end
