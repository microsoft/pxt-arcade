# String Math Practice

## Student Task #1: New Food Idea

This example will have us work with user input and joining strings together.

1. Make a new variable called ``||variables:favFood1||``, and set it to the result of an 'ask for string with text' block. Inside the ask block, prompt the user with "Name a favorite food!"
2. Make another variable called ``||variables:favFood2||`` and do the same thing, but with "Name another favorite food!" as the prompt instead
3. Make another variable called ``||variables:sandwichName||``, and have that be the result of using a join block on ``||variables:favFood1||`` and ``||variables:favFood2||``
4. Now we're going to splash (display) a sentence that combines our variables. Say our favorite foods inputted were apples and cookies, then our sentence we display should be:

>>> "You should try making a applescookie sandwich!"

## Student Task #2: Phone Numbers

1. Ask for a 10-digit US phone number from the user, and set up a variable ``||variables:wholeNumber||`` to store the result. Here's our prompt message if you would like to use it: "Give me a US phone number please! (Ex: 1234567899) but no dashes"
2. Calculate and store the area code portion in a variable: for the example above, the string we want is "123". You will have to use the 'substring' block of your whole phone number here to get a specific sub-section. The first thing to put into the substring block is the starting index/position of the sub-section you want, and the second thing to pass in is how many letters to include starting from the specified index. That means for our example we'll want to substring starting from 0 and include 3 letters. Hint: The starting indices for the next 2 chunks start at 3 and 6, respectively
3. Now that we have access to the specific area code, let's print it out and proudly declare that it's the area code by using Splash. For our example, we'd want to say "The area code is 123". We will have to use the 'join' block here to combine two strings together
4. After that previous step, we should be able to correctly display what the area code is for a given 10 digit phone number. But let's add some more functionality: do the same thing we did for the area code to the other parts of the phone number. Print out what the office number is (the middle 3 digits) and the line number is (the last 4 digits)
5. Try adding some exclamation marks to the end of your sentences that you are displaying with Splash. You may find using more variables helpful for readability
