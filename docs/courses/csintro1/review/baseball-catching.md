# Review: Baseball Catching

Whether a baseball is thrown or hit, one thing is certain: someone is trying to catch it. To represent this, build a simple game where the goal is to catch the baseballs that fly across the screen.

![Final Baseball Catching Game](/static/courses/csintro1/review/baseball-catching.gif)

## Student Task #1: Build a Mitt

Start the project, and create a mitt for the player to control.

1. Create a new project in @boardname@
2. Create a new sprite representing a mitt
3. Change the variable name from ``||variables:mySprite||`` to ``||variables:mitt||``, and the ``||sprites:kind||`` from ``Player`` to ``Mitt``
4. Make ``||variables:mitt||`` move based off the direction keys using ``||controller:move sprite with buttons||``
5. Make ``||variables:mitt||`` stay in screen using ``||sprites:set mySprite stay in screen on||``

## Student Task #2: Throwing Balls

Add balls for the player to attempt to collect.

1. Get an ``||game:on game update every 500 ms||`` event
2. Create a ``||sprites:projectile from side||`` representing a baseball inside the ``||game:on game update every||`` event and change the variable name from ``||variables:projectile||`` to ``||variables:baseball||``
3. Make ``||variables:baseball||`` move randomly in the `x` and `y` directions using ``||math:pick random 0 to 10||`` for the initial ``||sprites:vx||`` and ``||sprites:vy||``: make the range from `-50` and `50`
4. Set ``||variables:baseball||`` to ``||sprites:kind||`` `Baseball`

## Student Task #3: Gameplay

Add gameplay elements that make the game interesting to play.

1. Add a ``||info:countdown||`` of 20 seconds in the ``||loops:on start||``
2. Create an ``||sprites:on overlap||`` event between sprites of ``||sprites:kind||`` ``Mitt`` and sprites of ``||sprites:kind||`` ``Baseball``
3. Inside the ``||sprites:on overlap||`` event, ``||sprites:destroy||`` the ``Baseball``, and add `1` to the score
4. Make the ``Mitt`` 'bounce' when in the overlap event, by
    * changing ``Mitt``'s ``y`` by -5
    * ``||loops:pause||`` for 100 ms
    * changing ``Mitt``'s ``y`` by 5

### ~hint

#### Challenges

Extend the material from this review by completing the following challenges!

* When a ball is caught, use ``||music:play sound power up||`` to play music
* Add another projectile that is created every 15 seconds, of ``||sprites:kind||`` ``||sprites:TimeBonus||``. Create an overlap event so that when the ``||variables:Mitt||`` overlaps with the ``||sprites:TimeBonus||``, the ``||info:countdown||`` is reset to 20 seconds

### ~
