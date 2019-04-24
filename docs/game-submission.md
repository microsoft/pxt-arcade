# Game Submission

You can submit your games to appear on the home screen of https://arcade.makecode.com.

The submission process is done through [GitHub](https://github.com/Microsoft/pxt-arcade) **pull requests**. You will need a GitHub account to submit a game. 

If the game is approved, it will be linked back to your GitHub user account.

## Preparing your game

1. **Make a game name** - Change the name of your project to match your game. Make sure that your game name is not copyrighted!
2. **Add a description** - Go the **Settings** (gearwheel) menu, click **Project Settings** and enter a description.
3. **Create a shared link** - Click on the **Share** button to create a shared link. Copy that URL, you'll need it later. Use the camera and gif generated to create a screenshot of your game.

## Submission steps

### 1 - Fork Arcade

Make your own fork of the  [Microsoft/pxt-arcade](https://github.com/Microsoft/pxt-arcade/fork) repository.

### 2 - Markdown game file

The code for your game is submitted as a markdown document. In your forked copy of [Microsoft/pxt-arcade](https://github.com/Microsoft/pxt-arcade), go to the ``/docs/community`` folder. Click on **Create new file** and GitHub will provide an editor for you to create your new file. In the file path, insert the name for the new markdown (**.md**) file. If your game is named ``Walker``, then the new game file is ``walker.md``. 

### 3 - Create a title and description

In the GitHub file editor, create a title for the game and enter it on the first line as a top level heading:

``# The New Game``

Just below the title, give a  brief description of the game:

``This is a brief description of my new game.``

### 4 - Insert the shared link

Get the shared URL you created earlier for your project. Paste it in just below the description, such as:

``https://makecode.com/_hWVH2CMpxEYU``

### 5 - Paste in your game code

Now, under the shared link, you'll insert your game code. You copy it from the **JavaScript** view in the MakeCode editor. You'll put it inside a ``blocks`` or ``typescript`` section. If your code is short and normally appears as all blocks in the MakeCode editor, use a ``blocks`` section. Otherwise, place it inside a ``typescript`` section. The code sections start with three backtick  characters and the block type specifier - ```` ```blocks ```` or ```` ```typescript ````. The code block is then terminated with another three backticks ```` ``` ````. Your code, rendered from the markdown file, will appear as either blocks or JavaScript text depending on which block type specifier you use.

Code inside a ``blocks`` section:

````
```blocks
info.changeScoreBy(10)
```
````
...appears as:

```blocks
info.changeScoreBy(10)
```

Code inside a ``typescript`` section:

````
```typescript
info.changeScoreBy(10)
```
````

...appears as:

```typescript
info.changeScoreBy(10)
```

### 6 - Commit your submission file

When you're finished inserting the game code into the GitHub editor, scroll to the bottom of the page. Add a commit description for your new submission and select ``Create a new branch for this commit``. You can make a commit name there or just use the default one. Click the **Propose new file** button.

Before you commit, make sure you've inserted all of the necessary parts for the submission file. Here's an example of a complete submission file for the ``Walker`` game:

````
# Walker

A sprite walks off of the screen!

https://makecode.com/_hWVH2CMpxEYU

```blocks
enum SpriteKind {
    Player,
    Projectile,
    Enemy,
    Food
}
let walker = sprites.create(img`
    . . 2 2 2 2 . .
    . 2 . . . . 2 .
    . 2 . . . . 2 .
    . . 2 2 2 2 . .
    . . . 2 2 . . .
    . . 2 . . 2 . .
    . 2 . . . . 2 .
    2 2 . . . . 2 2
`, SpriteKind.Player)
game.onUpdateInterval(500, function () {
	walker.x += 10
})
```
````

### 7 - Create a Pull Request

After you've committed your proposed file change, a Pull Request form appears. Fill out the Pull Request template and click on **Create pull request** to complete your submission.
