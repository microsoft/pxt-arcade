# Activity: Characters and Stories

Sprites can be useful to express a story. They can visually represent characters on the screen, and can even talk using the ``||sprites:say||`` block.

## Example #1: Fantasy Characters

This example contains four fantasy characters.

The characters are all represented as sprites, allowing them to be positioned on the screen and given a phrase to ``||sprites:say||``.

1. Review the code below
2. Start a new project and name it “characters”
3. Create the sample code and run the code

```blocks
let dorothy: Sprite = null
let lion: Sprite = null
let tinMan: Sprite = null
let scarecrow: Sprite = null
scarecrow = sprites.create(img`
. . . . . . . 7 7 . . . . . . . 
. . . . . . . 7 7 . . . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . 5 f f 5 5 f f 5 . . . . 
. . . . 5 f f 5 5 f f 5 . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . 5 f 5 5 5 5 f 5 . . . . 
. . . . 5 5 f f f f 5 5 . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. 7 7 5 5 5 5 5 5 5 5 5 5 7 . . 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Player)
tinMan = sprites.create(img`
. . . . . . . d . . . . . . . . 
. . . . . . . d . . . . . . . . 
. . . . . . b b d . . . . . . . 
. . . . . b b b d d . . . . . . 
. . . . b b b d d d d . . . . . 
. . . . b b b d d d d . . . . . 
. . . . b f f d f f d . . . . . 
. . . b b f f d f f d d . . . . 
. . . b b b d d d d d d . . . . 
. . . b b b d d d d d d . . . . 
. . . b b b d d d d d d . . . . 
. . . b f b b d d d f d . . . . 
. . . b b f b d d f d d . . . . 
. . . b b b f f f d d d . . . . 
. . . . . b b b d d . . . . . . 
. . . . . . b b b . . . . . . . 
. . . . . . b b b . . . . . . . 
. . . . . . b b b . . . . . . . 
. b b b b b b b b d d d d d d . 
. b b b b b b b b d d d d d d . 
. b b b b b b b b d d d d d d . 
. b b b b b b . . d d . . d d . 
. b b b b b . . . . . . . . d . 
. b b b b b . . . . . . . . d . 
. b b b b b b . . . . . . d d . 
. b b b b b b b . . . . d d d . 
. b b b b b b b b . . d d d d . 
. b b b b b b b b b d d d d d . 
. b b b b b b b b b b d d d d . 
. b b b b b b b b b b d d d d . 
. b b b b b b b b b b d d d d . 
. b b b b b b b b b b d d d d . 
`, SpriteKind.Player)
lion = sprites.create(img`
. . . . . . e e e e . . . . . . 
. . . . e e e e e e e . . . . . 
. . e e e 4 4 4 4 4 e e e . . . 
. e e e e 4 5 5 5 4 4 4 e e . . 
. e e e 4 4 5 5 5 5 5 4 e e e . 
e e e 4 4 5 5 5 5 5 5 5 4 4 e e 
e e 4 4 5 5 5 5 5 5 5 5 5 4 e e 
e e 4 4 5 f f 5 5 f f 5 5 4 4 e 
e e 4 4 5 f f 5 5 f f 5 5 4 4 e 
e e 4 4 5 5 5 5 5 5 5 5 5 4 4 e 
e 4 4 4 5 5 5 5 5 5 5 5 5 4 4 e 
e 4 4 5 5 5 5 5 5 5 5 5 5 4 4 e 
e 4 4 5 5 5 5 5 5 5 5 5 5 4 4 e 
e 4 4 5 5 f 5 5 5 5 f 5 5 4 4 e 
e 4 4 5 5 5 f f f f 5 5 5 4 4 e 
e e 4 5 5 5 5 5 5 5 5 5 4 4 4 e 
. e 4 4 4 5 5 5 5 5 5 4 4 4 e e 
. e e e 4 4 5 5 5 5 5 4 4 e e . 
. . e e e 4 4 4 4 4 4 4 e e . . 
. . . e e e e e e e e e e . . . 
. . . . e e e e e e e e . . . . 
. . . e e e 4 4 4 4 e e . . . . 
. . e e e 4 4 4 4 4 4 e e . . . 
. . e e 4 4 4 4 4 4 4 e e . . . 
. . e e 4 4 4 4 4 4 4 4 e . . . 
. . e 4 4 4 4 4 4 4 4 4 e . . . 
. e e 4 4 4 4 4 4 4 4 4 e e . . 
. e e 4 4 4 4 4 4 4 4 4 e e . . 
. e 4 4 4 4 4 4 4 4 4 4 4 e . . 
. e 4 4 4 4 4 4 4 4 4 4 4 e . . 
. e 4 4 4 4 4 4 4 4 4 4 4 e . . 
. e 4 4 4 4 4 4 4 4 4 4 4 e . . 
`, SpriteKind.Player)
dorothy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . e e e . . . . . . . . 
. . . . . e e e e e e . . . . . 
. . . e e e d d d d e e . . . . 
. . . e e d d d d d d e e . . . 
. . e e e d d d d d d e e . . . 
. . e e e d d d d d d e e . . . 
. . e e d f f d f f d e e . . . 
. . e e d f f d f f d e e . . . 
. . e e d d d d d d d e e . . . 
. . e e d d d d d d d e e . . . 
. . e e d d d d d d d e e . . . 
. . e e d f d d d f d e e . . . 
. . e e d d f f f d d e e . . . 
. . e e d d d d d d d e e . . . 
. . e e . d d d d d . e e . . . 
. . e e . . 1 1 1 . . e e . . . 
. . e e . . 1 1 1 . . e e . . . 
. 1 8 1 1 1 1 1 1 1 1 1 8 1 . . 
. 8 1 8 1 1 1 1 1 1 1 8 1 8 . . 
. 1 8 1 1 1 1 1 1 1 1 1 8 1 . . 
. 8 1 8 1 1 1 1 1 1 1 8 1 8 . . 
. 1 8 1 1 1 1 1 1 1 1 1 8 1 . . 
. 8 1 8 1 1 1 1 1 1 1 8 1 8 . . 
. 1 8 1 1 1 1 1 1 1 1 1 8 1 . . 
. 8 1 8 1 1 1 1 1 1 1 8 1 8 . . 
. 1 8 1 1 1 1 1 1 1 1 1 8 1 . . 
. 8 1 8 1 8 1 8 1 8 1 8 1 8 . . 
. 1 8 1 8 1 8 1 8 1 8 1 8 1 . . 
. 8 1 8 1 8 1 8 1 8 1 8 1 8 . . 
. 1 8 1 8 1 8 1 8 1 8 1 8 1 . . 
. 8 1 8 1 8 1 8 1 8 1 8 1 8 . . 
`, SpriteKind.Player)
scarecrow.setPosition(55, 30)
tinMan.setPosition(105, 44)
lion.setPosition(55, 90)
dorothy.setPosition(105, 104)
scarecrow.say("I want a brain")
tinMan.say("I want a heart")
lion.say("I want courage")
dorothy.say("Where's Kansas")
```

