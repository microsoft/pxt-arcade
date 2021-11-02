# Activity: Hello Sprite

"Hello World!" is a common first example used to introduce the syntax of a new programming language by showing a few words on a screen. In this activity we will display "Hello World!" on the game screen. Then we will modify our code to display in the **Console Simulator** environment.

In this activity, students will be introduced to:
* ``||sprites:say||``
* `console.log` (using JavaScript)

## Concept: ``||sprites:say||``

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/iufK6TM9OkM)

Sprites have a method ``||sprites:say||`` that displays a text box over the sprite when used. 

### Vocabulary: Method

A **method** is an action that an object supports. For example, sprites (an object) have a ``||sprites:say||`` method that displays text provided above the sprite.

## Example #1: Sprite Hello Blocks

1. Start a new project and name it “sprite hello”
2. Create the code below in Blocks
3. View the code in JavaScript

```blocks
let msg: string = "Hello World!"
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . 
. . . . . . . . 
6 6 6 6 6 6 6 6 
6 f 6 6 6 6 f 6 
6 6 6 a a 6 6 6 
6 6 6 6 6 6 6 6 
6 6 b b b b 6 6 
6 6 6 6 6 6 6 6 
`, SpriteKind.Player)
scene.setBackgroundColor(4)
mySprite.say(msg)
```

## What did we learn?

1. Identify and show the JavaScript code that aligns with which each block.

    Example:
    ```block
    let msg: string = "Hello World!"
    ```
    is equivalent to 
    ```typescript
    let msg: string = "Hello World!"
    ```

2. Identify any JavaScript code that doesn't seem to have any blocks directly related to it. Make a hypothesis of what it means does.

    Example:
    ```typescript
    let mySprite: Sprite = null
    ```
    This doesn't have an equivalent block. To show this, we can copy and paste any block that we think it belongs to and when we look at the JavaScript, we'll see that this code doesn't repeat.

# Example #2: console.log()

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/9xSWNoDOAQc)

1. Start a new project, and name it "console"
2. Switch to JavaScript view and replace all code with the code below
3. Select the play button in the simulator, then select the **Show Console Simulator** button below the simulator to display `console` output

```typescript
let msg: string = "Hello World!"
console.log(msg)
console.log("msg sent!")
```

## Student Task #1: Add ``console.log( )`` to "sprite hello"

1. Open the "sprite hello" code saved above
2. Add in console messages using `console.log()` for:
    * a string (example: "Hello console")
    * a string variable (example: use ``||variables:msg||`` variable from the prior example)

### ~hint

Consider This!

The code `console.log()` doesn't use **mySprite** like ``||sprites:say||`` does. Why do you think that is?

### ~

## Student Task #2: More Sprites

[![Link to Video](/static/thumbnail_play_video.png)](https://youtu.be/1xQWu1tHFCo)

1. Start with the above project and add another sprite (make sure to give both unique variable names)
2. Add in a ``||sprites:say||`` message to have a conversation with the first sprite
3. Push the `+` on the ``||sprites:say||`` block and set the time for each message to be displayed (1000 millisecond = 1 second)
4. **Challenge:** add additional sprites at different coordinates and use ``||sprites:say||`` to make messages for all of them
5. **Challenge:** make larger 32x32 sprites with more detail than the smaller sprites allowed

### ~hint

There is a pause block under the ``||loops:Loops||`` menu ``||loops:pause 1000 ms||`` that can be used to delay the response of the second sprite.

### ~

## What did we learn?

1. Discuss the different ways we can display a message in this exercise. Make a hypotheses for what each would be best used for.
2. Come up with a hypothesis and explain why `console.log()` has a larger limit on the length of text. Explain.

### [Teacher Material](/courses/csintro1/about/teachers)
