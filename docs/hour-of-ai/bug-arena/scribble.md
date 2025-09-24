# Bug Arena Scribble

## Bug Arena: Random Algorithm @showdialog

Welcome to the 👾 **Bug Arena** 👾 where the smartest bugs battle for glory!

![Bug Arena Random](/static/hour-of-ai/bug-arena/random.gif "animation of random pattern")

Great choice of algorithm - let chaos reign! 🤪

In this tutorial we'll code our bug's AI algorithm ✨ to move in random patterns 𖡎 around the screen.

## When to turn 

Our bug moves on its own, so we just need to determine when and in which direction for it to turn.

Let's have our bug turn a different direction every 5 seconds.  To do this, we'll use a time interval block. 🕓

From the ``||hourOfAi:Hour of AI||`` toolbox category, drag an ``||hourOfAi:every 500 ms||`` block out onto the Workspace - you can put it anywhere.

Click on the **500** ms drop-down and select **5 seconds**, or 5000 milliseconds.

~hint What does this do?

---

The ``||hourOfAi:every ms||`` block will run the code you put inside of it on a specified millisecond (ms) 🕓 time interval, in this case every 5 seconds.  

hint~

```blocks
hourOfAi.every(5000, function () {

})
```

## Turn your bug!

From the ``||hourOfAi:Hour of AI||`` category, drag a ``||hourOfAi:turn 90||`` block out and drop into the ``||hourOfAi:every 5000 ms||`` block.

The turn block ↩️ will turn our bug a certain number of degrees from its current direction. A positive number ➕ is clockwise, and a negative number ➖ is counter-clockwise.

![Turn angle](/static/hour-of-ai/bug-arena/turn-angle.png "turn angle")

```blocks
hourOfAi.every(5000, function () {
    hourOfAi.turnBy(90)
})
```

## 🎲 Pick Random

Every 5 seconds, we want our bug to turn in a different random direction.

From the ``||Math:Math||`` Toolbox drawer, drag a ``||Math:pick random 0 to 10||`` block and drop in the ``||hourOfAi:turn||`` block, replacing the **90**.

In the pick random block, type in **-180** as the minimum value, and **180** as the maximum value.

~hint Explain Pick Random

---

The ``||Math:pick random||`` block will return a random number 🎲 between a minimum ⏬ and a maximum ⏫ value. In this case, it will return a random number between -180 degrees (counter-clockwise) and +180 degrees (clockwise).

hint~

```blocks
hourOfAi.every(5000, function () {
    hourOfAi.turnBy(randint(-180, 180))
})
```

## 🔎 Find some bugs!

Let's test our algorithm to make sure our bug is doing what we expect - running around in random patterns!

In the Game Window 🖼️, click on the **Practice** button.

Then select **No Opponent** and **Infinite**.

Is your bug zooming around the screen randomly?

Very cool! 😎

But do you notice what happens when your bug runs into a wall? 🧱

It gets stuck for a little while until it can turn again. 😣  Let's fix that in the next step!


## 🧱 Bump Wall

Let's add some code to make our bug turn ↩️ when it hits a wall.

From the ``||hourOfAi:Hour of AI||`` category, drag an ``||hourOfAi:on bump wall||`` block out onto the Workspace – you can put it anywhere.

Now drag a ``||hourOfAi:turn||`` block and drop it into the ``||hourOfAi:on bump wall||`` block.

```blocks
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(90)
})
```

## Random Turn

Again, we want our bug to turn in a random direction, so let's use the 🎲 Pick Random function again.

From the ``||Math:Math||`` Toolbox drawer, drag a ``||Math:pick random 0 to 10||`` block and drop in the ``||hourOfAi:turn||`` block, replacing the **90**.

In the pick random block, type in **-180** as the minimum, and **180** as the maximum values just like before.

```blocks
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(randint(-180, 180))
})
```
## 🎉 Great job! 🎉

Test your game again in the 🕹️ Game Window.

You can move the slider to the right ➡️ to watch your bug make beautiful 🌈 crazy color patterns!

Nice work! 👍 You've coded a smart AI algorithm ✨ that will confuse and confound your competitors in the Bug Arena!

Move on to the 🏰 Tower Battle to challenge your Bug rivals!

```blocks
hourOfAi.every(5000, function () {
    hourOfAi.turnBy(randint(-180, 180))
})
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(randint(-180, 180))
})
```

```template
hourOfAi.onStart(function () {
	
})
```

```package
hourOfAi=github:riknoll/bug-arena
```