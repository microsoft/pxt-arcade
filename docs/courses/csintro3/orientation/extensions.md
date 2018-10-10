# Activity: Using Corgio in JavaScript

In previous lessons, the ``||corgio:Corgio||`` extension handled the intricate parts of making a character for a platformer.

In JavaScript, extensions remain a useful tool in developing complex programs.

## Concept: Creating a Corgio

Using an extension in JavaScript is very similar to using an extension in Blocks: the first step remains to load the extension.

![Loading Corgio using Extensions menu](/static/courses/csintro3/orientation/loading-extension.gif)

After loading the extension, the contents of the extension can be accessed just like any other code, and a new category in the toolbox will often show up showing some of the newly accessible functions (if the developer of the extension chose to implement that behavior).

## Example #1: ``||corgio:Corgio||`` Extension in Blocks and JavaScript

The ``||corgio:Corgio||`` extension remains easy to use in JavaScript. For example, ``corgi.create`` can be used to create a new ``||corgio:Corgi||``.

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

* The same ``||sprites:SpriteKind||`` enum used in sprites is used to identify the ``||sprites:Kind||`` of a ``||corgio:Corgi||``
* The type for the ``||corgio:Corgio||`` platformer character is ``||corgio:Corgi||``
* The ``||corgio:Corgi||`` is created in a similar way to how ``||sprites:Sprites||`` are created (using ``sprites.create``)

## Concept: Interacting with a ``||corgio:Corgi||``

``||corgio:Corgi||``s have several properties and methods that can be called to interact

``||myCorg.horizontalMovement()||`` can be used to make it so the ``||corgio:Corgi||`` can move around the screen

## Example #2: Adding Horizontal Movement

1. Review the code below
2. Notice how adding ``||myCorg.horizontalMovement()||`` changes the behavior of the ``||corgio:Corgi||``

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

``myCorg.horizontalMovement()`` can be expressed as simply "tell myCorg to use horizontalMovement."

### ~

## Student Task #1: More ``||corgio:Corgi||`` Actions

There are a number of other things the ``||corgio:Corgi||`` can be made to do using the other items in the toolbox.

1. Start with the code from example #2
2. Find the ``myCorg.horizontalMovement()`` code snippet in the ``||corgio:Corgi||`` category of the Toolbox and add it to the code
3. Find the ``myCorg.updateSprite()`` code snippet in the ``||corgio:Corgi||`` category of the Toolbox and add it to the code

## Example #3: Bark!

Another feature of the ``||corgio:Corgi||`` is to maintain a group of words the ``||corgio:Corgi||`` has learned to ``||corgio:bark||``. 

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
3. Move the call to ``myCorg.bark()`` inside of the loop
4. Add ``||loops:pause(1000)||`` after the call to ``myCorg.bark()``; this is the JavaScript version of ``||pause 1000 ms||``

## Concept: Commenting Your Own Code

Sharing code in @boardname@ allows for the code you write to be used in other projects - whether those projects are your own, your friends, or anyone else you give the link to.

There are still some important topics to cover before the code we write can be written in a way that is easy to use without causing issues. One of those issues is making the code easy to understand, so that others can use it without having to ask questions about every detail of the code.

Comments allow developers to leave **documentation** for those reading their code: whether that be someone else who's never seen it before, or themselves in a year or two.

In JavaScript, there are two different formats for comments:

```typescript
// Single line comments, like this

game.splash("//hello!//") // Another single line comments

/**
 * And multiline comments,
 * like this
 */

/* Also works with a single line */
```

When a line contains two slashes in a row (``//``) that are not in a string, that signifies that the line is finished, and anything else on that line is simply a comment - something for humans to read, that the computer will otherwise ignore.

Similarly, multiline comments (which start with ``/*`` and end with ``*/``) allow for sections of text that the computer will ignore. Anything between the start and end will not be run by the program, and only intended as an annotation for the user.

In this course, multiline comments will use the style shown below, so that it is easier to identify where the comments start and end.

```typescript
/**
 * The course uses this style of comment;
 * the asterisks that start these lines are not required,
 * but do make it easier to follow what exactly the comment includes
 */
```

```package
corgio
```
