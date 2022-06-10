# Activity: Arrays of Sprites

So far we have used arrays of numbers and strings. We will see that arrays can be used with any variable type, including sprites.

In this activity, we will use arrays of sprites to create unique behaviors for the characters in our games, as well as introduce the basics of artificial intelligence for our enemy characters.

In this activity, students will:
* Create arrays of sprites
* Interact with multiple sprites using arrays
* Use ``||sprites:array of sprites of kind||``
* Implement "following" behavior for enemies

## Concept: Creating Sprite Arrays

Creating arrays of sprites follow a similar process as creating arrays of numbers or strings. Start with a new array (e.g.- of numbers), and then replace all of the numbers within the array with sprites.

![creating an array of sprites](/static/courses/csintro2/arrays/create-sprite-array.gif)

A sprite array is useful when implementing the same behavior for several sprites at once.

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40546a-array-sprite1)

## Example #1: Moving all Asteroids

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "Sprite Arrays")

```blocks
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
}
let my_sprite_array: Sprite[] = []
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of my_sprite_array) {
        value.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    }
})
my_sprite_array = [sprites.create(img`
. . . . . . . . . c c 8 . . . .
. . . . . . 8 c c c f 8 c c . .
. . . c c 8 8 f c a f f f c c .
. . c c c f f f c a a f f c c c
8 c c c f f f f c c a a c 8 c c
c c c b f f f 8 a c c a a a c c
c a a b b 8 a b c c c c c c c c
a f c a a b b a c c c c c f f c
a 8 f c a a c c a c a c f f f c
c a 8 a a c c c c a a f f f 8 a
. a c a a c f f a a b 8 f f c a
. . c c b a f f f a b b c c 6 c
. . . c b b a f f 6 6 a b 6 c .
. . . c c b b b 6 6 a c c c c .
. . . . c c a b b c c c . . . .
. . . . . c c c c c c . . . . .
`, SpriteKind.Asteroid), sprites.create(img`
. . . . . . . . . c c 8 . . . .
. . . . . . 8 c c c f 8 c c . .
. . . c c 8 8 f c a f f f c c .
. . c c c f f f c a a f f c c c
8 c c c f f f f c c a a c 8 c c
c c c b f f f 8 a c c a a a c c
c a a b b 8 a b c c c c c c c c
a f c a a b b a c c c c c f f c
a 8 f c a a c c a c a c f f f c
c a 8 a a c c c c a a f f f 8 a
. a c a a c f f a a b 8 f f c a
. . c c b a f f f a b b c c 6 c
. . . c b b a f f 6 6 a b 6 c .
. . . c c b b b 6 6 a c c c c .
. . . . c c a b b c c c . . . .
. . . . . c c c c c c . . . . .
`, SpriteKind.Asteroid), sprites.create(img`
. . . . . . . . . c c 8 . . . .
. . . . . . 8 c c c f 8 c c . .
. . . c c 8 8 f c a f f f c c .
. . c c c f f f c a a f f c c c
8 c c c f f f f c c a a c 8 c c
c c c b f f f 8 a c c a a a c c
c a a b b 8 a b c c c c c c c c
a f c a a b b a c c c c c f f c
a 8 f c a a c c a c a c f f f c
c a 8 a a c c c c a a f f f 8 a
. a c a a c f f a a b 8 f f c a
. . c c b a f f f a b b c c 6 c
. . . c b b a f f 6 6 a b 6 c .
. . . c c b b b 6 6 a c c c c .
. . . . c c a b b c c c . . . .
. . . . . c c c c c c . . . . .
`, SpriteKind.Asteroid)]
```

## Student Task #1: Moving a Random Asteroid

1. Start with the code from example #1
2. Instead of moving every asteroid, select a random asteroid from ``||variables:my sprite array||`` and move only that asteroid when the ``||controller:A||`` button is pressed
3. **Challenge:** choose another random asteroid, and have it ``||sprites:say||`` "woosh" for 300 ms. Are the two randomly chosen asteroids the same? (Can they be the same?)

## Concept: Arrays from Functions

Building arrays by adding in values is a common and useful coding pattern. Arrays can be even more useful when they are returned by functions. For instance, a function could return multiple related values at once.

The ``||sprites:array of sprites of kind||`` block (located in the ``||arrays:arrays||`` category) is one example of a function that will return an array with all of the sprites currently in the game of a particular ``||sprites:kind||``. This makes it easier to implement behaviors for several sprites like we did in example #1, especially as  sprites are continually created and destroyed as we play the game.

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40546a-array-sprite2)

## Example #2a: Using ``||sprites:array of sprites of kind||``

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "Sprite of Kind Arrays")

```blocks
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
}
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.Asteroid)) {
        value.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    }
})
for (let i = 0; i < 10; i++) {
    mySprite = sprites.create(img`
