<!-- For more on writing tutorials, visit https://makecode.com/writing-docs/tutorials>

<!-- This will be the title of your tutorial (single #) -->
# Miss Kiki's Class

<!-- This makes it so that hints only happen when you want them to -->
### @explicitHints true



<!----------------------Instruction #1-----------------------------------
This is the title of the step (##).
Here, @showdialog puts the whole thing in a modal (pop-out window.)
<!----------------------------------------------------------------------->
## Welcome to Miss Kiki's Class @showdialog


<!-- This is the content that will be shown inside the instruction for the above step -->

This is Miss Kiki's Class. Nothing ever feels quite normal in this school.


<!-- This will show an image inside the instruction that it's part of -->
![Campfire Sparks](/static/skillmap/sparks/sparks1.gif "Let's create sparks")


<!-------------------End Instruction #1---------------------------------->




<!----------------------Instruction #2-----------------------------------
This is the title for step two.
We put the text inside curly braces so that the title isn't displayed to users
------------------------------------------------------------------------->
## {Step 2}

<!-- This is how you make text bold in markdown -->
**Ready to start coding?**

Our main character is called a sprite. Let's create a student sprite and get them moving before we do anything else.


<!-- This is how you format a "clue" in accordian form -->
~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change — things like scale, position, and lifespan are all properties of sprites.

Our "student" character will be a sprite, too.

hint~
<!------------------------------------------------------->


<!-- This is how you format instructions to provide the correct bulletpoint and text color formatting
The - :paper plane: text adds a paper plane icon beside the instruction
``||sprites:Sprites||`` creates a "sprites" colored text box around the word "Sprites"
We use (sprites) in this block ↓ to open the "sprites" category, even though it's colored like "variables"
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||``
------------------------------------------------------------------------------------------------------>

- :paper plane: From the ``||sprites:Sprites||`` category, drag
``||variables(sprites):set [mySprite] to sprite [ ] of kind [Player]||``
to **the end** of the ``||loops:on start||`` container.

- :mouse pointer: To add Jerry, click the empty grey box, then toggle to **My Assets** and click  **rockstar**.
<!-- An image showing how to select the Gallery tab -->
![Toggle to My Assets](/static/skillmap/assets/my-assets-three.png "toggle to the My Assets Window")


<!-- This is how you add the answer key to the end of the instruction.-->
#### ~ tutorialhint

<!--Use javascript code inside a ```blocks tag to show the blocks you want to display.
You can find that code here: https://arcade.makecode.com/reference
Or switch to the JavaScript tab in your sample game
-------------------------------------------------------------------->

```blocks
scene.setBackgroundColor(13)
tiles.setTilemap(class_imgs.level1)
// @highlight
let mySprite = sprites.create(class_imgs.student, SpriteKind.Player)
```

<!-------------------End Instruction #2---------------------------------->


<!---------------------- Instruction #3---------------------------------->
## {Step 3}

**Time to get the sprite moving**

---

- :game: Drag
``||controller:move [mySprite] with buttons ⊕||``
to **the end** of the ``||loops:on start||`` container.

_💡  Remember, the icon to the left of the instructions shows the same icon as the toolbox category for the block you need._


```blocks
scene.setBackgroundColor(13)
tiles.setTilemap(class_imgs.level1)
let mySprite = sprites.create(class_imgs.student, SpriteKind.Player)
// @highlight
controller.moveSprite(mySprite)
```
<!-------------------End Instruction #3---------------------------------->


<!---------------------- Instruction #4--------------------------------------
Every once in a while we throw in a step to ask students to look at their work
These steps do not need an answer key hint block at the bottom
<!-------------------------------------------------------------------------->

## {Step 4}

- :binoculars: Look at your project in the game window to see how it has changed!

You should see a student in the middle of the wall who gets lost when they go off screen.

![Look for the game window in the lower right](/static/skillmap/sparks/game.png "Click the mini game window to pop open the bigger game window.")

<!-------------------End Instruction #4---------------------------------->



<!----------------------- Instruction #5---------------------------------->

## {Step 5}

The rockstar sprite should appear at the stage door.

---

- :tree: To start Jerry at the stage door, drag
``||scene: place [mySprite] on top of random [ ]||``
to **the end** of the
``||loops:on start||``
container.

- :mouse pointer: Click the checkered tile and select the teal stage door called **stage** from the grid menu.


<!-- Sometimes we use this format to indicate a "tip" -->
_💡 Don't forget to play with your project after each step to see the changes your code has made._



```blocks
scene.setBackgroundColor(13)
tiles.setTilemap(class_imgs.level1)
let mySprite = sprites.create(class_imgs.student, SpriteKind.Player)
controller.moveSprite(mySprite)
// @highlight
tiles.placeOnRandomTile(mySprite, class_imgs.stage)

```
<!-------------------End Instruction #5---------------------------------->


<!----------------------- Instruction #6---------------------------------->
## {Step 6}

- :tree: Next, to keep Jerry in sight, drag
``||scene:camera follow sprite [mySprite]||``
to **the end** of the
``||loops:on start||`` container.

```blocks
scene.setBackgroundColor(13)
tiles.setTilemap(class_imgs.level1)
let mySprite = sprites.create(class_imgs.student, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, class_imgs.stage)
// @highlight
scene.cameraFollowSprite(mySprite)

```
<!-------------------End Instruction #6---------------------------------->


<!------------------------ Instruction #7---------------------------------->
## {7. Check Your Game!}

- :binoculars: Take a look at the game window to see your project!

You should be able to see your sprite as you move it around backstage.  Can you make it to the exit?

<!-------------------End Instruction #7---------------------------------->



<!------------------------Final Instruction ----------------------------->

## {Finale}

🔥 **Well done!** 🔥

---

Take a look at all of the things hidden throughout the maze, then click **Done** to head to the next level of the
skillmap where we'll show you how to add points for each instrument Jerry collects!


~hint How do I share my game?💡

---

**Want to share your game?**

Click "Done" to get back out to the skillmap, then look in the lower-right corner for the share button.

![Share your card](/static/skillmap/class/share.gif )

hint~


When you're ready, click **Done** to return to the skillmap so you can add a way to win or lose!
<!-------------------End Final Instruction---------------------------------->






<!------------------------------------------------------------------------->
<!----- Below this point is all code that happens behind the scenes ---->
<!------------------------------------------------------------------------->


<!-- This sets custom blocks for the toolbox that transcend any individual step -->

```blockconfig.global
game.gameOver(true)
```


<!-- This is how you add code to the workspace before the tutorial begins -->
```template
scene.setBackgroundColor(13)
tiles.setTilemap(class_imgs.level1)
```


<!-- This code adds blocks to the toolbox that aren't used within the tutorial itself -->
```ghost
scene.onOverlapTile(SpriteKind.Player, class_imgs.paper, function (sprite, location) {
    tiles.setTileAt(location, class_imgs.transparency16)
    info.changeScoreBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, class_imgs.teacher, function (sprite, location) {
    tiles.setTileAt(location, class_imgs.transparency16)
    stopwatch.changeTimerBy(5000)
})
info.onScore(0, function () {
    info.setScore(stopwatch.timeSinceStartSec())
    game.setGameOverScoringType(game.ScoringType.LowScore)
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, class_imgs.door, function (sprite, location) {
    game.setGameOverMessage(false, "You left too early!")
    game.over(false)
})
scene.setBackgroundColor(13)
tiles.setTilemap(class_imgs.level1)
let student = sprites.create(class_imgs.stand, SpriteKind.Player)
controller.moveSprite(student)
tiles.placeOnRandomTile(student, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(student)
characterAnimations.loopFrames(
student,
assets.animation`right`,
100,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
student,
assets.animation`left`,
100,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
student,
assets.animation`bwd`,
100,
characterAnimations.rule(Predicate.MovingUp)
)
characterAnimations.loopFrames(
student,
assets.animation`fwd`,
100,
characterAnimations.rule(Predicate.MovingDown)
)
for (let value of tiles.getTilesByType(class_imgs.paper)) {
    info.changeScoreBy(1)
}
stopwatch.startTimer(stopwatch.TimerType.Sec)

```



<!-- This includes all of the extensions that you want to use in your project -->
<!-- Include your image pack in here, too -->

```package
pxt-tilemaps
arcade-character-animations
timer=github:kiki-lee/timer#v0.0.1
class_imgs=github:kiki-lee/class_imgs#v0.0.1
```


<!-- This is how you include code that you don't want users to see -->

```customts
namespace game {
    /**
     * This is a reporter block that returns
     * the number of seconds since the game started
     */
    //% block="time since start (tenths) "
    export function timeSinceStartSec(): number {
        return game.runtime()/100;
    }
}
```