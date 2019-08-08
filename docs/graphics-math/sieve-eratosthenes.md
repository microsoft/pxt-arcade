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

This continues on until you've elimiated all multiples of each number and then reach the limit of the numbers your testing, like `15` in the case of this example. The numbers that remain are the prime numbers frome the sequence of numbers you scanned.

Once the very first pass using `2` is complete, you don't need to test any factors that are ``even`` numbers because they're already eliminated.

## Seive game

```typescript
enum SieveSteps {
    list,
    scan,
    collect,
    idle
}

let spriteList: Sprite[] = null
let boxSprite: Sprite = null
let boxX = 0
let boxY = 0
let j = 0
let factor = 2
let step = SieveSteps.list

game.splash("Sieve of Eratosthenes")

forever(function () {
    switch (step) {
        case SieveSteps.list: {
            boxY = 5
            boxX = 4
            let i = 2
            while (boxY + 14 < scene.screenHeight()) {
                if (boxX + 16 >= scene.screenWidth()) {
                    boxX = 4
                    boxY += 14
                } else {
                    boxSprite = sprites.create(img`
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
                    `, SpriteKind.Player)
                    boxSprite.setFlag(SpriteFlag.BounceOnWall, true)
                    boxSprite.image.printCenter("" + i, 2)
                    boxSprite.left = boxX
                    boxSprite.top = boxY
                    boxX += 17
                    i += 1
                    music.playTone(Note.C, BeatFraction.Sixteenth)
                    pause(100)
                }
            }
            spriteList = sprites.allOfKind(SpriteKind.Player)
            game.showLongText("Scan for primes in the sequence of numbers. The score will show your current factor", DialogLayout.Center)
            step = SieveSteps.scan
        }
            break

        case SieveSteps.scan: {
            j += factor
            if (j < spriteList.length) {
                if (spriteList[j].image.getPixel(0, 0) > 0) {
                    spriteList[j].startEffect(effects.disintegrate, 200)
                    spriteList[j].image.fill(0)
                    music.playTone(Note.C5, BeatFraction.Sixteenth)
                    pause(200)
                }
            } else {
                if (factor > 2) {
                    factor += 2
                } else {
                    factor += 1
                }
                j = factor - 2
            }
            if (factor > spriteList.length + 2) {
                step = SieveSteps.collect
            } else {
                info.setScore(factor)
            }
        }
            break

        case SieveSteps.collect:
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
                    music.playTone(Note.FSharp4, BeatFraction.Sixteenth)
                    pause(200)
                }
            }
            step = SieveSteps.idle
            pause(200)
            music.jumpDown.play()
            pause(1500)
            music.magicWand.play()
            for (let box of spriteList) {
                box.ay = Math.randomRange(100, 400)
            }
            break
    }
})
```