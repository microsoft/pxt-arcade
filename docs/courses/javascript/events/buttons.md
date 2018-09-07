# Button Events

Button events very important for games and programs

because they are very important, there are multiple options available when writing these events; this makes the code necessary to run these events a bit more complex than other events

## Structure of Button Press Events

The first button press event to discuss is the event in which any button is pressed. In JavaScript, this looks like the following

```typescript
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("hello world");
});
```

![Auto complete for button events](/static/courses/javascript/events/controller-auto-complete.gif)

Description of parts:

* `controller`: namespace which houses methods and values relating to the controller
* `anyButton`: the button the event is derived from - in this case, `anyButton` allows the event to occur no which button is pressed
* `onEvent`: method used to assign a function for this event, similar to `game.onUpdate(..)`
* `ControllerButtonEvent`: an enum (like `SpriteKind`) to distinguish between the different types of button events
* `.Pressed`: the property of the `ControllerButtonEvent` to select - indicates that the event should trigger whenever the button is pressed.

## Student Task #1: convert provided code similar to above from anyButton to A (with lots of hints)

## Student Task #2: make a sprite bump left/right when left and right are pressed (making two events)

Example of ControllerButtonEvent.Released at least

## wrap up:

add A and / or B button events to case study game