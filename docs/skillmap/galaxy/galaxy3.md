# Here Comes Trouble

## Introduction @showdialog

**Intergalactic travel can be dangerous!**

Let's add some asteroids for your ship to avoid.

![Navigating](/static/skillmap/galaxy/galaxy3.gif "Outta the way!")


## {2. Enemy Rain}

**Watch out for Asteroids!**<br/>
☄️ ☄️ ☄️

Let's add code to drop asteroids toward the ship every few seconds.

---

- :circle: From ``||game: Game||``, drag the<br/>
``||game:on game update every [3000] ms||``<br/>
bundle into **an empty area** of the workspace.


- :paint brush: Click the empty box and switch to the **Gallery** to choose
the **Asteroid** image.


Do you see how similar this is to the code that created our satellites?


```blocks

game.onUpdateInterval(3000, function () {
    let myRock = sprites.createProjectileFromSide(galaxyimgs.Asteroid, 0, 90)
    myRock.x = randint(5, 155)
    myRock.setKind(SpriteKind.Enemy)
})
```


## {3. Collision}

**Collision Imminent!**

Add code that tells the computer what to do when the
asteroid (**Enemy**) overlaps the ship (**Player**).

---

- :paper plane: From ``||sprites:Sprites||``, drag the<br/>
``||sprites:on [sprite] of kind [Enemy] overlaps [othersprite] of kind [Player]||``<br/>
bundle into **an empty area** of the workspace.

This bundle detects when an asteroid overlaps the player's ship,
then it destroys the asteriod and subtracts a life.


```blocks

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
```



## {4. Shake}

**Add Some Drama**

The game looks better when you add a little flair.

---

- :tree: From ``||scene:Scene||``, drag<br/>
``||scene:camera shake by [4] pixels for [500] ms ||`` <br/>
into **the top** of the<br/>
``||sprites(noclick):on [sprite] of kind [Enemy] overlaps [othersprite] of kind [Player]||``<br/>
bundle already in the workspace.

Now your ship will shake if it gets hit by an asteroid.


```blocks

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    //@highlight
    scene.cameraShake(4, 500)
    sprite.destroy()
    info.changeLifeBy(-1)
})
```


## {5. Sparks}

**Add Sparks**

---

- :tree: Look inside of the<br/>
``||sprites(noclick):on [sprite] of kind [Enemy] overlaps [othersprite] of kind [Player]||``<br/>
bundle already in the workspace and click the plus (+) to the right of the <br/>
``||sprites(noclick):destroy [sprites] + ||`` <br/>
block.

- :mouse pointer: Choose an effect for your asteroid. Try having it **disintigrate** or disappear in **fire**.

- :mouse pointer: Change the effect time to **100** to keep it short and sweet.


```blocks

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    //@highlight
    sprite.destroy(effects.ashes, 100)
    info.changeLifeBy(-1)
})
```



## {6. Win}

**Add a Mission**

NASA needs you to update 20 satellites before you can win!

---

- :id card: From ``||info:Info||``, drag the<br/>
``||info:on score [20]||``<br/>
bundle into **an empty area** of the workspace

Now, you will win the game if your score gets to 20 before you run out of lives!


```blocks
info.onScore(20, function () {
    game.gameOver(true)
})
```


## {7. Animate}

**Animate the Game**

You can add animations to any of your sprites
by dragging an ``||animation:Animation||`` block
into the end of the event where it is created.

---

- :chevron up: Click on **Advanced** to reveal the ``||animation:Animation||`` menu.

- :sync: From ``||animation:Animation||``, drop the<br/>
``||animation:animate [myShip]||``<br/>
block inside and **at the end of** of the ``||loops(noclick):on start||`` container already in the workspace.

- :mouse pointer: Click the empty box to choose your animated ship.


```blocks
    let myShip: Sprite = null
    scene.setBackgroundImage(galaxyimgs.Galaxy)
    scroller.scrollBackgroundWithSpeed(0, 10)
    myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
    controller.moveSprite(myShip, 100, 100)
    myShip.setStayInScreen(true)
    //@highlight
    animation.runImageAnimation(
        myShip,
        [img`
    .......99.......
    ......9119......
    .....911119.....
    .....116a11.....
    .....16cca1.....
    .....11cc11.....
    ....11111111....
    ....961111a9....
    ...96f1111fa9...
    ...9ff1111ff9...
    ..96ff1111ffa9..
    ..9fff1111fff9..
    .96fff1111fffa9.
    .96f.ffffff.fa9.
    .d....aaaa....9.
    ......4554......
    .....4.44.4.....
    ....4.5455.4....
    ........4.......
    ................
    ................
    ................
    `],
        100,
        true
    )
```





