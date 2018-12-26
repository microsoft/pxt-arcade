# PI Monte Carlo

Approximate the value of **pi** using your @boardname@!

## Thinking about it...

Ok, let's pretend that a circle fits inside a square where the edge of the circle touches the sides of the square. If we say that the radius, called ``r``, of circle is `1` then the length of each side of the square is `2`, or ``2 * r``. The area of the circle is ``pi * (r ** 2)`` and the area of the square then is ``(r * 2) ** 2``. We don't know what ``pi`` is so we can arrange a relationship between the area of the circle and the area of the square to solve for the value of ``pi``.

### Circle and square

An interesting relationship between the circle and the square is that the area of the circle divided by the area of the square is:

``area ratio = (pi * (r ** 2)) / ((r * 2) ** 2) = pi / 4``

Well, we can see that if we knew the area of both the circle and the square we could find out what the value of ``pi`` is! It's simply this:

```
pi = (area of circle) / (area of square) * 4
```

so then...

```
area ratio = (area of circle) / (area of square)
pi = (area ratio) * 4
```

One problem though. We know the area of the square, sure enough it's `4`, but what's the area of the circle?

That's the dilemma! We need to know the area of the circle to find out what ``pi`` is and we need the value of ``pi`` the find the area of the circle!

### Dots, lots of dots

What if we had a lot of really small dots that we could fill into the circle and into the parts of the square that the circle didn't cover. We'll try to cover the area of both shapes with as many dots as possible.

If we count the number of dots placed in both the circle and the square, we could find the ``area ratio`` between the two shapes. And, in the equation shown above, we can discover ``pi`` if we have this ratio. The ``area ratio`` is:

``area ratio = (dots in circle) / ((dots in circle) + (dots only in square))``

Of course, we can't completely fill the area of both shapes with dots but we could get enough of them in there to give a useful ratio between the circle and the square.

### Making and counting dots

To make the "dots" we can randomly make a value and see if it would fit as a coordinate within the shape we're trying to fill. If it fits, increase the count of dots and try to make more for some amount of time. The more dots created, the better the accuracy of our value for ``area ratio``.

### Monte Carlo method

This method of filling coordinate points, counting them, and using the difference or ratio of the counts is called the _Monte Carlo_ method or approximation.

## Monte Carlo approximation of _pi_
```typescript
enum SpriteKind {
    Square,
    Circle,
    Player,
    Projectile,
    Food,
    Enemy
}
let squareDots = 0
let circleDots = 0
let r = scene.screenHeight() / 4
let l = r * 2 + 1
let mCircle: Sprite = null
let mSquare: Sprite = null
let cirImage: Image = null
let sqImage: Image = null
function drawCircle() {
    for (let i = -r; i <= r; i++) {
        y = Math.sqrt(r ** 2 - i ** 2)
        cirImage.setPixel(i + r, r - y, 1)
        cirImage.setPixel(i + r, y + r, 1)
    }
}
let y = 0
sqImage = image.create(l, l)
sqImage.drawRect(0, 0, l, l, 1)
cirImage = image.create(l, l)
drawCircle()
mSquare = sprites.create(sqImage, SpriteKind.Square)
mCircle = sprites.create(cirImage, SpriteKind.Circle)
pause(2000)
while (mCircle.x < scene.screenWidth() - 3 * r / 2) {
    mSquare.x += -1
    mCircle.x += 1
    pause(100)
}
piMonteCarlo()
info.onLifeZero(function () {
    game.showLongText("PI: " + 4*circleDots/squareDots, DialogLayout.Bottom)

})

function piMonteCarlo() {
    // A simple Monte-Carlo simulation to approximate Pi.
    //
    // number of points
    let n = 1000000
    //
    // radius square
    let r2 = r * r
    //
    let pid = 0
    let inside = 0
    let pin = 0
    let pir = 0
    let xx = 0
    let yy = 0
    forever(() => {
        for (let i = 0; i < n; i++) {
            // generate a point within the square
            xx = Math.randomRange(0, r)
            yy = Math.randomRange(0, r)
            // test if the point is within the circle
            // sqrt(x**2 + y**2) < r ==> x**2 + y**2 < r**2
            if (xx * xx + yy * yy < r2) {
                circleDots += 1
                cirImage.setPixel(xx + r, yy + r, 2)
            }
            sqImage.setPixel(xx + r, yy + r, 7)
            squareDots += 1
            //pause(1)
        }
        // surface of a square: 4 * r * r surface of a circle:
        // r * r * pi => inside / n ~= (r*r*pi) / (4*r*r) ~=
        // pi / 4 pi = inside / n * 4
        //
        pin = inside * 4
        // only integer arithmetic here...
        pid = pin / n
        pir = pin % n
        // show results
        info.setLife(0)
        //basic.showString(" " + pid + "." + pir)
    })
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("PI: " + 4 * circleDots / squareDots, DialogLayout.Bottom)
})
```

