# Pi Monte Carlo

Approximate the value of **Pi** by comparing the area of a circle and square.

## Here's the idea...

Ok, let's pretend that a circle fits inside a square where the edge of the circle touches the sides of the square. If we say that the radius, called ``r``, of circle is `1` then the length of each side of the square is `2`, or ``2 * r``. The area of the circle is ``pi * (r ** 2)`` and the area of the square then is ``(r * 2) ** 2``. We don't know what ``pi`` is so we can arrange a relationship between the area of the circle and the area of the square to solve for the value of ``pi``.

### Circle and square

An interesting relationship between the circle and the square is that the area of the circle divided by the area of the square is:

``area ratio = (pi * (r ** 2)) / ((r * 2) ** 2) = pi / 4``

Well, we can see that if we knew the area of both the circle and the square we could find out what the value of ``pi`` is! It's simply this:

``pi = (area of circle) / (area of square) * 4``

so then...

```
area ratio = (area of circle) / (area of square)
pi = (area ratio) * 4
```

One problem though. We know the area of the square, sure enough it's `4`, but what's the area of the circle?

That's the dilemma! We need to know the area of the circle to find out what ``pi`` is and we need the value of ``pi`` to find the area of the circle!

### Dots, lots of dots

What if we had a lot of really small dots that we could fill into both the circle and the square. We'll try to cover the area of both shapes with as many dots as possible.

If we count the number of dots placed in both the circle and the square, we could find the ``area ratio`` between the two shapes. And, in the equation shown above, we can discover ``pi`` if we have this ratio. The ``area ratio`` is:

``area ratio = (dots in circle) / ((dots in circle) + (dots only in square))``

Of course, with infinitely small dots we can't completely fill the area of both shapes but we could get enough of them in there to give a useful ratio between the circle and the square.

### Making and counting dots

To make the "dots" we can randomly make a coordinate value and see if it would fit as a point within the shape we're trying to fill. If it fits, increase the count of dots and try to make more for some amount of time. The more dots created, the better the accuracy of our value for ``area ratio``.

### Monte Carlo simulation

This method of filling coordinate points, counting them, and using the difference or ratio of the counts is called the _Monte Carlo_ simulation, or approximation.

## Monte Carlo approximation of Pi

To have our approximation of Pi seem like more like a game, we'll make it visual by drawing a circle inside a square and then filling in the shapes with dots.

A circle image is drawn, or _inscribed_, inside a square image using the circle equation. Two sprites for the shapes are created and the Monte Carlo simulation is started. Shortly after starting, the sprites slide apart so you can watch each shape fill with dots.

A sample run of `1000000` dots for each shape is made. The simulation radius for the circle is set at `5000`. Since this so much bigger than the what the screen can show, we have to use it as a virtual radius for the actual shapes on the screen. The screen shape uses a scaled size for the circle radius.

The amount of dots that fit in the circle is shown as the game score. Anytime, before the simulation ends, you can press the **B** button to see what the current Pi approximation value is.

You're notified that the simulation is complete in the [onLifeZero](/reference/info/on-life-zero) event. The last dot score is shown and the final approximation value is shown in a text dialog.

```blocks
namespace SpriteKind {
    export const Square = SpriteKind.create();
    export const Circle = SpriteKind.create();
}
let sqImage: Image = null
let cirImage: Image = null
let mCircle: Sprite = null
let mSquare: Sprite = null

let circleDots = 0
let squareDots = 0
let yy = 0
let xx = 0
let j = 0
let delay = 0
let simulate = false

// set the radius and side length for the shapes
const r = scene.screenHeight() / 4
const l = r * 2 + 1

// total dots (sample count)
const dots = 1000000
// virtual radius length
const r2 = 5000

// scale the actual radius from the virtual radius
const scale = (r + 1) / r2

sqImage = image.create(l, l)
sqImage.fill(0)
sqImage.drawRect(0, 0, l, l, 1)
cirImage = image.create(l, l)
cirImage.fill(0)

game.splash("Approximate Pi", "Monte Carlo Method")

mSquare = sprites.create(sqImage, SpriteKind.Square)
mSquare.setFlag(SpriteFlag.AutoDestroy, true)
drawCircle()
mCircle = sprites.create(cirImage, SpriteKind.Circle)

info.onLifeZero(function () {
    info.setScore(circleDots)
    game.showLongText("Pi: " + 4 * circleDots / squareDots, DialogLayout.Bottom)
    mCircle.say("Bye..")
    mCircle.vx = 1000
    mSquare.say("..we have Pi")
    mSquare.ax = 50
})

sprites.onDestroyed(SpriteKind.Square, function (sprite: Sprite) {
    game.reset()
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Pi: " + 4 * circleDots / squareDots + " using " + circleDots + " dots", DialogLayout.Bottom)
})

function drawCircle() {
    // draw a circle outline using random dots!
    for (let i = 0; i < dots; i++) {
        xx = randint(0, 2 * r) - r
        yy = randint(0, 2 * r) - r
        // test if the point will draw the circle
        if ((xx * xx + yy * yy >= r ** 2) && (xx * xx + yy * yy < (r + 1) ** 2)) {
            cirImage.setPixel(xx + r, yy + r, 1)
        }
    }
}

game.onUpdateInterval(100, function () {
    if (delay > 10) { // start simulation
        simulate = true
    }
    if (delay > 20) { // slide shape apart
        if (mCircle.x < scene.screenWidth() - 3 * r / 2) {
            mSquare.x += -1
            mCircle.x += 1
        }
    }
    delay += 1
})

forever(function () {
    // A simple Monte Carlo simulation to approximate Pi
    //
    while (j < dots && simulate) {
        // generate a point within the square
        xx = randint(0, 2 * r2) - r2
        yy = randint(0, 2 * r2) - r2
        sqImage.setPixel(xx * scale + r, yy * scale + r, 7)
        squareDots += 1

        // test if the point is within the circle
        // sqrt(x**2 + y**2) < r ==> x**2 + y**2 < r**2
        if (xx * xx + yy * yy <= r2 ** 2) {
            circleDots += 1
            // scale to screen coordinates
            xx = xx * scale;
            yy = yy * scale;
            // shift over the x or y == 0 position
            if (xx < 0) xx += 1
            if (yy < 0) yy += 1
            cirImage.setPixel(xx + r, yy + r, 2)
        }
        // after a little while just quickly finish the simulation
        if (squareDots < dots / 50 && squareDots % 100 == 0) {
            info.setScore(circleDots)
            pause(100)
        }
        j += 1
        if (j >= dots) {
            info.setScore(circleDots)
            info.setLife(0)
        }
    }
})
```