# Activity: Intro to Events

An event is something that happens. Holidays, Birthdays,
and the end of the school year are all big events for anyone involved.

In JavaScript, ``||functions:functions||`` can be used to identify code
to run whenever these events occur.
This is very common in **event-driven programming**,
where much of the program comes down to responding to user input.

## Concept: ``||game:on game update||`` Event

The ``||game:on game update||`` block from previous courses is an **event**.
This event occurs every time the game updates,
just like a holiday might occur once every year.

Inside of the block, the code to run when the event occurs can be slotted in.
This group of code is called an **event handler**: when the **event** occurs,
it is **handled** by calling the code associated with it.

```sig
game.onUpdate(undefined);
```

In JavaScript, the same behavior applies: ``||functions:functions||`` are called
to assign **event handlers** to different **events**, and from that point on,
when the events occur, the **event handler** code runs.

When creating a new project in MakeCode @boardname@, a single event is
created to start in the JavaScript: the ``||game:game.onUpdate||`` event.
If a project does not include that event,
the snippet can be found under the ``||game:Game||`` category in the toolbox,
or using the autocomplete feature.

When adding code to run in the event,
it should be added in between the open and closing curly brace created in the event,
just like in ``||loops:loops||`` or ``||functions:functions||``.

### ~hint

The syntax for this will likely seem a bit weird to start.
More details on why the function call is written in the way it is
can be found in the [Anonymous Functions Appendix](/courses/csintro4/appendix/anonymous).

### ~

## Example #1: ``console.log`` Every Update

1. Review the code below
2. Identify what code is assign to run every game update
3. Recreate the code below in a new project
4. Identify how often the event occurs by opening the console simulator

```typescript
game.onUpdate(function () {
    console.log("Updating!");
});
```

![Logging Updates](/static/courses/csintro3/events/logging-update.gif)

In this example, the **event handler** assigned to the ``||game:on game update||``
event simply logged "Updating!" every update.

## Student Task #1: Keep Track

1. Start with the code from example #1
2. **Before** the event, create a variable ``||variables:count||``
that stores the number 0
3. **In** the event, add a line after ``console.log`` that
**increments** ``||variables:count||``
4. Change the message that is logged to include the count.
The first two messages logged should be the following:
    * ``Updating: 0``
    * ``Updating: 1``

## Concept: ``||sprites:Sprite||`` in ``||game:on game update||``

A common use for ``||game:on game update||`` is to interact with ``||sprites:Sprites||``.
For example, this can be used to handle cases where there need to be
checks on where a player is.

For example, in the previous course's
[multiplayer lesson](/courses/csintro2/logic/multiplayer),
the ``||game:on game update||`` event is used to keep track of
where the ball is on the screen.

## Example #2: Making Stars

1. Review the code below
2. Identify when a new ``||sprites:Star||`` is created
3. Notice the ``||sprites:star.SetFlag(SpriteFlag.Ghost, true)||``;
this is used to identify the ``||sprites:sprite||`` as a ``Ghost``
that will not interact with other ``||sprites:sprites||``

```typescript
namespace SpriteKind {
    export const Star = SpriteKind.create();
}

game.onUpdate(function () {
    let star = sprites.createProjectile(img`1`, 50, 0, SpriteKind.Star);
    star.y = randint(0, screen.height);
    star.setFlag(SpriteFlag.Ghost, true);
});
```

## Student Task #2a: Asteroids

1. Start with the code from example #2
2. In the ``||game:game.onUpdate||`` event,
create another projectile with an image of an Asteroid
3. Give the asteroid a ``||math:random||`` ``||sprites:vx||`` between -15 and 15,
and a ``||sprites:vy||`` of 50
4. Assign the asteroid a ``||math:random||`` ``||sprites:x||`` position
between 0 and ``||scene:screen.width||``

### ~hint

This task will create a **lot** of asteroids.
It might be tempting to use ``||loops:pause||`` in the event to limit
how often the stars and asteroids are created,
but this will not behave as expected.

The reason why this won't work appropriately,
as well as an approach to better handle this situation,
will be addressed in the next lesson.

### ~

## Student Task #2b: Sprite Motion

