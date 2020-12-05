# Create a Hero

## Introduction @unplugged

Let's make a game! 

First, we'll create a main character that shoots some projectiles. That could be a shark blowing bubbles...or maybe it's a monkey throwing bananas, or a cat that spits hairballs--it's up to you!

![Shark Bubbles](/static/recipes/shark-splash/sharkBite.gif)



## Set the scene

From ``||scene:Scene||``, drag the ``||scene:set background color||`` block into the ``||loops:on start||`` block on your workspace. Then select a background color for your game!

```blocks
// @highlight
scene.setBackgroundColor(8)
```

## Draw your hero

From ``||sprites:Sprites||``, drag the ``||variables:set mySprite to||`` block into ``||loops:on start|``. 
Click on the grey box in ``||variables:set mySprite to||`` and select **Gallery** in the image editor to choose your hero!

```blocks
scene.setBackgroundColor(8)
// @highlight
let mySprite = sprites.create(img`
....................ccfff...........
..........fffffffffcbbbbf...........
.........fbbbbbbbbbfffbf............
.........fbb111bffbbbbff............
.........fb11111ffbbbbbcff..........
.........f1cccc11bbcbcbcccf.........
..........fc1c1c1bbbcbcbcccf...ccccc
............c3331bbbcbcbccccfccddbbc
...........c333c1bbbbbbbcccccbddbcc.
...........c331c11bbbbbcccccccbbcc..
..........cc13c111bbbbccccccffbccf..
..........c111111cbbbcccccbbc.fccf..
...........cc1111cbbbfdddddc..fbbcf.
.............cccffbdbbfdddc....fbbf.
..................fbdbbfcc......fbbf
...................fffff.........fff
`, SpriteKind.Player)
```

## Control your hero

From the ``||controller:Controller||`` category, drag the ``||controller:move mySprite with buttons||`` block and drop it **after** ``||variables:set mySprite to||``. This will allow you to move your sprite around the screen. 

Try it out in the simulator using the arrow keys on your keyboard or by dragging the joystick.

```blocks
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
    img`
....................ccfff...........
..........fffffffffcbbbbf...........
.........fbbbbbbbbbfffbf............
.........fbb111bffbbbbff............
.........fb11111ffbbbbbcff..........
.........f1cccc11bbcbcbcccf.........
..........fc1c1c1bbbcbcbcccf...ccccc
............c3331bbbcbcbccccfccddbbc
...........c333c1bbbbbbbcccccbddbcc.
...........c331c11bbbbbcccccccbbcc..
..........cc13c111bbbbccccccffbccf..
..........c111111cbbbcccccbbc.fccf..
...........cc1111cbbbfdddddc..fbbcf.
.............cccffbdbbfdddc....fbbf.
..................fbdbbfcc......fbbf
...................fffff.........fff
`
`, SpriteKind.Player)
// @highlight
controller.moveSprite(mySprite)
```

## Spawn projectiles

Now let's have our hero shoot some projectiles! Find ``||controller:on A button pressed||`` in ``||controller:Controller||`` and drag it into the workspace.

```blocks
// @highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
})
```

## Draw your projectile

From ``||sprites:Sprites||`` drag ``||variables:projectile from mySprite||`` into the ``||controller:on A button pressed||``. Set the ``||sprites:vy||`` value to `0`, then click on the grey square to open the image editor and draw your projectile...or choose an image from the gallery. 

Once that's done, try shooting the projectile in the simulator using your the space key or the **A** button on the controller.

```blocks
let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // @highlight
    let projectile = sprites.createProjectileFromSprite(img`
        . . . 6 6 6 6 6 6 . . .
        . . 6 9 9 9 9 9 9 6 . .
        . 6 1 9 9 9 9 9 9 9 6 .
        f 1 9 9 9 9 1 1 9 9 9 6
        f 1 9 9 9 9 1 1 9 9 9 6
        f 1 9 9 9 9 9 9 9 9 9 6
        f 1 9 9 9 9 9 9 1 9 9 6
        f 1 9 9 9 9 9 9 9 9 9 6
        f 1 9 9 9 9 9 9 9 9 9 6
        . f 1 9 9 9 9 9 9 1 6 .
        . . f 1 1 1 1 1 1 f . .
        . . . f f f f f f . . .
    `, mySprite, 50, 0)
})
```

## Conclusion @unplugged

Now that you have a hero character, let's customize your game. Maybe you want to add some villains who are attacking your character, or maybe you want to develop the scene of your game--it's up to you!

| |      | |      | |
|--|:----:|-- |:----:|--|
| &emsp;&emsp;&emsp;&emsp; | [![Enemies](/static/recipes/shark-splash/02-enemies.gif)](#recipe:/recipes/shark-splash/02-enemies) | &emsp;&emsp; | [![Background](/static/recipes/shark-splash/04-background.png)](#recipe:/recipes/shark-splash/04-background) | &emsp;&emsp;&emsp;&emsp; |
| | [**Create enemies**](#recipe:/recipes/shark-splash/02-enemies) | | [**Design a background**](#recipe:/recipes/shark-splash/04-background) | |
| | An enemy appears! Fight! | | Draw a world for your hero to explore | |
