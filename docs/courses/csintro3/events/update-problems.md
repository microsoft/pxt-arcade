# Problem Set: On Game Update Interval

This section contains a number of selected problems for the On Update Interval section.

It is recommended that you review the problems,
and complete a few before moving on to the next section.

## Problem #1: Change of Scenery

Create a program that changes the background color as time goes on.
Every 2 seconds (2000 ms) change the background color to the next color.
In @boardname@, color is stored as a number ranging from 0 to and including 15.
Start by setting the background color to 1.
Then using an ``||game: on game update interval||`` event,
increment the background color by 1.
You may have to keep track of the current background color as variable.
Instead of incrementing the background color from 15 to 16,
set the background color to 1.
(Color 0 is transparent which looks the same as color 15: black so skip it).

## Problem #2: Score!

There are many games that reward you for lasting longer.
Use an ``||game: on game update interval||`` event to increase
the player's score by 1 every second.

## Problem #3: Enemies Inbound

The most common use of ``||game: on game update interval||`` events is
to have a way to create sprites over a long period of time. 

Use this concept to make an enemy projectile appear somewhere on the
left side of the screen every 5 seconds (5000 ms).

## Problem #4: Pizza for Everyone!

Games involving collecting items are also very popular and easy to make.
Use an ``||game: on game update interval||`` event to make a pizza sprite
appear somewhere randomly on the screen every 500 ms.

## Problem #5: Random Clouds

There can be sometimes in which a random interval between events is helpful.
There are a few ways to go about doing this.
One way, is to generate a random number,
and if that number meets a certain condition,
like the ``||math:math.percentChance||`` function does,
run the code in the event.
Otherwise, ignore it that time and try again the next time the event is called. 

Write an ``||game: on game update||`` interval that runs every 300 ms.
Inside the event, 30% of the time,
it should create a cloud sprite that moves from left to right.
The other 70% of the time it should do nothing.

### ~hint

Not all random values are created equally. Random values are generated based on some sort of distribution: the probability that each possible value will be selected. Previously, all random values have been selected using a uniform distribution meaning that each value had the same chance as being selected as the others. With the way that the duration between creating sprites in this problem is generated, the possible durations do not occur with the same chance. The specific distribution is called a geometric distribution and is more likely to generate smaller durations rather than longer ones.

### ~