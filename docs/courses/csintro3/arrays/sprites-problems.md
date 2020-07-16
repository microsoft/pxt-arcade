# Problem Set: Arrays of Sprites

This section contains a number of selected problems for the Arrays of Sprites section.

It is recommended that you review the problems, and complete a few before moving
on to the next section.

## Problem #1: Cheer the Team

Create an ``||arrays:Array||`` of ``||sprites:Sprites||`` that represent the
crowd in a sports game. Fill it with at least 5 different sprites,
and place them in different locations on the screen.

Use an ``||game:on update interval||`` event that occurs every **5 seconds** to make
the entire crowd ``||sprites:say||`` something to cheer on their team for 2 seconds.
For example, they could ``||sprites:say||`` "Go team go!".

## Problem #2: Stop the Stars

Create a star field like the one from the
[Star Field](/#tutorial:/tutorials/star-field) tutorial.

Add an ``||controller:on any button pressed||`` event that **stops** all the stars
in their current position, so that the stars that are currently on the screen stay
where they are.

## Problem #3: Weird Asteroids!

Create an ``||arrays:Array||`` with three ``||sprites:Sprites||``.
Give each of these an image representing an asteroid,
and place them in a random location at the top of the screen.
Give them an initial ``||sprites:x||`` and ``||sprites:y||``
so that they slowly move down the screen at an angle.

Create an ``||game:on update interval||`` event that occurs every 1000 ms.
In it, reverse each ``||sprites:Sprite||``'s ``||sprites:vx||``,
so that it moves down the screen alternating between moving left and right.

## Problem #4: Fireworks

The code snippet below can be used to create fireworks that fly up the screen.
However, there is one problem: they don't explode!

```typescript
namespace SpriteKind {
    export const Firework = SpriteKind.create();
    export const Particle = SpriteKind.create();
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let firework: Sprite = sprites.create(img`
    1
    1
    `, SpriteKind.Firework);
    firework.vy = -15;
    firework.setPosition(randint(0, screen.width), screen.height);
    firework.setFlag(SpriteFlag.Ghost, true);
    firework.setFlag(SpriteFlag.AutoDestroy, true);
});

function randomizeParticleColor(particle: Sprite) {
    particle.image.fill(randint(1, 14))
}
```

Add an ``||controller:on B button pressed||`` event that will explode a firework.
It should:

* Obtain an ``||arrays:Array||`` of all fireworks
* ``||logic:If||`` there are not any fireworks on the screen, do nothing
* Otherwise, ``||math:pick a Firework at random||``
* Create thirty ``||sprites:Particle||``s,
with random ``||sprites:x||`` and ``||sprites:y||`` velocities.
Set these ``||sprites:Particle||``s to all start at the chosen ``||sprites:Firework||``
* Use a 1 pixel image (``||images:img`1`||``) as the image for these particles,
and ``||functions:randomizeParticleColor||`` to set the particle to be a random color
* Set each ``||sprites:Particle||`` to have ``||sprites:AutoDestroy||`` turned on,
so that they get destroyed when they leave the screen
* After creating all thirty particles, ``||sprites:destroy||``
the chosen ``||sprites:Firework||``

### ~hint

If the game starts to move slowly after you create and explode multiple fireworks,
you can set each ``||sprites:Particle||`` to be a ``||sprites:Ghost||``;
this will make it so the game knows to ignore collisions,
and allow the code to run faster.

### ~

## Problem #5: Chase the Fruit

Create a game where ``Person`` ``||sprites:sprites||`` chase
a ``Fruit`` the player controls around the screen,
without all the ``||sprites:sprites||`` bunching up together.

![Animation of people chasing fruit in a game](/static/courses/csintro3/arrays/chase-the-fruit.gif)

Review the problem **Pushing the Food** from the
[Overlap Problems](/courses/csintro3/events/overlap-problems) section.
You should start with a solution to that problem,
with a few changes:

* The ``Fire`` should be changed to a ``Person``,
with an appropriate ``||images:image||``
* The ``Food`` ``||images:image||`` should be changed to a fruit
* The ``||sprites:overlap||`` event should be modified to be between
``Person`` and ``Person``,
so that it will occur between any ``Person`` ``||sprites:sprites||``
* The ``Food`` ``||controller:moves with buttons||``,
instead of the ``Person``

Next, make all ``Person`` ``||sprites:sprites||`` follow the ``Fruit``,
as shown in [Task #3 from the Sprites section](/courses/csintro3/arrays/sprites).
Now, the ``Person`` ``||sprites:sprites||`` will follow the fruit around the screen,
bumping off each other so they do not all go into the same location.

If you want to make the following behavior smoother,
you could consider using more advanced comparisons in the ``||game:on game update||`` event;
for example, making the ``Person`` move to the **right** if it is to the **left** of the fruit,
at a more constant speed.