# Arrays of Numbers

At the end of the prior course, arrays were introduced as a way in which to store multiple related values. In JavaScript, they are even easier to create and interact with, allowing for them to be used more regularly in code.

## Structure of Arrays

In JavaScript, arrays are created using square brackets (`[` and `]`) - an array of numbers can be initialized as follows:

```typescript
let arr: number[] = [];
```

For the type, you simply add in the square brackets following the type of the values in the array - `number[]` means that the type is an array of numbers. On the right side, you can see that an array can be created with just the two square brackets.

Square brackets are also used to set and get values in an array - for example, the following will **set** the value at index 0 to be 5, and then **get** that value and splash it on screen.

```typescript
let arr: number[] = [];
arr[0] = 5;
game.splash("" + arr[0]);
```

`arr[0]` corresponds to the value at index 0 of the array `arr`; you can think of `arr[0]` as just being another named variable, so long as it is defined.

## student task - update values in array - make them do arr[0]++, and arr[1] = something

## Shortened Array construction

It likely seems a bit weird to just use `[]` to create an array. It's important to note that this is used to create an **empty** array - you can actually add in values between the two brackets, which will fill in the array starting at 0 as soon as it is created. These values must be separated by commas, similar to how parameters are separated in functions.

```typescript
let arr: number[] = [0, 1, 2];
for (let i = 0; i <= 2; i++) {
    game.splash("Value at index " + i + " is " + arr[i]);
}
```

Carefully note the syntax of the loop; it is very common to use arrays within loops, so you want to make sure that this makes sense. This example splashes a message containing the 

## student task - change the values in the array, and see that they work; add another value to array and see how output changes (it doesn't / make them change for loop bounds)

## Array Length

(Only showing length as a very light intro to using them as objects; next lesson should talk about methods relating to arrays)

Example using arr length; extend previous example, so basically

```typescript
let arr: number[] = [0, 1, 2];
for (let i = 0; i <= arr.length; i++) {
    game.splash("Value at index " + i + " is " + arr[i]);
}
```

explain length corresponds to the number of elements in array (maybe note that if they define things out of order, they will fill array with undefined values e.g. arr[5] means the length will be at least 6 even if there is nothing else in the array)

## What did we learn

1. Given an array of numbers `arr` and a for loop declared as follows, what is the difference between `i` and `arr[i]`?

>> `for (let i = 0; i <= arr.length; i++)`