# Not Chase the Pizza

### ~button /#tutorial:/tutorials/chase-the-pizza

Try this tutorial!

### ~

## Introduction @unplugged

In this tutorial you will create a game with 2 sprites, a 
**Player** sprite and a **Food** sprite.  

[__*Testing*__](#docs:/reference/controller "speed in a direction") the pop-out doc.

The goal of the game is to eat as much pizza as you can before time 
runs out! 

Each time your player catches the pizza, you gain points and the 
countdown starts over.
<hr/>
![Game animation](/static/tutorials/chase-the-pizza.gif)

## Step 1

🎨 **Let's start with a background color to make this pop** 🎨
<hr/>

🔲 Open the ``||scene:Scene||`` category and grab a 
``||scene:set background color to [ ]||`` block.  
Drag that into the empty **on start** container already in the workspace.  

🔲 Click the grey oval in the new block. The **color palette** will open.
Choose your background color!  
<hr/>

To see what your selection looks like in your game, look at the 
**simulator window** on the left.


```blocks
//@highlight
scene.setBackgroundColor(7)
```
