# Chase the Pizza
### @explicitHints true


### ~button /#tutorial:/tutorials/chase-the-pizza

Try this tutorial!

### ~

## Introduction @showdialog

![Game animation](/static/tutorials/chase-the-pizza/chasing.gif)

Create a game where the goal is to eat as much pizza as you can 
before the time runs out! 


## {Step 2}

**Set the background color**

---

- :tree: Open the <br/>
``||scene:Scene||``<br/>
toolbox drawer and drag <br/>
``||scene:set background color [ ]||`` <br/>
into **the empty** ``||loops(noclick):on start||`` container already in your workspace. 

~hint What does that mean? 🤷🏽

---

When giving instructions, we'll highlight some text to give you a better idea of what you are looking for.

For example, when we suggest the <br/>
``||scene:set background color to [ ]||``<br/>
block, we are pointing you toward <br/>

```block
scene.setBackgroundColor(13)
```

hint~

💡 _Feel free to choose your own color if you don't like the swatch in the block._ 


---

- :mouse pointer: Click the button that says **Next** to go to the 
next step of the tutorial.


#### ~ tutorialhint
```blocks
// @highlight
scene.setBackgroundColor(13)
```


## {Step 3}

Add a player **sprite**.

---

- :paper plane: Open the ``||sprites:Sprites||`` drawer and drag <br/>
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||`` <br/>
into **the end of** the  ``||loops(noclick):on start||`` block already in your workspace.

---


~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change — 
things like scale, position, and lifespan are all properties of sprites.

Our player will be a sprite, too.

hint~


~hint Show me 🔍

![Add a sprite block](/static/tutorials/chase-the-pizza/mySprite.gif)

hint~


#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(13)
// @highlight
mySprite = sprites.create(img`.`, SpriteKind.Player)
```

## {Step 4}

- :mouse pointer: Draw your sprite by clicking on the empty grey square in the <br/> 
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||`` <br/>
block to open the **Sprite Editor**. 


- :mouse pointer: Click **Done** when you are finished drawing.

~hint Show me 🔍

![Image editor](/static/tutorials/chase-the-pizza/draw.gif)

hint~



#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(13)
// @highlight
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 f 5 5 5 5 f 5 5 5 5 5 
. 5 5 5 5 f f 5 5 5 f f 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 f f f f f f f f f 5 5 5 
. 5 5 5 5 f b b b b b f 5 5 5 5 
. . 5 5 5 5 f b b b f 5 5 5 5 . 
. . 5 5 5 5 5 f f f 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```


## {Step 5}

**Make the sprite move**

---

- :game: Open ``||controller:Controller||`` and drag<br/> 
``||controller:move [mySprite] with buttons||``<br/>
into **the end of** the <br/>
``||loops(noclick):on start||`` block already in your workspace.

Now you can move your sprite around the screen using the arrow buttons on the game pad or your keyboard. 


~hint Show me 🔍

![Add the move block](/static/tutorials/chase-the-pizza/move.gif)

hint~


#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 f 5 5 5 5 f 5 5 5 5 5 
. 5 5 5 5 f f 5 5 5 f f 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 f f f f f f f f f 5 5 5 
. 5 5 5 5 f b b b b b f 5 5 5 5 
. . 5 5 5 5 f b b b f 5 5 5 5 . 
. . 5 5 5 5 5 f f f 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
// @highlight
controller.moveSprite(mySprite)
```




## {Step 6}


- :binoculars: Test your project in the game window!

You should be able to move your sprite with the joypad or arrow keys on your keyboard.


![Look for the game window in the lower right](/static/tutorials/chase-the-pizza/game.png)







## {Step 7}

**Add some pizza**

---

- :paper plane: Open ``||sprites:Sprites||`` and drag<br/> 
``||variables(sprites):set [pizza] to sprite [ ] of kind [Player]||``<br/> 
into **the end of** the <br/>
``||loops(noclick):on start||`` block already in your workspace.


- :mouse pointer: Click **Player** in<br/>
``||variables(noclick):set [pizza] to sprite [ ] of kind [Player]||``<br/> 
and choose  **Food** instead. 

---

~hint Show me 🔍

![Change the pizza to food](/static/tutorials/chase-the-pizza/food.gif)

hint~


```blockconfig.local
let pizza = sprites.create(img`.`, SpriteKind.Player)
```


#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
let pizza: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
. . . . 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
5 5 5 5 f 5 5 5 5 f 5 5 5 5 5 . 
5 5 5 5 f f 5 5 5 f f 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 f f f f f f f f f 5 5 5 . 
5 5 5 5 f b b b b b f 5 5 5 5 . 
5 5 5 5 5 f b b b f 5 5 5 5 5 . 
. 5 5 5 5 5 f f f 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
// @highlight
pizza = sprites.create(img`.`, SpriteKind.Food)
```


