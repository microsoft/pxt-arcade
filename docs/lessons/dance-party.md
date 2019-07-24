# Dance Party

Press the arrow keys that match the ones appearing in blocks on the screen. When your player collides with an arrow block you will get points. Try to beat your high score and dance away!

![Game view in simulator](/static/lessons/dance-party/working-game.gif)

## Learning Objectives

Learn the basics for a collision based game!

* The concept of sprite
* How to set up a tile map and scene
* Spawning and destroying projectiles
* Setting and moving a character 
* Setting a score increment
* Creating particle effects
* Random generation

## Lesson Sections

* [Part One: Setting the Scene](#part-one-setting-the-scene)
* [Part Two: Creating the Sprite](#part-two-creating-the-sprite)
* [Part Three: Move the Player](#part-three-move-the-player)
* [Part Four: Setting Speed Variables](#part-four-setting-speed-variables)
* [Part Five: Spawning Projectiles](#part-five-spawning-projectiles)
* [Part Six: Setting Score and Creating Collisions](#part-six-setting-score-and-creating-collisions)

## Part One: Setting the Scene

Go to the [MakeCode Arcade](@homeurl@) editor and select **New Project** to create a new game.  

Once the editor loads, you will see a green ``||loops:on start||`` block already in the editor Workspace.

First, we want to set up the scene for our game. To do this we will set up our background and tile map. Find ``||scene:set background color to||`` in ``||scene:scene||`` and place it inside your ``||loops:on start||`` block. Then click on the color oval and set the background color to ``light purple``. 

Next, we need to set the tile map. Drag a ``||scene:set tile to with wall||`` block from ``||scene:scene||`` and put it into ``||loops:on start||``. Then click on the grey color oval and select ``white``. Go into the editor and take a bucket of paint with white selected and make the entire tile white. Switch wall to on. 

Now we need to actually create the tile map. To do this, go into ``||scene:scene||`` once again and grab a ``||scene:set tile map to||`` block and drag it under ``||scene:set tile to with wall||``. Go into the tile map editor and take the same color we used for setting the tile, white, and draw a line at the bottom of the screen. Now we have a "wall" at the bottom of the screen. 

To make the background less plain you can add some scene effects. Get a ``||scene:start screen effect||`` block from ``||scene:Scene||`` to do this. Go to the drop down in the block and select star field to create an outer space theme. 

```blocks
scene.setBackgroundColor(11)
scene.setTile(1, img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`, true)
scene.setTileMap(img`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    1 1 1 1 1 1 1 1 1 1
`)
effects.starField.startScreenEffect()
```

Congratulations! You have now set the scene for your game.

## Part Two: Creating the Sprite

To set the sprite grab a ``||sprites:set mySprite to sprite of kind player||`` from ``||sprites:Sprites||`` and drag it into ``||loops:on start||``. Now right click on ``mySprite`` and select rename variable in the menu. Rename your sprite to whatever you would like to call your player. In the ``||sprites:sprite of kind player||`` block, select the grey square and draw an image of your player. 

Now we want to set our sprites starting position. To do this go into sprites and grab ``||sprites:set mySprite position to x y||`` and drag it under ``||sprites:sprite of kind player||``. Set the ``x`` position to **80** and the ``y`` position to **100**. 

```blocks
let steve: Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . c . c . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
steve.setPosition(80, 100)
```


## Part Three: Move the Player

Our next step is to create a player that can move strictly between four spots. To do this go to ``||controller:Controller||`` and grab ``||controller:on button pressed||`` and drag it into your workspace. Then in the first drop down list select **right**. Now grab a ``||sprites:set mySprite position to x y||`` and under the drop down select your sprite. For the ``x`` value type in **130** and then for the ``y`` value type in **100**. 

Select the ``||controller:on button pressed||`` that contains the ``||sprites:set mySprite position to x y||`` and duplicate it **3** times. For each of the new copies, set one to ``up``, the other to ``down``, and the third to ``left``. Because we want the ``y`` variable to remain the same, only change the positions for ``x``. 

* Up:     x = 60
* Down:   x = 100
* Right:  x = 130
* Left:   x = 30

Now you should have four ``||controller:Controller||`` blocks that look like this.

```blocks
let steve: Sprite = null
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(30, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(60, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(100, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(130, 100)
})
```

![Player moving on the screen](/static/lessons/dance-party/moving-player.gif)

## Part Four: Setting Speed Variables

To get started with our speed variables, drag a ``||variables:set var to||`` and drag it into start. Rename the variable to speed and set it to ``40``. 

```blocks
let Speed = 40
```

### ~hint

#### Changing Speed

We can increase the speed at which projectiles fall. To do this go to ``||game: on game update every ms||`` and drag it into workspace. Then change the number to ``2000 ms``. Go to ``||variables:Variables||`` and select ``||variables:change by||`` and drag it into ``||game:on game update||``. Select the drop down and choose the speed variable. Now every two seconds, the projectile speed will increment by 1.

```blocks
game.onUpdateInterval(2000, function () {
    Speed += 1
})
```
### ~

## Part Five: Spawning Projectiles

Every half a second we want the projectiles to spawn. So go into ``||game:Game||`` and grab ``||game:on game update every ms||`` and place it in your workspace. Set the interval time at ``500 ms``. Next, we want to choose which "lane" to spawn our projectile in. We'll need a lane variable for this. To create this variable go into ``||variables:Variables||`` and grab ``||variables:set var to||``. Rename the variable to ``lane`` and then grab a ``||math:pick random||`` from ``||math:Math||`` and place it after the to in our ``||variables:set lane to||``. Set the first number to ``1`` and the second to ``4``. 

Now we want to create the projectiles for each lane. Grab an ``||logic: if then else if||`` block from ``||logic:Logic||`` and place it under the ``lane`` variable. Then from ``||logic:Logic||`` take a ``||Logic:_ = _||`` block and place it in the first ``||logic:if then||`` statement. Now drag a ``||variables:lane||`` block and put it in the first section and type ``1`` in the second section. Duplicate this equal statement 3 times and set each second section to ``2``, ``3``, and ``4`` respectively. Click the **(+)** symbol twice in the ``||logic:if else||`` statement block and drag these equal statements into the ``||logic:else||`` statements. 

Now grab 4 ``||sprites:set mySprite to sprite of kind||`` and drag one into each of the 4 positions in the ``||logic:if||`` statement. Set each variable for each ``||logic:if||`` statement like this:

* For 1 the variable name is Left
* For 2 the variable name is Up
* For 3 the variable name is Down
* For 4 the variable name is Right

According to the variable names, select the grey box and draw an arrow pointing the direction of the variable name. Set each kind to a projectile. 

Earlier we created a speed variable. This will now determine the speed that the projectiles spawn at. Grab a ``||sprites:set mySprite velocity to||`` and drag it into each of the 4 positions on the if statement. Match the ``mySprite`` to the variable of the if statement and then set ``vx`` to ``0`` and drag the speed variable from ``||variables:Variables||`` into the vy position. Repeat for all sections.

From ``||sprites:Sprites||`` grab a ``||sprites:set position to||`` block for each of 4 sections of the ``||logic:if||`` statements. Put them at the end of each section. Switch the ``mySprite`` variable to match the direction variable for the ``||logic:if||`` statement and set ``y`` to ``8``. Now set the ``x`` positions to these values:

* Left: 30
* Up: 60
* Down: 100
* Right: 130

Congrats, now we can spawn projectiles!

![Spawning Projectiles](/static/lessons/dance-party/spawning-projectiles.gif)

```blocks
game.onUpdateInterval(500, function () {
    let lane = 0
    lane = Math.randomRange(1, 4)
    if (lane == 1) {
        let left: Sprite = null
        left = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 1 6 6 6 6 6 6 6 1 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        left.setVelocity(0, Speed)
        left.setPosition(30, 8)
    } else if (lane == 2) {
        let up: Sprite = null
        up = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        up.setVelocity(0, Speed)
        up.setPosition(60, 8)
    } else if (lane == 3) {
        let down: Sprite = null
        down = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        down.setVelocity(0, Speed)
        down.setPosition(100, 8)
    } else {
        let right: Sprite = null
        right = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 1 6 6 6 6 6 6 6 1 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        right.setVelocity(0, Speed)
        right.setPosition(130, 8)
    }
})
```

## Part Six: Setting Score and Creating Collisions

### Setting Score and Setting Lives

In our game we want the player to have a score for the number of projectiles they destroy and then we want the player to have multiple lives in case they miss blocks. To do this go into ``||info:info||`` and drag ``||info:set score to||`` into the ``||loops: on start||`` block. Then grab a ``||info:set life to||`` and drag it below the set ``||info:set score to||``. Now change the number in ``||info:set life to||`` to **5** so that the player can miss five projectiles before the game ends. 

```blocks
info.setScore(0)
info.setLife(5)
```

When the player runs out of lives the game should end and the player's score should be displayed. To do this, go to ``||info:Info||``, grab ``||info:on life zero||``,and it into your workspace. Then go to ``||game:game||`` and grab ``||game:game over lose||``. Drag it into ``||info:on life zero||``. Click on the ``lose`` button so it switches to ``win`` and then click the **(+)** symbol. When you click the **(+)** you should have to option to select an effect. Select the ``confetti`` effect. 

```blocks
info.onLifeZero(function () {
    game.over(true, effects.confetti)
})
```

You have now set up the basis of the scoring system!

### Handling Collisions

When a projectile hits the bottom wall, we want that to be a collision and to have the player's lives decrease by one. To add this feature, go into ``||scene:Scene||`` and select ``||scene:on sprite of kind hits wall||`` and drag it into your workspace. Now set the kind to be ``projectile`` and set wall to the ``white`` color. This is because earlier while creating our tile map we chose white as our tile color. 

Now go into ``||sprites:Sprite||``, select ``||sprites:destroy sprite with effect||``, and drag it into on ``||scene:sprite of kind hits wall||``. Then select the effect to as ``fire`` and click the **(+)** symbol next to it. Set the time to ``100 ms``. Drag out a ``||info:change life by||`` and put it under ``||sprites:destroy sprite with effect||``. Set the number to ``-1``. Now whenever a projectile collides with the bottom, it will be destroyed and the player's remaining lives will go down.

![Player moving on the screen](/static/lessons/dance-party/missed-collision.gif)

```blocks
scene.onHitTile(SpriteKind.Projectile, 1, function (sprite) {
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
```

When the player collides with a projectile, their score should increase and the projectile should be destroyed. Go to ``||sprites:Sprites||`` and grab ``||sprites:on sprite of kind player overlaps otherSprite of kind||`` and drag it into your workspace. Change the field after ``otherSprite`` from ``player`` to ``projectile``. Now go back into ``||sprites:Sprites||`` and drag ``||sprites:destroy sprite with effect||`` into it. Set the effect to be ``disintegrate`` and then click the **(+)** symbol and enter ``100 ms``. Now go to ``||info:Info|`` and grab ``||info:change score by||`` and drag it under ``||sprites:destroy sprite with effect||``. 

![Player moving on the screen](/static/lessons/dance-party/collision-projectiles.gif)

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
```

And now we have a fully functioning game!

## Final Game

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    music.setVolume(10)
    info.changeScoreBy(1)
})
scene.onHitTile(SpriteKind.Projectile, 1, function (sprite) {
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(30, 100)
})
info.onLifeZero(function () {
    game.over(true, effects.confetti)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(130, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(60, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(100, 100)
})
let right: Sprite = null
let down: Sprite = null
let up: Sprite = null
let left: Sprite = null
let lane = 0
let steve: Sprite = null
scene.setBackgroundColor(11)
scene.setTile(1, img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`, true)
effects.starField.startScreenEffect()
scene.setTileMap(img`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    1 1 1 1 1 1 1 1 1 1
`)
steve = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . c . c . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
steve.setPosition(80, 100)
info.setScore(0)
info.setLife(5)
let Speed = 40
game.onUpdateInterval(500, function () {
    lane = Math.randomRange(1, 4)
    if (lane == 1) {
        left = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 1 6 6 6 6 6 6 6 1 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        left.setVelocity(0, Speed)
        left.setPosition(30, 8)
    } else if (lane == 2) {
        up = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        up.setVelocity(0, Speed)
        up.setPosition(60, 8)
    } else if (lane == 3) {
        down = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        down.setVelocity(0, Speed)
        down.setPosition(100, 8)
    } else {
        right = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 1 6 6 6 6 6 6 6 1 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        right.setVelocity(0, Speed)
        right.setPosition(130, 8)
    }
})
game.onUpdateInterval(2000, function () {
    Speed += 1
})
```

![Working Game](/static/lessons/dance-party/working-game.gif)
