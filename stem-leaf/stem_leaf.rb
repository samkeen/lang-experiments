# Playing around with Ruby a bit
# Never really done anything with ruby, so this a first attempt 
# at a simple stem=leaf plotter . T be much improved, i'm sure
# as i pick up more ruby
#
# built w/ RUby 1.9.2
class LeafStem

  attr_accessor :parsed_value_list

  def initialize src_list, decimal_places
    @src_list = src_list.sort
    @parsed_value_list = {}
    @scale = 10*decimal_places
  end

  def parse_values
    @src_list.each do |element|
      stem = element/@scale
      leaf = element%@scale
      @parsed_value_list[stem] = @parsed_value_list[stem]  ? @parsed_value_list[stem] << leaf : [leaf]
    end
  end

  def plot
    parse_values
    plot =  "Values List: " + @src_list.join(", ") + "\n\n"
    plot += "stems".rjust(10) + " | leaves\n"
    plot += "-------------------------\n"
    @parsed_value_list.each_pair do |k,v|
      plot += "#{k}".rjust(10) + " | " + v.join(' ') + "\n"
    end
    plot += key_row + "\n"
    plot
  end

  def key_row
    key_row = "-------------------------\n"
    last_stem = @parsed_value_list.keys.max
    first_leaf_of_last_stem = @parsed_value_list[last_stem].first
    key_row += "key: #{last_stem}".rjust(10) + " | #{first_leaf_of_last_stem} equals #{last_stem}#{first_leaf_of_last_stem}"
  end
  
end

ls = LeafStem.new([2,12,15,31,18,20,21,28], 1)
puts ls.plot
