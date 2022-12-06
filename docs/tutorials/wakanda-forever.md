# Wakanda Forever

## {Intro @unplugged}

![ ](https://code.org/api/hour/begin_msft_wakanda.png " ")

Help Shuri, Okoye, and Riri Williams (Ironheart) escape Namor.

![Keep Namor Away!](/static/tutorials/wakanda/assets.png " ")


Design your own adventure in MakeCode Arcade, creating sprites for Shuri, Okoye, Ironheart, and Namor.

## {Step 2}

**Let's visit Wakanda!**

---

- :tree: From the ``||scene:Scene||`` category, grab <br/>
``||scene:set background image to [ ]||`` <br/>
and snap it into the empty <br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.

- :mouse pointer: Click **Next** to get to the next set step.


```blocks
//@highlight
scene.setBackgroundImage(img`.`)
```

## {Step 3}

- :mouse pointer: Click the **empty grey square** in the<br/>
``||scene(noclick):set background image to [ ]||`` <br/>
block that's now in your workspace.

- :paint brush: Switch to **My Assets** <br/>
![Switch to My Assets](/static/skillmap/assets/my-assets-three.png " ")
and choose the **Wakanda** background.
![Choose Wakanda](/static/tutorials/wakanda/wakanda.png " ")

- :mouse pointer: Then click **Done**.

```blocks
//@highlight
scene.setBackgroundImage(assets.image`wakanda`)
```

## {Step 4}


**Introduce Shuri to the game as a new sprite.**

---

- :paper plane: From ``||sprites:Sprites||``, grab
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||``
and drag it into **the end** of the <br/>
``||loops(noclick):on start||`` container.

- :mouse pointer: Now find your<br/>
``||variables(noclick):set [mySprite] to sprite [ ] of kind [Player]||``<br/>
block in the workspace and click on the name ``||variables(noclick):mySprite||``. <br/>
Select **Rename variable...** and enter **Shuri**.

- :paint brush: Click the empty grey box in the same block to open the **image editor**.
Switch to **My Assets** again and select **Shuri**.

![Choose Shuri](/static/tutorials/wakanda/shuri.png " ")


```blocks
scene.setBackgroundImage(assets.image`wakanda`)
//@highlight
let Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
```

## {Step 5}


**Allow Shuri to move inside the screen boundary.**

We need to give Shuri the ability move around when the controller buttons are pressed.

---

- :paper plane: From ``||controller:Controller||``, grab a <br/>
``||controller:move [mySprite] with buttons||`` <br/>
block and snap it into **the end of** the ``||loops(noclick): on start||`` container.


- :mouse pointer: Click the dropdown to change the variable from ``||variables(noclick):mySprite||`` to ``||variables(noclick):Shuri||``.<br/>


```blocks
scene.setBackgroundImage(assets.image`wakanda`)
let Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
//@highlight
controller.moveSprite(Shuri)
```


## {Step 6}


Make sure Shuri stays on the screen by turning on a sprite **flag**.

---

- :paper plane: From ``||sprites:Sprites||``, grab <br/>
``||sprites:set [mySprite] stay in screen <ON>||`` <br/>
and snap it into **the end of** the ``||loops(noclick): on start||`` container.


- :mouse pointer: Change the variable in the block to ``||variables(noclick):Shuri||``.


```blocks
scene.setBackgroundImage(assets.image`wakanda`)
let Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(Shuri)
//@highlight
Shuri.setStayInScreen(true)
```




## {7. Check Your Game!}


- :binoculars: Look at your project in the game window!

You should see Shuri and be able to move her around with the arrow keys when hovering over the controls.






## {Step 8}


**Add Namor to the game.**

---

- :paper plane: From ``||sprites:Sprites||``, drag <br/>
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||``<br/>
into **the end** of the
``||loops(noclick):on start||`` container.

- :mouse pointer: Find the new<br/>
``||variables(noclick):set [mySprite] to sprite [ ] of kind [Player]||``<br/>
block in the workspace and click on the name ``||variables(noclick):mySprite||``. <br/>
Select **Rename variable...** and enter **Namor**.

- :paint brush: Click the empty grey box in the same block to open the **image editor**.
Switch to **My Assets** again and select **Namor**.

![Choose Namor](/static/tutorials/wakanda/namor.png " ")


```blocks
scene.setBackgroundImage(assets.image`wakanda`)
let Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(Shuri)
Shuri.setStayInScreen(true)
//@highlight
let Namor = sprites.create(assets.image`namor`, SpriteKind.Player)
```


## {Step 9}


**Make Namor the Enemy.**

---

- :mouse pointer: In the<br/>
``||variables(noclick):set [Namor] to sprite [ ] of kind [Player]||``<br/>
block that you just created, click on ``||sprites(noclick):Player||``<br/>
 and change the kind to  ``||sprites(noclick):Enemy||``.

```blocks
scene.setBackgroundImage(assets.image`wakanda`)
let Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(Shuri)
Shuri.setStayInScreen(true)
//@highlight
let Namor = sprites.create(assets.image`namor`, SpriteKind.Enemy)
```

## {Step 10}


We want Namor to start in the upper corner of the screen.

---

- :paper plane: From the ``||sprites:Sprites||`` category, grab <br/>
``||sprites:set [mySprite] position to x [0] y [0]||``<br/>
and snap it in at **the end** of the ``||loops(noclick):on start||`` container.<br/>


- :mouse pointer: Click  ``||variables(noclick):mySprite||`` and choose ``||variables(noclick):Namor||``.<br/>
Set **x** to **148** and **y** to **2**.


```blocks
scene.setBackgroundImage(assets.image`wakanda`)
let Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(Shuri)
Shuri.setStayInScreen(true)
let Namor = sprites.create(assets.image`namor`, SpriteKind.Enemy)
//@highlight
Namor.setPosition(148, 2)
```

## {Step 11}


Let's add the code that makes Namor chase Shuri all around the screen.

---

- :paper plane: From the ``||sprites:Sprites||`` category, grab <br/>
``||sprites:set [myEnemy] follow [mySprite]||`` <br/>
and snap it in at **the end** of the ``||loops(noclick):on start||`` container in the workspace.

- :mouse pointer: Click ``||variables(noclick):myEnemy||`` and change it to ``||variables(noclick):Namor||``.<br/>
Click on ``||variables(noclick):mySprite||`` and change to ``||variables(noclick):Shuri||``.<br/>
Click the plus **(+)** icon to expand the block and change the speed to **30**.



```blocks
scene.setBackgroundImage(assets.image`wakanda`)
let Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(Shuri)
Shuri.setStayInScreen(true)
let Namor = sprites.create(assets.image`namor`, SpriteKind.Enemy)
Namor.setPosition(148, 2)
//@highlight
Namor.follow(Shuri, 30)
```


## {12. Check Your Game!}


- :binoculars: Don't forget to look at your project in the game window after each step!

Play with your project as you go along.  This will help make sure you're on the right track.





## {Step 13}

**When Namor attacks Shuri, she should lose lives.**

Let's use a sprite overlap event to make sure the game detects when Namor gets to Shuri.

---

- :paper plane: From the ``||sprites:Sprites||`` category, grab <br/>
``||sprites:on [sprite] of kind [Player] overlaps [othersprite] of kind [Player]||``<br/>
and drop it into an **empty area** of the workspace.


- :mouse pointer: Change the **kind** of **otherSprite** from ``||sprites(noclick):Player||`` to ``||sprites(noclick):Enemy||``.

- :id card: To subtract a life from Shuri, open ``||info:Info||`` and grab<br/>
``||info:change life by -1||``.<br/>
Snap this into the empty <br/>
``||sprites(onclick):on [sprite] of kind [Player] overlaps [othersprite] of kind [Enemy]||``<br/> event block in the workspace.<br/>


```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
```



## {Step 14}

**If Namor and Shuri continue to overlap, Shuri will lose all of her lives too soon.**

Let's move Namor away to keep the game going.

---

- :mouse pointer: Send Namor back to the corner of the screen by duplicating<br/>
the ``||sprites(noclick):set Namor position to x 148 y 2||`` block that's inside the<br/>
``||loops(noclick):on start||`` container.

~hint How do I duplicate? 💡

---

There are two great ways to duplicate a block

1) Highlight it and use the copy/paste feature on your keyboard
2) Right-click the block and choose **Duplicate**.

hint~


- :mouse pointer: Place the copy into the<br/>
``||sprites(onclick):on [sprite] of kind [Player] overlaps [othersprite] of kind [Enemy]||`` container already in the workspace.


```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    let Namor: Sprite = null
info.changeLifeBy(-1)
//% @highlight
    Namor.setPosition(148, 2)
})
```




## {Step 15}

**Bring in the guards!**

Both Riri and Okoye can now join the game to guard Shuri from Namor's attacks.

- :paper plane: From ``||sprites:Sprites||``, drag another<br/>
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||`` <br/>
into **the end** of the<br/>
``||loops(noclick):on start||`` container.

- :mouse pointer: Click on ``||variables(noclick):mySprite||`` in<br/>
``||variables(noclick):set [mySprite] to sprite [ ] of kind [Player]||``<br/>
and select ``||variables(noclick):Rename variable...||``. Rename it to **Riri**.

- :mouse pointer: Click the empty grey box to open the **image editor**.

- :paint brush: Switch to **My Assets** to select the image for 'Riri'.
![Choose Riri](/static/tutorials/wakanda/riri.png " ")



- :lightbulb: Repeat the steps you took to add Riri, but this time rename<br/>
``||variables(noclick):mySprite||`` to **Okoye** and pick the 'okoye' image from **My Assets**
![Choose Okoye](/static/tutorials/wakanda/okoye.png " ")


- :mouse click: Change the **kind** of both **Riri** and **Okoye** from<br/>
``||sprites(noclick):Player||`` to ``||sprites(noclick):Guard||``.


```blocks
namespace SpriteKind {
    export const Guard = SpriteKind.create()
}

scene.setBackgroundImage(assets.image`wakanda`)
let Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(Shuri)
Shuri.setStayInScreen(true)
let Namor = sprites.create(assets.image`namor`, SpriteKind.Enemy)
Namor.follow(Shuri, 30)
Namor.setPosition(148, 2)
let Riri = sprites.create(assets.image`riri`, SpriteKind.Guard)
let Okoye = sprites.create(assets.image`okoye`, SpriteKind.Guard)
```

## {Step 16}

**Make the guards move**

---

- :paper plane: From the ``||controller:Controller||`` category, snap<br/>
``||controller:move [mySprite] with buttons||``<br/>
into the **end of** the ``||loops(noclick):on start||`` container already in the workspace.

- :mouse pointer: Change ``||variables(noclick):mySprite||`` to ``||variables(noclick):Riri||``.

- :mouse pointer: Click (+) to expand the block, then change **vx** to **34** and **vy** to **-53**.

- :paper plane: Add another <br/>
``||controller:move [mySprite] with buttons||``<br/>
**at the end** and change<br/>
``||variables(noclick):mySprite||`` to ``||variables(noclick):Okoye||``,
 **vx** to **-68** and **vy** to **-58**.


```blocks
namespace SpriteKind {
    export const Guard = SpriteKind.create()
}

scene.setBackgroundImage(assets.image`wakanda`)
let Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(Shuri)
Shuri.setStayInScreen(true)
let Namor = sprites.create(assets.image`namor`, SpriteKind.Enemy)
Namor.follow(Shuri, 30)
Namor.setPosition(148, 2)
let Riri = sprites.create(assets.image`riri`, SpriteKind.Guard)
controller.moveSprite(Riri, 34, -53)
let Okoye = sprites.create(assets.image`okoye`, SpriteKind.Guard)
controller.moveSprite(Okoye, -68, -58)
```

