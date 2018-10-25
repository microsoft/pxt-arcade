# Activity: On Game Update Interval

In the previous lesson, the ``||game:on game update||`` event was used to handle events that should occur every time the game updates.

However, not all behaviors should necessarily occur every time the game updates. The ``||game:on game update every||`` event can be used to handle these types of behaviors.

## Concept: Keeping Track of Time

The ``||game:game.onUpdateInterval||`` event is similar to the ``||game:game.onUpdate||`` event, except it will only occur  once per given **period**.

```sig
game.onUpdateInterval(500, undefined);
```

## Example #1: Visualizing the Rate

1. Review the code below
2. Identify the **period** of the event
3. Identify how often the ``||variables:a||`` will be logged to the console

```typescript
let a: number = 0;

game.onUpdateInterval(100, function () {
    console.logValue("a", a);
    a++;
});
```

## Student Task #1: Comparing Periods

1. Start with the code from example #1
2. Create two more variables at the start of the code: ``||variables:a||`` and ``||varables:b||``. Assign each the value 0
3. Create **two** more ``||game:game.onUpdateInterval||`` events: one with a period of 500 ms, and the other with a period of 1000 ms
4. In the event with a period of 500 ms, use ``console.logValue`` to log the value of ``||variables:b||``, and then increment the value
5. In the event with a period of 1000 ms, use ``console.logValue`` to log the value of ``||variables:c||``, and then increment the value

### ~hint

``||game:on game update||`` and ``||game:on game update interval||`` both allow for multiple **event handlers**, so calling the function multiple times and assigning different event handlers will work appropriately.

However, some other events discussed in future lessons will **not** allow for this. Instead, these functions might **overwrite** the old event handler when a new one is assigned.

### ~

## Concept: ``||game:game.onUpdateInterval||`` to Create Projectiles

The ``||game:game.onUpdateInterval||`` event being kept to a consistent pace makes it ideal for handling behavior like the creation ``||sprites:projectiles||``.

This allows for ``||sprites:sprites||`` that are created regularly, without overwhelming the player or the screen.

## Example #2: Fewer Stars

1. Review the code below
2. Identify the **period** of the event

```typescript
enum SpriteKind {
    Star
}

game.onUpdateInterval(250, function () {
    let star = sprites.createProjectile(img`1`, 50, 0, SpriteKind.Star);
    star.y = Math.randomRange(0, scene.screenHeight());
});
```

## Student Task #2: Asteroids 2.0

1. Start with the code from example #2
2. Create a second ``||game:game.onUpdateInterval||`` event, with a period of 750 ms
3. In the new ``||game:game.onUpdateInterval||`` event, create a projectile with an image of an Asteroid
4. Give the asteroid a ``||math:random||`` ``||sprites:vx||`` between -15 and 15, and a ``||sprites:vy||`` of 50
5. Assign the asteroid a ``||math:random||`` ``||sprites:x||`` position between 0 and ``||scene:scene.screenWidth()||``

## What did we learn?

1. In your own words, explain the difference between the ``||game:game.onUpdate||`` event and the ``||game:game.onUpdateInterval||`` event.
2. Explain why it can be helpful to be able to create multiple **event handlers** for a given **event**?

### ~hint

## Sidenote: Why not ``||loops:pause||`` in ``||game:on game update||``?

The behavior of the ``||game:on game update interval||`` event might seem like an easy thing to address without making an extra type of event: why not just ``||loops:pause||`` right before the end of the event handler? This approach could be used to limit the rate at which stars are created, like in the snippet below.

```typescript
enum SpriteKind {
    Star
}

game.onUpdate(function () {
    let star = sprites.createProjectile(img`1`, 50, 0, SpriteKind.Star);
    star.y = Math.randomRange(0, scene.screenHeight());
    pause(250);
});
```

Run the code above and you'll likely see an issue: the game starts to hang between the creation of ``||sprites:Star||``s, resulting in inconsistent motion as the game only updates once per second.

This occurs because the event occurs as part of the game update; by calling ``||loops:pause||``, the **entire** game will pause. This behavior will also occur if ``||loops:pause||`` is used in ``||game:on game update interval||``. For this reason,it is important to pay attention to the side effects of using any event.

### ~