1. In a new project, create a ``||sprites:Sprite||`` with an image of a
person or animal
2. Set the ``||sprites:Sprite||``'s ``||sprites:x||`` position to 0
3. Create a ``||game:game.onUpdate||`` event
4. In the ``||game:game.onUpdate||`` event, change the ``||sprites:Sprite||``'s
``||sprites:x||`` position by 1

## Concept: Bouncing Off the Walls

Making a ``||sprites:Sprite||`` bounce around on the screen requires several
conditions to be checked regularly: in particular,
whether the ``||sprites:Sprite||`` is hitting each side of the screen.

The ``||game:on game update||`` event is perfect for handling this behavior,
as it will be run each time the game updates and the ``||sprites:Sprite||`` is moved.

## Example #3: Bouncing Left and Right

1. Review the code below
2. Identify the cases in which:
    * the ``||logic:if||`` section will run
    * the ``||logic:else if||`` section will run
    * neither of the above sections will run
3. Run the code and verify it behaves as expected

```typescript
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
}

let mySprite: Sprite = sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
mySprite.vx = 50;

game.onUpdate(function () {
    if (mySprite.x < 0) {
        mySprite.x = 0;
        mySprite.vx = -mySprite.vx;
    } else if (mySprite.x > screen.width) {
        mySprite.x = screen.width;
        mySprite.vx = -mySprite.vx;
    }
});
```

## Student Task #3: Bouncing All Around

![Animation of asteroid bouncing around wall](/static/courses/csintro3/events/meteor-wall-bounce.gif)

1. Start with the code from example #3
2. Before the event, give the asteroid an inital ``||sprites:vy||`` of 50
3. In the ``||game:game.onUpdate||`` event,
add an additional ``||logic:if ... else if||`` section after the first one
4. In this ``||logic:if ... else if||`` section,
    * if ``mySprite.y < 0``, set the ``||sprites:Sprite||``'s ``||sprites:y||``
    position to 0 and reverse it's ``||sprites:vy||``
    * if ``mySprite.y > screen.width``, set the ``||sprites:Sprite||``'s
    ``||sprites:y||`` position to ``||scene:screen.width||`` and reverse it's ``||sprites:vy||``

## What did we learn?

1. In your own words, explain what **events** are.
2. Explain what an **event handler** for your favorite holiday might do.
For example, the event might have different family members:
    * give each other presents
    * tell each other they care
    * make food
    * observe different occasions

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/events/intro-problems) for this
section to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Stars!

Use a ``||game:game.onUpdate||`` event to spawn ``||sprites:sprites||`` of kind ``Star``,
similar to the ones shown in example #2.
Make them a single pixel (or another small image, of your choice).

Use ``||math:Math.percentChance||`` and an ``||logic:if||`` statement to make create a ``Star``
with a 10% chance, rather than every single ``||game:game update||``

Set the stars so that they move from the **top** of the screen and to the **bottom**,
rather that from left to right
(you will need to switch ``screen.height`` to ``screen.width``).

Finally, set each ``star`` to have a ``z`` index of -1,
so that they show up **behind** all other ``||sprites:sprites||``.

Create a new namespace, ``stars``, to keep track of stars that will make up the background -
put the code related to the stars that you created into this new namespace.

### Stay in Bounds

Use ``||sprites:sprite.setStayInScreen(true)||`` in the ``ship``
``initialize`` function, so that the player cannot leave the screen.

### Solution

```typescript-ignore
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
    export const PowerUp = SpriteKind.create();
    export const Laser = SpriteKind.create();
    export const Star = SpriteKind.create();
}

/**
 * Creates and controls the stars in the game
 */
namespace star {
    game.onUpdate(function () {
        if (Math.percentChance(10)) {
            let star = sprites.createProjectile(img`1`, 0, 50, SpriteKind.Star);
            star.x = randint(0, screen.width);
            star.setFlag(SpriteFlag.Ghost, true);
            star.z = -1;
        }
    });
}

/**
 * Creates and controls the player's ship
 */
namespace ship {
    export let player: Sprite = initialize();

    /**
     * @returns a player sprite that moves with the directional buttons
     */
    function initialize(): Sprite {
        let sprite = sprites.create(spritesheet.player, SpriteKind.Player)
        controller.moveSprite(sprite, 80, 30);
        sprite.x = screen.width / 2;
        sprite.y = screen.height - 20;
        sprite.setStayInScreen(true);
        return sprite;
    }
}
```

### ~