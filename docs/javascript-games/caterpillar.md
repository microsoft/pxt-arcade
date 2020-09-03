# Caterpillar

Your caterpiller can grow by nibbling leaves for nourishment. Guide the caterpiller's movement toward a leaf. Be careful though, if it touches the side of the screen it won't live to be a butterfly.

```typescript
const NEXT_SECTION_KEY = "__child_node";
namespace SpriteKind {
    export const Tail = SpriteKind.create();
}

enum Direction {
    Up,
    Down,
    Left,
    Right
}

const size = 8;

const caterpillarHead = sprites.create(img`
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
caterpillarHead.data = {};
let currentLeaf: Sprite;

tiles.setTilemap(tilemap`level`);

const leafImage = img`
    . . . . . f f 7
    . . . f f f 6 f
    . . f 6 7 f f f
    . f 6 7 f 7 7 f
    f f 7 f 7 7 7 f
    f 6 f 7 7 7 f .
    f 6 7 7 f f . .
    f f f f f . . .
`;

const shinyLeafImage = img`
    . . 1 . . f f 7
    . 1 . f f f 6 f
    1 . f 6 7 f f f
    . f 6 7 f 7 7 f
    f f 7 f 7 7 7 f
    f 6 f 7 7 7 f .
    f 6 7 7 f f . 1
    f f f f f . 1 .
`;
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
            . . f f f f . .
            . f 1 1 1 1 f .
            f 1 1 1 1 1 1 f
            f 1 1 1 1 1 1 f
            f 1 1 1 1 1 1 f
            f 1 1 1 1 1 1 f
            . f 1 1 1 1 f .
            . . f f f f . .
        `, SpriteKind.Tail);
        newSection.data = {};

        let newColor: number;

        do {
            newColor = randint(0x1, 0xE);
        } while (newColor === 0x6);
        newSection.image.replace(0x1, newColor);

        do {
            newColor = randint(0x1, 0xE);
        } while (newColor === 0x6);
        newSection.image.replace(0xF, newColor);

        newSection.x = caterpillarHead.x;
        newSection.y = caterpillarHead.y;

        newSection.data[NEXT_SECTION_KEY] = caterpillarHead.data[NEXT_SECTION_KEY];
        caterpillarHead.data[NEXT_SECTION_KEY] = newSection;
        addSection = false;
    }

    function move(piece: Sprite) {
        const next = piece.data[NEXT_SECTION_KEY];
        if (next) {
            move(next);
            next.x = piece.x;
            next.y = piece.y;
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

function setDirection(targetDir: Direction, oppositeDir: Direction, im: Image) {
    if (!enqueued && direction !== targetDir && direction !== oppositeDir) {
        caterpillarHead.setImage(im);
        direction = targetDir;
        enqueued = true;
    }
}

function placeFruit() {
    currentLeaf = sprites.create(leafImage, SpriteKind.Food);
    do {
        currentLeaf.left = randint(0, 19) * size;
        currentLeaf.top = randint(0, 14) * size;
    } while (
        (currentLeaf.top === 0 && currentLeaf.right === screen.width)
        || sprites
            .allOfKind(SpriteKind.Tail)
            .some(s => s.overlapsWith(currentLeaf))
    );
}

game.onUpdateInterval(500, function () {
    if (currentLeaf.image === leafImage) {
        currentLeaf.setImage(shinyLeafImage);
    } else {
        currentLeaf.setImage(leafImage);
    }
});
```

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.castle.tileDarkGrass1"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```