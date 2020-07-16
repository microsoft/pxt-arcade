# Fibonacci Tiles and Spiral

![Fibonacci tiling and spiral](/static/graphics-math/fibo-tile-spiral/fibo-tile-spiral.gif)

Fibonacci numbers are series of numbers, or a _sequence_, where every next number is the sum of the previous two numbers. The sequence starts with `0` and the next number is `1`. The third number is also `1` because `0 + 1 = 1`. The numbers following that are `1 + 1 = 2`, `1 + 2 = 3`, and so on. For the first 10 numbers in the sequence, we have:

``0, 1, 1, 2, 3, 5, 8, 13, 21, 34``

Because of how each number in the sequence is the sum of the previous two, the Fibonacci numbers are sometimes used to represent natural growth rates.

![Fibonacci tiling with a spiral inside](/static/graphics-math/fibo-tile-spiral/fibo-tile-spiral.jpg)

In the picture above, squares are drawn with sides that are the length of a Fibonacci number. You see that squares are tiled together perfectly in a spiral pattern starting at the smallest square and then moving out in a counter-clockwise direction. Also, an actual spiral is inscribed within the squares using quarter-circle arcs that are the radius of the Fibonacci number for that square. As more squares and arcs are drawn, the drawing surface will fill "naturally". Each larger square will tile next to the smaller ones without any gaps and the spiral will grow smoothly with a natural bend.

## Generate Fibonacci Numbers

A simple way to show the Fibonacci numbers is to generate them in a loop and then show each number as the game score. Here's a way to show the first `10` numbers:

```blocks
let f0 = 0
let f1 = 1
let fibo = 0
for (let i = 0; i < 10; i++) {
    info.setScore(fibo)
    f0 = f1
    f1 = fibo
    fibo = f1 + f0
    pause(1000)
}
```

## Fibonacci Tiling

The Fibonacci tiles are sprites that have square images. The square image sides are the length of the current Fibonacci number. As each square sprite is created, they are placed next to the previous square in a counter-clockwise pattern. To do this, we use a 4 step rotation sequence that places the new squares next to the previous square in the right location.

The current rotation step is kept in the ``rotation`` variable. A complete rotation happens in 4 steps so the ``rotation`` variable is reset to `0` after the square sprite is placed in rotation step `4`.

We have to remember the location of each previous sprite so that the next sprite is placed at the proper location. The previous sprite is saved in the ``fibSprite0`` variable. The first square is a "virtual" square since the length of its sides is `0`.

The sequence is run for `14` squares and a different color is used for each square.

```blocks
let fibSprite: Sprite = null
let fibSquare: Image = null
let rotate = 0
let clr = 1
let repeat = 14
let f = 0
let f0 = 0
let f1 = 1

let fibSprite0 = sprites.create(img`.`, 0)
fibSprite0.top += 20
game.onUpdateInterval(1000, function () {
    if (repeat > 0) {
        f0 = f1
        f1 = f
        f = f1 + f0
        info.setScore(f)
        repeat += -1
        fibSquare = image.create(f, f)
        fibSquare.fillRect(0, 0, f, f, clr)
        clr += 1
        fibSprite = sprites.create(fibSquare, 0)
        if (rotate == 0) {
            fibSprite.top = fibSprite0.bottom
            fibSprite.left = fibSprite0.left
            rotate += 1
        } else if (rotate == 1) {
            fibSprite.bottom = fibSprite0.bottom
            fibSprite.left = fibSprite0.right
            rotate += 1
        } else if (rotate == 2) {
            fibSprite.bottom = fibSprite0.top
            fibSprite.right = fibSprite0.right
            rotate += 1
        } else if (rotate == 3) {
            fibSprite.top = fibSprite0.top
            fibSprite.right = fibSprite0.left
            rotate = 0
        }
        fibSprite0 = fibSprite
    }
})
```

## Fibonacci Spiral

We can add a Fibonacci spiral to the squares in the program above using a function to draw arcs. The function can use the current value for the Fibonacci number as the arc radius. It follows the rotation sequence to know the direction to draw the arc. The arcs are drawn in the images for the squares using random dots that paint the arc line.

