def caesar_cipher(string, shiftnum)
    
letters = string.split("")
toNums = letters.map { |i| i.ord }
newLetters = toNums.map do |i|
    
  #if uppercase  
    if i<= 90 && i >= 65                       
      ( ( (i - 65 + shiftnum) % 26 ) + 65).chr
  #if lowercase    
    elsif i<= 122 && i >= 97                   
      ( ( (i - 97 + shiftnum) % 26 ) + 97).chr
  #if any other symbol
    else                                      
      i.chr
    end
  end    
    
  puts newLetters.join
end

caesar_cipher("Pb uhdo qdph lv Grqdog Gxfn", -3)