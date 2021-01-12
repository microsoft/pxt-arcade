# Chase the Pizza

### ~button /#tutorial:/tutorials/chase-the-pizza

Try this tutorial!

### ~

## Introduction @unplugged

In this tutorial you will create a game with 2 sprites, a 
**Player** sprite and a **Food** sprite.  

The goal of the game is to eat as much pizza as you can before time 
runs out! 

Each time your player catches the pizza, you gain points and the 
countdown starts over.
<hr/>
![Game animation](/static/tutorials/chase-the-pizza.gif)

## Step 1

🎨 **Let's start with a background color to make this pop** 🎨
<hr/>

🔲 Open the ``||scene:Scene||`` category and grab a 
``||scene:set background color to [ ]||`` block.  
Drag that into the empty **on start** container already in the workspace.  

🔲 Click the grey oval in the new block. The **color palette** will open.
Choose your background color!  
<hr/>

To see what your selection looks like in your game, look at the 
**simulator window** on the left.


```blocks
//@highlight
scene.setBackgroundColor(7)
```

## Step 3

😊 **Let's add a main player** 😊
<hr/>

🔲 From the ``||sprites:Sprites||`` category, grab the 
``||variables: set [mySprite] to sprite [ ] of kind [Player]||`` block, then snap 
it into the end of your **on start** container.

🔲 Click inside the empty grey box in the new block to open the **sprite editor**.

🔲 Draw your player using the color palette and design tools, 
or toggle the top switch to **Gallery** and choose a ready-made sprite. 

🔲 Click **Done** when you are finished.  
<br/>

```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(7)
// @highlight
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 . . . . .
. . . 5 5 5 5 5 5 5 5 5 5 . . .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 .
. 5 5 5 f f 5 5 5 5 f f 5 5 5 .
5 5 5 5 f f 5 5 5 5 f f 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5
5 5 5 f 5 5 5 5 5 5 5 5 f 5 5 5
. 5 5 5 f 5 5 5 5 5 5 f 5 5 5 .
. 5 5 5 5 f f f f f f 5 5 5 5 .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. . . 5 5 5 5 5 5 5 5 5 5 . . .
. . . . . 5 5 5 5 5 5 . . . . .
`, SpriteKind.Player)
```
<hr/>
![Image editor](/static/tutorials/chase-the-pizza/image-editor.gif)

## Step 5

🎮 **Time to add the code to control your player** 🎮
<hr/>

🔲 Open the ``||controller:Controller||`` category and grab a  
``||controller:move [mySprite] with buttons||`` block.  
Snap it into the **end** of your **on start** container. 
<hr/>

Now you can move your player around the screen with the controller, 
the arrow keys on your keyboard, or the **W A S D** keys. 

Try moving your character in the **simulator window**.  
<br/>

```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 . . . . .
. . . 5 5 5 5 5 5 5 5 5 5 . . .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 .
. 5 5 5 f f 5 5 5 5 f f 5 5 5 .
5 5 5 5 f f 5 5 5 5 f f 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5
5 5 5 f 5 5 5 5 5 5 5 5 f 5 5 5
. 5 5 5 f 5 5 5 5 5 5 f 5 5 5 .
. 5 5 5 5 f f f f f f 5 5 5 5 .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. . . 5 5 5 5 5 5 5 5 5 5 . . .
. . . . . 5 5 5 5 5 5 . . . . .
`, SpriteKind.Player)
// @highlight
controller.moveSprite(mySprite)
```

## Step 6

🍕 **Pizza anyone?** 🍕
<hr/>

🔲 Right click your ``||variables: set [mySprite] to sprite [😊] of kind [Player]||``
block and click **Duplicate**.

🔲 Drag the resulting block down and snap it in to the *end* of the 
**on start** container.

🔲 In the new block, change the kind from **Player** to **Food** 
using the dropdown menu.

🔲 Also in the new block, click the sprite icon to open the sprite editor and
change the second smiley face to a pizza (either by drawing a slice, or by
switching to the **Gallery** and choosing one from the images provided.)  
<br/>

```blocks
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 . . . . .
. . . 5 5 5 5 5 5 5 5 5 5 . . .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 .
. 5 5 5 f f 5 5 5 5 f f 5 5 5 .
5 5 5 5 f f 5 5 5 5 f f 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5
5 5 5 f 5 5 5 5 5 5 5 5 f 5 5 5
. 5 5 5 f 5 5 5 5 5 5 f 5 5 5 .
. 5 5 5 5 f f f f f f 5 5 5 5 .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. . . 5 5 5 5 5 5 5 5 5 5 . . .
. . . . . 5 5 5 5 5 5 . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
// @highlight
mySprite = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)
```

## Step 7

**The pizza can't have the same name as our player!**  

