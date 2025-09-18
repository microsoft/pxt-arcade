# Platformer Code Along

## Introduction

Let's build a platformer game! You'll learn:
- Creating tilemaps
- Adding walls and hazards
- Sprite movement and jumping
- Win and lose conditions

V0.0.11

## {Create the Tilemap @requiresValidation}

**Create the Tilemap**

Drag ``||scene:Set Tilemap||`` into the ``||platformer_code_along(no_click):on game start||`` block.

Click the gray square to open the Tilemap Editor.

In the Tilemap Editor:
- Set canvas size to **50 x 8** pixels
- Create a sky tile and fill the tilemap with the Fill tool
- Paint ground tiles along the bottom

💡 _Feel free to make your own tile or pick one from the gallery._ 


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

Choose a tile that will be a hazard for the player to avoid (like lava or a pitfall).

Paint the hazard tile into your tilemap.

Optionally, add some platforms above the hazard for your player to jump on.

## {Add Walls @requiresValidation}

**Add Walls**

Your tiles may _look_ solid, but the computer doesn't know that! We need to tell it.

Use the Wall Tool in the tilemap editor to paint walls on the ground and platforms. Walls are solid tiles that players can't pass through.

💡 _Hazard tiles should **not** be walls, since the player needs to overlap them._ 

## {Add a Goal @requiresValidation}

**Add a Goal**

Choose a tile to represent the player's goal.

Paint that tile into your tilemap.

💡 _Goal tiles should **not** be walls, since the player needs to overlap them._ 

## {Create Your Player Sprite @requiresValidation}

**Create Your Player Sprite**

Drag ``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||`` into the ``||platformer_code_along(no_click):on game start||`` block.

Click the gray square to open the Image Editor.

Draw your player character or pick one from the Gallery.

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

Drag ``||sprites:set [mySprite] position to x [x] y [y]||`` into the ``||platformer_code_along(no_click):on game start||`` block.

Use the coordinate picker to place your sprite at the bottom left above the ground.

```blocks
let mySprite: Sprite = null
mySprite.setPosition(25, 90)
```

## {Step 7: Move Side-to-Side @requiresValidation}

**Move Side-to-Side**

Drag ``||controller:move [mySprite] with buttons||`` into the ``||platformer_code_along(no_click):on game start||`` block.

Click the + button to expand the block.

Set `vy` (vertical velocity) to 0 so the sprite only moves left and right.

```blocks
let mySprite: Sprite = null
controller.moveSprite(mySprite, 100, 0)
```

## {Step 8: Add Gravity @requiresValidation}

**Add Gravity**

Drag ``||sprites:set [mySprite] [x] to [value]||`` into the ``||platformer_code_along(no_click):on game start||`` block.

Change the property from `x` to `ay` (vertical acceleration).

Set the value to 400 to simulate gravity.

💡 _400 is just a suggestion - try it and adjust as needed!_

```blocks
let mySprite: Sprite = null
mySprite.ay = 400
```

## {Step 9: Camera Follow}

**Camera Follow**

Did you notice your character can walk off-screen?

Make the camera follow the player with ``||scene:camera follow sprite [mySprite]||``.

```blocks
let mySprite: Sprite = null
scene.cameraFollowSprite(mySprite)
```

## {Step 10: Add Jumping @requiresValidation}

**Jump!**

Get ``||controller:on [a] button pressed||`` from the toolbox and place it anywhere in the workspace.

We only want the player to be able to jump when they're on the ground. To do that, we'll use a **conditional statement**.

Inside that block, add ``||logic:if <true> then||``.

Use ``||scene:is [mySprite] hitting wall [left]||`` and change `left` to `bottom` to check if the sprite is on the ground.

Inside the if block, set `vy` to -200 to make the sprite jump.

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

Drag ``||scene:on [sprite] of kind [player] overlaps [tile] at [location]||`` onto the workspace.

Select your hazard tile.

Inside that block, drag ``||game:game over <LOSE>||``. 

Make sure it's set to LOSE!

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava, function (sprite, location) {
    game.over(false)
})
```

## {Step 11: Win When You Reach the End @requiresValidation}

**Win!**

From Scene, drag another ``||scene:on [sprite] of kind [player] overlaps [tile] at [location]||`` onto the workspace.

This time, select your goal tile.

Add the ``||game:game over||`` block and set it to WIN!

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true)
})
```

## {Step 12: Test Your Game}

**Congratulations!**

You did it! Play your game and have fun!

Want to do more? Try these bonus ideas:

- Add collectible objects, enemies, and scoring
- Include music, sound effects, and animations  
- Create multiple levels
- Decorate your game and share it with friends

```package
platformer-code-along=github:thsparks/platformer-code-along-tutorial#v0.0.11
```
