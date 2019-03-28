# Problem Set: Projectiles

This section contains a number of selected problems for the Projectiles section.

It is recommended that you review the problems, and complete a few before moving
on to the next section.

## Problem #1: Enemy Movement

In games, ``||sprites:Enemy||`` ``||sprites:sprites||`` will often need to
move on their own to make the game harder for the player.

Create a ``||sprites:projectile||`` with the ``||sprites:kind||``
``||sprites:Enemy||``, and set it's ``||sprites:vx||`` to be 100.

Create another ``||sprites:projectile||`` with the ``||sprites:kind||``
``||sprites:Enemy||``, and set it's ``||sprites:vx||`` to be -100.

Create a unique image for each ``||sprites:sprite||``,
and pay attention to where they start and how they move.

## Problem #2: Ten of Me

Use a ``||loops:for||`` loop to create **ten** ``||sprites:projectile||``
``||sprites:sprites||`` with an image of your choice.

Give each ``||sprites:sprite||`` a velocity to make it move to the right.
Set their ``||sprites:y||`` position to **16** times the loop variable
``||variables:i||``,
and make sure the ``||sprites:sprites||`` start on the
left side of the screen.

``||loops:Pause||`` for one second between each iteration of the loop
so the ``||sprites:sprites||`` do not all appear at once.

## Problem #3: ShowPhysics

Create a hypothesis for what the ``||sprites:ShowPhysics||``
``||sprites:SpriteFlag||`` does from it's name.
After creating your hypothesis,
test it by creating a small game with a ``||sprites:Sprite||`` that has
the flag turned on.

Make sure to test a variety of different things;
turning on effects,
moving the ``||sprites:sprite||`` around the screen,
giving it different ``||sprites:x||`` and ``||sprites:y||`` positions,
velocities,
and accelerations,
and so on.

## Problem #4: Swirls

Create a ``||sprites:Sprite||`` with an ``||images:image||`` that is only a single pixel.

In a ``||loops:loop||`` that runs 3 times,
start the ``effects.warmRadial`` effect on the ``||sprites:sprite||``
and then ``||loops:pause||`` for one second.

After the three effects have been created,
they should all be moving around the single pixel ``||sprites:sprite||`` in a spiral.

![Warm radial swirly spiral animation](/static/courses/csintro3/structure/warm-radial-spiral.gif)

## Problem #5: Sparkle Ducks

Create a game in which twelve ducks move across the screen,
leaving a trail of sparkles.

![Animation of sprites with a trail effect](/static/courses/csintro3/structure/sparkle-ducks.gif)

Use a ``||loops:for||`` loop to create **twelve** duck
``||sprites:projectiles||`` that move to the **left** across the screen.
Set each ``||sprites:duck||`` to have a ``||sprites:y position||`` that is
**10** times the loop variable ``||variables:i||``.

At the end of each iteration of the loop,
``||loops:pause||`` for 500ms so the ducks do not all show up at the same time.

### ~hint

You may notice that this problem has some similarities to problem #2;
feel free to start with a solution to that if you have one already!

### ~

In the loop, start the ``effects.trail`` effect after
creating the duck ``||sprites:sprites||`` (and before ``||loops:pausing||``).
This effect will add a rainbow trail on top of the ``||sprites:sprite||`` as it moves
around the screen.

### ~hint

By default, the ``duck`` ``||sprites:sprites||`` in the game will
face to the right.
However, in this example, the ducks move to the left,
which would make them move backwards.

If you would prefer that the duck would be facing the correct direction,
the following snippet can be used to create a **copy** of the
``||sprites:sprites.duck.duck3||`` image that will be **flipped**.

```typescript
let oppositeDuck: Image = sprites.duck.duck3.clone();
oppositeDuck.flipX();
let mySprite: Sprite = sprites.create(oppositeDuck);
```

If you want to use a different ``||images:image||``,
you can replace ``||sprites:sprites.duck.duck3||`` with any image you like.

### ~

### Challenge: Bouncing Duck

After completing this task,
you can make an alternate form where the ducks bounce around the screen.

![Animation of ducks bouncing with a trail](/static/courses/csintro3/structure/bouncing-duck.gif)

When bouncing around the screen,
it will quickly get to cluttered with the current amount of ``||sprites:sprites||``.
Modify your game to create only **five** ducks,
and set each duck to have a ``||sprites:y position||`` that is
**30** times the loop variable ``||variables:i||`` instead of **10** times.

In the loop,
set the ``||sprites:BounceOnWall||`` ``||sprites:SpriteFlag||`` to ``||logic:true||``,
so that the ducks will move back and forther across the screen.

To make the ducks bounce (rather than just move back and forth),
give each duck a ``||sprites:y acceleration||`` of **50**.
