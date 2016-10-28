def list(names)
  if names.length == 0
    return ''
  else
    output = ''
    names.each_with_index do |hash, index|
      if index == names.length - 1
        output += hash[:name]
      elsif index == names.length - 2
        output += "#{hash[:name]} & "
      else
        output += "#{hash[:name]}, "
      end
    end
    return output
  end
end
