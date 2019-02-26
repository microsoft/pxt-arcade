# Problem Set: Comments

This section contains a number of selected problems for the Comments section.

It is recommended that you review the problems, and complete a few before moving
on to the next section.

## Problem #1: Create a Skelly

Write a descriptive comment for the following ``||functions:function||``.

```typescript
function createSkeleton() {
    sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . f f f f . . . . . . . . . .
        . . . . . . . . f f 1 1 1 1 f f . . . . . . . .
        . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
        . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . .
        . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . .
        . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . .
        . . . . . . f d d d 1 1 1 1 d d d f . . . . . .
        . . . . . . f b d b f d d f b d b f . . . . . .
        . . . . . . f c d c f 1 1 f c d c f . . . . . .
        . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
        . . . . . . f f f c d b 1 b d f f f f . . . . .
        . . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . .
        . . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . .
        . . . . f b f b f f f f f f b f b f b f . . . .
        . . . . . . . . . f f f f f f . . . . . . . . .
        . . . . . . . . . . . f f f . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
    `);
}
```

## Problem #2: Create Your Own 

Implement the ``||functions:function||`` ``||functions:placeSkeleton||`` as
described in the comment below.

```typescript
/**
 * Creates a skeleton sprite at the given location
 * @param x the x coordinate of the skeleton
 * @param y the y coordinate of the skeleton
 */
```

## Problem #3: Party Time

Write a descriptive comment for the following ``||functions:function||``.

```typescript
function party(sprite: Sprite) {
    effects.confetti.startScreenEffect();
    sprite.startEffect(effects.smiles);
}
```

## Problem #4: Mean Comment

Implement the ``||functions:function||`` ``||functions:average||`` as described
in the comment below.

```typescript
/**
 * Computes the average of two numbers
 * @param x the first number to be averaged
 * @param y the second number to be averaged
 * @returns the average of `x` and `y`
 */
```

### ~hint

The average of two numbers can be founding by adding them together and then dividing by two.

### ~

## Problem #5: Move Me!

Write a descriptive comment for the following ``||functions:function||``.

```typescript
function moveMe(sprite: Sprite, distance: number) {
    let totalDistance = 0;

    for (let i = 0; i < 5; i++) {
        totalDistance += distance;
        sprite.x += distance;
        pause(500);
    }

    return totalDistance;
}
```