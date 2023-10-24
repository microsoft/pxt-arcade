<!-- See this tutorial in action at https://arcade.makecode.com/#tutorial:/tutorials/hundred -->

<!-- If you found this in the github, you can copy the raw file located at
// https://github.com/microsoft/pxt-arcade/blob/master/docs/tutorials/hundred.md 
// and paste it into the tutorial tool
// located at https://makecode.com/tutorial-tool then run it from the
// Arcade editor to see your edits as you go -->




# 100 Day Challenge
### @explicitHints true
<!-- ***************************************************
// Use the single hash to name the tutorial, and the
// double hash to name the step. Triple hashes set
// custom flags that change the way the tutorial works
// https://makecode.com/writing-docs/tutorials
// @explicitHints true cues the tutorial not to add hints
// automatically, but to let you tell it when you want hints
// ****************************************************-->




<!-- ***************************************************
//           STEP ONE
<!-- ***************************************************
// Step #1 is usually a modal (pop-up) that sets the scene
// The @showdialog tag makes it pop out
// **************************************************** -->
## {Intro @showdialog}


<!-- This is the text that shows up in the instruction -->

It's been 100 days!

Let's celebrate by creating a project with 100 of our favorite things!

<!-- This is how you add an image in markdown -->
![It's an alien invasion!](/static/tutorials/aliens/alien.gif "Try not to get in their way!" )
<!-- The first part is for the screen reader. The second is the URL of the image. The last is the mouse rollover text. -->




<!-- ***************************************************
//                      STEP TWO
<!-- ***************************************************
// This step's title is inside curly braces. That hides it
// from the viewer, because step titles are pretty huge
// and obnoxious
// **************************************************** -->
## {Step 2}

<!-- This text will be bold -->
**Ready to start coding?**

We need a background for our project.



<!-- This next part of the instruction uses a couple of different
// formats to guide students. 
// https://makecode.com/writing-docs/snippets#namespace-coloring
//
// The -:tree: text adds an icon to the side of the instruction that 
// corresponds to the category for the step (this one adds the tree icon)
//
// Next, the ``||scene:Scene||`` text creates a highlighted "button" that
// opens the category it points to when clicked (it's the Scene category here.)
//
// Want the formatted text to link to a different category than the color
// sends it to by default, use a different category in parentheses
// ``||variables(sprites):set [mySprite]||`` makes a red block that
// goes to the blue Sprites category.
//
// ``||loops(noclick):on start||`` makes the text green but doesn't
// open any category
//
// The ```block segment lets you insert a block directly
// into the instructions.
// https://makecode.com/writing-docs/snippets#blocks
// --------------------------------------------------------------->
- :tree: Go to the ``||scene: Scene||`` category **in the toolbox** and grab
```block
scene.setBackgroundImage(img`.`)
```
then snap it inside the empty <br/>
``||loops(noclick): on start||`` <br/>
block already in the workspace.



<!----------------------------------------------------------->
<!-- This is how you create a clue within the instruction -->
<!-- vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv -->
~hint Click here to see how 🕵🏽

<!-- The dashes below make a divider line -->

---

- :lightbulb: The panel with the colorful category names is called the
 **toolbox**. <br/>
 Click ``||scene: Scene||`` to find the block you need.

![Look under Scene for the block you need](/static/skillmap/mole/add-bg-block.gif "Drag out the background block to fill later.")

hint~
<!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
<!------------------------ End Clue --------------------------->
<!----------------------------------------------------------->




<!-- This section will add blocks to the answer key.
// https://makecode.com/writing-docs/tutorials/basics#using-blocks
// tutorialhint tells the tutorial that we're adding a hint now. 
// Include all of the blocks that students will see within
// the code segment that they're working on. 
//  
// Use //@highlight to highlight the instruction from this step 
// https://makecode.com/writing-docs/snippets#highlight -->

#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(img`.`)
```


<!-- ***************************************************
//                      STEP THREE
<!-- ***************************************************
// Keep adding instructions and hints to guide students
// toward the steps they need to take. Tutorials work best
// when you "complete a thought" before moving on to the next thing.
// Add a sprite, position it, get it moving, follow with the camera,
// THEN you can move on to the maze mechanics.
// **************************************************** -->
## {Step 3}

- :paint brush: Click the empty **grey square** to open the image editor and choose a background from the **Gallery**.

```blocks
//@highlight
scene.setBackgroundImage(assets.image`Planet`)
```

_💡 If you don't find a background you like, you can make one of your own!_



<!-- ***************************************************
//                      STEP FOUR
//    ************************************************** -->

## {Step 4}

**Let's add movement to the scene**

- :arrows alternate: To make it look like the camera is moving, go to ``||scroller: Scroller||`` and drag
```block
scroller.scrollBackgroundWithSpeed(-50, 0)
```
into **the end** of the <br/>
``||loops(noclick):on start||`` container. <br/>


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(assets.image`Planet`)
//@highlight
scroller.scrollBackgroundWithSpeed(-50, 0)
```



<!-- ***************************************************
//                      STEP FIVE
<!-- ***************************************************
// Occasionally remind students to look at what they've done
// so they can make sure things are working. You might be
// surprised at how often they soldier on without taking
// time to play with their creations.
// **************************************************** -->
## {Step 5}

- :binoculars: Look at your project in the game window to see what your code has done!

You should see a background that's scrolling from right to left.

<!-- Notice that the game playimg steps don't contain answer keys.>




<!-- ***************************************************
//                      STEP SIX
//    ************************************************** -->
## {Step 6}

**Unleash the beasts!**

- :redo: From the ``||loops:Loops||`` category, grab
```block
for (let index = 0; index < 4; index++) {
 }
```
and drag it into **the end** of the <br/>
``||loops(noclick):on start||`` <br/>
container already in the workspace. <br/>


- :mouse pointer: Change **4** to **100** to build the stampede!

#### ~ tutorialhint
```blocks
scene.setBackgroundImage(assets.image`Planet`)
scroller.scrollBackgroundWithSpeed(-50, 0)
//@highlight
for (let index = 0; index < 100; index++) {
}

```


<!-- ***************************************************
//                      STEP SEVEN
//    ************************************************** -->
## {Step 7}

**Choose your Sprite!**

~hint What's a sprite? 💡

---

In Arcade, each character or image that does something is called a **SPRITE**.

Sprites have properties that you can use and change — things like scale, position, and lifespan are all properties of sprites.

hint~

- :paper plane: From ``||sprites:Sprites||``, grab
```block
    let projectile = sprites.createProjectileFromSide(img`.`, -90, 0)
```
and snap it into the empty ``||loops(noclick):repeat 100 times||`` loop.


- :paint brush: Click the empty grey box and find your favorite sprite in the **Gallery** or, create your own!


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(assets.image`Planet`)
scroller.scrollBackgroundWithSpeed(-50, 0)
for (let index = 0; index < 100; index++) {
//@highlight
    let projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)
}
```


<!-- ***************************************************
//                      STEP EIGHT
<!-- **************************************************-->
## {Step 8}

- :binoculars: Take a look at the game window to see your project!<br/>
(You may need to click the reload button on the game console to catch the action.)
![Press reload to see your project run](/static/tutorials/aliens/reload.png " " )

Does it look like you have a single sprite floating across the sky?

We'll fix that over the next couple of steps.


<!-- ***************************************************
//                      STEP NINE
<!-- **************************************************-->
## {Step 9}

If we leave the sprites like this, you won't be able to see them all! Let's spread them out.

- :paper plane: From the ``||sprites:Sprites||`` category, grab
```block
let projectile: Sprite = null
projectile.y = randint(40, 100)
```
and snap it into **the end** of the <br/>
``||loops(noclick):repeat 100 times||`` loop.


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(assets.image`Planet`)
scroller.scrollBackgroundWithSpeed(-50, 0)
for (let index = 0; index < 100; index++) {
    let projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)
    //@highlight
    projectile.y = randint(40, 100)
})

```



