# vertical Movement

Enable jumping upwards of the corgi sprite with the up arrow button.

```sig
corgio.create().verticalMovement()
```

## Parameters

* **on**: a [boolean](/types/boolean) value that when `true` makes the corgi sprite jump vertically upwards with the up arrow button.

## Example #example

Create a new corgi at the default screen location and give it movement.

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.verticalMovement(true)
myCorg.horizontalMovement(true)
```

## See also #seealso

[horizontal movement](/reference/corgio/horizontal-movement)

```package
corgio
```