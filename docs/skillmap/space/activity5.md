# Adding Encounters

### @autoexpandOff true


## Introduction @showdialog

Your universe is pretty empty right now. Let's add some things for your ship
to find! These could be planets or asteroids or space debris left over from
other ships. Or maybe you encounter other travelers, or alien rockets!

## Add an array

First, click on the **Advanced** item in the toolbox. From ``||arrays:Arrays||``,
 drag out the ``||variables:set list to||`` block and add it to
 ``||loops:on start||``.

```blocks
effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . . . . 9 9 . . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . 9 . 9 9 9 9 9 9 . 9 . . .
    . . . 9 . 9 . . . . 9 . 9 . . .
    . . 9 . 9 9 . 9 9 . 9 9 . 9 . .
    . . 9 . 9 9 . . . . 9 9 . 9 . .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    9 . 9 9 9 9 9 9 9 9 9 9 9 9 . 9
    9 . . . . . . . . . . . . . . 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
// @highlight
let list = [1, 2, 3]
```

## Draw some planets

Next, go under **Advanced** again and from ``||images:Images||``, drag out the
gray image square. Put one in each slot of the array, then click on the gray
square to draw your space objects.

```blocks
effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . . . . 9 9 . . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . 9 . 9 9 9 9 9 9 . 9 . . .
    . . . 9 . 9 . . . . 9 . 9 . . .
    . . 9 . 9 9 . 9 9 . 9 9 . 9 . .
    . . 9 . 9 9 . . . . 9 9 . 9 . .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    9 . 9 9 9 9 9 9 9 9 9 9 9 9 . 9
    9 . . . . . . . . . . . . . . 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
// @highlight
let list = [img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 . . . . . . . . . . . . . . 3
    3 . 3 3 3 3 3 3 3 3 3 3 3 3 . 3
    3 . 3 3 3 3 3 . . 3 3 3 3 3 . 3
    3 . 3 3 3 3 . . . 3 3 3 3 3 . 3
    3 . 3 3 3 3 3 . . 3 3 3 3 3 . 3
    3 . 3 3 3 3 3 . . 3 3 3 3 3 . 3
    3 . 3 3 3 3 3 . . 3 3 3 3 3 . 3
    3 . 3 3 3 3 3 . . 3 3 3 3 3 . 3
    3 . 3 3 3 3 3 . . 3 3 3 3 3 . 3
    3 . 3 3 3 3 3 . . 3 3 3 3 3 . 3
    3 . 3 3 3 3 3 . . 3 3 3 3 3 . 3
    3 . 3 3 3 3 . . . . 3 3 3 3 . 3
    3 . 3 3 3 3 3 3 3 3 3 3 3 3 . 3
    3 . . . . . . . . . . . . . . 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    `, img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    6 . . . . . . . . . . . . . . 6
    6 . 6 6 6 6 6 6 6 6 6 6 6 6 . 6
    6 . 6 6 6 . . . . . 6 6 6 6 . 6
    6 . 6 6 . 6 6 6 6 . . 6 6 6 . 6
    6 . 6 6 . 6 6 6 6 . . 6 6 6 . 6
    6 . 6 6 6 6 6 6 6 . . 6 6 6 . 6
    6 . 6 6 6 6 6 6 . . . 6 6 6 . 6
    6 . 6 6 6 6 6 . . . 6 6 6 6 . 6
    6 . 6 6 6 6 . . . 6 6 6 6 6 . 6
    6 . 6 6 6 . . . 6 6 6 6 6 6 . 6
    6 . 6 6 . . . 6 6 6 6 6 6 6 . 6
    6 . 6 6 . . . . . . . . 6 6 . 6
    6 . 6 6 6 6 6 6 6 6 6 6 6 6 . 6
    6 . . . . . . . . . . . . . . 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    `, img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 . . . . . . . . . . . . . . 4
    4 . 4 4 4 4 4 4 4 4 4 4 4 4 . 4
    4 . 4 4 4 4 . . . . . 4 4 4 . 4
    4 . 4 4 4 . 4 4 4 4 . . 4 4 . 4
    4 . 4 4 4 4 4 4 4 4 . . 4 4 . 4
    4 . 4 4 4 4 4 4 4 4 . 4 4 4 . 4
    4 . 4 4 4 4 4 4 . . 4 4 4 4 . 4
    4 . 4 4 4 4 4 4 4 4 . 4 4 4 . 4
    4 . 4 4 4 4 4 4 4 4 . . 4 4 . 4
    4 . 4 4 4 4 4 4 4 4 . . 4 4 . 4
    4 . 4 4 4 . 4 4 4 . . . 4 4 . 4
    4 . 4 4 4 4 . . . . . 4 4 4 . 4
    4 . 4 4 4 4 4 4 4 4 4 4 4 4 . 4
    4 . . . . . . . . . . . . . . 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    `]
