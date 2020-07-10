# Add Items to Collect

## Intro @unplugged

Now let's add some artifacts that Wonder Woman can collect for points!
![Artifacts!](/static/recipes/wonder-woman-1984/artifact-preview.png)

## Step 1 : Make first item

Go to the tilemap and click on **My Tiles**. Click on the **(+)** and draw the artifact you want Wonder Woman to collect.
It could be her golden lasso, a coin, or anything else Wonder Woman might need.
From the ``||scene:Scene||`` Toolbox drawer, get the on ``||scene:sprite of kind overlaps||`` block and drop onto the Workspace. Click on the checkered square and select the artifact you just made.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {
	
})
```

## Step 2 : Place your artifacts

Go to the Tilemap Editor and click on **My Tiles**. Click on the **(+)** icon to create a new tile where you can draw the artifact you want Wonder Woman to collect. It could be her golden lasso, a coin, or anything else Wonder Woman might need. Place this artifact tile on your maze in all the places you want it to appear.

![Artifacts!](/static/recipes/wonder-woman-1984/artifact-preview.png)

## Step 3 : Earn points when items are collected

First, we need to create a score tracker for the game. 
Get the ``||info:set score to||`` block at put it in the ``||loops:on start||`` loop. 
Now when you start the game, your score will be set to `0`.

Next, get the ``||info:change score by||`` block and put it in the ``||scene:on sprite of kind overlaps||`` block.
This means that when Wonder Woman overlaps with the item, 1 point will be added to the score.

```blocks
info.setScore(0)
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {
    info.changeScoreBy(1)
})
```

## Step 4 : Add a sound when items are collected

In ``||music:Music||`` , get the ``||music:play sound||`` block. In the drop-down, choose the sound you want to hear when Wonder Woman picks up the item.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {
    info.changeScoreBy(1)
    music.baDing.play()
})
```
 
## Step 5 : Make the item disappear when collected

From the "tile" section of ``||scene:Scene||``, get a ``||scene:set at tilemap||`` block. 
Click on the grey box and choose the tile that matches the background of your maze.
Replace the ``||variables:tilemap col row||`` with ``||variables:location||`` by dragging it from the ``||scene:on sprite of kind overlaps||`` block that's already in your workspace.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {
    info.changeScoreBy(1)
    music.baDing.play()
    tiles.setTileAt(location, myTiles.null)
})
```

## Step 6 @fullscreen

Repeat these steps to create more artifacts for Wonder Woman to collect   
**OR** 
Click [**this link**](#recipe:/recipes/wonder-woman-1984/enemies) to add enemies to your maze!  
![Enemies!](/static/recipes/wonder-woman-1984/enemies-preview.png)
