# Paint Brush

Creates a unique 'work of art' by painting random brush strokes across the screen.

Press ``||controller:A||`` to switch the size of the brush from small to big, or big to small.

```blocks
namespace SpriteKind {
    export const PaintBrush = SpriteKind.create();
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
let large = false;
myPointer.setBounceOnWall(true);

game.onUpdate(function () {
    let background = scene.backgroundImage();
    background.drawLine(lastX, lastY, myPointer.left, myPointer.bottom, color);
    if (large) {
        background.drawLine(lastX + 1, lastY, myPointer.left, myPointer.bottom, color);
        background.drawLine(lastX, lastY + 1, myPointer.left, myPointer.bottom, color);
        background.drawLine(lastX + 1, lastY + 1, myPointer.left, myPointer.bottom, color);
    }
    lastX = myPointer.left;
    lastY = myPointer.bottom;
    mySprite.left = myPointer.left;
    mySprite.bottom = myPointer.bottom;
});

game.onUpdateInterval(2000, function () {
    myPointer.ax = randint(0 - ACCELERATION, ACCELERATION);
    myPointer.ay = randint(0 - ACCELERATION, ACCELERATION);
    color = randint(0, 15);
});

controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
    large = !large;
});
```
