# stop Dart

Stop the dart from moving.

```sig
darts.create().stopDart()
```

The dart will stop at its current location.

## Example

Throw a dart at a target sprite. Stop the dart when it reaches the target.

```blocks
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
    `, SpriteKind.Player, 10, 10)
myDart.controlWithArrowKeys(true)
let target = sprites.create(img`
    .......11.......
    ......1111......
    .....111111.....
    .....111111.....
    ....11111111....
    ....11111111....
    ....11111111....
    ...1111221111...
    ...1112112111...
    ..111121121111..
    ..111211112111..
    .11112111121111.
    .11121111112111.
    .11121111112111.
    .11121122112111.
    .11121122112111.
    .11121122112111.
    .11121122112111.
    ..111211112111..
    ..111211112111..
    ..111211112111..
    ...1121111211...
    ...1112112111...
    ...1112112111...
    ...1111221111...
    ....11111111....
    ....11111111....
    ....11111111....
    .....111111.....
    .....111111.....
    ......1111......
    .......11.......
    `, SpriteKind.Enemy)
target.right = scene.screenWidth()
myDart.throwDart()
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    myDart.stopDart()
})
```
## See also

[throw dart](/reference/darts/throw-dart)

```package
darts
```