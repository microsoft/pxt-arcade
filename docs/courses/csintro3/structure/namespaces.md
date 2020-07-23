# Activity: Namespaces

As the code we write starts to get to be dozens of lines long (or more),
it is important to be able to make sure that the code remains easy to follow and understand.

In this lesson, two ways to approach this issue will be introduced:
namespaces, which allow code to be separated into discrete sections,
and comments, which allow for code to be documented for anyone who will
read it in the future.

## Concept: Commenting Your Own Code

Sharing code in @boardname@ allows for the code you write to be used in other projects -
whether those projects are your own, your friends, or anyone else you give the link to.

There are still some important topics to cover before the code we write can be written
in a way that is easy to use without causing issues.
One of those issues is making the code easy to understand,
so that others can use it without having to ask questions about every detail of the code.

Comments allow developers to leave **documentation** for those reading their code:
whether that be someone else who's never seen it before, or themselves in a year or two.

In JavaScript, there are two different formats for comments:

```typescript
// Single line comments, like this

game.splash("//hello!//") // Another single line comments

/**
 * And multiline comments,
 * like this
 */

/* Also works with a single line */
```

When a line contains two slashes in a row (``//``) that are not in a string,
that signifies that the line is finished,
and anything else on that line is simply a comment -
something for humans to read, that the computer will otherwise ignore.

Similarly, multiline comments (which start with ``/*`` and end with ``*/``)
allow for sections of text that the computer will ignore.
Anything between the start and end will not be run by the program,
and only intended as an annotation for the user.

In this course, multiline comments will use the style shown below,
so that it is easier to identify where the comments start and end.

```typescript
/**
 * The course uses this style of comment;
 * the asterisks that start these lines are not required,
 * but do make it easier to follow what exactly the comment includes
 */
```

## Concept: Namespaces

Namespaces are used to break up code into distinct topics.

Breaking up the code into smaller sections (namespaces)
allow for several issues to be solved:

1. It can be easier to identify where a particular feature is implemented,
as the code related to that feature can be kept in a single location
2. The different features can work in their own area,
with their own variables that are not needed elsewhere in the code
3. If multiple people are writing code for the same project,
the code can be separated into the different tasks they are working on,
without having to worry about variable names conflicting

Creating a namespace is fairly simple: the ``names`` namespace
is created with the following snippet

```typescript
namespace names {
    // Content in the `names` namespace goes here
}
```

## Example #1: Creating Names

1. Review the code below
2. Identify the **namespace** the code is in
3. Run the code; is anything different from if the namespace was removed?

```typescript
namespace names {
    let bill: string = "Billy";
    let amy: string = "Amelia";

    game.splash("Hello " + bill);
    game.splash("Hello " + amy);
}
```

The behavior in this case is no different from if the values were placed
outside the namespace; however,
the variables ``||variables:bill||`` and ``||variables:amy||``
are not accessible outside the ``names`` namespace

## Student Task #1: Name Length

1. Start with the code from example #1
2. Add another namespace, ``namelength``
3. In the ``namelength`` namespace, assign ``||variables:bill||`` the number 5,
and ``||variables:amy||`` the value 6
(these numbers represent the length of their full names)
4. Log to the console both values
5. Run the code, and verify that it runs without any problem
(even though there are now two variables in each namespace with the same name)

## Concept: Export

By default, any variables declared inside of a namespace are only accessible
within that namespace. This is helpful because it allows for variables to be
"hidden" in the namespace if they are only needed there - this way, only the
values that are useful outside of the namespace are accessible.

The ``export`` keyword can be used to make the variables accessible outside
of the namespace.

After ``export``ing the variable, it can be referenced outside of the namespace
by adding the namespace and a dot ``.`` before the variable name;
that is, ``namespaceName.variableName``.

## Example #2: Exporting Names

1. Review the code below
2. Identify how the variables are made accessible outside of the namespace
3. Identify how the variables referenced outside of the namespace

```typescript
namespace names {
    export let bill: string = "Billy";
    export let amy: string = "Amelia";
}

game.splash("Hello " + names.bill);
game.splash("Hello " + names.amy);
```

## Student Task #2: Export Names Length

1. Start with the code from task #1, and add in the changes from example #2
2. Export both variables in ``nameslength``
3. Change the ``||game:game.splash||``es so that they will splash the variables
for each name from both the ``names`` and ``namelength`` namespaces in the
following messages:
    * "Billy has 5 letters"
    * "Amelia has 6 letters"

## What did we learn?

1. Why is the ``export`` keyword used within namespaces?
2. Why are comments useful as code starts to get complex?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/structure/namespaces-problems) for this section
to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Separate Sprite Images

