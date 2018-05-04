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
game.onUpdate(function () {
    if (controller.A.isPressed()) {
        // display integer part of coordinates as a string
        game.splash("" + Math.trunc(player1.x) + "", "X")
        pause(1000)
        game.splash("" + Math.trunc(player1.y) + "", "Y")
        pause(1000)
    }
    // Move sprite bigger number is faster for controller.dx(15)
    player1.x += controller.dx(15);
    player1.y += controller.dy(15);
})
