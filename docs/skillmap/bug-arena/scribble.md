# Bug Arena Scribble
### @hideReplaceMyCode true

## Bug Arena Introduction @showdialog

Welcome to the 👾 **Bug Arena** 👾 where the smartest bugs battle for glory!

Watch this introduction video to get started, and then click Ok.

![Bug Arena Intro](youtube:gu3zv7TQwnk "video introduction of bug arena")

## Random Algorithm 

![Bug Arena Random](/static/skillmap/bug-arena/random.gif "animation of random pattern")

Great choice of algorithm - let chaos reign! 🤪

In this tutorial we'll code our bug's AI algorithm ✨ to move in random patterns 𖡎 around the screen.

## When to turn 

Our bug moves on its own, so we just need to determine when and in which direction for it to turn.

Let's have our bug turn a different direction every 5 seconds.  To do this, we'll use a time interval block. 🕓

From the ``||hourOfAi:Hour of AI||`` toolbox category, drag an ``||hourOfAi:every 5000 ms||`` block out onto the Workspace - you can put it anywhere.

~hint What does this do?

---

The ``||hourOfAi:every 5000 ms||`` block will run the code you put inside of it on a specified millisecond (ms) 🕓 time interval, in this case every 5000 ms or 5 seconds.

hint~

```blockconfig.local
hourOfAi.every(5000, function () {

})
```

```blocks
hourOfAi.every(5000, function () {

})
```

## Turn your bug!

From the ``||hourOfAi:Hour of AI||`` category, drag a ``||hourOfAi:turn 90||`` block out and drop into the ``||hourOfAi:every 5000 ms||`` block.
<br/>
<br/>

~hint What does turn 90 do?

---

The turn block ↩️ will turn our bug a certain number of degrees from its current direction. A positive number ➕ is clockwise, and a negative number ➖ is counter-clockwise.

![Turn angle](/static/skillmap/bug-arena/turn-angle.png "turn angle")

hint~

```blocks
hourOfAi.every(5000, function () {
    //@highlight
    hourOfAi.turnBy(90)
})
```

## 🎲 Pick Random

Every 5 seconds, we want our bug to turn in a different random direction.

From the ``||Math:Math||`` Toolbox drawer, drag a ``||Math:pick random||`` block and drop in the ``||hourOfAi:turn||`` block, replacing the **90**.
<br/>
<br/>

~hint Explain Pick Random

---

The ``||Math:pick random||`` block will return a random number 🎲 between a minimum ⏬ and a maximum ⏫ value. In this case, it will return a random number between **-180** degrees (counter-clockwise) and **+180** degrees (clockwise).

hint~

```blockconfig.local
randint(-180, 180)
```

```blocks
hourOfAi.every(5000, function () {
    //@highlight
    hourOfAi.turnBy(randint(-180, 180))
})
```

## 🔎 Find some bugs!

Let's test our algorithm to make sure our bug is doing what we expect - running around in random patterns!

In the Game Window 🖼️, click on the **Practice** button.

Then select **No Opponent** and **Infinite**.

Is your bug changing direction every 5 seconds?

Very cool! 😎

But do you notice what happens when your bug runs into a wall? 🧱

It gets stuck for a little while until it can turn again. 😣  Let's fix that in the next step!


## 🧱 Bump Wall

Let's add some code to make our bug turn ↩️ when it hits a wall.

From the ``||hourOfAi:Hour of AI||`` category, drag an ``||hourOfAi:on bump wall||`` block out onto the Workspace - you can put it anywhere.

Now drag another ``||hourOfAi:turn 90||`` block and drop it into the ``||hourOfAi:on bump wall||`` block.

```blocks
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(90)
})
```

## Random Turn

Again, we want our bug to turn in a random direction, so let's use the 🎲 Pick Random function again.

From the ``||Math:Math||`` Toolbox drawer, drag another ``||Math:pick random||`` block and drop in the ``||hourOfAi:turn||`` block, replacing the **90**.

```blockconfig.local
randint(-180, 180)
```

```blocks
hourOfAi.onBumpWall(function () {
    //@highlight
    hourOfAi.turnBy(randint(-180, 180))
})
```
## 🎉 Great job! 🎉

Test your game again in the 🕹️ Game Window.

You can move the **SPEED** slider to the right ➡️ to watch your bug make beautiful 🌈 crazy color patterns!

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