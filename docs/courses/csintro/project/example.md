# Activity: Example Project Process

This is an example made for the Motion and Events project, but the overall process applies to all projects

## Initial Ideas

We came up with the idea to make a game that involves a person jumping on trampolines to score points.

After discussing the idea with others, we thought it would be cool if the trampolines moved around, making it harder for the player to score points

![Drawing](/static/courses/csintro/project/trampoline-drawing.png)


Here is a list of features that we figured we we would need to implement in order to make this game:

* Player constantly falling, but bounces on trampoline
* Trampolines being placed about the screen
* Score going up when the player bounces on a trampoline

## MVP

For our MVP, we are going to start by just making the player move around and bounce on a trampoline.

## Round 1
> 
> ### Build 
> We break down our features into simple tasks for us to do
> 
> We need to make a first draft of some sprites. These will be made quickly/sloppily for the purpose of testing and will be changed later
> 
> We need to make the player move. Both falling and left/right based on player input
> 
> We need to make the player bounce when they land on the trampoline
> 
> ![MVP](/static/courses/csintro/project/trampoline-mvp.gif) 
>
> https://makecode.com/_88Fae4627DEk
>
> ### Measure
> 
> We asked someone for feedback and this is what they said:
> * The sprites could be improved
> * The game is too easy
> * There is not much going on
> 
> 
> ### Learn
> 
> The feedback we got wasn't super helpful since it told us much of what we already know, but it's good to get a test out their to see if people like the overall idea.
> 
> After getting this feedback, we think it is important to add more of a challenge to the game. This would be the case of moving trampolines.
> 
## Round 2
> 
> ### Build
> 
> We know that we want to make our trampoline move around and make it more difficult for the player. 
> 
> We knew that we wanted the trampoline to move back and forth, but we struggled to find a way to do this. We know that we can set the velocity of the trampoline in the ``||loops:on start||`` block, but we had a difficult time finding a way to make the trampoline move in the opposite direction when it hit the side of the screen.
> 
> We looked back at the lessons and saw that the Sprite Overlap 2 lesson showed us how to bump a sprite in the opposite direction when they overlapped with another. Our solution to our problem would be to add sprites to the left and right side of the screen that would bump the trampoline back and forth
> 
> ![Version 2](/static/courses/csintro/project/trampoline-v2.gif) 
> 
> https://makecode.com/_4KoccVPCaixe
>
> ### Measure
> 
> We showed this version of our build to someone and their feedback was as follows:
> * Like that the trampoline moves
> * Find that the game is too hard. Suggested we make the trampoline bigger or adding more trampolines to land on
> 
> ### Learn
> 
> We know from our feedback that we are on the right track, but we need to make the game easier to play. The user suggested we make the trampoline bigger so we'll try to implement that. We'll also try to add multiple trampolines.
> 
## Round 3
> 
> ### Build
> 
> Making the trampoline bigger is simple enough as changing the sprite
> 
> To add more trampolines, it can get messy with all of the variables and walls and all that, so let's try to implement this feature using ``||sprites:create empty sprite||`` block. This will allow us to setup all of the walls and positions only once in the ``||sprites:on created||`` event.
> 
> We'll also use ``||math:random||`` so that the trampolines will be randomly placed on the screen.
>
> ![Version 3](/static/courses/csintro/project/trampoline-v3.gif) 
> 
> https://makecode.com/_9C7KhuiyR1Dh
> 
> ### Measure
> 
> We showed this build to someone and their feedback was:
> * Game was too random. Depending on the placement of the trampolines, the game was either too easy or impossible
> * If a game is playable, then you can just keep bouncing on the same trampoline and the game is boring
> * Found a bug with moving trampolines. Sometimes they get stuck in the wall
> 
> 
> ### Learn
> 
> When reflecting on this feedback, we see that there are many issues with the trampolines moving so we decide to scrap that feature in favor of static trampolines
> 
> We already have code that randomly places trampolines, so we decide that when the player lands on the trampoline that the trampoline should be removed and another one should appear on the screen.
> 
## Round 4
> 
> ### Build
> 
> We'll remove the code that makes the trampolines move
> 
> We'll destroy trampolines when the player lands on them and add another one somewhere on the screen
> 
> We'll change the initial position of the sprite so that it is easier to hit the trampolines
>
> ![Version 4](/static/courses/csintro/project/trampoline-v4.gif) 
> 
> https://makecode.com/_55XMm1cc6cTe
> 
> ### Measure
> 
> We showed our build to others and they loved it! The only feedback they had was to:
> * Make the sprites look nice
> * Add scoring
> 
> ### Learn
> 
> We interpret this feedback as that we are on the final stretch. The functionality is there, we just need to focus on the aesthetic and the user experience.
> 
## Round 5
> 
> ### Build
> 
> We make the sprites look nicer
> 
> Change the background color
> 
> We add a ``||info:change score by||`` block to adjust the score when the player hits a trampoline
> 
> https://makecode.com/_XcTRgaYW3T5p
> 
> ### Measure
> 
> We showed this version to someone and they liked it. The only feedback they had was that it didn't end when the player fell off of the screen.
> 
> 
> ### Learn
> 
> The only feedback we got was on when the game should end. Unfortunately, at the time of studying motion and events, we haven't learned how to end the game based on the player's position, so we cannot implement this feature yet. This is okay. It just means we'll have to learn a little more. We'll keep this in mind while we are learning other topics and when we learn a way to implement this, we'll update our game
> 


## End Result
![Final Result](/static/courses/csintro/project/trampoline-game-final.gif)
