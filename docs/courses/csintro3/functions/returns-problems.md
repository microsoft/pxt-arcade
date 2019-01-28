# Problem Set: Returns

This section contains a number of selected problems for the Returns section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: Current Season

Write a basic function called ``currentSeason`` that takes in no parameters and returns a string describing the current season (e.g. "Spring", "Summer", "Autumn", or Winter).

## Problem #2: Favorite Food

In your program it can be a good idea to have functions whose only purpose is to return the value of a variable. 

Write a short program in which you create a variable called ``favoriteFood`` and set it equal to the string describing what your favorite food is.

Then, write a function called ``getFavoriteFood`` that takes in no parameters and returns ``favoriteFood``.

## Problem #3: Down for the Count

Functions can be a great way to create a variable with specific 

Write a function called ``count`` that takes in a number ``max`` as a parameter and returns a string that consists of all of the numbers up to and including ``max``.

The following is a table of expected output for given inputs.

| ``max`` | ``count(max)``   |
|:--------|:-----------------|
| 0       | "0"              |
| 1       | "01"             |
| 2       | "012"            |
| 3       | "0123"           |
| 5       | "012345"         |
| 9       | "0123456789"     |
| 10      | "012345678910"   |
| 11      | "01234567891011" |

## Problem #4: Celsius &hArr; Fahrenheit

Temperature can be difficult to express to people if they are used to using a different temperature scale. The two main temperature scales used are Fahrenheit and Celsius.

Write a function called ``toFahrenheit`` that takes a number called ``tempInCels`` as a parameter and returns a number. The parameter ``tempInCels`` represents a temperature in Celsius and the output of the function should be the temperature converted to the Fahrenheit scale.

### ~hint

The mathematical formula for converting a temperature from Celsius (C) to Fahrenheit (F) is:

```F = 32 + (9 / 5) * C```

### ~ 

Write a function called ``toCelsius`` that takes a number called ``tempInFahr`` as a parameter and returns a number. The parameter ``tempInFahr`` represents a temperature in Fahrenheit and the output of the function should be the temperature converted to the Celsius scale.

### ~hint

The mathematical formula for converting a temperature from Fahrenheit (F) to Celsius (C) is:

```C = (5 / 9) * (F - 32)```

### ~ 

## Problem #5: To Radians

Writing code that deals with angles can be tricky because there are two basic units for angles. For day-to-day use, degrees are often used to describe angles, but for computations, radians are usual used. 

Radians describe the ratio between the length of the outer arc of an angle and the radius of the angle (i.e. the distance from the center to the outer arc or perimeter)

Degrees are more arbitrarily chosen to be values more understandable by humans.

Since they measure the same thing, we can convert between the two.

Write a function called ``toRadians`` that takes an input called ``angle`` that is an angle represented in degrees (e.g. 90, 180, 45, 30) and returns the radian equivalent of that angle (e.g. π/2, π, π/4, π/6).

### ~hint

To convert a number from degrees to radians, divide by 180 and multiply by ``||Math:Math.PI||``.

### ~

### Challenge: To Degrees

Write a function called ``toDegrees`` that takes an input called ``angle`` that is an angle represented in radians ((e.g. π/2, π, π/4, π/6) and returns the degree equivalent of that angle (e.g. 90, 180, 45, 30).

## Problem #6: Create and give me an enemy

The ``||sprites:sprites.create||`` function takes in a parameter of an ``||images:image||`` and ``||sprites:SpriteKind||`` and returns a sprite with that ``||images:image||`` and ``||sprites:SpriteKind||``. 

Write a similar function called ``createEnemy`` that takes no parameters and uses ``||sprites:sprites.create||`` to return an Enemy sprite with some evil looking image.

## Problem #7: Brick Builder

``||images:Images||`` have shown themselves to be crucial to game development, but there hasn't really been a way to create ``||images:images||`` dynamically using code. This means not explicitly saying what pixel goes where. 

Write a function called ``createBrick`` that takes in 3 numbers as parameters, ``height``, ``width``, and ``color``. The function should then return an ``||images:Image||`` with these attributes. 

To do this, there are two functions that might be helpful.

The function ``image.create(width: number, height: number)`` takes in a ``width`` and a ``height`` and will return a transparent ``||images:Image||`` with those dimensions.

Example:

```typescript-ignore
let someImage: Image = image.create(10, 10);
```

This creates a 10x10 transparent ``||images:Image||`` called ``someImage``

Once you have an ``||images:Image||``, calling the function ``fill(color: number)`` on that ``||images:image||`` will modify the ``||images:image||`` to be the color given.

Example:

```typescript-ignore
someImage.fill(2);
```

This makes ``someImage`` completely red.

## Problem #8: Wholesome Numbers

When writing code, it can be helpful to know if a given number is a whole number (i.e. a number with no numbers after the decimal) or not.

Write a function called ``isWholeNumber`` that takes in a number called ``numToCheck`` and returns a boolean representing whether or not that number is a whole number.

The following is a table of expected output for given inputs.

| ``numToCheck`` | ``isWholeNumber(numToCheck)`` |
|:---------------|:------------------------------|
| 2              | true                          |
| 2.5            | false                         |
| 4              | true                          |
| 5.33333        | false                         |
| 3.14           | false                         |
| 3              | true                          |

### ~hint

``||math:math.round||`` will take in a number and return the nearest whole number. If the number returned is the same as the number given, then that would mean that the number given must be a whole number.

### ~

### Challenge: isDivisible

Write a function called ``isDivisible`` that takes in two numbers, ``divisor`` and ``dividend``. The function should return a boolean for whether or not the ``dividend`` is divisible ``divisor``. 

A ``dividend`` is defined to be divisible by a ``divisor`` if the ``dividend`` divided by the ``divisor`` is a whole number.

### Challenge: isPrime

Prime numbers are numbers that are not divisible by any numbers other than 1 and itself.

Write a function called ``isPrime`` that takes in a number called ``numToTest``. The function should return a boolean for whether or not ``numToTest`` is prime.

### ~hint

You only need to check if ``numToTest`` is divisible by numbers less than itself since a number can not be divisible by a number greater than itself.

### ~