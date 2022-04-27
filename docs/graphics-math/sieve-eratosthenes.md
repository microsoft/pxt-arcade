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

This continues on until you've eliminated all multiples of each number and then reach the limit of the numbers your testing, like `15` in the case of this example. The numbers that remain are the prime numbers frome the sequence of numbers you scanned.

Once the very first pass using `2` is complete, you don't need to test any factors that are ``even`` numbers because they're already eliminated.

## Seive game

```typescript
enum SieveSteps {
    StartList,
    PrintList,
    EndList,
    Scan,
    StartCollect,
    DoCollect,
    EndCollect,
    DropBounce,
    Idle
}

let spriteList: Sprite[] = null
let boxSprite: Sprite = null
let boxX = 0
let boxY = 0
let j = 0
let factor = 2
let idleCount = 0
let idleReturn = SieveSteps.Idle
let step = SieveSteps.StartList
let naturals = 0
game.splash("Sieve of Eratosthenes")

game.onUpdateInterval(10, function () {
    switch (step) {
        case SieveSteps.StartList:
            boxY = 5
            boxX = 4
            naturals = 2
            step = SieveSteps.PrintList
            break

        case SieveSteps.PrintList:
            if (boxY + 14 < scene.screenHeight()) {
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
                    boxSprite.setBounceOnWall(true)
                    boxSprite.image.printCenter("" + naturals, 2)
                    boxSprite.left = boxX
                    boxSprite.top = boxY
                    boxX += 17
                    naturals += 1
                    music.playTone(Note.C, BeatFraction.Sixteenth)
                    idleCount = 5
                    idleReturn = SieveSteps.PrintList
                    step = SieveSteps.Idle
                }
            } else {
                step = SieveSteps.EndList
            }
            break

        case SieveSteps.EndList:
            spriteList = sprites.allOfKind(SpriteKind.Player)
            game.showLongText("Scan for primes in the sequence of numbers. The score will show your current factor.", DialogLayout.Center)
            step = SieveSteps.Scan
            break

        case SieveSteps.Scan:
            j += factor
            if (j < spriteList.length) {
                if (spriteList[j].image.getPixel(0, 0) > 0) {
                    spriteList[j].startEffect(effects.disintegrate, 200)
                    spriteList[j].image.fill(0)
                    music.playTone(Note.C5, BeatFraction.Sixteenth)
                    idleCount = 10
                    idleReturn = SieveSteps.Scan
                    step = SieveSteps.Idle
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
                step = SieveSteps.StartCollect
            } else {
                info.setScore(factor)
            }
            break

        case SieveSteps.StartCollect:
            boxY = 5
            boxX = 4
            j = 0
            step = SieveSteps.DoCollect
            break

        case SieveSteps.DoCollect:
            if (j < spriteList.length) {
                if (spriteList[j].image.getPixel(0, 0) > 0) {
                    if (boxX + 16 >= scene.screenWidth()) {
                        boxX = 4
                        boxY += 14
                    }
                    spriteList[j].left = boxX
                    spriteList[j].top = boxY
                    boxX += 17
                    music.playTone(Note.FSharp4, BeatFraction.Sixteenth)
                    idleCount = 10
                    idleReturn = SieveSteps.DoCollect
                    step = SieveSteps.Idle
                }
                j += 1
            } else {
                idleCount = 2
                idleReturn = SieveSteps.EndCollect
                step = SieveSteps.Idle
            }
            break

        case SieveSteps.EndCollect:
            step = SieveSteps.Idle
            music.jumpDown.play()
            idleCount = 100
            idleReturn = SieveSteps.DropBounce
            step = SieveSteps.Idle
            break

        case SieveSteps.DropBounce:
            music.magicWand.play()
            for (let box of spriteList) {
                box.ay = randint(100, 400)
            }
            idleCount = -1
            step = SieveSteps.Idle
            break

        case SieveSteps.Idle:
            if (idleCount > 0) {
                idleCount += -1
            } else if (idleCount == 0) {
                step = idleReturn
            }
            break
    }
})
```
