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

Find ``||game:on update every 500 ms||`` in ``||game:Game||``, and drag it onto the game area.

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

Find ``||variables:set projectile to||`` in ``||sprites:Sprites||``. Drag it into the ``||game:on game update every 500 ms||``.

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
    let projectile = sprites.createProjectile(img`
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
`, 0, 0, SpriteKind.Player)
})
```

## Step 4

Click on the grey box in ``||variables:set projectile to||`` and create a small smiley face.

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
    let projectile = sprites.createProjectile(img`
. . . . . . . . 
. . 5 . . 5 . . 
. . 5 . . 5 . . 
. . . . . . . . 
. 5 . . . . 5 . 
. . 5 5 5 5 . . 
. . . . . . . . 
. . . . . . . . 
`, 0, 0, SpriteKind.Player)
})
```

## Step 5

Find ``||Math:pick random 0 to 10||``. Change the `0` to `-25`, and the `10` to `25`. Place it in ``||sprites:vx||`` in ``||sprites:projectile||``.

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
    let projectile = sprites.createProjectile(img`
. . . . . . . . 
. . 5 . . 5 . . 
. . 5 . . 5 . . 
. . . . . . . . 
. 5 . . . . 5 . 
. . 5 5 5 5 . . 
. . . . . . . . 
. . . . . . . . 
`, Math.randomRange(-25, 25), 0, SpriteKind.Player)
})
```

## Step 6

Duplicate the ``||Math:pick random -25 to 25||`` block and place it in ``||sprites:vy||`` in ``||sprites:projectile||``.

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
    let projectile = sprites.createProjectile(img`
. . . . . . . . 
. . 5 . . 5 . . 
. . 5 . . 5 . . 
. . . . . . . . 
. 5 . . . . 5 . 
. . 5 5 5 5 . . 
. . . . . . . . 
. . . . . . . . 
`, Math.randomRange(-25, 25), Math.randomRange(-25, 25), SpriteKind.Player)
})
```

## Step 7 @fullscreen

Click on the **(+)** in ``||sprites:projectile||`` and change ``||variables:item||`` to ``||variables:mySprite||``.

![Adding from sprite](/static/tutorials/happy-flower/add-from-sprite.gif)

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
    let projectile = sprites.createProjectile(img`
. . . . . . . . 
. . 5 . . 5 . . 
. . 5 . . 5 . . 
. . . . . . . . 
. 5 . . . . 5 . 
. . 5 5 5 5 . . 
. . . . . . . . 
. . . . . . . . 
`, Math.randomRange(-25, 25), Math.randomRange(-25, 25), SpriteKind.Player, mySprite)
})
```

## Step 8 @fullscreen

Find ``||sprites:set mySprite x (horizontal position) to 0||`` in ``||sprites:Sprites||``. Change ``||sprites:x (horizontal position)||`` to ``||sprites:lifespan||``, and `0` to `2000`. Place it after ``||variables:set projectile to||`` and change ``||variables:mySprite||`` to ``||variables:projectile||``.

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
    projectile = sprites.createProjectile(img`
. . . . . . . . 
. . 5 . . 5 . . 
. . 5 . . 5 . . 
. . . . . . . . 
. 5 . . . . 5 . 
. . 5 5 5 5 . . 
. . . . . . . . 
. . . . . . . . 
`, Math.randomRange(-25, 25), Math.randomRange(-25, 25), SpriteKind.Player, mySprite)
    projectile.lifespan = 2000
})
```

## Step 9

Find ``||sprites:set mySprite x (horizontal position) to 0||`` in ``||sprites:Sprites||``. Change ``||sprites:x (horizontal position)||`` to ``||sprites:z (depth)||``, and `0` to `-1`. Place it after ``||variables:set projectile to||`` and change ``||variables:mySprite||`` to ``||variables:projectile||``.

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
    projectile = sprites.createProjectile(img`
. . . . . . . . 
. . 5 . . 5 . . 
. . 5 . . 5 . . 
. . . . . . . . 
. 5 . . . . 5 . 
. . 5 5 5 5 . . 
. . . . . . . . 
. . . . . . . . 
`, Math.randomRange(-25, 25), Math.randomRange(-25, 25), SpriteKind.Player, mySprite)
    projectile.z = -1
    projectile.lifespan = 2000
})
```

## Complete

Congratulations, your happy flower is complete! It will now spread happiness to all around it.