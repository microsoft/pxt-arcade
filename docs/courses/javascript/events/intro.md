# Intro to Events

Use `game.onUpdate` to introduce events; skim over the function() syntax completely for now ("we'll learn more about this later") and just do a simple introduction to events here (main benefit of `game.onUpdate` here is that it only has the function as a parameter, making it easier to focus on the idea of calling a method to register an event)

very easy / simple examples to start with

```typescript
enum SpriteKind {
    Player,
    Enemy,
    Star
}

game.onUpdate(function () {
    let star = sprites.createProjectile(img`1`, 35, 0, SpriteKind.Star);
    star.y = Math.randomRange(0, scene.screenHeight());
    star.setFlag(SpriteFlag.Ghost, true);
})
```