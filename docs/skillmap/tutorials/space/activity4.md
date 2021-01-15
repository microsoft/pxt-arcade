# Adding Fuel

## Introduction @unplugged

Time to refuel! 

In this tutorial we'll add a fuel bar to your spaceship
that depleats as you travel. 

Make sure to catch the powerups to keep your
ship from breaking down!

![Fuel Up!](/static/skillmaps/space/eat-gas.gif "Is it raining...tacos?")


## Step 1
😵 The starter code is taking up a lot of room! 
Don't worry, the Arcade workspace will expand for you. Just scroll up and
over (or down and over) to keep building.
<hr/>

🔲 Take a peek into the new ``||statusbars:Status Bars||`` category.
You'll find ``||variables:set [statusbar] to create status bar sprite width [20] height [4] kind [Health]||``.
Drag one to the end of the ``||loops:on start||`` container.

🔲 To keep track of how much *gas* is left, set the argument for 
**statusbar** kind to **Energy**.
<hr/>
>> *Tip: The ``||statusbars:Status Bars||`` category is an 
[__extension__](#extendo "a category that provides extended capabilites to MakeCode"). 
To see what else you can do using extensions, open a game in your gallery,
click ``||statusbars:˅ Advanced||`` and choose ``||extension:Extensions||``*

```block
let statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
```

## Step 2
If we want the status bar to show the details of **mySprite**, we'll need to link the two together.
<hr/>

🔲 Drop ``||statusbars:attach [statusbar] to [mySprite] ⊕||`` 
into the end of the ``||loops:on start||`` container.

🔲 Click **⊕** on the new block to reveal options
 to change the position of the status bar in relation to **mySprite**. 
 Can you figure out how to get the bar to show up *below* your ship?

<br/>

```block
let statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
// @highlight
statusbar.attachToSprite(mySprite, -25, 0)
```

## Step 3
⏰ The longer you're in the air, the more fuel you use ⏰  

Here's how to make the fuel go down as time passes. 
<hr/>
🔲 Drag an ``||game:on game update every [500] ms||`` container into the 
workspace. Adjust the time argument to **300 ms**.

🔲 Drop a ``||statusbars:change [statusbar] [value] by [0]||``
block into the **game update** container.

🔲 Change the amount the status bar changes from **0** to **-1**. 
<hr/>

>> *Tip: Remember this step later. If the fuel runs out too fast in 
gameplay, you can come back and adjust these blocks.*


```blocks
let statusbar: StatusBarSprite = null
game.onUpdateInterval(300, function () {
    statusbar.value += -1
})
```

## Step 4
⛽ Time to refuel ⛽

You can drop gas canisters, energy crystals, or juicy hamburgers...whatever 
makes sense for the vessel you have.

The code for dropping fuel is a lot like the code for dropping enemies. 
For a refresher on how things work, find the **myEnemy** blocks in the
workspace and use them as a guide.
<hr/>
🔲 Drag a _new_  ``||game:on game update every [500] ms||`` container 
into the workspace and change the interval to **5 seconds (5000 ms)**.

🔲 Snap a
``||variables:set [projectile2] to||`` ``||sprites:projectile [ ] from side with vx [50] vy [50]||``
block inside the newest **on game update** container.

🔲 Click ``||variables:[projectile2]||`` and rename the sprite ``||variables:[myFuel]||``.

🔲 Click on the grey square to bring up the sprite editor so you can
draw a fuel sprite (or choose one from the gallery.) 

🔲 Play with the **vx** and **vy** arguments of the fuel until it's falling
straight down at a decent speed.

<br/>


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
<hr/>
🔲 Connect a ``||sprites:set [mySprite] [x] to [0]||`` block at the 
bottom of the ``||game:on game update every [5000] ms||`` container.  

🔲 To make sure we're acting on the right sprites, use the dropdown in the 
new block to change ``||variables:mySprite||`` to ``||variables:myFuel||``.

🔲 To set a random [__*x*__](#setX "horizontal location") 
for the fuel, grab a 
``||Math:pick random [0] to [10]||`` block
and connect it to replace the **0** argument in the 
``||sprites:set [mySprite] [x] to [0]||`` block.

🔲 Update the minimum argument of the ``||Math:pick random [0] to [10]||`` block to **5** and the
maximum argument to **155**. 
<hr/>

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

Now we need to put our **myFuel** sprite into the _gas_ class.
<hr/>
🔲 Snap a ``||variables:set [mySprite] kind to [Player]||`` block 
into the bottom of the newest **on game update** container.

🔲 Change ``||variables:mySprite||`` to ``||variables:myFuel||``. 

🔲 Click ``||sprites:Player||`` to get the menu, then choose
``||sprites:Add a new kind...||`` and create the type **Gas**.  
<br/>

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
<hr/>  

🔲 Drag an ``||sprites:on [sprite] of kind [Player] overlaps [othersprite] of kind [Player]||`` 
container into the workspace. 

🔲 Change the last argument from ``||sprites:Player||`` to ``||sprites:Gas||``.  

🔲 To refill the status bar after grabbing fuel, snag a ``||statusbars:set [statusbar] [value] to [0]||`` block 
and snap it in to your newest **overlaps** container.  Change the value from **0** to **100**.

🔲 Finally, make sure the used fuel disappears by snapping a ``||sprites:destroy [mySprite] ⊕||`` block 
into the bottom of the same **overlaps** container and replacing
``||variables:mySprite||`` with ``||variables:otherSprite||``

![Grabbing variable from block](/static/skillmaps/space/give-var.gif "So that's how you do that!")

<br/>


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
🌌 If you run out of fuel, you'll be marooned in space! 🌌

The threat is real.
<hr/>
🔲 To add consequences for an empty status bar, drag a 
``||statusbars:on status bar kind [Health] zero [status]||`` 
container into the workspace.

🔲 Change the status bar kind to **Energy**. 

🔲 Snap a ``||game:game over <LOSE>||`` block inside as the ultimate fate.

<hr/>
And that's it!  You should have a fully functioning game that you can save to your project
gallery and share with friends!

BUT...you don't have to stop there.  Once your game is in your gallery, you can
experiment with all of the blocks in your toolbox and find many other
exciting and special ways to customize your adventure.
<br/>

```blocks
statusbars.onZero(StatusBarKind.Energy, function (status) {
    game.over(false)
})
```

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
    info.changeLifeBy(0)
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
statusbar.positionDirection(CollisionDirection.Bottom)
```

```package
pxt-status-bar=github:jwunderl/pxt-status-bar
```
