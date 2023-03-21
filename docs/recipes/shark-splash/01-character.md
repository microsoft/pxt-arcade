# Create a Hero

## {Introduction @unplugged}

Let's make a game! First, we'll create a main character that shoots some projectiles. Maybe that's a duck that shoots bubbles, or a monkey throwing bananas, or a cat that spits hairballs--it's up to you!

![Duck bubbles](/static/recipes/shark-splash/01-character.gif)

## {Set the scene}

From ``||scene:Scene||``, drag the ``||scene:set background color||`` block into the ``||loops:on start||`` block on your workspace and select a background color for your game.

```blocks
// @highlight
scene.setBackgroundColor(8)
```

## {Draw your hero}

From ``||sprites:Sprites||``, drag the ``||variables(sprites):set mySprite to||`` block into ``||loops:on start|``. Click on the grey box in ``||variables(sprites):set mySprite to||`` and then select **Gallery** in the image editor. Choose your hero!

```blocks
scene.setBackgroundColor(8)
// @highlight
let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b c . . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 5 d f . .
    . . . . b 5 5 1 f f 5 d 4 c . .
    . . . . b 5 5 d f b d d 4 4 . .
    b d d d b b d 5 5 5 4 4 4 4 4 b
    b b d 5 5 5 b 5 5 4 4 4 4 4 b .
    b d c 5 5 5 5 d 5 5 5 5 5 b . .
    c d d c d 5 5 b 5 5 5 5 5 5 b .
    c b d d c c b 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Player)
```

## {Control your hero}

From ``||controller:Controller||``, drag the ``||controller:move mySprite with buttons||`` block **after** ``||variables(sprites):set mySprite to||``. This will allow you to move your sprite around the screen. Try it out in the simulator using the arrow keys on your keyboard or by clicking the joystick.

```blocks
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b c . . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 5 d f . .
    . . . . b 5 5 1 f f 5 d 4 c . .
    . . . . b 5 5 d f b d d 4 4 . .
    b d d d b b d 5 5 5 4 4 4 4 4 b
    b b d 5 5 5 b 5 5 4 4 4 4 4 b .
    b d c 5 5 5 5 d 5 5 5 5 5 b . .
    c d d c d 5 5 b 5 5 5 5 5 5 b .
    c b d d c c b 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Player)
// @highlight
controller.moveSprite(mySprite)
```

## {Spawn projectiles}

Now lets have our hero shoot some projectiles! Find ``||controller:on A button pressed||`` in ``||controller:Controller||`` and drag it into the workspace.

```blocks
// @highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
})
```

## {Draw your projectile}

From ``||sprites:Sprites||`` drag ``||variables(sprites):projectile from mySprite||`` into the ``||controller:on A button pressed||``. Set the ``||sprites:vy||`` value to `0`, then click on the grey square to open the image editor and draw your projectile. Try shooting the projectile in the simulator using your keyboard or click the **A** button.

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

## {Conclusion @unplugged}

Now that you have a hero character, let's customize your game. Maybe you want to add some villains who are attacking your character, or maybe you want to develop the scene of your game--it's up to you!

| |      | |      | |
|--|:----:|-- |:----:|--|
| &emsp;&emsp;&emsp;&emsp; | [![Enemies](/static/recipes/shark-splash/02-enemies.gif)](#recipe:/recipes/shark-splash/02-enemies) | &emsp;&emsp; | [![Background](/static/recipes/shark-splash/04-background.png)](#recipe:/recipes/shark-splash/04-background) | &emsp;&emsp;&emsp;&emsp; |
| | [**Create enemies**](#recipe:/recipes/shark-splash/02-enemies) | | [**Design a background**](#recipe:/recipes/shark-splash/04-background) | |
| | An enemy appears! Fight! | | Draw a world for your hero to explore | |