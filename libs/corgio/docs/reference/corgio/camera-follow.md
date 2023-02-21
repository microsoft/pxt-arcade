# camera Follow

Enable the scene camera to follow the corgi sprite.

```sig
corgio.create().cameraFollow(true)
```

## Parameters

* **on**: a [boolean](/types/boolean) value that when `true` makes the scene camera follow the corgi sprite.

## Example #example

Make the scene camera view follow the corgi.

```blocks
let myCorg = corgio.create(SpriteKind.Player, 10, 80)
myCorg.verticalMovement()
myCorg.horizontalMovement()
myCorg.cameraFollow()
```

## See also #seealso

[horizontal movement](/reference/corgio/horizontal-movement),
[vertical movement](/reference/corgio/vertical-movement)

```package
corgio
```