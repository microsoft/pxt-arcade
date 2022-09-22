# Makey Makey

Can you use your [Makey Makeys](https://makeymakey.com/) to control Arcade games? Yes! Yes! Yes!

![A banana used to play a Arcade game with Makey Makey](/static/hardware/makey-makey/hands.jpg)

The Makey Makey keys just need remapping to match the Arcade [controller](https://arcade.makecode.com/reference/controller) keys.
Once remapped, you can use all the awesomeness of Makey Makey to build fun controllers for your games (for up to 4 players!). 

## Remapping your Makey Makey

There are two ways to remap your Makey Makey keys. The easiest way is to use the [Makey Makey Keymapping](https://arcade.makecode.com/pkg/joylabz/makeymakey-makecode-arcade-extension) extension. Simply go to the **Settings** menu (click on the gearwheel at the top of the screen) and choose **Extensions**. Choose  the **Makey Makey Keymappings** extension from the list. This will add the keymapping blocks to the Toolbox. You can then set the keymaps in your program code.

```block
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.ONE,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP
)
```

The other way is to follow the hardware remapping process:

1. Go to https://makeymakey.com/pages/remap to start the remapping process.
2. Change the keys so that they match the ones in the following image:

![Makey Makey remapping](/static/hardware/makey-makey/remap.png)

## Playing your games

You can play your Arcade games right in the editor or by simply clicking **Share** and playing them from the shared page. **Make sure to set focus to the game area on the screen so that it receives the keyboard commands**.

Have fun!

```package
Makey Makey Keymappings=github:joylabz/makeymakey-makecode-arcade-extension
```
