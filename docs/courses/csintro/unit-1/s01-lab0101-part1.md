# Lab 1.1 Part 1: Blocks scavenger hunt!

## Blocks scavenger hunt! @showdialog

This activity is a scavenger hunt.
Some of the blocks will be familiar to you from previous labs.
Others may be new.

If your instructor provided you with a worksheet for this lab,
complete the worksheet as you go through this tutorial.

## First block!

1.   Find the  
``||variables(sprites):set mySprite to||`` ``||sprites:sprite [] of kind Player||``   
block and add it to the   
``||loops(noclick):on start||``   
container already in the workspace.
1.   Give your sprite an image.   
(Select one from the **Gallery** for now.)

---

**Questions**

*Note*: If your instructor provided you with a worksheet,
write the answers to these questions on your worksheet.

-   Which drawer in the toolbox holds this block?
-   What does this block do?

If you need help, remember that you can select the help icon
(the question mark) to see a hint!

```blocks
// @highlight
let mySprite: Sprite = sprites.create(img`.`, SpriteKind.Player)
```

## Next block!

1.   Find the   
``||sprites:set||`` ``||variables(sprites):mySprite||``
``||sprites:position to x [0] y[0]||``   
 block.
1.   Add the block to **the bottom** of your ``||loops(noclick):on start||`` container.

Try different values for **x** and **y**.

---

**Questions**

-   Which drawer in the toolbox holds this block?
-   What does this block do?
-   Are there any numbers that are **not** allowed for **x** or **y**?

```blocks
let mySprite: Sprite = sprites.create(img`.`, SpriteKind.Player)
// @highlight
mySprite.setPosition(0, 0)
```

## Let's move!

1.   Find the   
``||controller:move||`` ``||variables(controller):mySprite||``
``||controller:with buttons (+)||``   
 block.
2.   Add the block to **the bottom** of your ``||loops(noclick):on start||`` container.

---

**Questions**

-   Which drawer in the toolbox holds this block?
-   What does this block do?
-   Which buttons are used to move the sprite?

```blocks
let mySprite: Sprite = sprites.create(img`.`, SpriteKind.Player)
mySprite.setPosition(0, 0)
// @highlight
controller.moveSprite(mySprite)
```

## Move some more!

1.   In your   
``||controller(noclick):move||`` ``||variables(noclick):mySprite||``
``||controller(noclick):with buttons (+)||``   
block, click the **expand** button.
     -   The *expand* button is the plus sign at the end of the block.

---

**Questions**

-   What new items appear?
-   What happens when you change the values of **vx** and **vy**?
-   How can you use those values to make the sprite **only** move
**horizontally** (left and right)?
-   How can you use those values to make the sprite **only** move
** vertically** (up and down)?
-   Are there any numbers that are **not** allowed for **vx** and **vy**?

~hint What kind of numbers should I try?
-   Try some negative numbers.
-   What happens when the velocity is zero?
hint~

```blocks
let mySprite: Sprite = sprites.create(img`.`, SpriteKind.Player)
mySprite.setPosition(0, 0)
// @highlight
controller.moveSprite(mySprite, 50, 0)
```

## Sprites can talk?

1.   Find the   
``||variables(sprites):mySprite||`` ``||sprites:say ":)"||``   
block.
2.   Add the block to **the bottom** of your ``||loops(noclick):on start||`` container.

---

**Questions**

-   Which drawer in the toolbox holds this block?
-   What does this block do?

```blocks
let mySprite: Sprite = sprites.create(img`.`, SpriteKind.Player)
mySprite.setPosition(0, 0)
controller.moveSprite(mySprite, 50, 0)
// @highlight
mySprite.say(":)")
```

## Sprites CAN talk!

1.   In your   
``||variables(noclick):mySprite||`` ``||sprites(noclick):say ":)"||``   
block,
select the **expand** button.

~hint What is the "expand" button?
-   The *expand* button is the plus sign at the end of the block.
hint~

---

**Questions**

-   What new items appear?
-   What is the purpose of each of the new items?

```blocks
let mySprite: Sprite = sprites.create(img`.`, SpriteKind.Player)
mySprite.setPosition(0, 0)
controller.moveSprite(mySprite, 50, 0)
// @highlight
mySprite.say(":)", 1000)
```
