# Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. 
# If the board is valid return 'Finished!', otherwise return 'Try again!'

def done_or_not(board)
    if !check_rows(board) || !check_columns(board) || !check_regions(board)
      return 'Try again!'
    end
    return 'Finished!'
  end
  
  def check_logical_group(group)
    if group.uniq.length != group.length
      return false
    end
    group.each { |elem|
      if elem == 0
        return false
      end
    }
    return true
  end
  
  def check_rows(board)
    board.each { |row| 
      if !check_logical_group(row)
        return false
      end
    }
    return true
  end
  
  def check_columns(board)
    iterator = 0
    while iterator < 9
      column = []
      board.each { |row|
        column.push(row[iterator])
      }
      if !check_logical_group(column)
        return false
      end
      iterator += 1
    end
    return true
  end
  
  def check_regions(board)
    iterator = 0
    regions = []
    while iterator <= 6
      board.each { |row|
        regions.push(row[iterator])
        regions.push(row[iterator + 1])
        regions.push(row[iterator + 2])
      }
      iterator += 3
    end
    
    if !check_region_arr(regions)
      return false
    end
    return true
  end
  
  def check_region_arr(regions)
    regions.each_slice(9) { |slice|
      if !check_logical_group(slice)
        return false
      end
    }
    return true
  end