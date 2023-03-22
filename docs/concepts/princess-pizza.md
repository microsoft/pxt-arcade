# Princess Pizza

[Open this tutorial in the editor!](/#tutorial:/concepts/princess-pizza)

## {Introduction @unplugged}

``||sprites:Sprites||`` that are moving will often have situations where two sprites end up on top of each other. The ``||sprites:sprite overlap||`` event can be used to handle interactions between ``||sprites:sprites||`` when this occurs.

## {Step 1 @fullscreen}

Find ``||variables(sprites):set mySprite to||`` in ``||sprites:Sprites||``. Drag it into the ``||loops:on start||``. Click on ``||variables:mySprite||``, select ``rename variable...``, and change the name from ``||variables:mySprite||`` to ``||variables:princess||``.

```blocks
let princess = sprites.create(img`
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

Open the image editor for ``||variables:princess||``, and select or create an image of a princess.

```blocks
let princess: Sprite = null
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
```

## {Step 3 @fullscreen}

Find ``||controller:move mySprite with buttons||`` in ``||controller:Controller||``. Place it after ``||variables:set princess to||``. Change ``||variables:mySprite||`` to ``||variables:princess||``.

```blocks
let princess: Sprite = null
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
```

## {Step 4 @fullscreen}

Find ``||variables(sprites):set mySprite to||`` in ``||sprites:Sprites||``. Drag it into the ``||loops:on start||``. Rename ``||variables:mySprite||`` to ``||variables:pizza||``. Open the image editor, and select or create an image of a pizza.

```blocks
let pizza: Sprite = null
let princess: Sprite = null
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Player)
```

## {Step 5 @fullscreen}

Find ``||sprites:set mySprite position to x 0 y 0||`` in ``||sprites:Sprites||``. Change ``||variables(noclick):mySprite||`` to ``||variables(noclick):pizza||``, ``||sprites:x||`` to 140, and ``||sprites:y||`` to 100.

```blocks
let pizza: Sprite = null
let princess: Sprite = null
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Player)
pizza.setPosition(140, 100)
```

## {Step 6 @fullscreen}

In the ``||variables:pizza||`` ``||sprites:Sprite||``, select ``||sprites:kind Player||`` and change it to ``||sprites:kind Food||``.

A ``||sprites:Sprite|``'s ``||sprites:Kind||`` is used to identify what type of sprite it is; this helps to group different sprites together.

```blocks
let pizza: Sprite = null
let princess: Sprite = null
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)
pizza.setPosition(140, 100)
```

## {Step 7 @fullscreen}

Find ``||sprites:on sprite of kind Player overlaps otherSprite of kind Player||`` in ``||sprites:Sprites||``, and drag it into the workspace. Change the first ``||sprites:kind Player||`` to ``||sprites:kind Food||``.

This event will occur whenever two ``||sprites:Sprites||`` of the given ``||sprites:kinds||`` are on top of eachother.

```blocks
let pizza: Sprite = null
let princess: Sprite = null
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {

})
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)
pizza.setPosition(140, 100)
```

## {Step 8 @fullscreen}

Find ``||game:game over||`` in ``||game:Game||``, and drag it into the ``||sprites:sprite overlap||`` event.

This will cause the game to end when the ``||sprites:princess||`` touches the ``||sprites:pizza||``.

```blocks
let pizza: Sprite = null
let princess: Sprite = null
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)
pizza.setPosition(140, 100)
```

## {Complete}

Congratulations, your game is complete! The player can move the ``||variables(noclick):princess||`` around as long as they want, so long as they avoid the ``||variables(noclick):pizza||``.