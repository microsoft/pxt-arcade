# Problem Set: Arrays of Numbers

This section contains a number of selected problems for the Arrays of Numbers section.

It is recommended that you review the problems, and complete a few before
moving on to the next section.

## Problem #1: Minor Refactoring

**Code Refactoring** is the process of restructuring (changing)
code without changing the external behavior.
This can be done for a variety of reasons,
but a common one is to make complicated or long code clearer.

**Refactor** the code snippet below to use an ``||arrays:Array||`` of numbers.
Ideally, there should be only a single ``console.log`` in your final solution.

```typescript
let a1: number = 5;
let a2: number = 2;
let a3: number = 4;
let a4: number = 6;
let a5: number = 7;

console.log("" + a1);
console.log("" + a2);
console.log("" + a3);
console.log("" + a4);
console.log("" + a5);
```

## Problem #2: Some Setup Required

Recreate the code snippet below, and add **assignment statements** to make
``||variables:arr||`` store the values in the table below.

| Index in arr  | Value |
| :-----------: | :---: |
| 0             | 1     |
| 1             | 5     |
| 2             | 2     |
| 3             | 8     |
| 4             | 1     |

```typescript
let arr: number[] = [1, 0, 0, 1];
// Add your code after this line
```

## Problem #3: I Found Three!

``||arrays:Arrays||`` allow you to keep track of a large number of values at once. 

Start with the code in the snippet below, and fill out ``||functions:iFoundThree||``
to behave as the comment describes.

```typescript
/**
 * Prints "I Found Three!" to the console once for each 3 in the input array.
 * @param values array to check
 */
function iFoundThree(values: number[]) {
    // Your code here!
}

iFoundThree([1, 2, 3]);     // Should output "I Found Three!" once
console.log("Done!");
iFoundThree([1, 3, 3, 8]);  // Should output "I Found Three!" twice
console.log("Done!");
iFoundThree([]);            // Should not output anything
console.log("Done!");
```

### ~hint

The ``||functions:iFoundThree||`` function should iterate through all elements of
``||variables:values||``, and compare each element to the number 3.
Whenever a value is equal to three, it should print to the console.

### ~

## Problem #4: Sum of These

``||arrays:Arrays||`` are often used to store a variety of information.
Sometimes, each element of this information is useful on it's own,
but often the information will be more useful when viewed as a whole.

Review the code snippet below, and then fill ``||functions:sum||``
as described in it's comment.

```typescript
/**
 * @param values the array of numbers to sum up
 * @returns the sum of all numbers in the given array
 */
function sum(values: number[]): number {
    let output: number = 0;

    // Your code here!

    return output;
}

let output1: number = sum([1, 2]);      // Should be 3
let output2: number = sum([8, 6, 3]);   // Should be 17
```

### ~hint

A sum is the result of adding two or more values numbers.

### ~

## Problem #5: Contains a Problem

In the snippet below, ``||functions:contains||`` is intended to check
if a given value is found in the given array.

Unfortunately, it has a bug that causes it to not always work correctly.
Review the code, and identify when it will fail to return the correct thing,
and how to fix it.

```typescript
/**
 * @param arr an array of numbers to check
 * @param value a number to check for
 * @returns true if arr contains the value, and false if value is not in arr
 */
function contains(arr: number[], value: number): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}

let bool1: boolean = contains([1, 2, 3, 4], 5); // should be false
let bool2: boolean = contains([1, 2, 3, 4], 3); // should be true
let bool3: boolean = contains([1, 2, 3, 4], 1); // should be true
```