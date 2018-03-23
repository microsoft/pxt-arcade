
# Example

```blocks
/**********************************************
 *                                            *
 *     Coordinate Walker  Game start          *
 *                                            *
 **********************************************/

game.splash("Sprite Walker", "\"A\" for coordinates")

let player1: Sprite = null
player1 = sprites.create(img`
1 1 1
1 a 1
1 1 1
`)

game.setBackground(4)
game.frame(function () {
    if (keys.A.isPressed()) {
        // display integer part of coordinates as a string
        game.showDialog("" + Math.trunc(player1.x) + "", "X")
        pause(1000)
        game.showDialog("" + Math.trunc(player1.y) + "", "Y")
        pause(1000)
    }
    // Move sprite bigger number is faster for keys.dx(15)
    player1.x += keys.dx(15);
    player1.y += keys.dy(15);
})
```