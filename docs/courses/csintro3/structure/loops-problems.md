# Problem Set: Loops

This section contains a number of selected problems for the Loops section.

It is recommended that you review the problems, and complete a few before moving
on to the next section.

## Problem #1: Current Number

Write code that uses a basic ``||loops:for||`` loop structure to log the following output:

```
0 is the current number
1 is the current number
2 is the current number
3 is the current number
4 is the current number
5 is the current number
6 is the current number
7 is the current number
8 is the current number
9 is the current number
```

## Problem #2: Sad Sprite

Typing out long strings can be difficult, but ``||loops:for||`` loops can sometimes
make it easier to build these long strings instead.

Start with a string variable called ``||variables:output||`` that contains just the letter "N".

Then, use a ``||loops:for||`` loop to append 100 "o"'s to ``||variables:output||``.

Once the string is built, make a ``||sprites:sprite||`` ``||sprites:say||``
``||variables:output||``.

## Problem #3: (Not) Starting From Zero

Fill in the underlined sections in the code snippet below to create the following output.

### Code

```typescript-ignore
for ( _________ ; _________ ; _________ ) {
    console.log("" + i);
} 
```

### Expected Output

```
11
12
13
14
15
```

## Problem #4: Only Evens

Fill in the underlined sections in the code snippet below to create the following output.

### Code

```typescript-ignore
for ( _________ ; _________ ; _________ ) {
    console.log("" + i);
} 
```

### Expected Output

```
0
2
4
6
8
```

## Problem #5: Countdown

Games can become more suspenseful when there is a time limit involved.

Create a ``||sprites:sprite||``, and use a ``||loops:for||`` loop to make
the sprite count backwards from 10.

Remember to use ``||loops:loops.pause||`` to make it so
that there is a pause between each number.

## Problem #6: Pizza Party

Make a ``||loops:for||`` loop that repeats 10 times. Each time it repeats,
create a pizza ``||sprites:sprite||`` that is placed in a **random** location on the screen. 

After the loop runs, there should be 10 pizzas on the screen.

Make another ``||loops:for||`` loop that repeats 15 times. Each time it repeats,
create a pizza ``||sprites:projectile||`` with ``||math:random||`` ``||sprites:vx||``
and ``||sprites:vy||``, each between -50 and 50.

## Problem #7: User Input

This problem is an extension of a problem seen in 
User Input](/courses/csintro3/intro/user-input-problems).

You and a friend want to keep a log of a long conversation.
Create a program that will do this for you.

The program should first ask for your name,
followed by your friend's name.

The program should then take 10 turns ``||game:ask||``ing first what you said,
and then what your friend said.

For each turn, the computer should ``console.log`` a transcript of the conversation
for that turn (for example, "James: What's your favorite color?",
"Julia: My favorite color is green."). 