<!-- ***************************************************
//                      STEP TEN
<!-- **************************************************-->
## {Step 10}

**Add some space.**

Our loop spits out all the sprites at the same time. If we add a small pause, we can give them room to run!

- :redo: Help the sprites spread out horizontally by visiting the ``||loops:Loops||`` category and dragging
```block
    pause(100)
```
anywhere inside the <br/>
``||loops(noclick):repeat 100 times||`` loop.


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(assets.image`Planet`)
scroller.scrollBackgroundWithSpeed(-50, 0)
for (let index = 0; index < 100; index++) {
    let projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)
    projectile.y = randint(40, 100)
    //@highlight
    pause(100)
})
```



<!-- ***************************************************
//                      STEP ELEVEN
<!-- **************************************************-->
## {Step 11}

Let's animate!

---

- :chevron down: In the toolbox, click **Advanced** to reveal the ``||animation:Animation||`` category.


- :sync: Drag
```block
animation.runImageAnimation(
projectile,
[img`
    .
    `] ,
100,
true
)
})
```
into **the end** of the <br/>
``||loops(noclick):repeat 100 times||`` loop.



#### ~ tutorialhint
```blocks

scene.setBackgroundImage(assets.image`Planet`)
scroller.scrollBackgroundWithSpeed(-50, 0)
for (let index = 0; index < 100; index++) {
    let projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)
    projectile.y = randint(0, 10)
    pause(100)

