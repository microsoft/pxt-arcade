# Lab 1.1 Part 1: Blocks Scavenger Hunt!
### @explicitHints true

## Blocks scavenger hunt! @showdialog

This activity is a scavenger hunt.
Some of the blocks will be familiar to you from previous labs.
Others may be new.

If your instructor provided you with a worksheet for this lab,
complete the worksheet as you go through this tutorial.

## First block!

---

1.   Find the  
``||variables(sprites):set [mySprite] to sprite [] of kind [Player]||``<br/>
block and add it to the  <br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace.
1.   Select an image from the gallery.

---

**Worksheet**

If your instructor provided you with a worksheet,
write the answers to these questions on your worksheet.

-   Which drawer in the toolbox holds the block discussed above?
-   What does this block do?



#### ~ tutorialhint

```blocks
// @highlight
let mySprite: Sprite = sprites.create(sprites.food.smallTaco, SpriteKind.Player)
```

## Next block!

1.   Find the<br/>
``||sprites:set [mySprite] position to x [0] y[0]||``<br/>
 block.
1.   Add the block to **the bottom** of your ``||loops(noclick):on start||`` container.

Try different values for **x** and **y**.

---

**Worksheet**

-   Which drawer in the toolbox holds this block?
-   What does this block do?
-   Are there any numbers that are **not** allowed for **x** or **y**?


#### ~ tutorialhint

```blocks
let mySprite: Sprite = sprites.create(sprites.food.smallTaco, SpriteKind.Player)
// @highlight
mySprite.setPosition(80, 80)
```

## Let's move!

1.   Find the<br/>
``||controller:move [mySprite] with buttons (+)||``<br/>
 block.
2.   Add the block to **the bottom** of your ``||loops(noclick):on start||`` container.

---

**Worksheet**

-   Which drawer in the toolbox holds this block?
-   What does this block do?
-   Which buttons are used to move the sprite?


#### ~ tutorialhint

```blocks
let mySprite: Sprite = sprites.create(sprites.food.smallTaco, SpriteKind.Player)
mySprite.setPosition(80, 80)
// @highlight
controller.moveSprite(mySprite)
```

## Move some more!

1.   In your<br/>
``||controller(noclick):move [mySprite] with buttons (+)||``<br/>
block, click the **expand** button.


~hint What is the "expand" button?

---

-   The *expand* button is the plus sign at the end of the block.
hint~

---

**Worksheet**

-   What new items appear?
-   What happens when you change the values of **vx** and **vy**?
-   How can you use those values to make the sprite **only** move
**horizontally** (left and right)?
-   How can you use those values to make the sprite **only** move
** vertically** (up and down)?
-   Are there any numbers that are **not** allowed for **vx** and **vy**?

~hint What numbers should I try? 🤷‍♂️

---

-   Try some negative numbers.
-   What happens when you try zero?
hint~


#### ~ tutorialhint

```blocks
let mySprite: Sprite = sprites.create(sprites.food.smallTaco, SpriteKind.Player)
mySprite.setPosition(80, 80)
// @highlight
controller.moveSprite(mySprite, 50, 0)
```

## Sprites can talk?

1.   Find the<br/>
``||sprites:[mySprite] say [":)"] (+) ||``<br/>
block.
2.   Add the block to **the bottom** of your ``||loops(noclick):on start||`` container.

---

**Worksheet**

-   Which drawer in the toolbox holds this block?
-   What does this block do?


#### ~ tutorialhint

```blocks
let mySprite: Sprite = sprites.create(sprites.food.smallTaco, SpriteKind.Player)
mySprite.setPosition(80, 80)
controller.moveSprite(mySprite, 50, 0)
// @highlight
mySprite.say(":)")
```

## Sprites CAN talk!

1.   In your<br/>
``||sprites(noclick):[mySprite] say [":)"] (+) ||``<br/>
block, select the **expand** button.



---

**Worksheet**

-   What new items appear?
-   What is the purpose of each of the new items?


#### ~ tutorialhint

```blocks
let mySprite: Sprite = sprites.create(sprites.food.smallTaco, SpriteKind.Player)
mySprite.setPosition(80, 80)
controller.moveSprite(mySprite, 50, 0)
// @highlight
mySprite.say(":)", 1000)
```
