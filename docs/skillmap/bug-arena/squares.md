# Bug Arena Squares
### @hideReplaceMyCode true

## Bug Arena Introduction @showdialog

Welcome to the 👾 **Bug Arena** 👾 where the smartest bugs battle for glory!

Watch this introduction video to get started, and then click Ok.

![Bug Arena Intro](youtube:U_bcAht2o0A "video introduction of bug arena")

## Squares Algorithm @showdialog

![Bug Arena Squares](/static/skillmap/bug-arena/squares.gif "animation of squares pattern")

Great choice of AI algorithm ✨ - you're sure to Square 🟨 away the competition!

Let's code your bug to move around the screen coloring the arena in a square pattern.

## Set direction

Our bug moves on its own, but it's important to make sure that it starts out moving in the right direction! 🗺️

From the ``||hourOfAi:Bug AI||`` Toolbox category, drag the ``||hourOfAi:face towards 0||`` block out and drop into the ``||hourOfAi:on start||`` block.

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
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.onStart(function () {
    //@highlight
    hourOfAi.turnTowards(0)
})
```

## Bump wall

In the Game Window 🖼️ in the bottom right corner, click on the  **Practice** button.

Then select **No Opponent** and **Infinite**.

What happens when your bug gets to the other side of the screen?

Uh-oh!  It gets stuck! 🔄

Let's code in some behavior for when it hits a wall. 🧱

From the ``||hourOfAi:Bug AI||`` category, drag an ``||hourOfAi:on bump wall||`` block out onto the Workspace - you can put it anywhere.

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.onBumpWall(function () {

})
```

## Turn 90 degrees

From the ``||hourOfAi:Bug AI||`` category, drag a ``||hourOfAi:turn 90||`` block, and drop it into the ``||hourOfAi:on bump wall||`` block.
<br/>
<br/>

~hint What does turn 90 do?

---

The turn block ↩️ will turn our bug a certain number of degrees.  A positive number ➕ is clockwise, and a negative number ➖ is counter-clockwise.

![Turn angle](/static/skillmap/bug-arena/turn-angle.png "turn angle")

In this case, we will keep it at 90 degrees, since we want our bug to turn a full right angle at the corner of the screen.

hint~

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.onBumpWall(function () {
    //@highlight
    hourOfAi.turnBy(90)
})
```

## Test for bugs! 🐞

Let's test our algorithm to see if our bug is moving in a square. 🟨

In the Game Window 🖼️, what happens when our bug covers all 4 sides of the arena?

Yikes!  It just keeps moving in the same square pattern! ⏹️

How do we make our bug move in a concentric square pattern so it fills in the whole screen?

~hint What is Concentric?

---

**Concentric** means shapes that fit inside each other, like a target 🎯 is made up of a set of concentric circles.

hint~

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

## When to turn

We need to have our bug check to make sure it's not on a part of the screen that's already covered with its own paint color 🎨 before turning.

From the ``||hourOfAi:Bug AI||`` category, drag the ``||hourOfAi:every 500 ms||`` group of blocks out onto the Workspace - you can put it anywhere.

~hint What does this do?

---

The ``||hourOfAi:every 500 ms||`` block will run the code you put inside of it on a specified time interval ⏱️, in this case every 500 milliseconds (ms), or half a second.  The ``||hourOfAi:distance to my color||`` block will return the distance in pixels from the front of our bug to its own paint color 🎨. If the distance equals 0, then our bug is standing on it's own paint!

hint~

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {

    }
})
```

## Turn right

When the distance from our bug to its own paint color is 0, then we should make a right turn. ↩️

From the ``||hourOfAi:Bug AI||`` category, drag a ``||hourOfAi:turn 90||`` block out and drop into the ``||Logic:if then||`` block.

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
        //@highlight
        hourOfAi.turnBy(90)
    }
})
```

## 🎉 Great job! 🎉

Test your game again in the 🕹️ Game Window below.

You can move the **SPEED** slider to the right ➡️ to watch your bug make perfect squares! 🟨🟦🟩

Nice work! 👍 You've coded a smart AI algorithm ✨ that will box in your competitors in the Bug Arena!

Move on to the 🏰 Tower Battle to challenge your Bug rivals!

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.onStart(function () {
    hourOfAi.turnTowards(0)
})
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(90)
})
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
        hourOfAi.turnBy(90)
    }
})
```

```template
hourOfAi.onStart(function () {
	
})
```

```package
hourOfAi=github:riknoll/bug-arena
```
