# Errors on Hardware

When developing games, you might run into bugs that cause your game to crash.
In the browser, these errors can be identified by using the debugger
or by reading the messages displayed along with the error.

Occasionally, you might run into errors that only occur on physical devices - for example,
the device might run out of memory or run slower than in the simulator.
When a program crashes on hardware,
you will usually see a three-digit error code accompanied by a frowny face.

## 989: Failed cast on null #989

This error typically occurs when trying to use something that is not yet created (non-existant object) -
for example, setting the position of a sprite that does not yet exist.

```blocks
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . e c 7 . . . . . .
    . . . . e e e c 7 7 e e . . . .
    . . c e e e e c 7 e 2 2 e e . .
    . c e e e e e c 6 e e 2 2 2 e .
    . c e e e 2 e c c 2 4 5 4 2 e .
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
    . e e e 2 2 2 2 2 2 2 2 2 4 e .
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
    . . 2 e e 2 2 2 2 2 4 4 2 e . .
    . . . 2 2 e e 4 4 4 2 e e . . .
    . . . . . 2 2 e e e e . . . . .
`, SpriteKind.Player)
mySprite2.setPosition(0, 0)
mySprite2 = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . .
    4 5 5 4 4 5 5 5 5 5 4 4 . . . .
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . .
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . .
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 .
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 .
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c
    . . c 4 4 d 4 4 4 4 4 d d 5 d c
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4
    . . . . c c b 4 4 4 b b 4 5 4 4
    . . . . . . c c c c c c b b 4 .
`, SpriteKind.Player)
```

In this case, the fix is fairly simple;
just move the ``||sprites:set position||`` block to be somewhere after the place where the second ``||sprites:sprite||``
is created.

This can be hard to identify when games get more and more complex;
for example, your code might rely on an object that is created by user input.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . .
        4 5 5 4 4 5 5 5 5 5 4 4 . . . .
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . .
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . .
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 .
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 .
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c
        . . c 4 4 d 4 4 4 4 4 d d 5 d c
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4
        . . . . c c b 4 4 4 b b 4 5 4 4
        . . . . . . c c c c c c b b 4 .
    `, SpriteKind.Player)
})
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . e c 7 . . . . . .
    . . . . e e e c 7 7 e e . . . .
    . . c e e e e c 7 e 2 2 e e . .
    . c e e e e e c 6 e e 2 2 2 e .
    . c e e e 2 e c c 2 4 5 4 2 e .
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
    . e e e 2 2 2 2 2 2 2 2 2 4 e .
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
    . . 2 e e 2 2 2 2 2 4 4 2 e . .
    . . . 2 2 e e 4 4 4 2 e e . . .
    . . . . . 2 2 e e e e . . . . .
`, SpriteKind.Player)
pause(2000)
mySprite2.setPosition(0, 0)
```

In this case, the game will crash if the player does not press the ``||controller:A||`` button
within the first 2 seconds of the game. This is because the second ``||sprites:sprite||``
wasn't created before being used with the ``||sprites:set position||`` block.

## 021: Out of memory: too many objects #021

This error occurs when the device runs out of memory for objects.
This can occur pretty easily on hardware since
the devices that run these games often have much less memory than a computer.
For example, the minimum RAM expected to run an @boardname@ game is only 96 kilobytes
and each screen-sized image is already almost 10 kilobytes just by itself.

```blocks
function randomRectangle() {
    startX = randint(0, scene.screenWidth() - 10)
    startY = randint(0, scene.screenHeight() - 10)
    width = randint(0, 40)
    height = randint(0, 40)
    scene.backgroundImage().fillRect(startX, startY, width, height, randint(1, 14))
    list.push(scene.backgroundImage())
}
let height = 0
let width = 0
let startY = 0
let startX = 0
let list: Image[] = []
randomRectangle()
game.onUpdateInterval(200, function () {
    randomRectangle()
    scene.setBackgroundImage(scene.backgroundImage().clone())
})
```

In the example above, every time the background image is changed,
the image is stored in an ``||arrays:array||``.
This will likely behave fine on your computer,
but will probably crash almost immediately on your device.
This is because modern computers typically have RAM measured in gigabytes,
each of which is one million kilobytes.

Fixing this error will depend upon the capabilities/capacities of the device you are creating the game for,
as well as what exactly is taking up too much memory.
Often, this will be due to the creation of too many ``||sprites:sprites||``
or ``||images:images||`` at any one time.

There are a few general guidelines to minimize the memory footprint of your games:

* **Compute is cheap**: you might have the choice to store a value created in your program
or recomputing it as needed.
You should consider how long it takes to recreate the values you store (and test it!) -
processors on the devices are often powerful enough to recreate these images fairly quickly.
That could easily save 10% of the device's entire memory per image with no noticeable performance penalty.
* **Prefer pre-drawn images**: if you draw the image in the image editor
rather than modifying it when the game is running,
the image will be stored with the code in flash memory
and won't take up as much space at runtime. For example,
if you want the image in the player sprite to switch from green to red,
consider changing the color in the image editor and storing it as a separate image.
Less runtime memory is needed using this method instead of using ``||images:clone||`` and ``||images:change color in picture from .. to ..||``.
* **Leave it behind**: if an object won't be used anymore, get rid of it!
This is often easier done in JavaScript than in blocks,
but the easiest thing to do is make sure ``||sprites:sprites||`` are destroyed when they're no longer needed.
Setting the ``||sprites:auto destroy||`` ``||sprites:SpriteFlag||`` can be a good first step
as it will get rid of the ``||sprites:sprite||`` when it goes off screen.

## 981: Failed cast on undefined #981

This error is very similar to [error #989](#989) -
it occurs when a value is ``undefined`` and you try to use it.

This error code is more common when developing in JavaScript than in Blocks.
In JavaScript, when you declare a variable without assigning it a value,
the value is left as ``undefined``.
In blocks these objects will often be initialized to ``null`` instead.

This can occur when using the result of a block or function that had no value to evaluate to.

```blocks
let myTile = scene.getTile(0, 0)
console.log("" + myTile)
```

In this case, ``||scene:tile||`` evaluates to ``undefined``,
because there is no ``||scene:tilemap||`` created to get a ``||scene:tile||`` from.

## 020: Out of memory: too many fibers #020

This error occurs when the system runs out of memory for events or fibers.
This is unlikely to occur in blocks, because the structure of blocks makes it unlikey that you'll create
an increasing number of events. In JavaScript, however, you can nest events or create them in loops.

```typescript
let count = 0;
while (true) {
    game.onUpdate(function () {
        console.log(++count + "");
    });
    pause(1000);
}
```

In the example above, the ``||game:on update||`` event is created in an infinite loop;
this will create more and more ``||game:on update||`` events until you run out of memory.

### ~hint

This section only lists examples of some of the most common errors seen in MakeCode @boardname@.
For a full list, see the [internal error codes page](https://makecode.com/js/errorcodes).

### ~

```package
color-coded-tilemap
```