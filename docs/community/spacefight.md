# SpaceFight!

https://makecode.com/_e2LM0JKsiFee

```typescript
enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (attractMode == 1) {
        startGame()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    destroyPlayer1()
    destroyPlayer2()
})
function initialize() {
    createStarfield()
    createStar()
    PLAYER_START_OFFSET_X = 10
    PLAYER_START_OFFSET_Y = 26
    // Maximum length of a game in minutes
    GAME_TIME = 2
    MAX_SCORE = 20
    GRAVITY = 15000
    THRUSTER_VELOCITY = 2
    // Degrees to rotate per controller button press.
    ROTATION_CHANGE = 10
    TORPEDO_SPEED = 100
    MAX_TORPEDOES = 5
    // Delay in milliseconds after a player is destroyed
    // before it is respawned.
    PLAYER_SPAWN_DELAY = 2500
    MAX_FUEL = 10
    HUD_BLOCK_SIZE = 4
    info.player1.setScore(0)
    player1Warped = 0
    player1SpawnDirection = 0
    info.player2.setScore(0)
    player2Warped = 0
    player2SpawnDirection = 180
    info.startCountdown(GAME_TIME * 60)
}
function resetPlayer1() {
    player1Destroyed = 0
    player1 = sprites.create(img`
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 f 7 . . . . . . . 
. . . . . . 7 f 7 . . . . . . . 
. . . . . . 7 f 7 . . . . . . . 
. . . . . 7 f f f 7 . . . . . . 
. . . . . 7 f f f 7 . . . . . . 
. . . . . 7 f f f 7 . . . . . . 
. . . . . 7 f f f 7 . . . . . . 
. . . . 7 f 7 f 7 f 7 . . . . . 
. . . 7 f 7 7 f 7 7 f 7 . . . . 
. . . 7 f 7 7 f 7 7 f 7 . . . . 
. . 7 f f f 7 f 7 f f f 7 . . . 
. . 7 7 7 7 . 7 . 7 7 7 7 . . . 
`, SpriteKind.Player)
    if (player1Warped == 0) {
        player1.setPosition(PLAYER_START_OFFSET_X, scene.screenHeight() - PLAYER_START_OFFSET_Y)
    } else {
        player1.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    }
    player1.setVelocity(0, 0)
    transformSprites.rotateSprite(player1, player1SpawnDirection)
    player1Torpedoes = MAX_TORPEDOES
    player1Fuel = MAX_FUEL
    player1Warped = 0
}
function updatePlayers() {
    if (player1Destroyed == 0) {
        playerUpdating = player1
        updatePlayer()
    } else {
        if (game.runtime() >= player1SpawnTime) {
            resetPlayer1()
        }
    }
    if (player2Destroyed == 0) {
        playerUpdating = player2
        updatePlayer()
    } else {
        if (game.runtime() >= player2SpawnTime) {
            resetPlayer2()
        }
    }
    updateHud()
}
function createSplashScreen() {
    createSplashBase()
    HEADLINES = [["Inspired by", "Spacewar!"], ["Spacewar! was", "developed in 1962"], ["Programmed by", "Steve Russell"], ["Collaborator", "Martin Graetz"], ["Collaborator", "Wayne Wiitanen"], ["Collaborator", "Bob Saunders"], ["Collaborator", "Steve Piner"], ["Programmed in", "MakeCode Arcade"], ["by", "Alex K."], ["Collaborator", "Joey W."]]
    currSplashScreen = 0
    SPLASH_ROTATE_INTERVAL = 5000
    nextSplashRotate = game.runtime() + nextSplashRotate
    scene.setBackgroundImage(splashScreens[0])
    createSplashPlayers()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == player1) {
        destroyPlayer1()
    } else {
        destroyPlayer2()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (attractMode == 0 && player1Torpedoes > 0) {
        player1Torpedoes += -1
        fireTorpedo(player1)
    }
})
function createSplashBase() {
    splashBase = image.create(scene.screenWidth(), scene.screenHeight())
    currFont = drawStrings.createFontInfo(FontName.Font5, 2)
    writeInstructions("SPACEFIGHT!", 2)
    headlinesY = drawStrings.height(currFont) + 4
    currFont = drawStrings.createFontInfo(FontName.Font5)
    writeInstructions("Press any button to start", scene.screenHeight() - (drawStrings.height(currFont) + 2))
    controlsDesc = ["Player 1", "A/D", "W", "Q", "E"]
    textY = 72
    writeArrayInstructions(2)
    controlsDesc = ["Action", "Rotate", "Thruster", "Fire", "Warp"]
    writeArrayInstructions(52)
    controlsDesc = ["Player 2", "J/L", "I", "U", "O"]
    writeArrayInstructions(104)
}
function writeInstructions (instruction: string, y: number) {
    drawStrings.writeCenter(
    instruction,
    splashBase,
    y,
    7,
    currFont
    )
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (attractMode == 0 && player2Torpedoes > 0) {
        player2Torpedoes += -1
        fireTorpedo(player2)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite == player1) {
        destroyPlayer1()
    } else {
        destroyPlayer2()
    }
})
function writeArrayInstructions (x: number) {
    drawStrings.writeMultiple(
    controlsDesc,
    splashBase,
    x,
    textY,
    7,
    currFont
    )
}
function resetPlayer2() {
    player2Destroyed = 0
    player2 = sprites.create(img`
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 f 7 . . . . . . . 
. . . . . . 7 f 7 . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 f 7 . . . . . . . 
. . . . . . 7 f 7 . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 f 7 . . . . . . . 
. . . . . . 7 f 7 . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . 7 7 f 7 7 . . . . . . 
. . . . 7 f 7 f 7 f 7 . . . . . 
. . . . 7 f 7 7 7 f 7 . . . . . 
. . . . 7 f 7 f 7 f 7 . . . . . 
. . . . 7 7 7 7 7 7 7 . . . . . 
`, SpriteKind.Player)
    if (player2Warped == 0) {
        player2.setPosition(scene.screenWidth() - PLAYER_START_OFFSET_X, PLAYER_START_OFFSET_Y)
    } else {
        player2.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    }
    player2.setVelocity(0, 0)
    transformSprites.rotateSprite(player2, player2SpawnDirection)
    player2Torpedoes = MAX_TORPEDOES
    player2Fuel = MAX_FUEL
    player2Warped = 0
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    rotatePlayer(player1, -1)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    rotatePlayer(player2, -1)
})
function destroyPlayer1 () {
    if (player1Warped == 0) {
        info.player2.changeScoreBy(1)
        player1SpawnDirection = 0
        player1.destroy(effects.spray, 500)
    } else {
        player1SpawnDirection = transformSprites.getRotation(player1)
        player1.destroy()
    }
    player1Destroyed = 1
    player1SpawnTime = game.runtime() + PLAYER_SPAWN_DELAY
}
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    rotatePlayer(player1, -1)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Repeated, function () {
    rotatePlayer(player2, -1)
})
function updatePlayer() {
    dx = star.x - playerUpdating.x
    dy = star.y - playerUpdating.y
    distance = dy * dy + dx * dx
    gravityForce = GRAVITY / distance
    playerUpdating.ax = gravityForce * dx / Math.sqrt(distance)
    playerUpdating.ay = gravityForce * dy / Math.sqrt(distance)
    if (playerUpdating.x < 0 && playerUpdating.vx < 0) {
        playerUpdating.x = scene.screenWidth()
    }
    if (playerUpdating.x > scene.screenWidth() && playerUpdating.vx > 0) {
        playerUpdating.x = 0
    }
    if (playerUpdating.y < 0 && playerUpdating.vy < 0) {
        playerUpdating.y = scene.screenHeight()
    }
    if (playerUpdating.y > scene.screenHeight() && playerUpdating.vy > 0) {
        playerUpdating.y = 0
    }
}
function createSplashPlayers() {
    player1 = sprites.create(img`
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 . 7 . 7 . 7 . . . . . 
. . . 7 . 7 7 . 7 7 . 7 . . . . 
. . . 7 . 7 7 . 7 7 . 7 . . . . 
. . 7 . . . 7 . 7 . . . 7 . . . 
. . 7 7 7 7 . 7 . 7 7 7 7 . . . 
`, SpriteKind.Player)
    player1.setPosition(24, 56)
    player2 = sprites.create(img`
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . 7 7 . 7 7 . . . . . . 
. . . . 7 . 7 . 7 . 7 . . . . . 
. . . . 7 . 7 7 7 . 7 . . . . . 
. . . . 7 . 7 . 7 . 7 . . . . . 
. . . . 7 7 7 7 7 7 7 . . . . . 
`, SpriteKind.Player)
    player2.setPosition(128, 56)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    rotatePlayer(player1, 1)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    rotatePlayer(player2, 1)
})
function rotateSplashScreen() {
    currSplashScreen += 1
    nextSplashRotate = game.runtime() + SPLASH_ROTATE_INTERVAL
    currFont = drawStrings.createFontInfo(FontName.Font5)
    splashScreen = splashBase.clone()
    drawStrings.writeMultipleCenter(
    HEADLINES[currSplashScreen % HEADLINES.length],
    splashScreen,
    headlinesY,
    14,
    currFont
    )
    splashScreens.push(splashScreen)
    scene.setBackgroundImage(splashScreen)
}
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    rotatePlayer(player1, 1)
})
info.onCountdownEnd(function () {
    game.over(true, effects.starField)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Repeated, function () {
    rotatePlayer(player2, 1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    playerOnePressUp()
})
function createStarfield() {
    starfield = image.create(scene.screenWidth(), scene.screenHeight())
    numStars = 40
    for (let index = 0; index <= numStars - 1; index++) {
        starfield.setPixel(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()), Math.randomRange(2, 14))
    }
    scene.setBackgroundImage(starfield)
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    playerTwoPressUp()
})
function startAttractMode() {
    attractMode = 1
    createSplashScreen()
}
function startGame() {
    player1.destroy()
    player2.destroy()
    attractMode = 0
    initialize()
    resetPlayer1()
    resetPlayer2()
}
function rotatePlayer (playerSprite: Sprite, direction: number) {
    if (attractMode == 0) {
        transformSprites.changeRotation(playerSprite, direction * ROTATION_CHANGE)
    }
}
function destroyPlayer2 () {
    if (player2Warped == 0) {
        info.player1.changeScoreBy(1)
        player2SpawnDirection = 180
        player2.destroy(effects.spray, 500)
    } else {
        player2SpawnDirection = transformSprites.getRotation(player2)
        player2.destroy()
    }
    player2Destroyed = 1
    player2SpawnTime = game.runtime() + PLAYER_SPAWN_DELAY
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    playerOnePressUp()
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Repeated, function () {
    playerTwoPressUp()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    player1Warped = 1
    destroyPlayer1()
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    player2Warped = 1
    destroyPlayer2()
})
function changeVelocity() {
    // Zero rotation represents north; adjust to correct
    // polar angle.
    thrustDir = transformSprites.getRotation(thrustPlayer) - 90
    thrustDirRads = thrustDir * 3.1416 / 180
    thrustX = THRUSTER_VELOCITY * Math.cos(thrustDirRads)
    thrustY = THRUSTER_VELOCITY * Math.sin(thrustDirRads)
    thrustPlayer.vx += thrustX
    thrustPlayer.vy += thrustY
}
function createStar() {
    star = sprites.create(img`
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
`, SpriteKind.Enemy)
    starAnim = animation.createAnimation(ActionKind.Idle, 250)
    starAnim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    starAnim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 7 . . . . . . . 7 . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . 7 . . . . . . . 7 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    starAnim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 7 . . . . . . . . . 7 . . . 
. . . 7 . . . . . . . 7 . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . 7 . . . . . . . 7 . . . . 
. . 7 . . . . . . . . . 7 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    starAnim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 7 . . . . . . . . . . . 7 . . 
. . 7 . . . . . . . . . 7 . . . 
. . . 7 . . . . . . . 7 . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . 7 7 7 7 7 7 7 7 7 . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . 7 . . . . . . . 7 . . . . 
. . 7 . . . . . . . . . 7 . . . 
. 7 . . . . . . . . . . . 7 . . 
. . . . . . . . . . . . . . . . 
`)
    starAnim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
