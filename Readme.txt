<<FIZZBUZZ>>

Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

Add a new condition: if the number starts with the number 1, add “Bang” to the result. So for example, now your output should look like this:

Bang
2
Fizz
4
Buzz
Fizz
7
8
Fizz
BuzzBang
… etc. until 100



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



<<SHOPPING CART>>

Create a program with a ShoppingCart class. The shopping cart class will calculate the cost of different items that we add to it. The first step is to create our shopping cart class. What attributes will it have? Firstly it's going to have to contain a list of items that are currently in the cart.

Next up is our Item class. Our item class should have the attributes of name and price. Where do we put attributes of a class?

We're also going to define special rules for our items. These are going to be based off of the category that the items are in. Here are some rules for our items:

-By default, items will have no discount.
-Fruits have no discount during weekdays but on weekends they have a 10% discount.
-Housewares have no discount unless their unit price is more than 100€ / $100. If the price is greater than 100€ / $100, there will be a 5% discount.

*These discounts belong to these different categories of items. How do we explain this in Ruby? Inheritance is a good option here.

ITERATION ONE:
Create a shop that sells the following items

Bananas: 10€ / $10 each
Orange Juice: 10€ / $10 each
Rice: 1€ / $1 per unit
Vacuum Cleaner: 150€ / $150
Anchovies: 2€ / $2 each

ITERATION TWO:
We need to get our properly priced items into our shopping cart right? We're not in Publix though, we're in Ruby, and we have to create a method to get it there.

Create an add_item method in your shopping cart that takes a parameter of item, and then adds that item to your list.

ITERATION THREE:

Finally, let's create a checkout method that will total up the cost of all of the items in your cart.

joshs_cart = ShoppingCart.new
banana = Fruit.new("Banana", 10)
vaccuum = Houseware.new("Vaccuum", 150)
oj = Item.new("Orange Juice", 10)
rice = Item.new("Rice", 1)
anchovies = Item.new("Anchovies", 2)

joshs_cart.add_item(oj)
joshs_cart.add_item(rice)
joshs_cart.checkout
# Your total today is $11. Have a nice day!
Make sure that the shopping cart takes into account the item's discount if it applies. Remember, we can access this through the item's price method.

ITERATION FOUR:
There's a special storewide discount we still have to add. If there are more than 5 items in the cart, the user gets 10% off. Where should we apply this discount?



<<A SITE FOR A MOVIE>>

In this first exercise, you're going to make a website for your favourite movie. Use Sublime Text to create the HTML and CSS files for the site.

You must use at least one of each of the following HTML tags on your film's page:

<section>
<p>
<h1>
<h2>
<h3>
<ul>
<li>
<strong>
<em>
<img>
<a>

-Start creating an <article> that will contain all your relevant info. This <article> will be 1000px by 1000px, and centered. It's important to use <article>, <header>, <footer> and <aside> tags instead of <div> because of SEO (short for search engine optimization). Get used to working with them, but don't worry about using them properly for now. 
-Add <header> and <footer>, each with width 100% and height 100px. Put the <header> before the <article> and <footer> after the <article>. 
-Add three containers inside in the main <article>, with the sizes and structure shown in Basic 2.png.The containers inside <article> will have an image, a title, text and an <aside>. Fill them with your movie's information.
-Finish by adding a title to your <header> and a signature to your <footer>.

Keep it simple. Focus more on good HTML structure and less on CSS styling for now. We’ll cover that later.