As the game gets increasingly complicated, it becomes increasingly important
to separate out the different portions of the code.
One portion that can be helpful to separate are the images for the different
``||sprites:Sprites||``; by keeping them in a different namespace,
there can be a single location for all the images,
without interrupting the rest of the code.

Create a new namespace, ``spritesheet``,
which will store all of the images used in this game.
In it, create and export three images
(the type for images in @boardname@ is ``||images:Image||``):

* ``||variables:player||``, which stores the
``||images:Image||`` for the player's space ship
* ``||variables:enemy||``, which stores the
``||images:Image||`` for the enemy space ship
* ``||variables:asteroid||``, which stores the
``||images:Image||`` for the asteroids

### The ship and enemy Namespaces

It's time to create a namespace for the player's space ship.
Create a new namespace, ``ship``, and move the code related
to the player's ship into that namespace: this should include the code that:

* Creates the ``||variables:player||`` ``||sprites:Sprite||``
* Sets the ``||variables:player||``'s initial ``||sprites:x||`` and
``||sprites:y||`` positions
* Makes the ``||variables:player||`` be controlled with the
directional buttons

After moving the code, ``export`` ``||variables:player||``,
so that it will be accessible outside of the ``ship`` namespace.
Make sure to update any sections that use the ``||variables:player||``
to instead refer to ``ship.player``.

Create one last new namespace, ``enemy``,
which contains the code relating to the ``||variables:enemy||``.

### Documentation

Document the game a bit by adding a short comment to each of the
three namespaces added in this section: ``spritesheet``, ``ship``, and ``enemy``.
These comments should give an indication of what each namespace contains.

For example, a comment for the ``asteroids`` namespace might look like the following:

```typescript-ignore
/**
 * Creates and controls the asteroids within the game
 */
```

### Solution

```typescript
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
}

/**
 * Contains the images used in the game
 */
namespace spritesheet {
    export let player: Image = img`
        . . . . 8 . . . .
        . . . 8 8 8 . . .
        . . . 8 1 8 . . .
        . . 2 8 1 8 2 . .
        . 2 2 8 8 8 2 2 .
        2 2 2 8 8 8 2 2 2
        . . . 5 . 5 . . .
    `;

    export let enemy: Image = img`
        5 5 . . . . 5 5
        7 7 7 7 7 7 7 7
        . 9 9 7 7 9 9 .
        . 7 7 7 7 7 7 .
        . . . 9 9 . . .
    `;

    export let asteroid: Image = sprites.space.spaceAsteroid0;
}

/**
 * Creates and controls the asteroids within the game
 */
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

/**
 * Creates and controls the player's ship
 */
namespace ship {
    export let player = sprites.create(spritesheet.player, SpriteKind.Player);

    controller.moveSprite(player, 80, 30);
    player.x = screen.width / 2;
    player.y = screen.height - 20;
}

/**
 * Creates and controls the enemies in the game
 */
namespace enemy {
    let enemy = sprites.create(spritesheet.enemy, SpriteKind.Enemy);
    enemy.x = ship.player.x;
    enemy.y = 20;
    enemy.vy = 10;
}

let name: string = "Captain ";
let playerName: string = game.askForString("What is your name?");

if (playerName == "myName!") {
    playerName += " 2";
}

name += playerName;

let intro: string = "Hello, ";
intro += name;
intro += "! This is my Space Game!";
game.splash(intro);

for (let i = 0; i < 10; i++) {
    sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
    pause(250);
}
```

### ~