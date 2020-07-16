# Rainbow Game of Life

An implementation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life),
with rainbow cells.
There are three tests included,
as well as a large number of pre-drawn cell patterns available through calling the functions
in the ``cells`` namespace at the bottom of the file.

```typescript
enum StillLife {
    Block,
    Beehive,
    Loaf,
    Boat,
    Tub
}

enum Oscillator {
    Blinker,
    Toad,
    Beacon,
    Pulsar,
    Pentadecathlon
}

enum Motion {
    Glider,
    LightWeight,
    Gospers,
    Simkins,
    SimkinsDouble,
    Engine,
    BlockLayer
}

enum OddCell {
    RPentomino,
    DieHard,
    Acorn
}

const width = screen.width;
const height = screen.height;
scene.setBackgroundImage(image.create(width, height));

// test1();
test2();
// test3();

function test1() {
    cells.createRandom(4000);
}

function test2() {
    for (let i = 0; i < 15; ++i) {
        for (let j = 0; j < 6; ++j) {
            cells.createOscillator(Oscillator.Pentadecathlon, 8 + 10 * i, 5 + 20 * j);
        }
    }
}
function test3() {
    for (let i = 0; i < 5; ++i) {
        cells.createMotion(Motion.Gospers, 15, 2 + i * 25);
    }
}

// buffers[bufferNum][x][y] corresponds to whether the cell at location (x,y)
// was alive in the given buffer
let buffers: boolean[][][];
let currentBuffer: number;
init();

game.onUpdateInterval(100, nextGeneration);
// game.onUpdate(nextGeneration);

function countNeighbors(src: boolean[][], x: number, y: number): number {
    const lX = x - 1; // left x
    const rX = x + 1; // right x
    const lY = y - 1; // left y
    const rY = y + 1; // right y

    let count = 0;
    if (src[lX][lY])++count;
    if (src[lX][y])++count;
    if (src[lX][rY])++count;
    if (src[x][lY])++count;
    if (src[x][rY])++count;
    if (src[rX][lY])++count;
    if (src[rX][y])++count;
    if (src[rX][rY])++count;
    return count;
}

function nextGeneration() {
    const lastGeneration = buffers[currentBuffer % 2];
    const currGeneration = buffers[++currentBuffer % 2];
    const bkgd = scene.backgroundImage();

    // leave 1 pixel of unused edge on each side
    // to avoid having to deal with oob checking
    for (let x = 1; x < width - 1; ++x) {
        for (let y = 1; y < height - 1; ++y) {
            const neighbors = countNeighbors(lastGeneration, x, y);
            if (lastGeneration[x][y] && (neighbors < 2 || neighbors > 3)) {
                // Previously alive cell has died due to under- or over-population
                currGeneration[x][y] = false;
                bkgd.setPixel(x, y, 0);
            } else if (!lastGeneration[x][y] && neighbors == 3) {
                // Previously empty location has new cell born
                currGeneration[x][y] = true;
                bkgd.setPixel(x, y, randint(1, 0xd));
            } else {
                // State is unchanged
                currGeneration[x][y] = lastGeneration[x][y];
            }
        }
    }
}

function init() {
    const bkgd = scene.backgroundImage();
    buffers = [[], []];
    for (let x = 0; x < width; x++) {
        buffers[0][x] = [];
        buffers[1][x] = [];
        for (let y = 0; y < height; y++) {
            buffers[0][x][y] = bkgd.getPixel(x, y) != 0;
            buffers[1][x][y] = false;
        }
    }

    currentBuffer = 0;
    // Draw a border around screen, as those pixels are counted as 'not alive'
    for (let x = 0; x < width; x++) {
        buffers[0][x][0] = false;
        buffers[0][x][height - 1] = false;
        bkgd.setPixel(x, 0, 1);
        bkgd.setPixel(x, height - 1, 1);
    }
    for (let y = 0; y < height; y++) {
        buffers[0][0][y] = false;
        buffers[0][width - 1][y] = false;
        bkgd.setPixel(0, y, 1);
        bkgd.setPixel(width - 1, y, 1);
    }
}

namespace cells {
    export function createStillLife(toDisplay: StillLife,
        x: number,
        y: number,
        src?: Image) {
        if (!src) src = scene.backgroundImage();

        let display: Image;
        switch (toDisplay) {
            case StillLife.Block: {
                display = img`
                    1 1
                    1 1
                `
                break;
            }
            case StillLife.Beehive: {
                display = img`
                    . 1 1 .
                    1 . . 1
                    . 1 1 .
                `
                break;
            }
            case StillLife.Loaf: {
                display = img`
                    . 1 1 .
                    1 . . 1
                    . 1 . 1
                    . . 1 .
                `
                break;
            }
            case StillLife.Boat: {
                display = img`
                    1 1 .
                    1 . 1
                    . 1 .
                `
                break;
            }
            case StillLife.Block: {
                display = img`
                    1 1
                    1 1
                `
                break;
            }
            case StillLife.Tub: {
                display = img`
                    . 1 .
                    1 . 1
                    . 1 .
                `
                break;
            }
            default: return;
        }
        src.drawImage(display, x, y);
    }

    export function createOscillator(toDisplay: Oscillator,
        x: number,
        y: number,
        src?: Image) {
        if (!src) src = scene.backgroundImage();

        let display: Image;
        switch (toDisplay) {
            case Oscillator.Blinker: {
                display = img`
                    1
                    1
                    1
                `
                break;
            }
            case Oscillator.Toad: {
                display = img`
                    . 1 1 1
                    1 1 1 .
                `
                break;
            }
            case Oscillator.Beacon: {
                display = img`
                    1 1 . .
                    1 1 . .
                    . . 1 1
                    . . 1 1
                `
                break;
            }
            case Oscillator.Pulsar: {
                display = img`
                    . . . . 1 . . . . . 1 . . . .
                    . . . . 1 . . . . . 1 . . . .
                    . . . . 1 1 . . . 1 1 . . . .
                    . . . . . . . . . . . . . . .
                    1 1 1 . . 1 1 . 1 1 . . 1 1 1
                    . . 1 . 1 . 1 . 1 . 1 . 1 . .
                    . . . . 1 1 . . . 1 1 . . . .
                    . . . . . . . . . . . . . . .
                    . . . . 1 1 . . . 1 1 . . . .
                    . . 1 . 1 . 1 . 1 . 1 . 1 . .
                    1 1 1 . . 1 1 . 1 1 . . 1 1 1
                    . . . . . . . . . . . . . . .
                    . . . . 1 1 . . . 1 1 . . . .
                    . . . . 1 . . . . . 1 . . . .
                    . . . . 1 . . . . . 1 . . . .
                `
                break;
            }
            case Oscillator.Pentadecathlon: {
                display = img`
                    1 1 1
                    . 1 .
                    . 1 .
                    1 1 1
                    . . .
                    1 1 1
                    1 1 1
                    . . .
                    1 1 1
                    . 1 .
                    . 1 .
                    1 1 1
                `
                break;
            }
            default: return;
        }
        src.drawImage(display, x, y);
    }

    export function createMotion(toDisplay: Motion,
        x: number,
        y: number,
        src?: Image) {
        if (!src) src = scene.backgroundImage();

        let display: Image;
        switch (toDisplay) {
            case Motion.Glider: {
                display = img`
                    . 1 .
                    . . 1
                    1 1 1
                `
                break;
            }
            case Motion.LightWeight: {
                display = img`
                    1 . . 1 .
                    . . . . 1
                    1 . . . 1
                    . 1 1 1 1
                `
                break;
            }
            case Motion.Gospers: {
                display = img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 . . . . . . . . . .
                    . . . . . . . . . 1 . . . . . . . . . . . . . . . 1 1 . 1 . . . . . 1 1
                    . . . . . . . 1 . 1 . . . . 1 1 1 . . . . . . . . 1 . . 1 . . . . . 1 1
                    1 1 . . . . 1 . 1 . . . . . . . . . . . . . . . . 1 1 . 1 . . . . . . .
                    1 1 . . . 1 . . 1 . . . . . . . 1 . . 1 1 . . 1 1 1 . . . . . . . . . .
                    . . . . . . 1 . 1 . . . . . . . 1 . . . 1 . . 1 1 . . . . . . . . . . .
                    . . . . . . . 1 . 1 . . . . . . 1 . . 1 . . . . . . . . . . . . . . . .
                    . . . . . . . . . 1 . . . . . . . . 1 1 . . . . . . . . . . . . . . . .
                `;
                break;
            }
            case Motion.Simkins: {
                display = img`
                    1 1 . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . .
                    1 1 . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . 1 1 . 1 1 . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . 1 . . . . . 1 . . . . .
                    . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . 1 . . 1 1
                    . . . . . . . . . . . . . . . . . . . . . 1 1 1 . . . 1 . . . 1 1
                    . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . 1 1 . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . 1 1 1 . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . .
                `
                break;
            }
            case Motion.SimkinsDouble: {
                display = img`
                    1 1 . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . .
                    1 1 . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . 1 1 . 1 1 . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . 1 . . . . . 1 . . . . .
                    . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . 1 . . 1 1
                    . . . . . . . . . . . . . . . . . . . . . 1 1 1 . . . 1 . . . 1 1
                    . . . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . .
                `
                break;
            }
            case Motion.Engine: {
                display = img`
                    1 1 1 1 1 1 1 1 . 1 1 1 1 1 . . . 1 1 1 . . . . . . 1 1 1 1 1 1 1 . 1 1 1 1 1
                `
                break;
            }
            case Motion.BlockLayer: {
                display = img`
                    1 1 1 . 1
                    1 . . . .
                    . . . 1 1
                    . 1 1 . 1
                    1 . 1 . 1
                `
                break;
            }
            default: return;
        }

        src.drawImage(display, x, y);
    }

    export function createOddCell(toDisplay: OddCell,
        x: number,
        y: number,
        src?: Image) {
        if (!src) src = scene.backgroundImage();

        let display: Image;
        switch (toDisplay) {
            case OddCell.RPentomino: {
                display = img`
                    . 1 1
                    1 1 .
                    . 1 .
                `
                break;
            }
            case OddCell.DieHard: {
                display = img`
                    . . . . . . 1 .
                    . . . . . . . .
                    1 1 . . . . 1 .
                    . 1 . . . 1 1 1
                `
                break;
            }
            case OddCell.Acorn: {
                display = img`
                    . 1 . . . . .
                    . . . 1 . . .
                    1 1 . . 1 1 1
                `;
                break;
            }
            default: return;
        }

        src.drawImage(display, x, y);
    }

    export function createRandom(count: number, src?: Image) {
        if (!src) src = scene.backgroundImage();

        for (let i = 0; i < count; ++i)
            src.setPixel(randint(0, width), randint(0, height), 1);
    }
}
```