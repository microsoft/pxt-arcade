# Activity: Boolean Statements and Expressions

In the previous lessons, we saw how ``||logic:if||`` and ``||logic:else||`` statements allow us to write code that can handle different situations by making comparisons between different numbers. 

Comparison statements are centered around **Boolean logic**, with the conditions evaluating to either ``||logic:true||`` or ``||logic:false||``. 

These expressions values, and can be stored and used as `Boolean` variables. Whenever we see the term Boolean - it means we have something that can evaluate to ``||logic:true||`` or ``||logic:false||``.

In these activities students will work with:
* Boolean flags and values (``||logic:true||`` and ``||logic:false||``)
* ``||logic:and||`` 
* ``||logic:or||``
* ``||logic:not||``

## Concept: Boolean Flags

Boolean values are regularly used to help maintain the **state** of a given piece of code. It is common to describe variables as "Boolean flags" - these often are used to turn on and off different behaviors that might be useful. 

For example, ``||sprites:stay in screen||`` is a flag that we have set that forces the sprite to stay within the bounds of the screen when set to ``||logic:true||``.

## Coming Soon: VIDEO

## Example #1: Are you hungry?

1. Review the code below
2. Create the sample code and run the code
3. Identify what needs to be done in game to ``||game:splash||`` "You're hungry!", and what needs to be done to ``||game:splash||`` "You're not hungry!"

```blocks
let isHungry = false
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isHungry) {
        game.splash("You're hungry!")
    } else {
        game.splash("You're not hungry!")
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    isHungry = true
})
game.splash("Press A if you are hungry!")
isHungry = false
```

In this example, ``||variables:isHungry||`` is a flag that will change the behavior of the ``||controller:on B button pressed||`` event. When it is off (set to false), the game assumes that you are not hungry; when you turn it on (set to true), though, it tells the game that you **are** hungry, and it reacts to this information.

## Student Task #1: Off and On

1. Start with the code from example #1
2. Modify the ``||controller:on A button pressed||`` event so that it **switches** the value of ``||variables:isHungry||`` from ``||logic:true||`` to ``||logic:false||`` or from ``||logic:false||`` to ``||logic:true||``, by using an ``||logic:if else||`` block

## Concept: ``||logic:not||``
When we have a Boolean value, we have seen that we can write code that runs when it is true using a simple ``||logic:if||`` statement. However, we can also run code for when the Boolean is false. This is done with the ``||logic:not||`` block.

## Example #2: ``||logic:not||``

https://makecode.com/_Ug9eu36KRW2o

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
let isHungry = false
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    isHungry = true
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    isHungry = false
})
isHungry = true
mySprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
game.onUpdateInterval(5000, function () {
    if (!(isHungry)) {
        mySprite.say("I'm not hungry")
    }
})
```

1. Review the code example above
2. Examine its use of the ``||logic:not||`` block
3. Notice how the ``||sprites:sprite||`` will only say something if the Boolean is *not* ``||logic:true||``

## Student Task #2: ``||logic:not||``

1. Start a new project
2. Create a ``||sprites:sprite||`` and use the ``||controller:control with||`` block to move the sprite around the screen
3. Make a variable named ``||variables:isLeft||`` and set it equal to ``||logic:false||``
4. In the ``||game:on game update||`` block, add an ``||logic:if else||`` block that sets ``||variables:isLeft||`` to ``||logic:true||`` if the our sprite is on the left side of the screen and ``||logic:false||`` otherwise
5. Make it so that if the player presses the ``||controller:A||`` button, if ``||variables:isLeft||`` is ``||logic:false||``, then the sprite should ``||sprites:say||`` something

## Concept: Alternating Booleans

We can also use the ``||logic:not||`` block when assigning a Boolean. So if we wanted to, we could assign a Boolean to be the opposite of another Boolean. Or, what might be more useful is to set a Boolean to the opposite value of itself

## Example #3: Alternating Booleans

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let projectile: Sprite = null
let left = false
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    left = !(left)
})
left = false
game.onUpdateInterval(500, function () {
    if (left) {
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 9 9 . . . . . . . . . 
. . . . . 9 . 9 9 . . . . . . . 
. . . . . 9 . . . 9 9 . . . . . 
. . . . . 9 . . . . . 9 9 . . . 
. . . . . 9 . . . . . . . 9 9 . 
. . . . . 9 . . . . . . . . . 9 
. . . . . 9 . . . . . . . 9 9 . 
. . . . . 9 . . . . . 9 9 . . . 
. . . . . 9 . . . 9 9 . . . . . 
. . . . . 9 . 9 9 . . . . . . . 
. . . . . 9 9 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(50, 100), 0, SpriteKind.Player)
    } else {
        projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 7 7 . . . . . 
. . . . . . . 7 7 . 7 . . . . . 
. . . . . 7 7 . . . 7 . . . . . 
. . . 7 7 . . . . . 7 . . . . . 
. 7 7 . . . . . . . 7 . . . . . 
7 . . . . . . . . . 7 . . . . . 
. 7 7 . . . . . . . 7 . . . . . 
. . . 7 7 . . . . . 7 . . . . . 
. . . . . 7 7 . . . 7 . . . . . 
. . . . . . . 7 7 . 7 . . . . . 
. . . . . . . . . 7 7 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-100, -50), 0, SpriteKind.Player)
    }
    projectile.y = Math.randomRange(0, scene.screenHeight())
})
```

