## Keeping Score

Keeping score is a basic part of almost every game. Scores are kept for achievements, eliminating enemies, or making points against another player.

Scores are usually counted when some kind of event happens. Examples of such events are when a projectile touches another sprite or when a sprite reaches a certain tile in the game scene.

The game score is set and changed by the ``||info:set score||`` and ``||info:change score by||`` blocks.

```block
info.setScore(0)
info.changeScoreBy(1)
```

Once the ``||info:set score||`` or ``||info:change score by||`` blocks are used, the current game score is displayed on the screen. You can use ``||info:set score||`` to set a beginning score or to reset it to some other value. The ``||info:change score by||`` block adds to the score by some amount, it can change the score be more than just `1` point if you want. Scores can also be negative and you can subtract points with a negative value in ``||info:change score by||``.

### Example

As a simple example for keeping score, the player in the following game fires a projectile at an enemy sprite. If the projectile hits the enemy sprite, which is detected in the sprite overlap event, the game score is increased by `1` point.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, blaster, 100, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprite.startEffect(effects.confetti, 500)
    sprite.x = randint(100, 150)
    sprite.y = randint(0, scene.screenHeight())
})
let projectile: Sprite = null
let blaster: Sprite = null
info.setScore(0)
blaster = sprites.create(img`
    e e . . . . . . . . . . . . . . 
    e e . . . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e e e . . . . . . . . . . . . 
    e e e e e . . . . . . . . . . . 
    e e e e e e . . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e e . . . . . . . . . 
    e e e e e e . . . . . . . . . . 
    e e e e e . . . . . . . . . . . 
    e e e e . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e . . . . . . . . . . . . . . 
    e e . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(blaster, 0, 100)
blaster.left = 0
let ball = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.Enemy)
ball.x = 140
```

### Checking on the current score

If you want to access the current score in your game code, the ``||info:score||`` block gives the value for the current score.

```blocks
let bonus = 0
game.onUpdateInterval(500, function () {
    if (info.score() == 20) {
        info.changeScoreBy(bonus)
    }
})
```

### What's the high score?

Sometimes you might want to announce that a new high score is reached. Your game will remember the highest score counted and you can get it from the ``||info.high score||`` block.

```blocks
let showOnce = true
let mySprite = sprites.create(img`
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 f 5 5 5 5 f 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 f 5 5 5 5 5 f 5 5 5 5 
    . 5 5 5 5 5 f f f f f 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	if ((info.score() == info.highScore()) && showOnce) {
        mySprite.say("High score!")
        showOnce = false
    }
    info.changeScoreBy(1)
})
```
