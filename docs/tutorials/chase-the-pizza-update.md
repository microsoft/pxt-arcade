# Chase the Pizza

### ~button /#tutorial:/tutorials/chase-the-pizza

Try this tutorial!

### ~

## {Introduction @unplugged}

This tutorial will help you create a game where your ``||sprites:Player||``
sprite chases a ``||sprites:Food||`` sprite.

![Game animation](/static/tutorials/chase-the-pizza/chase-the-pizza.gif)

Eat as much pizza as you can before the time runs out!
Each time your player catches the pizza, you gain points and the countdown is restarted.


## {Step 2}

**🎨 Let's start with a poppin' bakckground 🎨**

---

► Open the ``||scene:Scene||`` Toolbox drawer and drag
``||scene:set background color to [ ]||`` into the ``||loops:on start||``
container already in the workspace.

► Click **> Next** when you're ready for the next set of instructions.


```blocks
// @highlight
scene.setBackgroundColor(0)
```

## {Step 3}

► In the ``||scene:set background color to [ ]||`` block,
click on the grey color oval to open the color palette and select
your favorite background color.

► Take a look at the simulator window to see what it looks like so far.

![Choose background color](/static/tutorials/chase-the-pizza/background-color.jpg)


## {Step 4}

**😎 Time to select your hero 😎**
Let's create a new ``||sprites:Player||`` character.

---

► Open the ``||sprites:Sprites||`` category and drag
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||`` into the **end** of the
``||loops:on start||`` container.

► Click the grey box in the new block to open the **Image Editor** where you can draw
a main character.

![Image editor](/static/tutorials/chase-the-pizza/image-editor.gif)

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



## {Step 5}

**🏃🏾‍♀️ Let's get moving 🏃🏾‍♂️**

---

► From the ``||controller:Controller||`` category, drag
``||controller:move [mySprite] with buttons||`` to **the end** of the
``||loops:on start||`` container.

► Now you can try moving your
``||sprites:Player||`` sprite around the screen with the arrow keys in the simulator.


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

## {Step 6}

**Oh no!  If you move too fast, your player goes off the screen!**

---

► From the ``||sprites:Sprites||`` category, drag
``||sprites:set [mySprite] stay in screen <on>||`` to **the end** of the
``||loops:on start||`` container.

► Now your sprite won't wander away.


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
controller.moveSprite(mySprite)
// @highlight
mySprite.setStayInScreen(true)
```

## {Step 7}

**🍕 Pizza time 🍕**

---

► From ``||sprites:Sprites||``, drag
``||variables(sprites):set [mySprite2] to sprite [ ] of kind [Player]||``
to **the end** of the ``||loops:on start||`` container.

► Click the grey box in the new block to open the **Image Editor** and draw your snack.

► Change the kind of this sprite from ``||sprites:Player||`` to ``||sprites:Food||``
using the dropdown menu at the end of the new block.

![Set sprite kind](/static/tutorials/chase-the-pizza/sprite-kind.jpg)

---

```blocks
let mySprite: Sprite = null
let mySprite2: Sprite = null
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
mySprite.setStayInScreen(true)

// @highlight
mySprite2 = sprites.create(img`
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
`, SpriteKind.Food)
```


## {Step 7}

**What a catch!**
Let's add a new container for code that will run when the sprites overlap.

---

► From ``||sprites:Sprites||``, drag
``||sprites:on [sprite] of kind [Player] overlaps [otherSprite] of kind [Player]||``
into an empty area on your workspace.

► Change the kind of otherSprite from ``||sprites:Player||`` to ``||sprites:Food||``
using the dropdown menu at the end of the container block.

![Overlap sprite kind](/static/tutorials/chase-the-pizza/overlap-kind-sprite.png)

---

```blocks
// @highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {

})
```


## {Step 8}

**When ``||sprites:Player||`` overlaps with the ``||sprites:Food||``,
let’s add a point to our score.**

---

► Open the ``||info:Info||`` category and drag  ``||info:change score by [1]||``
into the new container block.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    // @highlight
	info.changeScoreBy(1)
})
```


## {Step 9}

**🎮 Test your game in the simulator 🎮**

How do you like it so far?


## {Step 10}

Every time the ``||sprites:Player||`` catches the ``||sprites:Food||``, we should
move the food to a new spot.

---

► Open the ``||sprites:Sprites||`` Toolbox drawer and drag
``||sprites:set [mySprite] position to x [0] y [0]||`` into **the end of** the
new **on overlaps** container.


```blocks
let mySprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    // @highlight
    mySprite.setPosition(0, 0)
})
```

## {Step 11}

**We need to make a little change so the position block will
know which sprite to move.**

---

► Grab the red ``||variables(noclick):otherSprite||`` value block from the header
of the **on overlaps** container and drag it down to replace ``||variables(noclick):mySprite||``
in the **set position** block.


![Use otherSprite Variable](/static/skillmap/space/give-var.gif)



## {Step 12}

**🎲 How about some random numbers? 🎲**
Each time the food moves, it should reappear in a random location.

---

► Open the ``||math:Math||`` category and drag two
``||math:pick random [0] to [10]||`` value blocks onto the workspace.

► Each ``||math:pick random [0] to [10]||`` should replace a different **0**
value in the **set position** block.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    //@highlight
    otherSprite.setPosition(randint(0, 10), randint(0, 10))
})
```



## {Step 13}

**👐 Let's widen the field 👐**
The Arcade game screen is **160** pixels wide _(x)_, and **120** pixels high _(y)_.
Those will be the maximum numbers for our random positions.

---

► In the first ``||math:pick random [0] to [10]||`` block _(for the **x** value)_,
change the maximum value from **10** to **160**.

► In the second ``||math:pick random [0] to [10]||`` block _(for the **y** value)_.
change the maximum value from  **10** to **120**.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    //@highlight
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
})
```

## {Step 9}

**🎮 Test your game in the simulator 🎮**

Does it work the way you expected it to?



## {Step 14}

**⌚ Time for some urgency ⌚**
Let's add a timer that restarts each time food appears. That way, if we don't get
to it quickly enough, the game will end.

---

► From the ``||info:Info||`` category, drag ``||info:start countdown [10] (s)||``
 into **the end** of the ``||sprites:on [sprite] of kind [Player] overlaps [otherSprite] of kind [Food]||``
container already in the workspace.

► Change **10** seconds to **3** seconds to make the game super-challenging!

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
    // @highlight
    info.startCountdown(3)
})
```

## {Complete}

**Congratulations, you have completed your game!**

Now move your player and try and eat as much pizza as possible before time runs out.

When you're done, click **Done** to publish your game so you can share it with
friends and family.


```blocks
let mySprite2: Sprite = null
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
mySprite.setStayInScreen(true)
mySprite2 = sprites.create(img`
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
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(3)
})
```
