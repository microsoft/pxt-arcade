# Collect the Clovers

https://makecode.com/_VdDFHiTr4h4k 
Create a garden game to collect 4-leaf clovers and avoid the bees! 

<Collect the Clovers.gif>

## Step 1 - Set the Background image

From the Scene Toolbox drawer, drag a Set Background Image block onto the Workspace, and drop into the On Start block. 
In the Set Background Image block, click on the grey oval to open the image editor, and draw a garden scene with flowers, trees any anything else you want in the background of your game. 

<backgroundimage.png> 

## Step 2 - Create the Player Character

From the Sprites Toolbox drawer, drag a Set Sprite block and drop after the Set Background Image block 
Click on the grey oval to open the sprite image editor, and draw or select a Gallery image for your player. 

<setsprite.png> 

## Step 3 -Move the Player Character

Let’s add code to be able to move our player around the screen. From the Controller Toolbox drawer, drag a Move Sprite block and drop after the Set Sprite block. 

<move.png> 

## Step 4 - Keep the Player in the screen

Notice that we can actually move our player off the screen. Let’s prevent that. 
From the Sprites Toolbox drawer, under the Effects category, drag a Set Sprite Stay in Screen block and drop after the Move Sprite block. 
Click on the Off toggle to turn to On. 

<stayinscreen.png>

## Step 5 - Initialize the Score and number of Player Lives

Let’s set the score to 0 and give our player 3 lives to start the game. 
From the Info Toolbox drawer, drag a Set Score block and a Set Life block and drop after the Set Sprite Stay in Screen block. 

<setscorelife.png> 

## Step 6 - Game Update

Every 5 seconds, we want a clover and a bee to appear in our game. 
From the Game Toolbox drawer, drag an On Game Update on Every block onto the Workspace (you can place this anywhere). 
Click on the 500ms update interval and change to 5 seconds (or 5000 milliseconds). 

<ongameupdate.png> 

## Step 7 - Add a Clover Projectile

A Projectile is a Sprite that moves on its own. 
From the Sprites Toolbox drawer, drag a Set Projectile to Projectile from Side block and drop into the On Game Update on Every block. 
Click on the grey oval to open the sprite image editor and draw an image of a 4-leaf Clover. 

<cloverprojectile.png> 

## Step 8 - Add Random Movements

Notice how our Clovers are always coming from the top right in a diagonal direction. Let’s add some random movements by setting the X and Y velocity values. 
From the Math Toolbox drawer, drag out 2 Pick Random blocks onto the workspace. 
Drop one into the vx value and drop the other into the vy value of the Projectile from Side block 
In each of the Pick Random blocks, change the minimum and maximum values to -50 and 50 

<pickrandom.png> 

## Step 9 - Add Bee Projectile

Now let’s add a Bee projectile. 
Right-click on the Set Projectile to Projectile from Side clover block that we just created and select Duplicate. 
Drop the copied block after the existing clover projectile block and click on the Projectile variable name drop-down and select New Variable. Name this variable “bee”. 
Then click on the grey oval to open the sprite image editor and draw an image of a bee. 

<beeprojectile.png> 

## Step 10 - Set the Bee to Enemy

To make the Bee an enemy sprite, we need to set its kind. 
From the Sprites Toolbox drawer, under the Overlaps category, drag a Set Sprite Kind block, and drop after the Set bee to Projectile block. 
Click on the mySprite variable drop-down menu and select the bee variable. 
Click on the Player kind drop-down menu and select Enemy sprite kind. 

<spritekind.png> 

## Step 11 - Add Overlaps behavior

Now let’s add code that will increment our score when the Player collects a clover. 
From the Sprites Toolbox drawer, in the Overlaps section, drag an On Sprite Overlaps block and drop on the Workspace (you can place this anywhere). 
Click on the last Player kind drop-down menu and select Projectile sprite kind. 

<overlapsprojectile.png> 

## Step 12 - Destroy Clover

From the Sprites Toolbox drawer, under the Effects category, drag a Destroy Sprite block and drop in the On Sprite Overlaps block. 
In the On Sprite Overlaps block, drag the OtherSprite local variable (representing the specific overlapping clover) into the Destroy Sprite block replacing mySprite. 

<destroysprite.gif> 

## Step 13 - Add Effect 
In the Destroy Sprite block, click on the Plus (+) icon to expand. 
Click on the spray effect drop-down menu and select an effect that you want to display when your Player collects a Clover. 
Click on the 500ms drop-down menu and select 100 milliseconds for the duration of your effect. 

<destroyeffect.png> 

## Step 14 - Play a Sound 

From the Music Toolbox drawer, drag a Play Sound block, and drop after the Destroy Sprite block. 

<playsound.png> 

## Step 15 - Change Score

From the Info Toolbox drawer, drag a Change Score block and drop after the Play Sound block. 

<changescore.png>

## Step 16 - Add Overlaps behavior for Bee

Now let’s add behavior for when our Player runs into a bee. 
Right-click on the the On Sprite Overlaps block that we were just working on, and select Duplicate to make a copy of this chunk of code. Don’t worry if it looks disabled, we’ll fix that. 
In the copied On Sprite Overlaps block, click on the Projectile kind drop-down menu and select Enemy for the kind. 

<overlapsenemy.png> 

## Step 17 - Change effects and sounds 

In the Destroy enemy block, select a different effect when your player runs into a bee. 
In the Play Sound block, select a different sound when your player runs into a bee. 

<enemyeffectsound.png>

## Step 18 - Lose a life 

Instead of adding a score, let’s change the code to lose a life when our player runs into a bee. 
Delete the Change Score block. 
From the Info Toolbox drawer, drag a Change Life block and drop after the Play Sound block. 

<changelife.png>

## Step 19 - Play your Game!

That’s it! Now try playing your game in the full screen simulator. You can also try downloading your game to a hardware device, or Share your game with others!