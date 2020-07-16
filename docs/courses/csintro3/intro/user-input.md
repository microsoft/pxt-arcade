# Activity: User Input

Accepting user input in games is a great way to make interactive games,
in which players can name their characters or respond to questions posed by the game.

In @boardname@, the ``||game:ask for string with text||`` block allowed developers
to prompt users with a virtual keyboard to respond to their questions.
In JavaScript, this function is just as easy to use.

```sig
game.askForString("")
```

## Concept: Names

Saving user input in variables is useful, as it allows the values the user inputs
into the game to continue to exist - rather than just being ignored.

## Example #1: Storing Your Data

1. Review the code below
2. Identify what **type** of value is returned by ``||game:game.askForString||``
3. Identify what ``"Give me data!"`` in the function call does

```typescript
let userInput: string = game.askForString("Give me data!");
```

The ``||game:game.askForString||`` function prompts the user to input a string
with the phrase "Give me data!", and then the response the user gives is stored
in the variable ``||variables:userInput||`` as a ``||text:string||``.

## Student Task #1: Say my Name

1. Start with the code from example #1
2. Change the **prompt** to ask the user for their name (``"What is your name?"``)
3. After asking for their name, use ``||game:game.splash||`` to display their name
4. Add a short message to the ``||game:game.splash||`` to appear before
the name (``"hello, "``)
5. **Challenge:** ``||game:ask||`` the user for their favorite color.
Respond with a ``||game:game.splash||`` that repeats their favorite color back to them

## Example #2: Immediate Responses

![Animation of user inputting favorite food](/static/courses/csintro3/intro/ask-for-food.gif)

1. Review the code below
2. Identify how the response from ``||game:game.askForString||`` is used
3. Identify whether the response from the user is available to be used
again after the ``||game:game.splash||``

```typescript
game.splash("I like " + game.askForString("What food do you like?"));
```

In the above example, the response of ``||game:game.askForString||``
is used **without** storing the result in a variable.
The result will be used in the ``||game:game.splash||``,
but is inaccessible outside of that.

## Student Task #2: Asking Another Quick Question

1. Start with the code from example #2
2. Add another line containing a ``||game:game.splash||``
3. In the new ``||game:game.splash||``, ask the user what
they had for lunch with ``||game:game.askForString||``,
to ``||game:splash||`` it on the screen

## Example #3: Give Me a Word

1. Review the code below
2. Identify how the prompt used relates to how the value is logged using ``console.log``

```typescript
let animal: string = game.askForString("Give me an animal!");
console.log("Mary had a little " + animal);
```

## Student Task #3: Ad Libbing

1. Create a short story that is at least **5** sentences long
2. In each sentence, pick out one or two words that are important to the story
3. Remove those words from the sentence, and replace them with the part of speech
that relates to it (noun, adjective, and so on)
4. After you have chosen words for every sentence, use ``||game:game.askForString||``
to prompt the user to give you words to replace the original with, and store each in a variable
5. After asking for all the words, create a string for each sentence with the words replaced
6. Use ``console.log`` to print each sentence in order

Here's one example sentence to show each step:

### ~hint

### Step 1: Making a sentence

> My friend Bob told me their room was clean.

### ~

### ~hint

### Step 2: Choosing words

> "Bob" and "clean" are both important words to the story

### ~

### ~hint

### Step 3: Replace the words

> My friend **NAME** told me their room was **ADJECTIVE**.

### ~

### ~hint

### Step 4: Prompting the user

```typescript-ignore
let name1: string = game.askForString("Give me a Name");
let adjective1: string = game.askForString("Give me an Adjective");
```

### ~

### ~hint

### Step 5: Creating a sentence

```typescript-ignore
let name1: string = game.askForString("Give me a Name");
let adjective1: string = game.askForString("Give me an Adjective");
let sentence1: string = "My friend " + name1
                        + " told me their room was " + adjective1 + ".";
```

### ~

### ~hint

### Step 6: Output to the Console

```typescript
let name1: string = game.askForString("Give me a Name");
let adjective1: string = game.askForString("Give me an Adjective");
let sentence1: string = "My friend " + name1
                        + " told me their room was " + adjective1 + ".";

console.log(sentence1);
```

### ~

## What did we learn?

1. Explain how accepting user input can make your games more interesting and interactive.
2. What does storing the value in a variable do that using it directly in a
``||game:game.splash||`` not allow?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/intro/user-input-problems) for this section to
review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Ask for a Name

Ask the user for their name with ``||game:game.askForString||``,
so that the game can use their name to personalize messages to them in the future.

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

let intro: string = "Hello! This is my Space Game!";
game.splash(intro);
let name: string = game.askForString("What is your name?");

let x: number = 80;
let y: number = 100;
```

### ~