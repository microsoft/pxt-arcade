# Activity: Logic

Just like in Blocks, using ``||logic:Logic||`` in JavaScript allows for games that react to user input and the state of the game.

Just like in Blocks, a boolean value can be stored as a variable in JavaScript.

```block
let x = true
```

is equivalent to 

```typescript
let x: boolean = true;
```

## Concept If and Else Statements 

The ``||logic:if then||`` and ``||logic:else||`` blocks were amongst the most important in the
``||logic:Logic||`` category in the previous course, and remain just as important in JavaScript.

In JavaScript, these can be expressed as:

```typescript-ignore
if (condition) {
    console.log("The condition is true");
}
```

and

```typescript-ignore
if (condition) {
    console.log("The condition is true");
} else {
    console.log("The condition is false");
}
``` 

where `condition` is some sort of boolean - either a boolean value (``||logic:true||`` or ``||logic:false||``, or another block that evaluates to a boolean (``||logic:0 < 0||``). In Blocks, these often took the form of elongated hexagons:

```block
let x = true
```

## Concept: Comparisons

In blocks, there were many ways to compare two numbers. In JavaScript, these same comparisons are available.

| Name                      | Symbol    | JavaScript            |
| :------------------------ | :-------: | :-------------------:	|
| Equal To                  | =	        | `value1 == value2`    |
| Not Equal To              | &ne;      | `value1 != value2`    |
| Less Than                 | <	        | `value1 < value2`     |
| Less Than or Equal To     | &le;      | `value1 <= value2`    |
| Greater Than              | >	        | `value1 > value2`     |
| Greater Than or Equal To  | &ge;      | `value1 >= value2`    |  

## Example #1: Numeric Comparisons

1. Review the two examples below
2. Identify what comparison is taking place in the ``||logic:if||``
3. Before running the code, identify what will be printed with ``console.log`` (if anything)
4. Run the examples and verify your responses to step 3

### Example #1a: Less Than

```typescript
let num: number = -5;
if (num < 0) {
    console.log("num is negative!");
} 
```

### Example #1b: Equal to

```typescript
let num: number = 1;
if (num == 1) {
    console.log("num is one!");
} else {
    console.log("num is not one!");
}
```

Notice how the code above uses curly braces (`{` and `}`) and indentation to separate the code that is contained within each logical block. This is done for two major reasons:

### ~hint

**Readability.** Anyone can look at the code and easily decipher what is part of the if statement and what is not, even if they have never seen it before.

### ~

### ~hint

**Functionality.** Without indentations, the code would run the same - but that is not true about curly braces. Curly braces are used to group code together, which means multiple expressions can be included in the conditionals.

```typescript
let num: number = 1;
if (num > 5) {
    console.log("num is big!");
    console.log("which means num is not small");
    console.log("and num is not medium");
} else {
    console.log("num is not big!");
    console.log("which means num is small");
    console.log("or num is medium");
}
```

### ~

## Student Task #1: A Simple Comparison

1. Create a variable that stores a number
2. Use an ``if`` statement to check if the number is less than 2
3. If the condition is true (in the **if** section), print "Hello!" to the console
4. If the condition is false (in the **else** section), print "Goodbye!" to the console

## Concept: Boolean Operators

Boolean operators allow boolean values to be manipulated.

| Name  | Order	| JavaScript                    |
| :---- | :---:	| :---------------------------:	|
| Not   | 1st   | `!bool1`                      |
| And   | 2nd   | `bool1 && bool2`              |
| Or    | 3rd   | `bool1` &vert;&vert; `bool2`  |

Just like in Math, the order of operations becomes important when there are multiple operators being used at once.

### ~hint

The vertical bar (``|``) character is used when writing ``||logic:or||``. Be sure to find where it is located on your keyboard!

### ~

### Example #2: Order of Boolean Operators

Evaluate the value stored in ``bool4`` given the following code:

```typescript
let bool1: boolean = false;
let bool2: boolean = true;
let bool3: boolean = false;

let bool4: boolean = bool1 && bool2 || !bool3;
```

Following the order of operations, the value assigned to ``bool4`` is evaluated as follows

1. Negate ``bool3``, which evaluates to ``true``
2. Check ``bool1`` **and** ``bool2``, which evaluates to ``false``
3. Check the result of step 1 **or** the result of step 2, (that is, ``true`` ``||logic:or||`` ``false``) which evaluates to ``true``

This results in ``bool4`` storing ``true``.

This result can be changed by adding parentheses

```typescript
let bool1: boolean = false;
let bool2: boolean = true;
let bool3: boolean = false;

let bool4: boolean = bool1 && (bool2 || !bool3);
```

Following the order of operations, the value assigned to ``bool4`` is evaluated as follows

1. Negate ``bool3``, which evaluates to ``true``
2. Check ``bool2`` **or** the result of step 1, which evaluates to ``true``
3. Check ``bool1`` **and** the result of step 3, which evaluates to ``false``

This results in ``bool4`` storing ``false`` instead.

## Example #3: Numeric Comparisons

1. Review the two examples below
2. Identify what comparisons are taking place in the ``||logic:if||``
3. Before running the code, identify what will be printed with ``console.log`` (if anything)
4. Run the examples and verify your responses to step 3

### Example #3a: Greater Than and Equal To

```typescript
let val1: number = 5;
let val2: number = 0;
if (val1 > 2 && val2 == 0) {
    console.log("The condition is true");
}
```

### Example #3b: Greater Than or Equal To

```typescript
let num: number = 5;
let bool: boolean = true;
if (num > 2 || bool) {
    console.log("The condition is true");
}
```

## Student Task #2: Compare a Lot!

1. Create two variables to store two numbers:
    * Variable ``a`` stores ``7``
    * Variable ``b`` stores ``8``
2. Use an ``if`` statement to perform **two** comparison on these variable
    * First, check that ``a`` is **less than** 4
    * Then, check that ``b`` is **not equal to** 9
    * Combine these two statements using ``or`` (``||``)
3. If the condition is ``true``, print "You got it!" to the console
4. If the condition is ``false``, print "Try again!" to the console

## What did we learn?

1. How do logical comparisons allow games to be more reactive to different conditions?
2. In JavaScript, how can the order in which an expression is evaluated be changed?
3. **Challenge:** consider the following expressions for different values of ``bool1`` and ``bool2``. When will they be the same, when will they be different?
    * ``!bool1 && !bool2``
    * ``!(bool1 || bool2)``
