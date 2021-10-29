# Activity: Sprites

Games tell a story, and those stories require characters. In @boardname@, those characters are generally represented using sprites. This activity equips students with the skills necessary to create, test and save sprites using the MakeCode development environment. Students will build unique sprites by using the sprite menu and the integrated image editor.

![Image Editor Features](/static/courses/csintro1/intro/image-editor-features.png)

In this activity, students are introduced to:

* Using blocks
* ``||sprites:Sprites||`` and ``||images:Images||``
* Using the Image Editor
* Pixels and pixel Colors
* Viewing JavaScript
* Color codes in the Image Editor, Blocks, and JavaScript

## Concept: Set a ``||sprites:Sprite||`` variable to an image using the image editor

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/gCtzHzg_BZM)

The blocks needed to create sprites are found in the ``||sprites:Sprites||`` menu. The ``||variables:set mySprite to||`` is the first block in this category that we will discuss. The following example shows the creation of a sprite with a blank image.

```blocks
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

## Example #1: Sprites

Look at the blocks, and note that a name for the sprite (``||variables:mySprite||``) is set to an image for the sprite (it's hot sauce!).

```blocks
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

1. Create a new project in @boardname@
2. Create a new ``||sprites:Sprite||``
3. The default sprite is 16x16 pixels - press the `change sprite size` button to make a sprite that is 32x32 pixels
4. Draw a unique sprite

### ~hint

#### Pixel dimensions

When using the image editor, the pixel dimensions are displayed in the lower left corner. The width is the first number and the height is the second number.

### ~

## Student Task #2: Build a "rainbow numbers" sprite that uses every color in the editor 

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/G-nCAeH__rY)

1. Make a blank **32x32** sprite
2. Hover over every color and find color index 0 and add that color on the far left
3. Then find and add the other colors in the shape of their corresponding code index number. Arrange them inside the Sprite Editor workspace so you have all 15 index colors
4. Look at how the sprite image is represented in the JavaScript view to help answer the "What did we learn" questions below

![sprite rainbow numbers image](/static/courses/csintro1/intro/rainbow-numbers.png)

### ~hint

#### Background color

Try changing the background color using ``||scene:set background color to||`` in the ``||scene:Scene||`` category.

### ~

## What did we learn?

1. Make a table showing
    * Color index (1-15)
    * Color (use an approximate color name like white, red, pink, ...)
    * Color representation in JavaScript
2. Explain what happens to the color index 0 in JavaScript (form a hypothesis).
3. Explain why we see only 14 colors at a time, despite the fact that there are 16 color indexes (0-15) in the image editor.

### [Teacher Material](/courses/csintro1/about/teachers)
