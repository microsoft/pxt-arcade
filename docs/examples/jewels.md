# Jewels

```typescript
let neighbour: number[] = []
let newType = 0
let boardSprite: Sprite = null
let cursorSprite: Sprite = null
let score = 0
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (curX > 0) {
        curX += -1
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (curX < maxXElement - 1) {
        curX += 1
    }
})
function drawBoard() {
    boardSprite.image.fill(0)
    for (let index23 = 0; index23 <= 10; index23++) {
        for (let index222 = 0; index222 <= 10; index222++) {
            newType2 = board[index23][index222]
            x = index23 * (scene.screenWidth() / maxXElement)
            y = index222 * (scene.screenHeight() / maxYElement)
            boardImage.drawTransparentImage(list[newType2], x, y)
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (curY > 0) {
        curY += -1
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (curY < maxYElement - 1) {
        curY += 1
    }
})
function onPress() {
    // Get current position (curX, curY) Use that position
    // and get neighbours
    let neighbours = getNeighbours();
score += neighbours.length * 10
    for (let i = 0; i <= neighbours.length - 1; i++) {
        // Remove neighbours from board
        neighbour = neighbours[i]
        board[neighbour[0]][neighbour[1]] = -1
    }
    // Go through the board, for every empty one, move it
    // down
    for (let j = board.length - 1; j >= 0; j--) {
        for (let k = board[0].length - 1; k >= 0; k--) {
            if (board[j][k] == -1) {
                // Find height of block
                let z = k;
                let height = 0;
                let found = 0;
                // Found an empty block. Reduce the entire row above it
                while (z >= 0 && !found) {
                    if (board[j][z] != -1) {
                        found = 1;
                    } else {
                        height++;
                    }
                    //board[j][z] = board[j][z - 1];
                    z--;
                }
                // Reduce by that amount
                z = k;
                while (z >= 0) {
                    board[j][z] = board[j][z - height];
                    if (z < height) {
                        board[j][z] = -2;
                    }
                    z--;
                }
            }
        }
    }
// wait a bit
    pause(500)
    // Go through the board, for every empty one, move it
    // down
    for (let l = board.length - 1; l >= 0; l--) {
        for (let m = board[0].length - 1; m >= 0; m--) {
            if (board[l][m] == -2) {

                board[l][m] = randint(0, list.length - 1)
            }
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    onPress()
    info.setScore(score)
})
function initialiseBoard() {
    for (let index2 = 0; index2 <= 10; index2++) {
        for (let index22 = 0; index22 <= 10; index22++) {
            newType = randint(0, list.length - 1)
            if (!(board[index2])) {
                board[index2] = []
            }
            board[index2][index22] = newType
        }
    }
}
let boardImage: Image = null
let tempSprite = 0
let y = 0
let x = 0
let newType2 = 0
let board: number[][] = []
let maxXElement = 0
let curX = 0
let maxYElement = 0
let curY = 0
let list: Image[] = []
scene.setBackgroundColor(8)
tempSprite = null
function getNeighbours() {
    let neighbours2: number[][] = []
    let curTraverseX = curX;
    let curTraverseY = curY;
    let currentType = board[curX][curY];
    neighbours2.push([curTraverseX, curTraverseY]);
    // tranverse left
    curTraverseX--;
    while (curTraverseX >= 0 && board[curTraverseX][curTraverseY] == currentType) {
        neighbours2.push([curTraverseX, curTraverseY]);
        curTraverseX--;
    }

    // reset
    curTraverseX = curX;
    curTraverseY = curY;
    // traverse right
    curTraverseX++;
    while (curTraverseX < maxXElement && board[curTraverseX][curTraverseY] == currentType) {
        neighbours2.push([curTraverseX, curTraverseY]);
        curTraverseX++;
    }

    // reset
    curTraverseX = curX;
    curTraverseY = curY;
    // traverse up
    curTraverseY--;
    while (curTraverseY >= 0 && board[curTraverseX][curTraverseY] == currentType) {
        neighbours2.push([curTraverseX, curTraverseY]);
        curTraverseY--;
    }

    // reset
    curTraverseX = curX;
    curTraverseY = curY;
    // traverse down
    curTraverseY++;
    while (curTraverseY < maxYElement && board[curTraverseX][curTraverseY] == currentType) {
        neighbours2.push([curTraverseX, curTraverseY]);
        curTraverseY++;
    }

    return neighbours2;
}
maxXElement = 9
maxYElement = 7
list = [img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . d d d d . . . . . .
. . . . d d d 4 4 d d d . . . .
. . . d d 4 4 4 4 4 4 d . . . .
. . d d 4 4 4 4 4 4 4 d d . . .
. d d 4 4 4 4 4 4 4 4 4 d d . .
. d 4 4 4 4 4 4 4 4 4 4 4 d . .
. d d 4 4 4 4 4 4 4 4 4 4 d . .
. . d d 4 4 4 4 4 4 4 4 d d . .
. . . d 4 4 4 4 4 4 4 d d . . .
. . . d d 4 4 4 4 4 d d . . . .
. . . . . d d d 4 d d . . . . .
. . . . . . d d d d . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, img`
. . . . . . . . . . . . . . . .
. . . . . . . 4 4 4 . . . . . .
. . . . . . 4 4 6 4 4 . . . . .
. . . . . 4 4 6 6 6 4 4 . . . .
. . . 4 4 4 6 6 6 6 6 4 4 . . .
. . 4 4 6 6 6 6 6 6 6 6 4 4 . .
. . 4 6 6 6 6 6 6 6 6 6 6 4 4 .
. 4 6 6 6 6 6 6 6 6 6 6 6 6 4 .
. 4 6 6 6 6 6 6 6 6 6 6 6 6 4 .
. 4 4 6 6 6 6 6 6 6 6 6 6 4 4 .
. . 4 4 6 6 6 6 6 6 6 6 4 4 . .
. . . 4 4 6 6 6 6 6 6 4 4 . . .
. . . . 4 4 6 6 6 6 6 4 . . . .
. . . . . . 4 6 6 6 4 4 . . . .
. . . . . . . 4 4 4 4 . . . . .
. . . . . . . . . . . . . . . .
`, img`
. . . . . . . . . . . . . . . .
. . . . . . . 3 3 3 . . . . . .
. . . . . . 3 a a 3 3 . . . . .
. . . . . 3 3 a a a 3 3 . . . .
. . . . 3 3 a a a a a 3 . . . .
. . . 3 3 a a a a a a 3 3 . . .
. . 3 3 a a a a a a a a 3 3 . .
. 3 3 a a a a a a a a a a 3 3 .
. 3 a a a a a a a a a a a a 3 .
. 3 3 a a a a a a a a a a a 3 .
. . 3 a a a a a a a a a a 3 3 .
. . . 3 a a a a a a a a 3 3 . .
. . . 3 3 a a a a a 3 3 3 . . .
. . . . 3 3 a a a a 3 3 . . . .
. . . . . 3 3 3 3 3 3 . . . . .
. . . . . . . . . . . . . . . .
`, img`
. . . . . . . . . . . . . . . .
. . . . . . . a a a . . . . . .
. . . . . . a a e a a a . . . .
. . . . a a a e e e e a a . . .
. . . a a e e e e e e e a a . .
. . a a e e e e e e e e e a a .
. a a e e e e e e e e e e e a .
. a e e e e e e e e e e e e a .
. a e e e e e e e e e e e e a .
. a a e e e e e e e e e e a a .
. . a a e e e e e e e e a a . .
. . . a a e e e e e e a a . . .
. . . . a a e e e a a a . . . .
. . . . . a a e e a a . . . . .
. . . . . . a a a a . . . . . .
. . . . . . . . . . . . . . . .
`, img`
. . . . . . . . . . . . . . . .
. . . . . . b b b . . . . . . .
. . . . . b b 5 b b b . . . . .
. . . . b b 5 5 5 5 b b . . . .
. . . b b 5 5 5 5 5 5 b b . . .
. . b b 5 5 5 5 5 5 5 5 b b . .
. b b 5 5 5 5 5 5 5 5 5 5 b b .
. b 5 5 5 5 5 5 5 5 5 5 5 5 b .
. b 5 5 5 5 5 5 5 5 5 5 5 b b .
. b b 5 5 5 5 5 5 5 5 5 b b . .
. . b b 5 5 5 5 5 5 5 b b . . .
. . . b b 5 5 5 5 5 5 b . . . .
. . . . b b 5 5 5 5 b . . . . .
. . . . . b b 5 b b b . . . . .
. . . . . . b b b . . . . . . .
. . . . . . . . . . . . . . . .
`]
cursorSprite = sprites.create(img`
d d d d d d d d d d d d d d d d
d . . . . . . . . . . . . . . d
d . . . . . . . . . . . . . . d
d . . . . . . . . . . . . . . d
d . . . . . . . . . . . . . . d
d . . . . . . . . . . . . . . d
d . . . . . . . . . . . . . . d
d . . . . . . . . . . . . . . d
d . . . . . . . . . . . . . . d
d . . . . . . . . . . . . . . d
d . . . . . . . . . . . . . . d
d . . . . . . . . . . . . . . d
d . . . . . . . . . . . . . . d
d . . . . . . . . . . . . . . d
d . . . . . . . . . . . . . . d
d d d d d d d d d d d d d d d d
`)
initialiseBoard()
boardImage = image.create(scene.screenWidth(), scene.screenHeight())
boardSprite = sprites.create(boardImage)
game.onUpdate(function () {
    cursorSprite.left = curX * (scene.screenWidth() / maxXElement)
    cursorSprite.top = curY * (scene.screenHeight() / maxYElement)
    cursorSprite.z = 1000
    drawBoard()
})
```