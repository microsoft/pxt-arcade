# Cherry Pickr

![Game view in simulator](/static/lessons/cherry-pickr/cherry-pickr.png)

Collect as many cherries as you can before time runs out!  

## Learning Objective

Learn the basic requirements to build a functional game!

* The concept of sprite (in this tutorial, "agent")
* How to set up a map tile
* Spawning cherries on the map  
* Setting and moving a character 
* Designing the map
* Setting up a countdown 

## Lesson Sections

* [Part One: Start the Game](#part-one-start-the-game)
* [Part Two: Set the Background](#part-two-set-the-background)
* [Part Three: Create and Move the Player](#part-three-create-and-move-the-player)
* [Part Four: Spawn Cherries on the Screen](#part-four-spawn-cherries-on-the-screen)
* [Part Five: Keep Track of the Score and Time](#part-five-keep-track-of-the-score-and-time)
* [Part Six: Picking Up Cherries](#part-six-picking-up-cherries)

## Part One: Start the Game

Go to the [MakeCode Arcade](@homeurl@) editor and select **New Project** to begin creating a new game.  

Once the editor loads, you will see a green ``||loops:on start||`` block already placed in the editor Workspace.

We want the game to start with a _Title Screen_ to let the player know what game they are playing. To do that, we go to ``||game:Game||`` in the Toolbox and under the **Prompt** category, drag a ``||game:splash||`` block into the ``||loops:on start||`` block. Give your game a title and put in as the text for the ``||game:splash||`` block.

```blocks
game.splash("Cherry Pickr")
```

## Part Two: Set the Background

To set the background, click on ``||scene:Scene||`` in the Toolbox and drag the ``||scene:set tile map to||`` block into the ``||loops:on start||`` block. Go ahead and click the gray box and draw whatever you want the background to look like.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
game.splash("Cherry Pickr")
scene.setTileMap(img`
6 6 6 6 6 6 6 6 6 6 
3 3 3 3 3 3 3 3 3 3 
5 5 5 5 5 5 5 5 5 5 
7 7 7 7 7 7 7 7 7 7 
9 9 9 9 9 9 9 9 9 9 
4 4 4 4 4 4 4 4 4 4 
2 2 2 2 2 2 2 2 2 2 
a a a a a a a a a a 
`)
```

## Part Three: Create and Move the Player

### Creating

Our next step is to create a movable character. To do this, go to  ``||sprites:Sprites||`` in the Toolbox under the **Create** category and drag a ``||sprites:set agent to||`` block into ``||loops:on start|``.  

Next, draw what you want the agent to look like. Click the square grey box inside the ``||sprites:set agent to||`` block. A paint editor will pop up and this is where you will draw what you want your player to look like.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let agent: Sprite = null
game.splash("Cherry Pickr")
scene.setTileMap(img`
6 6 6 6 6 6 6 6 6 6 
3 3 3 3 3 3 3 3 3 3 
5 5 5 5 5 5 5 5 5 5 
7 7 7 7 7 7 7 7 7 7 
9 9 9 9 9 9 9 9 9 9 
4 4 4 4 4 4 4 4 4 4 
2 2 2 2 2 2 2 2 2 2 
a a a a a a a a a a 
`)
agent = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
```

OK, We've created our player!

## ~hint

We can rename our character from ``agent`` to ``player`` by clicking the drop down anywhere you see the ``agent`` variable and selecting ``Rename variable...``.

## ~

### Moving

To move the player, click ``||controller:Controller||`` in the Toolbox and drag out a ``||controller:control sprite||`` block into the ``|||loops:on start||`` block. Make sure the variable selected is ``agent``.  

Then go to ``||scene:Scene||`` and under the **Camera** category, drag the ``||scene:camera follow sprite||`` block into the ``||loops:on start||`` block. Make sure the variable selected is ``agent``.  

We do this so that when the player moves around the map, they will remain at the center of the screen.  
To make the player move faster, set the ``vx`` and ``vy`` to `150`.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let agent: Sprite = null
game.splash("Cherry Pickr")
scene.setTileMap(img`
6 6 6 6 6 6 6 6 6 6 
3 3 3 3 3 3 3 3 3 3 
5 5 5 5 5 5 5 5 5 5 
7 7 7 7 7 7 7 7 7 7 
9 9 9 9 9 9 9 9 9 9 
4 4 4 4 4 4 4 4 4 4 
2 2 2 2 2 2 2 2 2 2 
a a a a a a a a a a 
`)
agent = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(agent, 150, 150)
scene.cameraFollowSprite(agent)
```

Now we are able to move our player! In the simulator, test out the movement of the player.  

![Player moving on the screen](/static/lessons/cherry-pickr/movingplayer.gif)

## Part Four: Spawn Cherries on the Screen

We want cherries to appear randomly on the screen every half a second. In order to do this, go into ``||game:Game||`` in the Toolbox and drag out the ``||game:on game update every||`` block onto the editor.  

Next we will define what a cherry is by going to ``||sprites:Sprites||`` and dragging out the ``||sprites:set agent to||`` block inside the ``||game:on game update every||`` block.  

Click the drop down and change ``agent`` to ``item``. Click the gray square box to draw what you want your item to look like. Then click the drop down that says ``Player`` and click ``Add a new kind...``. Name your kind ``Item``.

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Item
}
let item: Sprite = null
game.onUpdateInterval(500, function () {
    item = sprites.create(sprites.food.smallCherries, SpriteKind.Item)
})
```

To spawn cherries on the screen, we need to make a random x and y coordinate. Go to the ``||sprites:Sprites||`` tab and drag the ``||sprites:set agent position to||`` inside the ``||sprites:on game update every||`` block. Change ``agent`` to ``item``.  

To make the cherry spawn randomly on the map, go to the ``||math:Math||`` tab and drag one ``||math:pick random||`` block into the x-value of the ``||sprites:set item position to||`` and another into the y-value.  

Change the values for the first ``||math:pick random||`` block to `0` and `160`. Change the values for the second ``||math:pick random||`` block to `0` and `120`.

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Item
}
let item: Sprite = null
game.onUpdateInterval(500, function () {
    item = sprites.create(sprites.food.smallCherries, SpriteKind.Item)   
    item.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
```

## Part Five: Keep Track of the Score and Time

### Keep Track of Time

We need to keep track of how long the game will last. To do this, go to ``||info:Info||`` and drag the ``||info:start countdown||`` into the ``||loops:on start||`` block. Click on the `0` and change it to `60` so that the game will end after 60 seconds.   

### Keep Track of the Score

The next part is to keep track of the score. Go to ``||info:Info||`` and drag the ``||info:set score to||`` into the ``||loops:on start||`` block. Leave the value at `0` since the player doesn't have any points at the beginning of the game.  

We will add to the score in [Part Six: Picking Up Cherries](#part-six-picking-up-cherries).

The game simulator will automatically show the timer and score at the top of the screen.

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Item
}
let agent: Sprite = null
game.splash("Cherry Pickr")
scene.setTileMap(img`
6 6 6 6 6 6 6 6 6 6 
3 3 3 3 3 3 3 3 3 3 
5 5 5 5 5 5 5 5 5 5 
7 7 7 7 7 7 7 7 7 7 
9 9 9 9 9 9 9 9 9 9 
4 4 4 4 4 4 4 4 4 4 
2 2 2 2 2 2 2 2 2 2 
a a a a a a a a a a 
`)
agent = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(agent, 150, 150)
scene.cameraFollowSprite(agent)
info.startCountdown(60)
info.setScore(0)
```

## Part Six: Picking Up Cherries

The last task is to let our player to actually collect cherries. Go to ``||sprites:Sprites||`` and under the **Overlaps** category, drag out ``||sprites:on sprite of kind Player overlaps||``. 

Next, in the ``||variables:Variables||`` tab, drag the ``item`` variable onto the ``otherSprite`` variable to replace it. Also, drag out the ``agent`` variable and drop it onto the ``sprite`` variable. Then go to the second ``Player`` drop down and select ``Item``.  

### Changing the Score

To change the score when the cherry is touched, go to the ``||info:Info||`` tab and drag the ``||info:change score by||`` block into the ``||sprites:on agent of kind Player overlaps||`` block. Leave the value at `1`.  

### Removing the Item

To remove the cherry that the player picks up, go to ``||sprites:Sprites||`` in the Toolbox and under **Lifecycle**, drag the ``||sprites:destroy||`` block into the ``||sprites:on agent of kind Player overlaps||`` block. Change ``agent`` to ``item``.

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Item
}
let item: Sprite = null
let agent: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Item, function (agent, item) {
    info.changeScoreBy(1)
    item.destroy()
})
game.splash("Cherry Pickr")
scene.setTileMap(img`
6 6 6 6 6 6 6 6 6 6 
3 3 3 3 3 3 3 3 3 3 
5 5 5 5 5 5 5 5 5 5 
7 7 7 7 7 7 7 7 7 7 
9 9 9 9 9 9 9 9 9 9 
4 4 4 4 4 4 4 4 4 4 
2 2 2 2 2 2 2 2 2 2 
a a a a a a a a a a 
`)
agent = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(agent, 150, 150)
scene.cameraFollowSprite(agent)
info.startCountdown(60)
info.setScore(0)
game.onUpdateInterval(500, function () {
    item = sprites.create(sprites.food.smallCherries, SpriteKind.Item)
    item.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
```

And now we have a fully functioning game!

![Working Game](/static/lessons/cherry-pickr/workinggame.gif)
