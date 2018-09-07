# Sprite Overlap Events

start with example code

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let mySprite = sprites.create(img`1 1 1`, SpriteKind.Player);
controller.controlSprite(mySprite, 100, 100);

let enemy = sprites.create(img`
5 2 5
2 5 2
5 2 5`, SpriteKind.Enemy);
enemy.x += 50;
```

walk through adding overlap event using standard function declaration syntax

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let mySprite = sprites.create(img`1 1 1`, SpriteKind.Player);
controller.controlSprite(mySprite, 100, 100);

let enemy = sprites.create(img`
5 2 5
2 5 2
5 2 5`, SpriteKind.Enemy);
enemy.x += 50;

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, eventForOverlap)

function eventForOverlap(sprite: Sprite, otherSprite: Sprite) {
    sprite.say("ouch!", 250);
}
```

then convert to being an anonymous function with parameters (with an explanation of the syntax calling back to prior lesson)

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let mySprite = sprites.create(img`1 1 1`, SpriteKind.Player);
controller.controlSprite(mySprite, 100, 100);

let enemy = sprites.create(img`
5 2 5
2 5 2
5 2 5`, SpriteKind.Enemy);
enemy.x += 50;

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
    sprite.say("ouch!", 250);
})
```

specifically note the first two parameters (the sprite kinds) being used to specificy when the event ought to occur.

Tasks should just be making their own overlap events (there's not really much that will be a significant departure from the example, as the focus is on the overlap event - it will basically just be repetition )

## wrap up

add a few on overlap events - probably one for scoring points on getting coins, and another for losing life on touching enemies