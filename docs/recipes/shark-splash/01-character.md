# Create a Hero

## Introduction @unplugged

**Let's make a game!**
<hr/>

First, we'll create a main character that shoots projectiles.  
That could be a shark that shoots bubbles, a monkey that tosses bananas, 
or a cat that spits hairballs--it's up to you!

![Shark bubbles](/static/recipes/shark-splash/shark1.gif)

## Set the scene

🌊 First, let's set the scene 🌊
<hr/>

🔲 From the ``||scene:Scene||`` category, drag out the 
``||scene:set background color to [ ]||`` block and snap it into the 
``||loops:on start||`` container that is already in your workspace.

 🔲 Click inside the grey oval to choose a background color for your game.  
 <br/>

```blocks
// @highlight
scene.setBackgroundColor(8)
```

## Draw your hero

🎖️ Now, let's add a hero to the game 🎖️
<hr/>

🔲 From the ``||sprites:Sprites||`` category, drag out a
``||variables:set [mySprite] to sprite [ ] of kind [Player]||`` block and 
snap it into the bottom of the ``||loops:on start|`` container. 

🔲 Click on the grey box inside the new block to open the sprite editor.

🔲 Draw a character for your game or toggle to **Gallery** 
and choose one that has been created for you.

```blocks
scene.setBackgroundColor(8)
// @highlight
let mySprite = sprites.create(img`
...........fffcc...........
...........fbbbbcfffffffff.
............fbfffbbbbbbbbbf
............ffbbbbffb111bbf
..........ffcbbbbbff11111bf
.........fcccbcbcbb11cccc1f
ccccc...fcccbcbcbbb1c1c1cf.
cbbddccfccccbcbcbbb1333c...
.ccbddbcccccbbbbbbb1c333c..
..ccbbcccccccbbbbb11c133c..
..fccbffccccccbbbb111c31cc.
..fccf.cbbcccccbbbc111111c.
.fcbbf..cdddddfbbbc1111cc..
.fbbf....cdddfbbdbffccc....
fbbf......ccfbbdbf.........
fff.........fffff..........
`, SpriteKind.Player)
```

## Control your hero

Now, let's include a way to move the sprite with the controller buttons. 
<hr/>

🔲 From the ``||controller:Controller||`` category, drag a 
``||controller:move [mySprite] with buttons||`` block into the **bottom** of the 
``||loops:on start||`` container. 
<hr/>
** Now you can move your sprite around the screen!**  
Try it out in the simulator by clicking the joystick, using
the arrow keys on your keyboard or with the **W A S D** keys.

```blocks
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
...........fffcc...........
...........fbbbbcfffffffff.
............fbfffbbbbbbbbbf
............ffbbbbffb111bbf
..........ffcbbbbbff11111bf
.........fcccbcbcbb11cccc1f
ccccc...fcccbcbcbbb1c1c1cf.
cbbddccfccccbcbcbbb1333c...
.ccbddbcccccbbbbbbb1c333c..
..ccbbcccccccbbbbb11c133c..
..fccbffccccccbbbb111c31cc.
..fccf.cbbcccccbbbc111111c.
.fcbbf..cdddddfbbbc1111cc..
.fbbf....cdddfbbdbffccc....
fbbf......ccfbbdbf.........
fff.........fffff..........
`, SpriteKind.Player)
// @highlight
controller.moveSprite(mySprite)
```

## Spawn projectiles

**Time to blow some bubbles!** 
<hr/>

🔲 From the ``||controller:Controller||`` category, drag a 
``||controller:on [A] button [pressed]||`` container into the workspace.  

🔲 From ``||sprites:Sprites||``, drag out 
``||variables:set [projectile] to projectile [ ] from [mySprite] with vx [50] vy [50]||`` 
and snap it into the new container. 

🔲  Click on the grey square in your new block to open the 
sprite editor and draw your projectile. 

🔲 To keep the projectile from floating down as it moves, 
set the ``||sprites:vy||`` value to `0`.
<hr/>

Try shooting the projectile in the simulator using your keyboard or 
click the **A** button.


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

**Now that you have a hero character, you can go on to customize your game.**

Maybe you want to  
A) Add some villains to attack your character, or  
B) Bevelop the scene where your game takes place

The decision is up to you!

| |      | |      | |
|--|:----:|-- |:----:|--|
| &emsp;&emsp;&emsp;&emsp; | [![Enemies](/static/recipes/shark-splash/02-enemies.gif)](#recipe:/recipes/shark-splash/02-enemies) | &emsp;&emsp; | [![Background](/static/recipes/shark-splash/04-background.png)](#recipe:/recipes/shark-splash/04-background) | &emsp;&emsp;&emsp;&emsp; |
| | [**A) Create enemies**](#recipe:/recipes/shark-splash/02-enemies) | | [**B) Design a background**](#recipe:/recipes/shark-splash/04-background) | |
| | An enemy appears! Fight! | | Draw a world for your hero to explore | |
