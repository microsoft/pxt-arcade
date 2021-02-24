# Hot Air Balloon

```blocks
namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const Mountain = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.startEffect(effects.fire)
    balloon.startEffect(effects.fire)
    balloon.ay = -50
    balloon.setImage(balloonInflated)
})
function spawnSomething (roll: number) {
    if (roll <= 2) {
        createSaucer()
    } else if (roll <= 6) {
        createTree()
    } else if (roll <= 24) {
        createCloud()
    } else if (roll <= 40) {
        createBird()
    }
}
function createSaucer () {
    if (Math.percentChance(50)) {
        saucerSpeed = 40
    } else {
        saucerSpeed = -40
    }
    saucer = sprites.createProjectileFromSide(img`
        . . . . . . . . . f f f . . . . . . . . .
        . . . . . . . f f 8 8 8 f f . . . . . . .
        . . . . . . f 8 8 8 8 9 9 8 f . . . . . .
        . . . . . f 8 8 8 8 8 8 9 9 8 f . . . . .
        . . . . f 8 8 8 a 8 a 8 8 9 9 8 f . . . .
        . . . f f 8 8 8 8 8 8 8 8 8 9 8 f f . . .
        . . f d d d d d d d d d d d d d d d f . .
        . f b b b b b b b b b b b b b b b b b f .
        f a 9 b 9 b b 9 b b 9 b b 9 b b 9 b 9 a f
        . f a c c c c c c c c c c c c c c c a f .
        . . f a a c c c c c c c c c c c a a f . .
        . . . f f a a c c c c c c c a a f f . . .
        . . . . . f f f f f f f f f f f . . . . .
        . . . . . f 9 9 9 9 9 9 9 9 9 f . . . . .
        . . . . . . f f f f f f f f f . . . . . .
    `, saucerSpeed, 0)
    animation.runImageAnimation(
    saucer,
    flyingSaucer,
    400,
    true
    )
    saucer.y = randint(10, scene.screenHeight() - 10)
}
function placeMountain (leftPosition: number) {
    lastCreatedMountain = sprites.create(mountains[randint(0, 1)], SpriteKind.Mountain)
    lastCreatedMountain.setFlag(SpriteFlag.Ghost, true)
    lastCreatedMountain.setFlag(SpriteFlag.AutoDestroy, true)
    lastCreatedMountain.bottom = scene.screenHeight()
    lastCreatedMountain.left = leftPosition
    lastCreatedMountain.z = -15
}
function createTree () {
    tree = sprites.createProjectileFromSide(img`
        . . . . . . . c c . . . . . . .
        . . . . c c c 6 5 c 6 6 . . . .
        . . . . c 6 c 5 5 c 7 6 . . . .
        . . . 6 c c 7 5 5 7 c 6 6 . . .
        . . c c 7 7 7 7 7 5 7 7 c 6 . .
        . 6 6 6 c 6 7 7 7 7 6 c c 6 6 .
        c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6
        c c c 6 6 6 c 6 6 6 6 7 7 6 6 6
        . c c 7 6 6 6 6 6 7 7 7 7 c 6 .
        . c 7 7 6 6 7 6 6 7 7 6 7 7 c .
        . c c c c 7 7 6 f 7 7 c c c c .
        . . . . c 7 c f f c 7 c . . . .
        . . . . . 6 f e e e c . . . . .
        . . . . . e e e d e e . . . . .
    `, -10, 0)
    tree.z = -5
    tree.bottom = scene.screenHeight()
    tree.setFlag(SpriteFlag.Ghost, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    sprite.say("ow!", 500)
})
function createCloud () {
    cloudImages = [img`
        . . . . . . . . . . . . . . . . . . 1 1 1 1 . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . .
        . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . 1 1 1 1 1 . . .
        . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 1 1 1 1 1 1 1 1 . .
        . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 .
   `, img`
        . . . 1 1 1 1 . . . 1 1 . . . . . . . .
        . . 1 1 1 1 1 1 . 1 1 1 1 . . . . . . .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . .
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 1 1 . . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . .
   `, img`
        . . . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . .
        . . . . . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . . .
        . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . .
        . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . .
        . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . .
        . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . .
        . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 1 . 1 1 1 1 .
        1 . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . 1 1 . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . .
    `]
    cloud = sprites.createProjectileFromSide(cloudImages[randint(0, cloudImages.length - 1)], -5, 0)
    cloud.z = -10
    cloud.setFlag(SpriteFlag.Ghost, true)
    cloud.y = randint(0, scene.screenHeight() * 0.6)
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    balloon.ay = 50
    effects.clearParticles(balloon)
    balloon.setImage(balloonDeflated)
})
function createBird () {
    if (Math.percentChance(50)) {
        saucerSpeed = 20
        chosenAnimation = birdGoingRight
    } else {
        saucerSpeed = -20
        chosenAnimation = birdGoingLeft
    }
    bird = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . f f f f . . . . . . . . .
        . . f 8 8 8 8 f f f f . f f f .
        . f 8 f 8 8 8 8 8 8 8 f 8 8 8 f
        f 4 5 8 8 8 8 8 8 8 8 8 f f 8 f
        f 5 5 5 8 8 f 8 8 8 8 8 8 8 f .
        . f f f 8 8 8 f 8 8 8 8 8 8 f .
        . . . . f f f f f 8 8 8 f f . .
        . . . . . . . . f f f f . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, saucerSpeed, 0)
    animation.runImageAnimation(
    bird,
    chosenAnimation,
    100,
    true
    )
    bird.y = randint(12, scene.screenHeight() - 10)
}
function createAnimationArrays () {
    flyingSaucer = [img`
        . . . . . . . . . f f f . . . . . . . . .
        . . . . . . . f f 8 8 8 f f . . . . . . .
        . . . . . . f 8 8 8 8 9 9 8 f . . . . . .
        . . . . . f 8 8 8 8 8 8 9 9 8 f . . . . .
        . . . . f 8 8 8 a 8 a 8 8 9 9 8 f . . . .
        . . . f f 8 8 8 8 8 8 8 8 8 9 8 f f . . .
        . . f d d d d d d d d d d d d d d d f . .
        . f b b b b b b b b b b b b b b b b b f .
        f a 9 b 9 b b 9 b b 9 b b 9 b b 9 b 9 a f
        . f a c c c c c c c c c c c c c c c a f .
        . . f a a c c c c c c c c c c c a a f . .
        . . . f f a a c c c c c c c a a f f . . .
        . . . . . f f f f f f f f f f f . . . . .
        . . . . . f 9 9 9 9 9 9 9 9 9 f . . . . .
        . . . . . . f f f f f f f f f . . . . . .
   `, img`
        . . . . . . . . . f f f . . . . . . . . .
        . . . . . . . f f 8 8 8 f f . . . . . . .
        . . . . . . f 8 8 8 8 9 9 8 f . . . . . .
        . . . . . f 8 8 8 8 8 8 9 9 8 f . . . . .
        . . . . f 8 8 8 a 8 a 8 8 9 9 8 f . . . .
        . . . f f 8 8 8 8 8 8 8 8 8 9 8 f f . . .
        . . f d d d d d d d d d d d d d d d f . .
        . f b b b b b b b b b b b b b b b b b f .
        f a b 4 b 4 4 b 4 4 b 4 4 b 4 4 b 4 b a f
        . f a c c c c c c c c c c c c c c c a f .
        . . f a a c c c c c c c c c c c a a f . .
        . . . f f a a c c c c c c c a a f f . . .
        . . . . . f f f f f f f f f f f . . . . .
        . . . . . f 9 9 9 9 9 9 9 9 9 f . . . . .
        . . . . . . f f f f f f f f f . . . . . .
    `]
    birdGoingLeft = [img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . f f f f . . . . . . . . .
        . . f 8 8 8 8 f f f f . f f f .
        . f 8 f 8 8 8 8 8 8 8 f 8 8 8 f
        f 4 5 8 8 8 8 8 8 8 8 8 f f 8 f
        f 5 5 5 8 8 f 8 8 8 8 8 8 8 f .
        . f f f 8 8 8 f 8 8 8 8 8 8 f .
        . . . . f f f f f 8 8 8 f f . .
        . . . . . . . . f f f f . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . .
        . . . f f f f . . . . . . . . . .
        . . f 8 8 8 8 f f f f . f f f . .
        . f 8 f 8 8 8 8 8 f 8 f 8 8 8 f .
        f 4 5 8 8 8 8 8 8 8 f 8 8 8 8 f .
        f 5 5 5 8 8 f 8 8 8 8 f 8 8 f . .
        . f f f 8 8 8 f 8 8 8 8 f 8 f . .
        . . . . f f a f f 8 8 8 8 f f . .
        . . . . . . . . f 8 8 8 f . . . .
        . . . . . . . . . f 8 8 f . . . .
        . . . . . . . . . . f f . . . . .
   `, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . f f f f . . . . . . . . .
        . . f 8 8 8 8 f f f f . f f f .
        . f 8 f 8 8 8 8 8 8 8 f 8 8 8 f
        f 4 5 8 8 8 8 8 8 8 8 8 f f 8 f
        f 5 5 5 8 8 f 8 8 8 8 8 8 8 f .
        . f f f 8 8 8 f 8 8 8 8 8 8 f .
        . . . . f f f f f 8 8 8 f f . .
        . . . . . . . . f f f f . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . f f . . .
        . . . . . . . . . . f 8 8 f . .
        . . . f f f f . f f 8 8 8 f . .
        . . f 8 8 8 8 f f 8 8 8 f f f .
        . f 8 f 8 8 8 8 8 8 8 f 8 8 8 f
        f 4 5 8 8 8 8 8 8 8 f 8 f f 8 f
        f 5 5 5 8 8 8 8 8 f 8 8 8 8 f .
        . f f f 8 8 8 8 8 8 8 8 8 8 f .
        . . . . f f f f f 8 8 8 f f . .
        . . . . . . . . f f f f . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `]
    birdGoingRight = [img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . f f f f . . .
        . f f f . f f f f 8 8 8 8 f . .
        f 8 8 8 f 8 8 8 8 8 8 8 f 8 f .
        f 8 f f 8 8 8 8 8 8 8 8 8 5 4 f
        . f 8 8 8 8 8 8 8 f 8 8 5 5 5 f
        . f 8 8 8 8 8 8 f 8 8 8 f f f .
        . . f f 8 8 8 f f f f f . . . .
        . . . . f f f f . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
   `, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . f f f f . . .
        . f f f . f f f f 8 8 8 8 f . .
        f 8 8 8 f 8 f 8 8 8 8 8 f 8 f .
        f 8 8 8 8 f 8 8 8 8 8 8 8 5 4 f
        . f 8 8 f 8 8 8 8 f 8 8 5 5 5 f
        . f 8 f 8 8 8 8 f 8 8 8 f f f .
        . . f f 8 8 8 8 f f f f . . . .
        . . . f 8 8 8 f . . . . . . . .
        . . . f 8 8 f . . . . . . . . .
        . . . . f f . . . . . . . . . .
   `, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . f f f f . . .
        . f f f . f f f f 8 8 8 8 f . .
        f 8 8 8 f 8 8 8 8 8 8 8 f 8 f .
        f 8 f f 8 8 8 8 8 8 8 8 8 5 4 f
        . f 8 8 8 8 8 8 8 f 8 8 5 5 5 f
        . f 8 8 8 8 8 8 f 8 8 8 f f f .
        . . f f 8 8 8 f f f f f . . . .
        . . . . f f f f . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
   `, img`
        . . . f f . . . . . . . . . . .
        . . f 8 8 f . . . . . . . . . .
        . . f 8 8 8 f f . f f f f . . .
        . f f f 8 8 8 f f 8 8 8 8 f . .
        f 8 8 8 f 8 8 8 8 8 8 8 f 8 f .
        f 8 f f 8 f 8 8 8 8 8 8 8 5 4 f
        . f 8 8 8 8 f 8 8 8 8 8 5 5 5 f
        . f 8 8 8 8 8 8 8 8 8 8 f f f .
        . . f f 8 8 8 f f f f f . . . .
        . . . . f f f f . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `]
}
let nearGroundCount = 0
let bird: Sprite = null
let birdGoingLeft: Image[] = []
let birdGoingRight: Image[] = []
let chosenAnimation: Image[] = []
let cloud: Sprite = null
let cloudImages: Image[] = []
let tree: Sprite = null
let flyingSaucer: Image[] = []
let saucer: Sprite = null
let saucerSpeed = 0
let lastCreatedMountain: Sprite = null
let mountains: Image[] = []
let balloon: Sprite = null
let balloonInflated: Image = null
let balloonDeflated: Image = null
balloonDeflated = img`
    . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . .
    . . . . . . . f f f f f . . . . . . .
    . . . . . f f 2 2 2 2 2 f f . . . . .
    . . . . f 2 2 2 2 2 2 4 4 2 f . . . .
    . . . f 2 2 2 2 2 2 2 2 4 4 2 f . . .
    . . f 2 2 2 2 2 2 2 2 2 2 4 4 2 f . .
    . f 2 2 2 3 2 2 2 2 3 2 2 2 4 2 2 f .
    . f 2 2 2 3 2 2 2 2 3 2 2 2 2 2 2 f .
    . f 2 2 2 3 2 2 2 2 3 2 2 2 2 2 2 f .
    . f 2 2 2 2 3 2 2 2 2 3 2 2 2 2 2 f .
    . f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f .
    . . f 2 2 2 2 3 2 2 2 3 2 2 2 2 f . .
    . . f 2 2 2 2 2 3 3 3 2 2 2 2 2 f . .
    . . . f f 2 2 2 2 2 2 2 2 2 f f . . .
    . . . . f f f f 2 2 2 f f f f . . . .
    . . . . . f . f f f f f . f . . . . .
    . . . . . f . . . . . . . f . . . . .
    . . . . . f . . . . . . . f . . . . .
    . . . . . . f . . . . . f . . . . . .
    . . . . . . f . . . . . f . . . . . .
    . . . . . . . f . . . f . . . . . . .
    . . . . . . . f . 2 . f . . . . . . .
    . . . . . . f f f f f f f . . . . . .
    . . . . . f c c c c c c c f . . . . .
    . . . . . f c b b b b b c f . . . . .
    . . . . . f c a b b b a c f . . . . .
    . . . . . f c b a a a b c f . . . . .
    . . . . . f c b b b b b c f . . . . .
    . . . . . f c a b b b a c f . . . . .
    . . . . . f c c a a a c c f . . . . .
    . . . . . . f c c c c c f . . . . . .
    . . . . . . . f f f f f . . . . . . .
`
balloonInflated = img`
    . . . . . . . . . . . . . . . . . . .
    . . . . . . f f f f f f f . . . . . .
    . . . . f f 2 2 2 2 2 2 2 f f . . . .
    . . . f 2 2 2 2 2 2 2 2 4 4 2 f . . .
    . . f 2 2 2 2 2 2 2 2 2 2 4 4 2 f . .
    . f 2 2 2 2 2 2 2 2 2 2 2 2 4 4 2 f .
    f 2 2 2 3 2 2 2 2 2 2 3 2 2 2 4 2 2 f
    f 2 2 2 3 2 2 2 2 2 2 3 2 2 2 2 2 2 f
    f 2 2 2 3 2 2 2 2 2 2 3 2 2 2 2 2 2 f
    f 2 2 2 2 3 2 2 2 2 2 2 3 2 2 2 2 2 f
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f
    . f 2 2 2 2 3 2 2 2 2 2 3 2 2 2 2 f .
    . f 2 2 2 2 2 3 3 3 3 3 2 2 2 2 2 f .
    . . f f 2 2 2 2 2 2 2 2 2 2 2 f f . .
    . . . . f f f f 2 2 2 f f f f . . . .
    . . . . . f . f f f f f . f . . . . .
    . . . . . f . . . . . . . f . . . . .
    . . . . . f . . . . . . . f . . . . .
    . . . . . . f . . . . . f . . . . . .
    . . . . . . f . . . . . f . . . . . .
    . . . . . . . f . . . f . . . . . . .
    . . . . . . . f . 2 . f . . . . . . .
    . . . . . . f f f f f f f . . . . . .
    . . . . . f c c c c c c c f . . . . .
    . . . . . f c b b b b b c f . . . . .
    . . . . . f c a b b b a c f . . . . .
    . . . . . f c b a a a b c f . . . . .
    . . . . . f c b b b b b c f . . . . .
    . . . . . f c a b b b a c f . . . . .
    . . . . . f c c a a a c c f . . . . .
    . . . . . . f c c c c c f . . . . . .
    . . . . . . . f f f f f . . . . . . .
`
music.setVolume(0)
balloon = sprites.create(balloonDeflated, SpriteKind.Player)
scene.setBackgroundColor(9)
balloon.ay = 35
balloon.setStayInScreen(true)
balloon.z = 100
info.setScore(0)
info.setLife(3)
createAnimationArrays()
mountains = [img`
    . . . . . . . . . . . . . . . . . . . . . . 3 3 3 3 3 3 . . . . . . . . . . . . . . . . . . . . . . . . 3 3 3 3 . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . .
    . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . .
    . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b 3 3 3 3 3 3 3 3 . . .
    . . . . . . 3 3 3 3 3 3 3 3 3 b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b 3 3 3 3 3 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b 3 3 3 3 3 3 3 3 3 . .
    . . . . 3 3 3 3 3 3 3 3 3 3 3 3 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b 3 3 3 b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b 3 3 3 3 3 3 3 3 3 .
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b 3 3 b 3 3 3 3 3 3 3 3 3 3 b 3 3 b b b b b b b b 3 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b 3 b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b 3 3 b 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b 3 3 3 3 b 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 b 3 3 b b b b b b 3 3 b 3 b 3 b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 b 3 3 b b b b b b b b b b b b b b b b 3 3 b 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 b 3 3 3 3 3 3 b b b b b b b b b b b c b b b b b b b b b b 3 b b 3
    3 3 3 3 3 3 b 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 b b b b b b b b b c b b b c c c b b b b b b b b b 3 b 3 3
    3 3 3 b 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b c b b c c c c c b c c b b b b b b b b b b 3 3
    3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c b c c b b b b b b b b b b
    3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c b c c b b b b b b c b
    c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b c c c c c c c c c c c c b c c c c c c c c c c c c c b c b b c c
    c c c b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b c c c b c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c b c c c c c
    c c c c c b b c b b b b b b b b b b b b b b b b b b b b b b b b b c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b c c c c
    c c c c c c c c b c b c b b b b b b b b b b b b b b b b b b c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c b b c b b b b c b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c b c b c b b b b b b c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c b c c c c c c c c c c c c c c c c c b c b b c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c b c c c b c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
`, img`
    . . . . . . . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . 3 3 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . 3 3 3 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . 3 3 3 3 3 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . . . . . 3 3 3 3 3 . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . .
    . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b 3 3 3 . . . . . . . . . . . . . .
    . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b 3 3 3 3 . . . . . . . . . . 3 .
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b 3 3 3 3 3 . . . . . . 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b 3 b b b 3 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b 3 3 3 3 3 3 3 3 3 b 3 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 3 3 3 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b 3 3 3 3 3 3 3 3 b b 3 3 3 3 3
    3 3 3 3 3 3 3 3 3 b 3 3 b 3 3 b 3 3 b 3 3 3 3 3 3 b 3 3 b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 b b b 3 3 3 3
    3 3 3 3 3 3 3 3 b b b b b b b b b b b b 3 b 3 3 3 b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 b b b b 3 3 b 3
    3 3 3 3 b 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b 3 b 3 b b b b b b b b b
    c 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b c b c b b b b b b b b b 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c
    c c c b b b b b b b b b b b b b b b b b b b b b b b b b c b b c c c c b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b b b b b b b b c b b c c
    c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b c c b c b c b b b b b b b b b b b c b b c c b b b b b b b b b b b b b b b b b b b c b c c c
    c c c c c c b c b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c b b b b b b b c b b c c c c c c c b c b b b b b b b b b b b b b c b c c c c c
    c c c c c c c c b c b b b b b c c b b b b b b c c c c c c c c c c c c c c c c c c c c c b c b c c c c c c c c c c c c c b b c b b b b b b b b b b c c c c c c c
    c b c c c c c c c c b b c b c c c c b b c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c b c c
    c c c c c c c c c c c c c b b c c b b b c c c c c b c b c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c b c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c b c b c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c b c b c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c
    c c c c c c c c b c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
`]
let sun = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . .
    4 4 4 4 4 . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . .
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 .
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`, SpriteKind.Background)
sun.bottom = scene.screenHeight()
sun.setFlag(SpriteFlag.Ghost, true)
sun.z = -20
placeMountain(0)
placeMountain(lastCreatedMountain.right)
game.setDialogFrame(img`
    . . . c c . . . . . . . . . . . . . . . . . . . . . . c c . . . .
    . . c 5 5 c . . b b b b . . . b b b b b . . . . . . c 5 5 c . . .
    . c b 5 5 b c b d d d b b b b b d d d b b b b b b c b 5 5 b c . .
    b 5 5 5 5 5 5 b b d d d b 1 1 1 b d d d b 1 1 d b 5 5 5 5 5 5 b .
    b b 5 5 5 5 b b d b d b 1 1 1 1 1 b d b 1 1 1 1 b b 5 5 5 5 b b .
    c b 5 5 5 5 b c d d d 1 1 1 1 1 d d d 1 1 1 1 1 c b 5 5 5 5 b c .
    . c 5 b b 5 c 1 1 1 1 d 1 1 1 d 1 1 1 d 1 1 1 d d c 5 b b 5 c . .
    . c b b b b c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c b b b b c . .
    . . b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 1 1 1 b b .
    . . b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 1 b d b .
    . . b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d b d d b .
    . b b d b 1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d b .
    . b d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 1 b d b b .
    . b d d b d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b . .
    . b d b 1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b . .
    . b b 1 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b . .
    . . b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 1 1 1 b b .
    . . b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 1 b d b .
    . . b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d b d d b .
    . b b d b 1 d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d b .
    . b d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 1 b d b b .
    . b d d b d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b . .
    . b d b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b . .
    . b b b d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b . .
    . . b c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d c c d b . .
    . . c 5 5 c 1 1 1 d 1 1 1 d 1 1 1 d 1 1 1 d 1 1 1 1 c 5 5 c b . .
    . c b 5 5 b c d d 1 1 1 1 1 d d d 1 1 1 1 1 d d d c b 5 5 b c . .
    b 5 5 5 5 5 5 b 1 1 1 1 1 b d b 1 1 1 1 1 b d b b 5 5 5 5 5 5 b .
    b b 5 5 5 5 b b b 1 1 1 b d d d b 1 1 1 b d d d b b 5 5 5 5 b b .
    c b 5 5 5 5 b c d b b b b b d d d b b b b b d d c b 5 5 5 5 b c .
    . c 5 b b 5 c . b b . . . b b b b b . . . b b b b c 5 b b 5 c . .
    . c b b b b c . . . . . . . . . . . . . . . . . . c b b b b c . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`)
game.showLongText("Stay in the air as long as you can! Hold any   button to turn on the burner.", DialogLayout.Center)
for (let index = 0; index <= 1; index++) {
    spawnSomething(randint(0, 40))
}
game.onUpdateInterval(200, function () {
    // changing position explicitly to avoid fractions of
    // movement / clipping
    for (let value of sprites.allOfKind(SpriteKind.Mountain)) {
        value.x += -1
    }
    if (lastCreatedMountain.right < scene.screenWidth()) {
        placeMountain(lastCreatedMountain.right)
    }
})
game.onUpdateInterval(750, function () {
    spawnSomething(randint(0, 100))
})
game.onUpdate(function () {
    info.changeScoreBy(1)
})
game.onUpdate(function () {
    balloon.vy = Math.constrain(balloon.vy, -25, 25)
})
forever(function () {
    nearGroundCount = -1
    while (balloon.bottom >= scene.screenHeight() - 1) {
        balloon.say("pull up!", 100)
        nearGroundCount += 1
        if (nearGroundCount > 25) {
            info.changeLifeBy(-1)
            nearGroundCount = -20
        }
        pause(25)
    }
})
```

```package
animation
```