//@highlight
animation.runImageAnimation(
projectile,
[img`
    .
    `] ,
100,
true
)
})
```

<!-- ***************************************************
//                      STEP TWELVE
<!-- **************************************************-->
## {Step 12}

**🎥 Let's get animating 🎥**

---

- :paint brush: To select an animation, click the empty grey box in the ``||animation(noclick):animate||`` block to open the image editor.

- :mouse pointer: Here, you can switch to the gallery and select a pre-made animation...or create one of your own!

```block
animation.runImageAnimation(
projectile,
assets.animation`Animated Alien`,
100,
true
)
})
```

#### ~ tutorialhint
```blocks
scene.setBackgroundImage(assets.image`Planet`)
scroller.scrollBackgroundWithSpeed(-50, 0)
for (let index = 0; index < 100; index++) {
    let projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)
    projectile.y = randint(0, 10)
    pause(100)

//@highlight
animation.runImageAnimation(
projectile,
assets.animation`Animated Alien`,
100,
true
)
})
```


<!-- ***************************************************
//                      NOTE
<!-- ***************************************************
// Students usually max out somewhere between 10-15 steps.
// If you can wrap-up the tutorial in this amount of time,
// then it makes sense to use a single tutorial for the game.
// Otherwise, consider creating a skillmap. Directions for
// turning tutorials into skillmaps can be found at
// aka.ms/make-a-skillmap
// **************************************************** -->


<!-- ***************************************************
//                      FINALE
<!-- **************************************************-->
## {Finale}

**💯 There you have it 💯**

---

Now you have a hundred things to celebrate 100 days!

Take a final look at your project in the game window. When you're finished, click **Done**, then share it with family and friends!



<!-- **************************** End Tutorial Text Portion *************************//
// ---------------------------------------------------------------------------------//
// The following code sets up the images, blocks, and extensions                   //
// see https://makecode.com/writing-docs/tutorials/control-options#special-blocks //
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv-->



<!-- ***************************************************
//            BLOCKCONFIG - DEFAULT BLOCKS
// ****************************************************
// https://makecode.com/writing-docs/tutorials/basics#limitations
// This is how you add default settings to blocks
// in the toolbox
******************************************************-->
```blockconfig.global
let projectile = sprites.createProjectileFromSide(img`.`, -90, 0)
scroller.scrollBackgroundWithSpeed(-50, 0)
projectile.y = randint(40, 100)
animation.runImageAnimation(
projectile,
[img`
    .
    `] ,
100,
true
)
})

