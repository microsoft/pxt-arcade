# Problem Set: Operators

This section contains a number of selected problems for the Operators section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: Randomness

```typescript-ignore
let n: number = Math.randomRange(1, 10)
console.log("" + n);
...
console.log("" + n);
```

The code above will output a random number between ``1`` and ``10`` twice. 

1. Copy the code from above
2. Replace the ``...`` with a line of code that modifies ``||variables:n||`` such that the output is 

| Task | Output |
|---|---|
|(a)|some value, and then that value **plus** ``5``|
|(b)|some value, and then that value **minus** ``5``|
|(c)|some value, and then that value **times** ``2``|
|(d)|some value, and then that value **divided by** ``10``|


## Problem #2: What'd You Say

```typescript-ignore
let output: string = "The user says: ";
let input: string = game.askForString("");
...
console.log(output);
```

Replace the ``...`` with a line of code so the console logs "The user says: " followed by what they said.