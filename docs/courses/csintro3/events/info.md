# Event category events

a bit content heavy so far, so this allows for a pretty easy review section. Teach the events in the info category (onCountdownEnd and onLifeZero) leveraging examples from prior sections, so that there can be an inherent review built into this lesson

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

info.onLifeZero(function () {

})
```

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

info.onCountdownEnd(function () {

})
```

## wrap up

add both events in some way (timed puzzle with countdown end, continue screen for onLifeZero that bumps up their health)