# Activity: Arrays of Sprites

As games get more complex, the number of sprites used can quickly grow. Arrays allow these sprites to be kept track of easily.

## Concept: Predetermined Sprites

Keeping sprites in an array can be useful even when there are only a few of them. This allows the sprites to be interacted with in the same way no matter how many exist.

## Example #1: Three Enemies

1. Review the code snippets below
2. Identify the differences between the two snippets
3. In the second snippet, identify what sprites will be contained within the ``||variables:enemies||`` array
4. In the second snippet, ientify how the sprites in ``||variables:enemies||`` are used

### Example #1a: No Arrays

```typescript
enum SpriteKind {
    Player,
    Projectile,
    Enemy
}
let player: Sprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player);
let enemy1: Sprite = sprites.create(sprites.food.smallIceCream, SpriteKind.Enemy);
let enemy2: Sprite = sprites.create(sprites.food.smallIceCream, SpriteKind.Enemy);
let enemy3: Sprite = sprites.create(sprites.food.smallIceCream, SpriteKind.Enemy);
enemy1.x = Math.randomRange(10, screen.width - 10);
enemy2.x = Math.randomRange(10, screen.width - 10);
enemy3.x = Math.randomRange(10, screen.width - 10);
```

### Example #1b: ``||variables:enemies||`` Array

```typescript
enum SpriteKind {
    Player,
    Projectile,
    Enemy
}
let player: Sprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player);
let enemies: Sprite[] = [sprites.create(sprites.food.smallIceCream, SpriteKind.Enemy),
                        sprites.create(sprites.food.smallIceCream, SpriteKind.Enemy),
                        sprites.create(sprites.food.smallIceCream, SpriteKind.Enemy)];
enemies[0].x = Math.randomRange(10, screen.width - 10);
enemies[1].x = Math.randomRange(10, screen.width - 10);
enemies[2].x = Math.randomRange(10, screen.width - 10);
```

## Student Task #1: Redundancy and Randomness

1. Start with the code from example #1b
2. The code is a bit redundant when setting the ``||sprites:x||`` position for each ``||sprites:Enemy||``: modify the code to use a ``||loops:for||`` loop instead
3. Set each ``||sprites:Enemy||`` to have a random ``||sprites:y||`` position between ``10`` and ``||scene:screen.height - 10||``
4. Use ``||math:Math.pickRandom||`` to select a random ``||sprites:Enemy||``. Make the selected ``||sprites:Enemy||`` ``||sprites:say||`` "I've been chosen!" for 1000 ms
5. **Challenge:** can steps 2 through 4 of this task be completed starting with the code from example #1a? Which version is easier to work with?

## Concept: Getting All the Sprites

Arrays of Sprites can be incredibly useful in making complex behavior easier to handle, but it can be hard to keep track of which sprites still exist when new ones get ``||sprites:created||`` or ``||sprites:destroyed||`` in the game.

For example, consider the following snippet:

```typescript
enum SpriteKind {
    Player,
    Projectile
}

let characters: Sprite[] = [];

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let newCharacter: Sprite = sprites.create(sprites.food.smallPizza, SpriteKind.Player);
    newCharacter.x = Math.randomRange(0, screen.width);
    newCharacter.y = Math.randomRange(0, screen.height);
    characters.push(newCharacter);
});

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (characters.length > 0) {
        Math.pickRandom(characters).destroy();
    }
});
```

Press the ``||controller:A||`` button to fill the screen with pizza (around 20 times). Now, click the ``||controller:B||`` button to destroy all of the pizza.

It should work fine at first, but eventually you will likely click the ``||controller:B||`` button and nothing will be destroyed. This happens because the ``||variables:characters||`` array **still contains** the ``||sprites:sprites||`` that were ``||sprites:destroy||``ed when ``||controller:B||`` was pressed.

There are several approaches to fix this. One approach would be to use ``||math:Math.randomRange||`` to select an index for the sprite, use ``||arrays:characters.removeAt||`` (which takes in an index, and removes the value at the given index from the array) to remove the sprite at that index, and then ``||sprites:destroy||`` the sprite returned by ``||arrays:characters.removeAt||``.

Another approach would be to use ``||arrays:characters.removeElement||`` (which accepts an element, searches the array for that element, and removes it) to remove the ``||sprites:sprite||``.

However, both of these approaches will have a similar problem: they have to be done **everywhere** a sprite is ``||sprites:destroy||``ed. Instead, the ``||sprites:sprites.allOfKind||`` function can be called to return an array that contains all ``||sprites:sprites||`` of a given ``||sprites:SpriteKind||`` as needed, rather than keeping track of it on your own.

