# MakeCode Arcade Kiosk

The Kiosk mode in MakeCode Arcade is meant to be used in conjunction with a MakeCode Arcade machine, a [DIY MakeCode Arcade cabinet]( https://arcade.makecode.com/hardware/raspberry-pi/wooden-cabinet), or a simple computer screen with a game controller interface – i.e. [Shoebox Controller](https://arcade.makecode.com/hardware/shoebox-controller). You can also use the [MakeCode Arcade Kiosk](https://www.xbox.com/games/store/makecode-arcade-kiosk/9p3rgvvtvb1s) app in the Xbox Store to upload and play Arcade games on the big screen with a game controller.

![Makecode Arcade consoles](/static/hardware/kiosk/makecode-arcade-machines.jpg)

In Kiosk mode, MakeCode Arcade games are displayed in a carousel list. Games may be browsed and played using the joystick and buttons on an Arcade machine.

## Setting up the Kiosk

To use the MakeCode Arcade Kiosk mode in an Arcade machine or cabinet, you will need a monitor and a computer with internet access.

If you are using a Windows computer for your Arcade machine, we recommend using [Windows Kiosk mode](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-configure-kiosk-mode#configure-using-windows-settings) and select Microsoft Edge displayed full-screen with MakeCode Arcade Kiosk https://arcade.makecode.com/kiosk as the default URL, and in step 10 select Never. If you want to escape from the Windows Kiosk mode, press ctrl+alt+delete to switch or reboot user. Watch this [video](https://youtu.be/Z8alME1nRmQ) to see the process.

## Operating the Kiosk

The default Kiosk mode, accessed at https://arcade.makecode.com/kiosk, contains a list of popular MakeCode Arcade single and multiplayer games including [Space Destroyer](https://arcade.makecode.com/25572-25731-72869-29244), [Bunny Hop!](https://arcade.makecode.com/84490-94874-87123-99597), [Pigeon: Deliverance](https://arcade.makecode.com/60307-91678-81892-80686), [NINJA](https://arcade.makecode.com/16040-59904-05312-47571) and more – see the `kiosk` section of [targetconfig.json](https://github.com/microsoft/pxt-arcade/blob/master/targetconfig.json) for the full list.

To navigate the Kiosk interface, use the **Player 1** joystick and the **A** button:

* **Joystick left/right**: navigate game selection in the carousel list
* **Joystick up/down**: select the "Add your game" button, or scroll through the alphabet when setting High Score initials for a game
* **Button A**: enter or select to play a game, click on buttons, or set a name initial in the High Score interface
* **Reset button**: if your Arcade machine or controller includes a Reset button, this will take you back to the main Kiosk carousel screen

If you have a keyboard connected to your Arcade machine, you can also use the <kbd>←</kbd><kbd>→</kbd><kbd>↑</kbd><kbd>↓</kbd> (directional arrow) keys or <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> keys to simulate joystick movement, 
<kbd>Space</kbd> for **A button**, <kbd>1</kbd> for **Menu**, and <kbd>2</kbd> or <kbd>Escape</kbd> (Esc) for **Reset**.

Each game in the Kiosk has an image or gif, a title, a description, and some have a list of high scores if scoring is enabled in the game.

![Share project button](/static/hardware/kiosk/hot-air-balloon.png)

## Customizing the Kiosk

The MakeCode Arcade Kiosk mode supports fully customizing the game list. Any customizations you make will be stored in the local browser’s memory. This means that if you clear your browser history on the Arcade machine’s computer, your customizations will be lost. A best practice is to store a list of the share URL’s or game files for your Kiosk games in case they accidentally get deleted from the kiosk.

## Adding a game to the Kiosk

Open the [MakeCode Arcade]( https://arcade.makecode.com) game you would like to add to your Kiosk, and click the **Share** button.

![Share project button](/static/hardware/kiosk/share-button.png)

Give your game a title and select an image or gif of your game and click the **Share Project** button.

![Share project dialog](/static/hardware/kiosk/share-project.png)

In the next window, click the **Share to Kiosk** button which will allow you to enter a code for your Kiosk.

![Share project dialog with kiosk button](/static/hardware/kiosk/share-kiosk-button.png)

To obtain the code for your kiosk, on your Arcade machine’s computer, open [kiosk](https://arcade.makecode.com/kiosk) mode, then use the joystick to navigate to the **Add your game** button. Then press the **A** button to select.

![Select a game screen](/static/hardware/kiosk/select-a-game.png)

In the "Add your Game" screen, you’ll see the 6-digit alphanumeric code of your kiosk.

Type this code into the Share Project window of your game and click Submit.

![Share project dialog with kiosk code](/static/hardware/kiosk/share-kiosk-code.png)

This will append your game to your Arcade machine’s kiosk game list.

Alternately, you can add a game to the kiosk through a shared game link. On the MakeCode Arcade machine, use your phone or other computer’s camera to scan the QR code in the Add your Game screen for your kiosk (or browse to http://arcade.makecode.com/kiosk#add-game:<KIOSK_ID> where the KIOSK ID is the 6-digit alphanumeric code of your kiosk) and enter in the **Share Link** for the game you would like to add to the kiosk.

Please note that for security purposes, the Kiosk ID is only valid for 30 minutes, after which time you will need to generate a new Kiosk ID. There is no limit to how many games can be added to a kiosk.

## Deleting a game from the Kiosk

To delete a game from the kiosk, first select it in the list of games. Use the down direction on the joystick to highlight the delete button on the bottom right below the game image.

![Delete button highlighted on select game](/static/hardware/kiosk/delete-button-highlighted.png)

Press the **A** button to select. This will open a pop-up to confirm the deletion.

![Delete game dailog](/static/hardware/kiosk/delete-game-modal.png)


Move the joystick left or right to highlight Cancel or Confirm. Press the **A** button to select. If you Confirm deletion, the game will be removed from the Kiosk.

## Clearing the Kiosk

Instead of starting with the default game list in the MakeCode Arcade Kiosk, you can open Kiosk mode with no games in the game list. Use the **"clean=1"** flag to do this:

https://arcade.makecode.com/kiosk?clean=1

![No games uploaded yet](/static/hardware/kiosk/no-uploaded-games.png)

Note that if you have only uploaded one game to the kiosk, you will see multiple copies of that game. This behavior just allows the carousel interface to scroll to the left or right. Once you upload 3 or more different games, you should not see any duplicate games in the list.

![Just one uploaded game](/static/hardware/kiosk/single-uploaded-game.png)

## Locking the Kiosk

Once you’ve set up your game list in the Kiosk, you have the option to lock the kiosk into a read-only mode – where no games can be added or deleted. This may be helpful if you have your MakeCode Arcade machine located in a public space and don’t want people to edit your game list. Use the **"lock=1"** flag to do this:

https://arcade.makecode.com/kiosk?lock=1

You can also combine lock and clean option as following

https://arcade.makecode.com/kiosk?lock=1&clean=1

