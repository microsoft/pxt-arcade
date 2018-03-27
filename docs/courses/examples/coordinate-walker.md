
# Example

```blocks
/**********************************************
 *                                            *
 *     Coordinate Walker  Game start          *
 *                                            *
 **********************************************/

game.splash("Sprite Walker", "coordinates mapping")
game.splash("\"A\"\\\"B\" buttons", "display coordinates")
let player1: Sprite = null
player1 = sprites.create(img`
1 1 1 
1 a 1 
1 1 1 
`)

game.setBackgroundColor(4)

game.update(function () {
    if (keys.A.isPressed()) {
        // display integer part of x coordinate as a string
        game.splash("" + Math.trunc(player1.x) + "", "X")
        game.splash("" + Math.trunc(player1.y) + "", "Y")
    }
    if (keys.B.isPressed()) {
        // display integer part of y coordinate as a string
        game.splash("" + Math.trunc(player1.y) + "", "Y")
    }
    // Move sprite bigger number is faster for keys.dx(15)
    player1.x += keys.dx(15)
    player1.y += keys.dy(15)
})
```