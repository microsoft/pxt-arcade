# Activity: Projectile Sprites

Projectiles are regular sprites that destroy themselves when they go off of the visible screen. Projectile sprite blocks also expose the properties for velocity (``||sprites:vx||`` & ``||sprites:vy||``) when they are created.

Depending on the game, a projectile can be dangerous, friendly, or even just a decoration that floats across the screen.

Typically, we use projectiles because we want movement for meteors, laser beams, cars, or whatever we decide we need in our games. In many games, a large number of projectiles are created, so the ability for them to be automatically destroyed as they leave the screen will often be very helpful in making sure our games run efficiently.

In this activity, students will use:

* ``||sprites:projectile from side||`` sprites
* ``||game:on game update every||``
* ``||math:pick random||``
* ``||loops:for||`` loop 

## Concept: Flying Birds!

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40544a-projectiles1)

We can use projectiles to create sprites that move across the screen. Let's start off by making a simple bird projectile.

### Example #1: Bird projectile

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "Bird Projectile 1") 
4. Look for what portion of the blocks makes the bird move across the screen, instead of just staying still

```blocks
let projectile: Sprite = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 . . . 8 8 . . 
. . . . . 8 8 8 8 8 . 8 8 8 . . 
. . . . . 8 8 f 8 8 8 8 8 f 8 . 
. . . . . 8 8 8 f f 8 8 8 8 4 4 
. . . . . . 8 8 8 f 8 8 8 8 8 . 
. . . . . . . 8 8 8 8 3 3 3 . . 
. . . . . . 8 8 8 8 8 3 3 3 . . 
. . . . . . 8 8 8 8 8 3 3 . . . 
. . . . . . . 8 f . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
```

It may seem surprising that there's only a single block inside the ``||loops:on start||`` to create a projectile. Projectiles are an easy way to create temporary sprites with motion. 

```blocks 

let projectile: Sprite = null
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 . . . 8 8 . . 
. . . . . 8 8 8 8 8 . 8 8 8 . . 
. . . . . 8 8 f 8 8 8 8 8 f 8 . 
. . . . . 8 8 8 f f 8 8 8 8 4 4 
. . . . . . 8 8 8 f 8 8 8 8 8 . 
. . . . . . . 8 8 8 8 3 3 3 . . 
. . . . . . 8 8 8 8 8 3 3 3 . . 
. . . . . . 8 8 8 8 8 3 3 . . . 
. . . . . . . 8 f . . f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
```

This modified version adds in an event that triggers when the projectile is destroyed - you should see that when the sprite goes off the screen, it is actually destroyed automatically!

### ~hint

Notice that the ``||sprites:kind||`` of the ``||sprites:projectile||`` is ``Projectile``; this can be changed using the ``||sprites:set mySprite kind to Player||`` block.

### ~

``||sprites:auto destroy||`` is available for all sprites using the ``||sprites:set sprite auto destroy on||`` flag, but projectiles have it added in for you automatically. 

``||sprites:projectile from side||`` are created from the side of the screen opposite their initial speed, so that they can move across the screen. Projectiles need to have speed, so if none is set (that is, ``||sprites:vx||`` and ``||sprites:vy||`` are both 0), a random velocity will be assigned.

## Student Task #1: Make a ball fall down

...and then another ball going up!

1. Start with the provided code below
2. Modify the code so that the ball falls down the screen at a rate of **50** instead of **100**
3. Create a second projectile that goes up the screen at a rate of 50 (moving in the direction opposite the ball)
4. **Challenge:** when the two projectiles overlap one another, have them ``||sprites:say||`` hello to each other

```blocks
let projectile: Sprite = null
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . 8 9 8 9 9 9 8 9 8 . . . . 
. . 8 9 9 8 9 8 9 8 9 9 8 . . . 
. . . 8 9 8 9 9 9 8 9 8 . . . . 
. . . 8 9 8 8 8 8 8 9 8 . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . . . 8 8 9 8 8 . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 100)
```

## Concept: Projectile Loop

