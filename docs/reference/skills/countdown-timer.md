## Countdown timer

Many games require the player to reach a goal in a certain amount of time. Those games have a timer that counts down from an initial amount of time and then ends an activity or the game itself when the timer reaches zero.

### Start the countdown

The countdown timer is set and started with the ``||info:start countdown||`` block. The amount of time is set in seconds. The timer is displayed at the top of the screen until the time elapses.

```blocks
info.startCountdown(10)
```

### Out of time!

When the countdown timer reaches zero you might want to switch to a new level or maybe just end the game. The end of the countdown is captured in the ``||info:on countdown end||`` event.

```blocks
info.onCountdownEnd(function () {
    game.over(false, effects.melt)
})
```

### Wait, stop the clock!

Once the countdown starts, it doesn't mean that you can't stop it. What if the player achieves a timed goal in your a game? Well, you can stop the countdown and move on to a new activity in the game. You do this with ``||info:stop countdown||``. For example, you could stop the countdown when the player reaches a food sprite.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.stopCountdown()
})
```

### Example

In this example, the countdown timer is set to `30` seconds and it stops when the player sprite meets the goal of reaching the monkey sprite. Otherwise, the game ends.

```blocks
info.onCountdownEnd(function () {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.stopCountdown()
})
let person = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 2 f e e e e f f . . . 
    . . . f 2 2 2 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 2 2 2 2 e e f f f f . . 
    . . f 2 e f f f f 2 2 2 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . f f e d d f 1 4 d 4 e e f . 
    . f d d f d d d d 4 e e e f . . 
    . f b b f e e e 4 e e f . . . . 
    . f b b e d d 4 2 2 2 f . . . . 
    . . f b e d d e 4 4 4 f f . . . 
    . . . f f e e f f f f f f . . . 
    . . . . f f f . . . f f . . . . 
    `, SpriteKind.Player)
let monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . . f d d f d d e e f f . . . . 
    . c d d d f d d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c f f f f d d d e e f c f . . . 
    . f b d f f f e e e e f . . . . 
    . f d d f e f f f e e f . . . . 
    . . f f f e e e e f f f . f f . 
    . . f e e f e e e e f f . e f . 
    . f f e e e f f f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f f e e d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
person.left = 0
monkey.right = scene.screenWidth()
controller.moveSprite(person)
info.startCountdown(30)
```