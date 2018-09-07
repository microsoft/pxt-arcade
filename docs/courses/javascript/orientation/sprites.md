# Sprites and stuff

## Creating and controlling sprite in JavaScript

```typescript
let player: Sprite = sprites.create(img`
1 1 1
1 1 1
1 1 1
`, 0);
controller.controlSprite(player, 100, 100);
```

### Explain the different parts of above code: including

* type of a sprite is "Sprite"
* calling a method to return a sprite, like Math.round() returns a number
* template string images (... think on how to explain this nicely a bit)
* controller.controlSprite -> a method call that takes in the sprite, and makes it move
* the 0 being the kind

## Using kinds

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let player = sprites.create(img`
1 1 1 
1 1 1 
1 1 1 
`, SpriteKind.Player);
controller.controlSprite(player, 100, 100);
```

* Really have to explain enums, as otherwise things get messy too quickly with regards to sprite overlaps / etc
    * Enums allow for defining a group of named constants
    * Allow developers to more clearly convey what values mean - SpriteKind.Player is easier to identify / read than 0, and SpriteKind.Enemy is easier to identify than 1, etc

## Example using / adding a new kind

```typescript
enum SpriteKind {
    Player,
    Enemy,
    Square
}

let player = sprites.create(img`
1 1 1 
1 1 1 
1 1 1 
`, SpriteKind.Square);
controller.controlSprite(player, 100, 100);
```

## Task make them add 2 new kinds

```typescript
enum SpriteKind {
    Player,
    Enemy,
    Square,
    Circle,
    Diamond
}

let player = sprites.create(img`
1 1 1 
1 1 1 
1 1 1 
`, SpriteKind.Player);
controller.controlSprite(player, 100, 100);
```

## Sprite Properties and Methods

Explain that properites are basically variables contained within the sprite object

Auto complete gif here to show how they can identify all the public properties by typing the name of the variable and a dot

![Auto Complete](/static/courses/javascript/orientation/auto-complete.gif)

### Using a property

changing x to move, also showing `pause()` to make the movement visible

```typescript
enum SpriteKind {
    Player,
    Enemy,
    Square
}

let player = sprites.create(img`
1 1 1 
1 1 1 
1 1 1 
`, SpriteKind.Square);

pause(500)
player.x += 20
```

pauses half a second, then bumps player over 20. Show it being equivalent to change by block -> making them convert back and forth to see

more practice with properties; use in a loop, move in a square, etc, etc; for example,

```typescript
enum SpriteKind {
    Player,
    Enemy,
    Square
}

let player = sprites.create(img`
1 1 1 
1 1 1 
1 1 1 
`, SpriteKind.Square);

for (let i = 0; i < 5; i++) {
    pause(500)
    player.x += 20
}
```