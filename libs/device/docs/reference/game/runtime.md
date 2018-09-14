# runtime

Get the time in milliseconds since the game was started.

```sig
game.runtime()
```

## Returns

* a [number](/types/number) which is the amount of time in millseconds since the game started.

## Example #Example
Move a sprite across the screen. When `5` seconds has elapsed, stop the sprite and show the game time.

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
mySprite.vx = 10
pause(5000)
mySprite.vx = 0
game.showLongText("Game time = " + game.runtime(), DialogLayout.Bottom)
```

## See also #seealso

[start countdown](/reference/info/start-countdown)