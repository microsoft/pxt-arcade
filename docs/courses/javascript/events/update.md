# intro -> using an on game update loop in JavaScript

In TypeScript, events are registered using functions that accept other functions as parameters to run when the event occurs. To illustrate this, we will use the `game.onUpdateInterval()` method - which is the JavaScript equivalent of the commonly used ``||game: on game update every||`` block.

## Example

![Splash and Dash](/static/courses/javascript/events/splash-and-dash.gif)

```typescript
enum SpriteKind {
    Player,
    Enemy
}

function splashAndDash() {
    game.splash("Hello!");
    player.x += 5;
}

let player: Sprite = sprites.create(img`
1 1 1
1 1 1
1 1 1
`, SpriteKind.Player);
player.x = 0;
```

the base for them to start with, following gif to transition to

```typescript
enum SpriteKind {
    Player,
    Enemy
}

function splashAndDash() {
    game.splash("Hello!");
    player.x += 5;
}

let player: Sprite = sprites.create(img`
1 1 1
1 1 1
1 1 1
`, SpriteKind.Player);
player.x = 0;

game.onUpdateInterval(2000, splashAndDash);
```

## Anonymous Functions

The sample code produced by the toolbox had slightly different syntax than the functions that we are used to. These are called "anonymous functions" - they are created as function __expressions__, to be stored in a variable after creation.

For example, the following two pieces of sample code will behave in effectively the same way, even though they are created in different ways

```typescript
function splash() {
    game.splash("Hello!");
}
splash();
```

```typescript
let splash = function () {
    game.splash("Hello!");
}
splash();
```

Explain differences in how these behave

## convert prior code to use anonymous functions

Anonymous functions allow for functions that will only be used in one case to be created and used without giving a name to them. In the case of events, this is very useful to avoid creating functions that will only be used to pass them to the event.

The code from the first example using anonymous function

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let player: Sprite = sprites.create(img`
1 1 1
1 1 1
1 1 1
`, SpriteKind.Player);
player.x = 0;

game.onUpdateInterval(2000, function () {
    game.splash("Hello!");
    player.x += 5;
});
```

This behaves identically to how the above code works, without the requirement of making a unique name for the function being passed, and making it available unnecessarily within the rest of the code. This helps most when using multiple functions with distinct tasks - no need to make upArrowFunction, leftArrowFunction, rightArrowFunction, ... to handle button press events - just assign them directly and move on.