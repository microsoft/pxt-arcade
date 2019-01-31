# Seven Segment Display

Examples of using the seven segment display extension.

## 5 Digit Counter

Create a counter with `5` digits and add one to the current count value every `100` millisecons.

```blocks
let myCounter: DigitCounter = null
myCounter = sevenseg.createCounter(SegmentStyle.Narrow, SegmentScale.Full, 5)
myCounter.setCounterValue(54321)
game.onUpdateInterval(100, function () {
    myCounter.increment()
})
```

## Digital LCD Clock

Create 3 counters to display hours, minutes, and seconds. Set the display size of the seconds counter to `half`. Insert a sprite to show a colon character between the minutes and hours display. Use a color for the digits and screen background that will simulate the look of a LCD display.

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Enemy,
    Food
}
let colon: Sprite = null
let hours: DigitCounter = null
let minutes: DigitCounter = null
let seconds: DigitCounter = null
let time = 0
time = 44786
scene.setBackgroundColor(13)
seconds = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Half, 2)
minutes = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
colon = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
hours = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
seconds.setDigitColor(15)
minutes.setDigitColor(15)
hours.setDigitColor(15)
seconds.x += 50
seconds.y += 8
minutes.x += 16
colon.x += -14
hours.x += -42
game.onUpdateInterval(1000, function () {
    if (time >= 24 * 60 * 60) {
        time = 0
    }
    seconds.setCounterValue(time % 60)
    minutes.setCounterValue(time / 60 % 60)
    hours.setCounterValue(time / (60 * 60) % 60)
    time += 1
})
```

```package
sevenseg
```