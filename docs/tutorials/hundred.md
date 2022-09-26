# 100 Day Challenge



## {Intro @unplugged}

It's been 100 days!

Let's celebrate by creating a project with 100 of our favorite things!

![It's an alien invasion!](/static/tutorials/aliens/alien.gif "Try not to get in their way!" )



## {Step 2}

Let's start by adding the code block that will create the background for our game.

---

- :tree: From the ``||scene:Scene||`` category, grab <br/>
``||scene:set background image to [ ]||`` <br/>
and snap it into the empty <br/>
``||loops:on start||`` <br/>
container already in the workspace.

![Here's how to choose a bg](/static/tutorials/aliens/choose-bg.gif "Toggle to My Assets and pick the background." )


- :mouse pointer: Click "Next" to find out what to do next.



```blocks
//@highlight
scene.setBackgroundImage(img`
.
`)
```

---

![Here's how to choose a bg](/static/tutorials/aliens/choose-bg.gif "Toggle to My Assets and pick the background." )


## {Step 2.5}


- :paint brush: Click the **grey square** in the new block to open the image editor and choose a background from the **Gallery**.
_💡 If you don't find a background you like, you can make one of your own!_



```blocks
//@highlight
scene.setBackgroundImage(assets.image`Planet`)
```


## {Step 3}


**Let's add movement to the scene**

---

- :arrows alternate: To make it look like the camera is moving, go to ``||scroller: Scroller||`` and drag <br/>
``||scroller:scroll background with vx [-50] vy [-50]||`` <br/>
into **the end** of the <br/>
``||loops:on start||`` container. <br/>
_💡  Remember, the icon to the left of the instructions shows the same icon as the toolbox category for the block you need._


- :mouse pointer: Stop the background from scrolling up and down by changing the value of **vy** to **0**.


```blocks
scene.setBackgroundImage(assets.image`Planet`)
//@highlight
scroller.scrollBackgroundWithSpeed(-50, 0)
```



## {Step 4}

**Try your game in the simulator (Bottom Right)**  
![Go to  the Game Simulator in the editor.](/static/skillmap/assets/game-win-tab.png "Don't forget to look at your game!")
---

Your background should move on its own!



## {Step 5}

**Unleash the beasts!**

---

- :redo: From ``||loops:Loops||``, grab a <br/>
``||loops:repeat 4 times||`` <br/>
loop container and drag it into **the end** of the <br/>
``||loops:on start||`` container. <br/>

- :mouse pointer: Change **4** to **100** to build the stampede!



```blocks
scene.setBackgroundImage(assets.image`Planet`)
scroller.scrollBackgroundWithSpeed(-50, 0)
//@highlight
for (let index = 0; index < 100; index++) {
}

```


## {Step 5.5}

**Choose your Sprite!**

---

- :paper plane: From ``||sprites:Sprites||``, grab <br/>
``||variables:set [projectile] to projectile [ ] from side with vx [50] vy [50]||`` <br/>
and snap it into the empty ``||loops:repeat 100 times||`` loop.

- :paint brush: Click the grey box and toggle to **My Assets** to select the **Alien** sprite...OR draw one of your favorite things!


```blocks
scene.setBackgroundImage(assets.image`Planet`)
scroller.scrollBackgroundWithSpeed(-50, 0)
for (let index = 0; index < 100; index++) {
    projectile = sprites.createProjectileFromSide(assets.image`Alien`, 50, 50)
}
```


## {Step 6}

- :mouse pointer: To make the aliens look like they're walking from right to left, change
[__*vx*__](#whatVX "horizontal velocity") to **-90**
and [__*vy*__](#whatVY "vertical velocity") to **0**.



```blocks
scene.setBackgroundImage(assets.image`Planet`)
scroller.scrollBackgroundWithSpeed(-50, 0)
for (let index = 0; index < 100; index++) {forever(function () {
//@highlight
    let projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)
})

```


## {Step 6.5}

**Take another look at your game (Bottom Right)**  
![Go to  the Game Simulator in the editor.](/static/skillmap/assets/game-win-tab.png "Don't forget to look at your game!")

---

Do you have a single sprite floating across the sky? We'll fix that over the next couple of steps.


## {Step 7}

If we leave the sprites like this, you won't be able to see them all! Let's spread them out.

---

- :paper plane: From ``||sprites:Sprites||``, grab a <br/>
``||sprites:set [mySprite] [x] to [0]||`` <br/>
block and snap it into **the end** of the <br/>
``||loops:repeat 100 times||`` loop.

- :mouse pointer: Change **mySprite** to **projectile** using the first dropdown menu.

- :mouse pointer: Change **x** to **y** using the other dropdown menu.

- :calculator: Replace **0** with <br/>
``||math:pick random [0] to [10]||`` <br/>
(from the ``||math:Math||`` category.)



```blocks
scene.setBackgroundImage(assets.image`Planet`)
scroller.scrollBackgroundWithSpeed(-50, 0)
for (let index = 0; index < 100; index++) {
    let projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)
    //@highlight
    projectile.y = randint(0, 10)
})

```



## {Step 8}

**This is looking great, but the sprites still hover around the top.**

---

- :mouse pointer: Help them spread out across the screen by changing the smallest random number from **0** to **40** and the largest random number from
**10** to **100**.


```blocks
scene.setBackgroundImage(assets.image`Planet`)
scroller.scrollBackgroundWithSpeed(-50, 0)
for (let index = 0; index < 100; index++) {
    let projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)
    //@highlight
    projectile.y = randint(40, 100)
})
```

## {Step 8.5}

**Let's spread them out a bit.**

Our loop spits out all the sprites at the same time. If we add a small pause, we can give them room to run!

---

- :redo: Help the sprites spread out horizontally by adding <br/>
``||loops: pause [100]||`` <br/>
anywhere inside the <br/>
``||loops:repeat 100 times||`` loop.


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



## {Step 9}

Let's animate !

---

- :chevron down: In the toolbox, click **Advanced** to reveal the ``||animation:Animation||`` category.

- :sync: Drag <br/>
``||animation:animate [mySprite]||`` <br/>
into **the end** of the <br/>
``||loops:repeat 100 times||`` loop.

- :mouse pointer: Change **mySprite** to **projectile** and click the grey switch at the bottom to **toggle the loop `<ON>`**.


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
500,
true
)
})
```

## {Step 11}

**🎥 Let's get animating 🎥**

---

- :paint brush: To select an animation, click the grey box in the new block to open the image editor.

- :mouse pointer: Here, you can toggle to **My Assets** and select the animation we use in the hints, or choose a different animation from the **Gallery**.

_💡 If you want to create your own animation, you can add new frames using the grey plus **+** to the right of the image editor window. From there, you can draw each frame one-by-one._


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
500,
true
)
})
```

## {Step 12}

**Watch your speed!**

---

- :mouse pointer: You can make your animation move faster by changing the **interval** to a lower number. Try using **100** or **200**.

_💡 If you'd like to slow your animation down, choose a longer **interval** by using a larger number._


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


## {Step 13}

**💯 There you have it 💯**

---

Now you have a hundred things to celebrate 100 days!

Take a final look at your project in the game window. When you're finished, click **Done** and share it with family and friends!


```package
arcade-background-scroll=github:microsoft/arcade-background-scroll#926e12eefffd09d453c7cde73f8d6ebd0e666d9d/
```



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





```assetjson
{
  "README.md": "",
  "assets.json": "",

  "images.g.jres": "{\n    \"X4JB-Z#5z{GHg)(9D5!a\": {\n        \"data\": \"hwSgAHgAAAD/////////////////////////zLy7uzvDzLy73d3d3TPd0727293d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////P////8//////zLy7u7vDzLu73d3dPTPdMz27093d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7szzLu73d3dPTPdPd2z3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP///////////8/M/v/////////z7y7u7u7u7sz3d3dPTPdPdMz3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7u7uzsz3d3dPTPd3TPT3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP/////////////P///////////z7y7u7u7uzsz3d3dPTPd3d3d3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP//////8///////////////8z/z7y7u7u7uzsz3d3dPTPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8z/z7y7O7y7uzsz3d3d3TPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7O8y7u7vT3d3d3dPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7w8y7u7vb3d3d3d3d3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////P//////z7y7w8u8u7vb3d3d3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////Py///////zLy7w8u8u7vb3T3T3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////////8///////P//////zMy7w8u8u7vT3TOz3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP///////////////////////zPzMy7w8u8u7vT3TO7093d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8u8u7vdPdO7293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8y7M7vdPT27293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8///////////////MzMy7O8y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////8/L///////////8///MzMy8O7y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP/////////////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////MzMy8u7u7u7vdPb27O93d3TMz3d3d3TM9MzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27O93dPdOz093d3TPdMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dPd27293d3TPdPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dMz27293d3T3TPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7s7vd3dO7093d0727O93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+8/P///////8/MzMy8w7u7u7vd3TOz3d3d0727u93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+7+////////8/MzMw8w7y7u7vd3T3T3d093bO7u93d3T3T3TMzMzMzMzMzMzMzMzMzMzP///////////+8/P///8///8/MzMw7vLy7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7u7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7y7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7y7szzLvd3d3d3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7u7vDzLvTPdvd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP/////////z//////////////MzLy7uzvDzLzTM7vd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzvMy7zb07vd3d093bu7u93d3d3d3TMzMzMzMzMzMzMzMzMzMzP//////////////8/L///P///MzLy7uzu8y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLy7w7Pbvd3d093bu7u93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLzLy7Pdvd3d0907O7O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////8////////////////zLy7uzvLzLy73d3d3dPd0727O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////zLy7uzvDzLy73d3d3TPd0727293d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////P////8//////zLy7u7vDzLu73d3dPTPdMz27093d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7szzLu73d3dPTPdPd2z3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP///////////8/M/v/////////z7y7u7u7u7sz3d3dPTPdPdMz3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7u7uzsz3d3dPTPd3TPT3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP/////////////P///////////z7y7u7u7uzsz3d3dPTPd3d3d3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP//////8///////////////8z/z7y7u7u7uzsz3d3dPTPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8z/z7y7O7y7uzsz3d3d3TPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7O8y7u7vT3d3d3dPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7w8y7u7vb3d3d3d3d3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////P//////z7y7w8u8u7vb3d3d3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////Py///////zLy7w8u8u7vb3T3T3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////////8///////P//////zMy7w8u8u7vT3TOz3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP///////////////////////zPzMy7w8u8u7vT3TO7093d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8u8u7vdPdO7293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8y7M7vdPT27293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8///////////////MzMy7O8y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////8/L///////////8///MzMy8O7y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP/////////////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////MzMy8u7u7u7vdPb27O93d3TMz3d3d3TM9MzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27O93dPdOz093d3TPdMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dPd27293d3TPdPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dMz27293d3T3TPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7s7vd3dO7093d0727O93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+8/P///////8/MzMy8w7u7u7vd3TOz3d3d0727u93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+7+////////8/MzMw8w7y7u7vd3T3T3d093bO7u93d3T3T3TMzMzMzMzMzMzMzMzMzMzP///////////+8/P///8///8/MzMw7vLy7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7u7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7y7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7y7szzLvd3d3d3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7u7vDzLvTPdvd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP/////////z//////////////MzLy7uzvDzLzTM7vd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzvMy7zb07vd3d093bu7u93d3d3d3TMzMzMzMzMzMzMzMzMzMzP//////////////8/L///P///MzLy7uzu8y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLy7w7Pbvd3d093bu7u93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLzLy7Pdvd3d0907O7O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////8////////////////zLy7uzvLzLy73d3d3dPd0727O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////zLy7uzvDzLy73d3d3TPd0727293d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////P////8//////zLy7u7vDzLu73d3dPTPdMz27093d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7szzLu73d3dPTPdPd2z3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP///////////8/M/v/////////z7y7u7u7u7sz3d3dPTPdPdMz3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7u7uzsz3d3dPTPd3TPT3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP/////////////P///////////z7y7u7u7uzsz3d3dPTPd3d3d3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP//////8///////////////8z/z7y7u7u7uzsz3d3dPTPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8z/z7y7O7y7uzsz3d3d3TPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7O8y7u7vT3d3d3dPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7w8y7u7vb3d3d3d3d3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////P//////z7y7w8u8u7vb3d3d3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////Py///////zLy7w8u8u7vb3T3T3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////////8///////P//////zMy7w8u8u7vT3TOz3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP///////////////////////zPzMy7w8u8u7vT3TO7093d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8u8u7vdPdO7293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8y7M7vdPT27293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8///////////////MzMy7O8y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////8/L///////////8///MzMy8O7y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP/////////////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////MzMy8u7u7u7vdPb27O93d3TMz3d3d3TM9MzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27O93dPdOz093d3TPdMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dPd27293d3TPdPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dMz27293d3T3TPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7s7vd3dO7093d0727O93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+8/P///////8/MzMy8w7u7u7vd3TOz3d3d0727u93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+7+////////8/MzMw8w7y7u7vd3T3T3d093bO7u93d3T3T3TMzMzMzMzMzMzMzMzMzMzP///////////+8/P///8///8/MzMw7vLy7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7u7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7y7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7y7szzLvd3d3d3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7u7vDzLvTPdvd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP/////////z//////////////MzLy7uzvDzLzTM7vd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzvMy7zb07vd3d093bu7u93d3d3d3TMzMzMzMzMzMzMzMzMzMzP//////////////8/L///P///MzLy7uzu8y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLy7w7Pbvd3d093bu7u93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLzLy7Pdvd3d0907O7O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////8////////////////zLy7uzvLzLy73d3d3dPd0727O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////zLy7uzvDzLy73d3d3TPd0727293d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////P////8//////zLy7u7vDzLu73d3dPTPdMz27093d3d3dMzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7szzLu73d3dPTPdPd2z3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP///////////8/M/v/////////z7y7u7u7u7sz3d3dPTPdPdMz3d3d3d09MzMzMzMzMzMzMzMzMzMzMzP/////////////O7P/////////z7y7u7u7uzsz3d3dPTPd3TPT3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP/////////////P///////////z7y7u7u7uzsz3d3dPTPd3d3d3d3d3d0zMzMzMzMzMzMzMzMzMzMzMzP//////8///////////////8z/z7y7u7u7uzsz3d3dPTPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8z/z7y7O7y7uzsz3d3d3TPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7O8y7u7vT3d3d3dPd3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP/////////////////////////z7y7w8y7u7vb3d3d3d3d3d3d3d3d3T0zMzMzMzMzMzMzMzMzMzMzMzP//////////////////P//////z7y7w8u8u7vb3d3d3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////Py///////zLy7w8u8u7vb3T3T3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////////8///////P//////zMy7w8u8u7vT3TOz3d3d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP///////////////////////zPzMy7w8u8u7vT3TO7093d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8u8u7vdPdO7293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzMy7s8y7M7vdPT27293d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8///////////////MzMy7O8y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP//////8/L///////////8///MzMy8O7y7M7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////8////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP/////////////z/z////////MzMy8u7u7u7vdPb27O93d3d3d3d3d3TMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////MzMy8u7u7u7vdPb27O93d3TMz3d3d3TM9MzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27O93dPdOz093d3TPdMzMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dPd27293d3TPdPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7u7vdPb27293dMz27293d3T3TPTMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy8u7u7s7vd3dO7093d0727O93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+8/P///////8/MzMy8w7u7u7vd3TOz3d3d0727u93d3T3TPTMzMzMzMzMzMzMzMzMzMzP///////////+7+////////8/MzMw8w7y7u7vd3T3T3d093bO7u93d3T3T3TMzMzMzMzMzMzMzMzMzMzP///////////+8/P///8///8/MzMw7vLy7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7u7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMw7y7y7u7vd3d3d3d093bu7u93d3d0z3TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7y7szzLvd3d3d3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP//////////////////////8/MzMy7u7vDzLvTPdvd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP/////////z//////////////MzLy7uzvDzLzTM7vd3d093bu7u93d3d093TMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzvMy7zb07vd3d093bu7u93d3d3d3TMzMzMzMzMzMzMzMzMzMzP//////////////8/L///P///MzLy7uzu8y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////8///////MzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzu7y7zb07vd3d093bu7u93d3d3dPTMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLy7w7Pbvd3d093bu7u93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////////////////////PzLy7uzvLzLy7Pdvd3d0907O7O93d3d3dMzMzMzMzMzMzMzMzMzMzMzP////////8////////////////zLy7uzvLzLy73d3d3dPd0727O93d3d3dMzMzMzMzMzMzMzMzMzMzMzM=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Planet\"\n    },\n    \"IHAx{+JAVkkR7;45OS*f\": {\n        \"data\": \"hwQQABAAAAAAwPz/AAAAAADMu7vM/wAAALyzzNvdDAAAO8O83b3N/7Abw9zMvd2/sBHD3d293buwMcPd3d3du7Azs93d3Lv/OzMz2829vfs7MzPb3f3dCzszM7Pd/dsLOxMxs8vM/wuwGzEzzMz7AAC7yzPDzPsAAAAAvDO7/wAAAADA/P8PAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"Alien\"\n    },\n    \"]/cI@:JS;!+E)%*%^wDC\": {\n        \"namespace\": \"myImages\",\n        \"id\": \"]/cI@:JS;!+E)%*%^wDC\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"NjQwMDEwMDAxMDAwMDQwMDAwMDAwMDAwYmJiYjAwMDAwMDAwYmJiYjMzMzMwYjAwYzBiYzFiMzEzMzMzYmIwMGNjM2IxMTMzMzMxM2IxMDBiYzMzMzMzMzMzMTNiMTAwYmZjYmNjYmMzMzMzYzMwMGJmY2NkY2RkYmIzMzMzMGNiZmJjZGRkZGRkYmIzM2NiYzBkYmRjZGRkZGJkM2NjM2MwZGRkY2RkZGNjZGNjZjNmMGRkZGRjZGRkY2RjY2ZiZjBiZGJiZGRmYmNmY2NmYjAwZGNkZGJkZGRmYmJiZmYwMGMwZGRiZGRiZmRmZjBmMDBmMGJmZmJiYmJiMDAwMDAwZjBiYmZiMGYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiYmJiMDAwMDAwMDBiYmJiMzMzMzBiMDBjMGJjMWIzMTMzMzNiYjAwY2MzYzExMzEzMzEzYjEwMGJjMzMzMzMzMzMxM2IxMDBiZmNiY2NiYzNiMTNjMTAwYmZjY2RiZGRiZDNiYzMwY2JmZGNkZGRkZGRiYjMzY2JjMGRkZGNkZGRkYmQzYmMzYzBkZGRjZGRkY2JkM2NmM2YwZGRkZGNkZGRjZGNjZmJmMGJkYmJmYmRmY2RjY2ZiMDBkY2JkZGRmYmNjYmJmZjAwYzBiZGRiZmRjY2ZmMGYwMDAwZmNiYmJiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYmJiYjAwMDAwMDAwYmJiYjMzMzMwYjAwYzBiYzExMzMzMzMzYmIwMGNjM2MxMTMxMzMzM2IzMDBiYzMzMzMzMzMzMTNiMTAwYmZjYmNjYmMzMzEzYzEwMGJmY2NkY2RkYmIzM2MzMGNiZmJjZGRkZGRkYmIzM2NiYzBkYmRkZGRkZGJkM2NjM2MwY2RkY2RkZGRjZGNjZjNmMGRkZGRjZGRjY2RjY2ZiZjBiZGJiZGRkZGNkY2NmYjAwZGNkZGRkZmJjZmJiZmYwMGJmZGRiZGRiZmRmZjBmMDBmZmNmYmNkZGZkMDAwMDAwMDAwMDAwYmJiYjAwMDAwMDAwYmJiYjMzMzMwYjAwYzBiYzFiMzEzMzMzYmIwMGNjMzMxMTMzMzMxM2IxMDBiYzMzMzMzMzMzMTNiMTAwYmZjYmNjMzMzMzMzYzMwMGJmY2NiY2JiM2IzMzMzMGNiZmNjZGRkZGJkM2IzM2MzYzBkY2RjZGRkZGJkM2NjM2MwZGJkY2RkZGNjZGNjZjNmMGRkZGRjZGRkY2RjY2ZiZjBiZGJiZGRkZGNkY2NmYjAwZGNkZGRkZGRjYmJiZmYwMGZmZGRkZGNjZmJmZjBmZjBiZmZiY2ZiY2RkZmIwMGYwYmJmYjBmYjBkZGZkMDA=\",\n        \"displayName\": \"Animated Alien\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"X4JB-Z#5z{GHg)(9D5!a\":\n            case \"Planet\":return img`\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff\nffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc\nfffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff\nfffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff\nfff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff\nffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff\nf33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff\nff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff\nffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff\nfffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff\nfffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff\nffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff\nfffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nfcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff\nfffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff\nffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff\nffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff\nfffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf\nccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\ncccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\nbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb\nbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb\nbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb\nbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb\nbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb\nbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb\n3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333\n333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb\ncc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc\ncccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc\ncccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc\ncbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc\nbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb\nbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb\ndddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd\ndddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d\ndddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd\nddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd\nddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd\nddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd\nddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd\nd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd\n333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3\n33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d\n33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33\nd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd\nddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d\nb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb\nbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb\nbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb\nb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb\ndddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd\ndddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd\ndddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd\ndd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd\n3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333\n33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333\n`;\n            case \"IHAx{+JAVkkR7;45OS*f\":\n            case \"Alien\":return img`\n. . . . . . . . b b b b . . . . \n. . . . b b b b 3 3 3 3 b . . . \n. c c b b 1 1 3 3 3 3 3 b b . . \nc c b 3 1 1 3 3 3 3 3 1 1 b . . \nc b 3 3 3 3 3 3 3 3 3 1 1 b . . \nf b b c c c c b 3 3 3 3 3 c . . \nf b c c c d d d b b 3 3 3 3 c . \nf b c b d d d d d d b b 3 3 b c \n. c b d c d d d d d d b c 3 3 c \n. c d d c d d d c d d c c c 3 f \n. f d d d d d c d d d c c c b f \n. f d b b b d d b f f c c c b f \n. . c d d d d b d d b f b b f f \n. . . c d d d b b d d f f f f . \n. . . f f b b f b b b b . . . . \n. . . f b b b f f . . . . . . . \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"Animated Alien\":\n            case \"]/cI@:JS;!+E)%*%^wDC\":return [img`\n. . . . . . . . b b b b . . . . \n. . . . b b b b 3 3 3 3 b . . . \n. c c b b 1 1 3 3 3 3 3 b b . . \nc c b 3 1 1 3 3 3 3 3 1 1 b . . \nc b 3 3 3 3 3 3 3 3 3 1 1 b . . \nf b b c c c c b 3 3 3 3 3 c . . \nf b c c c d d d b b 3 3 3 3 c . \nf b c b d d d d d d b b 3 3 b c \n. c b d c d d d d d d b c 3 3 c \n. c d d c d d d c d d c c c 3 f \n. f d d d d d c d d d c c c b f \n. f d b b b d d b f f c c c b f \n. . c d d d d b d d b f b b f f \n. . . c d d d b b d d f f f f . \n. . . f f b b f b b b b . . . . \n. . . f b b b f f . . . . . . . \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . b b b b . . . . \n. . . . b b b b 3 3 3 3 b . . . \n. c c b b 1 1 3 3 3 3 3 b b . . \nc c c 3 1 1 1 3 3 3 3 1 1 b . . \nc b 3 3 3 3 3 3 3 3 3 1 1 b . . \nf b b c c c c b b 3 3 1 1 c . . \nf b c c b d d d d b b 3 3 c c . \nf b c d d d d d d d b b 3 3 b c \n. c d d c d d d d d d b b 3 3 c \n. c d d c d d d c d d b c 3 3 f \n. f d d d d d c d d d c c c b f \n. f d b b b b f f d d c c c b f \n. . c d d b d d b f c c b b f f \n. . . c d b b d d f c c f f f . \n. . . . c f b b b b . . . . . . \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . b b b b . . . . \n. . . . b b b b 3 3 3 3 b . . . \n. c c b 1 1 3 3 3 3 3 3 b b . . \nc c c 3 1 1 1 3 3 3 3 3 3 b . . \nc b 3 3 3 3 3 3 3 3 3 1 1 b . . \nf b b c c c c b 3 3 3 1 1 c . . \nf b c c c d d d b b 3 3 3 c c . \nf b c b d d d d d d b b 3 3 b c \n. c b d d d d d d d d b c 3 3 c \n. c d c c d d d d d d c c c 3 f \n. f d d d d d c c d d c c c b f \n. f d b b b d d d d d c c c b f \n. . c d d d d d b f f c b b f f \n. . f b d d d b b d d f f f f . \n. . f f f c c b d d d f . . . . \n`, img`\n. . . . . . . . b b b b . . . . \n. . . . b b b b 3 3 3 3 b . . . \n. c c b b 1 1 3 3 3 3 3 b b . . \nc c 3 3 1 1 3 3 3 3 3 1 1 b . . \nc b 3 3 3 3 3 3 3 3 3 1 1 b . . \nf b b c c c 3 3 3 3 3 3 3 c . . \nf b c c c b b b b 3 3 3 3 3 c . \nf b c c d d d d d b b 3 3 3 3 c \n. c c d c d d d d d d b c 3 3 c \n. c b d c d d d c d d c c c 3 f \n. f d d d d d c d d d c c c b f \n. f d b b b d d d d d c c c b f \n. . c d d d d d d d b c b b f f \n. . f f d d d d c c b f f f f . \n. f f b b f f c c b d d b f . . \n. f b b b f f . . b d d d f . . \n`];\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"uJ(:CqE3w:o.{e=fXtOg\">projectile</variable><variable id=\"tT|KB|]JbeNqAVg)|lp:\">myEnemy</variable><variable id=\"UbB[reC]PzdRSEd2:e7,\">extraLife</variable><variable id=\"N?,8OgWY)WXFfk150o6;\">mySprite</variable><variable type=\"KIND_SpriteKind\" id=\"#5=}[4Hvd2G.]kCB^jz2\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"i55NkF}%=?YTbnqQ9#c(\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"F9w{dScwQG8RQuK)_pjP\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"jg:1_C3X7E9~JoSmb7mN\">Enemy</variable></variables><block type=\"forever\" x=\"490\" y=\"-90\"><statement name=\"HANDLER\"><block type=\"variables_set\"><field name=\"VAR\" id=\"uJ(:CqE3w:o.{e=fXtOg\">projectile</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreateprojectilefromside\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`Alien`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.IHAx{+JAVkkR7;45OS*f\"}}</data></shadow></value><value name=\"vx\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">-90</field></shadow></value><value name=\"vy\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">0</field></shadow></value></block></value><next><block type=\"Sprite_blockCombine_set\"><field name=\"property\">Sprite.y@set</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"uJ(:CqE3w:o.{e=fXtOg\">projectile</field></block></value><value name=\"value\"><block type=\"device_random\"><value name=\"min\"><shadow type=\"math_number\"><field name=\"NUM\">40</field></shadow></value><value name=\"limit\"><shadow type=\"math_number\"><field name=\"NUM\">115</field></shadow></value></block></value><next><block type=\"run_image_animation\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"uJ(:CqE3w:o.{e=fXtOg\">projectile</field></block></value><value name=\"frames\"><block type=\"animation_editor\"><field name=\"frames\">assets.animation`Animated Alien`</field><data>{\"commentRefs\":[],\"fieldData\":{\"frames\":\"myImages.]/cI@:JS;!+E)%*%^wDC\"}}</data></block></value><value name=\"frameInterval\"><shadow type=\"timePicker\"><field name=\"ms\">100</field></shadow></value><value name=\"loop\"><shadow type=\"toggleOnOff\"><field name=\"on\">true</field></shadow></value></block></next></block></next></block></statement></block><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"gamesetbackgroundimage\"><value name=\"img\"><shadow type=\"background_image_picker\"><field name=\"img\">assets.image`Planet`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.X4JB-Z#5z{GHg)(9D5!a\"}}</data></shadow></value><next><block type=\"scroller_scrollBackgroundWithSpeed\"><value name=\"vx\"><shadow type=\"math_number\"><field name=\"NUM\">-50</field></shadow></value><value name=\"vy\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow></value></block></next></block></statement></block><block type=\"controls_repeat_ext\" disabled=\"true\" x=\"30\" y=\"290\"><value name=\"TIMES\"><shadow type=\"math_whole_number\" disabled=\"true\"><field name=\"NUM\">100</field></shadow></value><statement name=\"DO\"><block type=\"variables_set\" disabled=\"true\"><field name=\"VAR\" id=\"uJ(:CqE3w:o.{e=fXtOg\">projectile</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreateprojectilefromside\" disabled=\"true\"><value name=\"img\"><shadow type=\"screen_image_picker\" disabled=\"true\"><field name=\"img\">assets.image`Alien`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.IHAx{+JAVkkR7;45OS*f\"}}</data></shadow></value><value name=\"vx\"><shadow type=\"spriteSpeedPicker\" disabled=\"true\"><field name=\"speed\">-90</field></shadow></value><value name=\"vy\"><shadow type=\"spriteSpeedPicker\" disabled=\"true\"><field name=\"speed\">0</field></shadow></value></block></value><next><block type=\"Sprite_blockCombine_set\" disabled=\"true\"><field name=\"property\">Sprite.y@set</field><value name=\"mySprite\"><block type=\"variables_get\" disabled=\"true\"><field name=\"VAR\" id=\"uJ(:CqE3w:o.{e=fXtOg\">projectile</field></block></value><value name=\"value\"><block type=\"device_random\" disabled=\"true\"><value name=\"min\"><shadow type=\"math_number\" disabled=\"true\"><field name=\"NUM\">30</field></shadow></value><value name=\"limit\"><shadow type=\"math_number\" disabled=\"true\"><field name=\"NUM\">115</field></shadow></value></block></value><next><block type=\"run_image_animation\" disabled=\"true\"><value name=\"sprite\"><block type=\"variables_get\" disabled=\"true\"><field name=\"VAR\" id=\"uJ(:CqE3w:o.{e=fXtOg\">projectile</field></block></value><value name=\"frames\"><block type=\"animation_editor\" disabled=\"true\"><field name=\"frames\">assets.animation`Animated Alien`</field><data>{\"commentRefs\":[],\"fieldData\":{\"frames\":\"myImages.]/cI@:JS;!+E)%*%^wDC\"}}</data></block></value><value name=\"frameInterval\"><shadow type=\"timePicker\" disabled=\"true\"><field name=\"ms\">100</field></shadow></value><value name=\"loop\"><shadow type=\"toggleOnOff\" disabled=\"true\"><field name=\"on\">true</field></shadow></value><next><block type=\"device_pause\" disabled=\"true\"><value name=\"pause\"><shadow type=\"timePicker\"><field name=\"ms\">100</field></shadow><block type=\"device_random\" disabled=\"true\"><value name=\"min\"><shadow type=\"math_number\" disabled=\"true\"><field name=\"NUM\">25</field></shadow></value><value name=\"limit\"><shadow type=\"math_number\" disabled=\"true\"><field name=\"NUM\">75</field></shadow></value></block></value></block></next></block></next></block></next></block></statement></block><block type=\"spritesoverlap\" x=\"1633\" y=\"678\"><value name=\"HANDLER_DRAG_PARAM_sprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">sprite</field></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value><value name=\"HANDLER_DRAG_PARAM_otherSprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">otherSprite</field></shadow></value><value name=\"otherKind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Enemy</field></shadow></value><statement name=\"HANDLER\"><block type=\"spritedestroy\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"true\"></mutation><field name=\"effect\">effects.fire</field><value name=\"sprite\"><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"/><field name=\"VALUE\">otherSprite</field></block></value><value name=\"duration\"><shadow type=\"timePicker\"><field name=\"ms\">200</field></shadow></value><next><block type=\"hudChangeLifeBy\"><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">-1</field></shadow></value></block></next></block></statement></block></xml>",
  "main.ts": "sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {\n    otherSprite.destroy()\n    info.changeLifeBy(-1)\n})\nlet projectile: Sprite = null\nscene.setBackgroundImage(assets.image`Planet`)\nscroller.scrollBackgroundWithSpeed(-50, 0)\nforever(function () {\n    projectile = sprites.createProjectileFromSide(assets.image`Alien`, -90, 0)\n    projectile.y = randint(40, 115)\n    animation.runImageAnimation(\n    projectile,\n    assets.animation`Animated Alien`,\n    100,\n    true\n    )\n})\n",
  "pxt.json": "{\n    \"name\": \"Alien Invasion\",\n    \"version\": \"0.0.1\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"arcade-background-scroll\": \"github:microsoft/arcade-background-scroll#926e12eefffd09d453c7cde73f8d6ebd0e666d9d\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"targetVersions\": {\n        \"target\": \"1.4.41\",\n        \"targetId\": \"arcade\"\n    },\n    \"supportedTargets\": [\n        \"arcade\"\n    ],\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "test.ts": "// tests go here; this will not be compiled when this package is used as an extension.\n"
}
```