## {Step 17}

**You need an event to tell when one of the guards overlaps with Namor.**

---

- :paper plane: From ``||sprites:Sprites||``, grab <br/>
``||sprites:on [sprite] of kind [player] overlaps [othersprite] of kind [player]||``<br/>
and drop it into **an empty area** of the workspace.

- :mouse pointer: Change the **sprite** kind to ``||sprites(noclick):Guard||`` and the **othersprite** kind to ``||sprites(noclick):Enemy||``.


```blocks
namespace SpriteKind {
    export const Guard = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Guard, SpriteKind.Enemy, function (sprite, otherSprite) {

})
```


## {Step 18}

Award a point, then Namor should go back to his corner and start to attack again after being caught.

---


- :id card: From ``||info:Info||``, add a point to the game score by snapping <br/>
``||info:change score by 1||``<br/>
into the empty **on overlaps** container.

- :mouse pointer: Send Namor back to the corner of the screen by duplicating<br/>
the ``||sprites(noclick):set Namor position to x 148 y 2||`` block from<br/>
``||loops(noclick):on start||`` container again.
<br/><br/>Place the copy into the<br/>
``||sprites(onclick):on [sprite] of kind [Guard] overlaps [othersprite] of kind [Enemy]||`` container already in the workspace.

```blocks
namespace SpriteKind {
    export const Guard = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Guard, SpriteKind.Enemy, function (sprite, otherSprite) {
    let Namor: Sprite = null
    info.changeScoreBy(1)
    Namor.setPosition(148, 2)
})
```



## {Step 19}

**Let's decide when Shuri, with the help Riri and Okoye, will win against Namor's attacks.**

If the game score reaches **20** then Shuri wins!

---

- :id card: From ``||info:Info||``, grab<br/>
``||info:on score 100||``<br/>
and drop it into **an empty area** of the workspace.

- :mouse pointer: Change the value from **100** to **20**.

- :paper plane: From ``||sprites:Sprites||``, get <br/>
``||sprites:destroy [mySprite]||``<br/>
and snap it inside the new score event.

- :mouse pointer: Change ``||variables(noclick):mySprite||`` to ``||variables(noclick):Namor||`` to destory Namor when the score gets to 20.

- :tree: From ``||scene:Scene||``, grab <br/>
``||scene: set background image to [ ]||``<br/>
and drop it in at **the end** of the same event.

- :paint brush: Click the empty grey square and switch to **My Assets** to select the **Boston Bridge scene**.

```blocks
let Namor: Sprite = null
info.onScore(20, function () {
    Namor.destroy()
    scene.setBackgroundImage(assets.image`boston-bridge`)
})
```



## {Step 20}

**Celebrate the victory!**


Make defeating Namor a much more dramatic event. Add some effects and messages to celebrate the win!

---


- :tree: Get a <br/>``||scene:start screen [confetti] effect||``<br/> from ``||scene:Scene||`` and place it inside at **the end** of the ``||info(noclick):on score 20||`` event.

- :paper plane: From the ``||sprites:Sprites||`` category, drag<br/>
``||sprites:[mySprite] say [":)"]||``<br/>
into the **end of** the ``||info(noclick):on score 20||`` block already in the workspace.

- :mouse pointer: Change ``||variables(noclick):mySprite||`` to ``||variables(noclick):Shuri||``.

- :mouse pointer: Click the smiley face in the circle and enter **WAKANDA FOREVER!**, then click the (+) icon and set the display time to **2 seconds** (it will automatically change to 2000 ms.)


```blocks
let Shuri: Sprite = null
let Namor: Sprite = null
info.onScore(20, function () {
    Namor.destroy()
    scene.setBackgroundImage(assets.image`boston-bridge`)
    effects.confetti.startScreenEffect()
    Shuri.sayText("WAKANDA FOREVER!", 2000, false)
})
```



## {Step 21}

**Be a leader!**

Teach users how to play with well-placed instructions.

---

- :circle: From the ``||game:Game||`` category, grab <br/>
 ``||game(noclick):show long text "..." [full screen]||``<br/>
 and snap it in at **the top** of the ``||loops(noclick):on start||`` container already in the workspace.

Now, when your game starts, users will see a message suggesting that they use the arrow keys to play.


```blocks
namespace SpriteKind {
    export const Guard = SpriteKind.create()
}

//@highlight
game.showLongText("When game begins, press the ARROW KEYS to move Shuri, Okoye and Riri. If Namor catches you, you will lose points! ", DialogLayout.Full)
scene.setBackgroundImage(assets.image`wakanda`)
let Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(Shuri)
Shuri.setStayInScreen(true)
let Namor = sprites.create(assets.image`namor`, SpriteKind.Enemy)
Namor.follow(Shuri, 30)
Namor.setPosition(148, 2)
let Riri = sprites.create(assets.image`riri`, SpriteKind.Guard)
controller.moveSprite(Riri, 34, -53)
let Okoye = sprites.create(assets.image`okoye`, SpriteKind.Guard)
controller.moveSprite(Okoye, -68, -58)
```



## {Step 21}

**🎉 Congratulations**

---

Now you have a game that helps Shuri, Riri, and Oyoke defeat Namor! Go ahead and give it a try.

Click **Done** when you're ready to publish your game and share with friends.


```blockconfig.global
game.showLongText("When game begins, press the ARROW KEYS to move Shuri, Okoye and Riri. If Namor catches you, you will lose points! ", DialogLayout.Full)
```

```package
wakanda-palette=github:riknoll/wakanda-palette
```

```customts
namespace SpriteKind {
    //% isKind
    export const Guard = SpriteKind.create()

}
```

