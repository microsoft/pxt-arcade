# Activity: Arrays Project

Make games of your choosing!

![Enemy Following Player](/static/courses/csintro/arrays/enemy-follow.gif)

![Hazardous](/static/courses/csintro/arrays/hazards.gif)

From what we learned in the previous lessons we should be able to make some great games.

## Student Task #1:

1. Generate several quick game ideas (at least 3) and discuss with another student on what is good and what can be improved
2. Pick the game to be built and design a simplest version of that game to start with. We call this a MVP or Minimum Viable Product. It is the simplest version of a a product that has some working features
3. Make the MVP fast - not perfect. Test it and show it to others for feedback. Decide which features you will add to the game
4. **Use arrays in your game:** Use one or more of the following in implementing your game
    * use an array of sprites or numbers
    * use ``||sprites:array of sprites of kind||``
    * use ``||scene:array of all tiles||``
5. Use at least **7** of these following items in creating a game:
    * Sprites / Projectiles
    * Controller (dx) and ``||controller:control sprite with||``
    * Overlap Events / sprite ``||sprites:kind||``
    * Function
    * Random
    * Score / life / Countdown
    * Stay in screen / ghost
    * Set image
    * Sprite say / Splash
    * create / on create
6. Repeat this process as time allows, until you've created as many games as required for the project

## Challenge

Build an key collecting MVP game using an array of boolean values to keep to keep track of which keys have been collected.

![Key Collecting Game](/static/courses/csintro/arrays/key-game.gif)

### ~hint

For a game with three keys, you should
* Start with an array that contains three ``||logic:false||`` values
* Create three keys with different ``||sprites:kind||``s - for example, ``||sprites:FirstKey||``, ``||sprites:SecondKey||``, and ``||sprites:ThirdKey||``
* Create overlap events between the player and each kind of key - in one, ``||arrays:set value at 0||`` of the array to be true, another ``||arrays:set value at 1 to true||``, and the last ``||arrays:set value at 2 to true||``
* To check if all keys have been collected, use ``||arrays:get value at||`` to get the three boolean values, and use ``||logic:and||`` to combine them.

### ~

## What did we learn? 

1. What did you learn making a MVP version of the game? What was useful and what was difficult?
2. Were items in the list of elements of a game to use in the game were not used? Why? If all were used explain which ones were essential to the game versus less essential elements of a game.

### [Teacher Material](/courses/csintro/about/teachers)