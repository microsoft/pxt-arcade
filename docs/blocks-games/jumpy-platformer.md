# Jumpy Platformer

```blocks
namespace SpriteKind {
    export const Bumper = SpriteKind.create();
    export const Goal = SpriteKind.create();
    export const Coin = SpriteKind.create();
    export const Flier = SpriteKind.create();
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
    Flying
}

let hero = sprites.create(img`
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
`, SpriteKind.Player);
let coinAnimation: animation.Animation = null;
let flierFlying: animation.Animation = null;
let flierIdle: animation.Animation = null;
// how long to pause between each contact with a
// single enemy
let invincibilityPeriod = 600;
let pixelsToMeters = 30;
let canDoubleJump = false;
let gravity = 9.81 * pixelsToMeters;

let currentLevel = 0;
let heroFacingLeft = false;
let levelMaps = [
    img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . 5 . . . . . . . . . . . . . . . . . . . . . . .
        . . . . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . 1 . . . . . . . . . 5 . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . 7 . . 5 . 7 . . . . . . . . . . . . . . . . . 7
        . . . . 7 . . . 7 . 2 . . 7 . . . 2 7 . 2 . . 2 . 7 . e . . . 7
        f f f f 7 f f f 7 f f f f 7 f f f f 7 f f f f f f 7 f f f f f 7
    `,
    img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . 7 5 7 . . . . . . . . . .
        . . . . . . . 7 7 . 7 . . . . . . 7 . 7 5 7 . . . . . . . . . .
        . . . . . . 7 7 7 . 7 . . . . 7 . 7 . 7 5 7 . . . . . . . . . .
        7 . . . . 7 7 7 7 . 7 . . 7 . 7 5 7 5 7 5 7 . . . 5 5 5 5 5 5 5
        7 1 . . . . . . 2 . 7 . . 7 . 2 . . . 2 5 7 . . . . . . . . e .
        7 f f f f f f f f f 7 f f 7 f f f f f f f 7 f f f f f f f f f f
    `,
    img`
        . . . . . . . . . . . . . . . . . . . 3 . . . . . . . . 3 3 3 3
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . 7 7 7 7 7 7 . . . . . . . . . . . . . . . .
        . . . . . . . . 7 . 7 3 5 5 5 . . . . . . . . . . . . . . 5 5 5
        . . . . . 7 . . 7 . 7 . 5 5 5 . . . . . . . . . . . . . . 5 5 5
        . 1 . 7 . 7 . 2 2 . 7 . 5 5 5 . . . . . . . . . e . . . . 5 5 5
        f f f 7 f 7 f f f f 7 f f f f f f f f f f f f f f f f f f f f f
    `,
    img`
        . . . . . . . . . . . 7 . . . 3 . . . 3 . . 3 . 3 . . . . . . .
        . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . .
        . . . . . . . 7 . . . 7 . . . . . . . . . . . . . . . . . . . .
        . . . . . 7 . 7 . . . . . . . . . . . . . . . . . . . . . . . .
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 .
        . . . 7 . . 5 . . 5 . 5 . . 5 . 5 . . 5 . 5 . . . 5 . . . 5 . .
        . 1 7 7 e . . 2 . 2 . . . 2 . . . . . 2 . . . 2 . . . 2 . . . 7
        f f f 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f 7
    `,
    img`
        . 3 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . 5 5 5 . . . . .
        . . . . . 5 . 5 . . . . . 5 5 . . 7 7 7 7 . 7 . . . . . . . . .
        . . . . . . . . . 5 5 5 . . . 5 7 5 5 5 5 . 7 . . . . . . . . .
        . 1 . 7 2 2 2 2 2 2 7 2 2 2 2 2 7 2 2 2 2 2 7 . . . . . . e . .
        f f f 7 f f f f f f 7 f f f f f 7 f f f f f 7 f f f f f f f f f
    `,
    img`
        . 3 3 . . . . . . . . . . . . . . . . . 3 3 . . . . . . . . . .
        . . . . . . . . . . . . 5 5 . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . 5 7 . . . . . . . . . . . . . . . . . .
        . . . . . . . . . 5 5 . 7 7 . . . . . . . . 5 5 5 . . . . . . .
        . . . . . 5 . 5 . 7 7 . . 5 5 . . 7 7 7 7 . . . . . . . . . . 7
        7 . . . . 7 . 7 . 5 5 5 . . . 5 7 . . . . . . . . . . . . . . 7
        7 1 . 7 . 7 5 7 2 . 7 2 . . . 7 7 . 2 . . 2 . . 2 . . . . e . 7
        7 f f 7 f 7 f 7 f f 7 f f f f 7 7 f f f f f f f f f f f f f f 7
    `
];

initializeAnimations();
initializeScene();
createPlayer(hero);
initializeLevel(currentLevel);
giveIntroduction();

function showInstruction(text: string) {
    game.showLongText(text, DialogLayout.Bottom);
    music.baDing.play();
    info.changeScoreBy(1);
}

function giveIntroduction() {
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
    `);
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
    `);

    showInstruction("Move with the left and right buttons.");
    showInstruction("Jump with the up or A button.");
    showInstruction("Double jump by pressing jump again.");
}

function initializeAnimations() {
    initializeHeroAnimations();
    initializeCoinAnimation();
    initializeFlierAnimations();
}

function initializeHeroAnimations() {
    animateRun();
    animateIdle();
    animateCrouch();
    animateJumps();
}

function animateRun() {
    let mainRunLeft = animation.createAnimation(ActionKind.RunningLeft, 100);
    animation.attachAnimation(hero, mainRunLeft);
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
    `);
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
    `);
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
    `);
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
    `);

    let mainRunRight = animation.createAnimation(ActionKind.RunningRight, 100);
    animation.attachAnimation(hero, mainRunRight);
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
    `);
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
    `);
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
    `);
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
    `);
}

function animateIdle() {
    let mainIdleLeft = animation.createAnimation(ActionKind.IdleLeft, 100);
    animation.attachAnimation(hero, mainIdleLeft);
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
    `);

    let mainIdleRight = animation.createAnimation(ActionKind.IdleRight, 100);
    animation.attachAnimation(hero, mainIdleRight);
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
    `);
}

function animateJumps() {
    // Because there isn't currently an easy way to say "play this animation a single time
    // and stop at the end", this just adds a bunch of the same frame at the end to accomplish
    // the same behavior
    let mainJumpLeft = animation.createAnimation(ActionKind.JumpingLeft, 100);
    animation.attachAnimation(hero, mainJumpLeft);
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
    `);
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
    `);
    for (let i = 0; i < 30; i++) {
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
        `);
    }

    let mainJumpRight = animation.createAnimation(ActionKind.JumpingRight, 100);
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
    `);
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
    `);
    for (let i = 0; i < 30; i++) {
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
        `);
    }
}

function animateCrouch() {
    let mainCrouchLeft = animation.createAnimation(ActionKind.CrouchLeft, 100);
    animation.attachAnimation(hero, mainCrouchLeft);
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
    `);

    let mainCrouchRight = animation.createAnimation(ActionKind.CrouchRight, 100);
    animation.attachAnimation(hero, mainCrouchRight);
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
    `);
}

function initializeCoinAnimation() {
    coinAnimation = animation.createAnimation(ActionKind.Idle, 200);
    coinAnimation.addAnimationFrame(img`
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 F F F F 0 0 0 0 0 0
    	0 0 0 0 F F 5 5 5 5 F F 0 0 0 0
    	0 0 0 0 F 5 5 5 5 5 5 F 0 0 0 0
    	0 0 0 F 5 5 5 4 4 5 5 5 F 0 0 0
    	0 0 0 F 5 5 5 4 4 5 5 5 F 0 0 0
    	0 0 0 F 5 5 5 4 4 5 5 5 F 0 0 0
    	0 0 0 F 5 5 5 4 4 5 5 5 F 0 0 0
    	0 0 0 0 F 5 5 5 5 5 5 F 0 0 0 0
    	0 0 0 0 F F 5 5 5 5 F F 0 0 0 0
    	0 0 0 0 0 0 F F F F 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    `);
    coinAnimation.addAnimationFrame(img`
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 F F F F F F 0 0 0 0 0 0
    	0 0 0 F F 5 F 5 5 5 F 0 0 0 0 0
    	0 0 0 F 5 F 5 5 5 5 5 F 0 0 0 0
    	0 0 F 5 F 5 5 5 4 5 5 F 0 0 0 0
    	0 0 F 5 F 5 5 5 4 4 5 5 F 0 0 0
    	0 0 F 5 F 5 5 5 4 4 5 5 F 0 0 0
    	0 0 F 5 F 5 5 5 4 5 5 F 0 0 0 0
    	0 0 0 F 5 F 5 5 5 5 5 F 0 0 0 0
    	0 0 0 0 F 5 F 5 5 5 F 0 0 0 0 0
    	0 0 0 0 F F F F F F 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    `);
    coinAnimation.addAnimationFrame(img`
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 F F F F F 0 0 0 0 0 0
    	0 0 0 0 F F 5 F 5 F F 0 0 0 0 0
    	0 0 0 F F 5 F 5 5 5 F 0 0 0 0 0
    	0 0 0 F 5 F 5 5 5 5 F F 0 0 0 0
    	0 0 0 F 5 F 5 5 4 5 5 F 0 0 0 0
    	0 0 0 F 5 F 5 5 4 5 5 F 0 0 0 0
    	0 0 0 F 5 F 5 5 5 5 F F 0 0 0 0
    	0 0 0 F F 5 F 5 5 5 F 0 0 0 0 0
    	0 0 0 0 F F 5 F 5 F F 0 0 0 0 0
    	0 0 0 0 0 F F F F F 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    `);
    coinAnimation.addAnimationFrame(img`
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 F F F F 0 0 0 0 0 0
    	0 0 0 0 0 F F F F F 0 0 0 0 0 0
    	0 0 0 0 0 F 5 F 5 F F 0 0 0 0 0
    	0 0 0 0 0 F 5 F 5 5 F 0 0 0 0 0
    	0 0 0 0 0 F 5 F 5 5 F 0 0 0 0 0
    	0 0 0 0 0 F 5 F 5 5 F 0 0 0 0 0
    	0 0 0 0 0 F 5 F 5 5 F 0 0 0 0 0
    	0 0 0 0 0 F 5 F 5 F F 0 0 0 0 0
    	0 0 0 0 0 F F F F F 0 0 0 0 0 0
    	0 0 0 0 0 0 F F F F 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    `);
    coinAnimation.addAnimationFrame(img`
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 F F F F 0 0 0 0 0 0
    	0 0 0 0 0 0 F F F F F 0 0 0 0 0
    	0 0 0 0 0 F F 5 F 5 F 0 0 0 0 0
    	0 0 0 0 0 F 5 5 F 5 F 0 0 0 0 0
    	0 0 0 0 0 F 5 5 F 5 F 0 0 0 0 0
    	0 0 0 0 0 F 5 5 F 5 F 0 0 0 0 0
    	0 0 0 0 0 F 5 5 F 5 F 0 0 0 0 0
    	0 0 0 0 0 F F 5 F 5 F 0 0 0 0 0
    	0 0 0 0 0 0 F F F F F 0 0 0 0 0
    	0 0 0 0 0 0 F F F F 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    `);
    coinAnimation.addAnimationFrame(img`
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 F F F F F 0 0 0 0 0
    	0 0 0 0 0 F F 5 F 5 F F 0 0 0 0
    	0 0 0 0 0 F 5 5 5 F 5 F F 0 0 0
    	0 0 0 0 F F 5 5 5 5 F 5 F 0 0 0
    	0 0 0 0 F 5 5 4 5 5 F 5 F 0 0 0
    	0 0 0 0 F 5 5 4 5 5 F 5 F 0 0 0
    	0 0 0 0 F F 5 5 5 5 F 5 F 0 0 0
    	0 0 0 0 0 F 5 5 5 F 5 F F 0 0 0
    	0 0 0 0 0 F F 5 F 5 F F 0 0 0 0
    	0 0 0 0 0 0 F F F F F 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    `);
    coinAnimation.addAnimationFrame(img`
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 F F F F F F 0 0 0 0
    	0 0 0 0 0 F 5 5 5 F 5 F F 0 0 0
    	0 0 0 0 F 5 5 5 5 5 F 5 F 0 0 0
    	0 0 0 0 F 5 5 4 5 5 5 F 5 F 0 0
    	0 0 0 F 5 5 4 4 5 5 5 F 5 F 0 0
    	0 0 0 F 5 5 4 4 5 5 5 F 5 F 0 0
    	0 0 0 0 F 5 5 4 5 5 5 F 5 F 0 0
    	0 0 0 0 F 5 5 5 5 5 F 5 F 0 0 0
    	0 0 0 0 0 F 5 5 5 F 5 F 0 0 0 0
    	0 0 0 0 0 0 F F F F F F 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    	0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    `);
}

function initializeFlierAnimations() {
    flierFlying = animation.createAnimation(ActionKind.Flying, 100);
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
    `);
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
    `);
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
    `);
    flierIdle = animation.createAnimation(ActionKind.Idle, 100);
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
    `);
}

// set up hero animations
game.onUpdate(function () {
    if (hero.vx < 0) {
        heroFacingLeft = true;
    } else if (hero.vx > 0) {
        heroFacingLeft = false;
    }

    if (hero.isHittingTile(CollisionDirection.Top)) {
        hero.vy = 0;
    }

    if (controller.down.isPressed()) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.CrouchLeft);
        } else {
            animation.setAction(hero, ActionKind.CrouchRight);
        }
    } else if (hero.vy < 20 && !hero.isHittingTile(CollisionDirection.Bottom)) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.JumpingLeft);
        } else {
            animation.setAction(hero, ActionKind.JumpingRight);
        }
    } else if (hero.vx < 0) {
        animation.setAction(hero, ActionKind.RunningLeft);
    } else if (hero.vx > 0) {
        animation.setAction(hero, ActionKind.RunningRight);
    } else {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.IdleLeft);
        } else {
            animation.setAction(hero, ActionKind.IdleRight);
        }
    }
});

sprites.onOverlap(SpriteKind.Player, SpriteKind.Bumper, function (sprite, otherSprite) {
    if ((sprite.vy > 0 && !sprite.isHittingTile(CollisionDirection.Bottom)) || sprite.y < otherSprite.top) {
        otherSprite.destroy(effects.ashes, 250);
        otherSprite.vy = -50;
        sprite.vy = -2 * pixelsToMeters;
        info.changeScoreBy(1);
        music.powerUp.play();
    } else {
        info.changeLifeBy(-1);
        sprite.say("Ow!", invincibilityPeriod);
        music.powerDown.play();
    }
    pause(invincibilityPeriod);
});

sprites.onOverlap(SpriteKind.Player, SpriteKind.Flier, function (sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1);
    sprite.say("Ow!", invincibilityPeriod * 1.5);
    music.powerDown.play();
    pause(invincibilityPeriod * 1.5);
});

function createEnemies() {
    // enemy that moves back and forth
    for (let value of scene.getTilesByType(2)) {
        let bumper = sprites.create(img`
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
        `, SpriteKind.Bumper);
        value.place(bumper);
        bumper.ay = gravity;
        if (Math.percentChance(50)) {
            bumper.vx = randint(30, 60);
        } else {
            bumper.vx = randint(-60, -30);
        }
    }

    // enemy that flies at player
    for (let value of scene.getTilesByType(3)) {
        let flier = sprites.create(img`
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
        `, SpriteKind.Flier);
        value.place(flier);
        animation.attachAnimation(flier, flierFlying);
        animation.attachAnimation(flier, flierIdle);
    }
}

function createPlayer(player: Sprite) {
    player.ay = gravity;
    scene.cameraFollowSprite(player);
    controller.moveSprite(player, 100, 0);
    player.z = 5;
    info.setLife(3);
    info.setScore(0);
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal, function (sprite, otherSprite) {
    info.changeLifeBy(1);
    currentLevel += 1;
    if (currentLevel < levelMaps.length) {
        game.splash("Next level unlocked!");
        initializeLevel(currentLevel);
    } else {
        game.over(true, effects.confetti);
    }
});

controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!hero.isHittingTile(CollisionDirection.Bottom)) {
        hero.vy += 80;
    }
});

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    attemptJump();
});

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    attemptJump();
});

function attemptJump() {
    // else if: either fell off a ledge, or double jumping
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        hero.vy = -4 * pixelsToMeters;
    } else if (canDoubleJump) {
        let doubleJumpSpeed = -3 * pixelsToMeters;
        // Good double jump
        if (hero.vy >= -40) {
            doubleJumpSpeed = -4.5 * pixelsToMeters;
            hero.startEffect(effects.trail, 500);
            scene.cameraShake(2, 250);
        }
        hero.vy = doubleJumpSpeed;
        canDoubleJump = false;
    }
}

function initializeLevel(level: number) {
    clearGame();
    scene.setTileMap(levelMaps[level]);
    effects.clouds.startScreenEffect();
    scene.placeOnRandomTile(hero, 1);
    createEnemies();
    spawnGoals();
}

// Uncommented tiles are unused
function initializeScene() {
    scene.setBackgroundImage(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 8 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9 9 9 8 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9
        9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9 8 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    `);
    // player spawn point
    scene.setTile(1, img`
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
    `, false);
    // bumper spawn point
    scene.setTile(2, img`
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
    `, false);
    // flier spawn point
    scene.setTile(3, img`
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
    `, false);
    scene.setTile(4, img`
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
    `, false);
    // coin spawn point
    scene.setTile(5, img`
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
    `, false);
    scene.setTile(6, img`
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
    `, false);
    // rock
    scene.setTile(7, img`
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
    `, true);
    scene.setTile(8, img`
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
    `, false);
    scene.setTile(9, img`
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
    `, false);
    scene.setTile(10, img`
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
    `, false);
    scene.setTile(11, img`
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
    `, false);
    scene.setTile(12, img`
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
    `, false);
    scene.setTile(13, img`
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
    `, false);
    // goal / flag spawn point
    scene.setTile(14, img`
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
    `, false);
    // ground1
    scene.setTile(15, img`
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
    `, true);
}

