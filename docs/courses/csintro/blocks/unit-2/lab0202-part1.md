# Lab 2.2 Part 1: How Old Are You?

## Introduction to variables @showdialog

Variables help us keep track of information that our project needs.
MakeCode Arcade has a bunch of built-in variables that we can use, like
a player's score or lives.

We can create our own variables, too!

## Splash!

Let's learn about a new block that you can use to display a message on
the screen.

1.   In your   
``||loops(noclick):on start||``   
container, add a   
``||game:splash ("")||``   
block. You can find that block in the ``||game:Game||`` drawer of the toolbox.
1.   Type a phrase into the new block. Any phrase will do!

Run your project to see how this block works.

```blocks
game.splash("Hello, world!")
```

## Join together!

Instead of just one space for text, let's give ourselves some more room.
We need a new block ... and this time, it's in a secret location!

The drawer that we need is called ``||text:Text||`` **Text**,
and it is in the **Advanced** section of the toolbox.
Click on **Advanced** to see the secret drawers in the toolbox!

Check the hint to see a screenshot showing this secret drawer.

1.   From the   
``||text:Text||``   
**Text**   
drawer, drag a   
``||text:join ("Hello") ("World")||``   
**join ("Hello") ("World")**   
block into your   
``||game(noclick):splash("")||``   
block.

Run your project to see how these blocks work together.
Check the hint if you need help.

![Advanced drawers in the toolbox.](/static/courses/csintro/S01.L02.02.P01.text_drawer.png)

```blocks
game.splash("Hello" + "World")
```

## Speak your mind!

Let's learn more about how the **Join** block works.

1.    Change the text in your   
``||text:join ("Hello") ("World")||``   
**join ("Hello") ("World")**   
block.
1.    Run your project and see how it's changed.
1.    Do this a few times until your understand how this block works.

Now, let's try something else!

-     Expand the   
``||text:join ("Hello") ("World")||``   
**join ("Hello") ("World")**   
block.

~hint How do I expand a block?
Some blocks have a plus sign on the right side of the block. Select the
plus sign to expand it. The block will show more information!
hint~

-    Now, collapse the   
``||text:join ("Hello") ("World")||``   
**join ("Hello") ("World")**   
block.

~hint How do I collapse a block?
Some blocks will have a minus sign on the right side of the block.
Select the minus sign to collapse it. The block will hide some information!
hint~

Play around with the   
``||text:join ("Hello") ("World")||``   
**join ("Hello") ("World")**   
block.
Expand it, collapse it, and enter your own text.
Watch how your project responds.

When you are ready, move on to the next step.

## Only room for three!

Let's get our project ready for our first variable.

1.   Expand or collapse your   
``||text:join ("Hello") ("World")||``   
**join ("Hello") ("World")**   
block
so that it shows three spaces for text.
1.   In the first space, enter **You are ** *with a space at the end*.
1.   In the second space, enter your age (or any number that you wish).
1.   In the third space, enter ** years old** *with a space at the beginning*.

Run your project to see how it works.
Check the hint if you need help.

**Question**: Why were the spaces in steps 2 and 4 necessary?

```blocks
game.splash("You are " + "0" + " years old")
```

## Whose age?

Our project works, but it doesn't show the player's age ... it shows yours.
Sure, we could ask the player to change the code and type in their age,
but that's not very friendly!

Let's get our project ready so that we can ask the player to enter their age.
To do that, we need to create a variable.

1.   Open the ``||variables:Variables||`` drawer.
1.   At the top of the drawer, select the   
**Make a Variable...**   
button.
1.   In the dialog that appears, enter an appropriate name (like *age*).
1.   Select the **Ok** button.

Now, we have a variable that we can use!

1.   Drag a   
``||variables:set age to (0)||``   
block **to the top** of your   
``||loops(noclick):on start||``   
container.
1.   Set the variable's value to your own age.

We've created a variable. Now, we need to use it!

1.   From the   
``||variables:Variables||`` drawer, drag an   
``||variables:age||``   
block and drop it in the middle spot of your   
``||text:join ("You are ") ("0") (" years old.")||``   
**join ("You are ") ("0") (" years old.")**   
block.
1.   Run your project to see how it works.
1.   Change the value of the **age** variable and watch how your program
responds.
1.   Do this a few times until you are comfortable with how the variable
works with the **join** block.

Check the hint if you need help.

```blocks
let age: number = 14
game.splash("You are " + age + " years old.")
```

## Does order matter?

What happens when we switch the order of these two blocks?

1.   Switch the order of the blocks in your   
``||loops(noclick):on start||``   
container.
1.   Run your code to see how your program responds.

**Question**: Does the order of these two blocks matter? Why or why not?

## I want your input!

We have a variable now, but we still haven't asked the player for their age.
Let's do that now!

1.   From the   
``||game:Game||`` drawer, drag an   
``||game:ask for number ("")||``   
block and drop it into the red block
that sets the value of your variable.
1.   In this new block, enter a prompt for the player,
like "How old are you?"

Check the hint if you need help.

```blocks
let age = game.askForNumber("How old are you?")
game.splash("You are " + age + " years old.")
```

## Ooh! A keyboard!

Run your program and notice how it responds now.

Now you know how to display a keyboard on the screen!

Use these instructions to interact with the keyboard.

-    Use the D-pad (up, down, left, and right) to move the cursor.
-    To press a key, use the **A** button.
-    If you make a mistake, use the **B** button as a backspace.
-    When you are done, use the D-pad to move the cursor to the **Ok** button.
Then, use the **A** button to select **Ok**.

Run your project a few times so that you see how your project works
and to get used to the on-screen keyboard.

## Complete! @showdialog

Good work! We will return to these ideas in the next couple of lessons.
For now, move on to Part 2!

```ghost
let age = game.askForNumber("How old are you?")
game.splash("You are " + age + " years old.")
```