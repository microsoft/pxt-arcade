# Picnic Food

[Open this tutorial in the editor!](/#tutorial:/concepts/picnic-food)

## {Introduction @unplugged}

``||sprites:Sprites||`` can be placed in different locations around the screen. This is done by setting their ``||sprites:x||`` and ``||sprites:y||`` positions.

An ``||sprites:x||`` position of 0 will place the sprite on the **left side** of the screen - this can be thought of as "0 pixels from the left".

A ``||sprites:y||`` position of 0 will place the sprite at the **top** of the screen.

## {Step 1}

Find ``||variables(sprites):set mySprite to||`` in ``||sprites:Sprites||``. Drag it into the ``||loops:on start||``. Click on ``||variables(noclick):mySprite||``, select ``rename variable...``, and change the name from ``||variables(noclick):mySprite||`` to ``||variables(noclick):cherry||``.

```blocks
let cherry = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
```

## {Step 2 @fullscreen}

Open the image editor for ``||variables(noclick):cherry||``. You can either draw your own image of a cherry, or open the Gallery and find a premade picture in there.

```blocks
let cherry: Sprite = null
cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, SpriteKind.Player)
```

## {Step 3 @fullscreen}

Find ``||sprites:set mySprite position to x 0 y 0||`` in ``||sprites:Sprites||``. Change ``||variables(noclick):mySprite||`` to ``||variables(noclick):cherry||``, and change ``||sprites:x||`` to 25.

This will place the ``||variables(noclick):cherry||`` at the top of the screen, a little bit away (25 pixels) from the left side.

```blocks
let cherry: Sprite = null
cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, SpriteKind.Player)
cherry.setPosition(25, 0)
```

## {Step 4 @fullscreen}

In ``||sprites:set mySprite position to x 0 y 0||``, change ``||sprites:y||`` to 45.

This will move the sprite **down** the screen by 45 pixels.

```blocks
let cherry: Sprite = null
cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, SpriteKind.Player)
cherry.setPosition(25, 45)
```

## {Step 5}

Create another ``||sprites:Sprite||``, and rename it ``||variables(noclick):chicken||``. Find (or create) an image of chicken to represent it.

```blocks
let chicken: Sprite = null
let cherry: Sprite = null
cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, SpriteKind.Player)
cherry.setPosition(25, 45)
chicken = sprites.create(img`
. . 2 2 b b b b b . . . . . . .
. 2 b 4 4 4 4 4 4 b . . . . . .
2 2 4 4 4 4 d d 4 4 b . . . . .
2 b 4 4 4 4 4 4 d 4 b . . . . .
2 b 4 4 4 4 4 4 4 d 4 b . . . .
2 b 4 4 4 4 4 4 4 4 4 b . . . .
2 b 4 4 4 4 4 4 4 4 4 e . . . .
2 2 b 4 4 4 4 4 4 4 b e . . . .
. 2 b b b 4 4 4 b b b e . . . .
. . e b b b b b b b e e . . . .
. . . e e b 4 4 b e e e b . . .
. . . . . e e e e e e b d b b .
. . . . . . . . . . . b 1 1 1 b
. . . . . . . . . . . c 1 d d b
. . . . . . . . . . . c 1 b c .
. . . . . . . . . . . . c c . .
`, SpriteKind.Player)
```

## {Step 6}

Set the ``||variables(noclick):chicken||``'s ``||sprites:x||`` position 120, and it's ``||sprites:y||`` position to 80.

```blocks
let chicken: Sprite = null
let cherry: Sprite = null
cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, SpriteKind.Player)
cherry.setPosition(25, 45)
chicken = sprites.create(img`
. . 2 2 b b b b b . . . . . . .
. 2 b 4 4 4 4 4 4 b . . . . . .
2 2 4 4 4 4 d d 4 4 b . . . . .
2 b 4 4 4 4 4 4 d 4 b . . . . .
2 b 4 4 4 4 4 4 4 d 4 b . . . .
2 b 4 4 4 4 4 4 4 4 4 b . . . .
2 b 4 4 4 4 4 4 4 4 4 e . . . .
2 2 b 4 4 4 4 4 4 4 b e . . . .
. 2 b b b 4 4 4 b b b e . . . .
. . e b b b b b b b e e . . . .
. . . e e b 4 4 b e e e b . . .
. . . . . e e e e e e b d b b .
. . . . . . . . . . . b 1 1 1 b
. . . . . . . . . . . c 1 d d b
. . . . . . . . . . . c 1 b c .
. . . . . . . . . . . . c c . .
`, SpriteKind.Player)
chicken.setPosition(120, 80)
```

## {Complete}

Congratulations, your picnic is all set up, with ``||sprites:Sprites||`` placed in different locations on the screen.