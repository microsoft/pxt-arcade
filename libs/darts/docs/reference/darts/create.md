# create

Create a dart sprite at a position on the screen.

```sig
darts.create(img``, SpriteKind.Player)
```

A dart is a sprite similar to a [projectile](/reference/sprites/create-projectile-from-side) but with special actions that control its motion to simulate forces on a thrown object. You set the image for the dart and give it a sprite [kind](/reference/sprites/sprite/kind).

# Parameters

* **img**: an image set for the dart sprite.
* **kind**: a sprite [kind](/reference/sprites/sprite/kind) to use for dart sprite.
* **x**: an optional initial horizontal screen position for the dart.
* **y**: an optional initial vertical screen position for the dart.

## Example

Create a dart on the screen and throw it when button `A` is pressed.

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
myDart.pow = 75
```

## See also

[properties](/reference/darts/properties)

```package
darts
```