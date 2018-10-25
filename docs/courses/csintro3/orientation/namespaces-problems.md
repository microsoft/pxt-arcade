# Problem Set: Namespaces

This section contains a number of selected problems for the Namespaces section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: What does this do?

```typescript-ignore
for (let i = 0; i < 10; i++) {
    console.log("" + i);
}
```

This code prints out the integers `0` through `9`, but it can be kind of tricky to figure that out at a glance. Add a comment above the ``||loops:for||`` loop that specifies that this is what the loop does.

## Problem #2: How's the weather

Create a `weather` namespace that has a few variables that contain information about the weather today.

An example of information to store:

|               |               |
|-----------    |---------------|
|weather        |"Rainy"        |
|precipitation  |90             |
|temperature    |56             |
|windSpeed      |5              |

When using numbers to represent measured data, make sure to use a comment to describe the variable and what units are used.

Inside the weather namespace, `console.log` a sentence describing the weather today.

## Problem #3: What about Barry

Create a `barry` namespace that has a few variables that contain information about Barry.

Make sure to include the following information:

|           |               |
|-----------|---------------|
|name       |"Barry"        |
|age        |43             |
|hometown   |"Redmond, WA"  |


From outside of the `barry` namespace, `console.log` some text that uses these variables.

## Problem #4: Using constants

Inside the ``||math:Math||`` namespace, there are a few useful constants related to Math. Use the ``||math:Math||`` namespace to ``||game:game.splash||`` the value of ``||math:pi||`` to the screen.

### ~hint

The ``||math:Math||`` namespace is one of the very few namespaces that starts with a capital letter. The standard convention is use a single word all lowercase.

### ~

## Problem #5: A few of my favorite things

Create a namespace called `favorites`. Inside, define at least 3 variables that contain your favorite things. Some examples are

* Favorite color
* Favorite flavor of ice cream
* Favorite song
* Favorite number
* Favorite food
* Favorite movie

Right above the namespace, use a multiline comment that describes what the namespace contains.

Outside of the namespace, `console.log` a sentence containing one of the variables defined in `favorites`. 

Anywhere in your code, hover your mouse over where you use the namespace `favorites` and see that your description shows up.