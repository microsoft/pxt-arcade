# Caterpillar

```typescript
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy,
    Tail
}

enum Direction {
    Up,
    Down,
    Left,
    Right
}

const size = 8;

let caterpillarHead = sprites.create(img`
    . . 3 3 3 3 . .
    . 3 2 2 2 2 3 .
    3 2 f 2 2 f 2 3
    3 2 f 2 2 f 2 3
    3 2 2 2 2 2 2 3
    3 2 2 2 2 2 2 3
    . 3 2 2 2 2 3 .
    . . 3 3 3 3 . .
`, SpriteKind.Player);
caterpillarHead.left = 4 * size;
caterpillarHead.top = 12 * size;

placeFruit();
info.setScore(0);

let direction = Direction.Up;
let addSection = true;
let enqueued = false;
let lastIteration = 0;
let timeout = 500;

forever(function () {
    if (caterpillarHead.left < 0 || caterpillarHead.right > screen.width
        || caterpillarHead.top < 0 || caterpillarHead.bottom > screen.height) {
        game.over(false);
    }

    if (!enqueued && game.runtime() - lastIteration < timeout) {
        return;
    }

    if (addSection) {
        addToBody();
    } else {
        move(caterpillarHead);
    }

    switch (direction) {
        case Direction.Up:
            caterpillarHead.y -= size;
            break;
        case Direction.Down:
            caterpillarHead.y += size;
            break;
        case Direction.Left:
            caterpillarHead.x -= size;
            break;
        case Direction.Right:
            caterpillarHead.x += size;
            break;
    }

    enqueued = false;
    lastIteration = game.runtime();

    function addToBody() {
        const newSection = sprites.create(img`
            . . 1 1 1 1 . .
            . 1 1 1 1 1 1 .
            1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1
            1 1 1 1 1 1 1 1
            . 1 1 1 1 1 1 .
            . . 1 1 1 1 . .
        `, SpriteKind.Tail);
        newSection.image.replace(0x1, Math.randomRange(1, 0xE));

        newSection.x = caterpillarHead.x;
        newSection.y = caterpillarHead.y;

        newSection.data = caterpillarHead.data;
        caterpillarHead.data = newSection;
        addSection = false;
    }

    function move(piece: Sprite) {
        if (piece.data) {
            move(piece.data);
            piece.data.x = piece.x;
            piece.data.y = piece.y;
        }
    }
});

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1);
    otherSprite.destroy(effects.disintegrate);
    music.baDing.play();
    timeout = Math.max(150, timeout - 50);
    addSection = true;
    placeFruit();
});

sprites.onOverlap(SpriteKind.Player, SpriteKind.Tail, function (sprite: Sprite, otherSprite: Sprite) {
    game.over(false);
});

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    setDirection(Direction.Up, Direction.Down, img`
        . . 3 3 3 3 . .
        . 3 2 2 2 2 3 .
        3 2 f 2 2 f 2 3
        3 2 f 2 2 f 2 3
        3 2 2 2 2 2 2 3
        3 2 2 2 2 2 2 3
        . 3 2 2 2 2 3 .
        . . 3 3 3 3 . .
    `);
});

controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    setDirection(Direction.Down, Direction.Up, img`
        . . 3 3 3 3 . .
        . 3 2 2 2 2 3 .
        3 2 2 2 2 2 2 3
        3 2 2 2 2 2 2 3
        3 2 f 2 2 f 2 3
        3 2 f 2 2 f 2 3
        . 3 2 2 2 2 3 .
        . . 3 3 3 3 . .
    `);
});

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    setDirection(Direction.Left, Direction.Right, img`
        . . 3 3 3 3 . .
        . 3 2 2 2 2 3 .
        3 2 f f 2 2 2 3
        3 2 2 2 2 2 2 3
        3 2 2 2 2 2 2 3
        3 2 f f 2 2 2 3
        . 3 2 2 2 2 3 .
        . . 3 3 3 3 . .
    `);
});

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    setDirection(Direction.Right, Direction.Left, img`
        . . 3 3 3 3 . .
        . 3 2 2 2 2 3 .
        3 2 2 2 f f 2 3
        3 2 2 2 2 2 2 3
        3 2 2 2 2 2 2 3
        3 2 2 2 f f 2 3
        . 3 2 2 2 2 3 .
        . . 3 3 3 3 . .
    `);
});

function setDirection(targetDir: Direction, oppositeDir: Direction, i: Image) {
    if (!enqueued && direction !== targetDir && direction !== oppositeDir) {
        caterpillarHead.setImage(i);
        direction = targetDir;
        enqueued = true;
    }
}

function placeFruit() {
    const fruit = sprites.create(img`
        . . . . . . 6 7
        . . . 6 6 6 7 6
        . . 6 7 7 6 6 6
        . 6 7 7 6 7 7 6
        . 6 7 6 7 7 7 6
        6 7 6 7 7 7 6 .
        6 7 7 7 6 6 . .
        6 6 6 6 . . . .
    `, SpriteKind.Food);
    do {
        fruit.left = Math.randomRange(0, 19) * size;
        fruit.top = Math.randomRange(0, 14) * size;
    } while (
        sprites
            .allOfKind(SpriteKind.Tail)
            .some(s => s.overlapsWith(fruit))
    );
}
```