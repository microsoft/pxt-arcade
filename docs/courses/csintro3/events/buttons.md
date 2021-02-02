# Button Events

As shown in blocks, ``||controller:button events||`` are very important for games,
as they serve as a way for the user to interact with the world the developer creates.

``||controller:Button events||`` in @boardname@ have a number of options that
allow for precise control of how the user will player the games you make.

## Example #1: Basic Input

This example shows a single ``||controller:button event||``,
and breaks down the difference pieces that make up the event.

1. Review the code below
2. Identify what happens when a button is pressed
3. Review the descriptions below to identify how the code snippet works

```typescript
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    // Code that runs when the button is pressed
    game.splash("A button was pressed");
});
```

### Breaking down the event

* ``||controller:controller||``: namespace which contains functions
and values relating to the controller
* ``||controller:anyButton||``: the button to set up the event for.
``||controller:anyButton||`` will trigger the event whenever a button is pressed
* ``||controller:onEvent||``: the function used to assign an event handler,
similar to ``||game:game.onUpdate||``
* ``||controller:ControllerButtonEvent||``: an enum (like ``||sprites:SpriteKind||``)
to distinguish between the different types of button events
* ``||controller:Pressed||``: the property of the ``||controller:ControllerButtonEvent||``
that was selected.
This indicates that the event should occur when the given button is pressed

### ~hint

The auto-complete feature in the editor can be helpful when writing button events.

![Auto complete for button events](/static/courses/csintro3/events/controller-auto-complete.gif)

### ~

## Student Task #1: Press ``||controller:A||``!

1. Copy the code from the example above
2. Change the message that is ``||game:splash||``ed to "The A button was pressed"
3. Modify the event to instead only occur when the ``||controller:A||``
button is pressed, instead of ``||controller:anyButton||``

### ~hint

The ``||controller:controller||`` namespace contains a number of different buttons.
You will need to select the ``||controller:A||`` button for this task,
rather than ``||controller:anyButton||``

### ~

## Concept: ``||sprites:Sprites||`` and ``||controller:Buttons||``

A ``||sprites:Sprite||`` will often serve as the main character of a game.
As such, ``||controller:button||`` events will often be used to control the player.

In previous lessons, ``||controller:controller.moveSprite||`` was introduced
to easily control ``||sprites:sprites||``,
but it is important to be able to control them using simple events as well.
This way, you can change the way the sprite behaves to your liking,
instead of having to stick with the default behavior.

## Example #2: To the Left

1. Review the code snippet below
2. Identify what code gets run when the event is triggered
3. Identify which ``||controller:button||``(s) cause the event to trigger

```typescript
let mySprite: Sprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player);
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x -= 5;
});
```

## Student Task #2: To the Right

1. Start with the code from example #2
2. Add another ``||controller:button event||`` that makes the ``||sprites:sprite||``
move to the right when then ``||controller:right||`` button is pressed
3. Move the ``||sprites:sprite||`` back and forth to verify that the

## Concept: Pressed, Released, and Repeated

There are **three** different types of ``||controller:ControllerButtonEvents||``,
that occur based off the different states of the ``||controller:Buttons||``.

## Example #3: Button Set Up

1. Review the code snippet below and open it in the simulator
2. Press any button quickly, and identify what happens
3. After the ``||sprites:sprite.say||`` finishes,
press **and hold** the ``||controller:A||`` button.
Identify which events occurs
4. Release the button, and identify which event occurs

```typescript
let topSprite: Sprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player);
let middleSprite: Sprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player);
let bottomSprite: Sprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player);
topSprite.y = 30;
middleSprite.y = 60;
bottomSprite.y = 90;

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    topSprite.say("Pressed", 1000);
});

controller.A.onEvent(ControllerButtonEvent.Repeated, function() {
    middleSprite.say("Repeated", 1000);
});

controller.A.onEvent(ControllerButtonEvent.Released, function () {
    bottomSprite.say("Released", 1000);
});
```

## Student Task #3: Play Catch

![Animation of completed task](/static/courses/csintro3/events/button-event-types.gif)

