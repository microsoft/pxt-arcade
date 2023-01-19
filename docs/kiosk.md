# Kiosk

We want users to be able to showcase their games in a fun and unique way, so we made the kiosk. The kiosk is an interface where a list of games is displayed in a carousel to get users excited to upload their games.  

 

## Getting Started 

There is a default kiosk that we've pre-populated with some of our most popular games from arcade. View this page by visiting https://arcade.makecode.com/kiosk 

 


 

## Clean Kiosk State 

To get a clean kiosk so students won't be tempted to play random games,  you can add the clean flag to the url https://arcade.makecode.com/kiosk?clean=1.  

If you have not uploaded any games to the kiosk, your kiosk will look like the following: 


 

If you have only uploaded one game, you will see three copies of that game because of how the carousel works.  

When you upload more games, you will see them in the list as you scroll through. 

## Locked Kiosk State 

If you are just looking to put games on display and not edit the game list that is already on the kiosk, there is also a lock flag that can be added to the url. This makes the 'Add your game' button disappear. https://arcade.makecode.com/kiosk?lock=1 

You can put your kiosk in a locked and clean state by using the flags together like the following: 

 

https://arcade.makecode.com/kiosk?clean=1&lock=1 the order of  the flags does not matter.

## Kiosk Controls 

Kiosk is made with the intention that users will have a keyboard, connect their computer to a shoebox controller, or build themselves an arcade cabinet. You can do any of those projects with our help here: 

Making an arcade cabinet: https://arcade.makecode.com/hardware/raspberry-pi/wooden-cabinet 

Making a shoe box controller: https://arcade.makecode.com/hardware/shoebox-controller 

 

Because of this, the only way to interact with the kiosk is through keyboard controls. 

![Keyboard controls](/static/kiosk/docs/keyboard-controls.png)

Spacebar: Select 

ESC: exit