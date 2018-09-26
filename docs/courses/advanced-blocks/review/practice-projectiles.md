# Projectiles Practice

## Student Task #1: Shooting Stars

1. On every 500 ms game update, make a new projectile with a star sprite. Set both its `X` and `Y` velocities to be a random number from range -50 to 50
2. Run it! The stars should come from all 4 corners and have random speeds

## Student Task #2: Plants vs Blocks

1. Make a sprite of some plant or flower.
2. On up button press, make a projectile (any sprite) whose vx (horizontal velocity) is 0, but vy (vertical velocity) is -50. Also make it so that this projectile starts from your plant sprite at the center of the screen. Test this out to make sure it works
3. On each of the remaining arrow key button presses (down, left, and right) make a projectile start from the plant in the center of our screen and shoot it in the direction of the arrow key pressed. 
4. Add a timer so the game last 30 seconds
5. **Challenge:** make a target sprite that stays in center of a wall randomly. It should stay there for 1 second (use the 'on game update 1 sec' block) before figuring out the next wall to randomly jump to.
6. **Challenge:** when projectiles overlap with the target, change the score by one. You will want ``||sprites:on sprite of kind overlaps||`` blocks. This means you must make the projectiles of a certain type and your target sprite of another type
