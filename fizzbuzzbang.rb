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
  ['Bang', ->(i){ i == 1 || i == 10 || i == 11 || i == 12 || i == 13 || i == 14 || i == 15 || i == 16 || i == 17 || i == 18 || i == 19 || i == 100 }],
])