function spawnGoals() {
    scene.placeOnRandomTile(sprites.create(img`
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
    `, SpriteKind.Goal), 14);
    for (let value of scene.getTilesByType(5)) {
        let coin = sprites.create(img`
            0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
            0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
            0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
            0 0 0 0 0 0 F F F F 0 0 0 0 0 0
            0 0 0 0 F F 5 5 5 5 F F 0 0 0 0
            0 0 0 0 F 5 5 5 5 5 5 F 0 0 0 0
            0 0 0 F 5 5 5 4 4 5 5 5 F 0 0 0
            0 0 0 F 5 5 5 4 4 5 5 5 F 0 0 0
            0 0 0 F 5 5 5 4 4 5 5 5 F 0 0 0
            0 0 0 F 5 5 5 4 4 5 5 5 F 0 0 0
            0 0 0 0 F 5 5 5 5 5 5 F 0 0 0 0
            0 0 0 0 F F 5 5 5 5 F F 0 0 0 0
            0 0 0 0 0 0 F F F F 0 0 0 0 0 0
            0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
            0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
            0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        `, SpriteKind.Coin);
        value.place(coin);
        animation.attachAnimation(coin, coinAnimation);
        animation.setAction(coin, ActionKind.Idle);
    }
}

function clearGame() {
    for (let value of sprites.allOfKind(SpriteKind.Bumper)) {
        value.destroy();
    }
    for (let value of sprites.allOfKind(SpriteKind.Coin)) {
        value.destroy();
    }
    for (let value of sprites.allOfKind(SpriteKind.Goal)) {
        value.destroy();
    }
    for (let value of sprites.allOfKind(SpriteKind.Flier)) {
        value.destroy();
    }
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 250);
    otherSprite.y += -3;
    info.changeScoreBy(3);
    music.baDing.play();
});


// bumper movement
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Bumper)) {
        if (value.isHittingTile(CollisionDirection.Left)) {
            value.vx = randint(30, 60);
        } else if (value.isHittingTile(CollisionDirection.Right)) {
            value.vx = randint(-60, -30);
        }
    }
});

// Flier movement
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Flier)) {
        if (Math.abs(value.x - hero.x) < 60) {
            if (value.x - hero.x < -5) {
                value.vx = 25;
            } else if (value.x - hero.x > 5) {
                value.vx = -25;
            }
            if (value.y - hero.y < -5) {
                value.vy = 25;
            } else if (value.y - hero.y > 5) {
                value.vy = -25;
            }
            animation.setAction(value, ActionKind.Flying);
        } else {
            value.vy = -20;
            value.vx = 0;
            animation.setAction(value, ActionKind.Idle);
        }
    }
});

// Reset double jump when standing on wall
game.onUpdate(function () {
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        canDoubleJump = true;
    }
});
```

```package
animation
color-coded-tilemap
```
