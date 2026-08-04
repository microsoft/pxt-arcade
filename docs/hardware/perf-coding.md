# Coding for performance

Game hardware devices that support MakeCode Arcade are powerful and a have lot of capabilities. Everything, however, has limitations and when a game program tasks a hardware device up to its limits the device's performance will degrade, or even stop working properly. Let's discuss some circumstances which will impact a device's performance and how to write your program code to avoid or reduce these impacts.

## Save it or recreate it?

* **Compute is cheap**: you might have the choice to store a value created in your program
or recomputing it as needed.
You should consider how long it takes to recreate the values you store (and test it!) -
processors on the devices are often powerful enough to recreate these images fairly quickly.
That could easily save 10% of the device's entire memory per image with no noticeable performance penalty.

## Pre-existing assets

* **Prefer pre-drawn images**: if you draw the image in the image editor
rather than modifying it when the game is running,
the image will be stored with the code in flash memory
and won't take up as much space at runtime. For example,
if you want the image in the player sprite to switch from green to red,
consider changing the color in the image editor and storing it as a separate image.
Less runtime memory is needed using this method instead of using ``||images:clone||`` and ``||images:change color in picture from .. to ..||``.
* **Simple images**: limit the number of large images in your game.

## Free up resources

* **Leave it behind**: if an object won't be used anymore, get rid of it!
This is often easier done in JavaScript than in blocks,
but the easiest thing to do is make sure ``||sprites:sprites||`` are destroyed when they're no longer needed.
Setting the ``||sprites:auto destroy||`` ``||sprites:SpriteFlag||`` can be a good first step
as it will get rid of the ``||sprites:sprite||`` when it goes off screen.
* **Minimize sprites** - keep the number of sprites low (below 100). Use projectiles for sprites that move off screen and auto-destroy if they aren't used again.

## Busy threads

* **Stuck in loops**: avoid Forever loops, use Game Update interval loops where possible.

## What is this category???

* **Show Stats**: show your game stats in the Game Window rather than...???
