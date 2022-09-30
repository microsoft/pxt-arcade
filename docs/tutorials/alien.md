# Alien Invasion


```ghost
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.rings, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 200)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let extraLife: Sprite = null
let myEnemy: Sprite = null
scene.setBackgroundImage(assets.image`Freeway`)
scroller.scrollBackgroundWithSpeed(-50, 0)
let mySprite = sprites.create(assets.image`Momma`, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 100)
mySprite.setStayInScreen(true)
info.startCountdown(15)
animation.runImageAnimation(
mySprite,
assets.animation`Momma Moving`,
100,
true
)
forever(function () {
    myEnemy = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    myEnemy.y = randint(0, 120)
    myEnemy.setKind(SpriteKind.Enemy)
    pause(randint(1200, 2200))
})
forever(function () {
    extraLife = sprites.createProjectileFromSide(assets.image`Extra Life`, -90, 0)
    extraLife.y = randint(0, 120)
    extraLife.setKind(SpriteKind.Food)
    pause(randint(4000, 5000))
})
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    projectile.y = randint(0, 120)
    pause(randint(1000, 2000))
})

```


## {Intro @unplugged}

Let's create a stampede!

In this tutorial, you'll learn how to build your own alien invasion.

![It's an alien invasion!](/static/tutorials/aliens/alien.gif "Try not to get in their way!" )



## {Step 2}

**🖼️ We can start with a background 🖼️**

---

► From the ``||scene:Scene||`` category, grab
``||scene:set background image to [ ]||`` and snap it into the empty ``||loops:on start||`` container already in the workspace.


► Click the **grey square** in the new block to open the image editor and choose a background from the **Gallery**.

---

**Hint:** After clicking the grey box, you can decide whether you want to create a background of your own, select a premade one from our **Gallery**, or select the same one we're using from **My Assets**.

![Toggle to a new window](/static/skillmap/assets/gallery-toggle.gif "Choose the image editor, gallery, or my assets." )



```blocks
//@highlight
scene.setBackgroundImage(assets.image`Planet`)
```




## {Step 3}


**🛣️ Let's add movement to the scene 🛣️**

---

► To make it look like the camera is moving,
go to ``||scroller:Scroller||`` and drag
``||scroller:scroll background with vx [-90] vy [-90]||`` into **the end**
of the **on start** container.

► Change the horizontal speed by changing the value of **vx** to **-50** .

► Stop the background from scrolling vertically by changing the value of **vy** to **0**.


```blocks
scene.setBackgroundImage(assets.image`Planet`)
//@highlight
scroller.scrollBackgroundWithSpeed(-50, 0)
```



## {Step 4}

**🎮  Take a look at the simulator 🎮**

Your background should move on its own!



## {Step 5}

**Unleash the aliens!**

---

► From ``||loops:Loops||``, grab a
``||loops:forever||`` loop container and drag it into
an empty spot on the workspace.

► From ``||sprites:Sprites||``, grab
``||variables(sprites):set [projectile] to projectile [ ] from side with vx [50] vy [50]||``
and snap it into the empty **forever** container.

► Click the grey box to draw an alien sprite (or toggle to **Gallery** or **My Assets** to select one of ours.)


```blocks
forever(function () {
    let projectile = sprites.createProjectileFromSide(assets.image`Alien`, 50, 50)
})

```

## {Step 6}

► To make the aliens look like they're walking along the ground, change
[__*vx*__](#whatVX "horizontal velocity") to **-90**
and [__*vy*__](#whatVY "vertical velocity") to **0**.



```blocks
forever(function () {
    let projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)
})

```



## {Step 7}

**😲 They're all flying 😲**

If we leave them like this, you'll never see them all! Let's spread them out.

---

► From  ``||sprites:Sprites||``, grab a
``||sprites:set [mySprite] [x] to [0]||``
block and snap it into the end of the **forever** loop container.

► Change **mySprite** to **projectile** using the first dropdown menu.

► Change **x** to **y** using the other dropdown menu.

► Replace **0** with ``||math:pick random [0] to [10]||``.
(From the ``||math:Math||`` category)


```blocks
forever(function () {
    let projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)
    //@highlight
    projectile.y = randint(0, 10)
})

```



## {Step 8}

**This is looking great, but they still hover around the top.**

---

► Help them spread out along the ground by changing the smallest random number from **0** to **40** and the largest random number from
**10** to **115**.


```blocks
forever(function () {
    let projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)
    projectile.y = randint(40, 115)
})
```


## {Step 9 @showdialog}

Let's animate them!

---

![Select an animation from the gallery](/static/skillmap/collector/select-anigif.gif "Or use My Assets" )




## {Step 10}

► In the toolbox, click **Advanced** to reveal the ``||animation:Animation||`` category.

► Drag ``||animation:animate [mySprite]||`` into **the bottom** of the ``||loops:forever||`` loop container.

► Change **mySprite** to **projectile** and click the grey switch at the bottom to **toggle the loop `<ON>`**.


```blocks

forever(function () {
    let projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)
    //@highlight
    projectile.y = randint(0, 10)

//@highlight
animation.runImageAnimation(
projectile,
[img`
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
    `] ,
500,
true
)
})
```

## {Step 11}

**🎥 Let's get animating 🎥**

---

► To select an animation, click the grey box in the new block to open the image editor.

► Here, you can toggle to **My Assets** and select the animation we use in the hints, or choose a different animation from the **Gallery**.

► If you want to create your own animation, add new frames using the grey plus **+** to the right of the image editor window. From there, you can draw each frame one-by-one.


```blocks
forever(function () {
    let projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)
    //@highlight
    projectile.y = randint(0, 10)

//@highlight
animation.runImageAnimation(
projectile,
assets.animation`Animated Alien`,
500,
true
)
})
```

## {Step 12}

**Watch your speed!**

---

► You can make your animation faster by changing the **interval** to a lower number. Try using **100** or **200**.

► If you'd like to slow your animation down, choose a longer **interval**.


```blocks
forever(function () {
    let projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)
    //@highlight
    projectile.y = randint(0, 10)

//@highlight
animation.runImageAnimation(
projectile,
assets.animation`Animated Alien`,
100,
true
)
})
```


## {Step 13}

**👽 There you have it 👽**

---

Now you've created an alien invasion!

Watch it go by in the simulator window and when you're done, click **Done** to return to the main page where you can share with family and friends!


```package
arcade-background-scroll=github:riknoll/arcade-background-scroll
```

```assetjson
{
  "README.md": "",
  "assets.json": "",

  "images.g.jres": "{\n    \"X4JB-Z#5z{GHg)(9D5!a\": {\n        \"data\": \"hwSgAHgAAAD/////////////////////////zLy7uzvDzLy73d3d3TPd0727293d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////P////8//////zLy7u7vDzLu73d3dPTPdMz27093d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7szzLu73d3dPTPdPd2z3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP///////////8/M/v/////////z7y7u7u7u7sz3d3dPTPdPdMz3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7u7uzsz3d3dPTPd3TPT3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP/////////////P///////////z7y7u7u7uzsz3d3dPTPd3d3d3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP//////8///////////////8z/z7y7u7u7uzsz3d3dPTPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8z/z7y7O7y7uzsz3d3d3TPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7O8y7u7vT3d3d3dPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7w8y7u7vb3d3d3d3d3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////P//////z7y7w8u8u7vb3d3d3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////Py///////zLy7w8u8u7vb3T3T3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////////8///////P//////zMy7w8u8u7vT3TOz3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP///////////////////////zPzMy7w8u8u7vT3TO7093d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8u8u7vdPdO7293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8y7M7vdPT27293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8///////////////MzMy7O8y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////8/L///////////8///MzMy8O7y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP/////////////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////MzMy8u7u7u7vdPb27O93d3TMz3d3d3TM9MzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27O93dPdOz093d3TPdMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dPd27293d3TPdPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dMz27293d3T3TPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7s7vd3dO7093d0727O93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+8/P///////8/MzMy8w7u7u7vd3TOz3d3d0727u93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+7+////////8/MzMw8w7y7u7vd3T3T3d093bO7u93d3T3T3TMzMzMzMzMzMzMzMzMzMzP///////////+8/P///8///8/MzMw7vLy7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7u7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7y7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7y7szzLvd3d3d3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7u7vDzLvTPdvd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP/////////z//////////////MzLy7uzvDzLzTM7vd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzvMy7zb07vd3d093bu7u93d3d3d3TMzMzMzMzMzMzMzMzMzMzP//////////////8/L///P///MzLy7uzu8y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLy7w7Pbvd3d093bu7u93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLzLy7Pdvd3d0907O7O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////8////////////////zLy7uzvLzLy73d3d3dPd0727O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////zLy7uzvDzLy73d3d3TPd0727293d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////P////8//////zLy7u7vDzLu73d3dPTPdMz27093d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7szzLu73d3dPTPdPd2z3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP///////////8/M/v/////////z7y7u7u7u7sz3d3dPTPdPdMz3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7u7uzsz3d3dPTPd3TPT3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP/////////////P///////////z7y7u7u7uzsz3d3dPTPd3d3d3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP//////8///////////////8z/z7y7u7u7uzsz3d3dPTPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8z/z7y7O7y7uzsz3d3d3TPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7O8y7u7vT3d3d3dPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7w8y7u7vb3d3d3d3d3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////P//////z7y7w8u8u7vb3d3d3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////Py///////zLy7w8u8u7vb3T3T3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////////8///////P//////zMy7w8u8u7vT3TOz3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP///////////////////////zPzMy7w8u8u7vT3TO7093d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8u8u7vdPdO7293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8y7M7vdPT27293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8///////////////MzMy7O8y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////8/L///////////8///MzMy8O7y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP/////////////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////MzMy8u7u7u7vdPb27O93d3TMz3d3d3TM9MzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27O93dPdOz093d3TPdMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dPd27293d3TPdPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dMz27293d3T3TPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7s7vd3dO7093d0727O93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+8/P///////8/MzMy8w7u7u7vd3TOz3d3d0727u93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+7+////////8/MzMw8w7y7u7vd3T3T3d093bO7u93d3T3T3TMzMzMzMzMzMzMzMzMzMzP///////////+8/P///8///8/MzMw7vLy7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7u7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7y7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7y7szzLvd3d3d3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7u7vDzLvTPdvd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP/////////z//////////////MzLy7uzvDzLzTM7vd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzvMy7zb07vd3d093bu7u93d3d3d3TMzMzMzMzMzMzMzMzMzMzP//////////////8/L///P///MzLy7uzu8y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLy7w7Pbvd3d093bu7u93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLzLy7Pdvd3d0907O7O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////8////////////////zLy7uzvLzLy73d3d3dPd0727O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////zLy7uzvDzLy73d3d3TPd0727293d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////P////8//////zLy7u7vDzLu73d3dPTPdMz27093d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7szzLu73d3dPTPdPd2z3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP///////////8/M/v/////////z7y7u7u7u7sz3d3dPTPdPdMz3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7u7uzsz3d3dPTPd3TPT3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP/////////////P///////////z7y7u7u7uzsz3d3dPTPd3d3d3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP//////8///////////////8z/z7y7u7u7uzsz3d3dPTPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8z/z7y7O7y7uzsz3d3d3TPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7O8y7u7vT3d3d3dPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7w8y7u7vb3d3d3d3d3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////P//////z7y7w8u8u7vb3d3d3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////Py///////zLy7w8u8u7vb3T3T3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////////8///////P//////zMy7w8u8u7vT3TOz3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP///////////////////////zPzMy7w8u8u7vT3TO7093d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8u8u7vdPdO7293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8y7M7vdPT27293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8///////////////MzMy7O8y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////8/L///////////8///MzMy8O7y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP/////////////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////MzMy8u7u7u7vdPb27O93d3TMz3d3d3TM9MzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27O93dPdOz093d3TPdMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dPd27293d3TPdPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dMz27293d3T3TPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7s7vd3dO7093d0727O93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+8/P///////8/MzMy8w7u7u7vd3TOz3d3d0727u93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+7+////////8/MzMw8w7y7u7vd3T3T3d093bO7u93d3T3T3TMzMzMzMzMzMzMzMzMzMzP///////////+8/P///8///8/MzMw7vLy7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7u7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7y7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7y7szzLvd3d3d3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7u7vDzLvTPdvd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP/////////z//////////////MzLy7uzvDzLzTM7vd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzvMy7zb07vd3d093bu7u93d3d3d3TMzMzMzMzMzMzMzMzMzMzP//////////////8/L///P///MzLy7uzu8y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLy7w7Pbvd3d093bu7u93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLzLy7Pdvd3d0907O7O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////8////////////////zLy7uzvLzLy73d3d3dPd0727O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////zLy7uzvDzLy73d3d3TPd0727293d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////P////8//////zLy7u7vDzLu73d3dPTPdMz27093d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7szzLu73d3dPTPdPd2z3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP///////////8/M/v/////////z7y7u7u7u7sz3d3dPTPdPdMz3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7u7uzsz3d3dPTPd3TPT3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP/////////////P///////////z7y7u7u7uzsz3d3dPTPd3d3d3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP//////8///////////////8z/z7y7u7u7uzsz3d3dPTPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8z/z7y7O7y7uzsz3d3d3TPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7O8y7u7vT3d3d3dPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7w8y7u7vb3d3d3d3d3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////P//////z7y7w8u8u7vb3d3d3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////Py///////zLy7w8u8u7vb3T3T3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////////8///////P//////zMy7w8u8u7vT3TOz3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP///////////////////////zPzMy7w8u8u7vT3TO7093d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8u8u7vdPdO7293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8y7M7vdPT27293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8///////////////MzMy7O8y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////8/L///////////8///MzMy8O7y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP/////////////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////MzMy8u7u7u7vdPb27O93d3TMz3d3d3TM9MzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27O93dPdOz093d3TPdMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dPd27293d3TPdPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dMz27293d3T3TPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7s7vd3dO7093d0727O93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+8/P///////8/MzMy8w7u7u7vd3TOz3d3d0727u93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+7+////////8/MzMw8w7y7u7vd3T3T3d093bO7u93d3T3T3TMzMzMzMzMzMzMzMzMzMzP///////////+8/P///8///8/MzMw7vLy7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7u7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7y7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7y7szzLvd3d3d3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7u7vDzLvTPdvd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP/////////z//////////////MzLy7uzvDzLzTM7vd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzvMy7zb07vd3d093bu7u93d3d3d3TMzMzMzMzMzMzMzMzMzMzP//////////////8/L///P///MzLy7uzu8y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLy7w7Pbvd3d093bu7u93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLzLy7Pdvd3d0907O7O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////8////////////////zLy7uzvLzLy73d3d3dPd0727O93d3d3dMzMzMzMzMzMzMzMzMzMzMzM=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Planet\"\n    },\n    \"IHAx{+JAVkkR7;45OS*f\": {\n        \"data\": \"hwQQABAAAAAAwPz/AAAAAADMu7vM/wAAALyzzNvdDAAAO8O83b3N/7Abw9zMvd2/sBHD3d293buwMcPd3d3du7Azs93d3Lv/OzMz2829vfs7MzPb3f3dCzszM7Pd/dsLOxMxs8vM/wuwGzEzzMz7AAC7yzPDzPsAAAAAvDO7/wAAAADA/P8PAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Alien\"\n    },\n    \"]/cI@:JS;!+E)%*%^wDC\": {\n        \"namespace\": \"myImages\",\n        \"id\": \"]/cI@:JS;!+E)%*%^wDC\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"NjQwMDEwMDAxMDAwMDQwMDAwMDAwMDAwYmJiYjAwMDAwMDAwYmJiYjMzMzMwYjAwYzBiYzFiMzEzMzMzYmIwMGNjM2IxMTMzMzMxM2IxMDBiYzMzMzMzMzMzMTNiMTAwYmZjYmNjYmMzMzMzYzMwMGJmY2NkY2RkYmIzMzMzMGNiZmJjZGRkZGRkYmIzM2NiYzBkYmRjZGRkZGJkM2NjM2MwZGRkY2RkZGNjZGNjZjNmMGRkZGRjZGRkY2RjY2ZiZjBiZGJiZGRmYmNmY2NmYjAwZGNkZGJkZGRmYmJiZmYwMGMwZGRiZGRiZmRmZjBmMDBmMGJmZmJiYmJiMDAwMDAwZjBiYmZiMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiYmJiMDAwMDAwMDBiYmJiMzMzMzBiMDBjMGJjMWIzMTMzMzNiYjAwY2MzYzExMzEzMzEzYjEwMGJjMzMzMzMzMzMxM2IxMDBiZmNiY2NiYzNiMTNjMTAwYmZjY2RiZGRiZDNiYzMwY2JmZGNkZGRkZGRiYjMzY2JjMGRkZGNkZGRkYmQzYmMzYzBkZGRjZGRkY2JkM2NmM2YwZGRkZGNkZGRjZGNjZmJmMGJkYmJmYmRmY2RjY2ZiMDBkY2JkZGRmYmNjYmJmZjAwYzBiZGRiZmRjY2ZmMGYwMDAwZmNiYmJiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYmJiYjAwMDAwMDAwYmJiYjMzMzMwYjAwYzBiYzExMzMzMzMzYmIwMGNjM2MxMTMxMzMzM2IzMDBiYzMzMzMzMzMzMTNiMTAwYmZjYmNjYmMzMzEzYzEwMGJmY2NkY2RkYmIzM2MzMGNiZmJjZGRkZGRkYmIzM2NiYzBkYmRkZGRkZGJkM2NjM2MwY2RkY2RkZGRjZGNjZjNmMGRkZGRjZGRjY2RjY2ZiZjBiZGJiZGRkZGNkY2NmYjAwZGNkZGRkZmJjZmJiZmYwMGJmZGRiZGRiZmRmZjBmMDBmZmNmYmNkZGZkMDAwMDAwMDAwMDAwYmJiYjAwMDAwMDAwYmJiYjMzMzMwYjAwYzBiYzFiMzEzMzMzYmIwMGNjMzMxMTMzMzMxM2IxMDBiYzMzMzMzMzMzMTNiMTAwYmZjYmNjMzMzMzMzYzMwMGJmY2NiY2JiM2IzMzMzMGNiZmNjZGRkZGJkM2IzM2MzYzBkY2RjZGRkZGJkM2NjM2MwZGJkY2RkZGNjZGNjZjNmMGRkZGRjZGRkY2RjY2ZiZjBiZGJiZGRkZGNkY2NmYjAwZGNkZGRkZGRjYmJiZmYwMGZmZGRkZGNjZmJmZjBmZjBiZmZiY2ZiY2RkZmIwMGYwYmJmYjBmYjBkZGZkMDA=\",\n        \"displayName\": \"Animated Alien\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"X4JB-Z#5z{GHg)(9D5!a\":\n            case \"Planet\":return img`\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff\nffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc\nfffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff\nfffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff\nfff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff\nffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff\nf33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff\nff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff\nffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff\nfffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff\nfffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff\nffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff\nfffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nfcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff\nfffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff\nffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff\nffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff\nfffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf\nccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb\nbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb\nbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb\nbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb\nbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb\n3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333\n333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb\ncc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc\ncccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc\ncccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc\ncbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc\nbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb\nbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb\ndddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd\ndddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d\ndddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd\nddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd\nddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd\nddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd\nddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd\nd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd\n333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3\n33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d\n33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33\nd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd\nddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d\nb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb\nbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb\nbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb\nb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb\ndddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd\ndddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd\ndddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd\ndd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd\n3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333\n33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n`;\n            case \"IHAx{+JAVkkR7;45OS*f\":\n            case \"Alien\":return img`\n. . . . . . . . b b b b . . . . \n. . . . b b b b 3 3 3 3 b . . . \n. c c b b 1 1 3 3 3 3 3 b b . . \nc c b 3 1 1 3 3 3 3 3 1 1 b . . \nc b 3 3 3 3 3 3 3 3 3 1 1 b . . \nf b b c c c c b 3 3 3 3 3 c . . \nf b c c c d d d b b 3 3 3 3 c . \nf b c b d d d d d d b b 3 3 b c \n. c b d c d d d d d d b c 3 3 c \n. c d d c d d d c d d c c c 3 f \n. f d d d d d c d d d c c c b f \n. f d b b b d d b f f c c c b f \n. . c d d d d b d d b f b b f f \n. . . c d d d b b d d f f f f . \n. . . f f b b f b b b b . . . . \n. . . f b b b f f . . . . . . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"Animated Alien\":\n            case \"]/cI@:JS;!+E)%*%^wDC\":return [img`\n. . . . . . . . b b b b . . . . \n. . . . b b b b 3 3 3 3 b . . . \n. c c b b 1 1 3 3 3 3 3 b b . . \nc c b 3 1 1 3 3 3 3 3 1 1 b . . \nc b 3 3 3 3 3 3 3 3 3 1 1 b . . \nf b b c c c c b 3 3 3 3 3 c . . \nf b c c c d d d b b 3 3 3 3 c . \nf b c b d d d d d d b b 3 3 b c \n. c b d c d d d d d d b c 3 3 c \n. c d d c d d d c d d c c c 3 f \n. f d d d d d c d d d c c c b f \n. f d b b b d d b f f c c c b f \n. . c d d d d b d d b f b b f f \n. . . c d d d b b d d f f f f . \n. . . f f b b f b b b b . . . . \n. . . f b b b f f . . . . . . . \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . b b b b . . . . \n. . . . b b b b 3 3 3 3 b . . . \n. c c b b 1 1 3 3 3 3 3 b b . . \nc c c 3 1 1 1 3 3 3 3 1 1 b . . \nc b 3 3 3 3 3 3 3 3 3 1 1 b . . \nf b b c c c c b b 3 3 1 1 c . . \nf b c c b d d d d b b 3 3 c c . \nf b c d d d d d d d b b 3 3 b c \n. c d d c d d d d d d b b 3 3 c \n. c d d c d d d c d d b c 3 3 f \n. f d d d d d c d d d c c c b f \n. f d b b b b f f d d c c c b f \n. . c d d b d d b f c c b b f f \n. . . c d b b d d f c c f f f . \n. . . . c f b b b b . . . . . . \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . b b b b . . . . \n. . . . b b b b 3 3 3 3 b . . . \n. c c b 1 1 3 3 3 3 3 3 b b . . \nc c c 3 1 1 1 3 3 3 3 3 3 b . . \nc b 3 3 3 3 3 3 3 3 3 1 1 b . . \nf b b c c c c b 3 3 3 1 1 c . . \nf b c c c d d d b b 3 3 3 c c . \nf b c b d d d d d d b b 3 3 b c \n. c b d d d d d d d d b c 3 3 c \n. c d c c d d d d d d c c c 3 f \n. f d d d d d c c d d c c c b f \n. f d b b b d d d d d c c c b f \n. . c d d d d d b f f c b b f f \n. . f b d d d b b d d f f f f . \n. . f f f c c b d d d f . . . . \n`, img`\n. . . . . . . . b b b b . . . . \n. . . . b b b b 3 3 3 3 b . . . \n. c c b b 1 1 3 3 3 3 3 b b . . \nc c 3 3 1 1 3 3 3 3 3 1 1 b . . \nc b 3 3 3 3 3 3 3 3 3 1 1 b . . \nf b b c c c 3 3 3 3 3 3 3 c . . \nf b c c c b b b b 3 3 3 3 3 c . \nf b c c d d d d d b b 3 3 3 3 c \n. c c d c d d d d d d b c 3 3 c \n. c b d c d d d c d d c c c 3 f \n. f d d d d d c d d d c c c b f \n. f d b b b d d d d d c c c b f \n. . c d d d d d d d b c b b f f \n. . f f d d d d c c b f f f f . \n. f f b b f f c c b d d b f . . \n. f b b b f f . . b d d d f . . \n`];\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"uJ(:CqE3w:o.{e=fXtOg\">projectile</variable><variable id=\"tT|KB|]JbeNqAVg)|lp:\">myEnemy</variable><variable id=\"UbB[reC]PzdRSEd2:e7,\">extraLife</variable><variable id=\"N?,8OgWY)WXFfk150o6;\">mySprite</variable><variable type=\"KIND_SpriteKind\" id=\"#5=}[4Hvd2G.]kCB^jz2\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"i55NkF}%=?YTbnqQ9#c(\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"F9w{dScwQG8RQuK)_pjP\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"jg:1_C3X7E9~JoSmb7mN\">Enemy</variable></variables><block type=\"forever\" x=\"490\" y=\"-90\"><statement name=\"HANDLER\"><block type=\"variables_set\"><field name=\"VAR\" id=\"uJ(:CqE3w:o.{e=fXtOg\">projectile</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreateprojectilefromside\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`Alien`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.IHAx{+JAVkkR7;45OS*f\"}}</data></shadow></value><value name=\"vx\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">-90</field></shadow></value><value name=\"vy\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">0</field></shadow></value></block></value><next><block type=\"Sprite_blockCombine_set\"><field name=\"property\">Sprite.y@set</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"uJ(:CqE3w:o.{e=fXtOg\">projectile</field></block></value><value name=\"value\"><block type=\"device_random\"><value name=\"min\"><shadow type=\"math_number\"><field name=\"NUM\">40</field></shadow></value><value name=\"limit\"><shadow type=\"math_number\"><field name=\"NUM\">115</field></shadow></value></block></value><next><block type=\"run_image_animation\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"uJ(:CqE3w:o.{e=fXtOg\">projectile</field></block></value><value name=\"frames\"><block type=\"animation_editor\"><field name=\"frames\">assets.animation`Animated Alien`</field><data>{\"commentRefs\":[],\"fieldData\":{\"frames\":\"myImages.]/cI@:JS;!+E)%*%^wDC\"}}</data></block></value><value name=\"frameInterval\"><shadow type=\"timePicker\"><field name=\"ms\">100</field></shadow></value><value name=\"loop\"><shadow type=\"toggleOnOff\"><field name=\"on\">true</field></shadow></value></block></next></block></next></block></statement></block><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"gamesetbackgroundimage\"><value name=\"img\"><shadow type=\"background_image_picker\"><field name=\"img\">assets.image`Planet`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.X4JB-Z#5z{GHg)(9D5!a\"}}</data></shadow></value><next><block type=\"scroller_scrollBackgroundWithSpeed\"><value name=\"vx\"><shadow type=\"math_number\"><field name=\"NUM\">-50</field></shadow></value><value name=\"vy\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow></value></block></next></block></statement></block><block type=\"controls_repeat_ext\" disabled=\"true\" x=\"30\" y=\"290\"><value name=\"TIMES\"><shadow type=\"math_whole_number\" disabled=\"true\"><field name=\"NUM\">100</field></shadow></value><statement name=\"DO\"><block type=\"variables_set\" disabled=\"true\"><field name=\"VAR\" id=\"uJ(:CqE3w:o.{e=fXtOg\">projectile</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreateprojectilefromside\" disabled=\"true\"><value name=\"img\"><shadow type=\"screen_image_picker\" disabled=\"true\"><field name=\"img\">assets.image`Alien`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.IHAx{+JAVkkR7;45OS*f\"}}</data></shadow></value><value name=\"vx\"><shadow type=\"spriteSpeedPicker\" disabled=\"true\"><field name=\"speed\">-90</field></shadow></value><value name=\"vy\"><shadow type=\"spriteSpeedPicker\" disabled=\"true\"><field name=\"speed\">0</field></shadow></value></block></value><next><block type=\"Sprite_blockCombine_set\" disabled=\"true\"><field name=\"property\">Sprite.y@set</field><value name=\"mySprite\"><block type=\"variables_get\" disabled=\"true\"><field name=\"VAR\" id=\"uJ(:CqE3w:o.{e=fXtOg\">projectile</field></block></value><value name=\"value\"><block type=\"device_random\" disabled=\"true\"><value name=\"min\"><shadow type=\"math_number\" disabled=\"true\"><field name=\"NUM\">30</field></shadow></value><value name=\"limit\"><shadow type=\"math_number\" disabled=\"true\"><field name=\"NUM\">115</field></shadow></value></block></value><next><block type=\"run_image_animation\" disabled=\"true\"><value name=\"sprite\"><block type=\"variables_get\" disabled=\"true\"><field name=\"VAR\" id=\"uJ(:CqE3w:o.{e=fXtOg\">projectile</field></block></value><value name=\"frames\"><block type=\"animation_editor\" disabled=\"true\"><field name=\"frames\">assets.animation`Animated Alien`</field><data>{\"commentRefs\":[],\"fieldData\":{\"frames\":\"myImages.]/cI@:JS;!+E)%*%^wDC\"}}</data></block></value><value name=\"frameInterval\"><shadow type=\"timePicker\" disabled=\"true\"><field name=\"ms\">100</field></shadow></value><value name=\"loop\"><shadow type=\"toggleOnOff\" disabled=\"true\"><field name=\"on\">true</field></shadow></value><next><block type=\"device_pause\" disabled=\"true\"><value name=\"pause\"><shadow type=\"timePicker\"><field name=\"ms\">100</field></shadow><block type=\"device_random\" disabled=\"true\"><value name=\"min\"><shadow type=\"math_number\" disabled=\"true\"><field name=\"NUM\">25</field></shadow></value><value name=\"limit\"><shadow type=\"math_number\" disabled=\"true\"><field name=\"NUM\">75</field></shadow></value></block></value></block></next></block></next></block></next></block></statement></block><block type=\"spritesoverlap\" x=\"1633\" y=\"678\"><value name=\"HANDLER_DRAG_PARAM_sprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">sprite</field></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value><value name=\"HANDLER_DRAG_PARAM_otherSprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">otherSprite</field></shadow></value><value name=\"otherKind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Enemy</field></shadow></value><statement name=\"HANDLER\"><block type=\"spritedestroy\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"true\"></mutation><field name=\"effect\">effects.fire</field><value name=\"sprite\"><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">otherSprite</field></block></value><value name=\"duration\"><shadow type=\"timePicker\"><field name=\"ms\">200</field></shadow></value><next><block type=\"hudChangeLifeBy\"><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">-1</field></shadow></value></block></next></block></statement></block></xml>",
  "main.ts": "sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {\n    otherSprite.destroy()\n    info.changeLifeBy(-1)\n})\nlet projectile: Sprite = null\nscene.setBackgroundImage(assets.image`Planet`)\nscroller.scrollBackgroundWithSpeed(-50, 0)\nforever(function () {\n    projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)\n    projectile.y = randint(40, 115)\n    animation.runImageAnimation(\n    projectile,\n    assets.animation`Animated Alien`,\n    100,\n    true\n    )\n})\n",
  "pxt.json": "{\n    \"name\": \"Alien Invasion\",\n    \"version\": \"0.0.1\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"arcade-background-scroll\": \"github:riknoll/arcade-background-scroll#43651f88b917a98ad886fdd4c1c2ad8001ce9b9c\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"targetVersions\": {\n        \"target\": \"1.4.41\",\n        \"targetId\": \"arcade\"\n    },\n    \"supportedTargets\": [\n        \"arcade\"\n    ],\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "test.ts": "// tests go here; this will not be compiled when this package is used as an extension.\n"
}
```
