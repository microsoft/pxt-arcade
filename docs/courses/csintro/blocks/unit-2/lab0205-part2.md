# Lab 2.5 Part 2: Can You Even?

## Is it even? @showdialog

Many programs need to test whether a number is even or odd. Let's write one!

## Collecting the evidence

First, let's get a number to test from the player.

1.   Create a variable that will store the player's number.
1.   To your   
``||loops(noclick):on start||``   
container,
add blocks that ask the player for a number.
Store the response in your new variable.

Run your project to test your code. You can also check the hint.

```blocks
let theNumber = game.askForNumber("Enter a number.")
```

## So, is it even or not?

Now, let's display a message to say whether the number is even.

You guessed it: We need to write another conditional statement!

1.   To the **bottom** of your   
``||loops(noclick):on start||``   
container, add an   
``||logic:if (true) then [] else []||``   
block.
1.   Use blocks from the   
``||variables:Variables||``,   
``||logic:Logic||``, and    
``||math:Math||``    
drawers to make the block say the following:   
``||logic(noclick):if||`` ``||math(noclick):remainder of||``
``||variables(noclick):(your variable)||`` ``||math(noclick):/ (2)||``
``||logic(noclick):= (0) then||``.
1.  In each half of the ``||logic(noclick):if||`` container,
add blocks to display an appropriate message.

~hint How do I know if the number is even?
If the number is even then, when you divide it by two, the remainder is zero.
hint~

Run your project to test your code. Check the hint if you get stuck.

```blocks
let theNumber = game.askForNumber("Enter a number.")
if (theNumber % 2 == 0) {
    game.splash("" + theNumber + " is even!")
} else {
    game.splash("" + theNumber + " is not even.")
}
```

## Complete @showdialog

Good work! Let's make a fortune telling device in Part 3!

```ghost
let theNumber = game.askForNumber("Enter a number.")
if (theNumber % 2 == 0) {
    game.splash("" + theNumber + " is even!")
} else {
    game.splash("" + theNumber + " is not even.")
}
```