```blocks
let f = 0
let x = 0
let y = 0
let rotate = 0
let fibSquare: Image = null

function drawArc() {
    // draw a circle arc using random dots!
    for (let i = 0; i < 100000; i++) {
        x = randint(0, f)
        y = randint(0, f)
        // test if the point will draw the circle
        if (x * x + y * y >= (f - 1) ** 2 && x * x + y * y < (f + 1) ** 2) {
            if (rotate == 0) {
                x = f - x
                y = f - y
            } else if (rotate == 1) {
                x = f - x
            } else if (rotate == 3) {
                y = f - y
            }
            fibSquare.setPixel(x, y, 1)
        }
    }
}

drawArc()
```

Add the **drawArc** function to the previous program and call the the function just before updating the previous Fibonacci sprite:

```block
let fibSprite0: Sprite = null
let fibSprite: Sprite = null
function drawArc() {}
drawArc()
fibSprite0 = fibSprite
```

## Pan the View

The squares and the spiral will eventually fill outside the view of the screen. To see all of the squares you can add code to scroll the screen view. The following code uses the arrow buttons to change the camera view center in order to scroll the screen view in 4 directions.

```blocks
let cx = scene.screenWidth() / 2
let cy = scene.screenHeight() / 2

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cx += -20
    scene.centerCameraAt(cx, cy)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cx += 20
    scene.centerCameraAt(cx, cy)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cy += -15
    scene.centerCameraAt(cx, cy)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cy += 15
    scene.centerCameraAt(cx, cy)
})
```

## Complete program

The complete program contains the tile drawing code, the arc function to draw the spiral, and the screen panning code.

```blocks
let fibSprite: Sprite = null
let fibSquare: Image = null
let rotate = 0
let x = 0
let y = 0
let clr = 1
let repeat = 14
let f = 0
let f0 = 0
let f1 = 1

let fibSprite0 = sprites.create(img`.`, 0)
let cx = scene.screenWidth() / 2
let cy = scene.screenHeight() / 2

fibSprite0.top += 20
game.onUpdateInterval(1000, function () {
    if (repeat > 0) {
        f0 = f1
        f1 = f
        f = f1 + f0
        info.setScore(f)
        repeat += -1
        fibSquare = image.create(f, f)
        fibSquare.fillRect(0, 0, f, f, clr)
        clr += 1
        fibSprite = sprites.create(fibSquare, 0)
        if (rotate == 0) {
            fibSprite.top = fibSprite0.bottom
            fibSprite.left = fibSprite0.left
            rotate += 1
        } else if (rotate == 1) {
            fibSprite.bottom = fibSprite0.bottom
            fibSprite.left = fibSprite0.right
            rotate += 1
        } else if (rotate == 2) {
            fibSprite.bottom = fibSprite0.top
            fibSprite.right = fibSprite0.right
            rotate += 1
        } else if (rotate == 3) {
            fibSprite.top = fibSprite0.top
            fibSprite.right = fibSprite0.left
            rotate = 0
        }
        drawArc()
        fibSprite0 = fibSprite
    }
})

function drawArc() {
    // draw a circle arc using random dots!
    for (let i = 0; i < 100000; i++) {
        x = randint(0, f)
        y = randint(0, f)
        // test if the point will draw the circle
        if (x * x + y * y >= (f - 1) ** 2 && x * x + y * y < (f + 1) ** 2) {
            if (rotate == 0) {
                x = f - x
                y = f - y
            } else if (rotate == 1) {
                x = f - x
            } else if (rotate == 3) {
                y = f - y
            }
            fibSquare.setPixel(x, y, 1)
        }
    }
}

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cx += -20
    scene.centerCameraAt(cx, cy)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cx += 20
    scene.centerCameraAt(cx, cy)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cy += -15
    scene.centerCameraAt(cx, cy)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cy += 15
    scene.centerCameraAt(cx, cy)
})
```