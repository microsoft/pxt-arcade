# Kiosk

To allow users to showcase their games in a fun and unique way, the Kiosk is added to Makecode Arcade. The Kiosk is an interface where a list of games is displayed in a carousel, letting a user scroll through what's currently highlighted to play. Hopefully, this will excite users to want to upload their games.  

## Getting started 

The default Kiosk contains an initial set some of our most popular games from Arcade. This page is located at https://arcade.makecode.com/kiosk.

![Starting screen](/static/hardware/kiosk/select-a-game.png)

## Clearing the Kiosk

To have students start with an empty (clean) Kiosk, so that they won't be tempted to play random games, you can add the clean flag to the url:

https://arcade.makecode.com/kiosk?clean=1

If there are no games uploaded yet, your kiosk will look like the following:

![No games uploaded yet](/static/hardware/kiosk/no-uploaded-games.png)

If you have only uploaded one game, you will see three copies of that game. This gives the illusion that you can move to the next or previous game even though it's the same one.

![Just one uploaded game](/static/hardware/kiosk/single-uploaded-game.png)

When you upload more games, you will see them in the list as you scroll through.

![Multiple uploaded games](/static/hardware/kiosk/multiple-uploaded-games.png)

## Locking the Kiosk

If you are just looking to put games on display and not to edit the game list already in the kiosk, there is a **lock** flag that can be added to the url. This makes the **Add your game** button disappear. https://arcade.makecode.com/kiosk?lock=1 

![Locked kiosk](/static/hardware/kiosk/locked-state.png)

You can put your Kiosk in a locked and clean state by using both flags together like the this:

https://arcade.makecode.com/kiosk?clean=1&lock=1

The order of the flags does not matter.

## Kiosk controls 

The Kiosk is added to improve the "console style" experience and the intention is that users will have a keyboard, connect their computer to a shoebox controller, or build themselves an arcade cabinet. You can do any of those projects with our help here: 

* [Making an arcade cabinet](https://arcade.makecode.com/hardware/raspberry-pi/wooden-cabinet)
* [Making a shoe box controller](https://arcade.makecode.com/hardware/shoebox-controller)

There's a full list of do it yourself projects at:

* [Do it yourself hardware](diy-hardware)

Because of this, the only way to interact with the kiosk is through keyboard controls. 

![Keyboard controls](/static/hardware/kiosk/keyboard-controls.png)

Two additional keyboard controls are:

* **Spacebar**: Select
* **ESC**: Exit

## Adding a game to the Kiosk 

Use the up arrow or trigger your joystick in the upwards direction to select the **Add your game** button.

![Starting screen](/static/hardware/kiosk/select-a-game.png)

Use the space bar or the a button to select the button. Then, scan the QR code on the Kiosk.

![Add your game screen](/static/hardware/kiosk/add-your-game.png)

Get the share link or QR code of the game you created in MakeCode Arcade.

![Share project window](/static/hardware/kiosk/share-project.png)

The steps to get your game's share link or QR code are outlined [below](#share-link-qr-code).

Use the following page to add your game.

![Add the game to a kiosk](/static/hardware/kiosk/add-to-kiosk.png)

If you submit/scan your game successfully, your game will be launched on the Kiosk. If you don't see your game, wait 5 seconds as the Kiosk might be polling for it. If you do not see your game in a couple of seconds, there might be something wrong. Check the logs on the page using the hardware Tools window.

## Removing all user uploaded games from the Kiosk 

At some point you may decide that you no longer want your games in the Kiosk anymore. If you want to get rid of all the user-uploaded games from Kiosk, follow these steps:

1. Inspect the page by right clicking on the Kiosk's landing page and selecting 'Inspect'.
This will bring up the hardware Tools window. 
2. In the 'Application' tab, find the 'Storage' section.
3. Expand 'Local Storage'.
4. Click https://arcade.makecode.com to see all the items.
5. Filter the items with the word 'user'.
6. Click on the entry 'UserAddedGames'.
7. Press backspace or delete on your keyboard.
8. Close the hardware tools.
9. Refresh the kiosk. You will now have the default kiosk.

## Getting a game's share link or QR code #share-link-qr-code

You can get a game's share link or QR code using these steps:

Click on the three connected dots in the upper right corner of the Arcade editor.

![Arcade edtior menu bar](/static/hardware/kiosk/menu-bar.png)

Make sure to change your project title to something fun and update the project thumbnail if desired. Click 'Share Project'.

![Share project and name the project](/static/hardware/kiosk/shared-project-name.png)

For the share link: Click 'Copy'. This will copy the game's share link to your clipboard.

![Shared project link](/static/hardware/kiosk/shared-project-link.png)

To scan the QR Code, click on the QR code to enlarge it.

![Enlarged QR code for scanning](/static/hardware/kiosk/qr-code-enlarged.png)
