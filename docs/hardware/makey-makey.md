# Makey Makey

Can you use your [Makey Makeys](https://makeymakey.com/) to control Arcade games? Yes! Yes! Yes!

![A banana used to play a Arcade game with Makey Makey](/static/hardware/makey-makey/hands.jpg)

The Makey Makey keys just need remapping to match the Arcade [controller](https://arcade.makecode.com/reference/controller) keys.
Once remapped, you can use all the awesomeness of Makey Makey to build fun controllers for your games (for up to 4 players!). 

## Keymapping the Makey Makey

Include the [Makey Makey Keymapping](https://arcade.makecode.com/pkg/joylabz/makeymakey-makecode-arcade-extension) extension in your project to set the controller keys for the Makey Makey. Simply go to the **Settings** menu (click on the gearwheel at the top of the screen) and choose **Extensions**. Choose  the **Makey Makey Keymappings** extension from the list. This will add the keymapping blocks to the Toolbox. Then, add this code to your ``||loops:on start||`` block:

```blocks
MakeyMakey.setMakeyMakeyDefaults()
```

If you want to change the keymaps to something other than the defaults, set them as you like:

```blocks
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

## Playing your games

You can play your Arcade games right in the editor or by simply clicking **Share** and playing them from the shared page. **Make sure to set focus to the game area on the screen so that it receives the keyboard commands**.


Have fun!

```package
Makey Makey Keymappings=github:joylabz/makeymakey-makecode-arcade-extension
```
