# Activity: Assignment Operators

**Assignment Operators** are assignments that also perform an operator on the variable.
They are used in JavaScript to modify the value.

## Concept: ``||variables:change by||``

The ``||variables:change by||`` block was very commonly used to modify the value a
variable was assigned to when programming in Blocks.

This can be accomplished in JavaScript by using the variable itself in the equation:

```typescript-ignore
num = num + 5;
```

This works because the equation on the right side of the assignment operator
is evaluated first,
and the result of that equation is assigned to the variable on the right side.

For example, if ``||variables:num||`` stored ``4`` before the code above,
the right hand side of the equation would first be evaluated to ``9``,
and then ``||variables:num||`` would be **reassigned** ``9`` as it's new value.

Modifying a value in this way is a very common task, so JavaScript
and other languages introduce the ``+=`` operator,
which will **add** the value on the right side to the value
currently stored on the left side.

Using the ``+=`` operator, the example code above can also be written as

```typescript-ignore
num += 5;
```

This process of condensing the expression extends to all operators, so...

* ``num -= 5;`` is equivalent to ``num = num - 5;``
* ``num *= 5;`` is equivalent to ``num = num * 5;``
* ``num /= 5;`` is equivalent to ``num = num / 5;``

These are called **Assignment Operators**, like ``=``.

## Example #1: Seconds in an Hour

1. Review the code below
2. Observe how assignment operators are used to modify the ``||variables:seconds||`` variable
3. Identify the two values that are ``||game:splashed||``

```typescript
let seconds: number = 1;
seconds *= 60;
game.splash(seconds + " seconds in a minute");
seconds *= 60;
game.splash(seconds + " seconds in an hour");
```

## Student Task #1: Seconds in a Week

1. Start with the code from example #1
2. After the second ``||game:game.splash||``, use an **assignment operator**
to make ``||variables:seconds||`` store the number of seconds in a day
3. ``||game:Splash||`` the new value of ``||variables:seconds||``.
Make sure to include a description of the value to match the previous values
that were ``||game:splashed||``
4. Use another **assignment operator** to make ``||variables:seconds||``
store the number of seconds in a week
5. ``||game:Splash||`` the new value of ``||variables:seconds||``,
along with it's corresponding description
6. **Challenge:** repeat this process for both the seconds in a month,
and seconds in a year

### ~hint

For the challenge, you can use an estimate of 4 weeks per month and 12 months per year.

### ~

## Concept: Increment and Decrement

In JavaScript, it is very common to add or subtract one from a value:
for example, to count the number of times a button was pressed, or the index in a loop.

In JavaScript, there are several **Assignment Operators** that can do this.
For example, both  ``num = num + 1;`` and ``num += 1;`` will result in
``||variables:num||`` being incremented by 1.

However, because this is such a common task, there is an even shorter way to write it.
This is done using the **Increment Operator**, represented by two plus signs.
``num++;`` is equivalent to the two expressions above.

Similarly, the **Decrement Operator** is represented by two minus signs,
meaning ``num = num - 1;`` is the same as both ``num -= 1;`` and ``num--;``.

## Example #2: Incrementing Values

1. Review the code below
2. Identify how the **increment operator** is used to change the value of
``||variables:myNumber||``

```typescript
let myNumber = 5;
game.splash(myNumber + " is too low!");
myNumber++;
myNumber++;
game.splash(myNumber + " is too high!");
```

## Student Task #2: Just Right

1. Start with the code from example #2
2. Use the **decrement operator** to lower of ``||variables:myNumber||`` by 1
3. ``||game:Splash||`` ``||variables:myNumber||`` with the description " is just right!"

## Concept: Appending Strings

The **Assignment Operator** ``||math:+=||`` can also be useful when adding to strings.

Values can be **appended** using the ``||math:+=||`` operator.
For example, the following snippet:

```typescript
let phrase: string = "hello";
phrase = phrase + " world";
```

can also be written:

```typescript
let phrase: string = "hello";
phrase += " world";
```

This allows for strings to be "built" by adding pieces to them as necessary.

## Example #3: Food Order

1. Review the code written below
2. Identify how the ``||math:+=||`` operator is used to build up an ``||variables:order||`` string

```typescript
let order: string = "I would like to eat ";
let food: string = game.askForString("What would you like to eat?");
order += food;
order += ". I would also like to drink ";

let drink: string = game.askForString("What would you like to drink?");
order +=  drink;
order +=  ".";

game.splash(order);
```

## Student Task #3: Dessert

1. Copy the code from the example above
2. Modify the code so that it also prompts the user "What dessert would you like"
3. Append to ``||variables:order||`` the sentence " For dessert, I would like "
followed by the dessert the user requested
4. Append a "." to end the sentence
5. **Challenge:** instead of storing the variables ``||variables:food||``,
``||variables:drink||``, and ``||variables:dessert||``, append the result of
``||game:game.askForString||`` directly to ``||variables:order||``

## What did we learn?

1. Explain how the different increment, decrement,
and assignment operators can be useful for modifying a number ``||variables:variable||``.

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/intro/operators-problems) for this section
to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Personal Message

Modify the code so that the user is prompted for their name **before** the
``||game:splash screen||``, and then use their name in the introduction.
Use the **string append** operator to build up the introduction

### Captain Whoever

We've decided to make the game into a space adventure, so the player should have a title.
Before asking their name, start with the title "Captain ",
and then just append the name they enter onto the name;
this way, they will be addressed as Captain whenever their name is used.

### Solution

```typescript
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
}

namespace asteroids {
    sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });

    game.onUpdateInterval(1500, function () {
        sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
    });

    function setMotion(asteroid: Sprite) {
        asteroid.vx = randint(-8, 8);
        asteroid.vy = randint(35, 20);
    }

    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = randint(edge, screen.width - edge);
        sprite.y = 0;
    }
}

let name: string = "Captain ";
name += game.askForString("What is your name?");

let intro: string = "Hello, ";
intro += name;
intro += "! This is my Space Game!";
game.splash(intro);

let x: number = screen.width / 2;
let y: number = screen.height - 20;
```

### ~