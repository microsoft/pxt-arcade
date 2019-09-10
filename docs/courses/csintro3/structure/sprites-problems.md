# Problem Set: Sprites

This section contains a number of selected problems for the Sprites section.

It is recommended that you review the problems, and complete a few before
moving on to the next section.

## Problem #1: Duck, Duck, Goose

You've decided to make a game based off of "Duck, Duck, Goose".

You notice that there is an image of a duck already included in the gallery,
which is perfect for the game. Create **two** ``||sprites:sprites||`` using
the ``||sprites:sprites.duck.duck1||`` image from the gallery.

There is still one thing missing, though: the "Goose."
Create a third ``||sprites:sprite||``,
and use the image editor to draw the "Goose" for your game.

## Problem #2: The Main Character

``||sprites:Sprites||`` allow for the representation of characters in games.
The main character of a game will often be a ``||sprites:Sprite||``
that the player controls.

Create a ``||sprites:sprite||`` that uses an image of a character from the
gallery. Make the character move around using the ``||controller:controller||``.

## Problem #3: Quick Animation

Many of the ``||sprites:sprites||`` in the gallery form a sequence:
slightly different images of the same character that can be used to
'animate' the sprite.

```typescript
let duck: Sprite = sprites.create(sprites.duck.duck1, SpriteKind.Player);
for (let i = 0; i < 10; i++) {
    duck.setImage(sprites.duck.duck1);
    pause(150);
    duck.setImage(sprites.duck.duck2);
    pause(150);
}
```

``||sprites:setImage||`` can be used to change the image for a sprite that
has already been made. The previous snippet shows an example of switching
between two images for the ``||sprites:sprite||`` ``||variables:duck||``.

``||loops:Pause||`` is used after each ``||sprites:setImage||``,
so that the images will be displayed on the screen for a little
while before changing.

Fill out the animation with more calls to ``||sprites:setImage||``
and ``||loops:pause||`` in the ``||loops:for||`` loop.
Add the following images to create an animation like the one below.

1. ``||sprites:sprites.duck.duck3||``
2. ``||sprites:sprites.duck.duck4||``
3. ``||sprites:sprites.duck.duck5||``
4. ``||sprites:sprites.duck.duck6||``

![Gif of Duck images 1-6](/static/courses/csintro3/structure/duck-animation.gif)

## Problem #4: Picky Positioning

Review the code in the snippet below.

```typescript
let hero: Sprite = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player);

pause (1000);

if (hero.x < 40) {
    hero.say("That's not right!", 1000);
} else if (hero.x >= 50) {
    hero.say("That's too right!", 1000);
} else {
    hero.say("That is good!", 1000);
}

pause(2000);

if (hero.y < 100) {
    hero.say("Too high!", 1000);
}

if (hero.x >= 40) {
    hero.say("I don't want to be here.", 1000);
}

pause(2000);

if (hero.x >= 40 && hero.y > 100) {
    hero.say("Perfect!");
}
```

The ``||variables:hero||`` is a bit picky about where they want to be.
Change the ``||sprites:x||`` and ``||sprites:y||`` position of the
``||variables:hero||`` after each ``||loops:pause||`` to make them
only say "That is good!" and "Perfect!"