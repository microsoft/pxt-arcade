# Sparks Flying (Jr.)
### @explicitHints true
### @flyoutOnly true


## Sparks Flying  @showdialog


Let's make a game!

![Campfire Sparks](/static/skillmap/sparks/sparks1.gif "Let's create sparks")




## {2. Your First Block}

**Add your first block**


```block
scene.setBG(img`.`)
```

---


![Set the background with a block from the scene category](/static/skillmap/sparks/bg.gif "Let's add a background")


#### ~ tutorialhint

```blocks
//@highlight
scene.setBG(img`.`)
```



## {3. Choose the cave}

**Choose a cave**

![Choose your favorite cave](/static/skillmap/sparks/cave.gif "There are different caves to choose from")



#### ~ tutorialhint

```blocks
//@highlight
scene.setBG(sparks.background)
```



## {4. Check Your Screen!}


**Look at the game window!**

![Look for the game window in the lower right](/static/skillmap/sparks/game-jr.png "Click the mini game window to pop open the bigger game window.")

You should see a cave background.





## {5. Add the Sprite}


**Add kindling!**

```block
sparksjr.addFire()
```

---

![Add a pile of kindling](/static/skillmap/sparks/kindling.gif "Let's add a kindling sprite")


#### ~ tutorialhint

```blocks
scene.setBG(sparks.background)
//@highlight
sparksjr.addFire()
```




## {6. Get Clicking}


**Click for Sparks**


```blocks
    sparksjr.onB(function () {
        sparksjr.changeScoreOverride(1)
    })
```

---

![Add a pile of kindling](/static/skillmap/sparks/sparking.gif "Let's add a kindling sprite")


#### ~ tutorialhint

```blocks
//@highlight
    sparksjr.onB(function () {
        sparksjr.changeScoreOverride(1)
    })
```





## {7. Play Again!}

**Play your game**

Click the (B) button as fast as you can!

Do you see the sparks?


---

![Add a pile of kindling](/static/skillmap/sparks/playing.gif "Let's add a kindling sprite")






## {8. Add a Win}

**Add a way to win!**

```blocks
    sparksjr.onScore(30, function () {
        sparksjr.fireWin()
    })
```


---

![Add a pile of kindling](/static/skillmap/sparks/win.gif "Let's add a kindling sprite")


#### ~ tutorialhint

```blocks
//@highlight
sparksjr.onScore(30, function () {
    sparksjr.fireWin()
})
```




## {9. Play Another Time!}

**Play until you win!**

Click the (B) button until you win.


---

![Add a pile of kindling](/static/skillmap/sparks/play-win.gif "Let's add a kindling sprite")




## {10. Add the Time}


**Add a timer!**

```block
stopwatch.stopJr()
```

---

![Add a pile of kindling](/static/skillmap/sparks/timer.gif "Let's add a kindling sprite")


#### ~ tutorialhint

```blocks
scene.setBG(sparks.background)
sparksjr.addFire()
//@highlight
stopwatch.stopJr()

```





## {11. Yet Another Time!}

**How long does it take you to win?**

Your final time is your score!


---

![Add a pile of kindling](/static/skillmap/sparks/play-again.gif "Let's add a kindling sprite")





## {12. Make it Harder}


**Make it harder!**

This will take points away every second!

```blocks
    stopwatch.onUpdateInterval3(1, function () {
        sparksjr.changeScoreOverride(-1)
    })
```

---

![Add a pile of kindling](/static/skillmap/sparks/wind.gif "Let's add a kindling sprite")


#### ~ tutorialhint

```blocks

//@highlight
    stopwatch.onUpdateInterval3(1, function () {
        sparksjr.changeScoreOverride(-1)
    })

```





## {13. Yet Another Other Time!}

**Does it take longer to win now?**

---

![Add a pile of kindling](/static/skillmap/sparks/harder.gif "Let's add a kindling sprite")




## {14. Sometimes You Lose}


**Add a way to lose!**


```blocks
    sparksjr.onScore2(-5, function () {
        sparksjr.fireLoss()
    })
```

---

![Add a pile of kindling](/static/skillmap/sparks/lose.gif "Let's add a kindling sprite")


#### ~ tutorialhint

```blocks

//@highlight
    sparksjr.onScore2(-5, function () {
        sparksjr.fireLoss()
    })

```




## {15. Yet Another Other Time!}

**Let the sparks run out**

You should lose when 🔥 gets to -5.


---

![Add a pile of kindling](/static/skillmap/sparks/final.gif "Let's add a kindling sprite")






## {16. Play!}

**Play your finished game!**

What is your fastest time?


---

![Add a pile of kindling](/static/skillmap/sparks/play-win.gif "Let's add a kindling sprite")






## {17. Finale}

**🔥 Way to Go 🔥 **

You made an Arcade game!

---


When you're ready, click **Done** to finish this tutorial and share what you made.



```blockconfig.global
    sparksjr.changeScoreOverride(1)
    sparksjr.onB(function () {
        sparksjr.changeScoreOverride(1)
    })
    sparksjr.onScore(30, function () {
        sparksjr.fireWin()
    })
    stopwatch.onUpdateInterval3(1, function () {
        sparksjr.changeScoreOverride(-1)
    })
    sparksjr.onScore2(-5, function () {
        sparksjr.fireLoss()
    })
```


```ghost
sparksjr.onB(function () {
    sparksjr.changeScoreOverride(1)
})
sparksjr.onScore(30, function () {
    sparksjr.fireWin()
})
sparksjr.onScore2(-5, function () {
    sparksjr.fireLoss()
})
scene.setBG(sparks.background1)
sparksjr.addFire()
stopwatch.stopJr()
stopwatch.onUpdateInterval3(1, function () {
    sparksjr.changeScoreOverride(-1)
})

```




```package
sparksjr=github:kiki-lee/sparksjr#v0.1.2
sparks=github:kiki-lee/sparks#v0.1.1
```

