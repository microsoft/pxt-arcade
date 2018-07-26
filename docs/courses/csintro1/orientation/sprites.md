# Activity: Sprite

Games tell a story, and those stories generally require characters. In MakeCode Arcade, those characters are generally represented using sprites. This activity equips students with the skills necessary to create, test and save sprites using the MakeCode development environment. Students will build unique sprites by using the sprite menu and the integrated image editor.

In this activity, students are introduced to:
* Using blocks  
* ``||sprites:Sprites||`` and ``||images:Images||``
* Using the Image Editor
* Pixels and pixel Colors
* Viewing JavaScript
* Color codes in the mage editor, blocks and JavaScript  

## Concept: Set a ``||sprites:Sprite||`` variable to an image using the image editor

https://youtu.be/tGISp5qcrR4

The blocks needed to create sprites are found in the ``||sprites:Sprites||`` menu. The ``||variables:set mySprite to||`` is the first block in this category that we will discuss. The following example shows the creation of a sprite with a blank image.

[Empty Sprite Example](https://makecode.com/_g3CcuWigwKR8)
```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null

mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```

Clicking on the image icon as shown in the video above will bring up the Image Editor, allowing you to draw an image for your own sprite.

## Example: Sprite

Look at the blocks, and note that a name for the sprite (``||variables:mySprite||``) is set to an image for the sprite (it's hot sauce!).

[Hot Sauce Example Sprite](https://makecode.com/_VEXXpq9RtRfT)
```blocks
enum SpriteKind {
    Player,
    Enemy
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . 7 7 7 . . . . . . 
. . . . . . . 7 7 7 . . . . . . 
. . . . . . 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 1 2 2 2 . . . . 
. . . . . 2 1 2 2 1 2 2 . . . . 
. . . . . 2 2 7 7 2 2 2 . . . . 
. . . . . 2 7 2 7 2 2 2 . . . . 
. . . . . 2 2 2 2 7 2 2 . . . . 
. . . . . 2 2 2 7 7 2 2 . . . . 
. . . . . 2 1 2 2 2 2 2 . . . . 
. . . . . 2 2 1 1 2 2 2 . . . . 
. . . . . 2 2 2 2 1 2 2 . . . . 
. . . . . 2 2 2 2 2 2 2 . . . . 
. . . . . 2 2 2 2 2 2 2 . . . . 
`, SpriteKind.Player)
```

## Student Task #1: Create your own sprite  
* The default sprite is 16x16 pixels - press the `change sprite size` button to make a sprite that is 32x32 pixels!

### ~hint

When using the image editor the pixel dimensions are displayed in the lower right corner. Sizes include 8x8, 16x16, 32x32, and other odd sizes.

### ~

## Student Task #2: Build a "rainbow numbers" sprite that uses every color in the editor 

https://youtu.be/oupwql9r-80  

1. Make a blank **32x32** sprite  
2. Hover over every color and find color index 0 and add that color on the far left  
3. Then find and add the other colors as picture of the number in order to the right using color index 1, 2, 3, 4, ..., until you have color index 15
4. Look at how the sprite image is represented in the JavaScript view to help answer the "What did we learn" questions below

![sprite rainbow numbers image](/static/courses/csintro1/orientation/rainbow-numbers.png)

### ~hint

Try changing the background color using ``||scene:set background color to||`` in the ``||scene:Scene||`` category.

### ~

## What did we learn?

1. Make a table showing
    * Color index (1-15)
    * Color (use an approximate color name like white, red, pink, ...)
    * Color representation in JavaScript
2. Explain what happens to the color index 0 in JavaScript (form a hypothesis).
3. Explain why we see only 14 colors at a time, despite the fact that there are 16 color indexes (0-15) in the image editor.

## Rubrics

### ~hint

Start on the left rubric column (5pts), if the work meets the rubric measurement continue to the right (7pts, 9pts, 10pts). Award the score of the right most rubric that is passed.  This means that to get the highest score, student must pass all previous rubrics.

### ~

### Sprite task rubrics

| points | 5 | 7 | 9 | 10 |
|:---:|:---:|:---:|:---:|:---:|
| Rainbow Numbers | 15 "colors" represented in task #2 | Completed Color Table connects the color name to both the editor index and the JavaScript number/letter | *Explain answers* are clearly expressed | *Explain answers* are expressed in a unique and/or interesting way or the **Challenge was completed** |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric
|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Answered at least 2 questions fully or answered all 3 questions but parts are unclear or lack detail | Explanations address all 3 questions fully | All answers have clear explanations | Has an exceptional explanation using an original example |

### Score = \_\_\_\_\_\_ /10 
