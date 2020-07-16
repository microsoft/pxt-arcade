# Animated sand

This a MakeCode version of the [Animated LED Sand](https://learn.adafruit.com/animated-led-sand/code) project example from Adafruit. The program reads the acceleration in the `X` and `Y` dimensions to shift "sand" on the screen. It creates an effect where grains of sand slide across the screen in the direction of tilt.

```typescript
// Animated LED sand ported from
// https://learn.adafruit.com/animated-led-sand/code

const N_GRAINS = 80;
const grainImg = img`
    b b b b b b b .
    b d d d d d b .
    b d d d d d b c
    b d d d d d b c
    b d d d d d b c
    b d d d d d b c
    b b b b b b b c
    . . c c c c c c
`;
const GRAIN_RADIUS = grainImg.width;
const WIDTH = Math.idiv(screen.width, GRAIN_RADIUS); // Display width in pixels
const HEIGHT = Math.idiv(screen.height, GRAIN_RADIUS); // Display height in pixels

// The 'sand' grains exist in an integer coordinate space that's 256X
// the scale of the pixel grid, allowing them to move and interact at
// less than whole-pixel increments.
const MAX_X = (WIDTH * 256 - 1); // Maximum X coordinate in grain space
const MAX_Y = (HEIGHT * 256 - 1); // Maximum Y coordinate
class Grain {
    constructor(public x: number, public y: number, public vx: number, public vy: number)
    { }
}
const grain: Grain[] = [];
const imgbuf = control.createBuffer(WIDTH * HEIGHT);

// SETUP - RUNS ONCE AT PROGRAM START --------------------------------------
function setup() {
    for (let i = 0; i < N_GRAINS; i++) {  // For each sand grain...
        grain.push(new Grain(0, 0, 0, 0));
        let j = 0;
        do {
            grain[i].x = randint(0, (WIDTH << 8) - 1); // Assign random position within
            grain[i].y = randint(0, (HEIGHT << 8) - 1); // the 'grain' coordinate space
            // Check if corresponding pixel position is already occupied...
            for (j = 0; (j < i) && (((grain[i].x >> 8) != (grain[j].x >> 8)) ||
                ((grain[i].y >> 8) != (grain[j].y >> 8))); j++);
        } while (j < i); // Keep retrying until a clear spot is found
        imgbuf[(grain[i].y >> 8) * WIDTH + (grain[i].x >> 8)] = 0xff; // Mark it
        grain[i].vx = grain[i].vy = 0; // Initial velocity is zero
    }
}
setup();
// MAIN LOOP - RUNS ONCE PER FRAME OF ANIMATION ----------------------------

game.onUpdate(function () {
    // Limit the animation frame rate to MAX_FPS.  Because the subsequent sand
    // calculations are non-deterministic (don't always take the same amount
    // of time, depending on their current states), this helps ensure that
    // things like gravity appear constant in the simulation.

    // Read accelerometer...
    let ax = controller.acceleration(ControllerDimension.X) >> 8;
    let ay = -controller.acceleration(ControllerDimension.Y) >> 8;
    let az = Math.idiv(Math.abs(controller.acceleration(ControllerDimension.Z)), 2048);
    az = (az >= 3) ? 1 : 4 - az;      // Clip & invert
    ax -= az;                         // Subtract motion factor from X, Y
    ay -= az;
    let az2 = az * 2 + 1;         // Range of random motion to add back in

    // ...and apply 2D accel vector to grain velocities...
    let v2; // Velocity squared
    let v;  // Absolute velocity
    for (let i = 0; i < N_GRAINS; i++) {
        const graini = grain[i];
        graini.vx += ax + randint(0, az2); // A little randomness makes
        graini.vy += ay + randint(0, az2); // tall stacks topple better!
        // Terminal velocity (in any direction) is 256 units -- equal to
        // 1 pixel -- which keeps moving grains from passing through each other
        // and other such mayhem.  Though it takes some extra math, velocity is
        // clipped as a 2D vector (not separately-limited X & Y) so that
        // diagonal movement isn't faster
        v2 = graini.vx * graini.vx + graini.vy * graini.vy;
        if (v2 > 65536) { // If v^2 > 65536, then v > 256
            //v = Math.sqrt(v2) | 0; // Velocity vector magnitude
            // sqrt expensive on hw
            v = Math.max(graini.vx, graini.vy);
            graini.vx = Math.idiv(graini.vx, v) >> 8; // Maintain heading
            graini.vy = Math.idiv(graini.vy, v) >> 8; // Limit magnitude
        }
    }

    // ...then update position of each grain, one at a time, checking for
    // collisions and having them react.  This really seems like it shouldn't
    // work, as only one grain is considered at a time while the rest are
    // regarded as stationary.  Yet this naive algorithm, taking many not-
    // technically-quite-correct steps, and repeated quickly enough,
    // visually integrates into something that somewhat resembles physics.
    // (I'd initially tried implementing this as a bunch of concurrent and
    // "realistic" elastic collisions among circular grains, but the
    // calculations and volument of code quickly got out of hand for both
    // the tiny 8-bit AVR microcontroller and my tiny dinosaur brain.)

    for (let i = 0; i < N_GRAINS; i++) {
        const graini = grain[i];
        let newx = graini.x + graini.vx; // New position in grain space
        let newy = graini.y + graini.vy;
        if (newx > MAX_X) {               // If grain would go out of bounds
            newx = MAX_X;          // keep it inside, and
            graini.vx = - graini.vx >> 1;             // give a slight bounce off the wall
        } else if (newx < 0) {
            newx = 0;
            graini.vx = - graini.vx >> 1;
        }
        if (newy > MAX_Y) {
            newy = MAX_Y;
            graini.vy = - graini.vy >> 1;
        } else if (newy < 0) {
            newy = 0;
            graini.vy = - graini.vy >> 1;
        }

        let oldidx = (graini.y >> 8) * WIDTH + (graini.x >> 8); // Prior pixel #
        let newidx = (newy >> 8) * WIDTH + (newx >> 8); // New pixel #
        if ((oldidx != newidx) && // If grain is moving to a new pixel...
            imgbuf[newidx]) {       // but if that pixel is already occupied...
            let delta = Math.abs(newidx - oldidx); // What direction when blocked?
            if (delta == 1) {            // 1 pixel left or right)
                newx = graini.x;  // Cancel X motion
                graini.vx = -graini.vx >> 1;          // and bounce X velocity (Y is OK)
                newidx = oldidx;      // No pixel change
            } else if (delta == WIDTH) { // 1 pixel up or down
                newy = graini.y;  // Cancel Y motion
                graini.vy = -graini.vy >> 1;          // and bounce Y velocity (X is OK)
                newidx = oldidx;      // No pixel change
            } else { // Diagonal intersection is more tricky...
                // Try skidding along just one axis of motion if possible (start w/
                // faster axis).  Because we've already established that diagonal
                // (both-axis) motion is occurring, moving on either axis alone WILL
                // change the pixel index, no need to check that again.
                if ((Math.abs(graini.vx) - Math.abs(graini.vy)) >= 0) { // X axis is faster
                    newidx = (graini.y >> 8) * WIDTH + (newx >> 8);
                    if (!imgbuf[newidx]) { // That pixel's free!  Take it!  But...
                        newy = graini.y; // Cancel Y motion
                        graini.vy = - graini.vy >> 1;         // and bounce Y velocity
                    } else { // X pixel is taken, so try Y...
                        newidx = (newy >> 8) * WIDTH + (graini.x >> 8);
                        if (!imgbuf[newidx]) { // Pixel is free, take it, but first...
                            newx = graini.x; // Cancel X motion
                            graini.vx = - graini.vx >> 1;         // and bounce X velocity
                        } else { // Both spots are occupied
                            newx = graini.x; // Cancel X & Y motion
                            newy = graini.y;
                            graini.vx = - graini.vx >> 1;         // Bounce X & Y velocity
                            graini.vy /= - graini.vy >> 1;
                            newidx = oldidx;     // Not moving
                        }
                    }
                } else { // Y axis is faster, start there
                    newidx = (newy >> 8) * WIDTH + (graini.x >> 8);
                    if (!imgbuf[newidx]) { // Pixel's free!  Take it!  But...
                        newx = graini.x; // Cancel X motion
                        graini.vy = - graini.vy >> 1;         // and bounce X velocity
                    } else { // Y pixel is taken, so try X...
                        newidx = (graini.y >> 8) * WIDTH + (newx >> 8);
                        if (!imgbuf[newidx]) { // Pixel is free, take it, but first...
                            newy = graini.y; // Cancel Y motion
                            graini.vy = - graini.vy >> 1;         // and bounce Y velocity
                        } else { // Both spots are occupied
                            newx = graini.x; // Cancel X & Y motion
                            newy = graini.y;
                            graini.vx = - graini.vx >> 1;         // Bounce X & Y velocity
                            graini.vy = - graini.vy >> 1;
                            newidx = oldidx;     // Not moving
                        }
                    }
                }
            }
        }
        graini.x = newx; // Update grain position
        graini.y = newy;
        imgbuf[oldidx] = 0;    // Clear old spot (might be same as new, that's OK)
        imgbuf[newidx] = 0xff;  // Set new spot
    }
});

game.onPaint(function () {
    for (let x = 0; x < WIDTH; ++x) {
        const xs = x * GRAIN_RADIUS;
        for (let y = 0; y < HEIGHT; ++y) {
            const ys = y * GRAIN_RADIUS;
            if (imgbuf[y * WIDTH + x])
                screen.drawImage(grainImg, xs, ys)
        }
    }
})
```

```package
controller
```