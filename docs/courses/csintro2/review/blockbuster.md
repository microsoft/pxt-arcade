# Review: Making a Blockbuster

Movies have scripts for the entire crew to follow, to make sure everything is going according to plan.

![Blockbuster](/static/courses/csintro2/review/blockbuster.gif)

## Student Task #1: Adding an Intro

Set up the movie, and create a small introduction

1. Create a sprite for the lead actor in this movie. Name the sprites ``||variables:leadActor||``, of ``||sprites:kind||`` ``||sprites:LeadActor||``. Use ``||sprites:change y by||`` to move them closer to the bottom of the screen
2. Set a variable called ``||variables:time||`` to 0. This will represent the number of seconds that have passed in the movie
3. Create an ``||game:on game update every 1000 ms||`` event, and place an ``||logic:if then ... else||`` inside of the event. **After** the ``||logic:if then ... else||``, add 1 to ``||variables:time||`` (make sure this is below the ``||logic:logic||`` block, not inside of it)
4. Replace the ``||logic:true||`` with a ``||logic:0 < 0||``. Replace the first 0 in that comparison with ``||variables:time||``, and the second with a 3. If this condition is true, make the ``||variables:leadActor||`` ``||sprites:say||`` "enjoy the film!" for 1000 ms

## Student Task #2: Act One

Add the first section of the movie

1. Press the ``+`` to add an ``||logic:else if||`` section. Fill the condition with another ``||logic:0 < 0||``, checking if ``||variables:time||`` is less then 6
2. In this else if, create a ``||sprites:projectile||`` with an image of a bird flying across the screen. Watch the film; how many birds are created?
3. Add another ``||logic:else if||`` section, this time checking if ``||variables:time||`` is less than 9
4. In this ``||logic:else if||``, create a projectile with an image of a person, of ``||sprites:kind||`` ``||sprites:Person||``. Make them start at the same ``y`` position as the ``||sprites:LeadActor||``, move to the left across the screen
5. Create an ``||sprites:on overlap||`` between the ``||sprites:Person||`` and the ``||sprites:LeadActor||``. Make the ``||sprites:LeadActor||`` ``||sprites:say||`` "excuse me" for 200 ms when they overlap

## Student Task #3: Act Two

Create at least **4** more scenes of your choice, similar to the ones created in task #2. Be creative; use concepts you've learned in other sections to make sure these scenes show up exactly how you planned for them to.

## Student Task #4: Credits

In the final ``||logic:else||`` section, ``||game:splash||`` the names of the Director, Producer, the Lead Actor, and anyone else that helped create your film. Press the ``+`` in the ``||game:splash||`` block, and make the second text box list the persons title, so it shows up below their name.

After all of the names are ``||game:splashed||``, add a ``||game:game over||`` to end the film.