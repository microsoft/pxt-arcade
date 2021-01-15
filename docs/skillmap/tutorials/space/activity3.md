# Adding Danger

## Introduction @unplugged

Intergalactic travel is dangerous!

Let's add some enemies for your ship to avoid.  
These could be asteroids, radioactive debris, or angry space sharks!

![Releasing projectiles](/static/skillmaps/space/projectiles.gif "Here, enemy ship. Would you like to borrow an asteroid?")


## Step 1

Feel like making enemies rain from the sky?

Let's add some code that will drop an enemy toward the ship every second or so.
<hr/> 
🔲 Add an ``||game:on game update every [500] ms||`` container to the workspace  

🔲 Change the last argument to **1000** [__*ms*__](#millis "milliseconds...aka 1/1000 of a second") 
(or pick **1 second** from the dropdown)    
<br/>

```blocks
game.onUpdateInterval(1000, function () {
})
```

## Step 2

🔲 Find the
``||variables:set [projectile2] to||`` ``||sprites:projectile [ ] from side with vx [50] vy [50]||`` block near the bottom of the ``||sprites:Sprites||`` category
and drag it into the ``||game:on game update every [1000] ms||`` container.

🔲 Click on the ``||variables:[projectile2]||`` argument inside the new block and 
select "Rename variable..."  

🔲 Change the variable name to ``||variables:myEnemy||`` so we know these are the baddies.  
<br/>
```blocks
let myEnemy: Sprite = null
game.onUpdateInterval(1000, function () {
    // @highlight
    myEnemy = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 50)
})
```

## Step 3
🎆 Let's get the enemies moving in the right direction 🎆

🔲 Click the grey square inside the new block to design your enemy  
(or choose one from the gallery).  

🔲 Play with the **vx** and **vy** values of **myEnemy** until 
your new sprites are falling straight down the side of the screen. 


```blocks
let myEnemy: Sprite = null
game.onUpdateInterval(1000, function () {
    // @highlight
    myEnemy = sprites.createProjectileFromSide(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 . . . . . . . . . . . . . . 2
        2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
        . 2 . 2 2 2 . . . . 2 2 2 . 2 .
        . 2 . 2 2 2 . 2 2 2 2 2 2 . 2 .
        . . 2 . 2 2 . . . 2 2 2 . 2 . .
        . . 2 . 2 2 . 2 2 2 2 2 . 2 . .
        . . . 2 . 2 . . . . 2 . 2 . . .
        . . . 2 . 2 2 2 2 2 2 . 2 . . .
        . . . . 2 . 2 2 2 2 . 2 . . . .
        . . . . 2 . 2 2 2 2 . 2 . . . .
        . . . . . 2 . 2 2 . 2 . . . . .
        . . . . . 2 . 2 2 . 2 . . . . .
        . . . . . . 2 . . 2 . . . . . .
        . . . . . . 2 . . 2 . . . . . .
        . . . . . . . 2 2 . . . . . . .
        `, 0, 50)
})
```

## Step 4


Enemies aren't likely to hit the ship if they're all the way off to the side, 
so let's add an element of surprise using [__*random numbers*__](#randos "numbers appearing seemingly without a predictable pattern") .
<hr/>

🔲 Connect a ``||sprites:set [mySprite] [x] to [0]||`` block at the 
bottom of the ``||game:on game update every [1000] ms||`` container.  

🔲 To make sure we're acting on the right sprites, use the dropdown in the 
new block to change ``||variables:mySprite||`` to ``||variables:myEnemy||``.

🔲 To set a random [__*x*__](#setX "horizontal location") 
for the enemies, grab a 
``||Math:pick random [0] to [10]||`` block from the ``||Math:Math||`` category
and connect it to replace the **0** argument in the  ``||sprites:set [mySprite] [x] to [0]||`` block.

🔲 Finally, update the minimum argument of the ``||Math:pick random [0] to [10]||`` block to **5** and the
maximum argument to **155**. 
<hr/>
>>*tip: The Arcade screen is 160px wide, 
so you could make your enemies fall anywhere between 0 and 160 
and still be able to see a piece of them.

```blocks
let myEnemy: Sprite = null
game.onUpdateInterval(1000, function () {
    myEnemy = sprites.createProjectileFromSide(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 . . . . . . . . . . . . . . 2
        2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
        . 2 . 2 2 2 . . . . 2 2 2 . 2 .
        . 2 . 2 2 2 . 2 2 2 2 2 2 . 2 .
        . . 2 . 2 2 . . . 2 2 2 . 2 . .
        . . 2 . 2 2 . 2 2 2 2 2 . 2 . .
        . . . 2 . 2 . . . . 2 . 2 . . .
        . . . 2 . 2 2 2 2 2 2 . 2 . . .
        . . . . 2 . 2 2 2 2 . 2 . . . .
        . . . . 2 . 2 2 2 2 . 2 . . . .
        . . . . . 2 . 2 2 . 2 . . . . .
        . . . . . 2 . 2 2 . 2 . . . . .
        . . . . . . 2 . . 2 . . . . . .
        . . . . . . 2 . . 2 . . . . . .
        . . . . . . . 2 2 . . . . . . .
        `, 0, 50)

    // @highlight
    myEnemy.x = randint(5, 155)
})
```


## Step 5

You might want to add lots of different kinds of enemies plummeting from above.
We can make sure they all have the same effect using the 
"**Enemy**" [__*class*__](#withClass "a label you give a particular group so you can refer to it later").
<hr/>
🔲 Snap a ``||sprites:set [mySprite] kind to [Player]||`` block into the bottom of the 
``||game:on game update every [1000] ms||`` container. 

🔲 Change ``||variables:mySprite||`` to ``||variables:myEnemy||``, then choose 
 ``||sprites:Enemy||`` as the kind.  
 <br/>


```blocks
let myEnemy: Sprite = null
game.onUpdateInterval(500, function () {
    myEnemy = sprites.createProjectileFromSide(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 . . . . . . . . . . . . . . 2
        2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2
        . 2 . 2 2 2 . . . . 2 2 2 . 2 .
        . 2 . 2 2 2 . 2 2 2 2 2 2 . 2 .
        . . 2 . 2 2 . . . 2 2 2 . 2 . .
        . . 2 . 2 2 . 2 2 2 2 2 . 2 . .
        . . . 2 . 2 . . . . 2 . 2 . . .
        . . . 2 . 2 2 2 2 2 2 . 2 . . .
        . . . . 2 . 2 2 2 2 . 2 . . . .
        . . . . 2 . 2 2 2 2 . 2 . . . .
        . . . . . 2 . 2 2 . 2 . . . . .
        . . . . . 2 . 2 2 . 2 . . . . .
        . . . . . . 2 . . 2 . . . . . .
        . . . . . . 2 . . 2 . . . . . .
        . . . . . . . 2 2 . . . . . . . 
        `, 0, 50)
    myEnemy.x = randint(5, 155)
    //@highlight
    myEnemy.setKind(SpriteKind.Enemy)
})
```




## Step 6


💥 Time to create some enemy behavior 💥

To add excitement to the game, let's make something happen when an enemy
collides with our ship. 
<hr/>

🔲 Drag an ``||sprites:on [sprite] of kind [Player] overlaps [othersprite] of kind [Player]||`` 
container into the workspace. 

🔲 Change the last argument from ``||sprites:Player||`` to ``||sprites:Enemy||``.
<hr/>
>>*Tip: Don't try to change "sprite" → "mySprite" or "otherSprite" → "myEnemy".
The "sprite" and "otherSprite" arguments here describe two general kinds of sprites on the screen
(not the specific creations we gave names to earlier.) 

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {

})
```

## Step 7

When the enemy collides with the ship, we want it to remove a life then disappear. 
<hr/>

🔲 Grab the ``||info:change life by [-1]||`` block from the ``||info:Info||`` category and snap it into the 
``||sprites:on [sprite] of kind [Player] overlaps [othersprite] of kind [Player]||`` container. 
That will remove one life from the player each time it is hit by an enemy.

🔲 Find the ``||sprites:destroy [mySprite] ⊕||`` block and snap it below the previous block. 

🔲 To tell the **destroy** block that you want it to affect the overlapping enemy, 
click on the ``||variables:otherSprite||`` variable from the top of the 
**overlaps** container and drag it down to replace the 
``||variables:mySprite||`` argument in ``||sprites:destroy [mySprite] ⊕||``.
![Grabbing variable from block](/static/skillmaps/space/give-var.gif "So that's how you do that!")
<hr/>
>*Tip: Click the __⊕__ on the ``||sprites:destroy [otherSprite] ⊕||`` block to get
a menu of effects to display upon your enemy's demise!*

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.spray, 500)
})
```

## Step 8

🌍 Time to save the world 🌏

Another **overlap** container will help our projectiles
destroy our enemies on impact.
<hr/>

🔲 Drag another ``||sprites:on [sprite] of kind [Player] overlaps [othersprite] of kind [Player]||`` 
container into the workspace.

🔲 Change the first kind to ``||sprites:Enemy||`` and the second kind to
``||sprites:Projectile||``. 

🔲 Inside, add two ``||sprites:destroy [mySprite] ⊕||`` blocks, then change the arguments
so that one destroys the enemy and the other destroys your projectile.
<hr/>
>*Tip: Don't forget to hit that __⊕__ button on the **destroy** block to get
some spectacular effects when your projectile makes contact!*

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.bubbles, 500)
    otherSprite.destroy(effects.smiles, 500)
})
```

```template
effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . . . . 9 9 . . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . . 9 . . 9 . . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . . 9 . 9 9 . 9 . . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . . 9 . 9 9 9 9 . 9 . . . .
    . . . 9 . 9 9 9 9 9 9 . 9 . . .
    . . . 9 . 9 . . . . 9 . 9 . . .
    . . 9 . 9 9 . 9 9 . 9 9 . 9 . .
    . . 9 . 9 9 . . . . 9 9 . 9 . .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 .
    9 . 9 9 9 9 9 9 9 9 9 9 9 9 . 9
    9 . . . . . . . . . . . . . . 9
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let projectile = sprites.createProjectileFromSprite(img`
3 3 3 3 3 3 3 3
3 . . . . . . 3
3 . 3 3 3 3 . 3
3 . 3 . . 3 . 3
3 . 3 . . 3 . 3
3 . 3 3 3 3 . 3
3 . . . . . . 3
3 3 3 3 3 3 3 3
    `, mySprite, 0, -70)
    projectile.startEffect(effects.fire);
})
```

```ghost
scene.cameraShake(4, 500)
```