class NameProcessor
	attr_reader :input_file

	def initialize()
		@input_file = ARGV[0]
	end

	def question_one()
		unique_full_names = {}
		unique_first_names = {}
		unique_last_names = {}

		File.foreach(self.input_file) { |line|
			temp_name = ''
			hyphen_index = 0
			if line.include?('--')
				hyphen_index = line.index('-')
				temp_name = line[0..(hyphen_index - 1)]
				name_arr = temp_name.split(',')
				temp_first_name = name_arr[1]
				temp_last_name = name_arr[0]

				if !unique_full_names.include?(temp_name)
					unique_full_names[temp_name] = ''
				end

				if !unique_first_names.include?(temp_first_name)
					unique_first_names[temp_first_name] = ''
				end

				if !unique_last_names.include?(temp_last_name)
					unique_last_names[temp_last_name] = ''
				end
			end
		}

		puts "Question One:"
		puts "There are #{unique_full_names.size} unique full names"
		puts "There are #{unique_first_names.size} unique first names"
		puts "There are #{unique_last_names.size} unique last names"
	end

	def question_two()
		first_names = {}
		output = []

		File.foreach(self.input_file) { |line|
			temp_name = ''
			hyphen_index = 0
			if line.include?('--')
				hyphen_index = line.index('-')
				temp_name = line[0..(hyphen_index - 1)]
				name_arr = temp_name.split(',')
				temp_first_name = name_arr[1]

				if !first_names.include?(temp_first_name)
					first_names[temp_first_name] = 1
				else
					first_names[temp_first_name] = first_names[temp_first_name] + 1
				end
			end
		}

		first_names = first_names.sort_by {|k,v| v}.reverse

		i = 0
		while i < 10
			output.push([*first_names[i], *first_names[i][0]])
			i += 1
		end

		puts "Question Two:"
		puts "The ten most common first names are:"
		output.each { |name|
			puts "#{name[0]}(#{name[1]})"
		}
	end

	def question_three()
		last_names = {}
		output = []

		File.foreach(self.input_file) { |line|
			temp_name = ''
			hyphen_index = 0
			if line.include?('--')
				hyphen_index = line.index('-')
				temp_name = line[0..(hyphen_index - 1)]
				name_arr = temp_name.split(',')
				temp_last_name = name_arr[0]

				if !last_names.include?(temp_last_name)
					last_names[temp_last_name] = 1
				else
					last_names[temp_last_name] = last_names[temp_last_name] + 1
				end
			end
		}

		last_names = last_names.sort_by {|k,v| v}.reverse

		i = 0
		while i < 10
			output.push([*last_names[i], *last_names[i][0]])
			i += 1
		end

		puts "Question Three:"
		puts "The ten most common last names are:"
		output.each { |name|
			puts "#{name[0]} (#{name[1]})"
		}
	end

	def question_four()
		unique_full_names = {}
		first_and_last_names = []
		formulated_names = []

		File.foreach(self.input_file) { |line|
			temp_name = ''
			hyphen_index = 0
			if line.include?('--')
				hyphen_index = line.index('-')
				temp_name = line[0..(hyphen_index - 1)]
				name_arr = temp_name.split(',')
				temp_first_name = name_arr[1]
				temp_last_name = name_arr[0]

				if !unique_full_names.include?(temp_first_name) && !unique_full_names.include?(temp_last_name)
					unique_full_names[temp_first_name] = temp_name
					unique_full_names[temp_last_name] = temp_name
				end
			end
		}

		first_and_last_names = self.get_unique_names(unique_full_names, 25)

		i = 0
		while i < 25
			temp_name = first_and_last_names[0][i] + ',' + first_and_last_names[1][24 - i]
			formulated_names.push(temp_name)
			i += 1
		end

		puts "Question Four:"
		puts "The 25 formulated names are:"
		formulated_names.each { |name|
			puts name
		}
	end

	# Question One helper methods

	# Question Two helper methods

	# Question Three helper methods

	# Question Four helper methods

	def get_unique_names(all_unique_full_names, num_names)
		unique_names = []
		first_names = []
		last_names = []

		all_unique_full_names.each_value { |val|
			unique_names.push(val)
		}

		unique_names.uniq!
		unique_names = unique_names[0..(num_names - 1)]

		unique_names.each { |name| 
			name_arr = name.split(',')
			first_names.push(name_arr[1])
			last_names.push(name_arr[0])
		}

		return [last_names, first_names]
	end
end

test = NameProcessor.new()

test.question_one()
puts ''
test.question_two()
puts ''
test.question_three()
puts ''
test.question_four()