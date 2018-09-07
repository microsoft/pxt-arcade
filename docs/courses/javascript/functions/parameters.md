# Using Parameters

We can return stuff, how to give stuff

## Parameters

```typescript
function gimme(n: number): number {
    return n;
}

let num: number = gimme(5);
```

explain the parens and n: number inside them

returns the number passed when it is called

a bit more clear why with add

```typescript
function add(first: number, second: number): number {
    return first + second;
}

game.splash("first + second is " + add(1, 2));
game.splash("first + second is " + add(5, 10));
```

lets use a string parameter too

```typescript
function hello(name: string) {
    game.splash("Hello, " + name);
}

hello("bob");
hello("mary");
```

sprites work too!

```typescript
enum SpriteKind {
    Player,
    Enemy,
    Square
}

function move(player: Sprite) {
    player.x += 5;
}

let player = sprites.create(img`
1 1 1 
1 1 1 
1 1 1 
`, SpriteKind.Square);

for (let i = 0; i < 20; i++) {
    move(player);
    pause(500);
}
```