Games often create many projectiles, one after another. We can create multiple projectiles of the same kind inside the body of an update loop.

### Example #2: Projectile Loop

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40544a-projectiles2)

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "Random Dodge") 

This example randomly places the projectiles on the screen with a random velocity.

```blocks
let projectile: Sprite = null
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.y = 100
controller.moveSprite(mySprite, 100, 0)
game.onUpdateInterval(200, function () {
    projectile = sprites.createProjectileFromSide(img`
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
d d d d d d d d 
`, 0, 0)
    projectile.x = Math.randomRange(0, scene.screenWidth())
})
```

## Student Task #2a: Add vertical projectiles that move down the screen

1. Start with the example above. Currently, it will spawn meteors of ``||sprites:kind||`` ``Projectile`` that stay in random locations along the top of the screen
2. Replace the ``||game:on update||`` with a ``||loops:repeat||`` loop in the ``||loops:on start||`` block
3. Each time a projectile is created, add one (1) point to the score using the ``||info:change score by||`` block
4. Modify the ``||sprites:create projectile||`` block so that each spawned meteor moves down the screen at a rate of 50
5. **Challenge:** instead of moving at the current constant rate of 50, make the projectile move at a random rate between 40 and 60

## Student Task #2b: Offset Projectiles

![spiral image](/static/courses/csintro1/loops/offset-projectiles-2b.png)

We have seen that it is useful for projectiles to come from random positions, but there are times when we'll want to have projectiles spawned in a more structured manner. This tasks uses a loop to offset the `Y` position of each projectile using a ``||loops:for||`` loop index. 

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "screenFill")
4. Move the code in the ``||loops:on start||`` block into a ``||loops:for index from 0 to 12||`` block, to create 13 projectiles, one every 300 ms
5. Modify the ``||sprites:set projectile y to||`` block to set the projectiles' ``||sprites:y||`` position to the value `10 * index`, so that they start further down the screen on each iteration

```blocks
let projectile: Sprite = null
projectile = sprites.createProjectileFromSide(img`
. 6 . . . . . . . . . . . . . . 
. 6 6 . . . . . . . . . . . . . 
. 6 . 6 . . . . . . . . . . . . 
. 6 . . 6 . . . . . . . . . . . 
. 6 6 6 6 6 6 6 6 . . . . . . . 
. 6 8 8 8 8 8 8 8 6 . . . . . . 
. 6 8 6 6 6 6 6 6 8 6 . . . . . 
. 6 8 6 6 6 6 6 6 6 8 6 . . . . 
. 6 8 6 6 6 6 6 6 8 6 . . . . . 
. 6 8 8 8 8 8 8 8 6 . . . . . . 
. 6 6 6 6 6 6 6 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 40, 0)
projectile.y = 10
pause(300)
```

## Concept: Projectiles from Corners

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40544a-projectiles3)

Projectiles with only a ``||sprites:y||`` velocity will start on the top or bottom of the game screen, and projectiles with only a ``||sprites:x||`` velocity will start from the left or right by default. If the projectile has both an ``||sprites:x||`` and ``||sprites:y||`` velocity, they will start from one of the corners.

### Example #3: Projectile from a corner

1. Review the code below
2. Create the sample code and run the code
3. Notice how the **initial velocities** of the ``||sprites:projectile||`` relate to it's **initial position**
4. Save the code for the task (name it "Top Left")

```blocks
let projectile: Sprite = null
projectile = sprites.createProjectileFromSide(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, 10, 10)
```

## Task #3: Projectile from upper right corner

1. Create the example code above 
2. Modify the code to make the sprite start from the upper right corner by default and move toward the lower left corner 
3. Place the code in a loop to repeat 4 times with a short pause between loop iterations
4. **Challenge:** inside the loop, make sprites originate from each of the 4 corners of the screen

## What did we learn?

1. Describe two benefits of using projectiles rather than normal sprites. 
2. How did using a loop in this section help reduce the amount of blocks that were used? 

### [Teacher Material](/courses/csintro1/about/teachers)