```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image4\": {\n        \"data\": \"hwSgAHgAAACZmZmZERERERERERERERERmZmZmZmZmZmZmZmZmZmZmZmZZmZmZmZmZmZmZnZ2d3d3d3fn7u7u7u7u7u6ZmZmZmZkRERERERERERERmZmZmZmZmZmZmZmZmZmZmZlpZmZmZmZmZmZmZmZnd3d3d3fn7u7u7u7u7u6ZmZmZmZkZERERERERERERmZmZmZmZmZmZmZmZmZmZmZmZZmZmZmZmZmZmZmZ2d3d3d3fn7u7u7u7u7u6ZmZmZmZkZERERERERERERmZmZmZmZmZmZmZmZmZmZmZmZaWZmZmZmZmZmZmZnd3d3d3fn7u7u7u7u7u6ZmZmZmZmZGRERERERERERkZmZmZmZmZmZmZmdnZ2dnZ2dnZ1tbW1tbW1tbW19d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmRERERERERERkZmZmZmZmZmZmbu9vb29vb29vb29vb29vb29vb23d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmRkREREREREREZmZmZmZmZmZud3d3d3d3d3d3d3d3d3d3d3d3X19d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmRkREREREREREZmZmZmZmZmZ293d3d3d3d3d3d3d3d3d3d3d3dd3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZkREREREREREZmZmZmZmZm53d29vb29vb29vb29vb29vb29fX13d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZkREREREREREZmZmZmZmZnR3d29vb29vb29vb29vb29vb29vXd3d3d3d3fn7u7u7u7u7u6ZmZmZmRmZmZkZEREREREREZGZmZmZmZnR3d3d3d3d3d3d3d3d3d3d3d3dfd13d3d3d3fn7u7u7u7u7u6ZmZmZmRmZmZkZEREREREREZGZmZmZmZnR3d29vb29vb29vb29vb29vb29vXd3d3d3d3fn7u7u7u7u7u6ZmZmZmRmZmZmZERERERERERGZmZmZOZkZ3d29vb29vb29vb29vb29vb29fX13d3d3d3fn7u7u7u7u7u6ZmZmZmRmRmZmZERERERERERGZmZmZmZmZ0d3d3d3d3d3d3d3d3d3d3d3d3Xd3d3d3d3fn7u7u7u7u7u6ZmZmZmRkRmZmZGRERERERERGZmZmZmZmZGd3d3d3d3d3d3d3d3d3d3d3dfd13d3d3d3fn7u7u7u7u7u6ZmZmZmRkRmZmZmRERERERERGZmZmZmZmZmRERERERERERERERERERERER3dd3d3d3d3fn7u7u7u7u7u6ZmZmZmRkRkZmZmRERERERERGRmZmZmZmZmZmRkZGRkZGRkZFhYWFhYWFhfX13d3d3d3fn7u7u7u7u7u6ZmZmZmZkRkZmZmRkRERERERGRmZmZmZmZmZmZmZmZmZmZmZlpZmZmZmZmZ3d2d3d3d3fn7u7u7u7u7u6ZmZmZmZkREZmZmZkRERERERGRmZmZmZmZmZmZmZmZmbm7u7tmZmZmZmZmdnd3d3d3d3fn7u7u7u7u7u6ZmZmZmZkREZmZmZkRERERERGRmZmZmZmZmZmZmZmZmdHd3d1tZmZmZmZmZ3d3d3d3d3fn7u7u7u7u7u6ZmZmZEZEREZGZmZkZERERERERmZmZmZmZmZmZmZmZmdHd3d1mZmZmZmZmdnZ3d3d3d3fn7u7u7u7u7u6ZmZmZEZEREZGZmZmZERERERERmZmZmZmZmZmZmZmZmRkREWFhZmZmZmZmZnd3d3d3d3fn7u7u7u7u7u6ZmZmZGREREZGZmZmZERERERERmZmZmZmZmZmZmZmZmZmZmZlmZmZmZmZmdnZ3d3d3d3fn7u7u7u7u7u6ZmZmZGRERERGZmZmZERERERERmZmZmZmZmZmZmZmZmZmZmWlpZmZmZmZmZnd3d3d3d3fn7u7u7u7u7u6ZmZmZmRERERGRmZmZERERERERmZmZmZmZmZmZmZmZmZmZmZZmZmZmZmZmdnd3d3d3d3fn7u7u7u7u7u6ZmZmZmRERERGRmZmZERERERERkZmZmZmZmZmZmZmZmZmZmWlmZmZmZmZmZ3d3d3d3d3fn7u7u7u7u7u6ZmZmZmRERERGRmZmZGRERERERkZmZmZmZmZmZmZ2dnZ2d3dZmZmZmZmZmdnZ3d3d3d3fn7u7u7u7u7u6ZmZmZmRkRERERmZmZGRERERERkZmZmZmZmZmZub29vb29vW1mZmZmZmZmZ3d3d3d3d3fn7u7u7u7u7u6ZmZmZmRkRERERmZmZmRHR0dHR0dnZ2dnZ2dmZ293d3d3d3dZmZmZmZmZ2dnZ3d3d3d3fn7u7u7u7u7u6ZmZmZmZkRERERmZmZu7vb29vb29vb29vb29u73d3d3d3d3W1mZmZmZmZmZ3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZkRERERmZm73d3d3d3d3d3d3d3d3d3dvb29vb29vWZmZmZmZmZ2dnZ3d3d3d3fn7u7u7u7u7u6ZmZmZmZkREREREbvd27vbu9u727vbu9u727vb293d3d3d3W1mZmZmZmZmZ3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZkZERERkZkR3d3d3d3d3d3d3d3d3d3d3c3bvb29vWZmZmZmZmZmdnZ3d3d3d3fn7u7u7u7u7u6ZmZmZmZkZkRERkZmZERHR0dHR0dHR0dHR0dER3czb3d3d3W1mZmZmZmZmZ3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZERERkZmZmZkRERERERkZGRkZGRmZ0c3b3d3d3WZmZmZmZmZmdnZ3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZERkREZmZmZkRERERkZmZmZmZmZmZGRHbERERYWFmZmZmZmZmZ3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZERkREZmZmZkZERERkZmZmZmZmZmZmZHbkZGR0dZmZmZmZmZ2dnd3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZGZkREZmZmZkZERERkZmZmZmZmZmZmZnbmZmZmW1mZmZmZmZnd3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZGZEREZmZmZkZEREREZmZmZmZmZmZmZnbmZmZmZZmZmZmZmZ2dnd3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZEZEZGZmZmZEREREZmZmZmZmZmZmZnbmZmZmWlmZmZmZmZndnd3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZEZEZGZmZmZEREREZmZmZmZmZmZmZnbmZmZmZZmZmZmZnZ2d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZkZEZGZmZmZEREREZmZmZmZmZmZmZnbmZmZmWlmZmZmZmdnd3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZEZGZmZmZEREREZmZmZmZmZmZmZnbmZmZmZZmZmZmdnZ3d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZEZGZmZmZGREREZmZmZmZmZmZmZnbmZmZmWlmZmZmZ3d3d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZERGZmZmZGREREZmZmZmZmZmZmZnbmZmZmZZmZmZ2dnd3d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZERGZmZmZGREREZmZmZmZmZmZmZnbmZmZmWlmZmZmZ3d3d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZGRGZmZmZGREREZmZmZmZmZmZmZnbmZmZmZZmZmZ2dnd3d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZGRGZmZmZmREREZmZmZmZmZmZmZnbmZmZaWlmZmZmZ3d3d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZGRGZmZmZmREREZmZmZmZmZmZmZnbmZmZmWZmZmZmdnZ3d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmRGZmZmZmREREZmZmZmZmZmZmZnbmZmZaWlmZmZmZnd3d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmRGZmZmZmREREZmZmZmZmZmZmZnbmZmZmWZmZmZmdnZ3d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmRGZmZmZmREREZGZmZmZmZmZmZnbmZmZmWlmZmZmZnd3d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmRGZmZmZmREREZGZmZmZmZmZmZnbmZmZmWZmZmZmdnZ3d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmRGZmZmZmRkREZGZmZmZmZmZmZnbmZmZZmZmZmZmZnd3d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmRmZmZmZmRkREZGZmZmZmZmZmZnbmZmZlmZmZmZmdnZ3d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmRmZmZmZmRkREZGZmZmZmZmZmZnbmZmZaWZmZmZmZmd3d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmRmZmZmZmRkREZGZmZmZmZmZmZ3b2dnZ1mZmZmZmZnZ2d3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmZmZmZmZmRkREZGZmdnZ2dnZmd3d29vba21mZmZmZmZnd3d3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmZmZmZmZmRkREZGZmdvb29vb293d3d3d3WZmZmZmZmZ2dnd3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZnZ2dnZ2dnR0dHZ2dud3d3d3d3d3d3d3dbW1mZmZmZmZmZ3d2d3d3d3fn7u7u7u7u7u6ZmZmZmZmZubu7vb29vb29vb29vb29293d3d3d3d3d3d3dvWZmZmZmZmZmdnZ3d3d3d3fn7u7u7u7u7u6ZmZmZmZm5293d3d3d3d3d3d3d3d3d3d3b29vb29vb29vdvW1mZmZmZmZmZmd2d3d3d3fn7u7u7u7u7u6ZmZmZmbHbvb27vbu9u727vbu9u7273d3d3d3d3d3d3d3d2722ZmZmZmZmZnZ3d3d3d3fn7u7u7u7u7u6ZmZmZmZkZ0d3d3d3d3d3d3d3d3d3d3d3b29vb29vb29vd27tra2ZmZmZmZmd3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZGRERHR0dHR0dHR0dHR0d0d3d3d3d3d3d3d293bu7ZmZmZmZmZnZ2d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZkZGRkZGRkREREZGRGd3d3d3d3d3d3d3bvbtra2ZmZmZmZmd3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmZmZmZmZmZkREZGZmREREREREREREbHdu7u7tmZmZmZmZnZ3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmZmZmZmZmZkREZGZmRkZGRkZGR0dHdu9u7u7a2ZmZmZmZmd3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmdvdu927u7u7u2ZmZmZmZnZ3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmbm73b27u7u7u2tmZmZmZnd3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmZnd3bu7u7u7u7ZmZmZmZnZ3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmZkZEREREREREWFmZmZmZmZnd3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZGZGZmZmZmZkREZGZmZmZmZmZmZmZmZmZlmZmZmZmZmZmZnZ2d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZGZGZmZmZmZkREZGZmZmZmZmZmbu7u7u7u7u7u7tra2ZmZmd3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZGZGZmZmZmZkREZGZmZmZmZmZGd3d3d3d3d3d3d3dZmZmZnZ2d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZEZGZmZmZmZkREZGZmZmZmZmZGd3d3d3d3d3d3d3dbWZmZmd3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZERGZmZmZmZkREZGZmZmZmZmZmRERERERERERERHRbWZmZnZ3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZERGZmZmZmZkREZGZmZmZmZmZmZmZmZmZZmZmZmbWbWZmZmZ3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZERGZmZmZmZkREZGZmZmZmZmZmZmZmZmZZmZmZmbd1mZmZnZ3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZERGZmZmZmZkREZGZmZmZmZmZmZmZmZmZaWdmZmZtbWZmZmZ3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZERGZmZmZmZkZEZGZmZmZmZmZmZmZmZm7u3tmZmbWZmZmZnZ2d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZERGZmZmZmZkZEZGZmZmZmZmZmZmZmZnd3W1nZmZmZmZmZmZ3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZERGZmZmZmZkZEZGZmZmZmZmZmZmZmZmZmXdmZmZmZmZmZnZ2d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZERGZmZmZmZkZEZGZmZmZmZmZmZmZmZmZmXdmZmZmZmZmZmd3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZmZERGZmZmZmZkZEZmZmZmZmZmZmZmZmZmZmXdmZmZmZmZmZnZ2d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZkZERGZmZmZmZmZEZmZmZmZmZmZu7u7u7u7u7u7u2tmZmZmZmZ3d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZkZERGZmZmZmZmZmZmZmZmZmZkZ3d3d3d3d3d3d3d1mZmZmZnZ2d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZkZERGZmZmZmZmZmZmZmZmZmZmZEREREREREREREW1tZmZmZmZnd3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZkZERGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmZmZt1mZmZmZnZ2d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZkZEZGZmZmZmZmZmZmZmZmZmZmZmZmZmZlpaWZm1t1tZmZmZmZnd3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZkZEZGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmZm1t1mZmZmZnZ2d3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZkZEZGZmZmZmZmZmZmZmZmZmZmZmZmZmZlpZmZm1m1tZmZmZmZnd3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZmZmZmZmZmZmZlmZmZm3d1mZmZmZnZ2dnd3d3fn7u7u7u7u7u6ZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZmZmZmZmZmZmWlpZmbW3W1mZmZmZmZnd3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZmZmZmZmZmZmZZmZmbW22ZmZmZmZmZ2dnd3d3fn7u7u7u7u7u6ZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmWlmZmbd221mZmZmZmZnZ3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZZmu7vd29ZmZmZmZmZmdnZ3d3fn7u7u7u7u7u6ZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZaWlm3d3d221mZmZmZmZmZ3d3d3fn7u7u7u7u7u6ZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZZmZmZmbd3WZmZmZmZmZmdnZ3d3fn7u7u7u7u7u6ZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZlpZma7u7vd3W1mZmZmZmZmZ3d3d3fn7u7u7u7u7u6ZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmWZhbd3d293WZmZmZmZmZmdnZ3d3fn7u7u7u7u7u6ZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZlpZmbd3d293W1mZmZmZmZmZ3d3d3fn7u7u7u7u7u6ZmZmZmZmZmRERkZmZmZmZmZmZmZmZmZmZmZmZmZmWZmZmZma93W1mZmZmZmZmdnZ3d3fn7u7u7u7u7u6ZmZmZmZmZmRERkZmZmZmZmZmZmZmZmZmZmZmZmWlpZmZmZmbd3d1mZmZmZmZmZ3d3d3fn7u7u7u7u7u6ZmZmZmZmZmRERkZmZmZmZmZmZmZmZmZmZmZmZmZlmZmZmu7vd291mZmZmZmZmdnZ3d3fn7u7u7u7u7u6ZmZmZmZmZmRERkZmZmZmZmZmZmZmZmZmZmZmZmWlpZmZm3d3d3d1tZmZmZmZmZ2d3d3fn7u7u7u7u7u6ZmZmZmZmZmRERkZmZmZmZEZmZmZmZmZmZmZmZmWlmZmZmZmbd3b3dZmZmZmZmdnZ3d3fn7u7u7u7u7u6ZmZmZmZmZmRERkZmZmZmZEZGZmZmZmZmZmZmZmZlpZmZmZmbd273dbWZmZmZmZnd3d3fn7u7u7u7u7u6ZmZmZmZmZmRERmZmZmZmZEZGZmZmZmZmZmZmZmZmZaWZmu7vdu73dtmZmZmZmdnZ3d3fn7u7u7u7u7u6ZmZmZmZmZGRERmZmZmZmZERGZmZmZmZmZmZmZmZlpZmZm3d3du73dbW1mZmZmZmd3d3fn7u7u7u7u7u6ZmZmZmZmZGRERmZmZmZmZERGZmZmZmZmZmZmZmZmWZmZmZmbdvb3dvdbWZmZmZnZ3d3fn7u7u7u7u7u6ZmZmZmZmZGRERmZmZmZmZERGZmZmZmZmZmZmZmZlpZmZmZmbXvb3dvd3dZmZmZmd3d3fn7u7u7u7u7u6ZmZmZmZmZGRGRmZmZmZmZERGZmZmZmZmZmZmZmZmWZmZmZnbWvb29vd3dZmZmdnZ3d3fn7u7u7u7u7u6ZmZmZmZmZERGZmZmZmZmZERGZmZmZmZmZmZmZmZlpaWZmZmd3vb29vd1tbWZmZmd3d3fn7u7u7u7u7u6ZmZmZmZmZERGZmZmZmZkZERGRmZmZmZmZmZmZmZmZZmZmZnZ23d29vd3dZmZmdnZ3d3fn7u7u7u7u7u6ZmZmZmZmZERGZmZmZmZkZERGRmZmZmZmZmZmZmZlpaWZmZmd31929vd1tbWZnZ3d3d3fn7u7u7u7u7u6ZmZmZmZkZERGZmZmZmZkZERGRmZmZmZmZmZmZmZmZZmZmZnZ2d929vd3dZmZ2dnZ3d3fn7u7u7u7u7u6ZmZmZmZkZEZGZmZmZmZkZERGRmZmZmZmZmZmZubtra2ZmZmZnd9293d3dbWZnZ2d3d3fn7u7u7u7u7u6ZmZmZmZkREZGZmZmZmZkZERGRmZmZmZmZmZmZ0d3dZmZmZmZ2dtbd3dbWZmZ2dnZ3d3fn7u7u7u7u7u6ZmZmZmZkREZmZmZmZmZkZERGRmZmZmZmZmZmZmZlpaWZmZmZmZ3fd3W1tZmZnZ2d3d3fn7u7u7u7u7u6ZmZmZmZkREZmZmZmZmZkRERGRmZkRmZmZmZmZmZmZZmZmZmZmdmbX3dZmZmZ2dnZ3d3fn7u7u7u7u7u6ZmZmZmZkREZmZmZmZmZkRERGZmZkRmZmZmZmZmZlpaWZmZmZmZmfXbW1mZmZmZ2d3d3fn7u7u7u7u7u6ZmZmZmZkRkZmZmZmZmZkRERGZmZkRmZmZmZmZmZmZZmZmZmZmdnZ33WZmZmZmdnZ3d3fn7u7u7u7u7u6ZmZmZmRkRkZmZmZmZmZkRERGZmZkRmZmZmZm7u7tru2ZmZmZmZmd3bW1mZmZmZmd3d3fn7u7u7u7u7u6ZmZmZmRkRmZmZmZmZmZkRERGZmRkRmZmZmRnd3d3WZmZmZmZmZnZ212ZmZmZmZnZ3d3fn7u7u7u7u7u6ZmZmZmRkRmZmZmZmZmRkRERGZmRkRmZmZmZmZmZlpZmZmZmZmZmZnZ2ZmZmZmZnd3d3fn7u7u7u7u7u6ZmZmZmRkRmZmZmZmZmRkRERGZmRkRmZmZmZmZmZmZZmZmZmZmZnZ2d2ZmZmZmdnZ3d3fn7u7u7u7u7u6ZmZmZmRmRmZmZmZmZmRkRERGZmRGRmZmZmZmZmZlpZmZmZmZmZmZnZ2ZmZmZmZ2d3d3fn7u7u7u7u7u6ZmZmZmRmRmZmZmZmZmRkRERGZmRGRmZmZmZmZmZmZZmZmZma7u7u7u2ZmZmZmdnZ3d3fn7u7u7u7u7u6ZmZmZmRGZmZmZmZmZmRkRERGZGRGRmZmZmZmZmZlpZmZmZhbd3d3dbW1mZmZmZ2d3d3fn7u7u7u7u7u6ZmZmZmRGZmZmZmZmZmRkRERGZGRGRmZmZmZmZmZmZZmZmZmYRERERERZmZmZmdnZ3d3fn7u7u7u7u7u6ZmZmZmZGZmZmZmZmZmRERERGZGRGZmZmZmZmZmZlpaWZmZmZmZmdnd2dmZmZmZ2d3d3fn7u7u7u7u7u6ZmZmZGZGZmZmZmZmZmREREZGZGRGZmZmZmZmZmZmZZmZmZmZmZnZ2d3dmZmZmdnZ3d3fn7u7u7u7u7u6ZmZmZGZGZmZmZmZmZmREREZGZGRGZmZmZmZmZmZlpaWa7u7u7u7u7u2trZmZmZnd3d3fn7u7u7u7u7u6ZmZmZGZGZmZmZmZmZmREREZGZGRGZmZmZmZmZmZmZZhbd3d3d3d3d3d1mZmZmdnZ3d3fn7u7u7u7u7u6ZmZmZEZmZmZmZmZmZmREREZGZERGZmZmZmZmZmZlpaRbd3d3d3d3d3d3dZmZmZnd3d3fn7u7u7u7u7u6ZmZmZkZmZmZmZmZmZGREREZGZEZGZmZmZmZmZmZmZlmYRERERERERERERZmZmdnd3d3fn7u7u7u7u7u6ZmZkZkZmZmZmZmZmZGREREZEZEZGZmZmZmZmZmZmZaWZmZmZmZmZnd3dnZmZmZnd3d3fn7u7u7u7u7u6ZmZkRmZmZmZmZmZmZEREREZEZEZGZmZmZmZmZmZmZlmZmZmZmZmZ2d3d2ZmZmdnZ3d3fn7u7u7u7u7u6ZmZkRGZmZmZmZmZmZEREREZkZEZGZmZmZmZmZmZmZaWZmZmZmZmZnd3dnZmZmZmd3d3fn7u7u7u7u7u6ZmZkRkZmZmZmZmZmZEREREZkREZGZmZmZmZmZmZmZmWZmZmZmZnZ2d3d3dmZmZnZ2d3fn7u7u7u7u7u6ZmRkRkZmZmZmZmZkZERERERkREZGZmZmZmZmZmZmZaWZmZmZmZmZ3d3d3Z2ZmZmd3d3fn7u7u7u7u7u6ZmRkRmZmZmZmZmZkZEREREREZEZmZmZmZmZmZmdnZ2dbW1tbW1tbW19fX19bW1nZ3d3fn7u7u7u7u7u6ZmRGRmZmZmZmZmZkZEREREZEZEZmZmZmZmZmZudvb29vb29vb29vb29vb29vb27d3d3fn7u7u7u7u7u6ZGRGRmZmZmZmZmZkREREREZkZEZmZmZmZmZmZ293d3d3d3d3d3d3d3d3d3d3dfX13d3fn7u7u7u7u7u6ZGRGZmZmZmZmZmRkRERERkZkZEZmZmZmZmZm53d3d3d3d3d3d3d3d3d3d3d3d19d3d3fn7u7u7u7u7u6ZGRGZmZmZmZmZmRkRERERkZkZkZmZmZmZmZnb3d3b29vb29vb29vb29vb29t7e3t3d3fn7u7u7u7u7u6ZEZGZmZmZmZmZmRkRERERmZkZkZmZmZmZmRnd3d3b29vb29vb29vb29vb29vb13d3d3fn7u7u7u7u7u6ZEZGZmZmZmZmZmRERERERmZkZkZmZmZmZmRnd3d3d3d3d3d3d3d3d3d3d3d19fXd3d3fn7u7u7u7u7u6ZEZGZmZmZmZmZGRERERERmZkZmZmZmZmZmRnd3d3b29vb29vb29vb29vb29vX13d3d3fn7u7u7u7u7u6ZEZmZmZmZmZmZERERERERmZkZmZmZmZmZmZnR3d3b29vb29vb29vb29vb23t7e3d3d3fn7u7u7u7u7u6ZEZmZmZmZmZmZERERERERmZkRmZmZmZmZmZkZ3d3d3d3d3d3d3d3d3d3d3d3Xd3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZkZERERERGRmZkRmZmZmZmZmZmZ0d3d3d3d3d3d3d3d3d3d3X19fXd3d3fn7u7u7u7u7u6ZmZmZmZmZmZkRERERERGRmRkRmZmZmZmZmZmZGRERERERERERERERERERERHXd3d3d3fn7u7u7u7u7u6ZmZmZmZmZmZkRERERERGRmRmRmZmZmZmZmZmZmRkZGRkWFhYWFhYWFhYWFnZ2dnd3d3fn7u7u7u7u7u6ZmZmZmZmZmZkRERERERGRmRmZmZmZmZmZmZmZmZmZmWlpZmZmZmZmZmZmZmZnZ3d3d3fn7u7u7u7u7u6ZmZmZmZmZmRkRERERERGRmRmZmZmZmZmZmZmZmZmZmZmWZmZmZmZmZmZmZnZ2dnd3d3fn7u7u7u7u7u6ZmZmZmZmZmRERERERERGRmRmZmZmZmZmZmZmZmZmZmbm7u7u7u2tmZmZmZmZnd3d3d3fn7u7u7u7u7u6ZmZmZmZmZGRERERERERGZmZmZmZmZmZmZmZmZmZmZmdnd3d3d3WZmZmZmZnZ2dnd3d3fn7u7u7u7u7u6ZmZmZmZmZGRERERERERGZmZmZmZmZmZmZmZmZmZmZmdnd3d3d3W1mZmZmZmdnd3d3d3fn7u7u7u7u7u4=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"wakanda\"\n    },\n    \"image8\": {\n        \"data\": \"hwQUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMy8AAAAAAAAAAAAwO/uCwAAAAAAAAAA/PjuC8wMAAD/AADw+Iz4zMwMAAD////wz4iLzAAMAADw/+//+7v7AAAAAADw/+6+v7/7/wAAAADw/+7+/4iI//8PAAAA/+8Oj7juC/8PAAAAAAAAAAC7AAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"shuri\"\n    },\n    \"image11\": {\n        \"data\": \"hwQUABQAAAAAAAAAAAAAAAAAAAAAAAAAIgu7uwAAAAAAAAAi2ruqKgsAAAAAACAq0usiIgsAAAAAAKIihe4iIgv/AAAAACDyiO4v8tj9AAAAj4j6iP///4j9AACAiInyIv8vjwjwAADwj4ju+fLyiAAAAADw/5nuli///wD/AADw/5n++fLyiNj9AADw/5n+Iv8vj4j9AAAA/5nwhTPuAwDwAAAAAAAAAAAzAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"riri\"\n    },\n    \"image10\": {\n        \"data\": \"hwQUABQAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAADAAAAAAAAAAAAAADUzAwAAAAAAAAAAoDUzowoAAAAAAAAAKlLDo/8PAAAAAAAAKqL6Kv8PAAAAMDNaLyL68g8PAAAAMzOj9SLy/wAAAAAAMzOjJa/6/wAAAAAAMzOj9SLy8v8PAAAAMDMDKlLDIv8PAAAAAAAAAEXDowoPAAAAAAAAAADAAAAAAAAAAAAAAACwAAAAAAAAAAAAAADQAAAAAAAAAAAAAAAdDQAAAAAAAAAAAAAdDQAAAAAAAAAAAAAdDQAAAAAAAAAAAADQAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"okoye\"\n    },\n    \"image9\": {\n        \"data\": \"hwQUABQAAAAAAAAAAAAQAAAAAAAAAAAAAACRAQAAAAAAAAAAAACRAQAAAAAAAAAAAACRAQAAAAAAAAAAAABgAAAAAAAAAAAAAADwAAAAAAAAAAAAAADwAAAAAAAAAAAAAABEAAAAAAAA/0QERET0AAAOAAAA/0SURu725lUGAAAA/0REiUT15u4GAAAA/09EiUT1B5AEAAAA//+X5kT1R1UEAAAAAAAARE71R0QGAAAAAAAAQGREAJAGAAAAAAAAAEZEAAAAAAAAAAAAAADwAAAAAAAAAAAAAADwAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"namor\"\n    },\n    \"image5\": {\n        \"data\": \"hwSgAHgAAAD//////////////////////////////////////////////4iIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////////////////////4iIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f/////////////////////////////////////////////////////////////////////d3d3d3d3d/f////////////////////////////////////////////////////////+PiIiIiIiIiIjd3d3d3d3d/f////////////////////////////////////////////////////////+PiIiIiIiIiIjd3d3d3d3d/f////////////////8f/////////////4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f/////x/////////////////////////4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f/////////////////////////////////////////////////////////////////////d3d3d3d3d/f/////////////////////////////////////////////////////////////////////d3d3d3d3d/f////////////////+GiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////////////+GiIhYWIiI+PiIiFhYiIhYWIiIWFiIiFhYiIhYWIiIWFiIiPhYiIjd3d3d3d3d/f////////////////+GiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////////////+GiIhYWIiI+PiIiPj4iIhYWIiIWFiIiFhYiIhYWIiIWFiIiPhYiIjd3d3d3d3d/f////////////////+GiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////////////+GiIhYWIiI+PiIiPj4iIhYWIiIWFiIiFhYiIj4+IiIWFiIiFhYiIjd3d3d3d3d/f////////////////+GiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////////////+GiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f/////////////////JzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f/////////////////JzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f/////////////////JzMxcXMzMXFzMzFxczMxcXMzMXFzMzFxczMxcXMzMXFzMzFxczMzd3d3d3d3d/f/////////////////JzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f////////////H////JzMz8/MzMXFzMzFxczMz8XMzMXFzMzPxczMxcXMzMXPzMzPz8zMzd3d3d3d3d/f/////////////////JzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f/////////////////JzMz8/MzMXFzMzPz8zMz8XMzMXFzMzPxczMz8/MzMXPzMzPz8zMzd3d3d3d3d/f///////x/////////JzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f/////////////////JzMz8/MzMXFzMzPz8zMxcXMzMXFzMzFxczMz8/MzMXPzMzPz8zMzd3d3d3d3d/f/////////////////JzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f/////////////////JzMxcXMzMXFzMzPz8zMxcXMzM/FzMzFxczMz8/MzMXFzMzFxczMzd3d3d3d3d/f////////////////LJzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f////////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////////////////////////////////////////+PiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f/////////////////////////////////////////////////////////////////////d3d3d3d3d/f///////////////x/////////////////////////////////////////////////////d3d3d3d3d/f///////////////////////4aIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////4aI+PhYWFhYWFj4+Fj4+Fj4+FhY+Pj4WFhYWFhYWFhYWIjd3d3d3d3d/f///////////////////////4aIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////4aI+PhYWPj4+Fj4+Fj4+Fj4+FhY+Pj4WPj4WPj4WFj4+Ijd3d3d3d3d/f//////8f///////////////4aIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////4aIWFhYWFhYWFhYWFhYWFhYWFhYWFhYWPj4WPj4WFj4+Ijd3d3d3d3d/f///////////////4iIiIiIiIaIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////4iIiIiIiMnMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f///////////////4iIiIiIiMnMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f///////////////4iIiIiIiMnM/Pxc/PxcXFxcXFz8/Pz8/Fz8/FxcXFxcXFxc/Pz8XPzd3d3d3d3d/f///////////////4iIiIiIiMnMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f///////////////4iIiIiIiMnM/Pxc/PxcXPz8XFxcXPz8/Fz8/Fxc/Pz8XFxc/Pz8XPzd3d3d3d3d/f///////////////////////8nMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f///////////////////////8nMXFxcXFxcXPz8XFxcXPz8/FxcXFxc/Pz8XFxcXFxcXMzd3d3d3d3d/f///////////////////////8nMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f///////////////////////8nMXFxcXPz8/FxcXFxcXPz8XPz8XPz8XFz8/Pz8XFxcXFzd3d3d3d3d/f///////////////////////8nMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f/////////////x/////////8nMXFxcXPz8/Fxc/Pz8XPz8XPz8XPz8XFz8/Pz8XFxcXFzd3d3d3d3d/f///////////////////////8nMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f///////////////////////8nMzFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFzd3d3d3d3d/f//////////////////////8snMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f/////////////////////////////////////////////////////////////////////d3d3d3d3d/f///////////////////////////////////////4+IiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////////////4+IiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////////////4+IiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////////////4+IiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////////////4+IiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////////////4+IiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f/////////////////////////////////////////////////////////////////////d3d3d3d3d/f/////////////////////////////////////////////////////////////////////d3d3d3d3d/f/////////////////////////////////////////////////////////////////////d3d3d3d3d/f////9viIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////9viI+P+Pj4iI+Pj/j4+IiPj4/4WFiIj4+P+Pj4iI+Pj/j4+IiFhYX4+PiIj4+PWFjd3d3d3d3d/f////9viIWFWFj4iI+PhVhYWIiFhY/4WFiIj4+P+Pj4iI+Pj/j4+IiFhYX4+PiIj4+PWFjd3d3d3d3d/f////9viIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////9viIWFWFj4iI+PhVhYWIiFhY/4WFiIj4+PWFhYiIWFhfj4+IiFhYX4+PiIj4+P+Pjd3d3d3d3d/f////9viIWFWFj4iI+PhVhYWIiFhY/4+PiIj4+PWFhYiIWFhfj4+IiFhYX4WFiIj4+P+Pjd3d3d3d3d/f////9viIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////9viI+P+Pj4iI+PhVhYWIiFhY/4+PiIj4+PWFhYiIWFhfj4+IiPj4/4WFiIj4+P+Pjd3d3d3d3d/f////9viI+P+Pj4iI+PhVhYWIiFhY/4+PiIj4+PWFhYiIWFhfj4+IiPj4/4WFiIj4+P+Pjd3d3d3d3d/f////9viIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////+fzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f////+fzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f////+fzMXP/FxczMXFxfz8/MzFxc/8/FzMxcXFXFxczMXFxVxcXMzFxc/8/FzMxcXFXFzd3d3d3d3d/f////+fzMXP/FxczMXFxfz8/MzFxc/8/FzMxcXFXFxczMXFxVxcXMzFxc/8/FzMxcXFXFzd3d3d3d3d/f////+fzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f////+fzMXP/FxczMXFxfz8/MzFxc/8/FzMxcXFXFxczMXPz/z8/MzFxc/8/FzMxcXFXFzd3d3d3d3d/f////+fzMXFXFxczMXFxfz8/MzFxc/8/FzMxcXFXFxczMXPz/z8/MzFxc/8/FzMxcXFXFzd3d3d3d3d/f////+fzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f////+fzMXFXFxczMXFxfz8/MzFxcVcXFzMxcXFXFxczMXPz/z8/MzFxcVcXFzMxcXFXFzd3d3d3d3d/f////+fzMXFXFxczMXFxfz8/MzFxcVcXFzMxcXFXFxczMXPz/z8/MzFxcVcXFzMxcXFXFzd3d3d3d3d/f////+fzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f////+fzMXF/Pz8zMXFxVxcXMzFxcVcXFzMxcXFXFxczMXPz/z8/MzFxcVcXPzMz8/FXFzd3d3d3d3d/f////+fzMXF/Pz8zMXFxVxcXMzFxcVcXPzMz8/PXPz8zMXFxVxcXMzFxcVcXPzMz8/FXFzd3d3d3d3d/f////+fzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f////+fzMXF/Pz8zMXFxVxcXMzFxcVcXPzMz8/PXPz8zMXFxVxcXMzFxcVcXPzMz8/FXFzd3d3d3d3d/f////+fzMXF/Pz8zMXFxVxcXMzFxcVcXPzMz8/PXPz8zMXFxVxc/MzPz89cXPzMz8/FXFzd3d3d3d3d/f////+fzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f////+fzMXFXFxczMXFxVxcXMzFxcVcXPzMz8/PXFxczMXFxVxc/MzPz89cXFzMxcXFXFzd3d3d3d3d/f////+fzMXFXFxczMXFxVxcXMzFxcVcXPzMz8/PXFxczMXFxVxc/MzPz89cXFzMxcXFXFzd3d3d3d3d/f////KfzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f///////////////////////////////////////////4iIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////////////////4iIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////////////////4iIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////////////////4iIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////////////////4iIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////////////////4iIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////////////////////////////////4iIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f//////////////////H//////////////////////////////////////////////////d3d3d3d3d/f/////////////////////////////////////////////////////////////////////d3d3d3d3d/f/////////x///////////////////////////////////////////////////////////d3d3d3d3d/f/////////////////////////////////////////////////////////////////////d3d3d3d3d/f/////////////////////////////////////////////////////////////////////d3d3d3d3d/f////////////////////////////+IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////////////////////////+IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////////////////////////+IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////////////////////////+IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////H///////////////////////+IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////////////////////////+IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////////////////////////+IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////9viIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////9viIiIhYWIiI+PiIiFhYiIhYWIiIWFiIiFhYiIhYWIiIWFiIiPhYiIWFiIiFjd3d3d3d3d/f////////9viIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////9viIiIhYWIiI+PiIiPj4iIhYWIiIWFiIiFhYiIhYWIiIWFiIiPhYiIWFiIiFjd3d3d3d3d/f////////9viIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////9viIiIhYWIiI+PiIiPj4iIhYWIiIWFiIiFhYiIj4+IiIWFiIiFhYiIWFiIiPjd3d3d3d3d/f////////9viIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////9viIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f////////+fzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f////////+fzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f////////+fzMzMxcXMzMXFzMzFxczMxcXMzMXFzMzFxczMxcXMzMXFzMzFxczMXFzMzFzd3d3d3d3d/f////////+fzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f////////+fzMzMz8/MzMXFzMzFxczMz8XMzMXFzMzPxczMxcXMzMXPzMzPz8zMXFzMzFzd3d3d3d3d/f////////+fzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f////////+fzMzMz8/MzMXFzMzPz8zMz8XMzMXFzMzPxczMz8/MzMXPzMzPz8zM/PzMzPzd3d3d3d3d/f////////+fzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f////////+fzMzMz8/MzMXFzMzPz8zMxcXMzMXFzMzFxczMz8/MzMXPzMzPz8zM/PzMzPzd3d3d3d3d/f////////+fzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f////////+fzMzMxcXMzMXFzMzPz8zMxcXMzM/FzMzFxczMz8/MzMXFzMzFxczM/PzMzPzd3d3d3d3d/f///////y+fzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzd3d3d3d3d/f/////////////////////////////////////////////////////////////////////d3d3d3d3d/f/////////////////////////////////////////////////////////////////////d3d3d3d3d/f//////////////////////////////////////////////////////////////iIiIiIjd3d3d3d3d/f//////////////////////////////////////////////////////////////iIiIiIjd3d3d3d3d/f//////////////////////////////////////////////////////////////iIiIiIjd3d3d3d3d/f//////////////////////////////////////////////////////////////iIiIiIjd3d3d3d3d/f/////////////////////////////////////////////////////////////////////d3d3d3d3d/f/////////////////////////////////////////////////////////////////////d3d3d3d3d/f///////////////2+IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////2+IiI+PhYWFhYWFj4+Fj4+Fj4+FhY+Pj/j4WFj4+PhYWFhYWFhYWFjd3d3d3d3d/f///x///////////2+IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////2+IiI+PhYWPj4+Fj4+Fj4+Fj4+FhY+Pj/j4WFj4+PhY+PhY+PhYWPjd3d3d3d3d/f/////////////y/2+IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////2+IiIWFhYWFhYWFhYWFhYWFhYWFhYWFhVhYWFhYWFhY+PhY+PhYWPjd3d3d3d3d/f///////////////2+IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjd3d3d3d3d/f///////////////5/MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMjIiIiIjd3d3d3d3d/f8=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"boston-bridge\"\n    },\n    \"image1\": {\n        \"data\": \"hwQLAAwAAAAAAMzMAAAAAADAEREMAAAAABy7zMEAAADAsZlmHwwAABybHWH2wQAAHJuYGfbBAAAcm41o9sEAAMCxmZkfDAAAABy7zMEAAAAAwBERDAAAAAAAzMwAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"vibranium\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image4\":\n            case \"wakanda\":return img`\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111199999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111199999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111119999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111119999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111199999999999999999\n1999999999999999999911999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991119911999999999999999999\n1999999999999999999911119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111999199999999999999999999\n1999999999999999999911111119999999999999999999999999999999999919999999999999999999999999999999999999999999999999999999999999999991111119999999999999999999999999\n19999999991111111999991111111999999999999999999999999999999999b9999999999999999999999999999999999999999999999999999999999991111111199999999999999999999999999999\n11999999999991111111111111111111999999999999999999999999999999b9999999999999999999999999999999999999999999999999999999111111111119999999999999999999999999999999\n1111999999999911111111111111111111999999999999999999999999999bd1999999999999999999999999999999999999999999999999999911111111111999999999999999999999999999999999\n1111999999999999111111111111111111111999999999999999999999999bd1999999999999999999999999999999999999999999999999911111111111999999999999999999999999999999999999\n111119999999999999111111111111111911111999999999999999999999bdbd199999999999999999999999999999999999999999999111111111111199999999999999999999999999999999999911\n111111999999999999991111111111111119991119999999999999999999bddd199999999999999999999999999999999999991111111111111111199999999999999999999999999999999999999111\n111111119999999999999991111111111111199999999999999999999999bdbd199999999999999999999999999999999111111111111111111119999999999999999999999999999999999999991111\n111111111199999999999999111111111111111999999999999999999999bdbd199999999999999999999999999911111111111111111111199999999999999999999999999999999999999991111111\n111111111111999999999999999111111111111111999999999999999999bdbd199999999999999999999111111111111111111111111111999999999999999999999999999999999999999911111111\n11111111111111999999999999999991111111111111119999999999999dddddd19999999991111111111111111111111111111111119999999999999999999999999999999999999999991111111111\n111111111111111999999999999999919991111111111111199999999999bdbd199999991111111111111111111111111111119999999999999999999999999999999999999999999999911111111111\n1111111111111111199999999999999b999999911111111111111199999dddbdd19999991111111111111111111111199999999999999999999999999999999999999999999999999999111111111111\n1111111111111111119999999999999b9999999999991111111111111999bdbd199999999999111111111111199999999999999999999999999999999999999999999999999999999111111111111111\n111111111111111111119999999999bd199999999999999999999999999dddddd19999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111\n111111111111111111111999999999bd1999999999999999999999999999bdbd199999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111\n11111111111111111111111111999bdbd19999999999999999999999999dddbdd19999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111\n11111111111111111111111111119bddd199999999999999999999999999bdbd199999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111\n11111111111111111111111111111bdbd19999999999999999999999999dddddd19999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111\n11111111111111111111111111111bdbd199999999999999999999999999bdbd199999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111\n11111111111111111111111111111bdbd11199999999999999999999999dddbdd19999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111199\n1111111111111111111111111111dddddd11111999999999999999999999bdbd199999999999999999999999999999999999999999999999991111111111111111111111111111111111111199999999\n99991111111111111111111111111bdbd11111111119999999999999999dddddd19999999999999999999999999999999999999999111111111111111111111111111111111111111119999999999999\n9999991111111111111111111111dddbdd11111111111119999999999999bdbd199999999999999999999999999999999999999999111111111111111111111111111111111111111999999999999999\n99999999991111111111111111111bdbd11111111111111111111999999dddbdd19999999999999999999999999999999999999999911111111111111111111111111111111999119999999999999999\n9999999999991111111111111111dddddd11111111111111111111111111bdbd119999999999999999999999999999999999999999999111111111111111111111119999999991199999999991111199\n99999999999999991111111111111bdbd11111111111111111111111111dddddd11111111111111199999999999999999999999999999999991111111999999999999999999911999999999111199999\n9999999999999999999911111111dddbdd11111111111111111111111111bdbd111111111111111111111999999999999999999999999999999999999999999999999999911111111111111111999999\n99999999999999999999999991111bdbd11111111111111111111111111dddbdd11111111111111111111199999999999999999999999999999999999999999999999991111111111111199999999999\n9999999999999999999999999999dddddd19991111111111111111111111bdbd111111111111111111111199999999999999999999999999999999999999999991111111111111111199999999999999\n99999999999999999999999999999bdbd19999999999999999911111111dddddd11111111111111111119999999999999999999999999999999999999999999111111111111111999999999999999999\n9999999999999999999999999999dddbdd19999999999999999999999999bdbd199999999999999999999999999999999999999999999999999999999999111111111111999999999999999999999999\n99999999999999999999999999999bdbd19999999999999999999999999dddbdd19999999999999999999999999999999999999999999999999999991111111111199999999999999999999999999999\n9999999999999999999999999999dddddd19999999999999999999999999bdbd199999999999999999999999999999999999999999999999999999991111111999999999999999999999999999999999\n99999999999999999999999999999bdbd199999999999999999999999999bddd199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999993999999999999999dddbdd1999999999999999999999999bddddd19999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n99999999999999999999999999999bdbd1999999999999999999999999bddddddd1999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999dddddd19999999999999999999999ddddddddd1199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n99999999911199999999999999999bdbd1999999999999999999999999bddbdbdd1999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n99999999bddd1999999999999999dddbdd19999999999999999999999ddddddddd1199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999bddddd1999999999999999bdbd1999999999999999999999999bddbdbdd1999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n999999bddddddd19999999999999dddddd19999999999999999999999ddddddddd1199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n99999bddddddddd19999999999999bdbd1999999999999999999999999bddbdbdd1999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n99999bddddddddd1999999999999dddbdd19999999999999999999999ddddddddd1199999999999999999999999999999999999999999999999999999999199999999999999999999991119999999999\n9999ddddddddddd11999999999999bdbd1999999999999999999999999bddbdbdd199999999999999999999999999999999999999999999999999999999bd999999999999999999999bddd1999999999\n99999bddbbdbbdd19999999999999bddd199999999999999999999999ddddddddd119999999999999999991999999999999999999999999999999999999bd99999999999999999999bddddd199999999\n9999ddddddddddd1199999999999bddbdd199999999999999999999999bddbdbdd1999999999999999999bd199999999999999999999999999999919999bd9999999999999999999bddddddd19999999\n99999bddbbdbbdd199999999999bddbdddd19999999999999999999999dddddddd1199999911999999999bd199999999999999999999999999999bd9999bd999999999999999999bddddddddd1999999\n9999ddddddddddd11999999999dddddddcd119999999999999999999dddddbdbdd1db9999bdd199999999bd199999999999999999999999999999bd9999bd999999999999999999bddddddddd1999999\n99999bddbbdbbdd199999999999bddbdccc1999999999999999999999ddddddddd11db999bdd199999999bd199999999999999969669999999999bd9999bd99999999999999999ddddddddddd1199999\n9999ddddddddddd11999999999ddddddbbbbbbbbbbbbbbbbbbbbbbbbbddddbdbdd1ddbd99bdd199999999bd199999999999969696969996969999bd9999b6999999999999999999bddbbdbbdd1999999\n99999bddbbdbbdd199999999999bddbddddddddddddddddddddddddddddddddddd11dbd19bdd199999999bd1999999999996969666669696969696d69696d69696969696999999ddddddddddd1199999\n9999ddddddddddd11999999999ddddddddd1199999999999999999999bdddbdbdd1dbdd19bdd199999999bd199999999996666666666966669696b69696b6666666969696969999bddbbdbbdd1999999\n99999bddbbdbbdd199999999999bddbdbdd199999999999999999999dddddddddd11bdd19bdd199999999bd199999999966666666666666666666666666b666666666666969696ddddddddddd1199999\n9999ddddddddddd11991199999ddddddddd1199999999999999999999bdddbdbdd1bddb19bdd199999999bd19999996969666666666666666666666666666666666666666666666bddbbdbbdd1999999\n99999bddbbdbbdd199bdd199999bddbdbdd199999999999999999999ddddddddddbddbb19bdd199999999bd1999996969666166666666666666666666666666666666611666666ddddddddddd1169bdd\n9999ddddddddddd119bdd19999ddddddddd1199999999999999999999bdddddddbddbbb19bdd1999bd999bd199996966666bdd6666666666666666666666666666666bdd1666666bddbbdbbdd1696bdd\n96999bddbbdbbdd199bdd199999bddbdbdd199999999999999999999ddddddddbddbbbb19bdd1999bd999bd196966666666bdd6666666666666666666666666666666bdd166666ddddddddddd1169bdd\n6669ddddddddddd119bdd19999ddddddddd1199999999999999996696bddddbbddbbbbb16bdd1669bd999bd169666666bd6bdd66bd66bd66666666666666666666666bdd1666666bddbbdbbdd1666bdd\n66669bddbbdbbdd199bdd19999dbddbdbdd6d9999999999696999696d6d6bbdddbbbbbb19bdd1666bd999bd166666666bd6bdd66bd66bd66666666666666666666666bdd166666ddddddddddd1166bdd\n6666ddddddddddd119bdd199696d6d6d6d616d6969696969696966666d6d6ddbbbbbbbb16bdd1667bd777bd166666666bd6bdd66bd66bd66676766666666666666666bdd1666666bddbbdbbdd1666bdd\n66669bddbbdbbdd199bdd69696d6d6666666d6969696969666666666666666bbbbbbbbb16bdd166676777bd166666666bd6bdd66bd66bd66767676666666666661666bdd166666ddddddddddd1166bdd\n6666ddddddddddd1196d6169666666666666666666666666666666666666666bbbbbbbb16bdd166667666bd16666666dddddddddddddddd76767676666666666bd166bdd1666666bddbbdbbdd1666bdd\n66666bddbbdbbdd16666666666666666666666666666666666666666666666b6b6bbbbb16bdd166666666bd166666dddddddbbbdddddddddd777767666666666bd166bdd166666ddddddddddd1166bdd\n6666ddddddddddd116666666666666666666666666666666666666666666666b6b6bbbb16bdd166666666bd16666ddbbbbddddddbddbbbddddd7776766666666bd166bdd1666666bddbbdbbdd1666bdd\n66666bddbbdbbdd166666666666666666666666666666666666666666666666666b6bbb16bdd166666666bd16dddddddddddddddddddbbbbbbdd777676766666bd166bdd166666ddddddddddd1166bdd\n6666ddddddddddd116666666666666666666666666666666666666666666666666666b616bdd166666666bdddddddd6d6d6d6ddddddddddddddddd6767676666bd176bdd1666666bddbbdbbdd1666b6d\n66666bddbbdbbdd1666666666666666666666666666666666666666666666666666666b66bdd1666666666d6ddd6d666d666666dddbbbbbbbbddddd766767676bd167bdd166676ddddddddddd1166666\n6666ddddddddddd1166666666666666666666666666666666666666666666666666666666bdd16dd6666666d6d6d6666666666666ddddddddddddddd77776767bd176bdd1767676bddbbdbbdd1666666\n66666bddbbdbbdd16666666666666666666666666666767666666666666666666666666666ddddd6d6666666666666666666666666ddddddbbbbbbdddd777676bd167bdd167677ddddddddddd1166666\n6666ddddddddddd1166666666666666666666666666767676666666666666666666666666b6ddd6d666666666666666666666666666d6ddddddddddddddd7777bd177bdd1777777bddbbdbbdd1666666\n66666bddbbdbbdd166666666666666666666666666767676767676766666666666666666666666d66666666666666666666666666666b6bbbbbbbdddd6d6d676b6177bdd177777ddddddddddd1166666\n6666ddddddddddd1166666666666666666666666676777776767676766666666666666666666666666666666666666666666666666666d6ddddddd6d6d6d66666d677bdd1777777bddbbdbbdd1666666\n66666bddbbdbbdd16666666666666666666666667677777777777776766666666666666666666666666666666666666666666666666666ddddddddd6d6666666661676dd177777ddddddddddd1166666\n6666ddddddddddd116666666666666666666676767777777777777776766666666666666666666666666666666666666666666666666666ddddddd6d6666666666666b6d1767777bddbbdbbdd1666666\n66666bddbbdbbdd16666666666667676666676767677777777777777767666666666666666666666666666666666666666666666666666ddd6d6ddd6666666666666666d167677ddddddddddd1166666\n6666ddddddddddddd767666667676767676767667777777777777777776766666666666666666666666666666666666666666666666666666d6d6d6666666666666666666666677bddbbdbbdd1666666\n66666bdd7b7b7d7d767676767676767676767777777777777777777777767666666666666666666666666666666666666666666666666666666666666666666666666666666676ddddddddddd1166666\n6666ddd7d7d7d7d7d777676777676767676777777777777777777777777767676767676667676666666766666666666666666666666666666666666666666666666666666666666bddbbdbbdd1666667\n76666b7d77d777dd777777777777777777777777777777777777777777777676767677767676767676767676767676666666666666666666666666666666666666666666666666dddddddd7d71767676\n6767d7d7777777777677777777777777777777777777777777777777777676776777777767677777676767676767676766666666666666666667676766666666666666666666666bddbbd7b7d7676767\n76767b7777777777777777777777777777777777777777777777777777777777777777767777777777777776767676766666666666666666666676767666666666666666666666dddd7d7d7d7d767676\n77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777676767676767676666666667676767666667676766666666666bd7b7d7b7d7676767\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777767676767676767666767676767676667676767676767666dd7d7d7d7777767777\n777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777676767676767676767676767676767676767676777676767d7b7777777777777\n77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777767776767677767676767776767677777776767b7d77777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777767777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\n`;\n            case \"image8\":\n            case \"shuri\":return img`\n......ff............\n......fffff.........\n.......fffff........\n.......fffff........\n.......ffeef........\n.......feeee........\n........feee........\n......fffbf.........\n.....c8fbfff........\n....cffcfbf8........\n...cf8c8bf88........\n...cef88bb8b........\n...cee8bbb8eb.......\n...beef8ff8eb.......\n....bbcc.ffb........\n......cc.ff.........\n.....cc...ff........\n.....cc...ff........\n.....ccc..fff.......\n....................\n`;\n            case \"image11\":\n            case \"riri\":return img`\n....................\n.......8ffff........\n......f8fffff.......\n......888ffff.......\n....2.8989999.......\n...2a28889999.......\n..2a22a2eeee........\n..222fffeefff.......\n.2a2588296925.......\n.2dd8882f9f28.......\n.bbbeeff2f2f3.......\n..beeefff2ff3.......\n.ba22fff2f2fe3......\n.ba222f2fff2e3......\n.ba222ff8f8f33......\n.b222ff88f88........\n..bbb888..88........\n.....d8...d8........\n....fdd..fdd........\n....ffff.ffff.......\n`;\n            case \"image10\":\n            case \"okoye\":return img`\n....................\n....................\n........333.........\n.......33333........\n.......33333........\n.......33333........\n.......a3333........\n.......5aaa.........\n.....aaf555a........\n....a222f2f2........\n...552222f225.......\n...335a22a254.......\n...333aa2a233...ddd.\n.fc33cfffffcccbd111d\n...333a2ff223...ddd.\n....aa2ffff2a.......\n....afff..ffa.......\n.....ff...ff........\n.....fff..fff.......\n....................\n`;\n            case \"image9\":\n            case \"namor\":return img`\n....................\n....................\n........fffff.......\n........fffff.......\n........444ff.......\n........4444f.......\n........44447.......\n.........9449.......\n........469964......\n........4488e44.....\n........4e444e46....\n........4e444464....\n.111...446555544....\n19996ff4ffffff44fff.\n.111.....66777......\n.........ee.44......\n.........5e.54......\n.........5e9549.....\n........e664466.....\n....................\n`;\n            case \"image5\":\n            case \"boston-bridge\":return img`\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff\nffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666699999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f58558ff8cc55c55c55c55c55c55cfffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff8888888888ccccccccccccccccccccffffffffffffffffffffffffffffffffffffffff2ffffffffffffffff\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f58558ff8ccffcf5c55c55c55c55cfffffffffff1fffffffffffffffffffffffffffffffffffffffffffff\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff66666666999999999999ffffffffffffffff\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff88888888ccccccccccccffffffffffffffff\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f58558ff8ccffcf5c55cffcffc55cfffffffffffffffffffff88888888ccccccccccccffffffffffffffff\nfffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff88888888ccccccccccccffffffffffffffff\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f58558ff8cc55c55c55cffcffc55cfffffffffffffffffffff88888888ccccccccccccffffffffffffffff\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff88888888ccccccccccccffffffffffff2fff\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ff8ff8ff8cc55c55c55cffcffc55cfffffffffffffffffffff88888888ccccccccccccffffffffffffffff\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff85858588cc5cfcfcfc5cffffffffffffffff\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff88888888ccccccccccccffffffffffffffff\nffffffffffffffffffffffffffffffff2fffffffffffffff888888fffffffffffffffffff8ff8ff8ff8cc55c55c55c55c55c55cfffffffffffffffffffff85858588cc5cfcfcfc5cffffffffffffffff\nfffffffffffffffffffffffffffffffffffffffff1ffffff888888fffffffffffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff88888888ccccccccccccffffffff66666669\nfffffffffffff66666666999999999999fffffffffffffff888888fffffffffffffffffff8ff8ff8ff8cc55c55c55c55c55c55cfffffffffffffffffffff88888888ccccccccccccffffffff8888888c\nfffff1fffffff88888888ccccccccccccfffffffffffffff888888fffffffffffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff88888888ccccccccccccffffffff8888888c\nfffffffffffff88888888ccccccccccccfffffffffffffff888888fffffffffffffffffff8f58558558cc55c55c55c55c55c55cfffffffffffffffffffff88888888ccccccccccccffffffff8888888c\nfffffffffffff88888888ccccccccccccfffffffffffffff888888fffffffffffffffffff8888888888ccccccccccccccccccccfffffffff1fffffffffff88888888ccccccccccccffffffff8888888c\nfffffffffffff88888888ccccccccccccfffffffffffffff888888fffffffffffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff8f8f8f88cc5c5c5c5c5cffffffff8f8f858c\nfffffffffffff88888888ccccccccccccfffffffffffffff888888fffffffffffffffffff8f58558558ccffcffcffc55c55c55cfffffffffffffffffffff88888888ccccccccccccffffffff8888888c\nfffffffffffff88888888ccccccccccccfffffffffffffff888888fffffffffffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff8f8f8f88cc5c5c5c5c5cffffffff8f8f858c\nfffffffffffff85858588cc5cfcfcfc5cfffffffffffffff888888fffffffffffffffffff8f58558558ccffcffcffc55c55c55cfffffffffffffffffffff88888888ccccccccccccffffffff8888888c\nfffffffffffff88888888ccccccccccccfffffffffffffff888888ffffffff2ffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff88888888ccccccccccccffffffff8585858c\nfffffffffffff85858588cc5cfcfcfc5cfffffffffffffff888888fffffffffffffffffff8f58558558ccffcffcffc55c55c55cfffffffffffffffffffff88888888ccccccccccccffffffff8888888c\nfffffffffffff88888888ccccccccccccfffffffff666666699999999999999ffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff88888888ccccccccccccffffffff8585858c\nfffffffffffff88888888ccccccccccccfffffffff8888888ccccccccccccccffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff88888888ccccccccccccffffffff8888888c\nfffffffffffff88888888ccccccccccccfffffffff8888888ccccccccccccccffffffffff8f58558558cc55c55c55c55c55c55cfffffffffffffffffffff858f8f88cc5c5cfcfcfcffffffff858f858c\nfffffffffffff88888888ccccccccccccfffffffff8888888ccccccccccccccffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff88888888ccccccccccccffffffff8888888c\nfffffffffffff88888888ccccccccccccfffffffff8888888ccccccccccccccffffffffff8f58558558cc55c55c55c55c55c55cfffffffffffffffffffff858f8f88cc5c5cfcfcfcffffffff858f858c\nfffffffffffff8f8f8f88cc5c5c5c5c5cfffffffff8f8f858ccfcfc5c5c5cccffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff88888888ccccccccccccffffffff8888888c\nfffffffffffff88888888ccccccccccccfffffffff8888888ccccccccccccccffffffffff8ff8ff8ff8ccffcffc55c55c55c55cfffffffffffffffffffff88888888ccccccccccccffffffff858f858c\nfffffffffffff8f8f8f88cc5c5c5c5c5cfffffffff8f8f858ccfcfc5c5c5c5cffffffffff8888888888ccccccccccccccccccccfffffffffffffffffffff88888888ccccccccccccffffffff8888888c\nfffffffffffff88888888ccccccccccccfffffffff8888888ccccccccccccccffffffffff8888888888ccccccccccccccccccccffffffffffffff888888888888888ccccccccccccffffffff8585858c\nfffffffffffff88888888ccccccccccccfffffffff8585858cc5c5c5c5c5c5cffffffffff8ff8ff8ff8ccffcffc55c55c55c55cffffffffffffff888888888888888ccccccccccccffffffff8888888c\nfffffffffffff88888888ccccccccccccfffffffff8888888ccccccccccccccffffffffff8888888888ccccccccccccccccccccffffffffffffff888888885858588cc5cfcfc5c5cffffffff8f8f858c\nfffffffffffff88888888ccccccccccccfffffffff8585858ccfcfc5c5c5c5cffffffffff85585f8ff8ccffcffc55c55c55c55cffffffffffffff888888888888888ccccccccccccffffffff8888888c\nfffff888888ff88888888ccccccccccccfffffffff8888888ccccccccccccccffffffffff8888888888ccccccccccccccccccccfffff88fffffff888888885858588cc5c5c5c5c5cffffffff8f8f858c\nfffff888888ff858f8f88cc5c5cfcfcfcfffffffff858f858ccfcfc5cfcfc5cffffffffff85585f8ff8cc55c55c55c5fcffcffcfffff88fffffff888888888888888ccccccccccccffffffff8888888c\nfffff888888ff88888888ccccccccccccfffffffff8888888ccccccccccccccffffffffff8888888888ccccccccccccccccccccfffff88fffffff888888888888888ccccccccccccffffffff8585858c\nfffff888888ff858f8f88cc5c5cfcfcfcfffffffff858f858cc5c5c5cfcfc5cffffffffff8888888888ccccccccccccccccccccfffff88fffffff888888888888888ccccccccccccffffffff8888888c\nfffff888888ff88888888ccccccccccccfffffffff8888888ccccccccccccccffffffffff8ff8ff8ff8cc55c55c55c5fcffcffcfffff88fffffff888888888888888ccccccccccccffffffff8f8f858c\nfffff888888ff88888888ccccccccccccfffffffff858f858cc5c5c5cfcfc5cffffffffff8888888888ccccccccccccccccccccfffff88fffffff888888888888888ccccccccccccffffffff8888888c\nfffff888888ff88888888ccccccccccccfffffffff8888888ccccccccccccccffffffffff8ff8ff8ff8cc55c55c55c5fcffcffcfffff88fffffff888888885858588cc5c5c5c5cfcffffffff8f8f858c\nfffff888888ff88888888ccccccccccccfffffffff8585858cc5cfcfc5c5c5cffffffffff8888888888ccccccccccccccccccccfffff88fffffff888888888888888ccccccccccccffffffff8888888c\nfffff888888ff88888888ccccccccccccfffffffff8888888ccccccccccccccffffffffff8ff8ff8ff8cc55c55c55c5fcffcffcfffff88fffffff888888885858588cc5c5c5c5c5cffffffff8585858c\nfffff888888ff85858588cc5cfcfc5c5cfffffffff8f8f858cc5cfcfc5c5c5cffffffffff8888888888ccccccccccccccccccccfffff88fffffff888888888888888ccccccccccccffffffff8888888c\nfffff888888ff88888888ccccccccccccfffffffff8888888ccccccccccccccffffffffff8888888888ccccccccccccccccccccfffff88fffffff888888888888888ccccccccccccffffffff8f8f858c\nfffff888888ff85858588cc5c5c5c5c5cfffffffff8f8f858cc5c5c5c5cfc5cffffffffff8ff8558558cc55c55c55c55c55c55cfffff88fffffff888888888888888ccccccccccccffffffff8888888c\nfffff888888ff88888888ccccccccccccfffffffff8888888ccccccccccccccffffffffff8888888888ccccccccccccccccccccfffff88fffffff888888888888888ccccccccccccffffffff8f8f858c\nfffff888888ff88888888ccccccccccccfffffffff8585858cc5c5c5c5cfc5cf888888fff8ff8558558cc55c55c55c5fcffc55cfffff88fffffff888888888888888ccccccccccccffffffff8888888c\nfffff888888ff88888888ccccccccccccfffffffff8888888ccccccccccccccf888888fff8888888888ccccccccccccccccccccfffff88fffffff888888885858588cc5cfcfc5c5cffffffff8585858c\nfffff888888ff88888888ccccccccccccfffffffff8f8f858ccfc5c5c5cfc5cf888888fff8ff8558558cc55c55c55c5fcffc55cfffff88fffffff888888888888888ccccccccccccffffffff8888888c\nfffff888888ff88888888ccccccccccccfffffffff8888888ccccccccccccccf888888fff8888888888ccccccccccccccccccccfffff88fffffff888888885858588cc5c5c5c5c5cffffffff8585858c\nfffff888888ff85858588cc5c5c5c5cfcfffffffff8f8f858ccfc5c5c5c5c5cf888888fff8888888888ccccccccccccccccccccfffff88fffffff888888888888888ccccccccccccffffffff8888888c\nfffff888888ff88888888ccccccccccccfffffffff8888888ccccccccccccccf888888fff8ff8558558cc55c55c55c55c55c55c888888888fffff888888888888888ccccccccccccffffffff8f8f858c\nfffff888888ff85858588cc5c5c5c5c5cfffffffff8585858ccfcfcfcfcfc5cf888888fff8888888888cccccccccccccccccccc888888888fffff888888888888888ccccccccccccffffffff8888888c\nfffff888888ff88888888ccccccccccccfffffffff8888888ccccccccccccccf888888fff8ff8558558cc55cffcffcf5c55c55c888888888fffff888888888888888ccccccccccccffffffff8f8f858c\nfffff888888ff88888888cccccccccccc8888888ff8f8f858ccfcfcfcfcfc5cf888888fff8888888888cccccccccccccccccccc888888888fffff888888888888888ccccccccccccffffffff8888888c\nfffff888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8ff8558558cc55cffcffcf5c55c55c888888888fffff888888885858f88cc5c5cfcfcfcffffffff8f8f858c\nfffff888888ff88888888cccccccccccc8888888ff8f8f858ccfcfcfc5c5c5cf888888fff8888888888cccccccccccccccccccc888888888fffff888888888888888ccccccccccccffffffff8888888c\n88fff888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8888888888cccccccccccccccccccc888888888fffff888888885858f88cc5c5cfcfcfcffffffff8888888c\n88fff888888ff85858588cc5cfcfc5c5c8888888ff8585858cc5c5c5cfcfc5cf888888fff8ff8ff8ff8cc55cffcffcf5c55c55c888888888fffff888888888888888ccccccccccccffffffff8f8f858c\n88fff888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8888888888cccccccccccccccccccc888888888fffff888888888888888ccccccccccccffffffff8888888c\n88fff888888ff85858588cc5c5c5c5c5c8888888ff8585858ccfcfc5cfcfc5cf888888fff8ff8ff8ff8cc55cffcffcf5c55c55c888888888fffff888888888888888ccccccccccccffffffff8f8f858c\n88fff888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8888888888cccccccccccccccccccc888888888fffff888888888888888ccccccccccccffffffff8888888c\n88fff888888ff88888888cccccccccccc8888888ff8f8f858ccfcfc5c5c5c5cf888888fff8ff8ff8ff8cc55cffcffcf5c5fcffc888888888fffff888888888888888ccccccccccccffffffff8585858c\n88fff888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8888888888cccccccccccccccccccc888888888fffff888888885858588cc5c5c5c5c5cffffffff8888888c\n88fff888888ff88888888cccccccccccc8888888ff8f8f858cc5c5c5cfcfc5cf888888fff8888888888cccccccccccccccccccc888888888fffff888888888888888ccccccccccccffffffff8585858c\n88fff888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8558558ff8cc55c55c55c55c5fcffc888888888fffff888888885858588cc5cfcfcfc5cffffffff8888888c\n88fff888888ff85858f88cc5c5cfcfcfc8888888ff8f8f858cc5c5c5cfcfc5cf888888fff8888888888cccccccccccccccccccc888888888fffff888888888888888ccccccccccccffffffff8f8f858c\n88fff888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8558558ff8cc55c55c55c55c5fcffc888888888fffff888888888888888ccccccccccccffffffff8888888c\n88fff888888ff85858f88cc5c5cfcfcfc8888888ff8585858cc5cfcfc5c5c5cf888888fff8888888888cccccccccccccccccccc888888888fffff888888888888888ccccccccccccffffffff8f8f858c\n88fff888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8558558ff8ccffcffc55c55c5fcffc888888888fffff888888888888888ccccccccccccffffffff8888888c\n88fff888888ff88888888cccccccccccc8888888ff858f8f8cc5cfcfc5c5c5cf888888fff8888888888cccccccccccccccccccc888888888fffff888888888888888ccccccccccccffffffff8f8f858c\n88fff888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8888888888cccccccccccccccccccc888888888fffff88888888f8f8588cc5cfcfcfc5cffffffff8888888c\n88f88888888ff88888888cccccccccccc8888888ff858f8f8cc5cfcfcfcfc5cf888888fff8ff8ff8ff8ccffcffc55c55c55c55c888888888fffff888888888888888ccccccccccccffffffff8585858c\n88f88888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8888888888cccccccccccccccccccc888888888fffff888888885858588cc5cfcfcfc5cffffffff8888888c\n88f88888888ff85858588cc5c5c5c5c5c8888888ff8585858cc5c5c5cfcfc5cf888888fff8ff8f58558ccffcffc55c55c55c55c888888888fffff888888888888888ccccccccccccffffffff858f8f8c\n88f88888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8888888888cccccccccccccccccccc888888888fffff888888888888888ccccccccccccffffffff8888888c\n88f88888888ff85858588cc5cfcfcfc5c8888888ff858f8f8cc5c5c5cfcfc5cf888888fff8ff8f58558cc55c55c55cffcffc55c888888888fffff888888888888888ccccccccccccffffffff858f8f8c\n88f88888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8888888888cccccccccccccccccccc888888888fffff888888888888888ccccccccccccffffffff8888888c\n88f88888888ff88888888cccccccccccc8888888ff858f8f8cc5c5c5cfcfc5cf888888fff8888888888cccccccccccccccccccc888888888fffff888888888888888ccccccccccccffffffff8585858c\n88f88888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8ff8ff8ff8cc55c55c55cffcffc55c888888888fffff888888888888888ccccccccccccff8888ff8888888c\n88f88888888ff88888888cccccccccccc8888888ff8585858ccfcfc5c5c5c5cf888888fff8888888888cccccccccccccccccccc888888888fffff888888885858588cc5c5cfcfcfcff8888ff858f8f88\n88f88888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8ff8ff8ff8cc55c55c55cffcffc55c888888888fffff888888888888888ccccccccccccff8888ff88888888\n88f88888888ff8f8f8588cc5cfcfcfc5c8888888ff8585858ccfcfc5c5c5c5cf888888fff8888888888cccccccccccccccccccc888888888fffff888888885858588cc5c5cfcfcfcff8888ff858f8f88\n88f88888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8ff8ff8ff8cc55c55c55c55c55c55c888888888fffff888888888888888ccccccccccccff8888ff88888888\n88f88888888ff85858588cc5cfcfcfc5c8888888ff858f8f8ccfcfc5c5c5c5cf888888fff8888888888cccccccccccccccccccc888888888fffff888888888888888ccccccccccccff8888ff85858588\n88f88888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8888888888cccccccccccccccccccc888888888fffff888888888888888ccccccccccccff8888ff88888888\n88f88888888ff88888888cccccccccccc8888888ff858f8f8cc5c5c5c5c5c5cf888888fff8558ff8ff8cc55c55c55c55c55c55c888888888fffff888888888888888ccccccccccccff8888ff85858588\n88f88888888ff88888888cccccccccccc8888888ff8888888ccccccccccccccf888888fff8888888888cccccccccccccccccccc888888888fffff888888888888888ccccccccccccff8888ff88888888\n88f88888888ff88888888cccccccccccc8888888ff8888888ccfcfccc5c5c5cf888888fff8558ff8ff8cc55c55c55c55c55c55c888888888fffff888888885858f88cc5c5cfcfcfcff8888ff858f8f88\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n`;\n            case \"image1\":\n            case \"vibranium\":return img`\n. . . . c c c . . . . \n. . . c 1 1 1 c . . . \n. . c 1 b b b 1 c . . \n. c 1 b 9 9 9 b 1 c . \nc 1 b 9 d 8 d 9 b 1 c \nc 1 b 9 1 9 8 9 b 1 c \nc 1 c 6 1 9 8 9 c 1 c \nc 1 c 6 6 1 6 9 c 1 c \n. c 1 f 6 6 6 f 1 c . \n. . c 1 f f f 1 c . . \n. . . c 1 1 1 c . . . \n. . . . c c c . . . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"Y_tM[y,I43/c6-x:rNHf\">Shuri</variable><variable id=\"cWU_H%i`r`nlEI!VX[kh\">vibranium</variable><variable id=\"en%p}Mi0|H)mHW4y:#=5\">Riri</variable><variable id=\"}Y~B61[a=s1vi|9L!(og\">Okoye</variable><variable id=\"G{]G3dd3(,uHuJ}tri%=\">Namor</variable><variable id=\"pK89iDC6:`;JBycAwD5)\">wakanda_bg</variable><variable id=\"ZngxSSy.G!PN2k*S+/F@\">mySprite</variable><variable id=\")iMU};{!HyQA+cHIf*nK\">myEnemy</variable><variable type=\"KIND_SpriteKind\" id=\"7M{psQ$6A1gaH$Vg.T,Z\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"W4J]0B@^N=hR-sx)0[8%\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"k+@!h/V_4[f!!GOK?8(G\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"]9CoAquzBl]d!)*@V{3c\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"F0:X#yd(CF@(2pa2pUHa\">Guard</variable></variables></xml>",
  "main.ts": "namespace SpriteKind {\n    export const Guard = SpriteKind.create()\n}\n",
  "pxt.json": "{\n    \"name\": \"WAKANDA - Oct26\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.10.36\",\n        \"tag\": \"v1.10.36\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/3a5a7e13703edf0412c17bdb9b1469e282a5b31b\",\n        \"target\": \"1.10.36\",\n        \"pxt\": \"8.3.9\"\n    },\n    \"preferredEditor\": \"blocksprj\",\n    \"palette\": [\n        \"#000000\",\n        \"#FFFFFF\",\n        \"#FF2121\",\n        \"#74301C\",\n        \"#C06921\",\n        \"#FFF609\",\n        \"#249CA3\",\n        \"#78DC52\",\n        \"#003FAD\",\n        \"#87F2FF\",\n        \"#ff8134\",\n        \"#A4839F\",\n        \"#5C406c\",\n        \"#E5CDC4\",\n        \"#91463d\",\n        \"#000000\"\n    ]\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
