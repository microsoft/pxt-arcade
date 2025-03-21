# update Sprite

Make the corgi's image change when it moves.

```sig
corgio.create().updateSprite(true)
```

If enabled, The corgi sprite image will change when it moves to make it appear that it's heading in the direction of movement.

## Parameters

* **on**: a [boolean](/types/boolean) value that when `true` makes the corgi sprite image change when it moves.

## Example #example

Make the corgi's image change when it moves left or right.

```blocks
let myCorg = corgio.create(SpriteKind.Player, 10, 80)
myCorg.verticalMovement()
myCorg.horizontalMovement()
myCorg.updateSprite()
```

## See also #seealso

[horizontal movement](/reference/corgio/horizontal-movement),
[camera follow](/reference/corgi/camera-follow)

```package
corgio
```