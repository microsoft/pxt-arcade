# Activity: Birthday Algorithm

This activity requires only pencil and paper (no need for a computer). In this lesson students follow a series of steps to complete a math trick.

Students are introduced to:

* Algorithms
* Program flow
* Debugging

## Algorithm

An Algorithm is series of steps, decisions and / or formulas. Some common examples include:

* Cooking recipes
* Map directions to an address
* Assembly instructions

## Birthday Algorithm

The Birthday Algorithm displays a birthday as `month.day` after following a set of calculations.

### ~hint

Result is in the format `month.day`
example: March 1st would be `3.01`

### ~

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/r2MGEV6cgPo)


Follow the Birthday Algorithm steps below working with a partner. Record the steps and the answer for each step so you can troubleshoot. Doing this with just paper and pencil adds to the challenge. If the trick doesn't work, retrace the steps and check each calculation with partner.

Produce a total at the end of each step and use the total in the next step until producing the birthday `month.day`.

1. Start with the number 7
2. Multiply by month the person was born (number 1-12)
3. Subtract 1
4. Multiply by 13
5. Add 5
6. Subtract 2
7. Add the day the person was born (number 1-31)
8. Multiply by 11
8. Subtract day the person was born (number 1-31)
10. Subtract month the person was born (number 1-12)
11. Divide by 5
12. Add 22
13. Divide by 200
14. If **not** a match of the `month.day` of the persons birthday, carefully re-read the instructions and check answers at each step

## What did we learn? 

1. Describe how well the algorithm worked. Explain what made the algorithm work or what was tried when it did not work.
2. Explain how the algorithm could be improved in terms of efficiency and usability for the participant. Be sure to describe how to reduce the number of steps while maintaining the trick.
3. **Challenge:** Write full equation at each step. Then try to simplify each answer.

### ~hint

Example: first 4 steps

>1. `7`
>2. `7m` &nbsp; *(`m` = month)*
>3. `7m - 1`  
>4. `(7m - 1)13 = 91m - 13` 

### ~

### [Teacher Material](/courses/csintro1/about/teachers)
