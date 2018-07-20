# Activity: Math Operators with Variables 

https://youtu.be/79vikAMjpBs

A variable points to a container that can store data.  We have previously used variables names for  sprites (e.g. - `player1`).  Variables act like an address, and let us store, retrieve or update data.  For our Sprite example, the variable `player1` allowed us to use the Sprite in our game.  The word "variable" also means change. We can update the values our variable point to, such as updating the `player1` variable to point to a new Sprite image.

Variables are used extensively in code. Variables allow code to be written in a generic way and allow for easier reuse of our code.  Math equations, like `X = 2Y`, provide familiar examples in the use of variables that apply to code by assigning know values to variables to calculate unknown variable values.  

If we know `Y = 3` we can calculate `X` from our equation.  Later `Y` can have a different value, `Y = 7`. We can reuse the equation, `X = 2Y`, for both values of `Y`.


In this activity student will:

* combine numeric values with math operators (+, -, \*, /)
* store the result of an equation in a variable 
* evaluate equations using variables
* modify and create variable equations
* display text with ``||game:splash||`` by using ``||text:join||``
* differentiate between number and string data types

## Concept: Assign Number Variables and displaying numeric values

https://youtu.be/nlp6Cqfxmb4

## Concept: Using Math Operators with Variables

https://youtu.be/Dv-5K9bWcps 

## Example: math equation in a variable
1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "equation variable") 

[equation variable](https://makecode.com/_RdXJ5jMxubqA)

```blocks  
let answer = 0
answer = 3 + 5
game.splash("3 + 5 = " + answer)
```

## Student Task 1: Try new values in the equation 

1. starting with the above example 
2. Experiment using different numbers in our equation (e.g.  `9 + 2`)
3. Test at least 3 different equations
4. Challenge: make longer addition equations so the code calculates the sum of 5 or more numbers. If the equation gets too long, then display using "show long text"


### ~hint

In order to combine multiple items we will need to add additional Math blocks

![animation: adding 3 numbers with blocks](/static/courses/csintro1/orientation/add-3-numbers.gif)

### ~

### ~hint

The splash screen is designed for short sentences.  This limits the length of equation we can effectively display. "Show long text" allows for a better representation for longer text.

### ~  

## Concept: basic math operators with variables 

https://youtu.be/EiWXa52oIgU

We can create variable based math equations, like `A = B + C`, into code using our code variables and math operators.

### Operators 
In order of operation precedence:

- Addition (**`+`**)  and  Subtraction (**`-`**)  
- Multiplication (**`*`**)  and Division (**`/`**)  

Note that multiplication uses the **`*`** symbol and division uses **`/`** in JavaScript

## Example:  

1. Review the code below
2. Create the sample code and run the code
3. press any button to see then second equation on splash message

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
## Student Task 2: basic math operators with variables

https://youtu.be/C_UY8V-ufiI

1. starting with the previous example 
2. add a thirdNumber variable with a unique value
3. create an equation using both the addition operator (`+`) and the multiplication operator (`*`)
4. Swap the Addition and Multiplication operator and run the program (Typically the answers will differ)

## Student Task 3: multiple operators and variables equation  
1. starting with the previous example 
2. add a fourthNumber variable
3. create an equation using 3 different operators
4. Challenge: create an equation using all 4 basic operators (`+, -, *, /`) and at least 5 unique variables.  

### ~hint

Look at the JavaScript code.  For multiple operator equations it is often easier to code in JavaScript. Note how using parenthesis `( )` changes the equation.

### ~

## Student Task 4: Conversion  
1. create 2 variables
    - tempC (temperature Celsius) 
    - tempF (temperature Fahrenheit)
2. initialize tempC with common Celsius temperature (e.g., 22.0)
3. create an equation using  the formula: tempF = tempC × 9/5 + 32
4. Show the temp in a Splash Screen
4. Challenge: create an equation for converting to Celsius:   
    - tempC = (tempF - 32) × 5/9
    - be sure to pay attention to the parenthesis

### ~hint

It can be difficult to structure parenthesis using blocks.  Look at and edit the JavaScript code to create the formula where it looks much more like a math equation, except for **\*** is used for multiplication and **/** is used for division.  Note: evaluate parenthesis first because code follows the the same parenthesis rules as mathematics.

### ~


## Student Task 5: Debugging
1. We decided that we want to have three different variables in our code - `a`, `b`, and `c`. The variable `a` should be set to `3`, `b` should be set to `a + 5`, and `c` should be set to `a + 2 * b`. This should result in b storing 8, and c storing 19 at the end. When we wrote this out, though, we found that we couldn't run our code. What is going wrong in the following code, and how can you fix it?

[Fix the Code here](https://makecode.com/_0qfiscfhEY9P)  

![image of code blocks with error](/static/courses/csintro1/orientation/fix-code.png)

### ~hint

Click edit to fix code.  Splash can display string characters.  Review previous examples of using Splash.

### ~

2. After you are able to run the code, the value of c should be shown as a splash screen, but the value shown is not quite right. Rearrange the existing blocks so that it produces the correct output, without removing or adding any JavaScript or blocks beyond what was necessary for part 1.  What went wrong? Fix the output

### ~hint

It can be useful to view math equations in JavaScript.

### ~

## Variables Summary

https://youtu.be/BPX2MHXmXJw

* Variables are names that point to a container that can be updated to hold different data types  
* Data Types used in variables so far are Sprites, Numbers and Strings  
* Strings are Characters (like the Characters on a keyboard) surrounded by quotation marks  
* Displaying a Number often requires coercion, persuading a number to act like a string, using ``||text:join()()||``

## What did we learn? 

1. In MakeCode JavaScript what is the resulting value of answer for `answer = 5 + 3 * 2`? Explain why the answer is **not** 30.
2. How is putting operators and numbers into a calculator different than writing in code  (example: 2 + 3 + 4 * 4)?  Explain.
3. Research and describe 2 other Math Operators using the math menu in MakeCode (hover over values for more information) and/or use other JavaScript resources.

## Rubrics

### Code Tasks
| points | 5 | 7 | 9 | 10 |
|:---:|:---:|:---:|:---:|:---:|
| Variable Math Tasks | Completed at least 4 coding tasks |Completed All 5 coding tasks |All coding tasks completed plus at least 1 Challenge | Completed 2 or more Challenges |

### Score = \_\_\_\_\_\_ /10 

### What did we learn Questions

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered at least 2 questions fully or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | Uses multiple examples and clear explanations |  Explanations are outstanding in detail and/or use creative examples |
### Score = \_\_\_\_\_\_ /10 