```



<!-- ***************************************************
//            PACKAGE - IMPORT EXTENSIONS
// ****************************************************
// https://makecode.com/writing-docs/snippets#package
// This is how you import extensions into your tutorial
******************************************************-->
```package
arcade-background-scroll=github:microsoft/arcade-background-scroll
```



<!-- ***************************************************
// GHOST - ADD BLOCKS EVEN IF THEY'RE NOT YET IN TUTORIAL
// ****************************************************
// https://makecode.com/writing-docs/tutorials/control-options#ghost-blocks
// This is how you add blocks to the toolbox, even
// if the tutorial doesn't use them
// I've preloaded this with all of the code for our game.
// Note that the blocks won't show up prefilled in the toolbox
// unless you also add them to a blockconfig section.
******************************************************-->
```ghost
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.rings, 200)
    info.changeScoreBy(1)
})
let extraLife: Sprite = null
let projectile: Sprite = null
scene.setBackgroundImage(img`
    f
        `, -150, 0)
    projectile.y = randint(50, 100)
    animation.runImageAnimation(
    projectile,
    [img`
        .
        `,img`
        .
        `,img`
        .
        `,img`
        .
        `],
    100,
    true
    )
}
pause(2000)
scroller.scrollBackgroundWithSpeed(0, 0)
game.splash("Happy 100 Days!")

