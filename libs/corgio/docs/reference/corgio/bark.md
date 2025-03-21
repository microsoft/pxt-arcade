# bark

Make the corgi speak a phrase from a list of known phrases.

```sig
corgio.create().bark()
```

The corgi is "taught" new phrases by adding one with the [teach](/reference/corgio/add-to-script) block. A phrase to speak is chosen randomly.

## Example #example

Teach the corgi some new phrases to speak. Every `2` seconds, have the corgi say a phrase.

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.verticalMovement(true)
myCorg.horizontalMovement(true)
myCorg.addToScript("bark")
myCorg.addToScript("ruff, ruff")
myCorg.addToScript("ooow, ooow")
myCorg.addToScript("yip, yip")
game.onUpdateInterval(2000, function () {
    myCorg.bark()
})
```

## See also #seealso

[add to script](/reference/corgio/add-to-script)

```package
corgio
```