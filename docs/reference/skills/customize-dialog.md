## Customizing a dialog

Using the ``||game:show long text||`` block will display a text on the screen in a framed _dialog_. The text, dialog frame, and cursor are shown using default colors. If you want to theme these elements to match your game colors, you can choose your own colors and images for them.

### Dialogs

A dialog is a framed box containing a text message that covers part of the screen when it's displayed. A dialog is created with the ``||game:show long text||`` block. The text, dialog frame, and cursor have default colors and images set for them.

```block
game.showLongText("This is a text dialog with default colors, frame, and cursor.", DialogLayout.Center)
```

#### Dialog Elements

* The message displayed in the dialog is what you set for the text parameter for ``||game:show long text||``.
* The dialog frame is an image used for the background shown behind the text message.
* A dialog cursor is a symbol, or icon, that tells you to press a button to make the dialog go away (dismiss it) and let your game continue.

```sim
game.showLongText("This is a text dialog with default colors, frame, and cursor.", DialogLayout.Center)
```

### Change the text color

A custom color to use for displaying the text in a dialog message is set with the ``||game:set dialog text color||`` block.

```blocks
game.setDialogTextColor(2)
game.showLongText("Let's use red for the dialog text color.", DialogLayout.Top)
```

### Change the dialog frame

The dialog frame is a background image that maps what is displayed behind the dialog's message text. Usually, the image has a border color on its edge and solid color or pattern for the rest of the background. If the frame image is smaller than the size of the dialog shown, the image is expanded to fill the area for the dialog.

```blocks
game.setDialogFrame(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `)
game.showLongText("Like my dialog border and background?", DialogLayout.Center)
```

### Change the dialog cursor

The dialog cursor is a small symbol shown in the bottom-right of the dialog frame. It provides a hint or indication to press a button to dismiss the dialog. You can draw your own cursor image and set it for use in your dialogs with ``||game:set dialog cursor||``.

```blocks
game.setDialogCursor(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f 5 5 5 5 5 f f f f f 
    f f f f f 5 5 f f f 5 5 f f f f 
    f f f f f 5 5 f f f 5 5 f f f f 
    f f f f f 5 f f f f f 5 f f f f 
    f f f f 5 5 f f f f f 5 5 f f f 
    f f f f 5 5 f f f f f 5 5 f f f 
    f f f f 5 5 5 5 5 5 5 5 5 f f f 
    f f f f 5 5 5 5 5 5 5 5 5 f f f 
    f f f f 5 f f f f f f f 5 f f f 
    f f f 5 5 f f f f f f f 5 5 f f 
    f f f 5 5 f f f f f f f 5 5 f f 
    f f f 5 f f f f f f f f f 5 f f 
    f f 5 5 f f f f f f f f f 5 5 f 
    f f 5 f f f f f f f f f f f 5 f 
    f f f f f f f f f f f f f f f f 
    `)
game.showLongText("Use my own dialog cursor image.", DialogLayout.Right)
```

### Example

The following example replaces all three of the default dialog elements with custom ones.

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Once upon a time, dialogs only had default colors. Well, let's change that.", DialogLayout.Bottom)
})
game.setDialogTextColor(1)
game.setDialogCursor(img`
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . 6 6 7 6 6 6 6 6 6 6 6 7 6 6 . 
    6 6 6 6 7 6 6 6 6 6 6 7 6 6 6 6 
    6 6 6 6 6 7 6 6 6 6 7 6 6 6 6 6 
    6 6 6 6 6 6 7 6 6 7 6 6 6 6 6 6 
    6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
    6 6 6 6 6 6 7 6 6 7 6 6 6 6 6 6 
    6 6 6 6 6 7 6 6 6 6 7 6 6 6 6 6 
    6 6 6 6 7 6 6 6 6 6 6 7 6 6 6 6 
    . 6 6 7 6 6 6 6 6 6 6 6 7 6 6 . 
    . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    `)
game.setDialogFrame(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 4 2 4 2 4 2 4 2 4 2 4 2 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 2 4 2 4 2 4 2 4 2 4 2 4 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `)
```
