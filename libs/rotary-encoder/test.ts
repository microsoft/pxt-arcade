const crank = encoders.createRotaryEncoder(pins.A2, pins.A1);
game.consoleOverlay.setVisible(true);
let sprite = sprites.create(sprites.castle.heroFrontAttack1)
crank.onChanged(function () {
    console.log(crank.position())
    sprite.x = screen.width / 2 + crank.position()
})
