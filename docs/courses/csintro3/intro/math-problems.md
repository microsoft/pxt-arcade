# Problem Set: Math

This section contains a number of selected problems for the Math section.

It is recommended that you review the problems, and complete a few before
moving on to the next section.

## Problem #1: Apples to Oranges

Use variables in JavaScript to store the number of fruit each person has.

1. Randy has 5 apples
2. Chris has 12 lemons
3. Anna has 3 more apples than Randy
4. Janet has 2 less lemons than Chris
5. Tom has a number of oranges equal to the number of lemons Janet has
minus the number of apples Anna has

## Problem #2: Difficult Math

Math can be hard, but computers are good at it. Use JavaScript to
compute the following:

|           | Equation                                      |         | Equation                                                        |
| :-----:   | :-------------------------------------------- | :-----: | :-------------------------------------------------------------- |
| **(a)**   | ``15,391`` + ``4,273`` =                      | **(g)** | ``87,849,383`` &divide; ``7,481`` =                             |
| **(b)**   | ``12,589`` + ``2,531`` =                      | **(h)** | ``72,395,941`` &divide; ``16,063`` =                            |
| **(c)**   | ``13,577`` - ``8,039`` =                      | **(i)** | ``9,439`` - ``4,831`` + ``8,237`` =                             |
| **(d)**   | ``3,307`` - ``1,103`` =                       | **(j)** | ``4,567`` - ``3,761`` &times; ``2,281`` =                       |
| **(e)**   | ``10,177`` &times; ``13,159`` = &nbsp;&nbsp;  | **(k)** | ``3,337`` &times; ``8,633`` &divide; ``4,183`` =                |
| **(f)**   | ``3,089`` &times; ``4,111`` =                 | **(l)** | ``10,181`` + ``112,911,179`` &divide; ``12,049`` = &nbsp;&nbsp; |

## Problem #3: Apples to Oranges II

Use variables in JavaScript to store the number of fruit each person has.

1. Randy has ``||variables:x||`` apples
2. Chris has ``||variables:y||`` lemons
3. Anna has 3 more apples than Randy
4. Janet has 2 less lemons than Chris
5. Tom has a number of oranges equal to the number of lemons Janet has
minus the number of apples Anna has

This equation for different values of ``||variables:x||`` and ``||variables:y||``.
Start with ``x = 5`` and ``y = 12`` and see if you get the same results as Problem #1.

### ~hint

**Challenge:** will all values of ``||variables:x||`` and ``||variables:y||`` make
sense with this formula?
If not, what constraints can we place on ``||variables:x||`` and ``||variables:y||``
to ensure that Tom a number of oranges that makes sense?

### ~

## Problem #4: Perfect PEMDAS Practice

For the following expressions, add parentheses to the equations to make the
statements true:

|           | Equation                          |           | Equation                                  |
| :-------: | :-------------------------------- | :-------: | :---------------------------------------- |
| **(a)**   | ``9`` - ``5`` - ``3`` = ``7``     | **(g)**   | ``18`` / ``2`` + ``16`` = ``1``           |
| **(b)**   | ``13`` - ``3`` - ``7`` = ``17``   | **(h)**   | ``12`` - ``6`` / ``3`` = ``2``            |
| **(c)**   | ``12`` - ``7`` + ``1`` = ``4``    | **(i)**   | ``18`` / ``3`` + ``3`` = ``3``            |
| **(d)**   | ``6`` + ``2`` * ``12`` = ``96``   | **(j)**   | ``18`` / ``1`` + ``5`` - ``2`` = ``1``    |
| **(e)**   | ``11`` - ``2`` * ``5`` = ``45``   | **(k)**   | ``2`` * ``5`` + ``20`` / ``2`` = ``25``   |
| **(f)**   | ``16`` + ``13`` * ``3`` = ``87``  | **(l)**   | ``6`` + ``15`` / ``3`` + ``1`` = ``8``    |

## Problem #5: Birthday Algorithm

Implement the [Birthday Algorithm from CS Intro 1](/courses/csintro1/intro/birthday-algorithm)
in JavaScript:

Start with the variables ``||variables:month||`` and ``||variables:day||``
the both store numbers.
Assign these values to a person's birthday.

For each step below, modify a variable called ``||variables:output||``
that **also** stores a number.

1. Start with the number 7 (``let output: number = 7``)
2. Multiply by month the person was born (number 1 - 12)
3. Subtract 1
4. Multiply by 13
5. Add 5
6. Subtract 2
7. Add the day the person was born (number 1 - 31)
8. Multiply by 11
8. Subtract day the person was born (number 1 - 31)
10. Subtract month the person was born (number 1 - 12)
11. Divide by 5
12. Add 22
13. Divide by 200

When finished, ``||game:game.splash||`` ``||variables:output||`` to the screen.