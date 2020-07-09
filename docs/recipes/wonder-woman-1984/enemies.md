# Add Enemies

## Intro @unplugged

Now let's add some of Wonder Woman's biggest enemies to the maze!  
![Enemies!](/static/recipes/wonder-woman-1984/enemies-preview.png)

## Step 1 : Create your villain

Go to the tilemap and click on **My Tiles**. Click on the **+** and draw the enemy you want Wonder Woman to face.
You could draw her enemy from the upcoming movie: **Cheetah**.
From ``||scene||`` get the ``||scene: on sprite of kind overlaps||`` block. 
Click on the grey square and find your villain! 

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {
	
})
```

## Step 2 : Place your artifacts

Now, go back to the tilemap. Go to **My Tiles** and select your enemy. Place the enemy tile on your maze in all the places you want your enemy to appear.
![Enemies!](/static/recipes/wonder-woman-1984/enemies-preview.png)

## Step 3 : Lose points when Wonder Woman runs into enemies

Now, let's make Wonder Woman lose points when she runs into an enemy.
First, we need to create a score tracker for the game. 
Get the ``||info: set score to||`` block at put it in the ``||loops: on start||`` loop. 
Now when you start the game, your score will be set to 0.

Next, get the ``||info: change score by||`` block and put it in the ``||scene: on sprite of kind overlaps||`` block.
Now, when Wonder Woman overlaps with an enemy, the player will **lose one point**.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {
    info.changeScoreBy(1)
})
```

## Step 4 : Add a sound when for the enemy

In ``||music||`` , get the ``||music: play sound||`` block. In the drop-down, choose the sound that will play when you lose a point.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {
    info.changeScoreBy(1)
    music.baDing.play()
})
```
 
## Step 5 : Make enemies disappear

Once you've already seen an enemy, you want it to disappear. So, from the "tile" section of ``||scene||``, get a ``||scene: set at tilemap||`` block. 
Click on the grey box and choose the tile that matches the background of your maze.
Replace the ``||variable: tilemap col row||`` with ``||variable: location||`` by dragging it from the ``||scene: on sprite of kind overlaps||`` block that's already in your workspace.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.null, function (sprite, location) {
    info.changeScoreBy(1)
    music.baDing.play()
    tiles.setTileAt(location, myTiles.null)
})
```

## Step 6 @unplugged

Repeat these steps to create more enemies to add to your maze or start playing!