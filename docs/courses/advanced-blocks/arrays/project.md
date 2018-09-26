# Activity: Arrays Project

Make games of your choosing!

![Enemy Following Player](/static/courses/advanced-blocks/arrays/enemy-follow.gif)

![Hazardous](/static/courses/advanced-blocks/arrays/hazards.gif)

From what we learned in the previous lessons we should be able to make some great games.

### Concepts Learned
* Sprites / Projectiles
* Controller (dx) and ``||controller:control sprite with||``
* Overlap Events / sprite ``||sprites:kind||``
* Function
* Random
* Score / life / Countdown
* Stay in screen / ghost
* Set image
* Sprite say / Splash

## Student Task #1: Initial Ideas
1. Think of 3 ideas for a game that you would like to make that use some of these concepts learned
2. On a piece of paper, sketch out what each game will look like
3. Discuss your ideas with a partner. Talk about what you each like about the ideas and what you don't like
4. Discuss with your partner about what features would need to be implemented for each game


## Student Task #2: MVP
An MVP, or Minimum Viable Product is what we call the simplest version of a product that has some working features. The idea is that you make a very simple foundation for your product and that you consistently add in features while getting feedback from users.

1. Pick one of your ideas that you want to turn into a full game
2. Identify what crucial functionality is required for the game. Think about what the one thing about your game that makes it unique is
3. Make a list of these key features that you need to implement
4. Transition into the development cycle and start making your game

### ~hint

For an MVP game, you might want to avoid spending too much time getting bogged down making the perfect image for your sprite; instead, you can always just use some of the pre-made sprites in the Gallery - that way you can focus on getting the concept for your game into a functional state, and personalize it later on!

![Using Gallery](/static/courses/advanced-blocks/motion-and-events/image-gallery.gif)

### ~

## Student Task #3: Development Cycle

This is the development process we will use to turn an idea into a finished product. It works by adding small changes and getting feedback as you develop. When you get to the end of the Learn section, if there are ideas that you would still like to implement, circle back to the Build section and start implementing those ideas.

Repeat until your game has at least **7** items from the list of Concepts Learned, you use arrays in your game, **and** you are satisfied with your project. If more time is available, make a MVP for another one of your original ideas and begin the development cycle on it.

### ~hint

[For a guided example of this process, look here](/courses/advanced-blocks/example-project-process)
### ~

> ### Build
> We will implement a list of features
> 1. Break down what tasks need to be down for each feature you want to implement
> 2. Make a plan for how each one of tasks will get done
> 3. Complete the tasks needed to implement these features
>
>
> ### Measure
> We will gather feedback about our game from an outside source
> 1. Find someone to test your current build with
> 2. Give a 15-30 second pitch of what your game is supposed to be
> 3. Have them play your game
> 4. Get their feedback. What do they like about the game? What would they like to be improved? How would they like it to be improved?
>
>
> ### Learn
> We will interpret our feedback into a list of features that we want to implement
> 1. Reflect on the feedback you got from users testing your game
> 2. Think about what features you would like to add based on what users want
> 3. Prioritize what features are most important to implement

## Challenge

Build an key collecting MVP game using an array of boolean values to keep to keep track of which keys have been collected.

![Key Collecting Game](/static/courses/advanced-blocks/arrays/key-game.gif)

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

### [Teacher Material](/courses/advanced-blocks/about/teachers)