## Student Task #1: Create your own story #task-1

Make a new story using characters and the ``||sprites:say||`` block. These can be characters from famous movies, TV shows, video games, or anything else.

1. Create a sprite using ``||variables:set mySprite to||`` in ``||sprites:Sprites||``
2. Click on ``||variables:mySprite||``, and select `rename variable`. Give the sprite a name that describes what they are
3. Click on the empty image in ``||sprites:sprite||`` to open the image editor, and draw the sprite
4. Use sprite properties to place the character in a different position on the game screen
5. Use ``||sprites:say||`` to make the character say something unique
6. Complete steps 1-5 two more times, creating a total of **three** unique characters

## Concept: Gathering Feedback

Gathering feedback from peers is an important part of Software Development. This lets the developer **explain** to someone else what they intend their code to do, and identify any bugs or issues it may cause before the code gets released. 

## Student Task #2: Code Review

Gather feedback on the story that was crafted for [task #1](#task-1). Do this with another student, a parent, or whoever else you are working on this code with.

1. Before showing the code you wrote, give a short description of what the story is meant to be about
2. Show the code, and give them time to review what you wrote
3. Ask for feedback on what you did well, and what could need clarifying in the game

### ~hint

If you can't think of questions to ask, here are a few to get started:

* Did the story come across the same way that I described it?
* Did the images of the sprites look like the characters they were supposed to be?
* Could you read all of the things that the sprite said?

### ~

## What did we learn?

1. What is an advantage to making your story on a computer rather than on a piece of paper?
2. What is a disadvantage to making your story this way?

### [Teacher Material](/courses/csintro1/about/teachers)