7 . . . . . . . . . . . . . 7 . 
. 7 . . . . . . . . . . . 7 . . 
. . 7 . . . . . . . . . 7 . . . 
. . . 7 . . . . . . . 7 . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . 7 7 7 7 7 7 7 . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . 7 . . . . . . . 7 . . . . 
. . 7 . . . . . . . . . 7 . . . 
. 7 . . . . . . . . . . . 7 . . 
7 . . . . . . . . . . . . . 7 . 
`)
    starAnim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 7 . . . . . . . . . . . 7 . . 
. . 7 . . . . . . . . . 7 . . . 
. . . 7 . . . . . . . 7 . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . 7 7 7 7 7 7 7 7 7 . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . 7 . . . . . . . 7 . . . . 
. . 7 . . . . . . . . . 7 . . . 
. 7 . . . . . . . . . . . 7 . . 
. . . . . . . . . . . . . . . . 
`)
    starAnim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 7 . . . . . . . . . 7 . . . 
. . . 7 . . . . . . . 7 . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . 7 . . . . . . . 7 . . . . 
. . 7 . . . . . . . . . 7 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    starAnim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 7 . . . . . . . 7 . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . 7 . . . . . . . 7 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    animation.attachAnimation(star, starAnim)
    animation.setAction(star, ActionKind.Idle)
    star.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
    star.setVelocity(0, 0)
}
function playerOnePressUp () {
    if (attractMode == 0) {
        thrustPlayer = player1
        player1Fuel += -1
        changeVelocity()
    }
}
function playerTwoPressUp () {
    if (attractMode == 0) {
        thrustPlayer = player2
        player2Fuel += -1
        changeVelocity()
    }
}
function updateHud() {
    hudX = 2
    hudY = 10
    background = starfield.clone()
    background.fillRect(hudX, hudY, HUD_BLOCK_SIZE * player1Torpedoes, HUD_BLOCK_SIZE, 2)
    hudX = scene.screenWidth() - (HUD_BLOCK_SIZE * player2Torpedoes + 2)
    background.fillRect(hudX, hudY, HUD_BLOCK_SIZE * player2Torpedoes, HUD_BLOCK_SIZE, 2)
    hudY += HUD_BLOCK_SIZE
    hudX = 2
    background.fillRect(hudX, hudY, HUD_BLOCK_SIZE * player1Fuel, HUD_BLOCK_SIZE, 7)
    hudX = scene.screenWidth() - (HUD_BLOCK_SIZE * player2Fuel + 2)
    background.fillRect(hudX, hudY, HUD_BLOCK_SIZE * player2Fuel, HUD_BLOCK_SIZE, 7)
    scene.setBackgroundImage(background)
}
function fireTorpedo (playerSprite: Sprite) {
    // 0 degrees is north; adjust to correct polar angle.
    torpedoDir = transformSprites.getRotation(playerSprite) - 90
    torpedoDirRads = torpedoDir * (3.1416 / 180)
    torpedoVx = TORPEDO_SPEED * Math.cos(torpedoDirRads)
    torpedoVy = TORPEDO_SPEED * Math.sin(torpedoDirRads)
    // Give the torpedo a head start so the player doesn't
    // blow up. :-)
    torpedoDx = 16 * Math.cos(torpedoDirRads)
    torpedoDy = 16 * Math.sin(torpedoDirRads)
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, playerSprite, torpedoVx, torpedoVy)
    projectile.x += torpedoDx
    projectile.y += torpedoDy
}
let projectile: Sprite = null
let torpedoDy = 0
let torpedoDx = 0
let torpedoVy = 0
let torpedoVx = 0
let torpedoDirRads = 0
let torpedoDir = 0
let background: Image = null
let hudY = 0
let hudX = 0
let starAnim: animation.Animation = null
let thrustY = 0
let thrustX = 0
let thrustDirRads = 0
let thrustPlayer: Sprite = null
let thrustDir = 0
let numStars = 0
let starfield: Image = null
let splashScreen: Image = null
let gravityForce = 0
let distance = 0
let dy = 0
let star: Sprite = null
let dx = 0
let player2Fuel = 0
let player2Torpedoes = 0
let textY = 0
let controlsDesc: string[] = []
let headlinesY = 0
let currFont: FontInfo = null
let splashBase: Image = null
let splashScreens: Image[] = []
let nextSplashRotate = 0
let SPLASH_ROTATE_INTERVAL = 0
let currSplashScreen = 0
let HEADLINES: string[][] = []
let player2SpawnTime = 0
let player2: Sprite = null
let player2Destroyed = 0
let player1SpawnTime = 0
let playerUpdating: Sprite = null
let player1Fuel = 0
let player1Torpedoes = 0
let player1: Sprite = null
let player1Destroyed = 0
let player2SpawnDirection = 0
let player2Warped = 0
let player1SpawnDirection = 0
let player1Warped = 0
let HUD_BLOCK_SIZE = 0
let MAX_FUEL = 0
let PLAYER_SPAWN_DELAY = 0
let MAX_TORPEDOES = 0
let TORPEDO_SPEED = 0
let ROTATION_CHANGE = 0
let THRUSTER_VELOCITY = 0
let GRAVITY = 0
let MAX_SCORE = 0
let GAME_TIME = 0
let PLAYER_START_OFFSET_Y = 0
let PLAYER_START_OFFSET_X = 0
let attractMode = 0
startAttractMode()
game.onUpdate(function () {
    if (attractMode == 0) {
        updatePlayers()
    } else {
        if (game.runtime() >= nextSplashRotate) {
            rotateSplashScreen()
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (player1Fuel < MAX_FUEL) {
        player1Fuel += 1
    }
    if (player2Fuel < MAX_FUEL) {
        player2Fuel += 1
    }
})
game.onUpdateInterval(5000, function () {
    if (player1Torpedoes < MAX_TORPEDOES) {
        player1Torpedoes += 1
    }
    if (player2Torpedoes < MAX_TORPEDOES) {
        player2Torpedoes += 1
    }
})
```

```package
animation
pxt-arcade-display-strings=github:robo-technical-group/pxt-arcade-display-strings#v1.0.10
pxt-arcade-image-transform=github:robo-technical-group/pxt-arcade-image-transform#v1.0.8
```

## About the authors

This game was contributed by [Alex Kulcsar](https://github.com/alex-kulcsar),
a software engineer and educator from Dexter, Michigan.

The game itself was originally introduced in a post on the
[MakeCode Form](https://forum.makecode.com/t/presenting-spacewar/107).
