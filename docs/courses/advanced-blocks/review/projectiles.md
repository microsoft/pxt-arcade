# Projectile Motion

![Asteroid Shooter](/static/courses/csintro/review/asteroid-shooter.gif)

Start with this basic game code. We will alter this by adding the basic motion concepts that we learned to make the game above.

https://makecode.com/_bWTMspA9EeF2

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . . . 7 7 . 7 7 . . . . . . 
. . . . . 7 . . . 7 . . . . . . 
. . . . 7 7 . . . 7 7 . . . . . 
. . . . 7 . . . . . 7 . . . . . 
. . . 7 7 . . . . . 7 7 . . . . 
. . . 7 . . . . . . . 7 . . . . 
. . 7 7 . . . . . . . 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.controlSprite(mySprite, 50, 50)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
```

## Student Task #1: Make the player shoot a laser from their spaceship

1. Make an event for when the player presses the ``||controller:A||`` button
2. In the event, create a projectile that fires with y-velocity of -100 and x-velocity of 0
3. Make the projectile's sprite some sort of laser that fires from the spaceship
4. Make the projectile of kind ``||sprites:Laser||``
5. Set the projectile to fire from ``||variables:mySprite||``

## Student Task #2: Add asteroids for the player to shoot at

1. Inside a ``||loops:forever||`` loop, create a projectile with the asteroid sprite
2. Give this projectile a random x-velocity between -50 and 50 and a random y-velocity between -50 and 50
3. Make the projectile of kind ``||sprites:Asteroid||``
4. ``||loops: pause||`` the game for a time that is based on the score. We want the delay between asteroid creation to decrease as the score increases. A good equation to use is `2000 - (50 * score)` ms

## Student Task #3: Give the player a point when they shoot an asteroid

1. Add an event for when a sprite of kind ``||sprites:Laser||`` overlaps with a sprite of kind ``||sprites:Asteroid||``
2. Increase the player's score by one
3. Destroy the asteroid sprite
4. Destroy the laser sprite

## Student Task #4: Make the player lose a life when they hit an asteroid

1. Add an event for when a sprite of kind ``||sprites:Player||`` overlaps with a sprite of kind ``||sprites:Asteroid||``
2. Decrease the player's life by one
3. Destroy the asteroid sprite
