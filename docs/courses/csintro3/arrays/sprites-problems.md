# Problem Set: Arrays of Sprites

This section contains a number of selected problems for the Arrays of Sprites section.

It is recommended that you review the problems, and complete a few before moving on to the next section.

## Problem #1: Cheer the Team

Create an ``||arrays:Array||`` of ``||sprites:Sprites||`` that represent the crowd in a sports game. Fill it with at least 5 different sprites, and place them in different locations on the screen.

Use an ``||game:on update interval||`` event that occurs every **5 seconds** to make the entire crowd ``||sprites:say||`` something to cheer on their team for 2 seconds. For example, they could ``||sprites:say||`` "Go team go!".

## Problem #2: Stop the Stars

Create a star field like the one from the [Star Field](/#tutorial:tutorials/star-field) tutorial.

Add an ``||controller:on any button pressed||`` event that **stops** all the stars in their current position, so that the stars that are currently on the screen stay where they are.

## Problem #3: Weird Asteroids!

Create an ``||arrays:Array||`` with three ``||sprites:Sprites||``. Give each of these an image representing an asteroid, and place them in a random location at the top of the screen. Give them an initial ``||sprites:x||`` and ``||sprites:y||`` so that they slowly move down the screen at an angle.

Create an ``||game:on update interval||`` event that occurs every 1000 ms. In it, reverse each ``||sprites:Sprite||``'s ``||sprites:vx||``, so that it moves down the screen alternating between moving left and right.

## Problem #4: Fireworks

The code snippet below can be used to create fireworks that fly up the screen. However, there is one problem: they don't explode!

```typescript
enum SpriteKind {
    Firework,
    Particle
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let firework: Sprite = sprites.create(img`
    1
    1
    `, SpriteKind.Firework);
    firework.vy = -15;
    firework.setPosition(Math.randomRange(0, screen.width), screen.height);
    firework.setFlag(SpriteFlag.Ghost, true);
    firework.setFlag(SpriteFlag.AutoDestroy, true);
});

function randomizeParticleColor(particle: Sprite) {
    particle.image.fill(Math.randomRange(1, 14))
}
```

Add an ``||controller:on B button pressed||`` event that will explode a firework. It should:

* Obtain an ``||arrays:Array||`` of all fireworks
* ``||logic:If||`` there are not any fireworks on the screen, do nothing
* Otherwise, ``||math:pick a Firework at random||``
* Create thirty ``||sprites:Particle||``s, with random ``||sprites:x||`` and ``||sprites:y||`` velocities. Set these ``||sprites:Particle||``s to all start at the chosen ``||sprites:Firework||``
* Use a 1 pixel image (``||images:img`1`||``) as the image for these particles, and ``||functions:randomizeParticleColor||`` to set the particle to be a random color
* Set each ``||sprites:Particle||`` to have ``||sprites:AutoDestroy||`` turned on, so that they get destroyed when they leave the screen
* After creating all thirty particles, ``||sprites:destroy||`` the chosen ``||sprites:Firework||``

### ~hint

If the game starts to move slowly after you create and explode multiple fireworks, you can set each ``||sprites:Particle||`` to be a ``||sprites:Ghost||``; this will make it so the game knows to ignore collisions, and allow the code to run faster.

### ~