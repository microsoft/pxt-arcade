# horizontal Movement

Enable horizonal movement of the corgi with the left and right arrow buttons.

```sig
corgio.create().horizontalMovement()
```

## Parameters

* **on**: a [boolean](/types/boolean) value that when `true` moves the corgi sprite horizontally with the left and right arrow buttons.

## Example #example

Create a new corgi at the default screen location and give it movement.

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.verticalMovement(true)
myCorg.horizontalMovement(true)
```

## See also #seealso

[vertical movement](/reference/corgio/vertical-movement),
[camera follow](/reference/corgio/camera-follow)

```package
corgio
```