## {Step 8}


- :mouse pointer: Choose your pizza by clicking the empty grey square inside <br/> 
``||variables(noclick):set [pizza] to sprite [ ] of kind [Food]||`` <br/>
to open the **Sprite Editor**. 

- :mouse pointer: Switch to the **Gallery** tab at the top. 
![Select the gallery](/static/skillmap/assets/gallery.png)


- :mouse pointer: Choose your pizza, then click **Done**.

~hint Show me 🔍

![Image gallery](/static/tutorials/chase-the-pizza/gallery.gif)

hint~


💡 _Feel free to draw your own pizza if you prefer!_

```blockconfig.local
let pizza = sprites.create(img`.`, SpriteKind.Player)
```


#### ~ tutorialhint
```blocks
let pizza: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
. . . . 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
5 5 5 5 f 5 5 5 5 f 5 5 5 5 5 . 
5 5 5 5 f f 5 5 5 f f 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 f f f f f f f f f 5 5 5 . 
5 5 5 5 f b b b b b f 5 5 5 5 . 
5 5 5 5 5 f b b b f 5 5 5 5 5 . 
. 5 5 5 5 5 f f f 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
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
```



## {Step 9}

**Make something happen when the sprites overlap!**

---

- :paper plane: Open ``||sprites:Sprites||`` and drag the<br/>
``||sprites:on [sprite] of kind [Player] overlaps [otherSprite] of kind [Food]||``<br/>
container into **an empty area** of the workspace.


🤷🏽‍♀️ _Need help? Click the lightbulb in the circle below to see what blocks you need in this step._



```blockconfig.local
let pizza = sprites.create(img`.`, SpriteKind.Player)
```


#### ~ tutorialhint
```blocks
// @highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {

})
```



## {Step 10}

**Add a point when the sprites overlap**

---

- :id card: Open ``||info:Info||`` and drag<br/> 
``||info:change score by [1]||``<br/> 
into **the empty** <br/>
``||sprites(noclick):on [sprite] ... overlaps [otherSprite]||`` <br/>
container already in the workspace.


```blockconfig.local
let pizza = sprites.create(img`.`, SpriteKind.Player)
```

#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    // @highlight
	info.changeScoreBy(1)
})
```





## {Step 11}


- :binoculars: Check your game!

Notice that you get WAAAYYYYY too many points when your player 
sprite overlaps the pizza?  

We'll fix that in the next step.




## {Step 12}

**Teleport the pizza to a random location each time the sprites overlap.**

~hint What is random? 🤷🏽‍♀️

---

A "random" number is a value that you can't predict ahead of time. 

In Arcade, we use this block:

```block
randint(0, scene.screenWidth())
```

to ask for a random number between **0** and the **width of the screen**.

hint~

---

- :paper plane: Open ``||sprites:Sprites||``, and drag <br/>
``||sprites:set [pizza] position to...||``<br/> 
into the **end of the** <br/>
``||sprites(noclick):on [sprite] ... overlaps [otherSprite]||`` <br/>
container already in the workspace.


```blockconfig.local
let pizza = sprites.create(img`.`, SpriteKind.Player)
```

#### ~ tutorialhint
```blocks
let pizza: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    // @highlight
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
```




## {Step 13}

**Let’s start a countdown each time the sprites overlap.**

---

- :id card: From ``||info:Info||``, drag <br/>
``||info:start countdown [3] (s)||`` <br/> 
into the **end of the** <br/>
``||sprites(noclick):on [sprite] ... overlaps [otherSprite]||`` <br/>
container already in the workspace.


```blockconfig.local
let pizza = sprites.create(img`.`, SpriteKind.Player)
```

#### ~ tutorialhint
```blocks
let pizza: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    // @highlight
    info.startCountdown(3)
})
```


## {Finale}

**🎉 Great job! 🎉**

You've made a **Chase the Pizza** game.

Try playing your game. How many points can you get before time runs out?

When you're finished playing, click **Done** to share your game with family and friends!



```blockconfig.local
let pizza = sprites.create(img`.`, SpriteKind.Player)
```

#### ~ tutorialhint
```blocks
let pizza: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(13)
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
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    info.startCountdown(3)
})
```


```blockconfig.global
let pizza: Sprite = null

scene.setBackgroundColor(13)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {})
randint(0, scene.screenWidth())
pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
info.startCountdown(3)

```

```package
chase-the-pizza=github:kiki-lee/chase-the-pizza
```