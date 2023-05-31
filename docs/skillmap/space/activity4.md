# Fuel Up

### @autoexpandOff true

## Introduction @showdialog

Time to refuel!

In this tutorial we'll add a fuel bar to your spaceship
that depletes as you travel.

Make sure to catch the powerups to keep your
ship from breaking down!

![Fuel Up!](/static/skillmap/space/eat-gas.gif "Is it raining...tacos?")


## Step 1
😵 The starter code is taking up a lot of room!
Don't worry, the Arcade workspace will expand for you. Just scroll up and
over (or down and over) to keep building.

---


► Take a peek into the new ``||statusbars:Status Bars||`` category.
You'll find ``||variables(statusbars):set [statusbar] to create status bar sprite width [20] height [4] kind [Health]||``.
Drag one to the end of the ``||loops:on start||`` container.

► To keep track of how much *gas* is left, set the argument for
**statusbar** kind to **Energy**.

---

**Tip:** The ``||statusbars:Status Bars||`` category is an
[__extension__](#extendo "a category that provides extended capabilites to MakeCode").
To see what else you can do using extensions, open a game in your gallery,
click ``||statusbars:˅ Advanced||`` and choose ``||extension:Extensions||``.

```block
let statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
```

## Step 2
If we want the status bar to show the details of **mySprite**, we'll need to link the two together.

---


► Drop ``||statusbars:attach [statusbar] to [mySprite] ⊕||``
into the end of the ``||loops(noclick):on start||`` container.

► Click **⊕** on the new block to reveal options
 to change the position of the status bar in relation to **mySprite**.
 Can you figure out how to get the bar to show up *below* your ship?


```block
let statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
// @highlight
statusbar.attachToSprite(mySprite, -25, 0)
```

## Step 3
⏰ The longer you're in the air, the more fuel you use ⏰

Here's how to make the fuel go down as time passes.

---

► Drag an ``||game:on game update every [500] ms||`` container into the
workspace. Adjust the time argument to **300 ms**.

► Drop a ``||statusbars:change [statusbar] [value] by [0]||``
block into the **game update** container.

► Change the amount the status bar changes from **0** to **-1**.

---


**Tip:** Remember this step later. If the fuel runs out too fast in
gameplay, you can come back and adjust these blocks.


```blocks
let statusbar: StatusBarSprite = null
game.onUpdateInterval(300, function () {
    statusbar.value += -1
})
```

## Step 4
**⛽ Time to refuel ⛽**

You can drop gas canisters, energy crystals, or juicy hamburgers...whatever
makes sense for the vessel you have.

The code for dropping fuel is a lot like the code for dropping enemies.
For a refresher on how things work, find the **myEnemy** blocks in the
workspace and use them as a guide.

---

► Drag a _new_  ``||game:on game update every [500] ms||`` container
into the workspace and change the interval to **5 seconds (5000 ms)**.

► Snap a
``||variables(sprites):set [projectile2] to||`` ``||sprites(sprites):projectile [ ] from side with vx [50] vy [50]||``
block inside the newest **on game update** container.

► Click ``||variables(noclick):[projectile2]||`` and rename the sprite ``||variables(noclick):[myFuel]||``.

► Click on the grey square to bring up the sprite editor so you can
draw a fuel sprite (or choose one from the gallery.)

► Play with the **vx** and **vy** arguments of the fuel until it's falling
straight down at a decent speed.



```blocks
game.onUpdateInterval(5000, function () {
    let myFuel = sprites.createProjectileFromSide(img`
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
})
```
## Step 5

Just like with the enemies, we'll want the fuel to drop from a random position
across the top of the screen.

---

► Connect a ``||sprites:set [mySprite] [x] to [0]||`` block at the
bottom of the ``||game:on game update every [5000] ms||`` container.

► To make sure we're acting on the right sprites, use the dropdown in the
new block to change ``||variables(noclick):mySprite||`` to ``||variables(noclick):myFuel||``.

► To set a random [__*x*__](#setX "horizontal location")
for the fuel, grab a
``||Math:pick random [0] to [10]||`` block
and connect it to replace the **0** argument in the
``||sprites:set [mySprite] [x] to [0]||`` block.

► Update the minimum argument of the ``||Math(noclick):pick random [0] to [10]||`` block to **5** and the
maximum argument to **155**.

---


```blocks
namespace SpriteKind {
    export const Gas = SpriteKind.create()
}

