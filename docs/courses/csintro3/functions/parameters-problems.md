## dropping in cut problems here

## Example #3a: Capslock

Parameters don't have to just be strings. They can be any type.

```typescript
function printHello(n: number, capslock: boolean) {
    for (let i = 0; i < n; i++) {
        if (capslock) {
            console.log("HELLO");
            console.log("WORLD");
        } else {
            console.log("hello");
            console.log("world");
        }
    }
}

printHello(3, true);
printHello(7, false);
```

cut from section because getting into three levels of nesting is a bit much for now; making them make this function (probably refactored as storing the variable first to reduce the nesting) would be a reasonable second to last task here

## Example #3b: Follow the Leader

Including ``||sprites:sprites||`` work too!

```typescript
function follow(follower: Sprite, leader: Sprite) {
    let diffX = leader.x - follower.x;
    let diffY = leader.y - follower.y;
    follower.vx = diffX;
    follower.vy = diffY;
}
```

This is conceptually too much to just skim over; make this the problem on this page with an explanation of what it's going to do so it's not just some random numbers that make sprites do something they can't see (as thre is no indication to run the code
