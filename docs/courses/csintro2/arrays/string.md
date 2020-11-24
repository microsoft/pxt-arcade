# Activity: Arrays of Strings

In the previous lesson, we learned that arrays can be used to keep track of an indefinite number of values of the same type, as well as some of the basic ways in which developers can interact with the arrays. It is important to remember, though, that they can be used with any variables you need to keep track of, not just with numbers.

In this activity, we will identify some ways in which we can use arrays of strings, and explore other ways in which we can use arrays.

In this activity, students will:
* Interact with string arrays
* Use arrays with loops

### ~hint

#### Color Coded Tilemap

This section uses the color coded tilemap in some of the examples.

These were the original style of tilemaps, that got replaced with new blocks prior to the release of arcade.
The new blocks show the tilemap in full as you draw it, allow more tiles at once, and let you set tiles as walls without changing the image.

If you open any example using the edit button, the extension will be automatically added to the project.

If you wish to use these blocks in another project, they can be added using the `color-coded-tilemap` extension.

### ~

```package
color-coded-tilemap
```

## Concept: Arrays for dialogue

One way in which we can use arrays of strings is to form a "script" for our sprites to follow. By keeping the script inside of an array, you are able to keep it all located in one place - so if you need to fix a typo, or add in a new line, all the content remains in a single location for you to see.

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40546a-array-string1)

## Example #1: Princess Dialogue

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the example (name it "Princess Dialogue")

```blocks
let text_list: string[] = []
let mySprite: Sprite = null
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
text_list = ["Hello", "I am", "the", "Princess"]
mySprite.say(text_list[0], 300)
pause(400)
mySprite.say(text_list[1], 300)
pause(400)
mySprite.say(text_list[2], 300)
pause(400)
mySprite.say(text_list[3], 300)
pause(400)
```

## Student Task #1a: Fix the Redundancy

1. Start with the code from example #1
2. Use a ``||loops:for index from 0 to 3||`` loop to reduce the redundancy found in the example, without changing the behavior of the code
3. Add (at least) three more strings to the ``||variables:text list||`` array, describing what she had for lunch
4. Use the ``||arrays:length of array||`` block to change the bound of the loop, so that it will loop through the entire array no matter the size. Remember to pay attention to difference between the length of the array, and the last valid index
5. **Challenge:** after the princess has given her speech, make her say it again backwards. You may find ``||arrays:reverse list||`` useful for completing this task

### ~hint

Consider the following:

If the four lines the princess was saying were instead stored as four separate variables ("line1", "line2", "line3", and "line4"), would it still be possible to reduce the redundancy using loops?

### ~

The changes in this task make the code a lot easier to read, and demonstrate a very common usage of arrays - iterating over their contents. This is so common, in fact, that there is another loop that is commonly used to iterate over arrays and other data structures.

In Blocks, this is the ``||loops:for element||`` loop, but the behavior is often referred to as a `for each` loop. This title comes from the way in which we commonly describe the behavior of the loop; using the code from task #1a, you might say something along the lines of

### ~hint

**for each** string in text_list, make the princess say that string and then pause for a moment.

### ~

[![Link to Video](/static/thumbnail_play_video.png)](https://aka.ms/40546a-array-string2)

## Student Task #1b: Using ``||loops:for element||``

1. Start with the code from task #1a
2. Replace the ``||loops:for index from 0 to||`` loop with a ``||loops:for element||`` loop. Be sure that it refers to the correct array
3. Replace the ``||arrays:text list get value at index||`` with the ``||variables:value||`` parameter of the ``||loops:for element||`` loop

## Concept: Random Reactions

Another way in which you can use string arrays in your games is to create reactions to different events - for example, the player running into another character, or losing a life. This can be used both to personalize your game, and to make the game feel more alive, as the characters respond 'randomly' to the player's actions.

## Example #2: Reacting to Collisions

1. Review the code below
2. Create the sample code and run the code
3. Save the code for the example (name it "Princess Dialogue")

```blocks
let text_list: string[] = []
let mySprite: Sprite = null
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    mySprite.say(text_list[randint(0, text_list.length - 1)], 250)
    mySprite.setPosition(50, 50)
})
scene.setTileMap(img`
f f f f f f f f f f
f e e e e e e e e f
f e e e e e e e e f
f e e e e e e e e f
f e e e e e e e e f
f e e e e e e e e f
f e e e e e e e e f
f f f f f f f f f f
`)
scene.setTile(15, img`
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
`, true)
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
controller.moveSprite(mySprite, 100, 100)
text_list = ["oww", "no walls", "oh no", "I stubbed my toe"]
```

## Student Task #2: Respond to Loss of Health

1. Start with the code from example #2
2. Create another ``||arrays:text list||``, stored in a different variable called "enemyScript". Fill it with the following strings:
    * "go away"
    * "why are you running into me"
    * "leave"
3. Add at least three other sprites in different locations around the map of ``||sprites:kind enemy||``
4. Set the player's ``||info:life||`` to 5
5. Create an ``||sprites:on overlap||`` event between ``||sprites:kind player||`` and ``||sprites:kind enemy||``, which causes ``||info:life||`` to change by `-1` and the ``||sprites:enemy||`` to say a random word from ``||variables:enemyScript||``
6. At the end of the same ``||sprites:on overlap||`` event, set the enemy to be a ``||sprites:ghost||``, ``||loops:pause||`` for a second and then make it so the sprite isn't a ``||sprites:ghost||``
7. **Challenge:** add an ``||controller:on A button pressed||`` event. When the ``||controller:A||`` button is pressed, use ``||game:ask for string with text||`` and ``||arrays:list add value to end||`` to add a word the player chooses into ``||variables:text list||``

### ~hint

Review the corgio extension from the [Tilemap: Extensions](/courses/csintro2/tilemap/extensions) lesson; can you guess how the ``||corgio:make myCorg bark!||`` and ``||corgio:teach myCorg the word||`` blocks work?

```package
corgio
```

### ~

## What did we learn?

1. What is the difference between a ``||loops:for index from 0 to||`` and a ``||loops:for element||`` loop? Can you think of any situations where you might prefer the ``||loops:for index from 0 to||`` loop when using arrays?
2. In task #1a, why did we use the ``||arrays:length of array||`` instead of just setting it to the new length (for example, changing it to be from `0 to 3` to `0 to 6`)?

### [Teacher Material](/courses/csintro2/about/teachers)