game.onUpdateInterval(5000, function () {
    let myFuel = sprites.createProjectileFromSide(img`
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
        // @highlight
    myFuel.x = randint(5, 155)
})
```

## Step 6

Now we need to put our **myFuel** sprite into the _Gas_ class.

---

► Snap a ``||sprites:set [mySprite] kind to [Player]||`` block
into the bottom of the newest **on game update** container.

► Change ``||variables(noclick):mySprite||`` to ``||variables(noclick):myFuel||``.

► Click ``||sprites:Player||`` to get the menu, then choose
``||sprites:Add a new kind...||`` and create the type **Gas**.


```blocks
namespace SpriteKind {
    export const Gas = SpriteKind.create()
}

game.onUpdateInterval(5000, function () {
    let myFuel = sprites.createProjectileFromSide(img`
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
    myFuel.x = randint(5, 155)
    // @highlight
    myFuel.setKind(SpriteKind.Gas)
})
```


## Step 7
When your ship overlaps fuel, you'll want the gas to disappear as the tank refills.

---


► Drag an ``||sprites:on [sprite] of kind [Player] overlaps [othersprite] of kind [Player]||``
container into the workspace.

► Change the last argument from ``||sprites:Player||`` to ``||sprites:Gas||``.

► To refill the status bar after grabbing fuel, snag a ``||statusbars:set [statusbar] [value] to [0]||`` block
and snap it in to your newest **overlaps** container.  Change the value from **0** to **100**.

► Finally, make sure the used fuel disappears by snapping a ``||sprites:destroy [mySprite] ⊕||`` block
into the bottom of the same **overlaps** container and replacing
``||variables:mySprite||`` with ``||variables:otherSprite||``

![Grabbing variable from block](/static/skillmap/space/give-var.gif "So that's how you do that!")




```blocks
namespace SpriteKind {
    export const Gas = SpriteKind.create()
}

let statusbar: StatusBarSprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gas, function (sprite, otherSprite) {
    statusbar.value = 100
    otherSprite.destroy()
})
```

## Step 9
**🌌 If you run out of fuel, you'll be marooned in space! 🌌**

The threat is real.

---

► To add consequences for an empty status bar, drag a
``||statusbars:on status bar kind [Health] zero [status]||``
container into the workspace.

► Change the status bar kind to **Energy**.

► Snap a ``||game:game over <LOSE>||`` block inside as the ultimate fate.


```blocks
statusbars.onZero(StatusBarKind.Energy, function (status) {
    game.over(false)
})
```


## Finale



**And that's it!**

Click **Done** to return to the main page where you can add this game to your gallery and share with family & friends.

Once your game is in your gallery, you can
experiment with all of the blocks in the toolbox and find many other
exciting and special ways to customize your adventure.








```template

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let projectile = sprites.createProjectileFromSprite(img`
3 3 3 3 3 3 3 3
3 . . . . . . 3
3 . 3 3 3 3 . 3
3 . 3 . . 3 . 3
3 . 3 . . 3 . 3
3 . 3 3 3 3 . 3
3 . . . . . . 3
3 3 3 3 3 3 3 3
    `, mySprite, 0, -70)
    projectile.startEffect(effects.ashes)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.bubbles, 500)
    otherSprite.destroy(effects.smiles, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 500)
})
let myEnemy: Sprite = null
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
game.onUpdateInterval(500, function () {
    myEnemy = sprites.createProjectileFromSide(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 . . . . . . . . . . . . . . 2
        2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
        . 2 . 2 2 2 . . . . 2 2 2 . 2 .
        . 2 . 2 2 2 . 2 2 2 2 2 2 . 2 .
        . . 2 . 2 2 . . . 2 2 2 . 2 . .
        . . 2 . 2 2 . 2 2 2 2 2 . 2 . .
        . . . 2 . 2 . . . . 2 . 2 . . .
        . . . 2 . 2 2 2 2 2 2 . 2 . . .
        . . . . 2 . 2 2 2 2 . 2 . . . .
        . . . . 2 . 2 2 2 2 . 2 . . . .
        . . . . . 2 . 2 2 . 2 . . . . .
        . . . . . 2 . 2 2 . 2 . . . . .
        . . . . . . 2 . . 2 . . . . . .
        . . . . . . 2 . . 2 . . . . . .
        . . . . . . . 2 2 . . . . . . .
        `, 0, 50)
    myEnemy.x = randint(5, 155)
    myEnemy.setKind(SpriteKind.Enemy)
})

```

```ghost
statusbar.positionDirection(CollisionDirection.Top)
```

```package
pxt-status-bar=github:jwunderl/pxt-status-bar
```


```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image1\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAYAYAAAAAAAAAAAAAAAAABmBmYAAAAAAAAAAAAAAAAAZmZmAABgBgAAAAAAAAAAAGBmZgAAZgYAAAAAAAAAAAAAZmYAAGYGAAAAAAAAAAAAAGZmAGBmBgAAAAAAAAAAAABmZgBmZgYAAAAAAAAAAGYAZmYAZmYAAAAAAAAAAABmAGZmYGZmAAAAAAAAAAAAZgZmZmZmBgAAAAAAAAAAAGBmZmZmZgYAAAAAAAAAAABgZmZmZmYAAAAAAAAAAAAAAGZmZmZmAAAAAAAAAAAAAABmZmZmBgAAAAAAAAAAAAAAYGZmZgYAAAAAAAAAAAAAAGBmZmYAAAAAAAAAAAAAAABg9mZmAAAAAAAAAAAAAAAAYPZmZgAAAAAAAAAAAAAAAAD/b2YAAAAAAAAAAAAAAAAA/29mAAAAAAAAAAAAAAAAAP9vZgAAAAAAAAAAAAAAAAD//2YAAAAAAAAAAAAAAAAA8P9mAAAAAAAAAAAAAAAAAPBvZgAAAAAAAAAAAAAAAABgb2YAAAAAAAAAAAAAAAAAAGYGAAAAAAAAAAAAAAAAAABmBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"bluePlane\"\n    },\n    \"image2\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgZmYGAAAAAAAAAAAAAAAAYJZmBgAAAAAAAAAAAAAAAACWaQAAAAAAAAAAAAAAAAAAZmYAAAAAAAAAAAAACQAAAGAGAAAAYAAAAAAAAGYAAGCWZgYAAGYAAAAAAABpAABgmWYGAABpAAAAAAAAaQAAYJZmBgAAaQAAAAAAAGkAAGaZZmYGAGkAAAAAAABpAGBmaWYGZgZpAAAAAAAAZmBmYJlmBgBmZgAAAAAAAGlmAGCWZgYAYGkAAAAAAABpAABglmYGAABmAAAAAAAARAAAYJlmBgAARAAAAAAAAAAAAGCZZgYAAAAAAAAAAAAAAABglmYGAAAAAAAAAAAAAAAAYJlmBgAAAAAAAAAAAAAAAGCZZgYAAAAAAAAAAAAAAABgmWYGAAAAAAAAAAAAAAAAYJZmBgAAAAAAAAAAAAAAAGBmZgYAAAAAAAAAAAAAAAAAZmYAAAAAAAAAAAAAAAAAAJlmAAAAAAAAAAAAAAAAAABmZgAAAAAAAAAAAAAAAAAAkAYAAAAAAAAAAAAAAAAAAJAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Blue Rocket\"\n    },\n    \"image3\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAABEQAAEAAAAAAAAAAAAAAAAQEREAAAAAAAAAAAAAAAAAABUBAAAAAAAAAAAAAAAAAAAzAwAwAAAAAAAAAAAAMzMwMzMwMwAAAAAAAAAAADMzLy7y8zMAAAAAAAAAAAAwMy8u8vMDAAAAAAAAAAAAMDMvLvLzAwAAAAAAAAAAADAzLy7y8wAAAAAAAAAAAAAAMy8u8vMAAAAAAAAAAAAAADMvLvLzAAAAAAAAAAAAAAAzLy7ywwAAAAAAAAAAAAAALC7u7sLAAAAAAAAAAAAAACwu7u7CwAAAAAAAAAAAAAAsLvMuwAAAAAAAAAAAAAAAADLzLwAAAAAAAAAAAAAAAAAu8y7AAAAAAAAAAAAAAAAALC7CwAAAAAAAAAAAAAAAACwuwsAAAAAAAAAAAAAAAAAALsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"PurpleRocket\"\n    },\n    \"image4\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAUAAAAAAAAAAAAACAiP8AjwgAAAAAAAAAAAAAQIiIiIgIAAAAAAAAAAAAAACIiIiIAAAAAAAAAAAAAAAAj4j4DwAAAAAAAAAAAAAAAPCI/wAAAAAAAAAAAAAAAADwiP8AAAAAAAAAAAAAAAAA8Ij4AACABQAAAAAAAAAAAPiIiIiIiAUAAAAAAAAAAACIiIiIiIgFAAAAAAAAAAD/+IiIiIiIBQAAAAAAAED///iIiIiICAAAAAAAAABA///4iIiIiAAAAAAAAAAAQP//+IiI+AgAAAAAAAAAAADw//iIiP8AAAAAAAAAAAAAAP/4iPgPAAAAAAAAAAAAAADw+Ij4AAAAAAAAAAAAAAAAAPiI+AAAAAAAAAAAAAAAAACIiIgAAAAAAAAAAAAAAAAA+Ij4AAAAAAAAAAAAAAAAAPiPiAAAAAAAAAAAAAAAAAD4j/gAAAAAAAAAAAAAAAAA+P/4AAAAAAAAAAAAAAAAAPj/+AAAAAAAAAAAAAAAAACAjwgAAAAAAAAAAAAAAAAAAIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"BlueBaumer\"\n    },\n    \"image5\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAD//wHwHwAAAAAAAAAAAAAAERER/x8AAAAAAAAAAAAAALAR8f8RAAAAAAAAAAAAAAAAG/8RAQAAAAAAAAAAAAAAALsREQEAAAAAAAAAAAAAAAC/sREBAAAAAAAAAAAAAADwv7ERAQAAAAAAAAAAAAAAELGxGwAAAAAAAAAAAAAAAACxERsAAAAAAAAAAAAAAAAAsREbAAAAAAAAAAAAAAAAALARuwAAAAAAAAAAAAAAAACwEREAAAAAAAAAAAAAAAAAsBHxAAAAAAAAAAAAAAAAALBh8QAAAAAAAAAAAAAAAAAA9v8AAAAAAAAAAAAAAAAAAPv/AAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"RocketMan\"\n    },\n    \"image6\": {\n        \"data\": \"hwQYABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAPAAAAAAAAAAAAAP//AAAAAAAAAAAA/1T1AAAAAAAAAAAA/1RERAAAAAAAAAAiQlREVAQAAAAAAAAiQlRERAAAAAAAAAAiQlRERQAAAAAAAAAgQlREBAAAAAAAAAAgQlRUAAAAAAAAAAAgQlREAAAAAAAAAAAAIlQFAAAAAAAAAAAAQlQAAAAAAAAAAAAAQFQAAAAAAAAAAAAAQFQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"stealth\"\n    },\n    \"image7\": {\n        \"data\": \"hwQYABgAAAAAAAAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAABGBgAAAAAAAAAAAGBmZgAAAAAAAAAAAGBmZgAAAAAAAAAAAGZmZgYAAAAAAAAAmZlmZgQAAAAAAACQGZFpZgQAAAAAAACZEZlpZgYAAAAAAAAZkZlpZgYAAAAAAAAZkZmZZgYAAAAAAACZmZmZZgYAAAAAAACZmZmZZgYAAAAAAACZmZlpZgYAAAAAAACZmZlpZgYAAAAAAACQmZlpRgQAAAAAAAAAmZlmRgQAAAAAAAAAAGZmZgAAAAAAAAAAAGZmZgAAAAAAAAAAAGZmBgAAAAAAAAAAAGBkBgAAAAAAAAAAAGBEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"UFO\"\n    },\n    \"image8\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAiAgAA/w8AAAAAAAAAAAAA8i8A8P8P8A8AAAAAAAAAACD/AvDyD/8PAAAAAAAAAAAA/y8g8vIvAAAAAAAAAAAAACL/8vL/IgAAAAAAAAAAAAAg8i/y/wIAAAAAAAAAAAAAACIv8i8AAAAAAAAAAAAAAAAgIv8iAAAAAAAAAAAAAAAAICIvIgAAAAAAAAAAAAAAACAiIgIAAAAAAAAAAAAAAAAgIiICAAAAAAAAAAAAAAAA8v8iAgAAAAAAAAAAAAAAAPK7LwIAAAAAAAAAAAAAAADw+y8CAAAAAAAAAAAAAAAAIP8vAgAAAAAAAAAAAAAAAAD/LwIAAAAAAAAAAAAAAAAA8i8CAAAAAAAAAAAAAAAAAPAvAgAAAAAAAAAAAAAAAADwLwIAAAAAAAAAAAAAAAAAIC8CAAAAAAAAAAAAAAAAAAAvAgAAAAAAAAAAAAAAAAAAIgIAAAAAAAAAAAAAAAAAACACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Spider\"\n    },\n    \"image9\": {\n        \"data\": \"hwQqACoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLAAAAAAAAAAAAAAAAAAAAAAAAAAAAALDLAAAAAAAAAAAAAAAAAAAAAAAAAAAAALDLAAAAAAAAAAAAAAAAAAAAAAAAAAAAALDLAAAAAAAAAAAAAAAAAAAAAAAAAAAAALDLAAAAAAAAAAAAAAAAAAAAAAAAAAAAALDLAAC7AAAAAAAAAAAAAAAAAAAAAAAAALDLALDMAAAAAAAAAAAAAAAAAAAAAAAAALDLALDLAAAAAAAAAAAAAAAAAAAAAAAAALDLvLvMAAAAAAAAAAAAAAAAAAAAAAAAALDLALvMAAAAAAAAAAAAAAAAAAAAAAAAALDLALvMAAAAAAAAAAAAAAAAAAAAAAAAALALALvLAAAAAAAAAAAAAAAAAAAAAAAAALAAALvMAAAAAAAAAAAAAAAAAAAAAAAAALAAALvLAAAAAAAAAAAAAAAAAAAAAAAAAAAAALvLAAAAAAAAAAAAAAAAAAAAAAAAAAAAu7vMAAAAAAAAAAAAAAAAAAAAAAAAALAAu7DMAAAAAAAAAAAAAAAAAAAAAAAAALC7C7DMAAAAAAAAAAAAAAAAAAAAAAAAALu7ALDMAAAAAAAAAAAAAAAAAAAAAAAAAMzLDLALAAAAAAAAAAAAAAAAAAAAAAAAAMzLDLAMAAAAAAAAAAAAAAAAAAAAAAAAALy7DAAAAAAAAAAAAAAAAAAAAAAAAAAAsMzLDAAAAAAAAAAAAAAAAAAAAAAAAAAAwLzLDAAAAAAAAAAAAAAAAAAAAAAAAAAAy7y7zAAAAAAAAAAAAAAAAAAAAAAAAAAAzLzLzAAAAAAAAAAAAAAAAAAAAAAAAAAAwLzLDAAAAAAAAAAAAAAAAAAAAAAAAAAAwLzLDAAAAAAAAAAAAAAAAAAAAAAAAAAAALzLCwAAAAAAAAAAAAAAAAAAAAAAAAAAALzLDAAAAAAAAAAAAAAAAAAAAAAAAAAAALDLDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"MSS Centerprise\"\n    },\n    \"image10\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0AsAAAAAAAAAAAAAAAAAAN0LAAAAAAAAAAAAAAAAANC9DAAAAAAAAAAAAAAAAADQvQsAAAAAAAAAAAAAAACw3csLAAAAAAAAAAAAAAAA0N3MC7wAAAAAAAAAAAAAANDNzA3MAAAAAAAAAAAAAADQzczNzAAAAAAAAAAAAAAAAL3MzbwAAAAAAAAAAAAAAAC9zM28AAAAAAAAAAAAAAAAvczNDAAAAAAAAAAAAAAAAL3MzQwAAAAAAAAAAAAAAADdzM0MAAAAAAAAAAAAAAAA3czNDAAAAAAAAAAAAAAAAN3MzQwAAAAAAAAAAAAAAADQzM0AAAAAAAAAAAAAAAAA0MzNAAAAAAAAAAAAAAAAANDNvQAAAAAAAAAAAAAAAAAAzb0AAAAAAAAAAAAAAAAAAN3NAAAAAAAAAAAAAAAAAADdzQAAAAAAAAAAAAAAAAAA3cwAAAAAAAAAAAAAAAAAAN3MAAAAAAAAAAAAAAAAAADdzAAAAAAAAAAAAAAAAAAA3QsAAAAAAAAAAAAAAAAAAN0AAAAAAAAAAAAAAAAAAADQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Fast n Blurrious\"\n    },\n    \"image11\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGYGAAAAAAAAAAAAAAAAAABmBgAAAAAAAAAAAAAAAABgb2YAAAAAAAAAAAAAAAAA8G9mAAAAAAAAAAAAAAAAAPD/ZgAAAAAAAAAAAAAAAAD//2YAAAAAAAAAAAAAAAAA/29mAAAAAAAAAAAAAAAAAP9vZgAAAAAAAAAAAAAAAAD/b2YAAAAAAAAAAAAAAABg9mZmAAAAAAAAAAAAAAAAYPZmZgAAAAAAAAAAAAAAAGBmZmYAAAAAAAAAAAAAAABgZmZmBgAAAAAAAAAAAAAAZmZmZgYAAAAAAAAAAAAAAGZmZmZmAAAAAAAAAAAAAGBmZmZmZgAAAAAAAAAAAABgZmZmZmYGAAAAAAAAAAAAZgZmZmZmBgAAAAAAAAAAAGYAZmZgZmYAAAAAAAAAAABmAGZmAGZmAAAAAAAAAAAAAABmZgBmZgYAAAAAAAAAAAAAZmYAYGYGAAAAAAAAAAAAAGZmAABmBgAAAAAAAAAAAGBmZgAAZgYAAAAAAAAAAABmZmYAAGAGAAAAAAAAAAAAZgZmAAAAAAAAAAAAAAAAYAYAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"bluePlane0\"\n    },\n    \"image12\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAYAAAAAAAAAAAAAAAAAAJAGAAAAAAAAAAAAAAAAAABmZgAAAAAAAAAAAAAAAAAAmWYAAAAAAAAAAAAAAAAAAGZmAAAAAAAAAAAAAAAAAGBmZgYAAAAAAAAAAAAAAABglmYGAAAAAAAAAAAAAAAAYJlmBgAAAAAAAAAAAAAAAGCZZgYAAAAAAAAAAAAAAABgmWYGAAAAAAAAAAAAAAAAYJZmBgAAAAAAAAAAAAAAAGCZZgYAAAAAAAAAAABEAABgmWYGAABEAAAAAAAAaQAAYJZmBgAAZgAAAAAAAGlmAGCWZgYAYGkAAAAAAABmYGZgmWYGAGZmAAAAAAAAaQBgZmlmBmYGaQAAAAAAAGkAAGaZZmYGAGkAAAAAAABpAABglmYGAABpAAAAAAAAaQAAYJlmBgAAaQAAAAAAAGYAAGCWZgYAAGYAAAAAAAAJAAAAYAYAAABgAAAAAAAAAAAAAGZmAAAAAAAAAAAAAAAAAACWaQAAAAAAAAAAAAAAAABglmYGAAAAAAAAAAAAAAAAYGZmBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Blue Rocket0\"\n    },\n    \"image13\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuwAAAAAAAAAAAAAAAAAAsLsLAAAAAAAAAAAAAAAAALC7CwAAAAAAAAAAAAAAAAC7zLsAAAAAAAAAAAAAAAAAy8y8AAAAAAAAAAAAAAAAsLvMuwAAAAAAAAAAAAAAALC7u7sLAAAAAAAAAAAAAACwu7u7CwAAAAAAAAAAAAAAzLy7ywwAAAAAAAAAAAAAAMy8u8vMAAAAAAAAAAAAAADMvLvLzAAAAAAAAAAAAADAzLy7y8wAAAAAAAAAAAAAwMy8u8vMDAAAAAAAAAAAAMDMvLvLzAwAAAAAAAAAAADMzLy7y8zMAAAAAAAAAAAAzMzAzMzAzAAAAAAAAAAAAAAAAMwMAMAAAAAAAAAAAAAAAABUBAAAAAAAAAAAAAAAAABAREQAAAAAAAAAAAAAAAAAREAABAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"PurpleRocket0\"\n    },\n    \"image14\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiAAAAAAAAAAAAAAAAAAAgI8IAAAAAAAAAAAAAAAAAPj/+AAAAAAAAAAAAAAAAAD4//gAAAAAAAAAAAAAAAAA+I/4AAAAAAAAAAAAAAAAAPiPiAAAAAAAAAAAAAAAAAD4iPgAAAAAAAAAAAAAAAAAiIiIAAAAAAAAAAAAAAAAAPiI+AAAAAAAAAAAAAAAAPD4iPgAAAAAAAAAAAAAAAD/+Ij4DwAAAAAAAAAAAADw//iIiP8AAAAAAAAAAABA///4iIj4CAAAAAAAAAAAQP//+IiIiIgAAAAAAAAAAED///iIiIiICAAAAAAAAAAAAP/4iIiIiIgFAAAAAAAAAAAAiIiIiIiIBQAAAAAAAAAAAPiIiIiIiAUAAAAAAAAAAADwiPgAAIAFAAAAAAAAAAAA8Ij/AAAAAAAAAAAAAAAAAPCI/wAAAAAAAAAAAAAAAACPiPgPAAAAAAAAAAAAAAAAiIiIiAAAAAAAAAAAAAAAQIiIiIgIAAAAAAAAAAAAAICI/wCPCAAAAAAAAAAAAAAAAA8AAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"BlueBaumer0\"\n    },\n    \"image15\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAA+/8AAAAAAAAAAAAAAAAAAPb/AAAAAAAAAAAAAAAAALBh8QAAAAAAAAAAAAAAAACwEfEAAAAAAAAAAAAAAAAAsBERAAAAAAAAAAAAAAAAALARuwAAAAAAAAAAAAAAAACxERsAAAAAAAAAAAAAAAAAsREbAAAAAAAAAAAAAAAAELGxGwAAAAAAAAAAAAAAAPC/sREBAAAAAAAAAAAAAAAAv7ERAQAAAAAAAAAAAAAAALsREQEAAAAAAAAAAAAAAAAb/xEBAAAAAAAAAAAAAACwEfH/EQAAAAAAAAAAAAAAERER/x8AAAAAAAAAAAAAAP//AfAfAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"RocketMan0\"\n    },\n    \"image16\": {\n        \"data\": \"hwQYABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAQFQAAAAAAAAAAAAAQFQAAAAAAAAAAAAAQlQAAAAAAAAAAAAAIlQFAAAAAAAAAAAgQlREAAAAAAAAAAAgQlRUAAAAAAAAAAAgQlREBAAAAAAAAAAiQlRERQAAAAAAAAAiQlRERAAAAAAAAAAiQlREVAQAAAAAAAAA/1RERAAAAAAAAAAA/1T1AAAAAAAAAAAAAP//AAAAAAAAAAAAAPAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"stealth0\"\n    },\n    \"image17\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgAAAAAAAAAAAAAAAAAAIgIAAAAAAAAAAAAAAAAAAC8CAAAAAAAAAAAAAAAAACAvAgAAAAAAAAAAAAAAAADwLwIAAAAAAAAAAAAAAAAA8C8CAAAAAAAAAAAAAAAAAPIvAgAAAAAAAAAAAAAAAAD/LwIAAAAAAAAAAAAAAAAg/y8CAAAAAAAAAAAAAAAA8PsvAgAAAAAAAAAAAAAAAPK7LwIAAAAAAAAAAAAAAADy/yICAAAAAAAAAAAAAAAAICIiAgAAAAAAAAAAAAAAACAiIgIAAAAAAAAAAAAAAAAgIi8iAAAAAAAAAAAAAAAAICL/IgAAAAAAAAAAAAAAACIv8i8AAAAAAAAAAAAAACDyL/L/AgAAAAAAAAAAAAAi//Ly/yIAAAAAAAAAAAAA/y8g8vIvAAAAAAAAAAAAIP8C8PIP/w8AAAAAAAAAAPIvAPD/D/APAAAAAAAAAAAiAgAA/w8AAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Spider0\"\n    },\n    \"image18\": {\n        \"data\": \"hwQqACoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC7AAAAAAAAAAAAAAAAAAAAAAAAAAAAALDLDAAAAAAAAAAAAAAAAAAAAAAAAAAAALzLDAAAAAAAAAAAAAAAAAAAAAAAAAAAALzLCwAAAAAAAAAAAAAAAAAAAAAAAAAAwLzLDAAAAAAAAAAAAAAAAAAAAAAAAAAAwLzLDAAAAAAAAAAAAAAAAAAAAAAAAAAAzLzLzAAAAAAAAAAAAAAAAAAAAAAAAAAAy7y7zAAAAAAAAAAAAAAAAAAAAAAAAAAAwLzLDAAAAAAAAAAAAAAAAAAAAAAAAAAAsMzLDAAAAAAAAAAAAAAAAAAAAAAAAAAAALy7DAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzLDLAMAAAAAAAAAAAAAAAAAAAAAAAAAMzLDLALAAAAAAAAAAAAAAAAAAAAAAAAALu7ALDMAAAAAAAAAAAAAAAAAAAAAAAAALC7C7DMAAAAAAAAAAAAAAAAAAAAAAAAALAAu7DMAAAAAAAAAAAAAAAAAAAAAAAAAAAAu7vMAAAAAAAAAAAAAAAAAAAAAAAAAAAAALvLAAAAAAAAAAAAAAAAAAAAAAAAALAAALvLAAAAAAAAAAAAAAAAAAAAAAAAALAAALvMAAAAAAAAAAAAAAAAAAAAAAAAALALALvLAAAAAAAAAAAAAAAAAAAAAAAAALDLALvMAAAAAAAAAAAAAAAAAAAAAAAAALDLALvMAAAAAAAAAAAAAAAAAAAAAAAAALDLvLvMAAAAAAAAAAAAAAAAAAAAAAAAALDLALDLAAAAAAAAAAAAAAAAAAAAAAAAALDLALDMAAAAAAAAAAAAAAAAAAAAAAAAALDLAAC7AAAAAAAAAAAAAAAAAAAAAAAAALDLAAAAAAAAAAAAAAAAAAAAAAAAAAAAALDLAAAAAAAAAAAAAAAAAAAAAAAAAAAAALDLAAAAAAAAAAAAAAAAAAAAAAAAAAAAALDLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"MSS Centerprise0\"\n    },\n    \"image19\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAAAAAAAAAAAAAAAAA3QAAAAAAAAAAAAAAAAAAAN0LAAAAAAAAAAAAAAAAAADdzAAAAAAAAAAAAAAAAAAA3cwAAAAAAAAAAAAAAAAAAN3MAAAAAAAAAAAAAAAAAADdzQAAAAAAAAAAAAAAAAAA3c0AAAAAAAAAAAAAAAAAAM29AAAAAAAAAAAAAAAAANDNvQAAAAAAAAAAAAAAAADQzM0AAAAAAAAAAAAAAAAA0MzNAAAAAAAAAAAAAAAAAN3MzQwAAAAAAAAAAAAAAADdzM0MAAAAAAAAAAAAAAAA3czNDAAAAAAAAAAAAAAAAL3MzQwAAAAAAAAAAAAAAAC9zM0MAAAAAAAAAAAAAAAAvczNvAAAAAAAAAAAAAAAAL3MzbwAAAAAAAAAAAAAANDNzM3MAAAAAAAAAAAAAADQzcwNzAAAAAAAAAAAAAAA0N3MC7wAAAAAAAAAAAAAALDdywsAAAAAAAAAAAAAAAAA0L0LAAAAAAAAAAAAAAAAANC9DAAAAAAAAAAAAAAAAAAA3QsAAAAAAAAAAAAAAAAAANALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Fast n Blurrious0\"\n    },\n    \"image20\": {\n        \"data\": \"hwQYABgAAAAAAAAAAEAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAEREAAAAAAAAAAAAAPRPAAAAAAAAAACAIW/2AAAAAAAAAAAgIWiIAAAAAAAAAAAAIWaIAAAAAAAAAAAAIGYIAAAAAAAAAAAAAGYGAAAAAAAAAAAAAGYGAAAAAAAAAAAAAGYGAAgAAAAAAAAAkGYGiAgAAAAAAAAAmWmGiAgAAAAAAAAAmWmGiAgAAAAAAAAAmWmGiAgAAAAAAAAAmWmGiAIAAAAAAAAAmWlmKAAAAAAAAAAAkGZmAgAAAAAAAAAAAGZmAAAAAAAAAAAAAGZmAAAAAAAAAAAAAGBmAAAAAAAAAAAAAGBmAAAAAAAAAAAAAGBmAAAAAAAAAAAAAAAGAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"galgaPlane1\"\n    },\n    \"image21\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAAgAAAAAAAAACAAAAAAAAAAIgIAAAAAAAAqCgAAAAAAAKoKAAAAAAAAVQUAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"galgaDart1\"\n    },\n    \"image22\": {\n        \"data\": \"hwQYABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAIAAAAAAAAAAAAAACIAAAAAAAAAAAAAkCIAAAAAAAAAAAAAmSkAAAAAAAAAAAAAmSkAAAAAAAAAAAAAkFIFAAAAAAAAAAAAAFJVAAAAAAAAAAAAAFJVBQAAAAAAAAAAACIAAAAAAAAAAAAAUCIAAAAAAAAAAAAAVf8AAAAAAAAAAAAAAEQAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"galgaEnemy1\"\n    },\n    \"image23\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAQABAAAAAAAAAUAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAUAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAVQUAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"galgaDart2\"\n    },\n    \"image24\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAFUFAAAAAAAAqgoAAAAAAAAqCgAAAAAAACICAAAAAAAAIAAAAAAAAAAgAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"galgaDart0\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image1\":\n            case \"bluePlane\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n.........666....................\n..6......66666..................\n..666......66666................\n...666......66666666............\n...66666666666666666ffff........\n....66666666666666ffffffff6.....\n...66666666666666666fffffff66...\n..666666666666666666666ff6666...\n...........666666666666666666...\n..........66666666666666666.....\n........666666666...............\n.......66666666.................\n.....66666666...................\n....6666666.....................\n....66666.......................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n`;\n            case \"image2\":\n            case \"Blue Rocket\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n.......9699996994...............\n........666666664...............\n..............6.................\n.............66.................\n.............6..................\n............66..................\n...........66...................\n...66...6666666666666666........\n...6666.6969996699699966696.....\n...69966999969999999999669699...\n...66966666666666666666666666...\n...6666.6666666666666666666.....\n...66...6666666666666666........\n...........6....................\n...........66...................\n............6...................\n............66..................\n.............66.................\n........699996964...............\n.......6666666664...............\n................................\n................................\n................................\n................................\n................................\n................................\n`;\n            case \"image3\":\n            case \"PurpleRocket\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n..........cc....................\n..........ccccc.................\n..........cccccccc..............\n..........ccccccccbbb...........\n......4....cccccccbbbbb.........\n......44..cbbbbbbbbbbcbbb.......\n.......44ccbbbbbbbbbcccbbb......\n....44445ccbbbbbbbbbcccbbb......\n.......44ccbbbbbbbbbbcbbb.......\n.......4..ccccccccbbbbb.........\n......4....cccccccbb............\n..........ccccccc...............\n..........cccc..................\n.........ccc....................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n`;\n            case \"image4\":\n            case \"BlueBaumer\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n..............444...............\n..............fff...............\n..............ffff..............\n.............ffffff.............\n....84.......fffffff............\n....888f...8888888888888888.....\n....8888ffff8ffffffff8fffff8....\n...ff888888888888888888fffff8...\n....f88888888888888888888ff88...\n.....888ff888888888888888888....\n.....88ffff8888888fff8f8fff.....\n....f88f...888888ff.............\n....888....88888ff..............\n....88.....888888...............\n...5.......88888................\n...........8888.................\n..........8888..................\n..........5555..................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n`;\n            case \"image5\":\n            case \"RocketMan\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n.......f1.......................\n.......f1b...f1.................\n.......f11bbff111...............\n.......f111bbbbbbbbbb...........\n.......111f11111111116b.........\n........1ff1bbb111116ff.........\n........ff1111bbbb111fff........\n.......fff1111111b1ffff.........\n......fff11111..................\n.......111......................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n`;\n            case \"image6\":\n            case \"stealth\":return img`\n........................\n........................\n........................\n........................\n........................\n........................\n.........222............\n.........222222.........\n.......ff22222222.......\n.......ff4444442444.....\n......f4444444444444....\n.....ff555555555555.....\n.....ff544444445........\n......ff4444454.........\n........44454...........\n........4544............\n.........4..............\n........................\n........................\n........................\n........................\n........................\n........................\n........................\n`;\n            case \"image7\":\n            case \"UFO\":return img`\n........................\n........................\n........................\n........................\n........................\n........................\n........9999999.........\n.......991199999........\n......99111999999.......\n......91199999999.......\n.....691999999999666....\n...6669999999999966666..\n.466666999999999666644..\n.446666666999666666664..\n..6666666666666666666...\n...6666666666664466.....\n.....644666666644.......\n........................\n........................\n........................\n........................\n........................\n........................\n........................\n`;\n            case \"image8\":\n            case \"Spider\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n.....22.........................\n.....2f2........................\n.....2fff2......................\n......2ff22.....................\n.......2ff22....22..............\n........2ff22222fff2............\n.........2ff2222fbbff2..........\n......ff2f222222fbffffff2.......\n....fff22222ff222fffffffff2.....\n....fffffffff222222222222222....\n.....fff2fff2222222222222222....\n........fff222..................\n.......ff22.....................\n......ff22......................\n......ff........................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n`;\n            case \"image9\":\n            case \"MSS Centerprise\":return img`\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n.............................bc...........\n...........................bccccc.........\n.......................bccccccccccc.......\n......bbbbbbbbbbbbb..bbbccbcbbbbbbbb......\n.....bbbbbbbbbbbb.....bbbbbbbbbbbbbbbb....\n...ccccccccccccc......bbccbccbccccccb.....\n.............c......bbb.cccccccccbcc......\n.............b......bb.......cc...........\n.............bbbbbbbb.....................\n...........bbbbbbbbbbbbbbb................\n..........bcbcccbcbbccccbc................\n..........bccccccccccccc..................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n`;\n            case \"image10\":\n            case \"Fast n Blurrious\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n.......bddd.....................\n.......ddddddddddd..............\n.....ddddccbbbbdddddd...........\n....dddbccccccccccccddddddddd...\n...ddbbcccccccccccccccdddddddd..\n...bbcbbbdddddddddddddddcccb....\n..........ccccccccccbbccccc.....\n........cccccccccc..............\n........bccbb...................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n`;\n            case \"image11\":\n            case \"bluePlane0\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n....................666.........\n..................66666......6..\n................66666......666..\n............66666666......666...\n........ffff66666666666666666...\n.....6ffffffff66666666666666....\n...66fffffff66666666666666666...\n...6666ff666666666666666666666..\n...666666666666666666...........\n.....66666666666666666..........\n...............666666666........\n.................66666666.......\n...................66666666.....\n.....................6666666....\n.......................66666....\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n`;\n            case \"image12\":\n            case \"Blue Rocket0\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n...............4996999969.......\n...............466666666........\n.................6..............\n.................66.............\n..................6.............\n..................66............\n...................66...........\n........6666666666666666...66...\n.....6966699969966999696.6666...\n...99696699999999996999966996...\n...66666666666666666666666966...\n.....6666666666666666666.6666...\n........6666666666666666...66...\n....................6...........\n...................66...........\n...................6............\n..................66............\n.................66.............\n...............469699996........\n...............4666666666.......\n................................\n................................\n................................\n................................\n................................\n................................\n`;\n            case \"image13\":\n            case \"PurpleRocket0\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n....................cc..........\n.................ccccc..........\n..............cccccccc..........\n...........bbbcccccccc..........\n.........bbbbbccccccc....4......\n.......bbbcbbbbbbbbbbc..44......\n......bbbcccbbbbbbbbbcc44.......\n......bbbcccbbbbbbbbbcc54444....\n.......bbbcbbbbbbbbbbcc44.......\n.........bbbbbcccccccc..4.......\n............bbccccccc....4......\n...............ccccccc..........\n..................cccc..........\n....................ccc.........\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n`;\n            case \"image14\":\n            case \"BlueBaumer0\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n...............444..............\n...............fff..............\n..............ffff..............\n.............ffffff.............\n............fffffff.......48....\n.....8888888888888888...f888....\n....8fffff8ffffffff8ffff8888....\n...8fffff888888888888888888ff...\n...88ff88888888888888888888f....\n....888888888888888888ff888.....\n.....fff8f8fff8888888ffff88.....\n.............ff888888...f88f....\n..............ff88888....888....\n...............888888.....88....\n................88888.......5...\n.................8888...........\n..................8888..........\n..................5555..........\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n`;\n            case \"image15\":\n            case \"RocketMan0\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n.......................1f.......\n.................1f...b1f.......\n...............111ffbb11f.......\n...........bbbbbbbbbb111f.......\n.........b61111111111f111.......\n.........ff611111bbb1ff1........\n........fff111bbbb1111ff........\n.........ffff1b1111111fff.......\n..................11111fff......\n......................111.......\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n`;\n            case \"image16\":\n            case \"stealth0\":return img`\n........................\n........................\n........................\n........................\n........................\n........................\n............222.........\n.........222222.........\n.......22222222ff.......\n.....4442444444ff.......\n....4444444444444f......\n.....555555555555ff.....\n........544444445ff.....\n.........4544444ff......\n...........45444........\n............4454........\n..............4.........\n........................\n........................\n........................\n........................\n........................\n........................\n........................\n`;\n            case \"image17\":\n            case \"Spider0\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n.........................22.....\n........................2f2.....\n......................2fff2.....\n.....................22ff2......\n..............22....22ff2.......\n............2fff22222ff2........\n..........2ffbbf2222ff2.........\n.......2ffffffbf222222f2ff......\n.....2fffffffff222ff22222fff....\n....222222222222222fffffffff....\n....2222222222222222fff2fff.....\n..................222fff........\n.....................22ff.......\n......................22ff......\n........................ff......\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n`;\n            case \"image18\":\n            case \"MSS Centerprise0\":return img`\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n...........cb.............................\n.........cccccb...........................\n.......cccccccccccb.......................\n......bbbbbbbbcbccbbb..bbbbbbbbbbbbb......\n....bbbbbbbbbbbbbbbb.....bbbbbbbbbbbb.....\n.....bccccccbccbccbb......ccccccccccccc...\n......ccbccccccccc.bbb......c.............\n...........cc.......bb......b.............\n.....................bbbbbbbb.............\n................bbbbbbbbbbbbbbb...........\n................cbccccbbcbcccbcb..........\n..................cccccccccccccb..........\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n..........................................\n`;\n            case \"image19\":\n            case \"Fast n Blurrious0\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n.....................dddb.......\n..............ddddddddddd.......\n...........ddddddbbbbccdddd.....\n...dddddddddccccccccccccbddd....\n..ddddddddcccccccccccccccbbdd...\n....bcccdddddddddddddddbbbcbb...\n.....cccccbbcccccccccc..........\n..............cccccccccc........\n...................bbccb........\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n................................\n`;\n            case \"image20\":\n            case \"galgaPlane1\":return img`\n........................\n........................\n........................\n........................\n........................\n........................\n........................\n....82..................\n....111.....99999.......\n....2222...9999999......\n.444f866666699999666....\n444f6666666666666666666.\n.44f68886666666666666666\n..44f88.....88886666666.\n...........8888882......\n...........888882.......\n..........888882........\n........................\n........................\n........................\n........................\n........................\n........................\n........................\n`;\n            case \"image21\":\n            case \"galgaDart1\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . 2 a a 5 . . . . \n. . . 4 4 4 2 2 2 2 a 5 5 . . . \n. . . . . . . . 2 a a 5 . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image22\":\n            case \"galgaEnemy1\":return img`\n........................\n........................\n........................\n........................\n........................\n........................\n........................\n........................\n........99.....5........\n.......9999...55........\n....22229922222f44......\n......222255522f444.....\n..........555...........\n...........55...........\n............5...........\n........................\n........................\n........................\n........................\n........................\n........................\n........................\n........................\n........................\n`;\n            case \"image23\":\n            case \"galgaDart2\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . 4 . . . . . . . . . . . \n. . . . . . . . . . . 5 . . . . \n. . . 4 . 5 5 5 5 5 5 5 5 . . . \n. . . . . . . . . . . 5 . . . . \n. . . . 4 . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image24\":\n            case \"galgaDart0\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . 5 a a 2 . . . . . . . . \n. . . 5 5 a 2 2 2 2 4 4 4 . . . \n. . . . 5 a a 2 . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"pxt-on-start\" x=\"0\" y=\"0\"/></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"Planes\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.3.44\",\n        \"tag\": \"v1.3.44\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/d1e057830c0eebc87e3e400f2106c8e1f0e5a077\",\n        \"target\": \"1.3.44\",\n        \"pxt\": \"6.8.33\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n"
}
```

