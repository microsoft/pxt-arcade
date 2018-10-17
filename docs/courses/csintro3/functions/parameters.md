# Using Parameters

Functions are a great way to make code less redundant. Code that is too redundant is often hard to read and is more tedious to edit. Parameters allow functions to be more versatile in that they allow for different input values that can alter the effects of a function.

## Example #1: Hello World

Up until this point, every time we call a function, it will do the same thing. For example:

```typescript
function printHello() {
	console.log("Hello");
}

function printWorld() {
	console.log("World");
}
printHello();
printWorld();
```
We see that when `printHello` is called, the word "Hello" is printed, and when `printWorld` is called, "World" is printed.

Since both of these functions do very similar tasks, it would be nice if they could be modified such that they were combined into a single function. That way, if we wanted to change the behavior for one, it would change it for all. For example, if we wanted to use ``||game:game.splash||`` instead of `console.log`, we would need to change every function.

We can use what are known as **parameters** to fix this by writing one function that changes behavior based on input that we specify.

```typescript
function someFunction(nameOfParameter: parameterType) {

}
```

In this case, `nameOfParameter` is the name of some value that can be used in the function and `parameterType` is the type of that value.

We can call this function using the syntax

```typescript-ignore
someFunction(someValue);
```

Looking back at our Hello World example, we can alter our function such that it takes some input and will behave differently. 

```typescript
function printMessage(msg: string) {
	console.log(msg);
}

printMessage("Hello");
printMessage("World");
```
This way is much easier to read and modify.


## Student Task #1: 

Write a function named `greet` that takes in a string `firstName` and prints to the console a greeting of some sort that uses both parameters. Example: `Hey John!`.

### ~hint

Functions can also accept multiple parameters as input if you separate parameters with a comma. However, the number of parameters in the function header must match the same number of parameters in the function call.

### ~

## Example #2: Choose between

```typescript
function choose(choice1: string, choice2: string) {
	if (Math.percentChance(50)) {
		console.log("I think " + choice1 + " is the better choice");
	} else {
		console.log("I think " + choice2 + " is the better choice");
	}

}
choose("cats", "dogs");
choose("pizza", "tacos");
choose("Summer", "Winter");
```

This is a function that takes in two choices and will randomly choose one of them to be the "better" choice. Observe how the function takes in two parameters and that each function call has two parameters as well.

## Student Task #2: Greeting

Modify the greet function Task #1 so that it takes in two strings: `firstName` and `lastName`. This time, the function should print to the console a greeting of some sort that uses **both** parameters. Example: `Hello John Doe`.

## Example #3a: Capslock

Parameters don't have to just be strings. They can be any type.

```typescript
function printHello(n: number, capslock: boolean) {
    for (let i = 0; i < n; i++) {
    	if (capslock) {
    		console.log("HELLO");
    		console.log("WORLD");
    	} else {
    		console.log("hello");
    		console.log("world");
    	}
    }
}

printHello(3, true);
printHello(7, false);
```

## Example 3b: Follow the leader
Including ``||sprites:sprites||`` work too!

```typescript
function follow(follower: Sprite, leader: Sprite) {
    let diffX = leader.x - follower.x;
    let diffY = leader.y - follower.y;
    follower.vx = diffX;
    follower.vy = diffY;
}
```

## Student Task #3: 

Create a function that takes in two parameters, a ``||sprites:sprite||`` with the name `sprite` and a boolean with the named `left`.
Make it so that if `left` is true, the sprite will move 10 units to the left, otherwise it will move 10 units to the right.


## What did we learn?

1. What is the proper syntax for using a parameter? What about using multiple parameters?
2. How do you specify the type of a parameter?
3. What does a function call look like?
4. What types can be used as parameters?