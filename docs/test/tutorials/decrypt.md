# Decrypt the Coordinates
### @explicitHints true


## Decrypt the Coordinates @showdialog

This tutorial will walk you through the decryption of a secret code.

You will need the resulting message to locate Agent Whiskers, so write it down if you think you'll have a hard time remembering.

![Sample code](https://makecode.com/api/_EbdVzJJPa7m0/thumb "Codes change each time." )






## {2. Getting Started}

**Agent:** 
To get started, you will need to build a decryptor and decypher the encoded transmission. 

---

- :lock: Find <br/>
``||decrypt:initiate protocol||`` </br>
in the ``||decrypt:Decrypt||`` category.

- :mouse pointer: Drag the <br/>
``||decrypt:initiate protocol||`` <br/>
block out of the toolbox and snap it into the 
<br/>``||loops(noclick):on start||`` 
<br/>container that's already in your workspace.

- :arrow right: When you're ready to move to another step, click the **Next** button to continue.




#### ~ tutorialhint

```blocks
//@highlight
decrypt.initiate_protocol()

```



## {3. Try Your Code}


**Look at the game window.**

- :binoculars: Look at your project in the game window to see what's happening.

Press the (A) button or the [space bar] to clear the messages and see the code.


---

We will create a place to enter our guess in the next step.

![Find the game window in the lower right](/static/courses/ffd/decrypt/game_window.png "The game window is in the lower left." )





## {4. Decoding}

Next, add a block that will allow you to attempt to decode the message.

---

- :lock: Drag <br/>
``||decrypt:attempt decode||`` </br>
out of the ``||decrypt:Decrypt||`` category and snap it into **the end of the** 
<br/>``||loops(noclick):on start||`` 
<br/>container that's already in your workspace.

---

After the sequence runs, you should now get a field where you can attempt to break the encoded message.


#### ~ tutorialhint

```blocks

decrypt.initiate_protocol()
//@highlight
decrypt.attempt_decode()

```



## {5. Num Correct}

Now we're getting somewhere!

Unfortunately, we don't have any way to see the result of our attempt. 
Let's add a block that shows us how many numbers were correct. 

---

- :lock: Drag <br/>
``||decrypt:show number correct||`` </br>
out of the ``||decrypt:Decrypt||`` category and snap it into **the end of the** 
<br/>``||loops(noclick):on start||`` 
<br/>container that's already in your workspace.

---

After your guess, you should now see hints that guide you closer to the correct number sequence, 
as well as showing the overall number of correct digits.



#### ~ tutorialhint

```blocks

decrypt.initiate_protocol()
decrypt.attempt_decode()
//@highlight
decrypt.showcorrectdigits()

```




## {6. Second Look}

The odds of getting the code correct the first time are low. 

Let's add blocks to run the sequence again when you press the left button. 

---

- :game: From the <br/>
``||controller:Controller||``<br/>
category, drag <br/>
``||controller:on [A] button [pressed]||`` </br>
into **an empty area** of your workspace.


- :mouse pointer: Click the ``||controller(noclick):A||`` field and change it to 
``||controller(noclick):left||`` using the dropdown menu.


- :lock: Drag <br/>
``||decrypt:display encrypted code||`` </br>
into **the empty** 
<br/>``||controller:on [left] button [pressed]||`` 
<br/>container that's now in your workspace.

---

After your first guess, you should now be able to click the left button on your 
d-pad or keyboard to see the encrypted symbols again.





#### ~ tutorialhint

```blocks

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    decrypt.displayCodes()
})

```




## {8. Guess Again}

Now that we've had a second look, we want another chance to decode. 

Let's add blocks that bring up the number entry fields when the right button is pressed.

---

- :game: From the <br/>
``||controller:Controller||``<br/>
category, drag another <br/>
``||controller:on [A] button [pressed]||`` </br>
container into **an empty area** of your workspace.


- :mouse pointer: Click the ``||controller(noclick):A||`` field and change it to 
``||controller(noclick):right||`` using the dropdown menu.


- :lock: Drag <br/>
``||decrypt:attempt decode||`` </br>
into **the empty** 
<br/>``||controller:on [right] button [pressed]||`` 
<br/>container that's now in your workspace.

---

After your first guess, you should now be able to click the right button on your 
d-pad or keyboard to make the number fields appear again.





#### ~ tutorialhint

```blocks
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    decrypt.attempt_decode()
})

```





## {9. Last Step}

Each time additional guesses are made, we need to show the number of correct digits.

---

- :lock: Drag <br/>
``||decrypt:show number correct||`` </br>
into **the end of** the 
<br/>``||controller:on [right] button [pressed]||`` 
<br/>already in your workspace.

---

You should now have all of the code you need to decrypt your message and receive your final coordinates.




#### ~ tutorialhint

```blocks

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    decrypt.attempt_decode()
    //@highlight
    decrypt.showcorrectdigits()
})

```




## Well done, Agent @showdialog

Great job.  Here are your final instructions:

1. Be sure to play through your code until you receive the necessary coordinates
2. Once you have the final code, write it down so you don't forget
3. Check your map to discover the country where Agent Whiskers is stationed
4. Submit the name of that country to The Bureau so we can extract Agent Whiskers safely


[![Submit to Bureau](static/courses/ffd/decrypt/submit.png "Submit to Bureau" )](https://arcade.makecode.com/S28387-13937-34961-92594)



## {11. Documents}

If you don't have any paper handouts, you may find these clues helpful:

---


~hint Classified Document 📁

---


Click the image to open the folder in a new tab.

[![Classified Folder](static/courses/ffd/decrypt/top_secret.png)](https://1drv.ms/i/c/416406873cb120ab/Eeacs6cIIx5Ds9hcucKZZh8BJcnk9sBtvM6sU5Mp-5FrtA?e=JMblge)


hint~



~hint World Map 🗺️

---

Click the image to open the map in a new tab.

[![Grid Map](static/courses/ffd/decrypt/grid_map.png)](https://1drv.ms/i/c/416406873cb120ab/EU0g-wk7t6xIjgqozmLqxVwBdVrtKWy1MmQ5U1ZHEYgZ7A?e=ULaUlr)


hint~





```package
decryptor_imgs=github:kiki-lee/decryptor_imgs
arcade-text=github:microsoft/arcade-text#v1.3.0
```

```ghost
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    decrypt.displayCodes()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    decrypt.attempt_decode()
    decrypt.showcorrectdigits()
})
decrypt.initiate_protocol()
decrypt.attempt_decode()
decrypt.showcorrectdigits()
```



```customts

//% weight=100 color=#2d077a icon="\uf023"
namespace decrypt {

    let decodeAttempt = 0
    let secretCodeNumber = 0
    let digitArray: Image[] = []
    let secretCode: number[] = []
    let correctDigits = 0
    let textSprite: TextSprite = null
    let mySprite: Sprite = null



    function missionsuccess() {
        game.showLongText("You have cracked the code.", DialogLayout.Center)
        game.showLongText("The coordinates you need are:", DialogLayout.Center)
        quickDisplaySprite(textsprite.create("D", 0, 1).image)
        quickDisplaySprite(textsprite.create("4", 0, 1).image)
        game.setGameOverScoringType(game.ScoringType.None)
        game.setGameOverMessage(true, "D4")
        game.setGameOverEffect(true, effects.none)
        game.setGameOverPlayable(true, music.createSong(hex`00780004080200`), false)
        game.gameOver(true)
    }
    function missionfail() {
        game.gameOver(false)
    }

    function quickDisplaySprite(myImage: Image) {
        mySprite = sprites.create(myImage, SpriteKind.Player)
        mySprite.setScale(4, ScaleAnchor.Middle)
        pause(500)
        sprites.destroy(mySprite, effects.disintegrate, 500)
        pause(500)
    }

    /**
     * Shows the number of digits you have correct
     */
    //% blockId=showCorrect 
    //% block="show number correct"
    export function showcorrectdigits() {
        textSprite = textsprite.create("" + correctDigits + " digits correct", 0, 7)
        textSprite.x = 80
        pause(2000)
        sprites.destroy(textSprite)
        pause(1000)
    }

    /**
     * Initializes the decryption
     */
    //% blockId=initiate weight=200
    //% block="initiate protocol"
    export function initiate_protocol() {
        secretCode = [
            randint(0, 9),
            randint(0, 9),
            randint(0, 9),
            randint(0, 9)
        ]
        digitArray = [
            decryptor_imgs.oscar,
            decryptor_imgs.alpha,
            decryptor_imgs.bravo,
            decryptor_imgs.charlie,
            decryptor_imgs.delta,
            decryptor_imgs.echo,
            decryptor_imgs.foxtrot,
            decryptor_imgs.golf,
            decryptor_imgs.hotel,
            decryptor_imgs.india
        ]
        secretCodeNumber = 10 * secretCode[2] + secretCode[3] + (100 * secretCode[1] + 1000 * secretCode[0])
        // Title screen effect to simulate accessing classified data
        game.setDialogTextColor(7)
        game.setDialogFrame(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `)
        game.showLongText("ACCESSING SECURE FILES...", DialogLayout.Center)
        game.showLongText("DECRYPTION PROTOCOL INITIATED", DialogLayout.Center)
        displayCodes()
    }

    /**
     * Allows you to enter your decoding guess
     */
    //% blockId=attemptDecode 
    //% block="attempt decode"
    export function attempt_decode() {
        decodeAttempt = game.askForNumber("Enter decrypted code:", 4, false)
        correctDigits = 0
        for (let index = 0; index <= 3; index++) {
            if (secretCode[index] == parseFloat(convertToText(decodeAttempt).charAt(index))) {
                quickDisplaySprite(decryptor_imgs.check)
                correctDigits += 1
                if (correctDigits == 4) {
                    missionsuccess()
                }
            } else if (secretCode[index] < parseFloat(convertToText(decodeAttempt).charAt(index))) {
                quickDisplaySprite(decryptor_imgs.down)
            } else {
                quickDisplaySprite(decryptor_imgs.up)
            }
        }
    }

    /**
     * Flashes the encoded message again
     */
    //% blockId=displayCodes 
    //% block="display encrypted code"
    export function displayCodes() {
        for (let index2 = 0; index2 <= 3; index2++) {
            quickDisplaySprite(digitArray[secretCode[index2]])
        }
    }
}



```