def fizzbuzz(numbers, conditions)
  numbers.each do |i|
    result = ''
     conditions.each do |(text, predicate)|
     result << text if predicate.call(i)
     end
    puts result == '' ? i : result
  end
end

fizzbuzz(1..100, [
  ['Fizz', ->(i){ i % 3 == 0 }],
  ['Buzz', ->(i){ i % 5 == 0 }],
  ['Bang', ->(i){ i[0] == 1 }],
])