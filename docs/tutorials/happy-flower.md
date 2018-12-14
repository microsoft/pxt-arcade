# Happy Flower

## Introduction @unplugged

Flowers make everyone around them happier. To show this, we can create a flower that sends out happy thoughts.

![Happy thoughts](/static/tutorials/happy-flower/happy-thoughts.gif)

## Step 1

Find ``||variables:set mySprite to||`` in ``||sprites:Sprites||``. Drag it into the ``||loops:on start||``, and draw a flower.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . 2 2 . 2 2 2 . 2 2 . . . . 
. . . 2 2 2 2 3 2 2 2 2 . . . . 
. . . 2 3 3 2 3 3 3 3 2 . . . . 
. . . 2 3 1 3 2 3 3 3 2 . . . . 
. . . 2 3 3 1 3 2 3 3 2 . . . . 
. . . . 2 3 3 1 3 3 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . . 7 . . . . . . . . 
. . 7 7 7 . . 7 . . 7 7 7 . . . 
. . 7 6 7 7 . 7 . 7 7 6 7 . . . 
. . 7 7 6 7 7 7 7 7 6 7 7 . . . 
. . . 7 7 6 7 7 7 6 7 7 . . . . 
. . . . 7 6 6 6 6 6 7 . . . . . 
. . . . 7 7 7 6 7 7 7 . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```

## Step 2

Find in ``||game:on update every 500 ms||`` and ``||game:Game||``, and drag it into the workspace.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . 2 2 . 2 2 2 . 2 2 . . . . 
. . . 2 2 2 2 3 2 2 2 2 . . . . 
. . . 2 3 3 2 3 3 3 3 2 . . . . 
. . . 2 3 1 3 2 3 3 3 2 . . . . 
. . . 2 3 3 1 3 2 3 3 2 . . . . 
. . . . 2 3 3 1 3 3 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . . 7 . . . . . . . . 
. . 7 7 7 . . 7 . . 7 7 7 . . . 
. . 7 6 7 7 . 7 . 7 7 6 7 . . . 
. . 7 7 6 7 7 7 7 7 6 7 7 . . . 
. . . 7 7 6 7 7 7 6 7 7 . . . . 
. . . . 7 6 6 6 6 6 7 . . . . . 
. . . . 7 7 7 6 7 7 7 . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.onUpdateInterval(500, function () {

})
```

## Step 3

