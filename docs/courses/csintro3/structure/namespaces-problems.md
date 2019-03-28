# Problem Set: Namespaces

This section contains a number of selected problems for the Namespaces section.

It is recommended that you review the problems, and complete a few before moving
on to the next section.

## Problem #1: What Does *This* Do?

The following code snippet prints out numbers from 10 down to 1,
but this can be kind of tricky to figure that out at a glance.

Add a comment above the ``||loops:for||`` loop that specifies that this is what the loop does.

```typescript-ignore
for (let i = 0; i < 10; i++) {
    console.log("" + (10 - i));
}
```

### ~hint

### Challenge

Change the loop structure above so that the same output can be achieved with
just ``console.log("" + i);`` instead of ``console.log("" + (10 - i));``:
this would be much more readable, and likely would not need a comment.

### ~

## Problem #2: How's the weather

Create a ``weather`` namespace that contains variables that store information
about the current weather.
Include at least **three** variables in the namespace.

For example, this might contain the following variables:

| Variable                          | Current Value |
| :-------------------------------- | :------------ |
| condition                         | "Cloudy"      |
| chance of rain (percentage)       | 90            |
| temperature (degrees Fahrenheit)  | 56            |
| wind speed (miles per hour)       | 5             |

<br />

Include a short comment for each variable describing what the variable represents.

Outside of the ``weather`` namespace,
``||game:game.splash||`` a sentence describing the current weather.

### ~hint

Variables need to be ``export``ed to make them accessible **outside** of the namespace.

### ~

## Problem #3: What About Barry

Create a ``barry`` namespace that has a few variables that contain information about Barry.

Make sure to include the following information:

| Variable      | Current Value |
| :------------ | :------------ |
| name          | "Barry"       |
| age           | 17            |
| weight (lb)   | 1200          |
| favorite food | raw fish      |
| status        | "Not a bear"  |

<br />

From outside of the ``barry`` namespace,
``console.log`` a description of Barry using the variables in the ``barry`` namespace.

## Problem #4: Using Values

Inside the ``||math:Math||`` namespace, there are a few useful values related to Math.
Use the ``||math:Math||`` namespace to ``||game:game.splash||``
the value of ``||math:pi||`` to the screen.

### ~hint

The ``||math:Math||`` namespace is one of the very few namespaces that starts
with a capital letter.
The standard convention for naming namespaces is to have the name be in lowercase letters.

### ~

## Problem #5: A Few of My Favorite Things

Create a ``favorites`` namespace. Inside,
define at least **three** variables that contain information about your favorite things.

For example, it might store:

* Your favorite color
* Your favorite flavor of ice cream
* Your favorite song
* Your favorite number
* Your favorite food
* Your favorite movie

Right above the namespace,
include a multiline comment that describes what the namespace contains.
Make sure that this is immediately above the ``favorites`` namespace -
no other code between the comment and the namespace

Outside of the namespace, ``console.log`` a sentence containing at least
two of the variables defined in ``favorites``.

### ~hint

Hover over the ``favorites`` namespace somewhere in your code.
The comment you wrote before for the namespace should show up on the screen.

### ~
