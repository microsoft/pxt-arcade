# add To Script

Add a phrase to the corgi's list of known phrases to speak.

```sig
corgio.create().addToScript("")
```

The corgi is "taught" new a phrase by adding a phrase script to its list of known phrases.

## Parameters

* **input**: a [string](/types/string) that is a new phrase script to add to the list of known phrases.

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

[bark](/reference/corgio/bark)

```package
corgio
```