## {Step 8}

**Try your activity!**

- :binoculars: Click on the game screen.

You should see fire coming out of your engines, and you should notice your ship shake whenever an asteroid hits it.




## {9. Animate More}

Can you figure out how to animate your satellites and asteroids?

---

- :sync: From ``||animation:Animation||``, drop the<br/>
``||animation:animate [myShip]||``<br/>
block into **the end of** of the ``||game(noclick):on game update||`` container
where your sprite is created.

- :mouse pointer: Change ``||variables(noclick):myShip||`` to the name of the sprite you're
trying to animate, then click the empty box to **choose your animation**.


```blocks
game.onUpdateInterval(3000, function () {
    let myRock = sprites.createProjectileFromSide(galaxyimgs.Asteroid, 0, 90)
    myRock.x = randint(5, 155)
    myRock.setKind(SpriteKind.Enemy)
    //@highlight
    animation.runImageAnimation(
        myRock,
        [img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . c c c . . . . . .
    . . . . . . a b a a . . . . . .
    . . . . . c b a f c a c . . . .
    . . . . c b b b f f a c c . . .
    . . . . b b f a b b a a c . . .
    . . . . c b f f b a f c a . . .
    . . . . . c a a c b b a . . . .
    . . . . . . c c c c . . . . . .
    . . . . . . . c . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `],
        100,
        true
    )
```



## {Step 10}

**You've done it!**

- :binoculars: Click on the game screen to try your finished activity.

Can you see your animations?

Try to update all 20 satellites before you run out of lives!





## {13. Finale}

**Congratulations**

---

You have written the code that will let you **Save the Galaxy**!

~hint How do I share my project?💡

---

**Want to share your project?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/galaxy/share.gif )

hint~


When you're ready, click **Done** to return to the main skillmap
where you can share your activity or modify it with a full toolbox!



```blockconfig.global
game.onUpdateInterval(3000, function () {
    let myRock = sprites.createProjectileFromSide(img`
        . . . .
        . . . .
        . . . .
        . . . .
        `, 0, 90)
    myRock.x = randint(5, 155)
    myRock.setKind(SpriteKind.Enemy)
})

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
})

    scene.cameraShake(4, 500)

info.onScore(20, function () {
    game.gameOver(true)
})

animation.runImageAnimation(
myShip,
[img`.`],
100,
true
)

```



```package
arcade-background-scroll=github:microsoft/arcade-background-scroll
galaxy-imgs=github:kiki-lee/galaxy-imgs#v0.0.9
```



```ghost

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Dart1`, myShip, 0, -150)
    projectile.startEffect(effects.fire)
})

let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let myShip: Sprite = null
scene.setBackgroundImage(assets.image`Galaxy`)
scroller.scrollBackgroundWithSpeed(0, 10)
myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
controller.moveSprite(myShip, 100, 100)
myShip.setStayInScreen(true)

game.onUpdateInterval(2000, function () {
    mySat = sprites.createProjectileFromSide(assets.image`Satellite`, 0, 50)
    mySat.x = randint(5, 155)
})

myShip.y = 100

sprites.onOverlap(SpriteKind.Satellite, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    otherSprite.sayText("Uploading...")
    otherSprite.setVelocity(-30, -30)
})

    scene.cameraShake(4, 500)

    animation.runImageAnimation(
mySprite,
assets.animation`BowieAnimated`,
100,
true
)
```


```template
    let myShip: Sprite = null
    scene.setBackgroundImage(galaxyimgs.Galaxy)
    scroller.scrollBackgroundWithSpeed(0, 10)
    myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
    controller.moveSprite(myShip, 100, 100)
    myShip.setStayInScreen(true)


sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Satellite, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    otherSprite.sayText("Uploading...")
    otherSprite.setVelocity(-30, -30)
})

game.onUpdateInterval(2000, function () {
    let mySat = sprites.createProjectileFromSide(galaxyimgs.Satellite, 0, 50)
    mySat.x = randint(5, 155)
    mySat.setKind(SpriteKind.Satellite)
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(galaxyimgs.p101, myShip, 0, -150)
})

```


```customts
    namespace SpriteKind {
      //% isKind
        export const Satellite = SpriteKind.create()
    }
```


```simtheme
{
    "palette": [
        "#000000",
        "#FFFFFF",
        "#FF92BA",
        "#993648",
        "#FF8135",
        "#FFF76B",
        "#0BA6B1",
        "#FFB5AF",
        "#003FAD",
        "#87F2FF",
        "#8E2EC4",
        "#A4839F",
        "#5C406c",
        "#C0C0C0",
        "#180A42",
        "#001E57"
    ]
}
```