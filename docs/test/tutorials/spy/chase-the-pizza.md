# Chase the Pizza
### @explicitHints true

## {Introduction @unplugged}

![Game animation](/static/tutorials/chase-the-pizza/chasing.gif)

In this tutorial you will create a game with 2 sprites, a ``||sprites:Player||`` sprite and a ``||sprites:Food||`` sprite. The goal of the game is to eat as much pizza as you can before the time runs out! Each time your player catches the pizza, you gain points and the countdown is restarted.

## {Step 2}

First, **set the background color**.


~hint How do I do that? 🤷🏽

---

You can make this happen in two ways.  


- :tree: Open the <br/>
``||scene:Scene||``<br/>
toolbox drawer and drag <br/>
``||scene:set background color to [color]||`` <br/>
into **the first line** of your program. 


- :keyboard: Type
```spy
scene.setBackgroundColor(0)
```
directly into the first line of your program.

💡 _Feel free to choose your own color if you don't like the swatch in the block. You can replace the number **0** with anything between **0 & 15**._ 


hint~



---

###### _Click the button that says "**➡ Next**" to go to the next step of the tutorial._ 


#### ~ tutorialhint

```spy
scene.setBackgroundColor(0)
```

## {Step 3}

**Time to create a sprite!**

Set your sprite **image** and **kind** in the second line of the program.



~hint How do I do that? 🤷🏽

---

You can make this happen in two ways.  


- :paper plane: Open the <br/>
``||sprites:Sprites||``<br/>
toolbox drawer and drag <br/>
``||sprites:sprite [img] of kind [kind]||`` <br/>
into **the second line** of your program. 


- :keyboard: Type
```spy
let mySprite = sprites.create(img`
    3
`, SpriteKind.player)
```
directly into the second line of your program.

💡 _We will choose our player sprite in the next step._ 


hint~



#### ~ tutorialhint
```spy
scene.setBackgroundColor(7)
mySprite = sprites.create(img`. .
. .`, SpriteKind.Player)
```

## {Step 3}

Draw your ``||sprites:Player||`` character by using the image editor for  ``||variables(sprites):set mySprite||``.
Use the color palette and design tools to draw an image on the canvas. Click **Done** when you are finished.

![Image editor](/static/tutorials/chase-the-pizza/image-editor-js.gif)

## {Step 4}

Put in the code to ``||controller:move mySprite||`` with the ``||controller:controller||``.

#### ~ tutorialhint
```spy
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
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
```

## {Step 5}

Just like with ``||variables(noclick):mySprite||``, ``||create a sprite||`` again and set it to the a variable named
``||variables(noclick):pizza||``. This time, set the ``||sprites:sprite kind||`` to ``||sprites:food||``. This will
be the **pizza** sprite in our game.

#### ~ tutorialhint
```spy
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
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
let pizza = sprites.create(img`
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

## {Step 6}

Use the image editor for ``||variables(noclick):pizza||`` and then select the **Gallery** view. Scroll to find the image of a small pizza (or any other image you like!) and select it to load into the image editor.

![Image gallery](/static/tutorials/chase-the-pizza/image-gallery-spy.gif)

## {Step 7 @resetDiff}

Add a ``||sprites:on overlap||`` event to your code. Set the ``||sprites:sprite kind||`` that cooresponds to
``otherSprite`` as ``||sprites:Food||``.

#### ~ tutorialhint
```spy
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {

})
```

## {Step 8}

When our ``||sprites:Player||`` overlaps with the ``||variables(noclick):pizza||`` sprite, let’s add a point to our game score. Pun in the code to ``||info:change score by||`` 1`.

#### ~ tutorialhint
```spy
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
})
```

## {Step 9}

Let’s set the position for ``||variables(noclick):pizza||`` to random locations around the screen. We use
``otherSprite`` and ``||sprites:set its position||``. Righy now, just use `0` for both `x` and `y`.

#### ~ tutorialhint
```spy
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    otherSprite.setPosition(0, 0)
})
```

## {Step 10}

Put in code for the `x` and `y` positions of ``otherSprite`` to use a ``||math:pick a random||`` number.
The Arcade game screen is `160` pixels wide, and `120` pixels high. In the first ``||math:pick random||``
in the `x` coordinate of the ``||sprites:otherSprite position||``, change the maximum value from **0** to
**160**. In the second ``||math:pick random||`` in the ``y`` coordinate, change the maximum value from
**0** to **120**.

#### ~ tutorialhint
```spy
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
})
```

## {Step 11}

Let’s restart our countdown each time. Add the code to ``||info:start countdown||`` and make the countdown
count be `10`.

```spy
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})
```

## {Complete @resetDiff}

Congratulations, you have completed your game! Use the Game Simulator to play by moving your ``||sprites:Player||`` around the screen to try and eat as much pizza as possible before the time runs out. What’s your high score?

#### ~ tutorialhint
```spy
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
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
let pizza = sprites.create(img`
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
    info.startCountdown(10)
})
```


```package
chase-the-pizza=github:kiki-lee/chase-the-pizza
```