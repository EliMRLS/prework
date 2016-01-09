def alph_order (sentence)
	uppercase = sentence.upcase
	sentence['either!'] = 'either'
	print sentence.split.sort { |sentence, uppercase| sentence.casecmp(uppercase) }
end

puts alph_order ("Maybe Monday doesn't like you either!")
