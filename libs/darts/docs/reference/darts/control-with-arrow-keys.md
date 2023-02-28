# control With Arrow Keys

If enabled, set force properties for a dart throw using the arrow keys.

```sig
darts.create().controlWithArrowKeys()
```

As a way to set the force properties of a dart during gameplay, you can use the arrow keys to change them.

The throw [angle](/reference/darts/properties#angle) is controlled with the left and right arrow keys. The right arrow key increases the angle and the left arrow key decreases the angle.

The throw [power](/reference/darts/properties#pow) is controlled with the up and down arrow keys. The up arrow key increases the power and the down arrow key decreases the power.

## Parameters

* **on**: a [boolean](/types/boolean) value that when `true` enables changing force properties for the dart with the arrow keys. If `false`, the forces are only set using [properties](/reference/darts/properties) in the program.

## Example

Create a dart and use the `A` button to throw it. Allow path adjustments with the arrow keys.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
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
    `, SpriteKind.Player)
myDart.controlWithArrowKeys()
```

## See also

[properties](/reference/darts/properties)

```package
darts
```