# Activity: Using Corgio in JavaScript

In previous lessons, the ``||corgi:Corgio||`` extension handled the intricate parts of making a character for a platformer.

In JavaScript, extensions remain a useful tool in developing complex programs.

## Concept: Creating a Corgio

Using an extension in JavaScript is very similar to using an extension in Blocks: the first step remains to load the extension.

![Loading Corgio using Extensions menu](/static/courses/csintro3/orientation/loading-extension.gif)

After loading the extension, the contents of the extension can be accessed just like any other code, and a new category in the toolbox will often show up showing some of the newly accessible functions (if the developer of the extension chose to implement that behavior).

## Example #1: ``||corgi:Corgio||`` Extension in Blocks and JavaScript

The ``||corgi:Corgio||`` extension remains easy to use in JavaScript. For example, ``||corgi:corgi.create||`` can be used to create a new ``||corgi:Corgi||``.

```blocks
enum SpriteKind {
    Player,
    Enemy
}

let myCorg: Corgi = corgi.create(SpriteKind.Player);
```

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let myCorg: Corgi = corgi.create(SpriteKind.Player);
```

There are several important things to notice here:

* The same ``||sprites:SpriteKind||`` enum used in sprites is used to identify the ``||sprites:Kind||`` of a ``||corgi:Corgi||``
* The type for the ``||corgi:Corgio||`` platformer character is ``||corgi:Corgi||``
* The ``||corgi:Corgi||`` is created in a similar way to how ``||sprites:Sprites||`` are created (using ``sprites.create``)

## Concept: Interacting with a ``||corgi:Corgi||``

``||corgi:Corgi||``s have several properties and methods that can be called to interact with them.

For example, ``||corgi:myCorg.horizontalMovement()||`` can be used to make it so the ``||corgi:Corgi||`` can move left and right across the screen.

## Example #2: Adding Horizontal Movement

1. Review the code below
2. Notice how adding ``||corgi:myCorg.horizontalMovement()||`` changes the behavior of the ``||corgi:Corgi||``

```blocks
enum SpriteKind {
    Player,
    Enemy
}

let myCorg: Corgi = corgi.create(SpriteKind.Player);
myCorg.horizontalMovement();
```

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let myCorg: Corgi = corgi.create(SpriteKind.Player);
myCorg.horizontalMovement();
```

### ~hint

``||corgi:myCorg.horizontalMovement()||`` can be expressed as simply "tell myCorg to use horizontalMovement."

### ~

## Student Task #1: More ``||corgi:Corgi||`` Actions

There are a number of other things the ``||corgi:Corgi||`` can be made to do using the other items in the toolbox.

1. Start with the code from example #2
2. Find the ``||corgi:myCorg.horizontalMovement()||`` code snippet in the ``||corgi:Corgi||`` category of the Toolbox and add it to the code
3. Find the ``||corgi:myCorg.updateSprite()||`` code snippet in the ``||corgi:Corgi||`` category of the Toolbox and add it to the code

## Example #3: Bark!

Another feature of the ``||corgi:Corgi||`` is to maintain a group of words the ``||corgi:Corgi||`` has learned to ``||corgi:bark||``. 

```typescript
enum SpriteKind {
    Player,
    Enemy
}

let myCorg: Corgi = corgi.create(SpriteKind.Player);
myCorg.addToScript("bark");
myCorg.bark();
```

## Student Task #2: More Barking

1. Start with the code from example #3
2. Add a ``||loops:for||`` loop
    * start at ``i = 0``
    * continue while ``i < 50``
    * increment ``i`` by 1 on each iteration
3. Move the call to ``||corgi:myCorg.bark()||`` inside of the loop
4. Add ``||loops:pause(1000)||`` after the call to ``||corgi:myCorg.bark()||``; this is the JavaScript version of ``[pause(1000)]``

## What did we learn?

1. Explain what is the same when using extensions in JavaScript and using extensions in Blocks.
2. Why do you think the extensions have to be added through the extensions menu? Open the ``Explorer`` below the simulator; is there any difference between what is there when you first open the editor, and what is there after you add an extension?


```package
corgio
```
