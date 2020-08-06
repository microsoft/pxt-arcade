# Jumpy Platformer

```blocks
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
    `
    //% blockIdentity=images._tile
    export const tile1 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . f f f f . . . . .
        . . . . . . f 2 2 2 2 f f . . .
        . . . . . . f 2 3 3 2 2 2 f . .
        . . . . . . f 2 3 2 2 2 2 2 f .
        . . . . . . f 3 2 2 2 2 2 f . .
        . . . . . . f 2 2 2 2 f f . . .
        . . . . . . f b d f f . . . . .
        . . . . . . f b d f . . . . . .
        . . . . . . f b d f . . . . . .
        . . . . . . f b d f . . . . . .
        . . . . . . f b d f . . . . . .
        . . . . . . f d d f . . . . . .
        . . . . . f f f f f f . . . . .
        . . . . f f f f f f f f . . . .
        . . . f f f f f f f f f f . . .
    `
    //% blockIdentity=images._tile
    export const tile2 = img`
        f f f f f f f f f f f f f f f f
        6 7 7 7 7 3 5 3 7 6 7 2 7 6 7 7
        7 7 7 6 6 7 3 7 6 7 2 4 2 7 7 7
        7 7 6 6 6 6 6 7 6 6 7 2 6 6 7 7
        7 6 6 e e e 6 6 6 6 6 6 6 6 6 7
        6 6 e e d e e 6 e e 6 6 e e 6 6
        6 e e e e e e e e e e e e e e 6
        e e e e e d e e e d e e e e e e
        e e e e e e e e e e e e e e d e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e d e e e e e d e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e d
        e e e e e e e e e e e e e e e e
        e d e e e e e e e d e e e e e e
    `
    //% blockIdentity=images._tile
    export const tile3 = img`
        f f f f f f f f f f f f f f f f
        f f 2 2 2 2 2 2 2 f 2 2 2 2 f f
        f 2 2 2 2 2 2 2 2 f 2 2 2 2 2 f
        f 2 2 2 2 2 2 2 2 f 2 2 2 2 2 f
        f 2 2 2 2 2 2 2 2 f 2 2 2 2 2 f
        f f f f f f f f f f f f f f f f
        f 2 2 2 2 f 2 2 2 2 2 2 2 2 2 f
        f 2 2 2 2 f 2 2 2 2 4 4 2 2 2 f
        f 2 2 2 2 f 2 2 2 4 4 2 2 2 2 f
        f 2 2 2 2 f 2 2 2 2 2 2 2 2 2 f
        f f f f f f f f f f f f f f f f
        f 2 2 2 2 2 2 2 2 f 2 2 2 2 2 f
        f 2 2 2 4 2 2 2 2 f 2 2 2 2 2 f
        f 2 2 4 2 2 2 2 2 f 2 2 2 2 2 f
        f f 2 2 2 2 2 2 2 f 2 2 2 2 f f
        f f f f f f f f f f f f f f f f
    `
    //% blockIdentity=images._tile
    export const tile4 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . f f f f f f . . . . . .
        . . . f 7 2 7 7 7 2 f . . . . .
        . . f 7 7 7 2 7 2 7 7 f . . . .
        . . f 7 7 7 7 7 7 7 7 7 f . . .
        . f 7 7 7 2 7 7 7 2 7 7 f . . .
        . f 7 7 7 2 7 7 7 2 7 7 7 f . .
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f .
        . f 7 7 7 7 2 2 2 7 7 7 7 7 f .
        . . f 7 7 2 2 7 2 2 7 7 7 7 f .
        . . f 7 7 2 7 7 7 2 2 7 7 7 f .
        . . . f 7 7 7 7 7 7 7 7 7 7 f .
        . . . . f f 7 7 7 7 7 7 7 f . .
        . . . . . . f f f f f f f . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile5 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . f f 5 5 5 5 f f . . . .
        . . . . f 5 5 5 5 5 5 f . . . .
        . . . f 5 5 5 4 4 5 5 5 f . . .
        . . . f 5 5 5 4 4 5 5 5 f . . .
        . . . f 5 5 5 4 4 5 5 5 f . . .
        . . . f 5 5 5 4 4 5 5 5 f . . .
        . . . . f 5 5 5 5 5 5 f . . . .
        . . . . f f 5 5 5 5 f f . . . .
        . . . . . . f f f f . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile6 = img`
        . . . . . . . . . . . . . . . .
        . . . f f f f f f f f f f . . .
        . . f e e e e e e e e e e f . .
        . f e e e e e e e e e e e e f .
        . f d e e d d d d d d d d d f .
        . f d e d d f d d d d f d d f .
        . f e d d d f d d d d f d d f .
        . . f d d d f d d d d f d d f .
        . . f d d d d d d d d d d d f .
        . . f b a c c c c c c c c a f .
        . . f d d d c c c c c c d d f .
        . . f d d f f f b b f f f d f .
        . . f b a a a a a a a a a f . .
        . . . f b a a f f b a a f . . .
        . . . f b a a f f b a a f . . .
        . . . . f f f . . f f f . . . .
    `
    //% blockIdentity=images._tile
    export const tile7 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . f f f f f f f . . . .
        . . . . f 4 4 4 4 4 4 4 f . . .
        . . . f 4 5 5 4 4 4 5 5 4 f . .
        . f . f 4 4 4 5 4 5 4 4 4 f . f
        . f f 4 4 4 4 4 4 4 4 4 4 4 f f
        . f 4 4 4 4 4 5 4 5 4 4 4 4 4 f
        . f 4 4 4 4 4 5 4 5 4 4 4 4 4 f
        . f f 4 4 4 4 4 4 4 4 4 4 4 f f
        . . . f 4 4 5 5 5 5 5 4 4 f . .
        . . . . f 4 5 4 4 4 5 4 f . . .
        . . . . . f f f f f f f . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}

enum ActionKind {
    RunningLeft,
    RunningRight,
    Idle,
    IdleLeft,
    IdleRight,
    JumpingLeft,
    JumpingRight,
    CrouchLeft,
    CrouchRight,
    Flying,
    Walking,
    Jumping
}
namespace SpriteKind {
    export const Bumper = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const Flier = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bumper, function (sprite, otherSprite) {
    if (sprite.vy > 0 && !(sprite.isHittingTile(CollisionDirection.Bottom)) || sprite.y < otherSprite.top) {
        otherSprite.destroy(effects.ashes, 250)
        otherSprite.vy = -50
        sprite.vy = -2 * pixelsToMeters
        info.changeScoreBy(1)
        music.powerUp.play()
    } else {
        info.changeLifeBy(-1)
        sprite.say("Ow!", invincibilityPeriod)
        music.powerDown.play()
    }
    pause(invincibilityPeriod)
})
function initializeAnimations () {
    initializeHeroAnimations()
    initializeCoinAnimation()
    initializeFlierAnimations()
}
function giveIntroduction () {
    game.setDialogFrame(img`
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . .
        2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 .
        2 1 1 2 2 2 2 2 2 2 2 2 1 1 2 .
        2 1 2 2 1 1 1 1 1 1 1 2 2 1 2 .
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 .
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 .
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 .
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 .
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 .
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 .
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 .
        2 1 2 2 1 1 1 1 1 1 1 2 2 1 2 .
        2 1 1 2 2 2 2 2 2 2 2 2 1 1 2 .
        2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . . . . . . . . . . . . . . . .
        `)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . f f 5 5 5 5 f f . . . .
        . . . . f 5 5 5 5 5 5 f . . . .
        . . . f 5 5 5 4 4 5 5 5 f . . .
        . . . f 5 5 5 4 4 5 5 5 f . . .
        . . . f 5 5 5 4 4 5 5 5 f . . .
        . . . f 5 5 5 4 4 5 5 5 f . . .
        . . . . f 5 5 5 5 5 5 f . . . .
        . . . . f f 5 5 5 5 f f . . . .
        . . . . . . f f f f . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `)
    showInstruction("Move with the left and right buttons.")
    showInstruction("Jump with the up or A button.")
    showInstruction("Double jump by pressing jump again.")
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    attemptJump()
})
function initializeCoinAnimation () {
    coinAnimation = animation.createAnimation(ActionKind.Idle, 200)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . f f 5 5 5 5 f f . . . .
        . . . . f 5 5 5 5 5 5 f . . . .
        . . . f 5 5 5 4 4 5 5 5 f . . .
        . . . f 5 5 5 4 4 5 5 5 f . . .
        . . . f 5 5 5 4 4 5 5 5 f . . .
        . . . f 5 5 5 4 4 5 5 5 f . . .
        . . . . f 5 5 5 5 5 5 f . . . .
        . . . . f f 5 5 5 5 f f . . . .
        . . . . . . f f f f . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . f f f f f f . . . . . .
        . . . f f 5 f 5 5 5 f . . . . .
        . . . f 5 f 5 5 5 5 5 f . . . .
        . . f 5 f 5 5 5 4 5 5 f . . . .
        . . f 5 f 5 5 5 4 4 5 5 f . . .
        . . f 5 f 5 5 5 4 4 5 5 f . . .
        . . f 5 f 5 5 5 4 5 5 f . . . .
        . . . f 5 f 5 5 5 5 5 f . . . .
        . . . . f 5 f 5 5 5 f . . . . .
        . . . . f f f f f f . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . f f f f f . . . . . .
        . . . . f f 5 f 5 f f . . . . .
        . . . f f 5 f 5 5 5 f . . . . .
        . . . f 5 f 5 5 5 5 f f . . . .
        . . . f 5 f 5 5 4 5 5 f . . . .
        . . . f 5 f 5 5 4 5 5 f . . . .
        . . . f 5 f 5 5 5 5 f f . . . .
        . . . f f 5 f 5 5 5 f . . . . .
        . . . . f f 5 f 5 f f . . . . .
        . . . . . f f f f f . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . . f f f f f . . . . . .
        . . . . . f 5 f 5 f f . . . . .
        . . . . . f 5 f 5 5 f . . . . .
        . . . . . f 5 f 5 5 f . . . . .
        . . . . . f 5 f 5 5 f . . . . .
        . . . . . f 5 f 5 5 f . . . . .
        . . . . . f 5 f 5 f f . . . . .
        . . . . . f f f f f . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . . . f f f f f . . . . .
        . . . . . f f 5 f 5 f . . . . .
        . . . . . f 5 5 f 5 f . . . . .
        . . . . . f 5 5 f 5 f . . . . .
        . . . . . f 5 5 f 5 f . . . . .
        . . . . . f 5 5 f 5 f . . . . .
        . . . . . f f 5 f 5 f . . . . .
        . . . . . . f f f f f . . . . .
        . . . . . . f f f f . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f . . . . .
        . . . . . f f 5 f 5 f f . . . .
        . . . . . f 5 5 5 f 5 f f . . .
        . . . . f f 5 5 5 5 f 5 f . . .
        . . . . f 5 5 4 5 5 f 5 f . . .
        . . . . f 5 5 4 5 5 f 5 f . . .
        . . . . f f 5 5 5 5 f 5 f . . .
        . . . . . f 5 5 5 f 5 f f . . .
        . . . . . f f 5 f 5 f f . . . .
        . . . . . . f f f f f . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f . . . .
        . . . . . f 5 5 5 f 5 f f . . .
        . . . . f 5 5 5 5 5 f 5 f . . .
        . . . . f 5 5 4 5 5 5 f 5 f . .
        . . . f 5 5 4 4 5 5 5 f 5 f . .
        . . . f 5 5 4 4 5 5 5 f 5 f . .
        . . . . f 5 5 4 5 5 5 f 5 f . .
        . . . . f 5 5 5 5 5 f 5 f . . .
        . . . . . f 5 5 5 f 5 f . . . .
        . . . . . . f f f f f f . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 250)
    otherSprite.y += -3
    info.changeScoreBy(3)
    music.baDing.play()
})
function attemptJump () {
    // else if: either fell off a ledge, or double jumping
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        hero.vy = -4 * pixelsToMeters
    } else if (canDoubleJump) {
        doubleJumpSpeed = -3 * pixelsToMeters
        // Good double jump
        if (hero.vy >= -40) {
            doubleJumpSpeed = -4.5 * pixelsToMeters
            hero.startEffect(effects.trail, 500)
            scene.cameraShake(2, 250)
        }
        hero.vy = doubleJumpSpeed
        canDoubleJump = false
    }
}
function animateIdle () {
    mainIdleLeft = animation.createAnimation(ActionKind.IdleLeft, 100)
    animation.attachAnimation(hero, mainIdleLeft)
    mainIdleLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . f f f f f f f f f f . . .
        . . f e e e e e e e e e e f . .
        . f e e e e e e e e e e e e f .
        . f d d d d d d d d d e e d f .
        . f d d f d d d d f d d e d f .
        . f d d f d d d d f d d d e f .
        . f d d f d d d d f d d d f . .
        . f d d d d d d d d d d d f . .
        . f a c c c c c c c c a b f . .
        . f d d c c c c c c d d d f . .
        . f d f f f b b f f f d d f . .
        . . f a a a a a a a a a b f . .
        . . . f a a b f f a a b f . . .
        . . . f a a b f f a a b f . . .
        . . . . f f f . . f f f . . . .
        `)
    mainIdleRight = animation.createAnimation(ActionKind.IdleRight, 100)
    animation.attachAnimation(hero, mainIdleRight)
    mainIdleRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . f f f f f f f f f f . . .
        . . f e e e e e e e e e e f . .
        . f e e e e e e e e e e e e f .
        . f d e e d d d d d d d d d f .
        . f d e d d f d d d d f d d f .
        . f e d d d f d d d d f d d f .
        . . f d d d f d d d d f d d f .
        . . f d d d d d d d d d d d f .
        . . f b a c c c c c c c c a f .
        . . f d d d c c c c c c d d f .
        . . f d d f f f b b f f f d f .
        . . f b a a a a a a a a a f . .
        . . . f b a a f f b a a f . . .
        . . . f b a a f f b a a f . . .
        . . . . f f f . . f f f . . . .
        `)
}
function setLevelTileMap (level: number) {
    clearGame()
    if (level == 0) {
        tiles.setTilemap(tiles.createTilemap(hex`2000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000006000000000000000000050000000000000000000000000000000000000000000000000000000003000005000300000000000000000000000000000000000300000000030000000300040000030000040003000400000400030001000000030202020203020202030202020203020202020302020202020203020202020203`, img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . 2
            . . . . 2 . . . 2 . . . . 2 . . . . 2 . . . . . . 2 . . . . . 2
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `, [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen))
    } else if (level == 1) {
        tiles.setTilemap(tiles.createTilemap(hex`2000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000305030000000000000000000000000000000000030300030000000000000300030503000000000000000000000000000000000303030003000000000300030003050300000000000000000000030000000003030303000300000300030503050305030005050505050505050503060000000000000400030000030004000000040503000000000000000001000302020202020202020203020203020202020202020302020202020202020202`, img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . .
            . . . . . . . 2 2 . 2 . . . . . . 2 . 2 . 2 . . . . . . . . . .
            . . . . . . 2 2 2 . 2 . . . . 2 . 2 . 2 . 2 . . . . . . . . . .
            2 . . . . 2 2 2 2 . 2 . . 2 . 2 . 2 . 2 . 2 . . . . . . . . . .
            2 . . . . . . . . . 2 . . 2 . . . . . . . 2 . . . . . . . . . .
            2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `, [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen))
    } else if (level == 2) {
        tiles.setTilemap(tiles.createTilemap(hex`2000080000000000000000000000000000000000000000060000000000000000060606060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020202000000000000000000000000000000000000000000000000020002060303030000000000000000000000000000030303000000000002000002000200030303000000000000000000000000000003030300040002000200000000020003030300000000000000000005000000000303030101010201020101010102010101010101010101010101010101010101010101`, img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . .
            . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . .
            . . . . . 2 . . 2 . 2 . . . . . . . . . . . . . . . . . . . . .
            . . . 2 . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . .
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `, [myTiles.tile0,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile6,myTiles.tile1,myTiles.tile7], TileScale.Sixteen))
    } else if (level == 3) {
        tiles.setTilemap(tiles.createTilemap(hex`2000080000000000000000000000000300000007000000070000070007000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000300000003000000000000000000000000000000000000000000000000000300030000000000000000000000000000000000000000000000000000000303030303030303030303030303030303030303030303030303030300000000030000050000050005000005000500000500050000000500000005000000060303010000040004000000040000000000040000000400000004000000030202020302020202020202020202020202020202020202020202020202020203`, img`
            . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . .
            . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . . . . . . .
            . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . .
            . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
            . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `, [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen))
    } else if (level == 4) {
        tiles.setTilemap(tiles.createTilemap(hex`2000080000070700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005050500000000000000000000050005000000000005050000030303030003000000000000000000000000000000000000050505000000050305050505000300000000000000000000060003040404040404030404040404030404040404030000000000000100000202020302020202020203020202020203020202020203020202020202020202`, img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . 2 2 2 2 . 2 . . . . . . . . .
            . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . .
            . . . 2 . . . . . . 2 . . . . . 2 . . . . . 2 . . . . . . . . .
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `, [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen))
    } else if (level == 5) {
        tiles.setTilemap(tiles.createTilemap(hex`2000080000070700000000000000000000000000000000000707000000000000000000000000000000000000000000000505000000000000000000000000000000000000000000000000000000000000050300000000000000000000000000000000000000000000000000000005050003030000000000000000050505050000000000000000000000050005000303000005050000030303030000000000000000000003030000000003000300050505000000050300000000000000000000000000000303060003000305030400030400000003030004000004000004000000000100030302020302030203020203020202020303020202020202020202020202020203`, img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . .
            . . . . . . . . . 2 2 . . . . . . 2 2 2 2 . . . . . . . . . . 2
            2 . . . . 2 . 2 . . . . . . . . 2 . . . . . . . . . . . . . . 2
            2 . . 2 . 2 . 2 . . 2 . . . . 2 2 . . . . . . . . . . . . . . 2
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `, [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen))
    } else if (level == 6) {
        tiles.setTilemap(tiles.createTilemap(hex`27000800000000000606060606060606060606060606060606060606060606060606060606000003000000000003030303030303030303030303030303030303030303030303030303030303000003000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000006060606030400000000000400000004000004000004000004000000000003000000000000000003030303030303030303030303030303030303030303030303030303030303000000030000000000000000000000000000000000000000000000000000000000000000000000000000030500000004040000000000000406060606060604000606060600000000000000000000000100030202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
            . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
            . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . .
            . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . .
            2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `, [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile6,myTiles.tile5], TileScale.Sixteen))
    } else if (level == 7) {
        tiles.setTilemap(tiles.createTilemap(hex`250008000000000000000000000000000000000000000000000000000000050505050505050000000000000000000000000700000000000000000003030000000700000505050505050500000000000000000000030300000000000303030000030300000000000003030303030303000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000003030000000000000000000000000000000000000000000000000000000000000000000000030304000000000006000000000006000000000600000000000000060000000000000001000303020202020202020202020202020202020202020202020202020202020202020202020202`, img`
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . .
            . . . . . . 2 2 . . . . . 2 2 2 . . 2 2 . . . . . . 2 2 2 2 2 2 2 . . . .
            . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `, [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile6,myTiles.tile5,myTiles.tile4,myTiles.tile7], TileScale.Sixteen))
    }
    initializeLevel(level)
}
function initializeFlierAnimations () {
    flierFlying = animation.createAnimation(ActionKind.Flying, 100)
    flierFlying.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . f f f f f f f . . . .
        . . . . f 4 4 4 4 4 4 4 f . . .
        . . . f 4 5 5 4 4 4 5 5 4 f . .
        . f . f 4 4 4 5 4 5 4 4 4 f . f
        . f f 4 4 4 4 4 4 4 4 4 4 4 f f
        . f 4 4 4 4 4 5 4 5 4 4 4 4 4 f
        . f 4 4 4 4 4 5 4 5 4 4 4 4 4 f
        . f f 4 4 4 4 4 4 4 4 4 4 4 f f
        . . . f 4 4 5 5 5 5 5 4 4 f . .
        . . . . f 4 5 4 4 4 5 4 f . . .
        . . . . . f f f f f f f . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `)
    flierFlying.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . f f f f f f f . . . .
        . . . . f 4 4 4 4 4 4 4 f . . .
        . . . f 4 5 5 4 4 4 5 5 4 f . .
        . . . f 4 4 4 5 4 5 4 4 4 f . .
        . . f 4 4 4 4 4 4 4 4 4 4 4 f .
        . . f 4 4 4 4 5 4 5 4 4 4 4 f .
        . f 4 4 4 4 4 5 4 5 4 4 4 4 4 f
        . f 4 4 4 4 4 4 4 4 4 4 4 4 4 f
        . f 4 f 4 4 5 5 5 5 5 4 4 f 4 f
        . f f . f 4 5 4 4 4 5 4 f . f f
        . f . . . f f f f f f f . . . f
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `)
    flierFlying.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . f f f f f f f . . . .
        . . . . f 4 4 4 4 4 4 4 f . . .
        . . . f 4 5 5 4 4 4 5 5 4 f . .
        . f . f 4 4 4 5 4 5 4 4 4 f . f
        . f f 4 4 4 4 4 4 4 4 4 4 4 f f
        . f 4 4 4 4 4 5 4 5 4 4 4 4 4 f
        . f 4 4 4 4 4 5 4 5 4 4 4 4 4 f
        . f f 4 4 4 4 4 4 4 4 4 4 4 f f
        . . . f 4 4 5 5 5 5 5 4 4 f . .
        . . . . f 4 5 4 4 4 5 4 f . . .
        . . . . . f f f f f f f . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `)
    flierIdle = animation.createAnimation(ActionKind.Idle, 100)
    flierIdle.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . f f f f f f f . . . .
        . . . . f 4 4 4 4 4 4 4 f . . .
        . . . f 4 5 5 4 4 4 5 5 4 f . .
        . f . f 4 4 4 5 4 5 4 4 4 f . f
        . f f 4 4 4 4 4 4 4 4 4 4 4 f f
        . f 4 4 4 4 4 5 4 5 4 4 4 4 4 f
        . f 4 4 4 4 4 5 4 5 4 4 4 4 4 f
        . f f 4 4 4 4 4 4 4 4 4 4 4 f f
        . . . f 4 4 5 5 5 5 5 4 4 f . .
        . . . . f 4 5 4 4 4 5 4 f . . .
        . . . . . f f f f f f f . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    attemptJump()
})
function animateRun () {
    mainRunLeft = animation.createAnimation(ActionKind.RunningLeft, 100)
    animation.attachAnimation(hero, mainRunLeft)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . f f f f f f f . . . . . .
        . . f e e e e e e e f . . . . .
        . f e e e e e e e e e f . . . .
        . f d d d d e d d e e f . . . .
        . f d d f d d e d e e f . . . .
        . f d d f d d d e e e f . . . .
        . f d d f d d d d d d f . . . .
        . f d d d d d d d d d f . . . .
        . . f c c c a a c c b f . . . .
        . . f c c d d d c c b f . . . .
        . . f b f f d d f f f f . . . .
        . . f a a a a a a a b f . . . .
        . . . f a a a a b f f . . . . .
        . . . f a a a a b f . . . . . .
        . . . . f f f f f . . . . . . .
        `)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . f f f f f f f . . . . . .
        . . f e e e e e e e f . . . . .
        . f e e e e e e e e e f . . . .
        . f d d d d e d d e e f . . . .
        . f d d f d d e d e e f . . . .
        . f d d f d d d e e e f . . . .
        . f d d f d d d d d d f . . . .
        . f d d d d d d d d d f . . . .
        . . f c c c c a a c b f . . . .
        . . f c c c c d d c b f . . . .
        . . f b f f d d d f f f f . . .
        . . f a a a a a a a a b f f . .
        . . . f a a b f f a a a f f . .
        . . . . f f f . f f f f f . . .
        `)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . f f f f f f f . . . . . .
        . . f e e e e e e e f . . . . .
        . f e e e e e e e e e f . . . .
        . f d d d d e d d e e f . . . .
        . f d d f d d e d e e f . . . .
        . f d d f d d d e e e f . . . .
        . f d d f d d d d d d f . . . .
        . f d d d d d d d d d f . . . .
        . . f c c c a a c c b f . . . .
        . . f c c d d d c c b f . . . .
        . . f b f f d d f f f f . . . .
        . . f a a a a a a a b f . . . .
        . . . f a a a a b f f . . . . .
        . . . f a a a a b f . . . . . .
        . . . . f f f f f . . . . . . .
        `)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . f f f f f f f . . . . . .
        . . f e e e e e e e f . . . . .
        . f e e e e e e e e e f . . . .
        . f d d d d e d d e e f . . . .
        . f d d f d d e d e e f . . . .
        . f d d f d d d e e e f . . . .
        . f d d f d d d d d d f . . . .
        . f d d d d d d d d d f . . . .
        . . f c a a c c c c b f . . . .
        . f d d d b c c c c b f . . . .
        f f f d d f f f f f f f . . . .
        f f f a a a a a a a b f . . . .
        . f a a b f a a b f f . . . . .
        . f f f f . f f f . . . . . . .
        `)
    mainRunRight = animation.createAnimation(ActionKind.RunningRight, 100)
    animation.attachAnimation(hero, mainRunRight)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f f . . .
        . . . . . f e e e e e e e f . .
        . . . . f e e e e e e e e e f .
        . . . . f e e d d e d d d d f .
        . . . . f e e d e d d f d d f .
        . . . . f e e e d d d f d d f .
        . . . . f d d d d d d f d d f .
        . . . . f d d d d d d d d d f .
        . . . . f b c c a a c c c f . .
        . . . . f b c c d d d c c f . .
        . . . . f f f f d d f f b f . .
        . . . . f b a a a a a a a f . .
        . . . . . f f b a a a a f . . .
        . . . . . . f b a a a a f . . .
        . . . . . . . f f f f f . . . .
        `)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f f . . .
        . . . . . f e e e e e e e f . .
        . . . . f e e e e e e e e e f .
        . . . . f e e d d e d d d d f .
        . . . . f e e d e d d f d d f .
        . . . . f e e e d d d f d d f .
        . . . . f d d d d d d f d d f .
        . . . . f d d d d d d d d d f .
        . . . . f b c a a c c c c f . .
        . . . . f b c d d c c c c f . .
        . . . f f f f d d d f f b f . .
        . . f f b a a a a a a a a f . .
        . . f f a a a f f b a a f . . .
        . . . f f f f . . f f f . . . .
        `)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f f . . .
        . . . . . f e e e e e e e f . .
        . . . . f e e e e e e e e e f .
        . . . . f e e d d e d d d d f .
        . . . . f e e d e d d f d d f .
        . . . . f e e e d d d f d d f .
        . . . . f d d d d d d f d d f .
        . . . . f d d d d d d d d d f .
        . . . . f b c c a a c c c f . .
        . . . . f b c c d d d c c f . .
        . . . . f f f f d d f f b f . .
        . . . . f b a a a a a a a f . .
        . . . . . f f b a a a a f . . .
        . . . . . . f b a a a a f . . .
        . . . . . . . f f f f f . . . .
        `)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f f . . .
        . . . . . f e e e e e e e f . .
        . . . . f e e e e e e e e e f .
        . . . . f e e d d e d d d d f .
        . . . . f e e d e d d f d d f .
        . . . . f e e e d d d f d d f .
        . . . . f d d d d d d f d d f .
        . . . . f d d d d d d d d d f .
        . . . . f b c c c c a a c f . .
        . . . . f b c c c c b d d d f .
        . . . . f f f f f f f d d f f f
        . . . . f b a a a a a a a f f f
        . . . . . f f b a a f b a a f .
        . . . . . . . f f f . f f f . .
        `)
}
function animateJumps () {
    // Because there isn't currently an easy way to say "play this animation a single time
    // and stop at the end", this just adds a bunch of the same frame at the end to accomplish
    // the same behavior
    mainJumpLeft = animation.createAnimation(ActionKind.JumpingLeft, 100)
    animation.attachAnimation(hero, mainJumpLeft)
    mainJumpLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . f f f f f f f f f f . . .
        . . f e e e e e e e e e e f . .
        . f e e e e e e e e e e e e f .
        . f d d d d d d d d d e e d f .
        . f d d f d d d d f d d e d f .
        . f d d f d d d d f d d d e f .
        . f d d f d d d d f d d d f . .
        . f d d d d d d d d d d d f . .
        . f a c c c c c c c c a b f . .
        . f d d c c c c c c d d d f . .
        . f d f f f b b f f f d d f . .
        . . f a a a a a a a a a b f . .
        . . . f a a b f f a a b f . . .
        . . . f a a b f f a a b f . . .
        . . . . f f f . . f f f . . . .
        `)
    mainJumpLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . f f f f f f f f f f . . .
        . . f e e e e e e e e e e f . .
        . f e e e e e e e e e e e e f .
        . f d d d d d d d d d e e d f .
        . f d d f d d d d f d d e d f .
        . f d d f d d d d f d d d e f .
        . f d d f d d d d f d d d f . .
        . f d d d d d d d d d d d f . .
        . f a c c c c c c c c a b f . .
        . f d d c c c c c c d d d f . .
        . f d f f f b b f f f d d f . .
        . . f a a a a a a a a a b f . .
        . . . f a a b f f a a b f . . .
        . . . . f f f . . f f f . . . .
        . . . . . . . . . . . . . . . .
        `)
    for (let index = 0; index < 30; index++) {
        mainJumpLeft.addAnimationFrame(img`
            . . . . . . . . . . . . . . . .
            . . . f f f f f f f f f f . . .
            . . f e e e e e e e e e e f . .
            . f e e e e e e e e e e e e f .
            . f d d d d d d d d d e e d f .
            . f d d f d d d d f d d e d f .
            . f d d f d d d d f d d d e f .
            . f d d f d d d d f d d d f . .
            . f d d d d d d d d d d d f f .
            . d a b c c c c c c c c b a d .
            . d a c c c c c c c c c c a d .
            . f f f f f b b f f f f f f f .
            . . f a a a a a a a a a b f . .
            . . . f a a b f f a a b f . . .
            . . . . f f f . . f f f . . . .
            . . . . . . . . . . . . . . . .
            `)
    }
    mainJumpRight = animation.createAnimation(ActionKind.JumpingRight, 100)
    animation.attachAnimation(hero, mainJumpRight)
    mainJumpRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . f f f f f f f f f f . . .
        . . f e e e e e e e e e e f . .
        . f e e e e e e e e e e e e f .
        . f d e e d d d d d d d d d f .
        . f d e d d f d d d d f d d f .
        . f e d d d f d d d d f d d f .
        . . f d d d f d d d d f d d f .
        . . f d d d d d d d d d d d f .
        . . f b a c c c c c c c c a f .
        . . f d d d c c c c c c d d f .
        . . f d d f f f b b f f f d f .
        . . f b a a a a a a a a a f . .
        . . . f b a a f f b a a f . . .
        . . . f b a a f f b a a f . . .
        . . . . f f f . . f f f . . . .
        `)
    mainJumpRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . f f f f f f f f f f . . .
        . . f e e e e e e e e e e f . .
        . f e e e e e e e e e e e e f .
        . f d e e d d d d d d d d d f .
        . f d e d d f d d d d f d d f .
        . f e d d d f d d d d f d d f .
        . . f d d d f d d d d f d d f .
        . . f d d d d d d d d d d d f .
        . . f b a c c c c c c c c a f .
        . . f d d d c c c c c c d d f .
        . . f d d f f f b b f f f d f .
        . . f b a a a a a a a a a f . .
        . . . f b a a f f b a a f . . .
        . . . . f f f . . f f f . . . .
        . . . . . . . . . . . . . . . .
        `)
    for (let index = 0; index < 30; index++) {
        mainJumpRight.addAnimationFrame(img`
            . . . . . . . . . . . . . . . .
            . . . f f f f f f f f f f . . .
            . . f e e e e e e e e e e f . .
            . f e e e e e e e e e e e e f .
            . f d e e d d d d d d d d d f .
            . f d e d d f d d d d f d d f .
            . f e d d d f d d d d f d d f .
            . . f d d d f d d d d f d d f .
            . f f d d d d d d d d d d d f .
            . d a b c c c c c c c c b a d .
            . d a c c c c c c c c c c a d .
            . f f f f f f f b b f f f f f .
            . . f b a a a a a a a a a f . .
            . . . f b a a f f b a a f . . .
            . . . . f f f . . f f f . . . .
            . . . . . . . . . . . . . . . .
            `)
    }
}
function animateCrouch () {
    mainCrouchLeft = animation.createAnimation(ActionKind.CrouchLeft, 100)
    animation.attachAnimation(hero, mainCrouchLeft)
    mainCrouchLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . f f f f f f f f f f . . .
        . . f e e e e e e e e e e f . .
        . f e e e e e e e e e e e e f .
        . f d d d d d d d d d e e d f .
        . f d d f d d d d f d d e d f .
        . f d d f d d d d f d d d e f .
        . f d d f d d d d f d d d f . .
        . f d d d d d d d d d d d f . .
        . f a c c c c c c c c a b f . .
        . f d c c c c c c c c c d d f .
        f d d f f f b b f f f f d d f .
        . f f a a a a a a a a a b f . .
        . . . f f f f . f f f f f . . .
        `)
    mainCrouchRight = animation.createAnimation(ActionKind.CrouchRight, 100)
    animation.attachAnimation(hero, mainCrouchRight)
    mainCrouchRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . f f f f f f f f f f . . .
        . . f e e e e e e e e e e f . .
        . f e e e e e e e e e e e e f .
        . f d e e d d d d d d d d d f .
        . f d e d d f d d d d f d d f .
        . f e d d d f d d d d f d d f .
        . . f d d d f d d d d f d d f .
        . . f d d d d d d d d d d d f .
        . . f b a c c c c c c c c a f .
        . f d d c c c c c c c c c d f .
        . f d d f f f f b b f f f d d f
        . . f b a a a a a a a a a f f .
        . . . f f f f f . f f f f . . .
        `)
}
function clearGame () {
    for (let value of sprites.allOfKind(SpriteKind.Bumper)) {
        value.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.Coin)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Goal)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Flier)) {
        value4.destroy()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flier, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.say("Ow!", invincibilityPeriod * 1.5)
    music.powerDown.play()
    pause(invincibilityPeriod * 1.5)
})
function createEnemies () {
    // enemy that moves back and forth
    for (let value5 of tiles.getTilesByType(myTiles.tile4)) {
        bumper = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . f f f f f f . . . . . .
            . . . f 7 2 7 7 7 2 f . . . . .
            . . f 7 7 7 2 7 2 7 7 f . . . .
            . . f 7 7 7 7 7 7 7 7 7 f . . .
            . f 7 7 7 2 7 7 7 2 7 7 f . . .
            . f 7 7 7 2 7 7 7 2 7 7 7 f . .
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f .
            . f 7 7 7 7 2 2 2 7 7 7 7 7 f .
            . . f 7 7 2 2 7 2 2 7 7 7 7 f .
            . . f 7 7 2 7 7 7 2 2 7 7 7 f .
            . . . f 7 7 7 7 7 7 7 7 7 7 f .
            . . . . f f 7 7 7 7 7 7 7 f . .
            . . . . . . f f f f f f f . . .
            . . . . . . . . . . . . . . . .
            `, SpriteKind.Bumper)
        tiles.placeOnTile(bumper, value5)
        tiles.setTileAt(value5, myTiles.tile0)
        bumper.ay = gravity
        if (Math.percentChance(50)) {
            bumper.vx = Math.randomRange(30, 60)
        } else {
            bumper.vx = Math.randomRange(-60, -30)
        }
    }
    // enemy that flies at player
    for (let value6 of tiles.getTilesByType(myTiles.tile7)) {
        flier = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . f f f f f f f . . . .
            . . . . f 4 4 4 4 4 4 4 f . . .
            . . . f 4 5 5 4 4 4 5 5 4 f . .
            . f . f 4 4 4 5 4 5 4 4 4 f . f
            . f f 4 4 4 4 4 4 4 4 4 4 4 f f
            . f 4 4 4 4 4 5 4 5 4 4 4 4 4 f
            . f 4 4 4 4 4 5 4 5 4 4 4 4 4 f
            . f f 4 4 4 4 4 4 4 4 4 4 4 f f
            . . . f 4 4 5 5 5 5 5 4 4 f . .
            . . . . f 4 5 4 4 4 5 4 f . . .
            . . . . . f f f f f f f . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            `, SpriteKind.Flier)
        tiles.placeOnTile(flier, value6)
        tiles.setTileAt(value6, myTiles.tile0)
        animation.attachAnimation(flier, flierFlying)
        animation.attachAnimation(flier, flierIdle)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(hero.isHittingTile(CollisionDirection.Bottom))) {
        hero.vy += 80
    }
})
function showInstruction (text: string) {
    game.showLongText(text, DialogLayout.Bottom)
    music.baDing.play()
    info.changeScoreBy(1)
}
function initializeHeroAnimations () {
    animateRun()
    animateIdle()
    animateCrouch()
    animateJumps()
}
function createPlayer (player2: Sprite) {
    player2.ay = gravity
    scene.cameraFollowSprite(player2)
    controller.moveSprite(player2, 100, 0)
    player2.z = 5
    info.setLife(3)
    info.setScore(0)
}
function initializeLevel (level: number) {
    effects.clouds.startScreenEffect()
    playerStartLocation = tiles.getTilesByType(myTiles.tile6)[0]
    tiles.placeOnTile(hero, playerStartLocation)
    tiles.setTileAt(playerStartLocation, myTiles.tile0)
    createEnemies()
    spawnGoals()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    info.changeLifeBy(1)
    currentLevel += 1
    if (hasNextLevel()) {
        game.splash("Next level unlocked!")
        setLevelTileMap(currentLevel)
    } else {
        game.over(true, effects.confetti)
    }
})
function hasNextLevel () {
    return currentLevel != levelCount
}
function spawnGoals () {
    for (let value7 of tiles.getTilesByType(myTiles.tile5)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f 5 5 5 5 f f . . . .
            . . . . f 5 5 5 5 5 5 f . . . .
            . . . f 5 5 5 4 4 5 5 5 f . . .
            . . . f 5 5 5 4 4 5 5 5 f . . .
            . . . f 5 5 5 4 4 5 5 5 f . . .
            . . . f 5 5 5 4 4 5 5 5 f . . .
            . . . . f 5 5 5 5 5 5 f . . . .
            . . . . f f 5 5 5 5 f f . . . .
            . . . . . . f f f f . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            `, SpriteKind.Coin)
        tiles.placeOnTile(coin, value7)
        animation.attachAnimation(coin, coinAnimation)
        animation.setAction(coin, ActionKind.Idle)
        tiles.setTileAt(value7, myTiles.tile0)
    }
}
let heroFacingLeft = false
let coin: Sprite = null
let playerStartLocation: tiles.Location = null
let flier: Sprite = null
let bumper: Sprite = null
let mainCrouchRight: animation.Animation = null
let mainCrouchLeft: animation.Animation = null
let mainJumpRight: animation.Animation = null
let mainJumpLeft: animation.Animation = null
let mainRunRight: animation.Animation = null
let mainRunLeft: animation.Animation = null
let flierIdle: animation.Animation = null
let flierFlying: animation.Animation = null
let mainIdleRight: animation.Animation = null
let mainIdleLeft: animation.Animation = null
let doubleJumpSpeed = 0
let canDoubleJump = false
let coinAnimation: animation.Animation = null
let currentLevel = 0
let levelCount = 0
let gravity = 0
let pixelsToMeters = 0
let invincibilityPeriod = 0
let hero: Sprite = null
hero = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . f f f f f f f f f f . . .
    . . f e e e e e e e e e e f . .
    . f e e e e e e e e e e e e f .
    . f d e e d d d d d d d d d f .
    . f d e d d f d d d d f d d f .
    . f e d d d f d d d d f d d f .
    . . f d d d f d d d d f d d f .
    . . f d d d d d d d d d d d f .
    . . f b a c c c c c c c c a f .
    . . f d d d c c c c c c d d f .
    . . f d d f f f b b f f f d f .
    . . f b a a a a a a a a a f . .
    . . . f b a a f f b a a f . . .
    . . . f b a a f f b a a f . . .
    . . . . f f f . . f f f . . . .
    `, SpriteKind.Player)
// how long to pause between each contact with a
// single enemy
invincibilityPeriod = 600
pixelsToMeters = 30
gravity = 9.81 * pixelsToMeters
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9989998999899989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989998999899989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998999899989998999899989998999899989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989898999898989998989899989998999899989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999989999999899999998999999999999999999999999999999
    8989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989898989
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
`)
initializeAnimations()
createPlayer(hero)
levelCount = 8
currentLevel = 0
setLevelTileMap(currentLevel)
giveIntroduction()
// set up hero animations
game.onUpdate(function () {
    if (hero.vx < 0) {
        heroFacingLeft = true
    } else if (hero.vx > 0) {
        heroFacingLeft = false
    }
    if (hero.isHittingTile(CollisionDirection.Top)) {
        hero.vy = 0
    }
    if (controller.down.isPressed()) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.CrouchLeft)
        } else {
            animation.setAction(hero, ActionKind.CrouchRight)
        }
    } else if (hero.vy < 20 && !(hero.isHittingTile(CollisionDirection.Bottom))) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.JumpingLeft)
        } else {
            animation.setAction(hero, ActionKind.JumpingRight)
        }
    } else if (hero.vx < 0) {
        animation.setAction(hero, ActionKind.RunningLeft)
    } else if (hero.vx > 0) {
        animation.setAction(hero, ActionKind.RunningRight)
    } else {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.IdleLeft)
        } else {
            animation.setAction(hero, ActionKind.IdleRight)
        }
    }
})
// Flier movement
game.onUpdate(function () {
    for (let value8 of sprites.allOfKind(SpriteKind.Flier)) {
        if (Math.abs(value8.x - hero.x) < 60) {
            if (value8.x - hero.x < -5) {
                value8.vx = 25
            } else if (value8.x - hero.x > 5) {
                value8.vx = -25
            }
            if (value8.y - hero.y < -5) {
                value8.vy = 25
            } else if (value8.y - hero.y > 5) {
                value8.vy = -25
            }
            animation.setAction(value8, ActionKind.Flying)
        } else {
            value8.vy = -20
            value8.vx = 0
            animation.setAction(value8, ActionKind.Idle)
        }
    }
})
// Reset double jump when standing on wall
game.onUpdate(function () {
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        canDoubleJump = true
    }
})
// bumper movement
game.onUpdate(function () {
    for (let value9 of sprites.allOfKind(SpriteKind.Bumper)) {
        if (value9.isHittingTile(CollisionDirection.Left)) {
            value9.vx = Math.randomRange(30, 60)
        } else if (value9.isHittingTile(CollisionDirection.Right)) {
            value9.vx = Math.randomRange(-60, -30)
        }
    }
})

```

```package
animation
```
