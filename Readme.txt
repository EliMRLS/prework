<<CAESAR’S CIPHER>>

In cryptography, a Caesar cipher (also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift) is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

Can you solve the following?

solve_cipher(“Uhdo qdph lv Grqdog Gxfn", -3)

<<WORD SORTING>>
Write a function that receives a sentence and returns an array with the sentence's words sorted alphabetically. Ignore case and punctuation.

Recommended approach:
-First, split the sentence into words and sort it with the default sort method.
-Now, after splitting the array remove punctuation characters.
-After that, sort using a custom function that ignores cases when comparing words (you can compare both strings after calling upcase on them), but keeping the capitalized words as they were in the beginning .
