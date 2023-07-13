# Communication is Key!

## Introduction @showdialog

Are you ready to add to your adventure?

In this tutorial, you'll add the ability to make it look like you're sending
information to satellites
when the (A) button is pressed.

![Releasing projectiles](/static/skillmap/galaxy/galaxy2.gif "Would you like my information?")


## {2. Try it Out}

**🚀 The workspace already has the code for a flying ship**

---

Play with your project in the game screen to make sure it works the way you expect.



## {3. Add a Button Event}

**Time for action!**

Let's launch projectiles when the (A) button is pressed!

~hint What are projectiles?💡

---

In MakeCode Arcade, projectiles are sprites that move on their own,
often in large quantities.

Projectiles have extra properties that normal sprites don't have.
For example, they destroy themselves once they leave the screen so
the user's computer doesn't get overwhelmed.

hint~

- :game: From ``||controller:Controller||``, drag the<br/>
``||controller:on [A] button pressed ||``<br/>
bundle into **an empty area** of the workspace.


- :paint brush: Click the empty box and switch to the **Gallery** to choose
the **101** image.


Now, when you press the **(A) button** (or space bar)
your ship will send information straight ahead.



```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(galaxyimgs.p101, myShip, 0, -150)
})
```



## {Step 4}

**Give it a try!**

- :binoculars: Click on the game screen.

Press the (A) button or space bar as fast as you can to send information flying through the galaxy.



## {5. Add Satellites}

**Add the Satellites**<br/>
🛰️ 🛰️ 🛰️

Let's add code that will launch satellites every couple of seconds.

---

- :circle: From ``||game: Game||``, drag the<br/>
``||game:on game update every [2000] ms||``<br/>
bundle into **an empty area** of the workspace.


- :paint brush: Click the empty box and switch to the **Gallery** to choose
the **Satellite** image.


Satellites should fall from the sky every 2000ms (2 seconds)
from a random horizontal location.


```blocks
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }
game.onUpdateInterval(2000, function () {
    let mySat = sprites.createProjectileFromSide(galaxyimgs.Satellite, 0, 50)
    mySat.x = randint(5, 155)
    mySat.setKind(SpriteKind.Satellite)
})
```



## {6. Upload}

**Information Received**

Add the code that tells the computer what to do when the information projectile overlaps the satellite.

---

- :paper plane: From ``||sprites:Sprites||``, drag the<br/>
``||sprites:on [sprite] of kind [Projectile] overlaps [othersprite] of kind [Satellite]||``<br/>
bundle into **an empty area** of the workspace.

This bundle detects when an information **projectile overlaps the satellite**,
then it destroys that projectile (as if the satellite uploaded the information)
and adds **1** to your score.


```blocks
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Satellite, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
})
```



## {7. Register the upload}

**Upload and Fly Away**

When information projectiles overlap the satellites,
we want the satellites to register the upload, then fly away.

---

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||sprites:[otherSprite] say ["Uploading..."]||``<br/>
into **the end** of the<br/>
``||sprites(noclick):on [sprite] of kind [Projectile] overlaps [othersprite] of kind [Satellite]||``<br/>
container already in your workspace.


This will cause your satellite to send the message "Uploading..." when it receives your information.

~hint Why "otherSprite" ? 💡

---

You may have noticed that when satellites are created, they're given the name "mySat",
but in our overlap event, we target them using the name "otherSprite".

This is because the name **mySat** is passed around between all of the satellites.
If you use that name, you won't know which one receives the command.

In our program, when a specific projectile overlaps a specific satellite,
we want to write code for those exact sprites.
That's why the overlap event provides the nicknames **sprite** and **otherSprite**.

The way we've written our code, **sprite** is the specific projectile we need and
**otherSprite**
is the specific satellite we need.

hint~


```blocks
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Satellite, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    otherSprite.sayText("Uploading...")
})
```



## {10. Fly Away}

To get the satellite to fly away after upload, you'll need to change its velocity.

---

- :paper plane: From ``||sprites:Sprites||``, drag<br/>
``||sprites:set [otherSprite] velocity to vx [-30] vy [-30]||``<br/>
into **the end** of the<br/>
``||sprites(noclick):on [sprite] of kind [Projectile] overlaps [othersprite] of kind [Satellite]||``<br/>
container already in your workspace.


This will cause your satellite to fly upward and to the left when it
receives your information.



```blocks
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Satellite, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    otherSprite.sayText("Uploading...")
    otherSprite.setVelocity(-30, -30)
})
```



## {Step 11}

**Try your activity!**

- :binoculars: Click on the game screen.

You should be able to send information to the satellites using the (A) button and when the satellite
receives information, it should say "Uploading..." and fly away while giving you a point.



## {Finale}

🎆 **Congratulations** 🎆

You can now earn points by sending information to satellites!

~hint How do I share my project?💡

---

**Want to share your project?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/galaxy/share.gif )

hint~

When you're ready, click **Done** to return to the main skillmap where
you can carry on to find out how to add asteroids to your project!


```blockconfig.global
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let projectile = sprites.createProjectileFromSprite(img`
. 1 .
. 1 .
. 1 .
. . .
. 1 .
1 . 1
1 . 1
. 1 .
. . .
. 1 .
. 1 .
. 1 .
`, myShip, 0, -150)
})

game.onUpdateInterval(2000, function () {
    let mySat = sprites.createProjectileFromSide(assets.image`Satellite`, 0, 50)
    mySat.x = randint(5, 155)
    mySat.setKind(SpriteKind.Satellite)
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Satellite, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
})
let otherSprite: Sprite = null
otherSprite.sayText("Uploading...")
otherSprite.setVelocity(-30, -30)
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
myShip = sprites.create(assets.image`Rocket`, SpriteKind.Player)
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

```


```template
    let myShip: Sprite = null
    scene.setBackgroundImage(img`.`)
    scroller.scrollBackgroundWithSpeed(0, 10)
    myShip = sprites.create(img`.`, SpriteKind.Player)
    controller.moveSprite(myShip, 100, 100)
    myShip.setStayInScreen(true)
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