```


<!-- ***************************************************
//            ASSETJSON - ADD NON_EXTENSION ASSETS
// ****************************************************
// https://makecode.com/writing-docs/tutorials/resources#assetjson
// This imports items into 'My Assets". This is important for things
// like music and tilemaps that don't have a gallery.
// You get this from saving a project containing only assets
// from the url
// https://arcade.makecode.com/?saveTemplate=1#editor
// and pasting the result between the ticks
******************************************************-->

```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"X4JB-Z#5z{GHg)(9D5!a\": {\n        \"data\": \"hwSgAHgAAAD/////////////////////////zLy7uzvDzLy73d3d3TPd0727293d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////P////8//////zLy7u7vDzLu73d3dPTPdMz27093d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7szzLu73d3dPTPdPd2z3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP///////////8/M/v/////////z7y7u7u7u7sz3d3dPTPdPdMz3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7u7uzsz3d3dPTPd3TPT3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP/////////////P///////////z7y7u7u7uzsz3d3dPTPd3d3d3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP//////8///////////////8z/z7y7u7u7uzsz3d3dPTPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8z/z7y7O7y7uzsz3d3d3TPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7O8y7u7vT3d3d3dPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7w8y7u7vb3d3d3d3d3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////P//////z7y7w8u8u7vb3d3d3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////Py///////zLy7w8u8u7vb3T3T3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////////8///////P//////zMy7w8u8u7vT3TOz3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP///////////////////////zPzMy7w8u8u7vT3TO7093d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8u8u7vdPdO7293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8y7M7vdPT27293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8///////////////MzMy7O8y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////8/L///////////8///MzMy8O7y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP/////////////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////MzMy8u7u7u7vdPb27O93d3TMz3d3d3TM9MzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27O93dPdOz093d3TPdMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dPd27293d3TPdPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dMz27293d3T3TPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7s7vd3dO7093d0727O93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+8/P///////8/MzMy8w7u7u7vd3TOz3d3d0727u93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+7+////////8/MzMw8w7y7u7vd3T3T3d093bO7u93d3T3T3TMzMzMzMzMzMzMzMzMzMzP///////////+8/P///8///8/MzMw7vLy7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7u7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7y7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7y7szzLvd3d3d3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7u7vDzLvTPdvd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP/////////z//////////////MzLy7uzvDzLzTM7vd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzvMy7zb07vd3d093bu7u93d3d3d3TMzMzMzMzMzMzMzMzMzMzP//////////////8/L///P///MzLy7uzu8y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLy7w7Pbvd3d093bu7u93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLzLy7Pdvd3d0907O7O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////8////////////////zLy7uzvLzLy73d3d3dPd0727O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////zLy7uzvDzLy73d3d3TPd0727293d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////P////8//////zLy7u7vDzLu73d3dPTPdMz27093d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7szzLu73d3dPTPdPd2z3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP///////////8/M/v/////////z7y7u7u7u7sz3d3dPTPdPdMz3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7u7uzsz3d3dPTPd3TPT3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP/////////////P///////////z7y7u7u7uzsz3d3dPTPd3d3d3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP//////8///////////////8z/z7y7u7u7uzsz3d3dPTPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8z/z7y7O7y7uzsz3d3d3TPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7O8y7u7vT3d3d3dPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7w8y7u7vb3d3d3d3d3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////P//////z7y7w8u8u7vb3d3d3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////Py///////zLy7w8u8u7vb3T3T3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////////8///////P//////zMy7w8u8u7vT3TOz3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP///////////////////////zPzMy7w8u8u7vT3TO7093d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8u8u7vdPdO7293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8y7M7vdPT27293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8///////////////MzMy7O8y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////8/L///////////8///MzMy8O7y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP/////////////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////MzMy8u7u7u7vdPb27O93d3TMz3d3d3TM9MzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27O93dPdOz093d3TPdMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dPd27293d3TPdPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dMz27293d3T3TPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7s7vd3dO7093d0727O93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+8/P///////8/MzMy8w7u7u7vd3TOz3d3d0727u93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+7+////////8/MzMw8w7y7u7vd3T3T3d093bO7u93d3T3T3TMzMzMzMzMzMzMzMzMzMzP///////////+8/P///8///8/MzMw7vLy7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7u7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7y7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7y7szzLvd3d3d3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7u7vDzLvTPdvd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP/////////z//////////////MzLy7uzvDzLzTM7vd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzvMy7zb07vd3d093bu7u93d3d3d3TMzMzMzMzMzMzMzMzMzMzP//////////////8/L///P///MzLy7uzu8y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLy7w7Pbvd3d093bu7u93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLzLy7Pdvd3d0907O7O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////8////////////////zLy7uzvLzLy73d3d3dPd0727O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////zLy7uzvDzLy73d3d3TPd0727293d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////P////8//////zLy7u7vDzLu73d3dPTPdMz27093d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7szzLu73d3dPTPdPd2z3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP///////////8/M/v/////////z7y7u7u7u7sz3d3dPTPdPdMz3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7u7uzsz3d3dPTPd3TPT3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP/////////////P///////////z7y7u7u7uzsz3d3dPTPd3d3d3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP//////8///////////////8z/z7y7u7u7uzsz3d3dPTPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8z/z7y7O7y7uzsz3d3d3TPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7O8y7u7vT3d3d3dPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7w8y7u7vb3d3d3d3d3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////P//////z7y7w8u8u7vb3d3d3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////Py///////zLy7w8u8u7vb3T3T3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////////8///////P//////zMy7w8u8u7vT3TOz3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP///////////////////////zPzMy7w8u8u7vT3TO7093d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8u8u7vdPdO7293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8y7M7vdPT27293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8///////////////MzMy7O8y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////8/L///////////8///MzMy8O7y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP/////////////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////MzMy8u7u7u7vdPb27O93d3TMz3d3d3TM9MzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27O93dPdOz093d3TPdMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dPd27293d3TPdPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dMz27293d3T3TPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7s7vd3dO7093d0727O93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+8/P///////8/MzMy8w7u7u7vd3TOz3d3d0727u93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+7+////////8/MzMw8w7y7u7vd3T3T3d093bO7u93d3T3T3TMzMzMzMzMzMzMzMzMzMzP///////////+8/P///8///8/MzMw7vLy7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7u7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7y7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7y7szzLvd3d3d3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7u7vDzLvTPdvd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP/////////z//////////////MzLy7uzvDzLzTM7vd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzvMy7zb07vd3d093bu7u93d3d3d3TMzMzMzMzMzMzMzMzMzMzP//////////////8/L///P///MzLy7uzu8y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLy7w7Pbvd3d093bu7u93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLzLy7Pdvd3d0907O7O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////8////////////////zLy7uzvLzLy73d3d3dPd0727O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////zLy7uzvDzLy73d3d3TPd0727293d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////P////8//////zLy7u7vDzLu73d3dPTPdMz27093d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7szzLu73d3dPTPdPd2z3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP///////////8/M/v/////////z7y7u7u7u7sz3d3dPTPdPdMz3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7u7uzsz3d3dPTPd3TPT3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP/////////////P///////////z7y7u7u7uzsz3d3dPTPd3d3d3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP//////8///////////////8z/z7y7u7u7uzsz3d3dPTPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8z/z7y7O7y7uzsz3d3d3TPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7O8y7u7vT3d3d3dPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7w8y7u7vb3d3d3d3d3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////P//////z7y7w8u8u7vb3d3d3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////Py///////zLy7w8u8u7vb3T3T3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////////8///////P//////zMy7w8u8u7vT3TOz3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP///////////////////////zPzMy7w8u8u7vT3TO7093d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8u8u7vdPdO7293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8y7M7vdPT27293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8///////////////MzMy7O8y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////8/L///////////8///MzMy8O7y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP/////////////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////MzMy8u7u7u7vdPb27O93d3TMz3d3d3TM9MzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27O93dPdOz093d3TPdMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dPd27293d3TPdPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dMz27293d3T3TPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7s7vd3dO7093d0727O93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+8/P///////8/MzMy8w7u7u7vd3TOz3d3d0727u93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+7+////////8/MzMw8w7y7u7vd3T3T3d093bO7u93d3T3T3TMzMzMzMzMzMzMzMzMzMzP///////////+8/P///8///8/MzMw7vLy7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7u7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7y7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7y7szzLvd3d3d3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7u7vDzLvTPdvd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP/////////z//////////////MzLy7uzvDzLzTM7vd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzvMy7zb07vd3d093bu7u93d3d3d3TMzMzMzMzMzMzMzMzMzMzP//////////////8/L///P///MzLy7uzu8y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLy7w7Pbvd3d093bu7u93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLzLy7Pdvd3d0907O7O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////8////////////////zLy7uzvLzLy73d3d3dPd0727O93d3d3dMzMzMzMzMzMzMzMzMzMzMzM=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Planet\"\n    },\n    \"IHAx{+JAVkkR7;45OS*f\": {\n        \"data\": \"hwQQABAAAAAAwPz/AAAAAADMu7vM/wAAALyzzNvdDAAAO8O83b3N/7Abw9zMvd2/sBHD3d293buwMcPd3d3du7Azs93d3Lv/OzMz2829vfs7MzPb3f3dCzszM7Pd/dsLOxMxs8vM/wuwGzEzzMz7AAC7yzPDzPsAAAAAvDO7/wAAAADA/P8PAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Alien\"\n    },\n    \"]/cI@:JS;!+E)%*%^wDC\": {\n        \"namespace\": \"myImages.\",\n        \"id\": \"]/cI@:JS;!+E)%*%^wDC\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"NjQwMDEwMDAxMDAwMDQwMDAwMDAwMDAwYmJiYjAwMDAwMDAwYmJiYjMzMzMwYjAwYzBiYzFiMzEzMzMzYmIwMGNjM2IxMTMzMzMxM2IxMDBiYzMzMzMzMzMzMTNiMTAwYmZjYmNjYmMzMzMzYzMwMGJmY2NkY2RkYmIzMzMzMGNiZmJjZGRkZGRkYmIzM2NiYzBkYmRjZGRkZGJkM2NjM2MwZGRkY2RkZGNjZGNjZjNmMGRkZGRjZGRkY2RjY2ZiZjBiZGJiZGRmYmNmY2NmYjAwZGNkZGJkZGRmYmJiZmYwMGMwZGRiZGRiZmRmZjBmMDBmMGJmZmJiYmJiMDAwMDAwZjBiYmZiMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiYmJiMDAwMDAwMDBiYmJiMzMzMzBiMDBjMGJjMWIzMTMzMzNiYjAwY2MzYzExMzEzMzEzYjEwMGJjMzMzMzMzMzMxM2IxMDBiZmNiY2NiYzNiMTNjMTAwYmZjY2RiZGRiZDNiYzMwY2JmZGNkZGRkZGRiYjMzY2JjMGRkZGNkZGRkYmQzYmMzYzBkZGRjZGRkY2JkM2NmM2YwZGRkZGNkZGRjZGNjZmJmMGJkYmJmYmRmY2RjY2ZiMDBkY2JkZGRmYmNjYmJmZjAwYzBiZGRiZmRjY2ZmMGYwMDAwZmNiYmJiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYmJiYjAwMDAwMDAwYmJiYjMzMzMwYjAwYzBiYzExMzMzMzMzYmIwMGNjM2MxMTMxMzMzM2IzMDBiYzMzMzMzMzMzMTNiMTAwYmZjYmNjYmMzMzEzYzEwMGJmY2NkY2RkYmIzM2MzMGNiZmJjZGRkZGRkYmIzM2NiYzBkYmRkZGRkZGJkM2NjM2MwY2RkY2RkZGRjZGNjZjNmMGRkZGRjZGRjY2RjY2ZiZjBiZGJiZGRkZGNkY2NmYjAwZGNkZGRkZmJjZmJiZmYwMGJmZGRiZGRiZmRmZjBmMDBmZmNmYmNkZGZkMDAwMDAwMDAwMDAwYmJiYjAwMDAwMDAwYmJiYjMzMzMwYjAwYzBiYzFiMzEzMzMzYmIwMGNjMzMxMTMzMzMxM2IxMDBiYzMzMzMzMzMzMTNiMTAwYmZjYmNjMzMzMzMzYzMwMGJmY2NiY2JiM2IzMzMzMGNiZmNjZGRkZGJkM2IzM2MzYzBkY2RjZGRkZGJkM2NjM2MwZGJkY2RkZGNjZGNjZjNmMGRkZGRjZGRkY2RjY2ZiZjBiZGJiZGRkZGNkY2NmYjAwZGNkZGRkZGRjYmJiZmYwMGZmZGRkZGNjZmJmZjBmZjBiZmZiY2ZiY2RkZmIwMGYwYmJmYjBmYjBkZGZkMDA=\",\n        \"displayName\": \"Animated Alien\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"X4JB-Z#5z{GHg)(9D5!a\":\n            case \"Planet\":return img`\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff\nffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc\nfffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff\nfffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff\nfff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff\nffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff\nf33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff\nff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff\nffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff\nfffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff\nfffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff\nffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff\nfffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nfcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff\nfffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff\nffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff\nffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff\nfffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf\nccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb\nbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb\nbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb\nbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb\nbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb\n3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333\n333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb\ncc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc\ncccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc\ncccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc\ncbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc\nbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb\nbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb\ndddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd\ndddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d\ndddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd\nddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd\nddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd\nddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd\nddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd\nd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd\n333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3\n33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d\n33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33\nd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd\nddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d\nb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb\nbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb\nbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb\nb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb\ndddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd\ndddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd\ndddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd\ndd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd\n3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333\n33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n`;\n            case \"IHAx{+JAVkkR7;45OS*f\":\n            case \"Alien\":return img`\n. . . . . . . . b b b b . . . . \n. . . . b b b b 3 3 3 3 b . . . \n. c c b b 1 1 3 3 3 3 3 b b . . \nc c b 3 1 1 3 3 3 3 3 1 1 b . . \nc b 3 3 3 3 3 3 3 3 3 1 1 b . . \nf b b c c c c b 3 3 3 3 3 c . . \nf b c c c d d d b b 3 3 3 3 c . \nf b c b d d d d d d b b 3 3 b c \n. c b d c d d d d d d b c 3 3 c \n. c d d c d d d c d d c c c 3 f \n. f d d d d d c d d d c c c b f \n. f d b b b d d b f f c c c b f \n. . c d d d d b d d b f b b f f \n. . . c d d d b b d d f f f f . \n. . . f f b b f b b b b . . . . \n. . . f b b b f f . . . . . . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"Animated Alien\":\n            case \"]/cI@:JS;!+E)%*%^wDC\":return [img`\n. . . . . . . . b b b b . . . . \n. . . . b b b b 3 3 3 3 b . . . \n. c c b b 1 1 3 3 3 3 3 b b . . \nc c b 3 1 1 3 3 3 3 3 1 1 b . . \nc b 3 3 3 3 3 3 3 3 3 1 1 b . . \nf b b c c c c b 3 3 3 3 3 c . . \nf b c c c d d d b b 3 3 3 3 c . \nf b c b d d d d d d b b 3 3 b c \n. c b d c d d d d d d b c 3 3 c \n. c d d c d d d c d d c c c 3 f \n. f d d d d d c d d d c c c b f \n. f d b b b d d b f f c c c b f \n. . c d d d d b d d b f b b f f \n. . . c d d d b b d d f f f f . \n. . . f f b b f b b b b . . . . \n. . . f b b b f f . . . . . . . \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . b b b b . . . . \n. . . . b b b b 3 3 3 3 b . . . \n. c c b b 1 1 3 3 3 3 3 b b . . \nc c c 3 1 1 1 3 3 3 3 1 1 b . . \nc b 3 3 3 3 3 3 3 3 3 1 1 b . . \nf b b c c c c b b 3 3 1 1 c . . \nf b c c b d d d d b b 3 3 c c . \nf b c d d d d d d d b b 3 3 b c \n. c d d c d d d d d d b b 3 3 c \n. c d d c d d d c d d b c 3 3 f \n. f d d d d d c d d d c c c b f \n. f d b b b b f f d d c c c b f \n. . c d d b d d b f c c b b f f \n. . . c d b b d d f c c f f f . \n. . . . c f b b b b . . . . . . \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . b b b b . . . . \n. . . . b b b b 3 3 3 3 b . . . \n. c c b 1 1 3 3 3 3 3 3 b b . . \nc c c 3 1 1 1 3 3 3 3 3 3 b . . \nc b 3 3 3 3 3 3 3 3 3 1 1 b . . \nf b b c c c c b 3 3 3 1 1 c . . \nf b c c c d d d b b 3 3 3 c c . \nf b c b d d d d d d b b 3 3 b c \n. c b d d d d d d d d b c 3 3 c \n. c d c c d d d d d d c c c 3 f \n. f d d d d d c c d d c c c b f \n. f d b b b d d d d d c c c b f \n. . c d d d d d b f f c b b f f \n. . f b d d d b b d d f f f f . \n. . f f f c c b d d d f . . . . \n`, img`\n. . . . . . . . b b b b . . . . \n. . . . b b b b 3 3 3 3 b . . . \n. c c b b 1 1 3 3 3 3 3 b b . . \nc c 3 3 1 1 3 3 3 3 3 1 1 b . . \nc b 3 3 3 3 3 3 3 3 3 1 1 b . . \nf b b c c c 3 3 3 3 3 3 3 c . . \nf b c c c b b b b 3 3 3 3 3 c . \nf b c c d d d d d b b 3 3 3 3 c \n. c c d c d d d d d d b c 3 3 c \n. c b d c d d d c d d c c c 3 f \n. f d d d d d c d d d c c c b f \n. f d b b b d d d d d c c c b f \n. . c d d d d d d d b c b b f f \n. . f f d d d d c c b f f f f . \n. f f b b f f c c b d d b f . . \n. f b b b f f . . b d d d f . . \n`];\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"100 Day Challenge\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"core\": \"*\",\n        \"arcade-background-scroll\": \"github:microsoft/arcade-background-scroll\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.11.37\",\n        \"tag\": \"v1.11.37\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/bf992d35ca2baeaa26d773aac7caad5a152c45aa\",\n        \"target\": \"1.11.37\",\n        \"pxt\": \"8.4.30\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n"
}
```

