# Shapes

Make several shapes bounce around in the tilemap.
Press the **A** button to spawn a new sprite with a random shape.

The purple circle is too large to fit within a single tile,
so depending on the placement, it could spawn in an area that is too small
for it to fit in. Move the player sprite around in the maze to set
spawn locations of different size.

```sim
let shapes = [
    img`
        . . . . . . . . . . . . . . . .
        . . . . 7 7 7 7 7 7 7 . . . . .
        . . 7 7 7 7 7 7 7 7 7 7 7 . . .
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . .
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . .
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 .
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 .
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 .
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 .
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 .
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 .
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 .
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . .
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . .
        . . 7 7 7 7 7 7 7 7 7 7 7 . . .
        . . . . 7 7 7 7 7 7 7 . . . . .
    `,
    img`
        . . . . 9 9 9 9 9 9 9 . .
        . . . 9 9 9 9 9 9 9 9 9 .
        . . 9 9 9 9 9 9 9 9 9 9 9
        . . 9 9 9 9 9 9 9 9 9 9 9
        . . 9 9 9 9 9 9 9 9 9 9 9
        . . 9 9 9 9 9 9 9 9 9 9 9
        . . 9 9 9 9 9 9 9 9 9 9 9
        . . 9 9 9 9 9 9 9 9 9 9 9
        . . 9 9 9 9 9 9 9 9 9 9 9
        . . . 9 9 9 9 9 9 9 9 9 .
        . . . . 9 9 9 9 9 9 9 . .
    `,
    img`
        . . . . 5 5 5 5 5 5 5 . .
        . . . 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 5 5 5 5 5 5 5
        . . 5 5 5 5 5 5 5 5 5 5 5
        . . 5 5 5 5 5 5 5 5 5 5 5
        . . 5 5 5 5 5 5 5 5 5 5 5
    `,
    img`
        . 3 3 3 3 3 . .
        3 3 3 3 3 3 3 .
        3 3 3 3 3 3 3 .
        3 3 3 3 3 3 3 .
        3 3 3 3 3 3 3 .
        3 3 3 3 3 3 3 .
        . 3 3 3 3 3 . .
        . . . . . . . .
    `,
    img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . a a a a a a a a a a a . . . . . . . . . . .
        . . . . . . . . a a a a a a a a a a a a a a a . . . . . . . . .
        . . . . . . . a a a a a a a a a a a a a a a a a . . . . . . . .
        . . . . . . a a a a a a a a a a a a a a a a a a a . . . . . . .
        . . . . . a a a a a a a a a a a a a a a a a a a a a . . . . . .
        . . . . a a a a a a a a a a a a a a a a a a a a a a a . . . . .
        . . . a a a a a a a a a a a a a a a a a a a a a a a a a . . . .
        . . . a a a a a a a a a a a a a a a a a a a a a a a a a . . . .
        . . a a a a a a a a a a a a a a a a a a a a a a a a a a a . . .
        . . a a a a a a a a a a a a a a a a a a a a a a a a a a a . . .
        . . a a a a a a a a a a a a a a a a a a a a a a a a a a a . . .
        . . a a a a a a a a a a a a a a a a a a a a a a a a a a a . . .
        . . a a a a a a a a a a a a a a a a a a a a a a a a a a a . . .
        . . a a a a a a a a a a a a a a a a a a a a a a a a a a a . . .
        . . a a a a a a a a a a a a a a a a a a a a a a a a a a a . . .
        . . a a a a a a a a a a a a a a a a a a a a a a a a a a a . . .
        . . a a a a a a a a a a a a a a a a a a a a a a a a a a a . . .
        . . a a a a a a a a a a a a a a a a a a a a a a a a a a a . . .
        . . a a a a a a a a a a a a a a a a a a a a a a a a a a a . . .
        . . . a a a a a a a a a a a a a a a a a a a a a a a a a . . . .
        . . . a a a a a a a a a a a a a a a a a a a a a a a a a . . . .
        . . . . a a a a a a a a a a a a a a a a a a a a a a a . . . . .
        . . . . . a a a a a a a a a a a a a a a a a a a a a . . . . . .
        . . . . . . a a a a a a a a a a a a a a a a a a a . . . . . . .
        . . . . . . . a a a a a a a a a a a a a a a a a . . . . . . . .
        . . . . . . . . a a a a a a a a a a a a a a a . . . . . . . . .
        . . . . . . . . . . a a a a a a a a a a a . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `
];
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    const projectile = sprites.createProjectileFromSprite(
        Math.pickRandom(shapes),
        mySprite,
        randint(-150, 150),
        randint(-150, 150)
    );
    projectile.setFlag(SpriteFlag.DestroyOnWall, false);
    projectile.setBounceOnWall(true);
    projectile.setFlag(SpriteFlag.AutoDestroy, false);
});

const mySprite = sprites.create(img`
    . . . . . . . . . . . . . .
    . f f f . f f f f . f f f .
    f f f f f c c c c f f f f f
    f f f f b c c c c b f f f f
    f f f c 3 c c c c 3 c f f f
    . f 3 3 c c c c c c 3 3 f .
    . f c c c c 4 4 c c c c f .
    . f f c c 4 4 4 4 c c f f .
    . f f f b f 4 4 f b f f f .
    . f f 4 1 f d d f 1 4 f f .
    . . f f d d d d d 4 e f e .
    . f e f f b b b e d d 4 e .
    . e 4 f b 3 3 3 e d d e . .
    . . . f 6 6 6 6 f e e . . .
    . . . f f f f f f f . . . .
    . . . f f f . . . . . . . .
`, SpriteKind.Player);

controller.moveSprite(mySprite);
scene.setTileMap(img`
    f d f f d d d d f f
    f d d d d d d d d f
    d d f f f f f d d f
    d d f 3 d d f d d f
    d d f d f f f d f f
    d d f d d d d d d f
    f d d d d f d d d f
    f f d d f f f d f f
`);
scene.placeOnRandomTile(mySprite, 0x3);
scene.setTile(15, img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, true);
```

```package
color-coded-tilemap
```