```typescript
enum SpriteKind {
    Square,
    Circle,
    Player,
    Projectile,
    Food,
    Enemy
}
let mCircle: Sprite = null
let mSquare: Sprite = null
let l = 0
let r = 0
let r2 = 0
let n = 0
info.onLifeZero(function () {
    game.showLongText("PI: " + 4 * circleDots / squareDots, DialogLayout.Bottom)
})
function piMonteCarlo2() {
    // A simple Monte-Carlo simulation to approximate Pi.
    //
    // number of points
    n = 2000000
    // radius square
    r2 = r * r
    forever(() => {
        for (let j = 0; j < n; j++) {
            // generate a point within the square
            xx = Math.randomRange(0, 2 * r) - r
            yy = Math.randomRange(0, 2 * r) - r
            // test if the point is within the circle
            // sqrt(x**2 + y**2) < r ==> x**2 + y**2 < r**2
            if (sqImage.getPixel(xx + r, yy + r) != 7) {
                if (xx * xx + yy * yy < r ** 2) {
                    circleDots += 1
                    inside += 1
                    cirImage.setPixel(xx + r, yy + r, 2)
                }
                sqImage.setPixel(xx + r, yy + r, 7)
                squareDots += 1
                pause(1)
            }
        }
        // surface of a square: 4 * r * r surface of a circle:
        // r * r * pi => inside / n ~= (r*r*pi) / (4*r*r) ~=
        // pi / 4 pi = inside / n * 4
        //
        pin = inside * 4
        // only integer arithmetic here...
        pid = pin / n
        pir = pin % n
        // show results
        //game.showLongText("PI: " + pid, DialogLayout.Bottom)
        info.setLife(0)
        //basic.showString(" " + pid + "." + pir)
    })
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("PI: " + 4 * circleDots / squareDots, DialogLayout.Bottom)
})
function drawCircle2() {
    for (let i = -r; i <= r; i++) {
        y = Math.sqrt(r ** 2 - i ** 2)
        cirImage.setPixel(i + r, r - y, 1)
        cirImage.setPixel(i + r, y + r + 1, 1)
    }
}
let y = 0
let sqImage: Image = null
let cirImage: Image = null
let circleDots = 0
let squareDots = 0
let yy = 0
let xx = 0
let pir = 0
let pin = 0
let inside = 0
let pid = 0
r = scene.screenHeight() / 4
l = r * 2 + 1
sqImage = image.create(l, l)
sqImage.fill(0)
sqImage.drawRect(0, 0, l, l, 1)

cirImage = image.create(l, l)
cirImage.fill(0)
drawCircle2()
mSquare = sprites.create(sqImage, SpriteKind.Square)
mCircle = sprites.create(cirImage, SpriteKind.Circle)
pause(2000)
while (mCircle.x < scene.screenWidth() - 3 * r / 2) {
    mSquare.x += -1
    mCircle.x += 1
    pause(100)
}
piMonteCarlo2()
```



## later example

```blocks
enum SpriteKind {
    Square,
    Circle,
    Player,
    Projectile,
    Food,
    Enemy
}
game.splash("Approximate PI", "Monte Carlo Method")
let mCircle: Sprite = null
let mSquare: Sprite = null
let l = 0
let r = 0
let n = 0
let r2 = 5000
let scale = 0
info.onLifeZero(function () {
    game.showLongText("PI: " + 4 * circleDots / squareDots, DialogLayout.Bottom)
    mCircle.say("Bye...")
    mCircle.vx = 1000
    mSquare.say("...have PI")
    mSquare.ax = 100
    info.setScore(circleDots)
})

function piMonteCarlo() {
    // A simple Monte-Carlo simulation to approximate Pi.
    //
    // number of points
    n = 1000000
    // radius square
    scale = (r + 1) / r2
    for (let j = 0; j < n; j++) {
        // generate a point within the square
        xx = Math.randomRange(0, 2 * r2) - r2
        yy = Math.randomRange(0, 2 * r2) - r2
        // test if the point is within the circle
        // sqrt(x**2 + y**2) < r ==> x**2 + y**2 < r**2
        if (xx * xx + yy * yy <= r2 ** 2) {
            circleDots += 1
            cirImage.setPixel(xx * scale + r, yy * scale + r, 2)
        }
        sqImage.setPixel(xx * scale + r, yy * scale + r, 7)
        squareDots += 1
        if (squareDots < r * r) {
            pause(1)
        }
    }

}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // surface of a square: 4 * r * r surface of a circle:
    // r * r * pi => inside / n ~= (r*r*pi) / (4*r*r) ~=
    // pi / 4 pi = inside / n * 4
    game.showLongText("PI: " + 4 * circleDots / squareDots + " using " + circleDots + " dots", DialogLayout.Bottom)
})
function drawCircle() {
    for (let i = -r; i <= r; i++) {
        c = Math.sqrt(r ** 2 - i ** 2)
        cirImage.setPixel(i + r, r - c, 1)
        cirImage.setPixel(i + r, r + c, 1)
        cirImage.setPixel(c + r, i + r, 1)
        cirImage.setPixel(r - c, i + r, 1)
        pause(10)
    }
}
let c = 0
let sqImage: Image = null
let cirImage: Image = null
let circleDots = 0
let squareDots = 0
let yy = 0
let xx = 0
r = scene.screenHeight() / 4
l = r * 2 + 1
sqImage = image.create(l, l)
sqImage.fill(0)
sqImage.drawRect(0, 0, l, l, 1)

cirImage = image.create(l, l)
cirImage.fill(0)
mSquare = sprites.create(sqImage, SpriteKind.Square)
mCircle = sprites.create(cirImage, SpriteKind.Circle)
drawCircle()

pause(1000)
while (mCircle.x < scene.screenWidth() - 3 * r / 2) {
    mSquare.x += -1
    mCircle.x += 1
    pause(100)
}
piMonteCarlo()
info.setLife(0)

```