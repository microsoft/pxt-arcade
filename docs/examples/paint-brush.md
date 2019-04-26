# Paint Brush

Generates random 'art' by drawing across the screen

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy,
    PaintBrush
}

let ACCELERATION = 500;
let myPointer = sprites.create(img`f`, SpriteKind.Player);
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . f f f
    . . . . . . . . . . . . f 2 2 f
    . . . . . . . . . . . f 2 2 2 f
    . . . . . . . . . . f 2 2 2 f .
    . . . . . . . . . f 2 2 2 f . .
    . . . . . . . . f 2 2 2 f . . .
    . . . . . . . f f 2 2 f . . . .
    . . . . . . f 1 1 f f . . . . .
    . . . f f f 1 1 1 f . . . . . .
    . . f e e f 1 1 f . . . . . . .
    . f e e e e f f . . . . . . . .
    . f e e e e e f . . . . . . . .
    . f e e e e e f . . . . . . . .
    . f e e e e f . . . . . . . . .
    f e e e f f . . . . . . . . . .
    f f f f . . . . . . . . . . . .
`, SpriteKind.PaintBrush);

let lastX = myPointer.left;
let lastY = myPointer.bottom;
let color = 1;
myPointer.setFlag(SpriteFlag.BounceOnWall, true);

game.onUpdate(function () {
    let background = scene.backgroundImage();
    background.drawLine(lastX, lastY, myPointer.left, myPointer.bottom, color);
    lastX = myPointer.left;
    lastY = myPointer.bottom;
    mySprite.left = myPointer.left;
    mySprite.bottom = myPointer.bottom;
});

game.onUpdateInterval(2000, function () {
    myPointer.ax = Math.randomRange(0 - ACCELERATION, ACCELERATION);
    myPointer.ay = Math.randomRange(0 - ACCELERATION, ACCELERATION);
    color = Math.randomRange(0, 15);
});
```