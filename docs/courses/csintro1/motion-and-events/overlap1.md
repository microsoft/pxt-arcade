# Activity: Sprite Overlap & Events - Part 1

Once the sprites are moving, the next step is to detect when sprites interact with other objects. Overlap is the primary way in which we can make sprites interact with each other.

We can assign events to overlaps between sprites of different (or even the same) ``||sprites:Kind||``, adding behaviors such as scoring points, destroying an object, starting an animation, and much more.

In this activity, students will be introduced to:
* ``||sprites:Sprite Kind||``
* ``||sprites:on overlap||`` event with different ``||sprites:Kind||``
* ``||sprites:ghost on||`` and ``||sprites:ghost off||``
* ``||sprites:destroy||`` sprite

## Concept: SpriteKind Overlap Event

https://youtu.be/rdZdXltoWXE

[Alternative Video Location](https://aka.ms/40544a-overlap1spritekind)

We use ``||sprites:SpriteKind||`` to classify our sprites. We can have sprites in our games that represent many different things - players, enemies, coins, food, or anything else you might want to represent in your games. Creating labels (that is, ``||sprites:Kinds||``) for different groups of sprites helps us assign them each unique behaviors - for example, you might want to have the player in your game be able to eat 5 different food sprites, so combining them into a single ``||sprites:Kind||`` allows you to write the code for a single section  Sometimes there just one of a given ``||sprites:Kind||`` (for example, the Player), and other times there will be many sprites (for example, Clouds in the sky). Once we have ``||sprites:Kind||``s for different sprites, we can check if two different sprites are overlapping one another using the ``sprites:on overlap||`` event.

## Example #1: Two Sprites Overlap

1. Review the code below 
2. Create the sample code and run the code
3. Save the code for the task (name it "eatFruit")  
4. Look at the overlap event - note which sprite is named ``||variables:sprite||`` and which is ``||sprites:otherSprite||``

https://makecode.com/_e77ia1MAyA0U
```blocks
enum SpriteKind {
    Player,
    Enemy
}
let head: Sprite = null
let food: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
food = sprites.create(img`
. . . . . 7 7 . . . . 7 7 . . . 
. . . . . 7 7 7 7 . 7 7 7 7 . . 
. . . . . 7 7 7 7 e 7 7 7 7 . . 
. . . . . . 7 7 e e 7 7 7 . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
`, SpriteKind.Enemy)
head = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . a a a a a a a a a a a . . . . . . . . . . . 
. . . . . . . . a a a a a a a a a a a a a a a . . . . . . . . . 
. . . . . . . . . a a a 5 5 5 a a a a a a a a a . . . . . . . . 
. . . . . . . . a 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . 5 5 5 5 6 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 a a a a a a a a a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 a a a 5 5 5 5 5 a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 1 . 1 . 1 . 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . . . 1 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 1 . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
`, SpriteKind.Player)
food.setPosition(20, 60)
head.setPosition(120, 60)
game.onUpdate(function () {
    head.x += controller.dx()
})
```

## Student Task #1: Add actions to overlap events

1. Starting with example #1, or your own similar code
2. Add additional code to the overlap event that has the person saying something (for example, "Good!")
3. **Challenge:** add another action to the overlap event that uses the other sprite

### ~hint

Use ``||loops:pause||`` before using sprite destroy otherwise the sprite will be destroyed before we see what it was saying.

### ~

## Set ``||sprites:sprite||`` ghost on

https://youtu.be/rN1UyX6YkQE

[Alternative Video Location](https://aka.ms/40544a-overlap1spritekindtask)

The ``||sprites:ghost on||`` setting for sprites makes the sprite ignore ``||sprites:on overlap||`` events while it is turned on. By default, the setting is off.

## Example #2: Sprite Overlap - Ghost on

1. Review the code below
2. Create the sample code and run the code
3. Try turning the ``||sprites:ghost||`` setting on and off and see the difference

https://makecode.com/_FR3ciEHqR8YE
```blocks
enum SpriteKind {
    Player,
    Enemy
}
let head: Sprite = null
let food: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
food = sprites.create(img`
. . . . . 7 7 . . . . 7 7 . . . 
. . . . . 7 7 7 7 . 7 7 7 7 . . 
. . . . . 7 7 7 7 e 7 7 7 7 . . 
. . . . . . 7 7 e e 7 7 7 . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
`, SpriteKind.Enemy)
head = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . a a a a a a a a a a a . . . . . . . . . . . 
. . . . . . . . a a a a a a a a a a a a a a a . . . . . . . . . 
. . . . . . . . . a a a 5 5 5 a a a a a a a a a . . . . . . . . 
. . . . . . . . a 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . . . 5 5 5 5 6 5 5 5 5 5 a a a a a a a a . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 a a a a a a a a a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 a a a 5 5 5 5 5 a a a . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . 1 . 1 . 1 . 5 5 5 5 5 5 5 5 5 5 5 a a a . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . 
. . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . . . 1 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . 
. . . . . . . . . 1 . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . 5 5 5 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 
`, SpriteKind.Player)
head.setFlag(SpriteFlag.Ghost, true)
food.setPosition(20, 60)
head.setPosition(120, 60)
game.onUpdate(function () {
    head.x += controller.dx()
})
```

## Student Task #2: Sprite Overlap - Ghost off and on

https://youtu.be/FwDty0LxzSM

[Alternative Video Location](https://aka.ms/40544a-overlap1ghostntask)

1. Start with the example or task #1
2. Create 3 sprites in different locations across
3. Make the newly created sprites all be of the same ``||sprites:Kind||``. 
4. Set at least one sprite to have ``||sprites:ghost off||`` and one to have ``||sprites:ghost on||``. Make sure both of these are stationary (don't move)
5. Add an event for ``||sprites:on overlap||`` of the stationary sprite ``||sprites:Kind||``s with the ``||sprites:Kind||`` for the movable sprite (for example, in the event have an action of sprite destroy and/or sprite say)
6. Add 2 additional stationary sprites, with one more new ``||sprites:Kind||`` and overlap events for all the different ``||sprites:Kind||``s (for example, Player, Enemy, Food, ...)

## Student Task #3: Create overlap using one sprite of ``||sprites:Kind||`` Player and multiple other ``||sprites:Kind||``

https://youtu.be/Nasu00HvaYE

[Alternative Video Location](https://aka.ms/40544a-overlap1task3)

1. Start with task #2 or your own similar code
2. Enable sprite to move anywhere on screen along x and y axis
3. **Challenge:** using a total of 6 or more sprites and have an overlap involving each SpriteKind. Make one of the Overlap events play a sound, pause and then stop all sounds

### ~hint

Create meaningful variable names to each additional sprite created (for example, car, shoe, bread, ...)

Be sure to use ``||music:stop all sounds||`` if completing challenge overlap event with ``||music:ring tone||`` and turn volume way down!

### ~

## What did we learn? 

1. Describe how a ``||sprites:Kind||`` is used to detect overlap.
2. Suppose you have 2 or more sprites that have the same ``||sprites:Kind||``, and one of them triggers an overlap event. Explain how you can reference the sprite that was involved in the overlap event, rather than one of the other sprites of that ``||sprites:Kind||``.
