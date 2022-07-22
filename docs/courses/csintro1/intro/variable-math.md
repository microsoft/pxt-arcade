# Activity: Math Operators with Variables 

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/79vikAMjpBs)

A variable points to a container that can store data. We have previously used variable names for sprites (for example, ``||variables:mySprite||``). Variables act like an address, and allow us to store, retrieve, and update data. For the examples in the [Sprites](/courses/csintro1/intro/sprites
) lesson, the variable ``||variables:mySprite||`` allowed us to interact with the sprite in our game. The word "variable" also means change. We can update the values our variable point to, such as updating the ``||variables:mySprite||`` variable to point to a completely different sprite.

Variables are used extensively in code. Variables allow code to be written in a generic way, and allow for easier reuse of our code. Math equations, like `X = 2Y`, provide familiar examples in the use of variables that apply to code by assigning known values to variables to calculate unknown variable values. 

If we know `Y = 3` we can calculate `X` from our equation. Later on, `Y` can have a different value, like `Y = 7`. We can reuse the equation, `X = 2Y`, for both values of `Y`. This way, the value of `X` will change alongside the value of `Y`.

### ~hint

**Variable Definition**: a container used to store values in your code.

### ~

In this activity, students are introduced to:

* Expressing numeric operations with math operators (`+`, `-`, `*`, `/`)
* Storing the result of an equation in a variable 
* Evaluating equations using variables
* Modifying and creating variable equations
* Displaying text with ``||game:splash||`` by using ``||text:join||``
* Differentiating between the number and string data types

## Concept: Assign Number Variables and displaying numeric values

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/0cvZZrmXeEg)

## Concept: Using Math Operators with Variables

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/PeLTFJwaNBU)

## Example #1: Math equation in a variable #example-1

1. Review the code below
2. Create a new project and name it “equation variable”
3. Create the sample code and run the code

```blocks
let answer = 0
answer = 3 + 5
game.splash("3 + 5 = " + answer)
```

## Student Task #1: Try new values in the equation

1. Starting with [example #1](#example-1)
2. Experiment using different numbers in our equation (e.g. `9 + 2`)
3. Test at least 3 different equations
4. **Challenge:** make longer addition equations with ``||math:Math||`` blocks so that the code calculates the sum of 5 or more numbers. If the equation gets too long, then display using ``||game:show long text||``

### ~hint

In order to combine multiple items we will need to add additional ``||math:Math||`` blocks

![animation: adding 3 numbers with blocks](/static/courses/csintro1/intro/add-3-numbers.gif)

### ~

### ~hint

The splash screen is primarily designed for short sentences. This limits the length of equation we can effectively display. ``||game:show long text||`` allows for a better representation for longer text.

### ~

## Concept: Basic math operators with variables 

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/xru53piCWUk)

We can convert variable based math equations, like `A = B + C`, into code using our code variables and math operators.

### Operators

In JavaScript, the following order of operation precedence applies:

1. Multiplication (`*`) and Division (`/`)
2. Addition (`+`) and Subtraction (`-`)

**Note**: JavaScript uses the `*` symbol for multiplication the `/` for division. In order to change order of these operations, you can use parentheses `( )` around expressions just like in math.

## Example #2: Displaying expressions with ``||game:splash||`` #example-2

1. Review the code below
2. Create the sample code and run the code
3. Press the A button to see the second equation on splash message

```blocks
let answer = 0
let firstNumber = 0
let secondNumber = 0
firstNumber = 15
secondNumber = 5
answer = firstNumber - secondNumber
game.splash("15 - 5 = " + answer)
firstNumber = 5
secondNumber = 7
answer = firstNumber * secondNumber
game.splash("5 * 7 = " + answer)
```

## Student Task #2: Basic math operators with variables

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/-Q5jhsj4dyg)

1. Start with [example #2](#example-2)
2. Add a ``||variables:thirdNumber||`` variable with a unique value
3. Create an equation using both the addition operator (`+`) and the multiplication operator (`*`)
4. Swap the Addition and Multiplication operator and run the program (Typically the answers will differ)

## Student Task #3: Multiple operators and variables equation
1. Start with the code from the previous task
2. Add a ``||variables:fourthNumber||`` variable
3. Create an equation using 3 different operators
4. **Challenge:** create an equation using all 4 basic operators (`+`, `-`, `*`, `/`) and at least 5 unique variables

### ~hint

Look at the JavaScript code. For multiple operator equations it is often easier to code in JavaScript. Note how using parenthesis `( )` changes the equation.

### ~

## Student Task #4: Conversion

1. Create 2 variables
    * ``||variables:tempC||`` (temperature Celsius) 
    * ``||variables:tempF||`` (temperature Fahrenheit)
2. Initialize ``||variables:tempC||`` with common Celsius temperature (for example, 22.0)
3. Create an equation using the formula ``||variables:tempF||`` = ``||variables:tempC||`` × 9/5 + 32 and assign it to a new variable ``||variables:temp||``
4. Show the ``||variables:temp||`` in a Splash Screen
4. **Challenge:** create an equation for converting back to Celsius:
    * ``||variables:tempC||`` = (``||variables:tempF||`` - 32) × 5/9
    * pay careful attention to the parentheses

### ~hint

It can be difficult to structure complicated expressions using blocks. Look at and edit the JavaScript code to create the formula where it looks much more like a standard math equation.

### ~

## Student Task #5: Debugging

1. We decided that we want to have three different variables in our code - ``||variables:a||``, ``||variables:b||``, and ``||variables:c||``. The variable ``||variables:a||`` should be set to `3`, ``||variables:b||`` should be set to `a + 5`, and ``||variables:c||`` should be set to `a + 2 * b`. This should result in ``||variables:a||`` storing 3, ``||variables:b||`` storing 8, and ``||variables:c||`` storing 19 at the end. When we wrote this out, though, we found that we couldn't run our code. What is going wrong in the following code, and how can you fix it?

[Fix the Code here](https://makecode.com/_0qfiscfhEY9P)

![image of code blocks with error](/static/courses/csintro1/intro/fix-code.png)

### ~hint

Click edit to fix code. ``||game:splash||`` can display string characters. Review the previous examples that use ``||game:splash||``.

### ~

2. After you are able to run the code, the value of ``||variables:c||`` should be shown on the screen. There's a problem because the value shown is not quite right. Rearrange the existing blocks so that it produces the correct output, without removing or adding any JavaScript or blocks beyond what was necessary for part 1. What went wrong? Fix the output.

## Variables Summary

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/6hB7Daj2VT0)

* Variables are names that point to a container that can be updated to hold different data types.
* Data Types used in variables so far are ``||variables:Sprite||``, ``||variables:numbers||`` and ``||variables:strings||``.
* Strings are sequences of characters (like the letters found on a keyboard) surrounded by quotation marks.
* Displaying a number often requires type coercion by using ``||text:join||`` to convert a number into a string.

## What did we learn? 

1. In JavaScript what is the resulting value of answer for `answer = 5 + 3 * 2`? Explain why the answer is **not** 16.
2. How is putting operators and numbers into a calculator different than writing in code (example: 2 + 3 + 4 * 4)? Explain.
3. Research and describe 2 other ``||math:Math||`` operators found in the math menu in @boardname@ (hover over values for more information).

### [Teacher Material](/courses/csintro1/about/teachers)
