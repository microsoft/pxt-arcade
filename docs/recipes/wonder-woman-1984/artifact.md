# Add Items to Collect

## Intro @unplugged

Now let's add some artifacts that Wonder Woman can collect for points!

![Artifacts!](/static/recipes/wonder-woman-1984/artifact-preview.png)

## Step 1 : Make an artifact

Go to the Tilemap Editor and click on **My Tiles**. Click on the **(+)** icon to create a new tile where you can draw the artifact you want Wonder Woman to collect. It could be her golden lasso, a coin, or anything else Wonder Woman might need. Place this artifact tile on your maze in all the places you want it to appear.

![Artifacts!](/static/recipes/wonder-woman-1984/artifact-preview.png)

## Step 2 : Select the artifacts

From the ``||scene:Scene||`` Toolbox drawer, get the on ``||scene:sprite of kind overlaps||`` block and drop onto the Workspace. Click on the checkered square and select the artifact you just made.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {
	
})
```

## Step 3 : Earn points when items are collected

First, we need to create a score tracker for the game. 
Get the ``||info:set score to||`` block at put it in the ``||loops:on start||`` block. 
Now when you start the game, your score will be set to `0`.

Next, get the ``||info:change score by||`` block and put it in the ``||scene:on sprite of kind overlaps||`` artifact block you added in the previous step.
This means that when Wonder Woman overlaps with the item, 1 point will be added to the score.

```blocks
info.setScore(0)
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {
    info.changeScoreBy(1)
})
```

## Step 4 : Add a sound when items are collected

From the ``||music:Music||`` Toolbox drawer, drag the ``||music:play sound||`` block into the ``||scene:on sprite of kind overlaps||`` artifact block. Then in the ``||music:play sound||`` block, click on the drop-down menu to select the sound you want to hear when Wonder Woman picks up the artifact.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {
    info.changeScoreBy(1)
    music.baDing.play()
})
```
 
## Step 5 : Make the item disappear when collected

Now we need to delete the artifact when Wonder Woman picks it up. From the ``||scene:Scene||`` Toolbox drawer, drag a ``||scene:set at tilemap||`` block and drop it into the ``||scene:on sprite of kind overlaps||`` artifact block after the ``||music:play sound||`` block. Then from the ``||scene:on sprite of kind overlaps||`` block, drag the ``||variables:location||`` block into the ``||scene:set at tilemap||`` block replacing the ``||scene:tilemap col row||`` block.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {
    info.changeScoreBy(1)
    music.baDing.play()
    tiles.setTileAt(location, myTiles.null)
})
```

![Drag Location](/static/recipes/wonder-woman-1984/artifacts-location.gif)

## Step 6 @fullscreen

Repeat these steps to add more artifacts for Wonder Woman to collect in her Maze. When you're ready to move on to the next tutorial, click [**this link**](#recipe:/recipes/wonder-woman-1984/enemies) to add enemies to your maze! Otherwise, click **Finish**."
 
![Enemies!](/static/recipes/wonder-woman-1984/enemies-preview.png)