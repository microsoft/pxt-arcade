# Review: Dodgey Duck

Making enemies spawn in random positions is a useful tool that helps with making games unique for each player, but it comes at a cost: sometimes, the randomization can lead to elements being weirdly positioned, or make them unable to interact with your character.

One approach to help mitigate this is to be picky about what locations the random elements of the game can be created at. In this case, the enemy sprites and collectibles will be aligned to different rows in the game.

![Final Car Game](/static/courses/csintro1/review/dodgey-duck.gif)

## Starter Code

Pay careful attention to the ``||game:on update every||`` that creates the ``||sprites:projectile||`` in this code, as it provides an outline for how the "row based" positioning of the sprite will be handled.

In particular, this comes from the ``||sprites:set projectile y to||`` section: instead of picking a random location on the screen, it picks one of 8 locations at random, each separated by 16 pixels (the height of the projectile image).

Additionally, note that this projectile will move faster as the game moves on: each time one moves off screen, the player scores points, and new ducks will move faster.

```blocks
let mySprite: Sprite = null
let projectile: Sprite = null
mySprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . .
. . . . . f 5 5 5 f f . . . . .
. . . . f 1 5 2 5 1 6 f . . . .
. . . f 1 6 6 6 6 6 1 6 f . . .
. . . f 6 6 f f f f 6 1 f . . .
. . . f 6 f f d d f f 6 f . . .
. . f 6 f d f d d f d f 6 f . .
. . f 6 f d 3 d d 3 d f 6 f . .
. . f 6 6 f d d d d f 6 6 f . .
. f 6 6 f 3 f f f f 3 f 6 6 f .
. . f f 3 3 5 3 3 5 3 d f f . .
. . . f d f 3 5 5 3 f f d f . .
. . . f d f 3 3 3 3 3 f f . . .
. . . f f 3 5 3 3 5 3 3 f . . .
. . . . f f f f f f f f f . . .
. . . . . . . . . f f . . . . .
`, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . b 5 b . . .
. . . . . . . . . b 5 b . . . .
. . . . . . b b b b b b . . . .
. . . . . b b 5 5 5 5 5 b . . .
. . . . b b 5 d 1 f 5 d 4 c . .
. . . . b 5 5 1 f f d d 4 4 4 b
. . . . b 5 5 d f b 4 4 4 4 b .
. . . b d 5 5 5 5 4 4 4 4 b . .
. b b d d d 5 5 5 5 5 5 5 b . .
b d d d b b b 5 5 5 5 5 5 5 b .
c d d b 5 5 d c 5 5 5 5 5 5 b .
c b b d 5 d c d 5 5 5 5 5 5 b .
c b 5 5 b c d d 5 5 5 5 5 5 b .
b b c c c d d d 5 5 5 5 5 d b .
. . . . c c d d d 5 5 5 b b . .
. . . . . . c c c c c b b . . .
`, 40 + info.score(), 0)
    projectile.y = randint(0, 7) * 16
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.say("oww!", 500)
})
```

## Student Task #1: Duck Interactions

Right now, the game is a bit hard; as soon as the player hits a duck, they lose life rapidly. This is because the player will continue to overlap with the duck as long is they occupy the same space. To fix this, there should be some time between each overlap event.

1. In the ``||sprites:on overlap||`` event, set ``||sprites:otherSprite||`` to be a ``||sprites:ghost||``. This will cause the duck to stop interacting with the player
2. Make the game ``||loops:pause||`` for 500 ms after setting the duck to be a ghost
3. Turn ``||sprites:ghost||`` off after the pause is finished, so that the duck can overlap again

## Student Task #2: Add Collectibles

Without some sort of objective beyond avoiding ducks, the game is a bit tedious. To fix this, add sprites for the player to try and collect.

1. Create an ``||game:on game update every 4000 ms||`` event, which spawns a sprite. Make sure the sprite is `16x16`, and set the ``||sprites:kind||`` to `Collectible`
2. Duplicate the ``||sprites:set projectile y to||`` that sets the ``Enemy``'s ``||sprites:y||`` position, and make it position the ``Collectible`` in a random row on the screen
3. Duplicate the previous step. Change ``||sprites:set projectile y to||`` to ``||sprites:set projectile x to||``, so that it chooses a random column, and change the ``7`` to a ``9``, because the screen is wider than it is tall
4. Add an ``||sprites:overlap||`` event between the ``Player`` and a ``Collectible``, which adds 1 to ``||info:life||`` and ``||sprites:destroy||``s the ``Collectible``

## Student Task #3: Polish up the Game

After playing the game, you might notice that there are a few things that don't seem quite right. For example,

* The ``Collectible``s and ``Enemy``s can show up partially off screen
* The ``Enemy``s ignore the ``Collectible``s, making it fairly easy to collect them

Let's fix these issues.

1. To stop the ``Collectibles`` from showing up off screen, we can change the range of positions they can be created at. In this case, if the random value is 0 for either position, the sprite will be only half visible, so that should not be an option
    * When setting the ``||sprites:y||`` position, change the random value to be between 1 and 7
    * When setting the ``||sprites:x||`` position, change the random value to be between 1 and 9
2. The same fix should be done for the ``Enemy``, as they will also appear off screen if the random value is 0
3. To make the game harder, add an ``||sprites:on overlap||`` event between ``Enemy``s and ``Collectible``s. Make the event destroy the ``Collectible``, and have the ``Enemy`` gloat about collecting the item using ``||sprites:say||``
