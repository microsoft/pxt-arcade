# Bug Arena Back and Forth
### @hideReplaceMyCode true

## Bug Arena Introduction @showdialog

Welcome to the 👾 **Bug Arena** 👾 where the smartest bugs battle for glory!

Watch this introduction video to get started, and then click Ok.

![Bug Arena Intro](youtube:U_bcAht2o0A "video introduction of bug arena")

## Back-and-Forth Algorithm @showdialog

![Bug Arena Back and Forth](/static/skillmap/bug-arena/back-and-forth.gif "animation of back and forth pattern")

💡 Smart decision to pick this algorithm - millions of lawn mowers can't be wrong! 🚜

Follow these directions to code your bug's AI algorithm ✨ to move back and forth across the screen.

## Set direction

Our bug moves on its own, but it's important to make sure that it starts out moving in the right direction! 🗺️

From the ``||hourOfAi:Bug AI||`` Toolbox category, drag a ``||hourOfAi:face towards 0||`` block out and drop into the ``||hourOfAi:on start||`` block.

~hint What does this do?

---

``||hourOfAi:Face towards||`` will turn your bug to face a specific angle in degrees where:
- 0 = right
- 90 = down
- 180 = left
- 270 = up

![Face towards degrees](/static/skillmap/bug-arena/degrees.png "face towards degrees")

So our bug will start off moving towards the right side of the screen.

hint~

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onStart(function () {
    //@highlight
    hourOfAi.turnTowards(0)
})
```

## 🧱 Bump wall

In the Game Window 🖼️ in the bottom right corner, click on the  **Practice** button.

Then select **No Opponent** and **Infinite**.

Do you see your bug move to the right?  Nice! 😊 But what happens when your bug gets to the other side of the screen?

Nothing 🥺 So let's add some code for when it hits a wall.

From the ``||hourOfAi:Bug AI||`` category, drag an ``||hourOfAi:on bump wall||`` block out onto the Workspace - you can put it anywhere.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {

})
```

## Turn 90 degrees

From the ``||hourOfAi:Bug AI||`` category, drag a ``||hourOfAi:turn 90||`` block and drop it into the ``||hourOfAi:on bump wall||`` block.
<br/>
<br/>

~hint What does turn 90 do?

---

The turn block ↩️ will turn our bug a certain number of degrees from its current direction. A positive number ➕ is clockwise, and a negative number ➖ is counter-clockwise.

![Turn angle](/static/skillmap/bug-arena/turn-angle.png "turn angle")

hint~

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    //@highlight
    hourOfAi.turnBy(90)
})
```

## ⬇️ Move down

We want to turn our bug 90 degrees so it's facing down ⤵️, move a bit ⬇️, then turn another 90 degrees so it's facing back the way we came. ↩️

To do that, we need to use a block that will wait a certain amount of time ⏱️ before turning again.

From the ``||hourOfAi:Bug AI||`` category, drag a ``||hourOfAi:run after 1000 ms||`` block out and drop it after the ``||hourOfAi:turn 90||`` block.

~hint What does this do?

---

The ``||hourOfAi:run after||`` block will run the code inside of it after waiting a specified amount of time ⏳.  In this case, we are going to wait 1 second, or 1000 milliseconds (ms), until we turn around again.

hint~

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(90)
    //@highlight
    hourOfAi.doAfter(1000, function () {
 
    })
})
```

## ↩️ Now turn around

From the ``||hourOfAi:Bug AI||`` category, drag another ``||hourOfAi:turn 90||`` block out and drop it into the ``||hourOfAi:run after||`` block.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(90)
    hourOfAi.doAfter(1000, function () {
        //@highlight
        hourOfAi.turnBy(90)
    })
})
```

## 🚜 Let's mow!

Let's test our AI algorithm to see how it performs. 💫

Look in the 🕹️ Game Window.  What happens? 

Our bug does go back and forth, but it just keeps moving back and forth at the top of the screen! ➡️⬅️

How do we make our bug keep moving down ⬇️ so it fills in the whole arena?

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

## Create a variable

We need to change the direction our bug is turning each time it hits a wall.  At first it turns towards the right ➡️ (90 degrees), and then we want it to turn towards the left ⬅️ (-90 degrees), and so on back and forth.

To do that, let's first create a variable.

Open the ``||Variables:Variables||`` category in the Toolbox and click on the **Make a Variable** button.  

Name the variable **angle** and click Ok.

~hint What is a variable?

---

A **variable** is like a container 🪣 that holds a value. Variables have names so you can easily reference them in your program. And the values inside variables may change.

hint~

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

## Set the variable value

From the ``||Variables:Variables||`` category, drag a ``||Variables:set angle to 0||`` block into the ``||hourOfAi:on start||`` block.

Type in **-90** as the value for the angle variable, replacing **0**.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
let angle = 0
hourOfAi.onStart(function () {
    hourOfAi.turnTowards(0)
    //@highlight
    angle = -90
})
```
## Change the variable value on bump wall

From the ``||Variables:Variables||`` category, drag another ``||Variables:set angle to 0||`` block into the top of the ``||hourOfAi:on bump wall||`` block.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    //@highlight
    angle = 0
    hourOfAi.turnBy(90)
    hourOfAi.doAfter(1000, function () {
        hourOfAi.turnBy(90)
    })
})
```

## Multiply by -1

To change back and forth between 90 and -90 degrees, we'll multiply by -1.

From the ``||Math:Math||`` Toolbox category, drag out a ``||Math:multiplication||`` block and drop into the ``||Variables:set angle to||`` block replacing the **0**.

From the ``||Variables:Variables||`` category, drag an ``||Variables:angle||`` block out and drop into the ``||Math:multiplication||`` block replacing the first **0**.

Type in **-1** for the second value in the ``||Math:multiplication||`` block.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    //@highlight
    angle = angle * -1
    hourOfAi.turnBy(90)
    hourOfAi.doAfter(1000, function () {
        hourOfAi.turnBy(90)
    })
})
```

## Turn angle

Now we need to replace our 90 degree turns with our ``||Variables:angle||`` variable.

From the ``||Variables:Variables||`` category, drag two ``||Variables:angle||`` blocks out and drop one into each ``||hourOfAi:turn||`` block replacing the **90** degrees.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    angle = angle * -1
    //@highlight
    hourOfAi.turnBy(angle)
    hourOfAi.doAfter(1000, function () {
        //@highlight
        hourOfAi.turnBy(angle)
    })
})
```

## 🎉 Great job! 🎉

Test your game again in the 🕹️ Game Window.

You can move the **SPEED** slider to the right ➡️ to watch your bug go back and forth filling the screen with glorious paint!

👏 Nice work! You've coded a smart AI algorithm ✨ that will mow down 🍃 your competitors in the Bug Arena!

Move on to the 🏰 Tower Battle to challenge your Bug rivals!

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
let angle = 0
hourOfAi.onStart(function () {
    hourOfAi.turnTowards(0)
    angle = -90
})
hourOfAi.onBumpWall(function () {
    angle = angle * -1
    hourOfAi.turnBy(angle)
    hourOfAi.doAfter(1000, function () {
        hourOfAi.turnBy(angle)
    })
})
```

```template
hourOfAi.onStart(function () {
	
})
```

```package
hourOfAi=github:riknoll/bug-arena
```