## Example #2: Sprites of Kind ``||sprites:Player||``

1. Review the code below
2. Identify how the ``||sprites:sprites.allOfKind||`` function is used to identify all sprites of ``||sprites:kind||`` ``||sprites:Player||``

```typescript
enum SpriteKind {
    Player,
    Projectile
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let newCharacter: Sprite = sprites.create(sprites.food.smallPizza, SpriteKind.Player);
    newCharacter.x = Math.randomRange(0, screen.width);
    newCharacter.y = Math.randomRange(0, screen.height);
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let characters = sprites.allOfKind(SpriteKind.Player);
    if (characters.length > 0) {
        Math.pickRandom(characters).destroy();
    }
})
```

### ~hint

When calling the ``||sprites:sprites.allOfKind||`` function, it is best to keep it as a variable if it is going to be used multiple times in a row without adding or removing sprites, to avoid recreating the same array over and over again.

### ~

## Student Task #2: Sprites of Kind ``||sprites:Enemy||``

1. Start with the code from task #1. Use ``||controller:controller.moveSprite||`` to make the ``||sprites:Player||`` move around the screen with the arrow keys
2. Instead of creating the array with three elements in it, use a ``||loops:for||`` loop to create **5** ``||sprites:Enemy||``s and then use ``||sprites:sprites.allOfKind||`` to create the ``||variables:enemies||`` array
3. Add an ``||sprites:on overlap||`` event between ``||sprites:Player||`` and ``||sprites:Enemy||``
4. In the ``||sprites:on overlap||`` event, ``||sprites:destroy||`` the ``||sprites:Enemy||`` sprite, and then create a new ``||sprites:Enemy||`` sprite and position them in a random location on the screen
5. After adding the new ``||sprites:Enemy||`` sprite, set ``||variables:enemies||`` to store the result of another call to ``||sprites:sprites.allOfKind||``, to make sure it is up to date
6. After updating ``||sprites:sprites.allOfKind||``, make a random ``||sprites:Enemy||`` say "I've been chosen!" for 1000 ms
7. **Challenge:** keep track of the ``||sprites:Enemy||`` that has last said "I've been chosen!", and in the ``||sprites:on overlap||`` event check if the overlapped ``||sprites:Enemy||`` is the chosen sprite. If it is, ``||info:change score by 1||``

## Concept: Simple Artificial Intelligence

Being able to keep track of enemies is also useful for implementing Artificial Intelligence. With this, a sprite can be programmed to "react" to the player's actions.

In the next example, the player will control a piece of pizza, with a hungry adventurer chasing the pizza around the screen.

## Example #3: Simple Following

1. Review the code below
2. Identify how the enemy is made to "follow" the player

```typescript
enum SpriteKind {
    Player,
    Projectile,
    Enemy
}

let player: Sprite = sprites.create(sprites.food.smallPizza, SpriteKind.Player);
let enemy: Sprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Enemy);

controller.moveSprite(player, 100, 100);

game.onUpdateInterval(200, function () {
    if (enemy.x != player.x) {
        enemy.vx = player.x - enemy.x;
    }
    if (enemy.y != player.y) {
        enemy.vy = player.y - enemy.y;
    }
});
```

### ~hint

In this example, the enemy is made to follow the player by setting their velocities equal to the **difference** in location. This is a simple approach, and is not perfect: the ``||sprites:Enemy||`` slows down as it gets close, and speeds up too much as you get far away from it.

If you have time, it could be a good idea to practice your skill with logical comparisons to make the *perfect* following behavior, so that you can have that ready for your future games.

### ~

## Student Task #3: They're All Following!

1. Start with the code from example #3
2. Create at least **5** enemies in a loop. Set each to have random ``||sprites:x||`` and ``||sprites:y||`` positions
3. In the ``||game:game.onUpdateInterval||`` event, store an array of ``||sprites:sprites.allOfKind||`` ``||sprites:Enemy||`` to get **all** of the ``||sprites:Enemy||``s
4. Use a ``||loops:for||`` loop to make each enemy "follow" the player
5. **Challenge:** try to make the ``||sprites:Enemy||``s follow at a more consistent speed. You'll likely want to have more conditionals to check

### ~hint

It's likely that the enemies will overlap, and eventually all occupy the same location. That is okay for an example, but if you want to implement your own game you will likely want to try to account for this somehow.

### ~

## What did we learn?

1. In your own words, explain why the snippet in "Getting All the Sprites" did not work at first (that is, why the pizza wasn't always destroyed).
2. How does ``||sprites:sprites.allOfKind||`` help when dealing with multiple ``||sprites:Sprites||``?
