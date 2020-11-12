# Nicole goes for a walk

## Introduction @unplugged

Create your own version of Nicole’s game!  Change the scene, draw yourself as the main character and add in your own favorite things!
 
<GoldieBloxGame.gif>

## Step 1 - Change the Background Image

Find the Set Background Image block in the On Start block.  Click on the grey oval to open the image editor, and draw a scene using the color palette and the painting tools.  Hint – you can erase the existing image using the Transparent Fill tool, or the Eraser tool.

```block
scene.setBackgroundImage(img`from the game`)
```

## Step 2 - Design your own Characters 

Find the Set Sprite blocks for Nicole and her Dog and click on the image of Nicole to open the sprite image editor.  Erase the image using the Eraser tool and draw yourself as the main character.  Then do the same for the Dog character to draw your own pet!

```block
let Nicole = sprites.create(img`from the game`, SpriteKind.Player)
```

```block
let Dog = sprites.create(img`from the game`, SpriteKind.Pet)
```

## Step 3 - Change Sprite variable Names

Now that you’ve drawn your own game characters, let’s change their names.  In the same Set Sprite blocks, click on the Nicole drop-down menu and select Rename Variable.  Type your name and click Ok.  Do the same for your pet – instead of Dog, rename the variable to be whatever your pet is.
 
<renamevariable.png>

## Step 4 - Change the Starting Melody

Let’s customize the starting music for our game.  Find the Play Melody block in the On Start block.  Click on the colored notes to open the melody editor and create your own music or pick a melody from the gallery.

```block
music.playMelody("C C5 D B E A F G ", 320)
```

## Step 5 - Change your Favorite things in the Tilemap

Nicole’s favorite things are Boba Tea, Ramen, and Acai bowls.  What are yours?  Find the Set Tilemap block in the On Start block.  Click on the grey box to open up the Tilemap editor.  Click on My Tiles on the left side of the screen to see the custom tiles in the game.  Click the right arrow below to scroll through to the next page of tiles. Click on the Acai bowl image, and then click on the Pen and Paper icon to edit the image to be one of your favorite things!  Find the Boba Tea and the Ramen bowl images, and customize those as well.

```block
tiles.setTilemap(tilemap`level_0`)
```

<MyTiles.png>

## Step 6 - Set starting score to zero

Add a score for collecting your favorite objects!  From the Info Toolbox drawer, drag a Set Score block into the On Start block.  This will start the game with a score of 0.

```block
info.setScore(0)
```

## Step 7 - Add points for collecting objects

From the Info Toolbox drawer, drag 3 Change Score blocks, and drop one each into the On Sprite of Kind Player Overlaps blocks for your favorite objects.  In the Change Score block, you can specify how many points each of your favorite objects is worth.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.tile41, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    Nicole.startEffect(effects.hearts, 500)
    music.baDing.play()
// @highlight
    info.changeScoreBy(5)
})
```

## Step 8 - Add a Countdown

To make the game more challenging, add a time limit for how quickly you need to get to the end! From the Info Toolbox drawer, drag a Start Countdown block and drop into the On Start block. Change the number of seconds to **50**.

```block
info.startCountdown(50)
```

## Step 9 - Play your customized Game!

That’s it!  Now try playing your game in the full screen simulator.  Other things you can change are the effects and the sounds for when your player overlaps your favorite things, or the text in the game over screens.  Share your game with others!

```block
Nicole.startEffect(effects.hearts, 500)
```

```block
music.baDing.play()
```
