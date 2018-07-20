# Activity: Collage

**Visual Design** is an important part of Game Development.  This activity builds skills needed to create multiple sprites placed on a game screen by building a Personal Interest Collage. The student will Create Sprites with custom variable names and arrange the sprites on a game screen using sprite properties to set the coordinates.

In this activity we will use
* Sprites
* Variables to create multiple sprites  
* Coordinates to arrange our sprites into a scene  
* Background - set background

## Example: Sprite

This Sprite example is larger than the default 16x16 and uses a custom variable name `hotSauce`.  *How can we determine the dimensions of this sprite?*

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let hotSauce: Sprite = null
scene.setBackgroundColor(1)
hotSauce = sprites.create(img`
. . 3 . . . . 2 . . . . . . . 3 . . . . . . 3 . . . . . . . . . 
. . 3 3 . . 6 6 6 . . . . . 3 . . . . . . . 3 . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . 3 . . . . 3 . . . . . . . . . 
. 3 3 . . 6 6 6 6 6 . . . . . . 3 . . . . . 3 . . . . . f f f f 
. . . . . 6 6 6 6 6 . . . . . . . . . . . . . . . . f f f f f . 
. . . . 6 6 6 6 6 6 6 . . . . . . . . . . . . . . f f f f f . . 
. . . . 2 1 1 1 1 1 2 . . . 3 . . . . . . . . f f f f f . . . . 
. . . . 2 2 2 2 2 2 2 . . . 3 . . . . . . . f f f f f f f . . . 
. . . . 2 2 2 2 2 2 2 . . . . . . . . . . f f . . . . f f . . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 . . . . . . f f f . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 . . . . f f f . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . 2 2 2 2 . . f f f f . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . . 2 2 2 . . . f f f . 
. . 2 2 2 2 2 1 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . f f . . 
. . 2 2 2 1 1 2 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . . . . . 
. . 2 2 1 1 2 2 2 2 f 2 2 f f f . 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f . . 2 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f f . . 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 1 f f f 2 f f f f . . . . . . . . . . 3 . . . . 
. . 2 2 2 2 2 1 1 2 f f f f . f f . . . . . . . . . . . 3 . . . 
. . 2 2 2 2 1 2 2 2 f f f . . f f f . . . . . . . . . . . . . . 
3 . 3 3 2 1 1 2 2 2 2 f f f . . f f . . . . . . . . . . . . 3 . 
. . 2 2 2 1 2 2 2 2 2 2 f f . . f . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 1 2 2 2 . . . . . 3 . . . . 3 . . . . . . . . 
. . 2 2 2 2 2 2 1 1 2 2 2 . . . . . 3 . . . . . . . . . . . . . 
. . 3 2 2 2 2 1 1 2 2 2 2 . . . 3 3 . . . . . 3 . . . . . . . . 
. . 3 2 2 2 2 1 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
3 . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)

```
## Example: Sprite placement & background 

This Sprite example uses sprite properties to set the `x` and `y` coordinates on the game screen. *View the Sprite in JavaScript. Note how colors are represented.*

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let hotSauce: Sprite = null
hotSauce = sprites.create(img`
. . 3 . . . . 2 . . . . . . . 3 . . . . . . 3 . . . . . . . . . 
. . 3 3 . . 6 6 6 . . . . . 3 . . . . . . . 3 . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . 3 . . . 3 . . . . 3 . . . . . . . . . 
. 3 3 . . 6 6 6 6 6 . . . . . . 3 . . . . . 3 . . . . . f f f f 
. . . . . 6 6 6 6 6 . . . . . . . . . . . . . . . . f f f f f . 
. . . . 6 6 6 6 6 6 6 . . . . . . . . . . . . . . f f f f f . . 
. . . . 2 1 1 1 1 1 2 . . . 3 . . . . . . . . f f f f f . . . . 
. . . . 2 2 2 2 2 2 2 . . . 3 . . . . . . . f f f f f f f . . . 
. . . . 2 2 2 2 2 2 2 . . . . . . . . . . f f . . . . f f . . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 . . . . . . f f f . . 
3 . . 2 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 . . . . f f f . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . 2 2 2 2 . . f f f f . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . . 2 2 2 . . . f f f . 
. . 2 2 2 2 2 1 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . f f . . 
. . 2 2 2 1 1 2 2 2 2 2 f f f . . 2 2 2 . . . 2 2 . . . . . . . 
. . 2 2 1 1 2 2 2 2 f 2 2 f f f . 2 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f . . 2 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 2 f f f 2 . f f f . . 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 1 f f f 2 f f f f . . . . . . . . . . 3 . . . . 
. . 2 2 2 2 2 1 1 2 f f f f . f f . . . . . . . . . . . 3 . . . 
. . 2 2 2 2 1 2 2 2 f f f . . f f f . . . . . . . . . . . . . . 
3 . 3 3 2 1 1 2 2 2 2 f f f . . f f . . . . . . . . . . . . 3 . 
. . 2 2 2 1 2 2 2 2 2 2 f f . . f . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . 3 . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 f f . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 1 2 2 2 . . . . . 3 . . . . 3 . . . . . . . . 
. . 2 2 2 2 2 2 1 1 2 2 2 . . . . . 3 . . . . . . . . . . . . . 
. . 3 2 2 2 2 1 1 2 2 2 2 . . . 3 3 . . . . . 3 . . . . . . . . 
. . 3 2 2 2 2 1 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
3 . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
hotSauce.x = 20
hotSauce.y = 40
```

## Student Task: Build a Collage 

It can be about a typical day, a hobby, favorite musician or actor, sports, clothes - anything tells something that tells story and is about you.

* Initialize 6 or more Sprites with custom Sprite variable names  
* Design Sprites in the **Image Editor** to tell a story using custom images of varying sizes and styles
* Use Sprite Properties to place images across all areas of the game screen  
* Follow the [Collage Tutorial](../Tutorials/collage-tutorial.md) to start the collage like the examples
* **Save** the Collage as a shared Link or download PNG file

## Challenge
Create separate sprites and combine by placing to make a single large image (e.g. - sprites for head, body and legs combine to represent a person).

## What did we learn?
1. Describe and Explain observations of sprite images in the JavaScript code. What do periods (**.**) represent?  
2. What other blocks are available in the Sprite Blocks menu? List several blocks not used in collage and **give a hypothesis** on what one (or more) of these blocks does.

## Rubrics

### ~hint

Start on the left rubric column (5pts), if the work meets the rubric continue to the right (7pts, 9pts, 10pts). Award the sore of the right most rubric that is completed by the student.  

This means that to get the highest score student must pass **all** previous rubrics.

### ~

### Collage task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Collage | Collage has at least 5 sprites | Collage has at least 6 sprites with 1 placed in each quadrant | Collage has more than 6 sprites of various sizes and designs  | Collage strongly conveys information to viewer without needing explanation or completed the Challenge |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Mostly addressing Questions # 1 & 2, but parts are unclear or lack detail | Explanation address Questions 1 & #2 fully | Uses multiple examples and clear explanations |  Explanation uses an original, creative example or analogy or multiple Sprite blocks explained |

### Score = \_\_\_\_\_\_ /10