. . . . . . . . . c c 8 . . . .
. . . . . . 8 c c c f 8 c c . .
. . . c c 8 8 f c a f f f c c .
. . c c c f f f c a a f f c c c
8 c c c f f f f c c a a c 8 c c
c c c b f f f 8 a c c a a a c c
c a a b b 8 a b c c c c c c c c
a f c a a b b a c c c c c f f c
a 8 f c a a c c a c a c f f f c
c a 8 a a c c c c a a f f f 8 a
. a c a a c f f a a b 8 f f c a
. . c c b a f f f a b b c c 6 c
. . . c b b a f f 6 6 a b 6 c .
. . . c c b b b 6 6 a c c c c .
. . . . c c a b b c c c . . . .
. . . . . c c c c c c . . . . .
`, SpriteKind.Asteroid)
}
```

## Example #2b: Fireworks

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "Firework")

```blocks
namespace SpriteKind {
    export const Firework = SpriteKind.create();
}
let firework: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let i = 0; i < 30; i++) {
        let projectile = sprites.createProjectile(img`
1
`, randint(-100, 100), randint(-100, 100), SpriteKind.Player, firework)
        projectile.setFlag(SpriteFlag.Ghost, true)
        projectile.image.fill(randint(1, 14))
    }
    firework.destroy()
})
firework = sprites.create(img`
1 1 1
1 2 1
1 1 1
`, SpriteKind.Firework)
firework.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
firework.setFlag(SpriteFlag.Ghost, true)
```

The example above creates a firework at a random position on the screen, and then on any button press sets the firework off. The ``||images:fill image with||`` block is used to randomize the color of the projectiles, so that each firework is more magnificent. It has a few problems as written, though:

* The firework can be set off again, creating an explosion from nothing
* You can only really make one firework (try putting a repeat loop and identify what will cause it to behave incorrectly)

Using ``||sprites:array of sprites of kind||``, we can easily address both of these issues.

## Student Task #2: Bigger and Better Fireworks

1. Start with the code from example #2b
2. Add a ``||loops:repeat||`` loop in the ``||loops:on start||`` that will create 100 fireworks (hint: make sure to surround all three blocks in the ``||loops:on start||``, to maintain the same behavior for all fireworks)
3. Use ``||sprites:array of sprites of kind||`` block to get an array of all the fireworks in the ``||controller:on any button pressed||`` event, and store it in the variable ``||variables:sprite list||``
4. Add an ``||logic:if||`` condition around the rest of the ``||controller:on any button pressed||``, so that the rest of the event only occurs if the ``||arrays:length of array sprite list||`` is greater than 0
5. Select a firework from ``||variables:sprite list||`` at random, and store that in the variable ``||variables:origin||``. Replace all references to ``||variables:firework||`` in the event to refer to this new variable
6. **Challenge:** change the ``||controller:on any button pressed||`` event to only trigger when the ``||controller:A||`` button is pressed, and make a ``||controller:on B button pressed||`` event that will create a new firework. Make sure to use either a ``||functions:function||`` or an ``||sprites:on created sprite of kind||`` event to reduce the redundancy between the new event and the ``||loops:on start||`` block

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40546a-array-sprite2task)

## Example #3: Tracking with a Single Sprite

It is fairly common to want sprites to follow other sprites; for example, enemy sprites that want to damage the player, or faithful ally accompanying the player on an adventure.

We can implement this behavior easily using ``||logic:logic||`` blocks in an ``||game:on game update||`` event.

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the task (name it "itsFollowing")

```blocks
let enemy: Sprite = null
let player: Sprite = null
player = sprites.create(img`
1 . . . 1
1 . . . 1
. . . . .
. . . . .
1 . . . 1
. 1 1 1 .
`, SpriteKind.Player)
controller.moveSprite(player, 100, 100)
enemy = sprites.create(img`
2 . . 2
. . . .
. 2 2 .
2 . . 2
`, SpriteKind.Enemy)
enemy.x += randint(-40, 40)
enemy.y += randint(-40, 40)
game.onUpdate(function () {
    if (player.x > enemy.x) {
        enemy.vx = 2
    } else {
        enemy.vx = -2
    }
    if (player.y > enemy.y) {
        enemy.vy = 2
    } else {
        enemy.vy = -2
    }
})
```

This is also a great occasion to use arrays - that way, we can have more than a single enemy follow the player.

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40546a-array-sprite3)

## Student Task #3: Tracking with All Sprites of a Kind

1. Start with the code from example #3
2. Add a ``||loops:repeat 20 times||`` loop that creates 20 enemies in random positions on the screen
3. In the ``||game:on game update||`` event, use ``||sprites:array of sprites of kind Enemy||`` in a loop to make all the enemies follow the player, not just the last one that was created
4. **Challenge:** add an ``||sprites:on overlap||`` event between two enemies, that moves both enemies between -2 and 2 pixels in both directions, so that the enemies no longer stack on top of each other

## What did we learn?

1. How could using arrays of sprites influence the way you design games? List at least **two** ways.
2. How is using ``||sprites:array of sprites of kind||`` easier than keeping track of all the sprites in an array manually?

### [Teacher Material](/courses/csintro2/about/teachers)
