# Lab 1.1 Part 2: Renaming variables
### @explicitHints true


## Renaming sprites @showdialog

Before our next scavenger hunt, let's learn how to change the name
of a sprite. Follow these instructions to change the
name of your sprite from **mySprite** to **heroSprite**.

## Make a hero!

Let's change the name of your sprite to **heroSprite**.

**Note**: Scroll down to see a video of the following steps.

---

1.   In any of the red ovals with the name **mySprite**,
select the **down arrow**. A menu appears.
1.   In that menu, select **Rename variable...**.
1.   In the dialog that appears, enter the new name, **heroSprite**.
1.   Select **OK** or press **Enter** on your keyboard to close the dialog.

Now, in every block where that sprite is used, the name has changed!

In all future programs, make sure to give your sprites meaningful names!

![Renaming a variable in MakeCode](https://alex-kulcsar.github.io/introcs-tutorials/assets/images/S01.L01.01.P02.rename_variable.gif)


#### ~ tutorialhint

```blocks
// @highlight
let heroSprite: Sprite = sprites.create(sprites.food.smallTaco, SpriteKind.Player)
heroSprite.setPosition(80, 80)
controller.moveSprite(heroSprite, 50, 0)
heroSprite.say(":)", 1000)
```

```template
let mySprite: Sprite = sprites.create(sprites.food.smallTaco, SpriteKind.Player)
mySprite.setPosition(80, 80)
controller.moveSprite(mySprite, 50, 0)
mySprite.say(":)", 1000)
```
