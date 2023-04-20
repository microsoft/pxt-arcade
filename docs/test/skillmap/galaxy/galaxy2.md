# Send the Info!

## Introduction @showdialog

Are you ready to add to your Adventure?

In this tutorial, you'll add the ability to make it look like you're sending
information to satellites
when the (A) button is pressed.

![Releasing projectiles](/static/skillmap/space/spacet2.gif "Here, enemy ship. Would you like to borrow a blaster?")


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
    projectile = sprites.createProjectileFromSprite(assets.image`101`, myShip, 0, -150)
})
```



## {Step 4}

**Give it a try!**

- :binoculars: Bring your mouse over to the game screen.

Press the (A) button or space bar as fast as you can to send information flying through the galaxy.



## {5. Add Satellites}

**Add the Satellites**<br/>
🛰️ 🛰️ 🛰️

Let's add code that will send in satellites every couple of seconds.

---

- :circle: From ``||game: Game||``, drag the<br/>
``||game:on game update every [500] ms||``<br/>
bundle into **an empty area** of the workspace.


- :paint brush: Click the empty box and switch to the **Gallery** to choose
the **Satellite** image.


Now, satellites will fall from the sky every 2000ms (2 seconds)
from a random horizontal location. Each one will be of kind **Satellite**.


```blocks
game.onUpdateInterval(2000, function () {
    let mySat = sprites.createProjectileFromSide(img`
        . . . .
        . . . .
        . . . .
        . . . .
        `, 0, 50)
    mySat.x = randint(5, 155)
    mySat.setKind(SpriteKind.Satellite)
})
```



## {8. Upload}

**Upload and fly away. **

When the information projectiles overlap the satellites,
we want the satellites to register the upload, then fly away.

---

- :paper plane: From ``||sprites:Sprites||``, drag the<br/>
``||sprites:on [sprite] of kind [Player] overlaps [othersprite] of kind [Player]||``<br/>
bundle into **an empty area** of the workspace.

- :mouse pointer: Change the last value from ``||sprites:Player||`z` to ``||sprites:Enemy||``.

---

_💡 Don't try to change "sprite" → "mySprite" or "otherSprite" → "myEnemy".
The variable "sprite" is the **Player** sprite (our Rocket) and the "otherSprite" variable is the specific **Enemy** sprite that our **Player** overlapped with._

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {

})
```





## {Finale}

🎆 **Congratulations** 🎆

---

You can now use the direction buttons to move your space plane and
press **Ⓐ** to lauch projectiles!

~hint How do I share my project?💡

---

**Want to share your project?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/galaxy/share.gif )

hint~

Play your game on the game screen, then click **Done** to return to the main skillmap where you can carry on to find out how to add enemies to your project!


```blockconfig.global

    //% isKind
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
galaxy-imgs=github:kiki-lee/galaxy-imgs#v0.0.5
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
    //% isKind
    namespace SpriteKind {
        export const Satellite = SpriteKind.create()
    }
    let myShip: Sprite = null
    scene.setBackgroundImage(img`.`)
    scroller.scrollBackgroundWithSpeed(0, 10)
    myShip = sprites.create(img`.`, SpriteKind.Player)
    controller.moveSprite(myShip, 100, 100)
    myShip.setStayInScreen(true)
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