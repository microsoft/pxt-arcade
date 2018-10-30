# Button Events

As shown in blocks, ``||controller:button events||`` are very important for games, as they serve as a way for the user to interact with the world the developer creates.

``||controller:Button events||`` in @boardname@ have a number of options that allow for precise control of how the user will player the games you make.

## Example #1: Basic Input

This example shows a single ``||controller:button event||``, and breaks down the difference pieces that make up the event.

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

* ``||controller:controller||``: namespace which contains functions and values relating to the controller
* ``||controller:anyButton||``: the button to set up the event for. ``||controller:anyButton||`` will trigger the event whenever a button is pressed
* ``||controller:onEvent||``: the function used to assign an event handler, similar to ``||game:game.onUpdate||``
* ``||controller:ControllerButtonEvent||``: an enum (like ``||sprites:SpriteKind||``) to distinguish between the different types of button events
* ``||controller:Pressed||``: the property of the ``||controller:ControllerButtonEvent||`` that was selected. This indicates that the event should occur when the given button is pressed

### ~hint

Another type of ``||controller:ControllerButtonEvent||`` is ``||controller:Released||``. This will occur when a button that was pressed is let go.

### ~

### ~hint

The auto-complete feature in the editor can be helpful when writing button events.

![Auto complete for button events](/static/courses/csintro3/events/controller-auto-complete.gif)

### ~

## Student Task #1: Press ``||controller:A||``!

1. Copy the code from the example above
2. Change the message that is ``||game:splash||``ed to "The A button was pressed"
3. Modify the event to instead only occur when the ``||controller:A||`` button is pressed, instead of ``||controller:anyButton||``

### ~hint

The ``||controller:controller||`` namespace contains a number of different buttons. You will need to select the ``||controller:A||`` button for this task, rather than ``||controller:anyButton||``

### ~

## Concept: ``||sprites:Sprites||`` and ``||controller:Buttons||``

A ``||sprites:Sprite||`` will often serve as the main character of a game. As such, ``||controller:button||`` events will often be used to control the player.

In previous lessons, ``||controller:controller.controlSprite||`` was introduced to easily control ``||sprites:sprites||``, but it is important to be able to control them using simple events as well. This way, you can change the way the sprite behaves to your liking, instead of having to stick with the default behavior.

## Example #2: To the Left

1. Review the code snippet below
2. Identify what code gets run when the event is triggered
3. Identify which ``||controller:button||``(s) cause the event to trigger

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player);
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x -= 5;
});
```

## Student Task #2: To the Right

1. Start with the code from example #2
2. Add another ``||controller:button event||`` that makes the ``||sprites:sprite||`` move to the right when then ``||controller:right||`` button is pressed
3. Move the ``||sprites:sprite||`` back and forth to verify that the 

## Example #3: Pressed and Released

1. Review the code snippet below and open it in the simulator
2. Press any button quickly, and identify what happens
3. After the ``||sprites:sprite.say||`` finishes, press **and hold** a button. Identify which event occurs
4. Release the button, and identify which event occurs

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let topSprite: Sprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player);
let bottomSprite: Sprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player);
topSprite.setPosition(scene.screenWidth() / 2, 40);
bottomSprite.setPosition(scene.screenWidth() / 2, 80);

controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    topSprite.say("Pressed", 1000);
});

controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    bottomSprite.say("Released", 1000);
});
```

## Student Task #3: Creating 

1. Start with the code from example #3
2. When the ``||controller:A||`` button is ``||controller:Pressed||``, create a ``||sprites:projectile||`` that starts at the ``||variables:bottomSprite||`` and flies upwards
3. When the ``||controller:B||`` button is ``||controller:Released||``, create a ``||sprites:projectile||`` that starts at the ``||variables:topSprite||`` and flies downwards

## What did we learn?

1. How are button events different than other events?
2. How is the specific button specified when creating a button event?
3. What is the difference between the ``||controller:ControllerButtonEvent||``s||controller: ``||controller:Pressed||`` and ``||controller:Released||``?
