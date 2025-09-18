# Platformer Code Along

## Introduction

Let's create a platformer! We'll learn about:
- Tilemaps
- Walls
- Hazards
- Sprites and Movement
- Jumping
- Game Over Lose and Win

V0.0.11

## {Create the Tilemap @requiresValidation}

**Create the Tilemap**

Drag the ``||scene:Set Tilemap||`` block into the ``||platformer_code_along(no_click):on game start||`` block.

Click on the gray square to open the Tilemap Editor.

With the Tilemap Editor Open:
- Set the canvas size to **50 x 8** pixels.
- Create a tile for the sky and fill the tilemap using the Fill tool.
- Paint the ground tiles along the bottom.

💡 _Feel free to make your own tile, or pick one from the gallery._ 


```blocks
platformer_code_along.onGameStart(function () {
    tiles.setCurrentTilemap(tilemap`level1`)
})
```

```template
platformer_code_along.onGameStart(function () {

})
```

## {Draw Hazards @requiresValidation}

**Draw Hazards**

Choose a tile to represent some hazard (like lava or a dangerous pitfall)!

Paint the tile into your tilemap

Feel free to add some platforms above the hazard for your player to jump onto.

## {Add Walls @requiresValidation}

**Add Walls**

You know which tiles should be solid, but the computer doesn't have this information yet!

Use the Wall Tool in the tilemap editor to paint walls on the ground and platforms. Walls are solid tiles the player can't pass through.

💡 _Since the player will need to overlap our hazard tiles, those should **not** be Walls_ 

## {Add a Goal @requiresValidation}

**Add a Goal**

Choose a tile to represent the player's goal, then paint that into your tilemap.

## {Create Your Player Sprite @requiresValidation}

**Create Your Player Sprite**

From the Sprites toolbox, drag a ``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||`` block into the ``||platformer_code_along(no_click):on game start||`` block.

Click the grey square to open the Image Editor and draw your player character, or pick one from the Gallery.

```blocks
let mySprite = sprites.create(img`
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

## {Step 6: Set the Starting Position}

**Set the Starting Position**

Drag a ``||sprites:set [mySprite] position to x [x] y [y]||`` block into the ``||platformer_code_along(no_click):on game start||`` block.

Use the coordinate picker to place your sprite at the bottom left above the ground.

```blocks
let mySprite: Sprite = null
mySprite.setPosition(25, 90)
```

## {Step 7: Move Side-to-Side @requiresValidation}

**Move Side-to-Side**

From the Controller toolbox, drag a ``||controller:move [mySprite] with buttons||`` block into the ``||platformer_code_along(no_click):on game start||`` block.

Use the + button to expand the block, then set `vy` (vertical velocity) to 0 so the sprite only moves left and right.

```blocks
let mySprite: Sprite = null
controller.moveSprite(mySprite, 100, 0)
```

## {Step 8: Add Gravity @requiresValidation}

**Add Gravity**

Drag a ``||sprites:set [mySprite] [x] to [value]||`` block into the ``||platformer_code_along(no_click):on game start||`` block.

Use the dropdown to change the property from `x` to `ay` (vertical acceleration), and set the value to 400 to simulate gravity.

The value 400 is just a recommendation. Feel free to try it and make adjustments!

```blocks
let mySprite: Sprite = null
mySprite.ay = 400
```

## {Step 9: Camera Follow}

**Camera Follow**

You may have noticed, your character can walk outside the screen! Let's make the camera follow the player by using the ``||scene:camera follow sprite [mySprite]||`` block.

```blocks
let mySprite: Sprite = null
scene.cameraFollowSprite(mySprite)
```

## {Step 10: Add Jumping @requiresValidation}

**Jump!**

Grab an ``||controller:on [a] button pressed||`` block from the toolbox and place it anywhere in the workspace.

Inside that block, add an ``||logic:if <true> then||`` block and use ``||scene:is [mySprite] hitting wall [direction]||`` with `bottom` to check if the sprite is on the ground. Then set `vy` to -200 to make the sprite jump.

```blocks
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
```


```template
let mySprite: Sprite = null
platformer_code_along.onGameStart(function () {
    tiles.setCurrentTilemap(tilemap`level1`)
    mySprite = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(24, 92)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 400
    scene.cameraFollowSprite(mySprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles6, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    game.gameOver(true)
})
```

## {Step 10: Lose When You Run Into the Hazard @requiresValidation}

**Danger!**

Drag an ``||scene:on [sprite] of kind [player] overlaps [tile] at [location]||`` block onto the workspace. Select your hazard tile. Then, inside that block drag a ``||game:game over <LOSE>||`` block. Make sure it's set to LOSE!

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava, function (sprite, location) {
    game.over(false)
})
```

## {Step 11: Win When You Reach the End @requiresValidation}

**Win!**

From the Scene toolbox, drag another ``||scene:on [sprite] of kind [player] overlaps [tile] at [location]||`` block onto the workspace, but this time, select your goal tile and set the ``||game:game over||`` block to WIN!

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true)
})
```

## {Step 12: Test Your Game}

**Congratulations!**

Congrats, you did it!

Play your game and have fun!

Want to do more? Consider these bonus objectives!

- You can add objects to collect, enemies, score, music, sound effects, animations, and multiple levels!
- Decorate your game and share it with friends.


```package
platformer-code-along=github:thsparks/platformer-code-along-tutorial#v0.0.11
```
