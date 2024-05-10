# Chase the Pizza
### @explicitHints true

## {Introduction @showdialog}

In this tutorial, you'll create a game with a ``||sprites:Player||`` sprite and a ``||sprites:Food||`` sprite. 

![Game animation](/static/tutorials/chase-the-pizza/chasing.gif)

The goal of the game is to eat as much pizza as you can before time runs out! 

Each time your player catches the pizza, you gain points and the countdown restarts.

## {Step 2}

**Let's start with a background color**. 🎨

You can make this happen in one of two ways.  

---


- Open the <br/>
``||scene:Scene||``<br/>
toolbox drawer and drag <br/>
``||scene:set background color to [color]||`` <br/>
into **the first line** of your program, then hit **enter**

OR


- Type
```typescript
scene.setBackgroundColor(7)
```
directly into the first line of your program, then hit **enter**

~hint Prefer another color? 💡

---

 _Feel free to choose your own color. If you don't like the swatch in the block, 
 you can replace the default number with anything between **0 & 15**._ 

hint~



---

###### _Click the button that says "**➡ Next**" to go to the next step of the tutorial._ 


#### ~ tutorialhint

```typescript
//@highlight
scene.setBackgroundColor(0)
```

## {Step 3}

- :binoculars: Look at your project in the game window to see what your code has done.

You should see a background color that matches the color you entered. 

Try changing the background color from 
0=black to 7=green to 9=aqua. 

Do you feel powerful yet?

![Look for the game window in the lower right](/static/tutorials/chase-the-pizza/game2.png "You can test your game in the mini game window as you go.")




## {Step 4}

**Time to create a sprite!**

Set your sprite **image** and **kind** in the second line of the program.



~hint How do I do that? 🤷🏽

---

You can make this happen in two ways.  


- Open the <br/>
``||sprites:Sprites||``<br/>
toolbox drawer and drag <br/>
``||sprites:sprite [img] of kind [kind]||`` <br/>
into **the second line** of your program, then hit **enter**

OR

- Type
```typescript
let mySprite = sprites.create(img`0`, SpriteKind.Player)
```
directly into the second line of your program, then hit **enter**

💡 _You can choose your player sprite in the next step._ 


hint~



#### ~ tutorialhint
```typescript
scene.setBackgroundColor(7)
//@highlight
mySprite = sprites.create(img`0`, SpriteKind.Player)
```

## {Step 5}

Draw your ``||sprites:Player||`` character using the image editor.

~hint How do I do that? 🤷🏽

---

Click the color palette (🎨) to the left of the line of code that defines your sprite. 

That will open the image editor where you can make your own design or choose one of ours out of the **Gallery**.

Click **Done** when you are finished and your design will be added to your code.

![Image editor](/static/tutorials/chase-the-pizza/image-editor-js.gif)

hint~


#### ~ tutorialhint
```typescript
scene.setBackgroundColor(7)
//@highlight
let mySprite = sprites.create(img`
     . . . . f f f f f f f f . . . .
     . . f f 5 5 5 5 5 5 5 5 f f . .
     . f 5 5 5 5 5 5 5 5 5 5 5 5 f .
     . f 5 5 5 5 5 5 5 5 5 5 5 5 f .
     f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f
     f 5 5 5 f f 5 5 5 5 f f 5 5 5 f
     f 5 5 5 1 d 5 5 5 5 1 d 5 5 5 f
     f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f
     f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f
     f 5 5 5 f 5 5 5 5 5 5 f 5 5 5 f
     f 5 5 5 f f f f f f f f 5 5 5 f
     f 5 5 5 5 f b b b b f 5 5 5 5 f
     . f 5 5 5 5 f f f f 5 5 5 5 f .
     . f 5 5 5 5 5 5 5 5 5 5 5 5 f .
     . . f f 5 5 5 5 5 5 5 5 f f . .
     . . . f f f f f f f f f f . . .
 `, SpriteKind.Player)
```


## {Step 6}

Add the code to move your sprite around with the ``||controller:controller||``.


~hint How do I do that? 🤷🏽

---

Either:

- Open the <br/>
``||controller:Controller||``<br/>
toolbox drawer and drag <br/>
``||controller:move [mySprite] with buttons||`` <br/>
into the next line of your program, then hit **enter**.<br/>
<br/>⚠️ Make sure to replace **null** with mySprite. ⚠️ 

OR

- Type
```typescript
controller.moveSprite(mySprite)
```
directly into the second line of your program, then hit **enter**


hint~



#### ~ tutorialhint
```typescript
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
//@highlight
controller.moveSprite(mySprite)
```



## {Step 7}

- :binoculars: Test your project in the game window and try moving your sprite with the arrow keys.

~hint What's a sprite?

---


In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change -- things like scale, position, and lifespan are all properties of sprites.

Our main player will be a sprite, too.

hint~




