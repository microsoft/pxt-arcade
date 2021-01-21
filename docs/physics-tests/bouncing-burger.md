# Bouncing Burger

Bounce a burger with a very high velocity off the sides of the screen.

**Feature tested**: Speed enhancements from [pxt-common-packages#879](https://github.com/microsoft/pxt-common-packages/pull/879).

```sim
game.currentScene().physicsEngine = new ArcadePhysicsEngine(1000, 4, 8);
let mySprite = sprites.create(img`
    . . . . c c c b b b b b . . . .
    . . c c b 4 4 4 4 4 4 b b b . .
    . c c 4 4 4 4 4 5 4 4 4 4 b c .
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e .
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e
    . e b 4 4 4 4 4 5 4 4 4 4 b e .
    8 7 e e b 4 4 4 4 4 4 b e e 6 8
    8 7 2 e e e e e e e e e e 2 7 8
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e
    e b e 8 8 c c 8 8 c c c 8 e b e
    e e b e c c e e e e e c e b e e
    . e e b b 4 4 4 4 4 4 4 4 e e .
    . . . c c c c c e e e e e . . .
`, SpriteKind.Player)
mySprite.setBounceOnWall(true)
mySprite.setVelocity(1000, 1000)
scene.setTileMap(img`
    3 3 3 3 3 3 3 3 3 3
    3 . . . . . 3 . . 3
    3 . . . . . 3 . . 3
    3 . . . . . . . . 3
    3 3 3 . . . . . . 3
    3 . . . . . 3 . . 3
    3 . . . . . 3 . . 3
    3 3 3 3 3 3 3 3 3 3
`)
scene.setTile(3, img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
`, true)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx =
        mySprite.vx < 0
            ? mySprite.vx - 100
            : mySprite.vx + 100
    mySprite.vy =
        mySprite.vy < 0
            ? mySprite.vy - 100
            : mySprite.vy + 100
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx =
        mySprite.vx < 0
            ? mySprite.vx + 100
            : mySprite.vx - 100
    mySprite.vy =
        mySprite.vy < 0
            ? mySprite.vy + 100
            : mySprite.vy - 100
})
```

```package
color-coded-tilemap
```