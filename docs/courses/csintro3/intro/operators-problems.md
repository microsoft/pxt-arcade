# Problem Set: Operators

This section contains a number of selected problems for the Operators section.

It is recommended that you review the problems, and complete a few before
moving on to the next section.

## Problem #1: Random Modification

```typescript-ignore
let n: number = randint(1, 10)
game.splash("Value A is " + n);
...
game.splash("Value B is " + n);
```

The code above will output a random number between ``1`` and ``10`` twice,
with different names ("Value A" and "Value B") for each

1. Start with the snippet above
2. Replace the ``...`` with a line of code that changes the value assigned to
``||variables:n||`` so that the second value ``||game:splashed||`` matches the expected output

|           | Expected Output                                               |
| :-------: | :------------------------------------------------------------ |
| **(a)**   | The value for "B" is the value of "A" **plus** ``5``          |
| **(b)**   | The value for "B" is the value of "A" **minus** ``5``         |
| **(c)**   | The value for "B" is the value of "A" **times** ``10``        |
| **(d)**   | The value for "B" is the value of "A" **divided by** ``2``    |

## Problem #2: Counting Crisis

Walk through the following code and write down the expected output for each ``console.log``.

```typescript
let num: number = 10;
num++;
console.log("a: " + num);
num--;
console.log("b: " + num);
num++;
console.log("c: " + num);
num++;
console.log("d: " + num);
num--;
console.log("e: " + num);
num++;
console.log("f: " + num);
num++;
console.log("g: " + num);
num++;
console.log("h: " + num);
num--;
console.log("i: " + num);
num++;
console.log("j: " + num);
```

After walking through the code, run it and check for any errors.
If there were any values that did not match what you expected,
start from the first error and correct any mistakes.

## Problem #3: What Did You Say?

Replace the ``...`` in the snippet below with a line of code so the value logged is
"The user says: " followed by the value the user inputted.

```typescript-ignore
let output: string = "The user says: ";
let input: string = game.askForString("Say something");
...
console.log(output);
```

## Problem #4: What is This Assignment?

In the code snippet below, change the values used in the assignment operators to
make each ``console.log`` a true statement.

### ~hint

The only portions of the code you can change in this problem are the ``0``s in the assignment.
Do not change the type of assignment operator that is used.

### ~

```typescript
let myNumber: number = 5;
myNumber *= 0;
console.log("4 + 6 is " + myNumber);
myNumber /= 0;
console.log("8 - 7 is " + myNumber);
myNumber += 0;
console.log("7 * 6 is " + myNumber);
myNumber /= 0;
console.log("3 * 7 is " + myNumber);
myNumber -= 0;
console.log("100 / 2 is " + myNumber);
myNumber *= 0;
console.log("15 - 3 * 5 is " + myNumber);
```
