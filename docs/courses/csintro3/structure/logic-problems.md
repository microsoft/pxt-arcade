# Problem Set: Logic

This section contains a number of selected problems for the Logic section.

It is recommended that you review the problems, and complete a few before
moving on to the next section.

## Problem #1: This or That

Identify the output of the following snippet when ``||variables:bool||`` is

* ``||logic:true||``
* ``||logic:false||``

```typescript-ignore
if (bool) {
    console.log("This");
} else {
    console.log("That");
}
```

## Problem #2: Boolean logic

Determine whether the following expressions evaluate to ``||logic:true||`` or ``||logic:false||``.

| Problem   | Expression                        | Result    |
| :-------: | :-------------------------------: |           |
| **(a)**   | ``true`` &vert;&vert; ``false``   |           |
| **(b)**   | ``true`` &vert;&vert; ``true``    |           |
| **(c)**   | ``false`` && ``true``             |           |
| **(d)**   | ``false`` && ``false``            |           |
| **(e)**   | ``true`` && ``!true``             |           |
| **(f)**   | ``!false`` &vert;&vert; ``!true`` |           |
| **(g)**   | ``!false`` &vert;&vert; ``true``  | &nbsp;    |

## Problem #3: Mysterious Logging

Fill in the table below for the output of the following code based on the initial values
of ``||variables:bool1||`` and ``||variables:bool2||``.
If multiple values are logged, use a slash ``/`` to separate the different lines.
The case where ``||variables:bool1||`` and ``||variables:bool2||`` are both
``||logic:true||`` is filled in as an example.

|                           | ``bool1 == true`` | ``bool1 == false``    |
| :-----------------------: | :---------------: | --------------------- |
| **``bool2 == true``**     | **``2 / 3``**     |                       |
| **``bool2 == false``**    |                   | &nbsp;                |

```typescript-ignore
if (bool1 && 10 > 4) {
    if (!bool2) {
        console.log("1");
    } else {
        console.log("2");
    }
    console.log("3");
} else {
    if (6 > 8) {
        console.log("4");
    } else {
        console.log("5");
    }
}
```

## Problem #4: Rain or Shine

Translate the following statements into a program that ``||game:splashes||`` a clothing choice.
Use a number variable ``||variables:temp||`` for the temperature and a boolean variable
``||variables:isRaining||`` for whether or not it is raining.

If the temperature is less than 30 degrees, then I wear my winter coat.
Otherwise, if it is raining, I wear my rain jacket. 
In all other cases, I'll just wear a sweatshirt.

## Problem #5: Implication

Create a boolean expression that generates the following results given
boolean variables ``||variables:a||`` and ``||variables:b||``.

| ``a``     | ``b``     | Result    |
| --------- | --------- | --------- |
| ``true``  | ``true``  | ``true``  |
| ``true``  | ``false`` | ``false`` |
| ``false`` | ``true``  | ``true``  |
| ``false`` | ``false`` | ``true``  |
