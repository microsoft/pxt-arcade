# Activity: Corgio Extension in JavaScript

In previous lessons, the ``||corgio:Corgio||`` extension handled the intricate
parts of making a character for a platformer.

In JavaScript, extensions remain a useful tool in developing complex programs.

## Concept: Creating a ``||corgio:Corgio||``

Using an extension in JavaScript is very similar to using an extension in Blocks:
the first step remains to load the extension.

![Loading Corgio using Extensions menu](/static/courses/csintro3/structure/loading-extension.gif)

After loading the extension, the contents of the extension can be accessed just
like any other code, and a new category in the toolbox will often show up showing
some of the newly accessible functions (if the developer of the extension chose
to implement that behavior).

## Example #1: ``||corgio:Corgio||`` Extension in Blocks and JavaScript

The ``||corgio:Corgio||`` extension remains easy to use in JavaScript.
For example, ``||corgio:corgio.create||`` can be used to create a new ``||corgio:Corgio||``.

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player);
```

```typescript
let myCorg: Corgio = corgio.create(SpriteKind.Player);
```

There are several important things to notice here:

* The same ``||sprites:SpriteKind||`` enum used in sprites is used to identify
the ``||sprites:Kind||`` of a ``||corgio:Corgio||``
* The type for the ``||corgio:Corgio||`` platformer character is ``||corgio:Corgio||``
* The ``||corgio:Corgio||`` is created in a similar way to how ``||sprites:Sprites||``
are created (using ``sprites.create``)

## Concept: Interacting with a ``||corgio:Corgio||``

``||corgio:Corgio||``s have several properties and methods that can be
called to interact with them.

For example, ``||corgio:myCorg.horizontalMovement()||`` can be used to make
it so the ``||corgio:Corgio||`` can move left and right across the screen.

## Example #2: Adding Horizontal Movement

1. Review the code below
2. Notice how adding ``||corgio:myCorg.horizontalMovement()||`` changes the
behavior of the ``||corgio:Corgio||``

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player);
myCorg.horizontalMovement();
```

```typescript
let myCorg: Corgio = corgio.create(SpriteKind.Player);
myCorg.horizontalMovement();
```

### ~hint

``||corgio:myCorg.horizontalMovement()||`` can be expressed as simply
"tell myCorg to use horizontalMovement."

### ~

## Student Task #1: More ``||corgio:Corgi||`` Actions

There are a number of other things the ``||corgio:Corgio||`` can be made
to do using the other items in the toolbox.

1. Start with the code from example #2
2. Find the ``||corgio:myCorg.horizontalMovement()||`` code snippet in the
``||corgio:Corgio||`` category of the Toolbox and add it to the code
3. Find the ``||corgio:myCorg.updateSprite()||`` code snippet in the
``||corgio:Corgio||`` category of the Toolbox and add it to the code

## Example #3: Bark!

Another feature of the ``||corgio:Corgio||`` is to maintain a group of words
the ``||corgio:Corgio||`` has learned to ``||corgio:bark||``. 

```typescript
let myCorg: Corgio = corgio.create(SpriteKind.Player);
myCorg.addToScript("bark");
myCorg.bark();
```

## Student Task #2: More Barking

1. Start with the code from example #3
2. Add a ``||loops:for||`` loop
    * start at ``i = 0``
    * continue while ``i < 50``
    * increment ``i`` by 1 on each iteration
3. Move the call to ``||corgio:myCorg.bark()||`` inside of the loop
4. Add ``||loops:pause(1000)||`` after the call to ``||corgio:myCorg.bark()||``;
this is the JavaScript version of ``[pause(1000)]``

## What did we learn?

1. Explain what is the same when using extensions in JavaScript and using extensions in Blocks.
2. Why do you think the extensions have to be added through the extensions menu?
Open the ``Explorer`` below the simulator; is there any difference between what
is there when you first open the editor, and what is there after you add an extension?

### ~hint

Before moving on to the next lesson, it is recommended that you check out the
[selected problems](/courses/csintro3/structure/extensions-problems) for this section
to review the material and practice the concepts introduced in this section.

### ~

```package
corgio
```

### ~hint

## Case Study

The example case study game does not include any extensions, so there is nothing to
add in this section; spend a few minutes making sure your game's ``||sprites:space ship||``
and ``||sprites:enemy||`` look exactly as you want them to.

### ~