1. Start with the code from example #3
2. When the ``||controller:down||`` button is ``||controller:Pressed||``,
create a ``||sprites:projectile||`` that starts at the ``||variables:bottomSprite||``
and flies **upwards**
3. When the ``||controller:up||`` button is ``||controller:Released||``,
create a ``||sprites:projectile||`` that starts at the ``||variables:topSprite||``
and flies **downwards**
4. When the ``||controller:right||`` button is held (``||controller:Repeated||``),
increase the ``||info:score||`` by 1

### ~hint

The ``||controller:Repeated||`` ``||controller:Button||`` event can modified using
two properties available on each button: ``repeatDelay`` and ``repeatInterval``.

``repeatDelay`` is the time delay, in milliseconds,
between when the button is first pressed,
and when the button repeat should start to trigger.

``repeatInterval`` is the delay between each occurence of the event.

In the snippet below, the ``repeatDelay`` is set so that the score won't be changed
until after the button has been held for 1 full second,
and the ``repeatInterval`` will cause the score to change every fifth
of a second the button is held after that point.

```typescript
controller.A.repeatDelay = 1000;
controller.A.repeatInterval = 200;

controller.A.onEvent(ControllerButtonEvent.Released, function () {
    info.changeScoreBy(1);
});
```

### ~

## What did we learn?

1. How are button events different than other events?
2. How is the specific button specified when creating a button event?
3. What is the difference between the three types of ``||controller:ControllerButtonEvent||``s,
``||controller:Pressed||``, ``||controller:Released||``, and ``||controller:Repeated||``?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/events/buttons-problems) for this
section to review the material and practice the concepts introduced in this section.

### ~

### ~hint

## Case Study

### Repeating Lasers

Having to press the ``||controller:A||`` button each time you want to fire the laser
can be a bit annoying; instead, you should just be able to hold down the button.

Add an ``||controller:on A button Released||`` event in the ``ship`` namespace
that fires a ``Laser`` like the ``||controller:on A button Pressed||`` event
(consider using a helper function that is called from both events).

Set the ``||controller:A||`` button ``repeatInterval`` to 400,
so that the lasers get fired every 200ms.

### Limited Charge

With lasers thare repeat as long as the button is held,
the game becomes a bit too easy.
Add a charge level that limits how many lasers can be fired at once.

To do this, keep two more variables in the ``ship`` namespace:
``||variables:maxCharge||``, to keep track of the max number Lasers the
Player can fire at a time, and ``||variables:currentCharge||``,
which represents the number of Lasers remaining
(set it to ``||variables:maxCharge||`` to start).

Whenever the player tries to fire a ``Laser``
(by pressing or holding the ``||controller:A||`` button),
first check if they have energy remaining (``currentCharge > 0``).
If they can, decrement ``||variables:currentCharge||`` and create a
``Laser`` ``||sprites:projectile||``; otherwise, do nothing.

This makes the game a bit too hard, as the energy doesn't ever replenish;
to fix this, create an ``||game:on game update interval 750ms||`` event.
In this event, first check that ``currentCharge < maxCharge``;
if it is, increment currentCharge.
This way, whenever the player fires ``Laser``s,
``||variables:currentCharge||`` will return to ``||variables:maxCharge||`` over time.

### Solution

```typescript-ignore
namespace ship {
    export let player: Sprite = initialize();
    export let maxCharge = 3;
    export let currentCharge = maxCharge;

    /**
     * @returns a player sprite that moves with the directional buttons
     */
    function initialize(): Sprite {
        let sprite = sprites.create(spritesheet.player, SpriteKind.Player)
        controller.moveSprite(sprite, 80, 30);
        controller.A.repeatInterval = 400;
        sprite.x = screen.width / 2;
        sprite.y = screen.height - 20;
        sprite.setStayInScreen(true);
        return sprite;
    }

    // When the player presses A, fire a laser from the spaceship
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        fireLaser();
    });

    // When the player holds A, also fire the laser
    controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
        fireLaser();
    });

    /**
     * Fires a laser from the player's ship if they have the energy to do so
     */
    function fireLaser() {
        if (currentCharge > 0) {
            currentCharge--;
            sprites.createProjectile(spritesheet.laser, 0, -40, SpriteKind.Laser, player);
        }
    }

    game.onUpdateInterval(750, function () {
        if (currentCharge < maxCharge) {
            currentCharge++;
        }
    });
}
```

### ~