// https://makecode.com/_F5gefWYUjHct
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
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (attractMode == 0) {
        thrustPlayer = player1
        player1HudUpdate = 1
        player1Fuel += -1
        // Don't reset the next refuel if it's already in the
        // future.
        if (player1NextRefuelTime < game.runtime()) {
            player1NextRefuelTime = game.runtime() + refuelInterval
        }
        changeVelocity()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (attractMode == 0) {
        transformSprites.changeRotation(player1, 0 - rotationChange)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (attractMode == 0 && player1Torpedoes > 0) {
        firingPlayer = player1
        player1HudUpdate = 1
        player1Torpedoes += -1
        // Don't reset the next torpedo resupply if it's
        // already in the future.
        if (player1NextTorpedoTime < game.runtime()) {
            player1NextTorpedoTime = game.runtime() + torpedoResupplyInterval
        }
        fireTorpedo()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.spray)
    game.over(true, effects.confetti)
})
function initialize() {
    createStarfield()
    createStar()
    startingOffsetX = 10
    startingOffsetY = 26
    // Maximum length of a game in minutes
    gameTime = 10
    maxScore = 10
    gravity = 15000
    thrust = 2
    // Degrees to rotate per controller button press.
    rotationChange = 10
    torpedoSpeed = 100
    startingTorpedoes = 5
    playerSpawnDelay = 2500
    // Time in milliseconds when torpedoes are resupplied
    // to a player.
    torpedoResupplyInterval = 5000
    startingFuel = 10
    refuelInterval = 1000
    hudBlockSize = 4
    info.player1.setScore(0)
    info.player2.setScore(0)
    info.startCountdown(gameTime * 60)
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
    if (player1Torpedoes < startingTorpedoes && game.runtime() >= player1NextTorpedoTime) {
        player1Torpedoes += 1
        player1HudUpdate = 1
        if (player1Torpedoes < startingTorpedoes) {
            player1NextTorpedoTime = game.runtime() + torpedoResupplyInterval
        }
    }
    if (player1Fuel < startingFuel && game.runtime() >= player1NextRefuelTime) {
        player1Fuel += 1
        player1HudUpdate = 1
        if (player1Fuel < startingFuel) {
            player1NextRefuelTime = game.runtime() + refuelInterval
        }
    }
    if (player2Torpedoes < startingTorpedoes && game.runtime() >= player2NextTorpedoTime) {
        player2Torpedoes += 1
        player2HudUpdate = 1
        if (player2Torpedoes < startingTorpedoes) {
            player2NextTorpedoTime = game.runtime() + torpedoResupplyInterval
        }
    }
    if (player2Fuel < startingFuel && game.runtime() >= player2NextRefuelTime) {
        player2Fuel += 1
        player2HudUpdate = 1
        if (player2Fuel < startingFuel) {
            player2NextRefuelTime = game.runtime() + refuelInterval
        }
    }
    if (player1HudUpdate == 1 || player2HudUpdate == 1) {
        updateHud()
    }
}
function changeVelocity() {
    // Zero rotation represents north; adjust to correct
    // polar angle.
    thrustDir = transformSprites.getRotation(thrustPlayer) - 90
    thrustDirRads = thrustDir * 3.1416 / 180
    thrustX = thrust * Math.cos(thrustDirRads)
    thrustY = thrust * Math.sin(thrustDirRads)
    thrustPlayer.vx += thrustX
    thrustPlayer.vy += thrustY
}
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (attractMode == 0) {
        transformSprites.changeRotation(player1, 0 - rotationChange)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.spray)
    otherSprite.destroy(effects.spray)
    game.over(false, effects.melt)
})
function updateHud() {
    hudX = 2
    hudY = 10
    background = starfield.clone()
    background.fillRect(hudX, hudY, hudBlockSize * player1Torpedoes, hudBlockSize, 2)
    hudX = scene.screenWidth() - (hudBlockSize * player2Torpedoes + 2)
    background.fillRect(hudX, hudY, hudBlockSize * player2Torpedoes, hudBlockSize, 2)
    hudY += hudBlockSize
    hudX = 2
    background.fillRect(hudX, hudY, hudBlockSize * player1Fuel, hudBlockSize, 7)
    hudX = scene.screenWidth() - (hudBlockSize * player2Fuel + 2)
    background.fillRect(hudX, hudY, hudBlockSize * player2Fuel, hudBlockSize, 7)
    scene.setBackgroundImage(background)
}
function createSplashScreen() {
    splashScreensBuilt = 0
    createSplashBase()
    buildSplashScreens()
    currSplashScreen = 0
    splashRotateInterval = 5000
    nextSplashRotate = game.runtime() + nextSplashRotate
    scene.setBackgroundImage(splashScreens[0])
    createSplashPlayers()
    splashScreensBuilt = 1
}
function createStarfield() {
    starfield = image.create(scene.screenWidth(), scene.screenHeight())
    numStars = 40
    for (let index = 0; index <= numStars - 1; index++) {
        starfield.setPixel(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()), Math.randomRange(2, 14))
    }
    scene.setBackgroundImage(starfield)
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (attractMode == 0) {
        thrustPlayer = player1
        player1HudUpdate = 1
        player1Fuel += -1
        // Don't reset the next refuel if it's already in the
        // future.
        if (player1NextRefuelTime < game.runtime()) {
            player1NextRefuelTime = game.runtime() + refuelInterval
        }
        changeVelocity()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (attractMode == 0) {
        transformSprites.changeRotation(player1, rotationChange)
    }
})
function startGame() {
    player1.destroy()
    player2.destroy()
    attractMode = 0
    initialize()
    resetPlayer1()
    resetPlayer2()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite == player1) {
        info.player2.changeScoreBy(1)
        player1.destroy(effects.spray, 500)
        player1Destroyed = 1
        player1SpawnTime = game.runtime() + playerSpawnDelay
    } else {
        info.player1.changeScoreBy(1)
        player2.destroy(effects.spray, 500)
        player2Destroyed = 1
        player2SpawnTime = game.runtime() + playerSpawnDelay
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (attractMode == 0 && player2Torpedoes > 0) {
        firingPlayer = player2
        player2HudUpdate = 1
        player2Torpedoes += -1
        // Don't reset the next torpedo resupply if it's
        // already in the future.
        if (player2NextTorpedoTime < game.runtime()) {
            player2NextTorpedoTime = game.runtime() + torpedoResupplyInterval
        }
        fireTorpedo()
    }
})
function updatePlayer() {
    dx = star.x - playerUpdating.x
    dy = star.y - playerUpdating.y
    distance = dy * dy + dx * dx
    gravityForce = gravity / distance
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
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    if (attractMode == 0) {
        transformSprites.changeRotation(player1, rotationChange)
    }
})
function createSplashBase() {
    splashBase = image.create(scene.screenWidth(), scene.screenHeight())
    currFont = drawStrings.createFontInfo(FontName.Font5, 2)
    drawStrings.writeCenter(
    "SPACEFIGHT!",
    splashBase,
    2,
    7,
    currFont
    )
    headlinesY = drawStrings.height(currFont) + 4
    currFont = drawStrings.createFontInfo(FontName.Font5)
    drawStrings.writeCenter(
    "Press any button to start",
    splashBase,
    scene.screenHeight() - (drawStrings.height(currFont) + 2),
    7,
    currFont
    )
    controlsDesc = ["Player 1", "A/D", "W", "Q", "E"]
    textY = 72
    drawStrings.writeMultiple(
    controlsDesc,
    splashBase,
    2,
    textY,
    7,
    currFont
    )
    controlsDesc = ["Player 2", "J/L", "I", "U", "O"]
    drawStrings.writeMultiple(
    controlsDesc,
    splashBase,
    104,
    textY,
    7,
    currFont
    )
    controlsDesc = ["Action", "Rotate", "Thruster", "Fire", "Warp"]
    drawStrings.writeMultiple(
    controlsDesc,
    splashBase,
    52,
    textY,
    7,
    currFont
    )
}
function buildSplashScreens() {
    headlines = [["Inspired by", "Spacewar!"], ["Spacewar! was", "developed in 1962"], ["Programmed by", "Steve Russell"], ["Collaborator", "Martin Graetz"], ["Collaborator", "Wayne Wiitanen"], ["Collaborator", "Bob Saunders"], ["Collaborator", "Steve Piner"], ["Programmed in", "MakeCode Arcade"], ["by", "Alex K."]]
    currFont = drawStrings.createFontInfo(FontName.Font5)
    splashScreens = []
    for (let value of headlines) {
        splashScreen = splashBase.clone()
        drawStrings.writeMultipleCenter(
        value,
        splashScreen,
        headlinesY,
        14,
        currFont
        )
        splashScreens.push(splashScreen)
    }
}
function startAttractMode() {
    attractMode = 1
    createSplashScreen()
}
function rotateSplashScreen() {
    if (splashScreensBuilt == 1) {
        currSplashScreen += 1
        if (currSplashScreen >= splashScreens.length) {
            currSplashScreen = 0
        }
        nextSplashRotate = game.runtime() + splashRotateInterval
        scene.setBackgroundImage(splashScreens[currSplashScreen])
    }
}
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (attractMode == 0) {
        transformSprites.changeRotation(player2, 0 - rotationChange)
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (attractMode == 0) {
        thrustPlayer = player2
        player2HudUpdate = 1
        player2Fuel += -1
        // Don't reset the next refuel if it's already in the
        // future.
        if (player2NextRefuelTime < game.runtime()) {
            player2NextRefuelTime = game.runtime() + refuelInterval
        }
        changeVelocity()
    }
})
info.onCountdownEnd(function () {
    game.over(true, effects.starField)
})
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
    player1.setPosition(startingOffsetX, scene.screenHeight() - startingOffsetY)
    player1.setVelocity(0, 0)
    transformSprites.rotateSprite(player1, 0)
    player1Torpedoes = startingTorpedoes
    player1Fuel = startingFuel
    player1HudUpdate = 1
}
function fireTorpedo() {
    // 0 degrees is north; adjust to correct polar angle.
    torpedoDir = transformSprites.getRotation(firingPlayer) - 90
    torpedoDirRads = torpedoDir * (3.1416 / 180)
    torpedoVx = torpedoSpeed * Math.cos(torpedoDirRads)
    torpedoVy = torpedoSpeed * Math.sin(torpedoDirRads)
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
`, firingPlayer, torpedoVx, torpedoVy)
    projectile.x += torpedoDx
    projectile.y += torpedoDy
}
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Repeated, function () {
    if (attractMode == 0) {
        transformSprites.changeRotation(player2, 0 - rotationChange)
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (attractMode == 0) {
        transformSprites.changeRotation(player2, rotationChange)
    }
})
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
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Repeated, function () {
    if (attractMode == 0) {
        thrustPlayer = player2
        player2HudUpdate = 1
        player2Fuel += -1
        // Don't reset the next refuel if it's already in the
        // future.
        if (player2NextRefuelTime < game.runtime()) {
            player2NextRefuelTime = game.runtime() + refuelInterval
        }
        changeVelocity()
    }
})
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
    player2.setPosition(scene.screenWidth() - startingOffsetX, startingOffsetY)
    player2.setVelocity(0, 0)
    transformSprites.rotateSprite(player2, 180)
    player2Torpedoes = startingTorpedoes
    player2Fuel = startingFuel
    player2HudUpdate = 1
}
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Repeated, function () {
    if (attractMode == 0) {
        transformSprites.changeRotation(player2, rotationChange)
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (attractMode == 1) {
        startGame()
    }
})
let projectile: Sprite = null
let torpedoDy = 0
let torpedoDx = 0
let torpedoVy = 0
let torpedoVx = 0
let torpedoDirRads = 0
let torpedoDir = 0
let starAnim: animation.Animation = null
let splashScreen: Image = null
let headlines: string[][] = []
let textY = 0
let controlsDesc: string[] = []
let headlinesY = 0
let currFont: FontInfo = null
let splashBase: Image = null
let gravityForce = 0
let distance = 0
let dy = 0
let star: Sprite = null
let dx = 0
let numStars = 0
let splashScreens: Image[] = []
let nextSplashRotate = 0
let splashRotateInterval = 0
let currSplashScreen = 0
let splashScreensBuilt = 0
let starfield: Image = null
let background: Image = null
let hudY = 0
let hudX = 0
let thrustY = 0
let thrustX = 0
let thrustDirRads = 0
let thrustDir = 0
let player2NextRefuelTime = 0
let player2Fuel = 0
let player2HudUpdate = 0
let player2NextTorpedoTime = 0
let player2Torpedoes = 0
let player2SpawnTime = 0
let player2: Sprite = null
let player2Destroyed = 0
let player1SpawnTime = 0
let playerUpdating: Sprite = null
let player1Destroyed = 0
let hudBlockSize = 0
let startingFuel = 0
let playerSpawnDelay = 0
let startingTorpedoes = 0
let torpedoSpeed = 0
let thrust = 0
let gravity = 0
let maxScore = 0
let gameTime = 0
let startingOffsetY = 0
let startingOffsetX = 0
let torpedoResupplyInterval = 0
let player1NextTorpedoTime = 0
let firingPlayer: Sprite = null
let player1Torpedoes = 0
let rotationChange = 0
let refuelInterval = 0
let player1NextRefuelTime = 0
let player1Fuel = 0
let player1HudUpdate = 0
let player1: Sprite = null
let thrustPlayer: Sprite = null
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
