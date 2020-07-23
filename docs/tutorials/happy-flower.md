# Happy Flower

### ~button /#tutorial:/tutorials/happy-flower

Try this tutorial!

### ~

## Introduction @unplugged

Flowers make everyone around them happier, especially the bees who get nectar from them. To show this, we can create a flower that sends happy little bees back to the hive.

![Happy thoughts](/static/tutorials/happy-flower/happy-thoughts.gif)

## Step 1

Find ``||variables:set mySprite to||`` in ``||sprites:Sprites||``. Drag it into the ``||loops:on start||``, and draw a flower. Also, drag in a ``||scene:set background color to||`` and choose ``light blue``.

```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
```

## Step 2

Find an ``||game:on update every 500 ms||`` in ``||game:Game||``, and drag it into the workspace. Set the time to ``1000 ms``.

```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {

})
```

## Step 3

Find ``||sprites:set projectile to projectile from mySprite||`` in ``||sprites:Sprites||``. Pull it out and put it into the ``||game:on game update every 1000 ms||``.

```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
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

Click on the grey box in ``||sprites:projectile||`` and make a nice little bee.

```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    let projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, mySprite, 0, 100)
})
```

## Step 5

Go get a ``||Math:pick random 0 to 10||``. Place it in the ``||sprites:vx||`` slot of ``||sprites:projectile||``. Change the ``0`` to ``-25`` and the ``10`` to ``25``.

```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    let projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, mySprite, randint(-25, 25), 100)
})
```

## Step 6

Duplicate the ``||Math:pick random -25 to 25||`` block and place it in the ``||sprites:vy||`` slot of ``||sprites:projectile||``.

```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    let projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, mySprite, randint(-25, 25), randint(-25, 25))
})
```

## Step 7 @fullscreen

Find the ``||sprites:set mySprite x to 0||`` in ``||sprites:Sprites||``, place it after ``||variables:set projectile to||``, and change ``||variables:mySprite||`` to ``||variables:projectile||``. Change ``||sprites:x||`` to ``||sprites:lifespan||`` and set ``0`` to ``3000``.

![Adding life span](/static/tutorials/happy-flower/life-span.gif)

```blocks
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
})
```

## Step 8

Congratulations, your happy flower is complete! It will now send back joyful little bees. Go run your program in the simulator and see the bees fly away. Did you notice that some of the bees are fly backwards? Do you want to try something extra? If so, we can have some of the bees fly off facing in the opposite direction. Continue on with the next step.

## Step 9

Let's setup a condition to change the image of the bee when it flys off toward the left.
Get an ``||logic:if then||`` and put it after the ``||sprites:set projectile lifespan||``. Replace the ``true`` condition in the ``||logic:if then||`` with a ``||logic:0 < 0||``. Put a ``||sprites:mySprite x||`` in where the first `0` is. Change the ``||variables:mySprite||`` to ``||variables:projectile||`` and change the ``||sprites:x||`` to ``||sprites:vx (velocity x)||``.

```blocks
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
    }
})
```

## Step 10

Go to the Toolbox and open the **Advanced** categories. In ``||images:Images||`` find the ``||images:flip picture horizontally||`` block. Pull it out and place it inside the ``||logic:if then||``. Now, back in ``||sprites:Sprites||``, get a ``||sprites:mySprite image||`` and drop it over the ``||variables:picture||`` variable to replace it in ``||images:flip picture horzontally||``. Change the ``||variables:mySprite||`` to ``||variables:projectile||``.

![Flip image of the bee](/static/tutorials/happy-flower/bee-flip.gif)

```blocks
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
```

## Complete

Alright, now you have bees happily flying away in both directions!
