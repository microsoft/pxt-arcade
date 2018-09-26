# Simple Baseball Catching Game

![Final Baseball Catching Game](/static/courses/csintro/review/final-baseball-game.gif)

## Provided Starter Code:

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Ball
}
let ball: Sprite = null
let mitt: Sprite = null
mitt = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e f e f e f e . . . . . 
. . . . e f e f e f e f e . . . 
. . . . e f e f e f e f e . . . 
. . . . e f e f e f e f e . . . 
. . . . e e e e e e e e e . . . 
. . . . e e f f f f f e e . . . 
. . . . e e e e e e e e e . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.onUpdateInterval(500, function () {
    ball = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . 2 1 1 1 1 1 2 . . . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . 1 1 1 1 2 1 2 1 1 1 1 . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . . 1 1 2 1 1 1 2 1 1 . . . . 
. . . . 2 1 1 1 1 1 2 . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-75, 75), Math.randomRange(-75, 75), SpriteKind.Ball)
})
```

## Student Task #1: Mitt movement

* Make the ``||variables:mitt||`` move based off the direction keys using the ``||controller:control sprite with||`` block
* Force the ``||variables:mitt||`` to stay in the screen using the ``||set mitt stay in screen on||`` block
* Add a ``||info:countdown||`` of 20 seconds, so that the game ends after 20 seconds are up

## Student Task #2: Overlaps

* Add an event for the overlap between the ``||variables:mitt||`` and a ``||sprites:Ball||``
* Inside that event, destroy the ``||sprites:Ball||``, and increment the score

## Student Task #3: Music

* Inside of the overlap event from Task 2, add a block so that the game plays ``||music:power up||`` each time a ball is caught
* Add code to make the mitt "bounce" when it catches the ball. To do this, make the mitt change it's ``||sprites:y||`` value by -5, ``||loops:pause||`` for 150 ms, then change the ``||sprites:y||`` back to it's prior value (by changing it by 5)
