# reset

Reset the game.

```sig
game.reset()
```

Resetting the game makes the game program stop. The game program is then restarted. If the game is running on a device, this is similar to the reset button

## Example #example

Send a sprite moving from the left side of the screen toward the right. When the sprite reaches the right side of the screen, reset the game program.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . 2 2 2 2 2 2 . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . 2 2 2 2 2 2 . . . . . 
`, SpriteKind.Player)
mySprite.left = 0
mySprite.vx = 30
game.onUpdate(function () {
    if (mySprite.right > scene.screenWidth()) {
        game.reset()
    }
})
```

## See also #seealso

[over](/reference/game/over)