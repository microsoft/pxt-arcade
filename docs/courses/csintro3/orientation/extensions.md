# Using Corgio in JavaScript

explain how using extensions in JavaScript is just as easy as in blocks, helpful as a transition point to describing namespaces in a rudamentary fashion; this is fairly necessary in explaining what all the things they are typing in actually do (i.e. why is it Math.floor() instead of just floor, etc)

### Making a Corgio

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let myCorg: Corgi = corgi.create(SpriteKind.Player);
```

(Specifically serving as a reminder on enums being a thing)

Interacting with corgio -> using methods

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let myCorg: Corgi = corgi.create(SpriteKind.Player);
myCorg.horizontalMovement();
```

Specifically how you're calling a method on the corgio -> `myCorg.horizontalMovement();` is effectively the same as "tell myCorg to do the horizontalMovement task"

making an interesting corgio that can do the things

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let myCorg: Corgi = corgi.create(SpriteKind.Player);
myCorg.horizontalMovement();
myCorg.verticalMovement();
myCorg.updateSprite();
```


barking and stuff as a student activity (loops reminder, calling more methods, more practice with looking for properties / methods (either in toolbox, or autocomplete shown in sprites lesson))

```typescript
enum SpriteKind {
    Player,
    Enemy
}
let myCorg: Corgi = corgi.create(SpriteKind.Player);
myCorg.horizontalMovement();
myCorg.verticalMovement();
myCorg.updateSprite();
myCorg.addToScript("bark");
for (let i = 0; i < 50; i++) {
    myCorg.bark();
    pause(1000);
}
```

```package
corgio
```
