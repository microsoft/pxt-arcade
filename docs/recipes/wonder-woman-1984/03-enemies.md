# WW84: Add Enemies

## {Intro @unplugged}

Now let's add some of Wonder Woman's biggest enemies to the maze!

![Enemies!](/static/recipes/wonder-woman-1984/enemies-preview.png)

## {Step 1 : Create your villain}

Go to the Tilemap Editor and click on **My Tiles**. Click on the **(+)** icon to create a new tile where you can draw one of Wonder Woman's enemies - for example, **Cheetah**.
Then place this enemy tile on your maze in all the places you want it to appear.

![Enemies!](/static/recipes/wonder-woman-1984/enemies-preview.png)

## {Step 2 : Place your artifacts}

From the ``||scene:Scene||`` Toolbox drawer, get the ``||scene: on sprite of kind overlaps||`` block and drop onto the Workspace. Click on the checkered square and select the enemy you just made.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {

})
```

## {Step 3 : Lose points when Wonder Woman runs into enemies}

Now, let's make Wonder Woman lose points when she runs into an enemy.

From the ``||info:Info||`` Toolbox drawer, drag a ``||info:change score by||`` block and drop it into the ``||scene: on sprite of kind overlaps||`` enemy block you just created. In the ``||info:change score by||`` block, type `-1` as the value to change the score by. Now when Wonder Woman overlaps with an enemy, she will lose one point.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {
    info.changeScoreBy(-1)
})
```

## {Step 4 : Add a sound when for the enemy}

From the ``||music:Music||`` Toolbox drawer, drag the ``||music:play sound||`` block into the ``||scene:on sprite of kind overlaps||`` enemy block. Then in the ``||music:play sound||`` block, click on the drop-down menu to select the sound you want to hear when Wonder Woman runs into an enemy.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {
    info.changeScoreBy(1)
    music.baDing.play()
})
```

## {Step 5 : Make enemies disappear}

Now we need to destroy the enemy when Wonder Woman overlaps with it. From the ``||scene:Scene||`` Toolbox drawer, drag a ``||scene:set at tilemap||`` block and drop it into the ``||scene:on sprite of kind overlaps||`` enemy block after the ``||music: play sound||`` block. Then from the ``||scene:on sprite of kind overlaps||`` block, drag the ``||variables:location||`` block into the ``||scene:set at tilemap||`` block replacing the ``||scene:tilemap col row||`` block.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {
    info.changeScoreBy(1)
    music.baDing.play()
    tiles.setTileAt(location, myTiles.null)
})
```

![Drag Location](/static/recipes/wonder-woman-1984/enemies-location.gif)

## {Step 6 Add more enemies}

Repeat these steps to add more enemies for Wonder Woman to avoid in her Maze. When you're done, click **Done** to play and share your Wonder Woman Chaos Maze with friends! Congratulations!