Let's rename the ``||variables:mySprite||`` variable in the second
**set sprite** block and call it ``||variables:pizza||``.
<hr/>

🔲 In the second **set sprite** block, click the word **mySprite** to open a dropdown menu.

🔲 From the dropdown, select **Rename variable...** 

🔲 Type ``pizza`` as the new sprite name and click **Ok**.  
<hr/>

```blocks
let mySprite: Sprite = null
let pizza: Sprite = null
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 . . . . .
. . . 5 5 5 5 5 5 5 5 5 5 . . .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 .
. 5 5 5 f f 5 5 5 5 f f 5 5 5 .
5 5 5 5 f f 5 5 5 5 f f 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5
5 5 5 f 5 5 5 5 5 5 5 5 f 5 5 5
. 5 5 5 f 5 5 5 5 5 5 f 5 5 5 .
. 5 5 5 5 f f f f f f 5 5 5 5 .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. . . 5 5 5 5 5 5 5 5 5 5 . . .
. . . . . 5 5 5 5 5 5 . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
// @highlight
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)
```


## Step 10

**Here's where the fun comes in!**

We need some code to tell the computer to do something 
when the player reaches the pizza.
<hr/>

🔲 From the ``||sprites:Sprites||`` category, drag an 
``||sprites:on [sprite] of kind [Player] overlaps [otherSprite] of kind [Player]||`` 
container out into an empty area of the workspace.

🔲 Change the second sprites kind to **Food**.  
<br/>

```blocks
// @highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {

})
```

## Step 12

When the player overlaps the pizza, the player should get a point. 

**Let's add that code!**
<hr/>

🔲 From the ``||info:Info||`` category, grab a ``||info:change score by [1]||`` 
block and snap it into your empty **on sprite overlaps** container.  
<br/>

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    // @highlight
	info.changeScoreBy(1)
})
```

## Step 13

**Catching pizza is easy when it's always in the same place...let's get it moving.**
<hr/>

🔲 From the ``||sprites:Sprites||`` category, 
drag out a ``||sprites:set [mySprite] position to x [0] y [0]||`` 
block and snap it into the end of your **on sprite overlaps** container.

🔲 Click ``||variables:mySprite||`` on your new block, and change it to
``||variables:pizza||`` using the dropdown menu.  
<br/>


```blocks
let pizza: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    // @highlight
    pizza.setPosition(0, 0)
})
```

![Change mySprite to pizza](/static/tutorials/chase-the-pizza/sprite-position-rename.png)

## Step 15

Great! Now we need to change both the horizontal position (**x**) and the 
vertical position (**y**) to random numbers.

<hr/>

🔲 Open the ``||math:Math||`` catergory and drag two
``||math:pick random [0] to [10]||`` blocks onto the workspace. 

🔲 Move one of those new blocks to replace the **0** of the **x** value in the 
**set pizza position** block, and the other to replace the **0** of the
**y** value.
<hr/>
Go ahead and test the game you've got so far.  
<br/>

 
```blocks
let pizza: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, 10), randint(0, 10))
})
```

## Step 16

**The Arcade game screen is `160` pixels wide, and `120` pixels high.**

A quick change to our code will let us use more of that area.
<hr/>


🔲 In the first ``||math:pick random [0] to [10]||`` block, change **10** to 
**160**.

🔲 In the second ``||math:pick random [0] to [10]||`` block, change **10** to 
**120**.  
<br/>

```blocks
let pizza: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    pizza.setPosition(randint(0, 160), randint(0, 120))
})
```

## Step 17

**Lastly, let's add a little pressure with a game countdown!**
<hr/>

🔲 From the ``||info:Info||`` category, drag out a ``||info:start countdown [10] s||``
block and snap it into the end of your  *on sprite overlaps** container.

🔲 You can leave your timer at **10** seconds, or (to make the game a little harder)
replace it with a lower number, like **5**.  
<br/>

```blocks
let pizza: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    pizza.setPosition(randint(0, 160), randint(0, 120))
    // @highlight
    info.startCountdown(10)
})
```
## Complete

**Congratulations, you have completed your game!**

Now it's time to try it out by moving the player around the screen, 
trying to eat as much pizza as possible before the time runs out. 

**What’s your high score?**

```blocks
let pizza: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 . . . . .
. . . 5 5 5 5 5 5 5 5 5 5 . . .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 .
. 5 5 5 f f 5 5 5 5 f f 5 5 5 .
5 5 5 5 f f 5 5 5 5 f f 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5
5 5 5 f 5 5 5 5 5 5 5 5 f 5 5 5
. 5 5 5 f 5 5 5 5 5 5 f 5 5 5 .
. 5 5 5 5 f f f f f f 5 5 5 5 .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. . . 5 5 5 5 5 5 5 5 5 5 . . .
. . . . . 5 5 5 5 5 5 . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    pizza.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})
```
