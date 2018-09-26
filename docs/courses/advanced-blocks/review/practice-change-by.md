# Change By Practice

## Student Task #1: Egg Counter

Have you ever wanted to make a computer count eggs for you? No? Well now you can!

1. Set up sprite of your choice on start, and set a variable called 'eggCount' to 0. This is what we'll use to count our eggs
2. Using the ``||game:on game update every ||`` block, use ``||sprites:say||`` to display the egg count. To get more practice with "join", use the score in a sentence that says something like "There are 6 eggs!"
3. Add an ``||controller:on A button press block||`` that increases the number of eggs by 12 when A is pressed. Yay for buying eggs!
4. Add an ``||controller:on B button press block||`` that decreases the number of eggs by 1 when B is pressed. A delicious egg was eaten that day

### ~hint

``||variables:change by||`` will always add the number you tell it to to the variable you specify. It might be tricky to decrease the number eggs at first, but consider what types of numbers you can add to make the total smaller.

### ~

5. Add instructions ``||loops:on start||`` with ``||game:splash||`` to tell a new player what each of the buttons do, so that they know how to start buying eggs
6. We have one issue; we can eat eggs that don't exist! Use the ``||logic:if||`` block to make sure that we only eat eggs if we have eggs remaining - that is, if ``||logic:eggCount > 0||``. If the player tries to eat an egg that they don't have, use the ``||logic:else||`` condition to make it so the sprite says that they don't have any eggs left

## Student Task #2: Not a sprite, but a marathon

In this practice, you'll be moving a sprite across your screen with ``||sprite:change by||`` to update coordinates.

1. Make a sprite that the player will control in this game
2. Set variables ``||variables:xCoordinate||`` and ``||variables:yCoordinate||`` both to 32. These are what we will use to store the x and y locations of our sprite throughout the game
3. On game update, use the ``||sprites:set position||`` block to set the position of our sprite. Use ``||variables:xCoordinate||`` and ``||variables:yCoordinate||`` to specify the values so our program will become flexible
4. Add an ``||controller:on right button pressed||`` that changes our ``||variables:xCoordinate||`` variable by an amount. Choose anything you want - you can always change it later to be smoother
5. Add an ``||controller:on down button pressed||`` that changes our ``||variables:yCoordinate||`` variable by some amount as well

Now test out the code! You should be able to move your sprite down and to the right with the arrow keys
