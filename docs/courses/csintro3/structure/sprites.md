# Activity: Sprites

Sprites are commonly used to represent the characters of games in @boardname@. The characters can be controlled by the person playing the game, or the computer itself.

## Concept: Simple Sprite Motion

Creating and controlling ``||sprites:Sprites||`` are two of the most important steps in developing your own game. The ``||sprites:Sprite||`` a player controls provide a way for the player to interact with the game.

## Example #1: Starter Sprites

1. Review the code below
2. Identify how the ``||sprites:Sprite||`` is created
3. Identify how the player can move the ``||sprites:Sprite||`` in the game

```typescript
let player: Sprite = sprites.create(sprites.castle.princessFront0, 0);
controller.controlSprite(player, 100, 100);
```

In the example above, the sprite is created using ``||sprites:sprites.create||``. There is a lot to take in, though:

* Notice the type of ``||variables:player||``: it is a ``||sprites:Sprite||``
* The function that creates the ``||sprites:Sprite||`` takes in two things: an image (``||sprites:sprites.castle.princessFront0||`` is one of the provided images to start with), and a ``||sprites:kind||`` of 0
* ``||controller:controller.controlSprite||`` is a function that takes a ``||sprites:Sprite||`` and allows it to to move around the screen as using the direction keys. Besides the ``||sprites:Sprite||``, it also needs two numbers: one for the horizontal velocity, and one for the vertical velocity

## Student Task #1: Slow the New Sprite

1. Start with the code from example #1
2. Change the image of the ``||sprites:Sprite||`` from ``||sprites:princessFront0||`` to ``||sprites:princess2Front||`` (the ``||sprites:sprites.castle.||`` part should remain in front)
3. Change the ``||sprites:vx||`` in ``||controller:controller.controlSprite||`` to 50
4. Change the ``||sprites.vy||`` in ``||controller:controller.controlSprite||`` to 150
5. Play the game, and identify how it has changed in this task

### ~hint

There are a lot of different images for ``||sprites:sprites||`` available by default. In this lesson (and many to come), many sprites will be used from the following groups of images for demonstration purposes.

* ``||sprites:sprites.castle||``
* ``||sprites:sprites.duck||``
* ``||sprites:sprites.food||``
* ``||sprites:sprites.space||``
* ``||sprites:sprites.vehicle||``

These can be found in the ``Gallery`` of the sprite editor, or by looking through the groups with the autocomplete feature. It is always fun to design your own personal sprite, though!

### ~

## Concept: Personalizing Sprites

When making your own game, you will likely need to spend some time personalizing your own ``||sprites:sprites||``. This will change the way they look, as well as the way they behave.

To start personalizing your own ``||sprites:sprites||``, we will need to learn about two different things: the image editor, and sprite ``||sprites:kinds||``.

## Example #2a: Your Own Sprite

1. Review the code below
2. Identify the parts that are similar to example #1, and the portions that are different

```typescript
enum SpriteKind {
    Player
}

let player = sprites.create(img`
. . . . . . b . b . . . . . . . 
. . . . . f b b b f f . . . . . 
. . . . f 1 b 7 b 1 c f . . . . 
. . . f 1 c c c c c 1 c f . . . 
. . . f c c f f f f c 1 f . . . 
. . . f c f f e e f f c f . . . 
. . f c f e f e e f e f c f . . 
. . f c f e a e e a e f c f . . 
. . f c c f e e e e f c c f . . 
. f c c f a f f f f a f c c f . 
. . f f e a b a a b a e f f . . 
. . f e e f a b b a f e e f . . 
. . . f f a a a a a a f f . . . 
. . . f a a b a a b a a f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player);
controller.controlSprite(player, 100, 100);
```

This code will need some explanation. It includes two features of JavaScript - called ``enums`` and ``tagged templates`` - that are a bit advanced, and out of the scope of this course to cover in detail. For our purposes, we can use the following simplified descriptions:

### ~hint

An ``enum`` is a set of named constant values. In this snippet, the ``||sprites:SpriteKind||`` enum is used to list out different kinds of sprites, so that the different ``||sprites:Kind||``s of ``||sprites:Sprites||`` can be identified.

In the first example, you might have noticed that the ``||sprites:Kind||`` used was a number. The values in the ``||sprites:SpriteKind||`` enum are all actually just numbers that are given special names to make the code more readable.

### ~

### ~hint

A ``tagged template`` is a special kind of function, that can take a ``template string`` - the portion in between the backticks (\`).

In this course, ``img`` is the only ``tagged template`` we will discuss. ``img`` takes a string and converts it into an image. Each character in the tagged template (the numbers 1-9, letters a-f, and period ``.``) is converted to a color, and made into a single pixel in the image.

If you zoom out, you might be able to see an outline of the princess sprite from the ``img`` ``template string`` in the ``||sprites:sprites.create||`` above.

The image editor can be used to easily create these ``tagged templates``.

### ~

## Example #2b: Adding a New ``||sprites:Kind||``

1. Review the code below
2. Compare the ``||sprites:SpriteKind||`` in this snippet to the one in example #2a. How is it different?

```typescript
enum SpriteKind {
    Player,
    Square
}

let square = sprites.create(img`
1 1 1 
1 1 1 
1 1 1 
`, SpriteKind.Square);
controller.controlSprite(square, 100, 100);
```

## Student Task #2: Adding Sprites

1. Start with the code from example #2b
2. Add **two** new ``||sprites:kind||``s to the ``||sprites:SpriteKind||`` enum: ``||sprites:Circle||`` and ``||sprites:Diamond||``
3. Create **two** new sprites - one that is a ``||sprites:Circle||``, and one that is a ``||sprites:Diamond||``. Use the image editor to draw images for these sprites
4. **Challenge:** add an animal (for example, ``||sprites:Dog||``) to the ``||sprites:SpriteKind||`` enum, and create a ``||sprites:Sprite||`` for that animal

## Concept: Sprite Properties and Functions

Sprites have properties and functions that keep track of the different values related to the sprite. These are the same properties that were used in Blocks - ``||sprites:x||``, ``||sprites:vx||``, ``||sprites:left||``, and so on.

These properties and functions can be easily browsed using the autocomplete feature.

![Auto Complete](/static/courses/csintro3/structure/auto-complete.gif)

## Example #3: Using a Property

1. Review the code below
2. Identify which ``||sprites:sprite property||`` is modified
3. Notice the use of ``||loops:pause||`` to make the modification occur after 1 second

```typescript
enum SpriteKind {
    Square
}

let player = sprites.create(img`
1 1 1 
1 1 1 
1 1 1 
`, SpriteKind.Square);

pause(1000);
player.x += 20;
```

## Student Task #3: Repetitive Motion

1. Start with the code from example #3
2. Use a ``||loops:for||`` loop to make the ``||loops:pause||`` and the modification of the ``||sprites:sprite property||`` occur **5 times**
3. In the ``||loops:loop||``, add another line to change the ``||variables:player||``'s ``||sprites:y||`` position by -10 on each iteration
4. Before the loop, set ``||variables:player||``'s ``||sprites:vx||`` to -10

## What did we learn?

1. In your own words, explain why drawing your own ``||sprites:Sprites||`` can be important when creating new games.
2. How do ``||sprites:Sprite Properties||`` allow you to interact with ``||sprites:Sprites||``?
