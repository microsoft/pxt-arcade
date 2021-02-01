## Using text in a game

At different points in a game you need give messages or instructions to the player. You can display text messages in your game in several ways. 

### Splash messages

A splash message is used as a title screen to introduce the game. A splash screen can optionally have a second subtile line too. Once the player is ready, they press the **A** button to start the game.

```blocks
game.splash("My Screen Message")
```

The subtile line is added by expanding the block by pressing **(+)** and entering the second line of text.

```blocks
game.splash("Star Quest", "Journey to new and distant galaxies!")
```

### Show longer text messages

If you need to pause the flow of a game and display some information to the player, you use a ``||game:show long text||`` block. This will display a text string that is longer than a splash message. You can choose where on the screen you want the message to appear, in the corner, center, or show it on the entire screen.

The positions where you can display the text are:

* bottom
* left
* right
* top
* center
* full screen

If the message is too long for the display area, pressing the **A** button will scroll in the remaining text. After viewing the message, pressing button **A** will close the text display and continue with gameplay.

```blocks
game.showLongText("Did you see the UFO enter land to your left? Turn on your shields and arm the phasors", DialogLayout.Bottom)
```

### Example

This example combines the two text display blocks. A splash screen is displayed and then a long text message is shown in each screen position. Press button **A** to advance to each "next" message.

```blocks
game.splash("Press (A) to begin testing text messages")
game.showLongText("This is text is at the bottom. Press the (A) button for the next message", DialogLayout.Bottom)
game.showLongText("This is text is at the left. Press the (A) button for the next message", DialogLayout.Left)
game.showLongText("This is text is at the right. Press the (A) button for the next message", DialogLayout.Right)
game.showLongText("This is text is at the top. Press the (A) button for the next message", DialogLayout.Top)
game.showLongText("This is text is in the center. Press the (A) button for the next message", DialogLayout.Center)
game.showLongText("This is text is full screen. Press the (A) button to end messages", DialogLayout.Full)
```
