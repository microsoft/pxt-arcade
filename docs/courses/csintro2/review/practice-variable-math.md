# Variable Math Practice

## Student Task #1: Life Questionnaire

This example will get us more experience with math and programming, by getting our computers to play the part of a calculator and a little bit more.

```blocks
let ageInDays = 0
let ageSentence = ""
let age = 0
let name = ""
name = game.askForString("What's your name?")
age = parseInt(game.askForString("How old are you?"))
ageSentence = "" + name + " is "
ageInDays = age * 365
ageSentence = "" + ageSentence + ageInDays
game.splash("" + ageSentence + " days old")
```

1. Copy and paste the given code into the @boardname@ editor. Then try running it!
2. The ``||game:ask for string with text||`` block is needed, which will bring up a keyboard on the screen where the user can enter numbers and text. Regardless if we enter numbers or text the entry evaluates as string. You can see that we currently store it in a variable for later use. We also do one more thing here: we convert the string to an int with another block that is labeled parse to integer. This is just so our computer knows that this piece of data is meant to be a number, rather than a word or phrase. More on this later, so don't worry about all the details right now. Just know that if you want to use input from the user as a number that you can do math with, you have to use the ``||text:parse to integer||`` block, and if you want to switch that number back to a string to display, you need to use the join block
3. Calculate the number of months for someone's age and display it however you want. Splash is probably the easiest, but you could also make a sprite and use say. We will say that there are 365 days in a year and there are 12 months in a year, ignoring leap years
4. Ask for the number of dogs the player has seen in their lifetime, and then calculate and display the number of dogs they've seen per year on average
5. Add in two more questions of your choice that have numeric answers to your survey. Some basic ideas are to compute how many weeks old someone is, or how many cats they've seen per year. Feel free to get creative though; there are plenty of fun statistics out there to compute

## Student Task #2: Random Mind Reading

There are many useful functions in the Math blocks - in this example we will use the random number generation functionality to make a guessing game.

1. Make a variable called 'actual'
    * Set the 'actual' variable to a random number that is generated using ``||math:pick random||`` block
2. Make another variable called 'guess'
    * Set guess to the result of the user input
    * We need an integer so use ``||text:parse to integer||`` so we can do math with it later
    * Prompt the user with the context: "guess a number 1 through 3" 
3. Use splash to display the output of how close we were, by printing the result of actual - guess. You can choose what response says exactly, but it should be a clear response to the guess. Here's an example message you could display if the actual number was 3 and the guess was 2: "You were 1 off!". If it had turned out that both the actual and the guess were the same number, then the player would have been 0 off because they had the right answer

After you get the part 3 working, you may notice that when you run it a couple of times you get some weird sentences that say you were some negative number off. If you haven't already, take a second to try and think about when and why this weird result is coming up before moving on.

It turns out that if the actual number was lower than the guess, the result of `actual - guess` will go negative. How are we going to fix this to seem like a more natural sentence? We can use something called absolute value: basically how far a number is from 0 on a number line. (For example, -5 and 5 both have an absolute distance of 5. They're both 5 numbers away from 0. A number's absolute value is just the same if the original number is positive, but if it was originally negative, you can take away the negative sign).

5. Instead of just subtracting, use `abs` to find the absolute value of the result to help the sentence make more sense, and also make the game slightly harder to beat
6. Change the range of values generated from ``||math:randomRange||``
7. **Challenge:** allow the user to choose the range from which the random number will be generated using ``||game:ask for string with text||``