```


## Add game update

Now we need to actually add these planets to the game! Add an ``||game:on game
update every||`` block to the workspace and change the interval to **2000**.

```blocks
game.onUpdateInterval(2000, function () {
})
```

## Spawn planets

From ``||sprites:Sprites||`` drag ``||variables(sprites):projectile from side||`` into
the ``||game:on game update every||``. Set the ``||sprites:vx||`` value to `0`.

```blocks
game.onUpdateInterval(2000, function () {
    let projectile = sprites.createProjectileFromSide(img`.`, 0, 50)
})
```

## Set planet image

You already drew your planets, so we need to grab the images from your array.
Find the ``||arrays:get value at||`` in ``||arrays:Arrays||`` and drag it over
the gray image square in your ``||variables(sprites):projectile from side||`` block.
Click the hint to check that your code looks correct!

```blocks
game.onUpdateInterval(2000, function () {
    let projectile = sprites.createProjectileFromSide(list[0], 0, 50)
})
```

## Set planet position
Place a ``||sprites:set position to||`` block right below the
``||variables(sprites):set projectile to||`` ``||sprites:projectile||`` block. Change
the variable to ``||variables(noclick):projectile||`` in the dropdown list. You should
see a row of planets (or asteroids, or alien ships) going down the left side
of your game.

```blocks
game.onUpdateInterval(2000, function () {
    let projectile = sprites.createProjectileFromSide(img`.`, 0, 50);
    projectile.x = 0
})
```
## Add randomness

Let's make things a little more exciting!

Drag out  **two** ``||math:pick random 0 to 10||`` blocks. Put the first one
inside the ``||arrays:get value at||`` and change the second number to **2**.
This is the **number of planets in your list, minus one**.

Put the second one inside ``||sprites:set position to||`` and change the
second number to **160**, or the width of the screen. Now you've got planets
appearing as you travel!

```blocks
game.onUpdateInterval(2000, function () {
    let projectile = sprites.createProjectileFromSide(list[randint(0, 2)], 0, 50)
    projectile.x = randint(0, 160)
})
```

#Finale

That's it! Now you're ready to click **Done** to return to the main page where you can add this game to your gallery and share
with family and friends!




```template
namespace SpriteKind {
    export const Gas = SpriteKind.create()
}

effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . . . . 9 9 . . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . 9 . 9 9 9 9 9 9 . 9 . . .
    . . . 9 . 9 . . . . 9 . 9 . . .
    . . 9 . 9 9 . 9 9 . 9 9 . 9 . .
    . . 9 . 9 9 . . . . 9 9 . 9 . .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    9 . 9 9 9 9 9 9 9 9 9 9 9 9 . 9
    9 . . . . . . . . . . . . . . 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)

game.onUpdateInterval(5000, function () {
    let fuel = sprites.createProjectileFromSide(img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        5 . . . . . . . . . . . . . . 5
        5 . 5 5 5 5 5 5 5 5 5 5 5 5 . 5
        5 . 5 5 5 5 5 5 5 5 5 5 5 5 . 5
        5 . 5 5 5 5 5 5 5 5 5 5 5 5 . 5
        5 . 5 5 5 5 . . . . 5 5 5 5 . 5
        5 . 5 5 5 5 . 5 5 5 5 5 5 5 . 5
        5 . 5 5 5 5 . 5 5 5 5 5 5 5 . 5
        5 . 5 5 5 5 . 5 . . 5 5 5 5 . 5
        5 . 5 5 5 5 . 5 5 . 5 5 5 5 . 5
        5 . 5 5 5 5 . . . . 5 5 5 5 . 5
        5 . 5 5 5 5 5 5 5 5 5 5 5 5 . 5
        5 . 5 5 5 5 5 5 5 5 5 5 5 5 . 5
        5 . 5 5 5 5 5 5 5 5 5 5 5 5 . 5
        5 . . . . . . . . . . . . . . 5
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
        `, 0, 50)
    fuel.setKind(SpriteKind.Gas)
    fuel.x = randint(0, 160)
})

let statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar.attachToSprite(mySprite, 3, 0)
game.onUpdateInterval(200, function () {
    statusbar.value += -1
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Gas, function (sprite, otherSprite) {
    statusbar.value = 100
    otherSprite.destroy()
})

statusbars.onZero(StatusBarKind.Energy, function (status) {
    game.over(false)
})
```

```package
pxt-status-bar=github:jwunderl/pxt-status-bar
```