## {Step 8}

Create a new sprite and name it **pizza**. 

This time, set the ``||sprites:kind||`` to ``||sprites:Food||``. 



~hint Remind me how... 🤷🏽

---

Either:

- Open the <br/>
``||sprites:Sprites||``<br/>
toolbox drawer and drag <br/>
``||sprites:sprite [img] of kind [kind]||`` <br/>
to the end of your program, then hit **enter** and change 
**mySprite** to **pizza** and SpriteKind.**Player** to SpriteKind.**Food**

OR

- Type
```typescript
let pizza = sprites.create(img`0`, SpriteKind.Food)
```
directly at the end of your program, then hit **enter**

💡 _You can choose your food sprite in the next step._ 


hint~


#### ~ tutorialhint
```typescript
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
//@highlight
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

## {Step 9}

Use the image editor to find a picture for your ``||sprites(noclick):pizza||``
in the **Gallery**.

⚠️ _Watch out! There are a few different pizzas in the gallery. If you scroll down too far, you might find one that's WAAAAYYYY to big!_

![Image gallery](/static/tutorials/chase-the-pizza/image-gallery-spy.gif)



## {Step 10 @resetDiff}

Add a code block that will run when ``||sprites(noclick):Food||`` overlaps ``||sprites(noclick):Player||``.


~hint How do I do that? 🤷🏽

---

Either:

- Open the <br/>
``||sprites:Sprites||``<br/>
toolbox drawer and drag <br/>
``||sprites:run code on [sprite] of kind [kind]...||`` <br/>
to the end of your program, then hit **enter** and change 
the second SpriteKind.**Player** to SpriteKind.**Food**

OR

- Type
```typescript
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    
 })
```
directly at the end of your program, then hit **enter**

💡 _We will add code to this event in the next step._ 


hint~



#### ~ tutorialhint
```typescript
//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {

})
```

## {Step 11}

When our ``||sprites(noclick):Player||`` overlaps the ``||sprites(noclick):Food||`` 
sprite, let’s add a point to the score. 

Add code that will <br/>
``||info:change score by [1]||`` </br>
**inside** the event. <br/>
To do that, you'll need to 
add code into the space between the opening of the event **{** and the closing of the event **}**.



~hint How do I do that? 🤷🏽

---

You should have a blank line in between your opening **{** and closing **}**.

Either:

- Open the <br/>
``||info:Info||``<br/>
toolbox drawer and drag <br/>
``||info:change score by [1]||`` <br/>
into that blank space and hit **enter**

OR

- Type
```typescript
info.changeScoreBy(1)
```
directly into the blank space and hit **enter**



hint~


#### ~ tutorialhint
```typescript
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	//@highlight
    info.changeScoreBy(1)
})
```

## {Step 12}

When the sprites overlap, let's also set a new random position for 
``||sprites(noclick):pizza||``. 


~hint How do I do that? 🤷🏽

---

Either:

- Open the <br/>
``||sprites:Sprites||``<br/>
toolbox drawer and drag <br/>
``||sprites:set [mySprite] position to x [x] y [y]||`` <br/>
into the overlap event, right after the **score** line, then hit **enter**.<br/> 
Change **mySprite** to **pizza** 

OR

- Type
```typescript
    pizza.setPosition(0, 0)
```
into the overlap event, right after the score block


💡 _We will add code to choose random locations in the next step._ 


hint~


#### ~ tutorialhint
```typescript
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    //@highlight
    pizza.setPosition(0, 0)
})
```

## {Step 13}

Change the code for the `x` and `y` positions of **pizza** 
to use a ``||math:random||`` number.


~hint How do I do that? 🤷🏽

---

The Arcade game screen is `160` pixels wide, and `120` pixels high. 

That means you will want the random number for **x** to go between **0 & 160**.
The random number for **y** should go between **0 & 120**.

- Replace the first **0** with **randint(0, 160)**

- Replace the second **0** with **randint(0, 120)**

hint~



#### ~ tutorialhint
```typescript
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    //@highlight
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
})
```

## {Step 14}

Let’s start a 5 second countdown each time the sprites overlap.


~hint How do I do that? 🤷🏽

---

- Type
```typescript
    info.startCountdown(5)
```
into the overlap event, right after the **setPosition** line.

hint~

#### ~ tutorialhint
```typescript
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
    //@highlight
    info.startCountdown(5)
})
```

## {Finale @resetDiff}

### Congratulations! <br/>
You completed your game! <br/>
🥳 🥳 🥳

Test your game and see if you can get 20 points before time runs out.

When you're finished, click **Done** to share your game with family and friends.


#### ~ tutorialhint
```typescript
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
    pizza.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(5)
})
```




```blockconfig.local
scene.setBackgroundColor(7)
info.startCountdown(5)
```


```package
chase-the-pizza=github:kiki-lee/chase-the-pizza
```