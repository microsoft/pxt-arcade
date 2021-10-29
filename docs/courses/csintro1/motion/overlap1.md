# Activity: Sprite Overlap & Events - Part 1

Once the sprites are moving, the next step is to detect when they interact with other objects. Overlap is the primary way in which we can make sprites interact with each other.

We can assign events to overlaps between sprites of different (or even the same) ``||sprites:kind||``, adding behaviors such as scoring points, destroying an object, starting an animation, and much more.

In this activity, students will be introduced to:

* ``||sprites:Sprite Kind||``
* ``||sprites:on overlap||`` event with different ``||sprites:kind||``
* ``||sprites:ghost on||`` and ``||sprites:ghost off||``
* ``||sprites:destroy||`` sprite

## Concept: Overlap Event

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/TSUsPc0Kuo8)

We use ``||sprites:kind||`` to classify our sprites. We can have sprites in our games that represent many different things - players, enemies, coins, food, or anything else you might want to represent in your games.

Creating labels (``||sprites:kind||``s) for different groups of sprites helps us assign them each unique behaviors. For example, you might want to have the player in your game be able to eat 5 different food sprites, so combining them into a single ``||sprites:kind||`` allows you to write the code for a single section.

Sometimes there will be only a single sprite of a given ``||sprites:kind||`` (for example, the ``||sprites:Player||``), and other times there will be many sprites (for example, ``||sprites:Cloud||``s in the sky). Once we have ``||sprites:kind||``s for different sprites, we can check if two different sprites are overlapping one another using the ``||sprites:on overlap||`` event.

## Example #1: Two Sprites overlap #example-1

1. Review the code below
2. Create a new project and name it “eatFruit”
3. Create the sample code and run the code
4. Look at the overlap event - note which sprite is named ``||variables:sprite||``, and which is ``||variables:otherSprite||``

### ~ hint

#### Draggable parameters

To make it easy to use the event parameters with the blocks inside, you can drag
them out of the event block and into the other blocks

### ~

```blocks
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

## Student Task #1: Add actions to overlap events #task-1

1. Start with [example #1](#example-1), or your own similar code
2. Add additional code to the overlap event that has the person saying something (for example, "Good!")
3. **Challenge:** add another action to the overlap event that uses the other sprite

### ~hint

Use ``||loops:pause||`` before using ``||sprites:sprite destroy||`` , otherwise the sprite will be destroyed before we see what it was saying.

### ~

## Set ``||sprites:sprite||`` ghost on

The ``||sprites:ghost on||`` setting for sprites, when turned on, makes the sprite ignore ``||sprites:on overlap||`` events. By default, the setting is off. The ``||sprites:ghost on||`` setting is in the drop down list when you pull out the ``||sprites:auto destroy||`` block.

## Example #2: Sprite Overlap and ghost on #example-2

1. Review the code below
2. Create the sample code and run the code
3. Try turning the ``||sprites:ghost||`` setting on and off and see the difference

```blocks
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

## Student Task #2: Ghost Off and On #task-2

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/QqU2Tjg6oRk)

1. Start with [example #2](#example-2) or [task #1](#task-1)
2. Create 3 sprites in different locations across the screen
3. Make the newly created sprites all be of the same ``||sprites:kind||``.
4. Set at least one sprite to have ``||sprites:ghost off||`` and one to have ``||sprites:ghost on||``. Make sure both of these are stationary (don't move)
5. Add an event for ``||sprites:on overlap||`` of the stationary sprite ``||sprites:kind||``s with the ``||sprites:kind||`` for the movable sprite (for example, in the event have an action of sprite ``||sprites:destroy||`` and/or sprite ``||sprites:say||``)
6. Add 2 additional stationary sprites, with one more new ``||sprites:kind||`` and overlap events for all the different ``||sprites:kind||``s (for example, Player, Enemy, Food, ...)

## Student Task #3: Multiple ``||sprites:kind||``s

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/ddME-nX-Qx4)

1. Start with [task #2](#task-2) or your own similar code
2. Enable the sprite to move anywhere on screen along x and y axis
3. **Challenge:** using a total of 6 or more sprites, have an overlap involving each SpriteKind. Make one of the overlap events play a sound, pause and then stop all sounds

### ~hint

Create meaningful variable names to each additional sprite created (for example, car, shoe, bread, ...)

Be sure to use ``||music:stop all sounds||`` if completing challenge overlap event with ``||music:ring tone||`` and turn volume way down!

### ~

## What did we learn?

1. Describe how a ``||sprites:kind||`` is used to detect overlap.
2. Suppose you have 2 or more sprites that have the same ``||sprites:kind||``, and one of them triggers an overlap event. Explain how you can reference the sprite that was involved in the overlap event, rather than one of the other sprites of that ``||sprites:kind||``.

### [Teacher Material](/courses/csintro1/about/teachers)
