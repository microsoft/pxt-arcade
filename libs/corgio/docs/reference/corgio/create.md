# create

Create a Corgi platformer sprite.

```sig
corgio.create()
```

## Parameters

* **kind**: the [kind](/reference/sprites/sprite/kind) of sprite for the corgi.
* **x**: the initial horizontal position of the corgi sprite on the screen.
* **y**: the initial vertical position of the corgi sprite on the screen.

## Returns

* a [sprite](/types/sprite) that is the new corgi.

## Example #example

Create a new corgi at the default screen location and give it movement.

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.verticalMovement()
myCorg.horizontalMovement()
```

## See also #seealso

[create](/reference/sprites/create)

```package
corgio
```