Find ``||sprites:projectile from mySprite||`` in ``||sprites:Sprites||``. Pull it out and put it into the ``||game:on game update every 500 ms||``.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . 2 2 . 2 2 2 . 2 2 . . . . 
. . . 2 2 2 2 3 2 2 2 2 . . . . 
. . . 2 3 3 2 3 3 3 3 2 . . . . 
. . . 2 3 1 3 2 3 3 3 2 . . . . 
. . . 2 3 3 1 3 2 3 3 2 . . . . 
. . . . 2 3 3 1 3 3 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . . 7 . . . . . . . . 
. . 7 7 7 . . 7 . . 7 7 7 . . . 
. . 7 6 7 7 . 7 . 7 7 6 7 . . . 
. . 7 7 6 7 7 7 7 7 6 7 7 . . . 
. . . 7 7 6 7 7 7 6 7 7 . . . . 
. . . . 7 6 6 6 6 6 7 . . . . . 
. . . . 7 7 7 6 7 7 7 . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.onUpdateInterval(500, function () {
    let projectile = sprites.createProjectileFromSprite(img`
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
`, mySprite, 0, 100)
})
```

## Step 4

Click on the grey box in ``||sprites:projectile||`` and make a small smiley face.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . 2 2 . 2 2 2 . 2 2 . . . . 
. . . 2 2 2 2 3 2 2 2 2 . . . . 
. . . 2 3 3 2 3 3 3 3 2 . . . . 
. . . 2 3 1 3 2 3 3 3 2 . . . . 
. . . 2 3 3 1 3 2 3 3 2 . . . . 
. . . . 2 3 3 1 3 3 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . . 7 . . . . . . . . 
. . 7 7 7 . . 7 . . 7 7 7 . . . 
. . 7 6 7 7 . 7 . 7 7 6 7 . . . 
. . 7 7 6 7 7 7 7 7 6 7 7 . . . 
. . . 7 7 6 7 7 7 6 7 7 . . . . 
. . . . 7 6 6 6 6 6 7 . . . . . 
. . . . 7 7 7 6 7 7 7 . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.onUpdateInterval(500, function () {
    let projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . 5 . . 5 . . 
. . 5 . . 5 . . 
. . . . . . . . 
. 5 . . . . 5 . 
. . 5 5 5 5 . . 
. . . . . . . . 
. . . . . . . . 
`, mySprite, 0, 100)
})
```

## Step 5

Go get a ``||Math:pick random 0 to 10||``. Place it in the ``||sprites:vx||`` slot of ``||sprites:projectile||``. Change the ``0`` to ``-25`` and the ``10`` to ``25``. 

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . 2 2 . 2 2 2 . 2 2 . . . . 
. . . 2 2 2 2 3 2 2 2 2 . . . . 
. . . 2 3 3 2 3 3 3 3 2 . . . . 
. . . 2 3 1 3 2 3 3 3 2 . . . . 
. . . 2 3 3 1 3 2 3 3 2 . . . . 
. . . . 2 3 3 1 3 3 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . . 7 . . . . . . . . 
. . 7 7 7 . . 7 . . 7 7 7 . . . 
. . 7 6 7 7 . 7 . 7 7 6 7 . . . 
. . 7 7 6 7 7 7 7 7 6 7 7 . . . 
. . . 7 7 6 7 7 7 6 7 7 . . . . 
. . . . 7 6 6 6 6 6 7 . . . . . 
. . . . 7 7 7 6 7 7 7 . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.onUpdateInterval(500, function () {
    let projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . 5 . . 5 . . 
. . 5 . . 5 . . 
. . . . . . . . 
. 5 . . . . 5 . 
. . 5 5 5 5 . . 
. . . . . . . . 
. . . . . . . . 
`, mySprite, Math.randomRange(-25, 25), 100)
})
```

## Step 6

Duplicate the ``||Math:pick random -25 to 25||`` block and place it in the ``||sprites:vy||`` slot of ``||sprites:projectile||``.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . 2 2 . 2 2 2 . 2 2 . . . . 
. . . 2 2 2 2 3 2 2 2 2 . . . . 
. . . 2 3 3 2 3 3 3 3 2 . . . . 
. . . 2 3 1 3 2 3 3 3 2 . . . . 
. . . 2 3 3 1 3 2 3 3 2 . . . . 
. . . . 2 3 3 1 3 3 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . . 7 . . . . . . . . 
. . 7 7 7 . . 7 . . 7 7 7 . . . 
. . 7 6 7 7 . 7 . 7 7 6 7 . . . 
. . 7 7 6 7 7 7 7 7 6 7 7 . . . 
. . . 7 7 6 7 7 7 6 7 7 . . . . 
. . . . 7 6 6 6 6 6 7 . . . . . 
. . . . 7 7 7 6 7 7 7 . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.onUpdateInterval(500, function () {
    let projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . 5 . . 5 . . 
. . 5 . . 5 . . 
. . . . . . . . 
. 5 . . . . 5 . 
. . 5 5 5 5 . . 
. . . . . . . . 
. . . . . . . . 
`, mySprite, Math.randomRange(-25, 25), Math.randomRange(-25, 25))
})
```

## Step 7 @fullscreen

Find the ``||sprites:set mySprite x (horizontal position) to 0||`` in ``||sprites:Sprites||``, place it after ``||variables:set projectile to||``, and change ``||variables:mySprite||`` to ``||variables:projectile||``. Change ``||sprites:x (horizontal position)||`` to ``||sprites:lifespan||`` and set ``0`` to ``2000``.

![Adding life span](/static/tutorials/happy-flower/life-span.gif)

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . 2 2 . 2 2 2 . 2 2 . . . . 
. . . 2 2 2 2 3 2 2 2 2 . . . . 
. . . 2 3 3 2 3 3 3 3 2 . . . . 
. . . 2 3 1 3 2 3 3 3 2 . . . . 
. . . 2 3 3 1 3 2 3 3 2 . . . . 
. . . . 2 3 3 1 3 3 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . . 7 . . . . . . . . 
. . 7 7 7 . . 7 . . 7 7 7 . . . 
. . 7 6 7 7 . 7 . 7 7 6 7 . . . 
. . 7 7 6 7 7 7 7 7 6 7 7 . . . 
. . . 7 7 6 7 7 7 6 7 7 . . . . 
. . . . 7 6 6 6 6 6 7 . . . . . 
. . . . 7 7 7 6 7 7 7 . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . 5 . . 5 . . 
. . 5 . . 5 . . 
. . . . . . . . 
. 5 . . . . 5 . 
. . 5 5 5 5 . . 
. . . . . . . . 
. . . . . . . . 
`, mySprite, Math.randomRange(-25, 25), Math.randomRange(-25, 25))
    projectile.lifespan = 2000
})
```

## Step 9

Get another ``||sprites:set mySprite x (horizontal position) to 0||`` in ``||sprites:Sprites||``, place it after ``||variables:set projectile to||``, and change ``||variables:mySprite||`` to ``||variables:projectile||``. Change ``||sprites:x (horizontal position)||`` to ``||sprites:z (depth)||`` and set `0` to `-1`.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . 2 2 . 2 2 2 . 2 2 . . . . 
. . . 2 2 2 2 3 2 2 2 2 . . . . 
. . . 2 3 3 2 3 3 3 3 2 . . . . 
. . . 2 3 1 3 2 3 3 3 2 . . . . 
. . . 2 3 3 1 3 2 3 3 2 . . . . 
. . . . 2 3 3 1 3 3 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . . 7 . . . . . . . . 
. . 7 7 7 . . 7 . . 7 7 7 . . . 
. . 7 6 7 7 . 7 . 7 7 6 7 . . . 
. . 7 7 6 7 7 7 7 7 6 7 7 . . . 
. . . 7 7 6 7 7 7 6 7 7 . . . . 
. . . . 7 6 6 6 6 6 7 . . . . . 
. . . . 7 7 7 6 7 7 7 . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . 5 . . 5 . . 
. . 5 . . 5 . . 
. . . . . . . . 
. 5 . . . . 5 . 
. . 5 5 5 5 . . 
. . . . . . . . 
. . . . . . . . 
`, mySprite, Math.randomRange(-25, 25), Math.randomRange(-25, 25))
    projectile.z = -1
    projectile.lifespan = 2000
})
```

## Complete

Congratulations, your happy flower is complete! It will now spread happiness all around.
