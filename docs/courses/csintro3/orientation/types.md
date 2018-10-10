# Activity: Types

In blocks, the types of variables that were being used was generally invisible: when declaring a variable, the type of the variable was assumed by whatever value was first put into it.

When types came up, they were generally due to small errors: trying to ``||game:splash||`` a number required that the number be ``||text:join||``ed to a string, trying to store a string in a variable that's already been designated to be a string, and other small things.

### Rethink how to introduce this; it's really misleading as it's ascribing to javascript something that is unique to typescript. For now, instead of JavaScript using $Script$ for ease of conversion

In $Script$, variables can be explicitly given a type for the computer to treat it as; some common examples in @boardname@ are ``string``, ``number``, and ``sprite``.

## Concept: Implicit Typing to Explicit Typing

In $Script$, variables can be assigned a type at declaration by using ``: type`` after the name of the variable.

```typescript
let x: number = 5;
let word: string = "Hello";
```

In this previous code snippet, ``||variables:x||`` is defined to be of type ``number``, and ``||variables:word||`` has been defined to be of type ``string``.

In the following examples, the same code is shown in two different ways: the first, with the type of the variable inferred from the value that is assigned to it, and the second, with the type explicitly mentioned.

1. Review the two examples below
2. Identify what is different between the two, and what has stayed the same
3. Notice that ``+`` is the equivalent of ``||text:join||`` from Blocks
4. Run both examples: identify whether the behavior of the code has changed

### Example #1a: Implicit Typing

```typescript
let word = "hello ";
let otherWord = "world";
console.log(word + otherWord);
```

### Example #1b: Explicit typing

```typescript
let word: string = "hello ";
let otherWord: string = "world";
console.log(word + otherWord);
```

## Student Task #1: Output Mystery

1. Start with the code below
2. Make a hypothesis on what value will be stored in ``||variables:word||`` after the code is run
3. Write out the value you expect to be stored in ``||variables:word||`` each time it is assigned a value (there should be three lines)
4. To test your hypothesis, add ``||console:console.log(word)||`` after the final line of the code, and run the program
5. If the output did not match your hypothesis, review what you wrote in step 3 and identify where the value was different from your expectation.

```typescript
let word: string = "*";
word += "hi";
word += word;
```

## Concept: Logging a Number

Just like in Blocks, numbers need to be converted to a string in order to display them. This can be done in the same way: using ``+`` (``||text:join||``) to join the number to an empty string to convert the number to a string.

```typescript
console.log("The number is " + 7);
console.log("" + 7);
```

The same behavior applies for variables:

```typescript
let num: number = 7;
console.log("" + num);
```

## Example #2: Console Log Value

Adding a number to a log in the console is very commonly used for debugging purposes. Because of this, there is an alternate form of the ``console.log`` function that accepts both a ``string`` and a ``number``, and displays them both.

```typescript
console.logValue("The number is", 7);
```

Notice that it separates the ``string`` from the ``number`` with a colon and a space.

## Student Task #2: Typos

1. Reproduce the code below. The intention was to output the line "7: is the number!"
2. Identify whether this exact line can be produced using ``console.logValue``
3. Fix the error using ``console.log`` or ``console.logValue``, so that it produces the exact output listed in step 1

```typescript-ignore
console.logValue(7, "is the number!");
```

## Concept: Situations that Require Explicit Typing

Occasionally, explicitly defining a type is actually required. One such situation is a fairly common one in $Script: when a variable is defined without immediately assigning it a value.

For now, this may seem like an uncommon situation, but as the programs we write become more complex in future lessons, it will become more and more common to want to define a few variables at once, without creating a value for them to store immediately.

## Example #3: Required Types

1. Review the example below
2. Identify what variables are created

```typescript
let a: string;
let b: number;
let c: string;

a = "word";
b = 5;
c = "10";
b = b + 3;
c = b + a;
game.splash(c + a);
```

In this example, the type of the variables is defined before any values are assigned to them. This way, anyone reading the code can identify the type of the value with a glance, instead of having to read through all of the code.

## Student Task #3: Adding types

1. Review the code below: it has errors in it, so it will not run
2. Identify the type that each variable stores
3. Change the first **3** lines of code by adding in type definitions
4. Make sure the code runs without any errors once the previous step has been completed

```typescript
let x;
let y;
let z;

x = "5";
z = 5;
y = x + z;
z = z + 10;
x = y + z;

console.log(x);
```

## What did we learn

1. Make a hypothesis on why using ``+`` between a ``string`` and a ``number`` results in a ``string``, not a ``number``.
2. In task #3, you had to look at code someone else wrote and figure out what types the variables needed to hold. What were the clues that helped you identify what type the variables needed to hold?