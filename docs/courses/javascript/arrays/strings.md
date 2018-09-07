# Array Methods and Arrays of Strings

Beyond directly referencing values within an array, array methods and functions can also be used to interact with arrays in a consistent and friendly manner.

## Array Push and Pop

`array.push(value)` and `array.pop()` provide an easy and consistent way to interact with an array, by interacting only with the last element. These behave like another common data structure, known as a "Stack," in which you can only ever interact with the last element put into the structure.

This is similar to a real life stack of chairs - when cleaning a room, you stack (`push`) the chairs on top of one another, and when you want to set out more chairs for an event, you remove (`pop`) the last chair that was pushed into the stack.

## Push

In arrays, `push` simply adds the element to the next available location. This means that the following two pieces of code will have the same end result

```typescript
let arr: string[] = ["hello", "goodbye", "arcade"];
arr[arr.length] = "new!";
```

```typescript
let arr: string[] = ["hello", "goodbye", "arcade"];
arr.push("new!");
```

The main benefit of using `push` here would be to enhance readability; other developers can immediately see at a glance that you're just adding an element to the end of an array when using push.

## Pop

`pop` is used to remove and return the last element of an array. The following example will output the contents of the array (starting from the back), and result in an empty array.

```typescript
let arr: string[] = ["hello", "goodbye", "arcade"];
for (let i = 0; i < 3; i++) {
    game.splash(arr.pop());
}
game.splash(arr.length + "");
```

(Probably return to an example from the course1/arrays/string lesson, and using an "array of strings as script" example)