# Space Man

Test physics in space (a non-tilemap, off normal screen experience).
You initially start on-screen, but then press **A** (or move with dpad) to move the player off the
initial screen and into uncharted territory
(along with the camera moving out of the initial 160x120 screen).


**Features tested**: Consider camera offset for projectile from side in [pxt-common-packages#983](https://github.com/microsoft/pxt-common-packages/pull/983) and detection of off-screen sprite collisions from [pxt-common-packages#984](https://github.com/microsoft/pxt-common-packages/pull/984).

```sim
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.startEffect(effects.fire);
    mySprite.vy += -30;
    scene.cameraShake(4, 500);
});
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    effects.clearParticles(mySprite);
    effects.starField.startScreenEffect();
});
effects.starField.startScreenEffect();
const mySprite = sprites.create(img`
    . . . . c c c b b b b b . . . .
    . . . c b b d d d d d d b . . .
    . . f b b c c c c c c b d b . .
    . . f b c 9 9 9 9 1 9 c d b . .
    . . f b c 9 9 9 9 9 1 c d b . .
    . . f b c 9 9 9 9 9 1 c d b . .
    . . f b c 9 9 9 9 9 1 c d b . .
    . . f b c 9 9 9 9 9 1 c d b . .
    . . . f b c c c c c c b b . . .
    . . . . f b b b b b b c . . . .
    . . . f f f f f f f f d b . . .
    . . f b b f f f f f b b d b . .
    . . f d d b b b b b b d d b . .
    . . f b b c b b b b c b d b . .
    . . . c c c c c c c c c b . . .
    . . . . . c c . . c c . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player);
mySprite.vy = 5;
controller.moveSprite(mySprite);
scene.cameraFollowSprite(mySprite);
game.onUpdateInterval(100, function () {
    const projectile = sprites.createProjectileFromSide(img`
        . . . . . . . e c 7 . . . . . .
        . . . . e e e c 7 7 e e . . . .
        . . c e e e e c 7 e 2 2 e e . .
        . c e e e e e c 6 e e 2 2 2 e .
        . c e e e 2 e c c 2 4 5 4 2 e .
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
        . e e e 2 2 2 2 2 2 2 2 2 4 e .
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
        . . 2 e e 2 2 2 2 2 4 4 2 e . .
        . . . 2 2 e e 4 4 4 2 e e . . .
        . . . . . 2 2 e e e e . . . . .
    `, randint(-100, 100), randint(-100, 100));
    projectile.vx += mySprite.vx;
    projectile.vy += .85 * mySprite.vy;
});
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1);
});
```

```package
color-coded-tilemap
```