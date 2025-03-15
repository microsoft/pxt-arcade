# Lab 2.2 Part 1: How Old Are You?
### @explicitHints true

## Introduction to variables @showdialog

Variables help us keep track of information that our project needs.
MakeCode Arcade has a bunch of built-in variables that we can use, like
a player's score or lives.

We can create our own variables, too!

![Lab 2.2.1](https://arcade.makecode.com/api/_RdC9TMWEuKR1/thumb)

## Splash!

Let's learn about a new block that you can use to display a message on
the screen.

---

1.   In your <br/>
``||loops(noclick):on start||`` <br/>
container, add a <br/>
``||game:splash ("")||`` <br/>
block. You can find that block in the ``||game:Game||`` drawer of the toolbox.
1.   Type a phrase into the new block. Any phrase will do!

---


Run your project to see how this block works.

#### ~ tutorialhint

```blocks
game.splash("Hello, world!")
```

## Join together!

Instead of just one slot for text, let's give ourselves more room.
We need a new block...and this time, it's in a secret location!

The drawer that we need is called ``||text:Text||``,
and it is in the **Advanced** section of the toolbox.

Click on **Advanced** to see the secret drawers in the toolbox!

![Advanced drawers in the toolbox.](/static/courses/csintro/S01.L02.02.P01.text_drawer.png)

---


1.   From the 
``||text:Text||`` drawer, drag a <br/>
``||text:join ("Hello") ("World")||`` <br/>
block into your 
``||game(noclick):splash("")||``
block.

---


Run your project to see how these blocks work together.
Check the hint if you need help.


#### ~ tutorialhint

```blocks
game.splash("Hello" + "World")
```

## Speak your mind!

Let's learn more about how the ``||text(noclick):join ("Hello") ("World")||``
block works.

---


1.    Change the text in your <br/>
``||text:join ("Hello") ("World")||`` <br/>
block.
1.    Run your project and see how it's changed.
1.    Do this a few times until your understand how this block works.

Now, let's try something else!

-     Expand the <br/>
``||text:join ("Hello") ("World")||`` <br/>
block.



~hint How do I expand a block? 🤷🏽

---

Some blocks have a plus sign (+) on the right side of the block. Click the
plus sign to expand it. The block will show more information!
hint~

-    Now, collapse the <br/>
``||text:join ("Hello") ("World")||`` <br/>
block.

~hint How do I collapse a block? 🤷🏻‍♀️

---

Some blocks will have a minus sign (-) on the right side of the block.
Click the minus sign to collapse it. The block will hide some information!
hint~

Play around with the <br/>
``||text:join ("Hello") ("World")||`` <br/>
block.
Expand it, collapse it, and enter your own text.
Watch how your project responds.

---


When you are ready, move on to the next step.

## Room for three!

Let's get our project ready for our first variable.

---


1.   Expand or collapse your <br/>
``||text:join ("Hello") ("World")||`` <br/>
block
so that it shows three spaces for text.
1.   In the first space, enter **You are ** *with a space at the end*.
1.   In the second space, enter your age (or any number that you wish).
1.   In the third space, enter ** years old** *with a space at the beginning*.

---


Run your project to see how it works.
Check the hint if you need help.

---


**Question**: Why were the spaces in steps 2 and 4 necessary?

#### ~ tutorialhint

```blocks
game.splash("You are " + "0" + " years old")
```

## Whose age?

Our project works, but it doesn't show the player's age...it shows yours.

Let's get our project ready to ask the player to enter their age.
To do that, we need to create a variable.

---


1.   Open the ``||variables:Variables||`` drawer.
2.   At the top of the drawer, select <br/>
**Make a Variable...** <br/>
3.   In the dialog that appears, enter an appropriate name (like *playerAge*).
4.   Select the **Ok** button.

~hint Why not just age? 🤷🏿‍♀️

---

You'll find that many programming languages have special words.  
Short words like time, score, date, (etc.) often already have special meanings attatched to them. 

For this reason, whenever you're thinking of a variable for a common word (sprite, age, name, etc.)
it's best to add a modifier to make sure it's special. That's why we default to variables like
mySprite, playerAge, userName, and such!

hint~


Now, we have a variable that we can use!

5.   Drag a <br/>
``||variables:set [playerAge] to (0)||`` <br/>
block **to the top** of your <br/>
``||loops(noclick):on start||`` <br/>
container.
6.   Set the variable's starting value to your own age.



#### ~ tutorialhint

```blocks
let age: number = 14
game.splash("You are " + "0" + " years old.")
```




## What's my age again?

We've created a variable. Now, we need to use it!

---


1.   From the
``||variables:Variables||`` drawer, drag <br/>
``||variables:playerAge||`` <br/>
into the middle spot of your <br/>
``||text:join ("You are ") ("0") (" years old.")||`` <br/>
block.
1.   Run your project to see how it works.
1.   Change the value of **playerAge** in your _initialization_ block 
and watch how your program responds.
1.   Do this a few times until you are comfortable with how the variable
works with the **join** block.



~hint What is initialization? 🤷🏻

---

The word _initialization_ comes from the word _initial_...meaning _first_.  We use that term
because, before you can use a variable, you need to _first_ tell the computer what it is.

The first time a <br/>``||variables:set [variable] to [0]||``<br/>
block is used in a program, several things happen:
- The new variable name is added to our ``||variables:Variables||`` category
- The variable is given a starting value
- The computer recognizes the _type_ (number, image, string, etc.) of the variable, and knows
that it needs to make sure that type matches everywhere in the program

hint~

---


Check the hint if you need help.

#### ~ tutorialhint

```blocks
let age: number = 14
game.splash("You are " +playerAge+ " years old.")
```

## Does order matter?

What happens when we switch the order of your two blocks?

---


1.   Switch the order of the blocks in your <br/>
``||loops(noclick):on start||`` <br/>
container.
1.   Run your code to see how your program responds.

---


**Question**: Does the order of these two blocks matter? Why do you think that is?


## I want your input!

We have a variable now, but we still haven't asked the player for their age.

Let's do that now!

---


1.   From the <br/>
``||game:Game||`` drawer, drag <br/>
``||game:ask for number ("")||`` <br/>
into the red initialization block.
1.   In the text field of the ``||game:ask||`` block, enter a prompt for the player,
like. "How old are you?"

---

Check the hint if you need help.


#### ~ tutorialhint

```blocks
letplayerAge= game.askForNumber("How old are you?")
game.splash("You are " +playerAge+ " years old.")
```

## Ooh! A number pad!

Run your program and notice how it responds.

Use these instructions to interact with the number pad.

---


-    Use the D-pad (up, down, left, and right) to move the cursor.
-    To select a number, use the **A** button.
-    If you make a mistake, use the **B** button as a backspace.
-    When you are done, use the D-pad to move the cursor to the **Ok** button.
Then, use the **A** button to select **Ok**.

---


Run your project a few times so that you see how your project works
and to get used to the on-screen keyboard.


## Complete! @showdialog

Good work! We will return to these ideas in the next couple of lessons.
For now, move on to Part 2!

```ghost
letplayerAge= game.askForNumber("How old are you?")
game.splash("You are " +playerAge+ " years old.")
```