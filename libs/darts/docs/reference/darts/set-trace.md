# set Trace

If enabled, show the estimated trace path for a dart throw.

```sig
darts.create().setTrace()
```

When path tracing is **on**, the projected path for the dart, if it were thrown, is displayed on the screen. The trace path is affected by the force [properties](/reference/darts/properties) set for the dart.

## Parameters

* **on**: a [boolean](/type/boolean) value that when `true` shows the estimated trace path of the dart when it's thrown. If `false`, the trace path is not displayed.

## Example

Use the `B` button to show the trace path of the dart. Use the arrow keys to adjust the trace path so the dart will strike the balloon if it's thrown.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 500)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.setTrace(true)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    myDart.setTrace(false)
})
let myDart: Dart = null
myDart = darts.create(img`
    . . 8 . . . . . . . . . . . . . 
    8 . . 8 . . . . . . . . . . . . 
    . 8 . . 8 . . . . . . . 8 8 8 . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 8 8 8 
    3 3 3 3 3 3 3 3 3 3 3 3 3 8 8 8 
    . 8 . . 8 . . . . . . . 8 8 8 . 
    8 . . 8 . . . . . . . . . . . . 
    . . 8 . . . . . . . . . . . . . 
    `, SpriteKind.Player, 10, 50)
let balloon = sprites.create(img`
    . . . . . 7 7 . 7 7 . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 1 7 7 7 7 7 7 7 7 7 . 
    7 7 7 1 1 1 7 7 7 7 7 7 7 7 7 7 
    7 7 7 1 1 1 7 7 7 7 7 7 7 7 7 7 
    7 7 7 1 1 1 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 1 1 7 7 7 7 7 7 7 7 7 7 
    . 7 7 7 7 1 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    `, SpriteKind.Enemy)
balloon.right = scene.screenWidth()
myDart.controlWithArrowKeys(true)
```

## See also

[control with arrow keys](/reference/darts/control-with-arrow-keys),
[properties](/reference/darts/properties),
[trace color](/reference/darts/properties#tracecolor)

```package
darts
```