1. Review the code example above
2. Examine its use of the ``||logic:not||`` block
3. Notice how the ``||logic:not||`` block is used to alternate the value of the Boolean ``||variables:left||``

## Student Task #3: Alternating Booleans

1. Create a new project
2. Add create a new ``||sprites:sprite||``
3. Create a new Boolean ``||variables:pizza||`` and set it equal to ``||logic:true||``
4. Make this Boolean alternate values when the player presses the ``||controller:B||`` button
5. When the player presses the ``||controller:A||``, if ``||variables:pizza||`` is ``||logic:true||``, then fire a pizza ``||sprites:projectile||``, otherwise fire a burger ``||sprites:projectile||``

## Concept: ``||logic:and||`` & ``||logic:or||``

Beyond just using a single Boolean value, there are several ways in which we can combine these values. The most commonly used are ``||logic:and||`` and ``||logic:or||``. These are used similarly to the the use in English language; for example, the statement

> If I have food and I am hungry, I will make lunch

means that if **both** conditions (there being food, and being hungry) are true, then lunch will be made. If either is false, though, no lunch will be made.

Similarly, the statement

> If I need to buy milk or I need to buy eggs, I will go to the store

means that if **either** condition is true, I will go to the store. If I don't need to buy milk and I also don't need to buy eggs, then I will not end up going to the store.

## Example #4a: ``||logic:and||``

1. Review the code below
2. Create the sample code and run the code
3. Identify which combinations of true and false evaluate to true, and which evaluate to false

```blocks
if (true && true)   game.splash("true and true is true")
else                game.splash("true and true is false")

if (true && false)  game.splash("true and false is true")
else                game.splash("true and false is false")

if (false && false) game.splash("false and false is true")
else                game.splash("false and false is false")
```

## Example #4b: ``||logic:or||``

1. Review the code below
2. Create the sample code and run the code
3. Identify which combinations of true or false evaluate to true, and which evaluate to false

https://makecode.com/_3PWUwFdxC97c

```blocks
if (true || true)   game.splash("true or true is true")
else                game.splash("true or true is false")

if (true || false)  game.splash("true or false is true")
else                game.splash("true or false is false")

if (false || false) game.splash("false or false is true")
else                game.splash("false or false is false")
```

## Student Task #4: Using ``||logic:and||`` and ``||logic:or||``

1. Create a new project
2. Create a sprite, and use ``||controller:control sprite with||`` to make it move when the directional keys are pressed
3. In the ``||game:on game update||`` block, add an ``||logic:if||`` statement that makes the sprite ``||sprites:say||`` "hello" for 200 milliseconds when the ``||sprites:sprite x||`` value is less than 30 ``||logic:and||`` ``||sprites:sprite y||`` is less than 30.
4. In the ``||game:on game update||`` block, add another ``||logic:if||`` statement that makes the sprite ``|sprites:say||`` "bye" for 200 ms when the ``||sprites:sprite x||`` is greater than 80 ``||logic:or||`` the ``||sprites:sprite y||`` is greater than 80
5. **Challenge**: Create the same behavior while using one or more ``||logic:not||`` blocks

## What did we learn?

1. What is a Boolean flag? Describe a case in which you might you want to use one?
2. What is the difference between an ``||logic:and||`` block and an ``||logic:or||`` block?
    * In what cases will they both evaluate to true?
    * In what cases will they both evaluate to false?
    * In what cases will they evaluate differently?
