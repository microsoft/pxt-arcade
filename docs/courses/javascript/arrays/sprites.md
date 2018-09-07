# Arrays of Sprites

Just like in blocks, arrays can be created to store variables of any type. This allows for an easy way to handle complex behaviors. In this activity, we will use arrays of sprites to introduce some of the more advanced uses of arrays.

## Example -> sprite v array of sprite

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let player: Sprite = sprites.create(img`1`, SpriteKind.Player);
let enemies: Sprite[] = [sprites.create(img`5`, SpriteKind.Enemy),
                        sprites.create(img`7`, SpriteKind.Enemy)];
player.x -= 40;
enemies[0].x += 40;
```

note for students the difference between player and [player]

using pickRandom to pick one enemy

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let player: Sprite = sprites.create(img`1`, SpriteKind.Player);
let enemies: Sprite[] = [sprites.create(img`5`, SpriteKind.Enemy),
                        sprites.create(img`7`, SpriteKind.Enemy)];
player.x -= 40;
enemies[0].x += 40;
Math.pickRandom(enemies).say("I have been chosen!", 500);
``` 

## Student task

wrap the say line in an onUpdateInterval, make the student store the chosen enemy as a local variable in the event and use it
`let enemy = Math.pickRandom(enemies);` and `enemy.say(..)`
, and then bump the enemy up or down
`enemy.y += Math.randomRange(-10, 10)`


## Example 2: reintroduce array of sprites of kind

`sprite_list = sprites.allOfKind(SpriteKind.Player)`

maybe use create empty sprite and on create to make it more relevant than above example