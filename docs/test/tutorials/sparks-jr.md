# Sparks Flying (Jr.)
### @explicitHints true


## prehistoric  @showdialog


Let's make a game!

![Campfire Sparks](/static/skillmap/sparks/sparks1.gif "Let's create sparks")




## {2. Your First Block}

**Add your first block**

![Set the background with a block from the scene category](/static/skillmap/sparks/bg.gif "Let's add a background")


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(img`.`)
```



## {3. Choose the cave}

**Choose a cave**

![Choose your favorite cave](/static/skillmap/sparks/cave.gif "There are different caves to choose from")



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sparks.background)
```



## {4. Check Your Screen!}


**Look at the game window!**

![Look for the game window in the lower right](/static/skillmap/sparks/game.png "Click the mini game window to pop open the bigger game window.")

You should see a cave background.





## {5. Add the Sprite}


**Add kindling!**

![Add a pile of kindling](/static/skillmap/sparks/kindling.gif "Let's add a kindling sprite")


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sparks.background)
//@highlight
sparksjr.addFire(img`.`)
```



## {6. Choose the kindling}

**Choose the kindling pile from the gallery**
![Choose the biggest kindling pile](/static/skillmap/sparks/kindling1.gif "Let's add a kindling sprite")



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sparks.background)
//@highlight
sparksjr.addFire(sparks.pile1)
```




## {8. Play!}

- :binoculars: Take a look at what you made!

How many points can you get in twenty seconds?




## {9. Finale}

**🪵 Way to Go 🪵**

You have a clicker game!


When you're ready, click **Done** to finish this tutorial and share your game.


```blockconfig.global
    sparksjr.changeScoreOverride(1)
```

```ghost
sparksjr.onB(function () {
    sparksjr.changeScoreOverride(1)
})
sparksjr.onScore(30, function () {
    sparksjr.fireWin()
})
sparksjr.onScore(-5, function () {
    sparksjr.fireLoss()
})
scene.setBackgroundImage(sparks.background1)
sparksjr.addFire(sparks.pile1)
game.onUpdateInterval(1000, function () {
    sparksjr.changeScoreOverride(-1)
})

```




```package
arcade-carnival=github:microsoft/arcade-carnival
arcade-storytelling=github:microsoft/arcade-storytelling
arcade-text=github:microsoft/arcade-text
sparks=github:kiki-lee/sparks#v0.0.9
sparksjr=github:kiki-lee/sparksjr#v0.0.2
```

