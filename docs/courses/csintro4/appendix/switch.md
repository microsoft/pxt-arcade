# Advanced Topics: Switch Statement

When implementing powerups in the case study game,
the same ``||sprites:Kind||`` was used to maintain the
same behavior for all the different powerups.
The PowerUp type was kept seperate, and obtained using the ``powerUps.getType``
function, which took in a sprite and returned the type of power up that it represented.

This structure simplifed the behavior of the power ups -
as they shared behavior outside of the bonus they gave the player -
but required a long chain of ``||logic:if ... else if||`` checks in the event,
with each ``||logic:if condition||`` simply checking the type returned by
``powerUps.getType`` against a different type of power up.

To more appropriately handle a situation like this, the ``switch`` statement can be used.
This accepts a value, uses that value to select an appropriate ``case`` to run.

## Concept: Switch-Case Syntax

The ``switch`` statement takes a value and checks that value against a series of ``case``s.
Combined, this is often called a ``switch case``,
as neither statement is particularly useful without the other.

```typescript-ignore
switch (valueToCheck) {
    case FirstCase: {
        // code to run for FirstCase
        break;
    }
    case SecondCase: {
        // code to run for SecondCase
        break;
    }
    // repeat for as many cases as necessary
}
```

In this case, ``valueToCheck`` is the value that the switch case will match the case for:
in the case study, this would be the ``type`` of the power up.
``FirstCase`` and ``SecondCase`` are two of the ``cases`` being checked:
these would be two of the different ``PowerUpType``s,
like ``PowerUpType.Health`` and ``PowerUpType.Score``. 

## Example #1: What Number?

1. Review the code below
2. Identify which case will run
3. Identify how this would be written using ``||logic:if||`` and ``||logic:else||``

```typescript
let myNumber: number = 2;
switch (myNumber) {
    case 1: {
        game.splash("My number is 1!");
        break;
    }
    case 2: {
        game.splash("My number is 2!");
        break;
    }
    case 3: {
        game.splash("My number is 3!");
        break;
    }
}
```

## Student Task #1: Make the Switch

1. Start with the code below
2. Convert the ``||logic:if ... else if||`` section to use ``switch case``

```typescript
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1);
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() == 0) {
        game.splash("You have no points!");
    } else if (info.score() == 1) {
        game.splash("You've got one point!");
    } else if (info.score() == 2) {
        game.splash("Two points!");
    }
})
```

## Concept: Fall Through and Default Case

The ``break;`` statement at the end of each case is used to stop running the
``switch case``, but is optional.
Without it, the switch case will continue you "fall through" the cases until
it reaches the end of the final ``case`` or a ``break`` statement.
This can be used to handle multiple cases in the same way.

Additionally, a ``default`` case can be added, which will match any value.
This can be thought of as an ``||logic:else||`` branch for the
``||logic:if .. else if||`` blocks.

## Example #2: Using Fall Through and Default

1. Review the code below
2. Identify how the "fall through" is used to combine the cases for 1, 2, and 3
3. Identify how the "fall through" is used with cases 4 and 5
4. Identify how the default case is used for all other values

```typescript
let myNumber: number = 2;
switch (myNumber) {
    case 1:
    case 2:
    case 3: {
        game.splash("My number is one, two, or three!");
        break;
    }
    case 4: {
        game.splash("My number is four, and the next number is");
    }
    case 5: {
        game.splash("five!");
        break;
    }
    default: {
        game.splash("My number is something else :(.")
    }
}
```

## Student Task #2: More Options

1. Start with the code from task #1
2. Add cases for 3, 4, and 5. These should ``||game:splash||``
"My number is three, four, or five!"
3. Add a default case that will ``||game:splash||``
"That is a lot of points!"

## Concept: Strings

Strings can also be used as values in the switch case.

### ~hint

In JavaScript, it is typically best to use the switch case with only numbers and strings.
For other values, they are compared based of strict equality -
that is, that the values occupy the same location in memory -
which is rarely the intended behavior.

### ~

## Example #3: Switch Mystery

1. Review the code below, and copy it into a new project
2. Before running the code, identify what the expected output is
for each of the three ``||variables:mysteryInput``s
3. Identify how the switch case is used to assign ``||variables:output||`` different values
4. Uncomment the first commented assignment of ``||variables:mysteryInput||``
and run the code.
Check the code against your expected output from step 2
5. Repeat step 4 for the second and third assignments of ``||variables:mysteryInput||``

```typescript
let output: string = "";
let mysteryInput = "";
// mysteryInput = "a";
// mysteryInput = "c";
// mysteryInput = "z";

switch (mysteryInput) {
    case "a": {
        output += "Hello! ";
    }
    case "b": {
        output += "I'm here!";
        break;
    }
    case "c": {
        output += "I'm actually here.";
        break;
    }
    default: {
        output += "Somewhere else";
    }
}

game.splash(output)
```

## Student Task #3: How are You?

1. Start with the code snippet below
2. Convert the ``||logic:if ... else if||`` section to use ``switch case``

```typescript
let input: string = game.askForString("How are you?");

if (input == "good") {
    game.splash("That is good!");
} else if (input == "okay") {
    game.splash("Good enough!");
} else if (input == "bad") {
    game.splash("That's too bad!");
} else if (input == "I don't know" || input == "Something else") {
    game.splash("Okay.");
} else {
    game.splash("I don't understand.");
}
```