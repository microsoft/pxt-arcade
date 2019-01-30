# Problem Set: Extensions

This section contains a number of selected problems for the Extensions section.

It is recommended that you review the problems, and complete a few before moving
on to the next section.

## Problem #1: Jump Around

Corgio is much more fun when the corgi can jump around.

Add a ``||corgio:Corgio||`` into the game.

Use the ``||corgio:verticalMovement||`` function to allow the user to make
the ``||corgio:Corgio||`` jump up and down.

## Problem #2: A Learning Experience

Programming can be thought of as teaching a computer to complete a task.
In this problem, you will teach the computer to ``||corgio:teach||`` a
``||corgio:Corgio||`` different words.

Add a ``||corgio:Corgio||`` into the game, and store it in the variable ``||variables:myCorg||``.

Teach it the following words using ``||corgio:myCorg.addToScript||``:

* "Howdy"
* "Partner"
* "Ruff"
* "Hello World"

Make the ``||corgio:Corgio||`` ``||corgio:bark||`` using ``||corgio:myCorg.bark||``.
Add a ``||loops:loop||`` to make it bark 10 times, with a 1000 ms ``||loops:pause||``
between each ``||corgio:bark||``.

## Problem #3: Conceited Corgi

Corgis need a lot of attention. 

Create a ``||corgio:Corgio||``, and make it move horizontally and update the sprite as it moves.

Set a new background image using ``||scene:scene.backgroundImage||``.

Finally, use the ``||corgio:follow||`` function to make the camera
follow the ``||corgio:Corgio||``.

## Problem #4: Multiplayer Mayhem

Games are better when you play with others.

Import the ``||controller:local-multiplayer||`` extension.

Use the ``||controller:controller.setPlayerSprite||`` and
``||controller:controller.controlPlayer||`` functions to make a game
that allows two players to move sprites around the screen.

## Problem #5: Time Your Throw

Import the ``||darts:darts||`` extension.

Use to ``||darts:darts.create||`` a dart called ``||variables:myDart||``.

Use the ``||darts:myDart.setTrace||`` and ``||darts:myDart.controlWithArrowKeys||``
functions to allow the player to control the ``||darts:dart||``.

``||loops:Pause||`` for 10,000 ms (10 seconds), and then use
``||darts:myDart.throwDart||`` to throw the dart.

```package
corgio
darts
```
