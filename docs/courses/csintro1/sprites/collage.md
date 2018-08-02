# Activity: Collage

https://youtu.be/kKeuxhqnZ4U

**Visual Design** is an important part of Game Development. This activity builds skills needed to create multiple sprites placed on a game screen by building a "Personal Interest Collage". The student will create sprites with custom variable names, and arrange the sprites on a game screen using sprite properties to set the coordinates.

In this activity, students will be introduced to:
* Designing their own images
* Use variables to create multiple sprites
* Using coordinates on the screen to arrange our sprites into a scene
* Changing a the background color

## Example: Sprite & Background
This sprite example is larger than the default 16x16, and uses a custom variable name ``||variables:hotSauce||``. However, the image does not show up properly on the screen with the default background, so we must change the background color for the image to show up correctly.

https://youtu.be/TY0kSXUaPkg

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
## Example: Sprite placement

https://youtu.be/PsIZ_08eEYk

This example uses sprite properties to set the `X` and `Y` coordinates on the game screen.

### ~hint

If the sprites are not moving to where you expect them to when you set their coordinates, review the [Coordinate Walker Activity](/courses/csintro1/sprites/coordinate-walker) to see where the different `X` and `Y` values are located.

### ~

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

## Student Task: Build a "Personal Interest Collage"

https://youtu.be/AV8YIkXE1N8

Make a collage with different images scattered around the screen. It can be about a hobby, a favorite musician, sports, clothes - anything that helps tell a story that is about you.

1. Initialize 6 or more Sprites with custom variable names the correspond to the images 
2. Design sprites in the image editor to tell a story using custom images of varying sizes and styles
3. Use sprite properties to place images across all areas of the game screen  
4. Save the collage as a shared link or download the PNG file
5. **Challenge:** create a large image by using multiple sprites and 'combining' them by carefully placing them next to eachother (for example, sprites for head, body and legs that combine to represent a person)

## What did we learn?
1. How could the use of multiple sprites in a single game enhance your ability to convey a story in your games?
2. What other blocks are available in the ``||sprite:Sprites||`` menu? List several blocks not used in collage and make a hypothesis of what one (or more) of these blocks does.
3. **Challenge:** switch to the JavaScript version of your collage, and take a look at the images you drew in the task above. What do periods (**.**) represent in the images?

## Rubrics

### Collage Task rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Collage | Collage has at least 5 sprites | Collage has at least 6 sprites with 1 placed in each quadrant | Collage has more than 6 sprites of various sizes and designs | Collage strongly conveys information to viewer without needing explanation, or student completed the challenge code |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | Mostly addressing questions #1 & #2, but parts are unclear or lack detail | Explanation address questions #1 & #2 fully | Uses multiple examples and clear explanations | Explanation uses an original, creative example or analogy or multiple ``||sprites:Sprites||`` category blocks explained |

### Score = \_\_\_\_\_\_ /10