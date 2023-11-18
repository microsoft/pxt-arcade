# Arctic Code Quest: Day 1




## Arctic Code Quest: Python Edition - Day 1! @showdialog

Welcome to your first Python project code along! Today you will be creating a project with a background image, 3 different sprites positioned across the screen, and 2 overlap functions that make something happen when the different sprites collide! 

Click ``||loops:Ok||`` to get started!

![Logo](https://github.com/Code-Ninjas-Home-Office/arctic-code-quest/blob/master/images/CN-Logo.png?raw=true "CN Logo") 

## Add a Background Image!

Add a background image for our winter-themed game!

---

- :tree: To start, type ``||scene:scene||`` and a dot operator ``||.||``
- :tree: Type **set** then select ``||scene:set_background_image||`` from the code completion tool.
- :mouse pointer: Click on the palette to open the Gallery. ![Scene](https://github.com/Code-Ninjas-Home-Office/arctic-code-quest/blob/master/images/DrawTool.png?raw=true "Draw Tool")
- :mouse pointer: Select a background image from the Gallery or My Assets. ![Scene](https://github.com/Code-Ninjas-Home-Office/arctic-code-quest/blob/master/images/MyAssets.png?raw=true "My Assets Tab")
- :mouse pointer: Click DONE at the bottom right of the screen!

![Logo](https://github.com/Code-Ninjas-Home-Office/arctic-code-quest/blob/master/images/CN-Logo.png?raw=true "CN Logo") 

```python
scene.set_background_image(ski_imgs.skyBackground)
```

## Add your first sprite!

Let's add a sprite to that fancy background! A sprite is something that you interact with or control some way in the game!

---

- :paper plane: To start, type a variable name such as ``||sprites:my_sprite||`` to declare your sprite. Then type an assignment operator ``||=||``.
- :paper plane: Start typing the function ``||sprites:sprites.create||`` then select the function name from the code completion tool.
- :mouse pointer: Click on the palette to open the Gallery. ![Scene](https://github.com/Code-Ninjas-Home-Office/arctic-code-quest/blob/master/images/DrawTool.png?raw=true "Draw Tool")
- :mouse pointer: Select a sprite image from the Gallery or My Assets. ![Scene](https://github.com/Code-Ninjas-Home-Office/arctic-code-quest/blob/master/images/MyAssets.png?raw=true "My Assets Tab")
- :mouse pointer: Click DONE at the bottom right of the screen again!
- :paper plane: Notice the ``||sprites:SpriteKind.player||`` parameter; leave it alone for now. You will change this for other sprites in the next step!

![Logo](https://github.com/Code-Ninjas-Home-Office/arctic-code-quest/blob/master/images/CN-Logo.png?raw=true "CN Logo") 

```python
scene.set_background_image(ski_imgs.skyBackground)
#player sprite
# @highlight
my_sprite = sprites.create(ski_imgs.girlFront, SpriteKind.player)
```

## Challenge Time!

Now it's your turn! Using what you just learned, add 2 more sprites to your project!

- :paper plane: One sprite should be a ``||sprites:SpriteKind.enemy||`` that you will program to chase the Player in a later step.
- :paper plane: The other sprite should be a ``||sprites:SpriteKind.food||`` that the Player will collect.

---

**Hints!**

💡 *What code do you need to create a sprite?*

💡 *What should you click on to change the sprite's image?*

💡 *Where can you find the SpriteKind to change it?*

💡 *If your code is looking a little too long, click on the arrow next to the palette to shorten it!*

---

Great job: now you have 3 sprites in your game! But do you see an issue? They're all on top of each other! In the next step, you will change their positions!

![Logo](https://github.com/Code-Ninjas-Home-Office/arctic-code-quest/blob/master/images/CN-Logo.png?raw=true "CN Logo") 

## Set the sprite positions

All of your sprites should have their own variable name. This is how you will set their position!

To set a sprite's position in MakeCode, you will use **x-values** between **0-160** to set it's left-right position and **y-values** between **0-120** to set it's up-down position.

---

- :paper plane: Type a sprite's name and a dot operator ``||.||``. Select ``||sprites:set_position||`` from the code completion tool.
- :keyboard: Use the Tab key to select the x parameter, then type a number 0-160.
- :keyboard: Press Tab again to select the y parameter, then type a number 0-120.
- :play: Click the Play button on the emulator to see the sprite's position. Tinker with the x and y values until the sprite is where you want it to be!
- :paper plane: Now, follow these steps to set the position for the other 2 sprites!

---

**Pro-Tip**

💡 *Organize your code by placing the position code under the sprites.create code for each sprite!*

💡 *Use code comments to specify where the code for each sprite exists in the code editor. Code comments in Python start with a # sign.*

![Logo](https://github.com/Code-Ninjas-Home-Office/arctic-code-quest/blob/master/images/CN-Logo.png?raw=true "CN Logo")

```python
scene.set_background_image(ski_imgs.skyBackground)

#player sprite
my_sprite = sprites.create(ski_imgs.girlFront, SpriteKind.player)
# @highlight
my_sprite.set_position(50, 50)

#food sprite
candyCane = sprites.create(ski_imgs.candycane, SpriteKind.food)
# @highlight
candyCane.set_position(100, 100)

#enemy sprite
penguin = sprites.create(ski_imgs.penguinFront, SpriteKind.enemy)
# @highlight
penguin.set_position(100, 10)
```

## Move your Player sprite

You now have the basics of a game in place! Now you need to make your player move around the screen!

---

- :game controller: To start, type ``||controller:controller||`` and a dot operator ``||.||``, then select ``||controller:move_sprite||``.
- :game controller: Replace None with the variable name of the Player sprite.
- :play: Click the Play button to test out the sprite movement with the emulator's keypad or your computer's arrow keys.

Oh no! Your sprite can move off the screen! To fix this:
- :paper plane: Type the name of your sprite, a dot operator ``||.||``, and select ``||sprites:set_stay_in_screen||``. 
- :paper plane: Leave the parameter set to True so your Player sprite won't be able to leave the screen!

![Logo](https://github.com/Code-Ninjas-Home-Office/arctic-code-quest/blob/master/images/CN-Logo.png?raw=true "CN Logo") 

```python
scene.set_background_image(ski_imgs.skyBackground)

#player sprite
my_sprite = sprites.create(ski_imgs.girlFront, SpriteKind.player)
my_sprite.set_position(50, 50)
# @highlight
controller.move_sprite(my_sprite)
# @highlight
my_sprite.set_stay_in_screen(True)

#food sprite
candyCane = sprites.create(ski_imgs.candycane, SpriteKind.food)
candyCane.set_position(100, 100)

#enemy sprite
penguin = sprites.create(ski_imgs.penguinFront, SpriteKind.enemy)
penguin.set_position(100, 10)
```

## Make your Enemy chase the Player!

Making the Enemy sprite chase the Player sprite is really easy! 

- :paper plane: Type the Enemy sprite's variable name and a dot operator ``||.||``, then select ``||sprites:follow||`` from the code completion tool.
- :paper plane: Replace None with the Player sprite's variable name.
- :keyboard: Change the speed the Enemy follows the Player by typing a comma in the parentheses after the Player sprite name, followed by a number.
- :play: Click the Play button then tinker with the speed parameter to find a number that is just right!

![Logo](https://github.com/Code-Ninjas-Home-Office/arctic-code-quest/blob/master/images/CN-Logo.png?raw=true "CN Logo") 

```python
scene.set_background_image(ski_imgs.skyBackground)

#player sprite
my_sprite = sprites.create(ski_imgs.girlFront, SpriteKind.player)
my_sprite.set_position(50, 50)
controller.move_sprite(my_sprite)
my_sprite.set_stay_in_screen(True)

#food sprite
candyCane = sprites.create(ski_imgs.candycane, SpriteKind.food)
candyCane.set_position(100, 100)

#enemy sprite
penguin = sprites.create(ski_imgs.penguinFront, SpriteKind.enemy)
penguin.set_position(100, 10)
# @highlight
penguin.follow(my_sprite, 40)
```

## Eat your Food!

Make something happen when the Player sprite runs into the Food sprite using an ``||sprites:on_overlap||`` function!

---

- :paper plane: To make it easier to use the ``||sprites:on_overlap||`` function, click on ``||sprites:Sprites||`` in the code menu, then select this block and drag it into the coding canvas beneath the existing code:
![code](https://github.com/Code-Ninjas-Home-Office/arctic-code-quest/blob/master/images/overlap%20code%20python.png?raw=true "overlap code image")
- :mouse pointer: def means define, and defines the overlap function with 2 parameters: sprite and otherSprite. The code after the colon will run whenever the function is called.
- :paper plane: On the line where the ``||sprites:on_overlap||`` function is called (*not where it is defined!*) replace the second ``||sprites:SpriteKind.player||`` with ``||sprites:SpriteKind.food||`` to make something happen when those 2 sprite kinds overlap. 
- :paper plane: Inside the function definition, delete the word "pass" then type ``||sprites:otherSprite||`` to reference the Food sprite, followed by a dot operator ``||.||`` and the ``||sprites:set_position||`` function.
- :calculator: To set the Food sprite to a random position after each overlap, use ``||math: randint||`` for both the x and y parameters, setting the low and high range as 0 and 160 for x and 0 and 120 for y.

![Logo](https://github.com/Code-Ninjas-Home-Office/arctic-code-quest/blob/master/images/CN-Logo.png?raw=true "CN Logo") 

```python
scene.set_background_image(ski_imgs.skyBackground)

#player sprite
my_sprite = sprites.create(ski_imgs.girlFront, SpriteKind.player)
my_sprite.set_position(50, 50)
controller.move_sprite(my_sprite)
my_sprite.set_stay_in_screen(True)

#food sprite
candyCane = sprites.create(ski_imgs.candycane, SpriteKind.food)
candyCane.set_position(100, 100)

#enemy sprite
penguin = sprites.create(ski_imgs.penguinFront, SpriteKind.enemy)
penguin.set_position(100, 10)
penguin.follow(my_sprite, 40)

#sprite overlaps
# @highlight
def on_overlap(sprite, otherSprite):
    # @highlight
    candyCane.set_position(randint(0,160), randint(0,120))
    # @highlight
# @highlight
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_overlap)
```

## End the Game!

Use another ``||sprites:on_overlap||`` function to end the game when the Enemy sprite collides with the Player!

---
- :paper plane: Drag another ``||sprites:on_overlap||`` function from the ``||sprites:Sprites||`` code menu. Update the Sprite Kinds to ``||sprites:Player||`` and ``||sprites:Enemy||``.
- :circle: Inside, delete "pass" and type ``||game:game||`` and a dot operator ``||.||`` then select ``||game:game_over||`` from the code completion tool.
- :play: Click the Play button to see what happens when True is used in the ``||game:game_over||`` function. Then, see what happens when False is used.

![Logo](https://github.com/Code-Ninjas-Home-Office/arctic-code-quest/blob/master/images/CN-Logo.png?raw=true "CN Logo") 

```python
scene.set_background_image(ski_imgs.skyBackground)

#player sprite
my_sprite = sprites.create(ski_imgs.girlFront, SpriteKind.player)
my_sprite.set_position(50, 50)
controller.move_sprite(my_sprite)
my_sprite.set_stay_in_screen(True)

#food sprite
candyCane = sprites.create(ski_imgs.candycane, SpriteKind.food)
candyCane.set_position(100, 100)

#enemy sprite
penguin = sprites.create(ski_imgs.penguinFront, SpriteKind.enemy)
penguin.set_position(100, 10)
penguin.follow(my_sprite, 40)

#sprite overlaps
def on_overlap(sprite, otherSprite):
    candyCane.set_position(randint(0,160), randint(0,120))
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_overlap)

# @highlight
def on_overlap2(sprite, otherSprite):
    # @highlight
    game.game_over(False)
# @highlight
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_overlap2)
```

## Finishing your game!

Congratulations! You just finished the Day 1 code along! 

Get ready because you are now going to use everything you just learned to create your own original project using Python!

![Logo](https://github.com/Code-Ninjas-Home-Office/arctic-code-quest/blob/master/images/CN-Logo.png?raw=true "CN Logo") 


```python
scene.set_background_image(ski_imgs.skyBackground)

#player sprite
my_sprite = sprites.create(ski_imgs.girlFront), SpriteKind.player)
my_sprite.set_position(50, 50)
controller.move_sprite(my_sprite)
my_sprite.set_stay_in_screen(True)

#food sprite
candyCane = sprites.create(ski_imgs.candycane), SpriteKind.food)
candyCane.set_position(100, 100)

#enemy sprite
penguin = sprites.create(ski_imgs.penguinFront), SpriteKind.enemy)
penguin.set_position(100, 10)
penguin.follow(my_sprite, 40)

#sprite overlaps
def on_overlap(sprite, otherSprite):
    candyCane.set_position(randint(0,160), randint(0,120))
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_overlap)

def on_overlap2(sprite, otherSprite):
    game.game_over(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_overlap2)
```

```package
ski_imgs=github:kiki-lee/ski_imgs
```