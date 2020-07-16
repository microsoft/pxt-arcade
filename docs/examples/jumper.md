# Jumper

```typescript
/**********************************************
 *                                            *
 *              Physics controls              *
 *                                            *
 **********************************************/

// Increase to fall faster
const gravity = 10

// Initial jump velocity. Increase to jump higher
const jumpVelocity = 80;


/**********************************************
 *                                            *
 *            Difficulty controls             *
 *                                            *
 **********************************************/

// The number of obstacles per second. Increase for tighter grouping
let obstaclesPerSecond = 0.7;

// The speed of obstacles
let obstacleSpeed = 40;

// The number of positions obstacles can spawn in
let obstaclePositions = 1;

// This function gets called periodically in the game loop. Tune these
// values to make the game harder/easier
function increaseDifficulty() {
    obstacleSpeed += 1;
    obstaclesPerSecond += 0.05;

    // Every 5 obstacles, this will increase the number of Y positions
    // that an obstacle can spawn at. At the start, all obstacles appear
    // on the ground.
    obstaclePositions = Math.min(obstaclePositions + 0.2, 3);
}


/**********************************************
 *                                            *
 *                Game start                  *
 *                                            *
 **********************************************/
scene.setBackgroundColor(1)

// Create the player sprite
const player = sprites.create(img`
    3 3 3 3 3 3 3 3
    3 . . 3 3 . . 3
    3 . . 3 3 . . 3
    3 3 3 3 3 3 3 3
    3 3 3 3 3 3 3 3
    3 . . . . . . 3
    3 3 3 3 3 3 3 3
`);

// The "ground" y value. The top of the screen is y=0
// so higher y values mean closer to the ground.
const ground = screen.height - player.height;
player.x = 20;
player.y = ground;

player.onOverlap(function (other: Sprite) {
    game.over();
});


let frameCount = 0;
game.onUpdate(function () {
    // Periodically spawn an obstacle and increase the difficulty.
    // This math assumes the game is running at 60 FPS
    frameCount = (frameCount + 1) % Math.floor(60 / obstaclesPerSecond)
    if (frameCount === 0) {
        createObstacle();
        increaseDifficulty();
    }

    // Handle impact with the ground
    if (player.y >= ground) {
        player.y = ground;
        player.vy = 0;
    }

    // If the player is close to the ground, A is pressed, and we are not falling...
    if (player.y > ground - 20 && controller.A.isPressed() && player.vy <= 0) {
        if (player.vy === 0) {
            // Set the velocity for the initial jump. Negative velocities are up
            player.vy = -1 * jumpVelocity
        }
        else {
            // If we are rising but still close to the ground, keep accelerating.
            // That way the player can control how high they jump by holding down
            // the A button for long or short periods of time
            player.vy -= 5;
        }
    }
    else {
        // Falling
        player.vy += gravity;
    }
})

function createObstacle() {
    // sprites.createProjectile creates a sprite that automatically
    // destroys itself when it leaves the screen
    const s = sprites.createProjectile(img`
        f f f f f
        f f f f f
        f f f f f
        f f f f f
        f f f f f
        `,
        -1 * obstacleSpeed, 0, 0);

    // Start on the right side of the screen
    s.x = screen.width;

    // Randomly choose the obstacle height. The number of possible positions
    // increases over time.
    s.y = ground - 15 * Math.floor(randint(0, obstaclePositions - 1));

    // Keep score
    s.onDestroyed(function () {
        info.changeScoreBy(1)
    });
}
```