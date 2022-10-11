# Space Explorer


## Introduction @showdialog

** Let's explore the depths of space! **

In this tutorial, you'll design a spaceship for your journey.

![Flying through space](/static/skillmap/space/space1.gif "Blasting through a starfield" )

## Set the scene
**Give 'em something to look at** 🔭

---


► Drag the ``||scene:start screen [confetti] effect ⊕||`` from the  ``||scene:Scene||`` category and
into the ``||loops:on start||`` block that's already in the workspace.

► Next, select ``||scene:star field||`` (instead of ``||scene:confetti||``) from the dropdown
and watch as you blast into space! 🚀


---


```blocks
// @highlight
effects.starField.startScreenEffect()
```


## Take a Look!


**Check the Game Window**<br/>

Do you see the background you chose scrolling down the screen?



## Draw your ship
**🧑🏿‍🚀 Time to choose our ship! 👩🏾‍🚀**

---

► From the ``||sprites:Sprites||`` category, drag the ``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||``
block  and place it at the end of the ``||loops:on start||`` container.

► Click on the grey box in the middle of your
 ``||variables(noclick):set [mySprite] to sprite [ ] of kind [Player]||`` block
to design a ship of your own! Are you a rusty pile of scraps or a sleek, futuristic rocket?

---

**Tip:** Don't feel like drawing your ship? Once you're in the sprite editor,
flip to the gallery and choose from premade images.

```blocks
effects.starField.startScreenEffect()
// @highlight
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
```

## Control your ship

🌟 Let's get your ship moving 🌟

---

► Find the ``||controller:move [mySprite] with buttons ⊕||`` block
and drag it into the bottom of the ``||loops:on start||`` container.

** Now try moving your ship around on the game screen! **
Your ship will move with the joystick, arrow keys, or **W A S D** keys.



```blocks
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
// @highlight
controller.moveSprite(mySprite)
```

## Stay in screen

**Uh-oh, if you move off screen, your ship disappears!**

---

► To keep your ship from exploring beyond the edges, find
 the ``||sprites:set [mySprite] stay in screen <on>||`` block and
snap it in at the end of the program.



```blocks
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
// @highlight
mySprite.setStayInScreen(true)

```


## Finale @showdialog

**Great Job!**

---

**Try your project on the game screen
before you click Done on the tutorial.**

Is everything how you want it? You can always go back and edit steps if you discover you'd like them to work differently.



## Byeeee

** 🚀 That's it! 🚀**

You're all set to travel the universe!

Click **Done** to return to the main page where you can share your game
with family and friends!
