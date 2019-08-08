# Sieve of Eratosthenes

The Sieve of Eratosthenes is a iterative method of discovering primes in the sequence of natural numbers (positive integers starting with `1`). How it works is that you take each number, starting with `2` since `1` is always a factor of everything, and use it as a factor to eliminate all the numbers that are multiples of it. So, for the natural numbers...

```
2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15...
```

Starting with `2`, every sucessive **second** number is eliminated leaving:

```
2, 3, _, 5, _, 7, _, 9, __, 11, __, 13, __, 15...
```

Next, starting with `3`, every **third** number is eliminated leaving:

```
2, 3, _, 5, _, 7, _, _, __, 11, __, 13, __, __...
```

This continues on until you've elimiated all multiples of each number until you reach the limit of the numbers your testing, like `15` in the case of this example. The numbers that remain are the prime numbers out of the sequence you tested.

Once the first pass using `2` is complete, you don't need to test any of the other ``even`` numbers because they're already eliminated.

## Seive game

```blocks
function popSquare() {
    bsprite.startEffect(effects.disintegrate, 200)
    aay = bsprite.y - scene.screenHeight() / 2
    aax = bsprite.x - scene.screenWidth() / 2
    if (aax < 0) {
        bsprite.ax = 12 * (scene.screenHeight() - bsprite.x)
    } else {
        bsprite.ax = 12 * (bsprite.x - scene.screenHeight())
    }
    if (aay < 0) {
        bsprite.ay = 12 * (scene.screenHeight() - bsprite.y)
    } else {
        bsprite.ay = 12 * (bsprite.y - scene.screenHeight())
    }
}
let j = 0
let aax = 0
let aay = 0
let bsprite: Sprite = null
enum SieveSteps {
    scan,
    collect,
    idle
}
let boxY = 5
let boxX = 4
game.splash("Sieve of Eratosthenes")
for (let i = 2; boxY + 14 < scene.screenHeight(); i++) {
    if (boxX + 16 >= scene.screenWidth()) {
        boxX = 4
        boxY += 14
    }
    bsprite = sprites.create(img`
        b b b b b b b b b b b b b b b b
        b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b
        b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b
        b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b
        b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b
        b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b
        b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b
        b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b
        b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b
        b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b
        b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b
        b b b b b b b b b b b b b b b b
    `, 0)
    bsprite.image.printCenter("" + i, 2)
    bsprite.left = boxX
    bsprite.top = boxY
    boxX += 17
    music.playTone(Note.C, BeatFraction.Sixteenth)
    pause(100)
}
game.showDialog("Press A to scan", "")
let factor = 2
let step = SieveSteps.scan
let spriteList = sprites.allOfKind(0)
forever(function () {
    if (step == SieveSteps.scan) {
        j += factor
        if (j < spriteList.length) {
            if (spriteList[j].image.getPixel(0, 0) > 0) {
                spriteList[j].startEffect(effects.disintegrate, 200)
                spriteList[j].image.fill(0)
                music.playTone(523, BeatFraction.Sixteenth)
                pause(200)
            }
        } else {
            factor += 1
            j = factor - 2
        }
        if (factor > 73) {
            step = SieveSteps.collect
        } else {
            info.setScore(factor)
        }
    } else if (step == SieveSteps.collect) {
        boxY = 5
        boxX = 4
        for (let box of spriteList) {
            if (box.image.getPixel(0, 0) > 0) {
                if (boxX + 16 >= scene.screenWidth()) {
                    boxX = 4
                    boxY += 14
                }
                box.left = boxX
                box.top = boxY
                boxX += 17
                music.playTone(370, BeatFraction.Sixteenth)
                pause(200)
            }
        }
        step = SieveSteps.idle
        pause(200)
        music.jumpDown.play()
        pause(1500)
        music.magicWand.play()
        for (let k = spriteList.length - 1; k >= 0; k--) {
            if (spriteList[k].image.getPixel(0, 0) > 0) {
                spriteList[k].ay = Math.randomRange(800, 1600)
                pause(100)
            }
        }
        pause(1000)
        game.over(true, effects.bubbles)
    }
})
```