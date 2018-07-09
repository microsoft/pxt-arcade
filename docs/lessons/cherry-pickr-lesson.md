# Cherry Pickr
Collect as many cherries before time runs out!  
## Learning Objective
Learn the basic requirements to build a functional game!
* The concept of sprite (in this tutorial, "agent")
* How to set up a map tile
* Spawning cherries on the map  
* Setting and moving a character 
* Designing the map
* Setting up a countdown 

## Learning Lesson
1. [Part One: Starting the Game](#part-one-starting-the-game)
2. [Part Two: Setting the Background](#part-two-setting-the-background)
3. [Part Three: Creating and Moving the Player](#part-three-creating-and-moving-the-player)
4. [Part Four: Spawning Cherries on the Screen](#part-four-spawning-cherries-on-the-screen)
5. [Part Five: Keeping Track of the Score and Time](#part-five-keeping-track-of-the-score-and-time)
6. [Part Six: Picking Up the Cherries](#part-six-picking-up-the-cherries)


## Part One: Starting the Game
Go to the [Arcade Editor](/) and select **New Project** to  begin the creation of your new game.  

Once you arrive to the editor, you will see a green **on start** block and a purple **on game update** block already out on the editor.

We want the game to start with a _Title Screen_ to inform the player what they are playing. To do that, we go to the **Game** tab and under the heading **Prompt**, drag a splash block into the **on start** block. Inside the splash textbox, go ahead and give your game a title.
```blocks
game.splash("Cherry Pickr")
```
## Part Two: Setting the Background
To set the background, click on the **Scene** tab and drag the **set tile map to** block into the **on start** block.
Go ahead and click the gray box and draw whatever you want the background to look like.
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
## Part Three: Creating and Moving the Player
### Creating
Our next step is to create a movable character. To create a character, go to the **Sprites** tab and under the heading **Create**, go ahead and drag a **set agent to** block into the **on start** block.  

Next, draw what you want the agent to look like. Click the gray square box inside the **set agent to** block. A paint editor will pop up and this is where you will draw what you want your player to look like.
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
We have successfully created our player.  

*_Optional: We can rename our character from "agent" to "player" by clicking the drop down wherever you see the "agent" variable and selecting **Rename variable**_
### Moving
To move the player, click the **Controller** tab and drag out a **control agent** block into the **on start** block. Make sure the variable selected is "agent".  

Then go to the **Scene** tab and under the heading **Camera**, drag the **camera follow agent** block into the **on start** block. Make sure the variable selected is "agent".  

This is so that when the player moves around the map, they will be at the center of the screen.  
To make the player move faster, set the vx and vy to 150.
```blocks
enum SpriteKind {
    Player,
    Enemy
}
let agent: Sprite = null
game.splash("Cherry Pickr")
agent = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.controlSprite(agent, 150, 150)
scene.cameraFollowSprite(agent)
```
Now we are able to move our player! In the simulator, test out the movement of your player.
## Part Four: Spawning Cherries on the Screen
We want cherries to appear randomly on the screen every half a second. In order to do this, go to the **Game** tab and dragging out the **on game update every** block onto the editor.  

Next we will define what a cherry is by going to the **Sprites** tab and dragging out the **set agent to** block inside the **on game update every** block.  

Click the drop down and change "agent" to "item".  Click the gray square box to draw what you want your item to look like. Then click the drop down that says "Player" and click **Add a new kind**. Name your kind "Item".
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
To spawn cherries on the screen, we need to get a random x and y coordinate. Go to the **Sprites** tab and drag the **set agent position to** inside the **on game update every** block. Change "agent" to "item".  

To make the cherry spawn randomly on the map, go to the **Math** tab and drag one **pick random** block into the x-value of the **set item position to** and another into the y-value.  

Change the values for the first **pick random** block to 0 and 160.  
Change the values for the second **pick random** block to 0 and 120.  
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
## Part Five: Keeping Track of the Score and Time
### Keeping Track of Time
We need to keep track of how long the game will last. To do this, go to the **Info** tab and drag the **start countdown** into the **on start** block. Click the textbox and change it to 60 so that the game will end after 60 seconds.   

### Keeping Track of Score
The next part is to keep track of the score. Go to the **Info** tab and drag the **set score to** into the **on start** block. Leave the value at 0 since the player doesn't have any points at the beginning of the game.  

We will add to the score in **Part Six: Picking Up the Cherries**.

The editor will automatically show the timer and score at the top of the screen.  
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
controller.controlSprite(agent, 150, 150)
scene.cameraFollowSprite(agent)
info.startCountdown(60)
info.setScore(0)
```
## Part Six: Picking Up the Cherries
The last part is allowing our player to actually collect cherries. Go to the **Sprites** tab and under the heading **Overlaps**, drag out the **on sprite of kind Player overlaps** onto the editor. 

Next, in the **Variables** tab, drag the "item" variable over the "otherSprite" variable. Also drag out "agent" over the "sprite" variable. Then go to the second "Player" drop down and select "Item".  

### Changing the Score
To change the score when touching the cherry, go to the **Info** tab and drag the **change score by** block into the **on agent of kind Player overlaps** block. Leave the value at 1.  

### Removing the Item
To remove the cherry the player picks up, go to the **Sprites** tab and under the **Lifecycle** header, drag the **destroy** block into the **on agent of kind Player overlaps** block. Change "agent" to "item".
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
controller.controlSprite(agent, 150, 150)
scene.cameraFollowSprite(agent)
info.startCountdown(60)
info.setScore(0)
game.onUpdateInterval(500, function () {
    item = sprites.create(sprites.food.smallCherries, SpriteKind.Item)
    item.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
```

And now we have a fully functional game!