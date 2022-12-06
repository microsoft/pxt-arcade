# Flee My Valentine

## Introduction @showdialog

**Will you be my Valentine?**

Here's a game I made just for you<br/>
...but the real gift is that you can edit the code to make changes of your own!

![A heart flying around to catch valentines](/static/tutorials/valentine/valentine.gif "This is what we'll be making today!" )

Follow the tutorial to see all of the ways you can make the game your own.



## Play First!

To get started, switch to the game window and start playing!

---

![Here's how you change to the game screen](/static/tutorials/valentine/game-screen.gif "Click the game screen icon in the upper-left corner of the screen." )

Click **Next** when you're ready to start changing the code.


## {3. Win or Lose}

Did you notice that this game goes on forever?

You can add a block to check for a win or loss each time the game updates.

---


![Here's how you check for a win or a loss](/static/tutorials/valentine/win-loss.gif "Drag a `check for win or loss` block into the `on game update` container." )







## {4. Modify the Arrows}

**Exciting!**

How does the game feel? <br/>
Too hard?  Too easy?

Change the difficulty by adjusting how many arrows the Valentines throw.

---

![Change the number of arrows](/static/tutorials/valentine/arrows.gif "Make the number of arrows lower for an easier game." )










## {5. Bigger}

Want to play around with the size of your heart?

You can change how fast it grows when it overlaps a valentine!

Larger numbers make the heart grow faster.

---

![Change how fast your heart grows](/static/tutorials/valentine/grow.gif "Make your heart grow faster." )




## {6. Smaller}

Want to make your heart even smaller when an arrow hits it?

Edit the amount it shrinks when your player overlaps an arrow. Smaller (more negative) numbers make it shrink faster.

---

![Change how fast your heart shrinks](/static/tutorials/valentine/shrink.gif "Make your heart shrink faster." )



## {7. Play Longer}

You can even change what the game looks for when you win or lose.

Browse through all of the blocks in the toolbox to see if you can find a block to add that will let you change the **win** and **loss** values.

Where should that block go?

---

_💡 Tip💡  Check the hint button (the lightbulb between **Back** and **Next**) to see three places you might put the new block, and how each one changes the way your code works._

```blocks
game.onUpdateInterval(1800, function () {
    //@highlight
    valentine.set_win_lose_size(120, 6)
    valentine.check_win_or_lose()
    valentine.send_valentine(assets.image`cupid hearts`, 3, assets.image`arrow`)
})

```
Adding your block to the ``||game: on game update||`` container will work, but it will keep getting looked at again and again each time the game updates.

---

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Valentine, function (sprite, otherSprite) {
    //@highlight
    valentine.set_win_lose_size(120, 6)
    otherSprite.destroy()
    scaling.scaleByPixels(sprite, 15, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})

```
Adding your block to one of the ``||sprites: on overlap||`` containers will also work, but it will keep getting looked at again and again each time the player runs into another sprite.


---

```blocks
//@highlight
valentine.set_win_lose_size(120, 6)

```
You only need to run the new code one time, so adding it to a new ``||loops: on start||``
container is the best option!




## Finale

**Fantastic!**

You now have a game that you can send to _your_ Valentine!

Don't forget to click **Done** to share your game and remix it using any of the blocks from the full toolbox.


```package
valentine-special=github:microsoft/arcade-tutorial-extensions/valentine
```

```template

// Every 1.8 seconds a red heart appears on the screen shooting this number of arrows
game.onUpdateInterval(1800, function () {
    valentine.send_valentine(assets.image`cupid hearts`, 3, assets.image`arrow`)
})

// When your Player (grey heart) overlaps with a Cupid (red heart), the Cupid disappears and your Player heart grows
sprites.onOverlap(SpriteKind.Player, SpriteKind.Valentine, function (sprite, otherSprite) {
    otherSprite.destroy()
    scaling.scaleByPixels(sprite, 15, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})

// When your Player (grey heart) overlaps with an Arrow, the Arrow disappears and your Player heart shrinks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Arrow, function (sprite, otherSprite) {
    otherSprite.destroy()
    scaling.scaleByPixels(sprite, -7, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})

```

```ghost
let player_sprite: Sprite = null

valentine.set_win_lose_size(120, 6)
player_sprite.setImage(assets.image`mySpriteHeart`)


game.onUpdateInterval(1800, function () {
    valentine.check_win_or_lose()
    valentine.send_valentine(assets.image`cupid hearts`, 2, assets.image`arrow`)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Valentine, function (sprite, otherSprite) {
    otherSprite.destroy()
    scaling.scaleByPixels(sprite, 15, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Arrow, function (sprite, otherSprite) {
    otherSprite.destroy()
    scaling.scaleByPixels(sprite, -7, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})

```

```customts

let player_sprite: Sprite = null

tiles.setCurrentTilemap(tilemap`level0`)
player_sprite = sprites.create(assets.image`mySpriteHeart`, SpriteKind.Player)
controller.moveSprite(player_sprite)
scene.cameraFollowSprite(player_sprite)

```



```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image2\": {\n        \"data\": \"hwQFAAcAAAAAAAgAAACIAIiIiAgAAIgAAAAIAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"arrow\"\n    },\n    \"image3\": {\n        \"data\": \"hwQUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwuwAAAAAAAAAAAADb3QsAAAAAAAAAALDd3b0AAAAAAAAAALDd3b0LAAAAAAAAALDd3d28AAAAAAAAAADb3b3MCwAAAAAAAACw3bvMvAAAAAAAAADbvcvMCwAAAAAAALDdu8y8AAAAAAAAALC9y8wLAAAAAAAAALDMzLwAAAAAAAAAAADLzAsAAAAAAAAAAACwuwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mySpriteHeart\"\n    },\n    \"image1\": {\n        \"data\": \"hwQUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMwAAAAAAAAAAADMwADMAAAAAAAAAMAAiAgMDAAAAAAAAMCARIiIDAAAAAAAAACMhIiIwAAAAAAAAMCAiIiIwMwAAAAAAAAMiIiIiMAAAAAAAADAgIiIiAgMAAAAAADAgIiIiAgMAAAAAAAMiIiIiMAAAAAAAMCAiIiswAwAAAAAAMCAisiswAAAAAAAAACMiIiIDAAAAAAAAAAMiAgMDAAAAAAAAADAwADMAAAAAAAAAAAADMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"cupid hearts\"\n    },\n    \"anim1\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim1\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YzgwMDEwMDAxMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=\",\n        \"displayName\": \"myAnim\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image2\":\n            case \"arrow\":return img`\n. . 8 . . \n. . 8 . . \n. . 8 . . \n. . 8 . . \n8 8 8 8 8 \n. 8 8 8 . \n. . 8 . . \n`;\n            case \"image3\":\n            case \"mySpriteHeart\":return img`\n....................\n....................\n....................\n....................\n....................\n......bbb...bbb.....\n.....bdddb.bddcb....\n....bdddddbddbccb...\n....bdddddddbbccb...\n....bddddddbbcccb...\n.....bddddbbcccb....\n......bbdbbcccb.....\n.......bcccccb......\n........bcccb.......\n.........bcb........\n..........b.........\n....................\n....................\n....................\n....................\n`;\n            case \"image1\":\n            case \"cupid hearts\":return img`\n....................\n....................\n....................\n....33.3....33......\n...3..3.3..3..33....\n...3.222.33.222.3...\n..3.21122..22222.3..\n...32122222222223...\n..3.222222222222.3..\n..3..22222222b2..3..\n...332222222bb233...\n...3.2222222222.3...\n....33..2222..33....\n......33222233......\n.......3.22.3.......\n.......33..3........\n.........33.........\n....................\n....................\n....................\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"myAnim\":\n            case \"anim1\":return [img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`];\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"$g8pJu*frIeM,?aMXU1)\">Valentine</variable><variable type=\"KIND_SpriteKind\" id=\"iXkWI;p@+k|q}yU;@?q;\">Arrow</variable><variable type=\"KIND_SpriteKind\" id=\"b[omF/9`MmhN},]P-},r\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"j+WU,$:?(f=y+@ojVcz!\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"#cIx{ihB6CyhUn1IS?Nt\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"x~-?;fhl*PATp9$#JC9l\">Enemy</variable><variable id=\"9.bC@QLz*P]Lh-oQ`rGE\">player sprite</variable><variable id=\"6@W!*|SOdOjC5b1V+L*Y\">redheart</variable><variable id=\"X1Y#bim)aK#1_3dX^j7~\">index</variable><variable id=\"X!F#!ktI-N@uYzLFK59K\">arrow</variable><variable id=\"*h`KHK??;N1Ar;smJ{IO\">item</variable><variable id=\"bPmDVcop@Oyxvr{dn[e!\">win_size</variable><variable id=\";MGT;j4qK[4MM8Q=`s76\">lose_size</variable><variable id=\"QDd[+OF4NQI}C/g,g.X_\">divWidth</variable><variable id=\"4S;c1By:wUCD~o*;r*?w\">myImage</variable></variables><block type=\"gameinterval\" x=\"230\" y=\"150\"><value name=\"period\"><shadow type=\"timePicker\"><field name=\"ms\">1800</field></shadow></value><statement name=\"HANDLER\"><block type=\"function_call\"><mutation name=\"check win or lose\" functionid=\"d[6+;--(NZqfa8C9VGy9\"></mutation><next><block type=\"function_call\"><mutation name=\"send valentine\" functionid=\"CIbT5=v+?`-?6l/I.INL\"><arg name=\"val-image\" id=\".6W~p*vQ{[^JfLsZG3bq\" type=\"Image\"></arg><arg name=\"arrowNum\" id=\"v=%ozE_8dPE8ZA92NV=3\" type=\"number\"></arg><arg name=\"arrow-image\" id=\"wmRBWEz42vw)8q^Vw0j9\" type=\"Image\"></arg></mutation><value name=\".6W~p*vQ{[^JfLsZG3bq\"><shadow type=\"variables_get\"><field name=\"VAR\" id=\"4S;c1By:wUCD~o*;r*?w\">myImage</field></shadow><block type=\"screen_image_picker\"><field name=\"img\">assets.image`cupid hearts`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image1\"}}</data></block></value><value name=\"v=%ozE_8dPE8ZA92NV=3\"><shadow type=\"math_number\"><field name=\"NUM\">2</field></shadow></value><value name=\"wmRBWEz42vw)8q^Vw0j9\"><shadow type=\"variables_get\"><field name=\"VAR\" id=\"4S;c1By:wUCD~o*;r*?w\">myImage</field></shadow><block type=\"screen_image_picker\"><field name=\"img\">assets.image`arrow`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image2\"}}</data></block></value></block></next></block></statement></block><block type=\"pxt-on-start\" x=\"-170\" y=\"270\"><statement name=\"HANDLER\"><block type=\"function_call\"><mutation name=\"set win lose size\" functionid=\"R*,ixy75I9Sel3NIU.%W\"><arg name=\"winsize\" id=\"{teM4C%e?UQcAz9RyjVs\" type=\"number\"></arg><arg name=\"losesize\" id=\"Aw8#sQCkdB=1SR_aHSwI\" type=\"number\"></arg></mutation><value name=\"{teM4C%e?UQcAz9RyjVs\"><shadow type=\"math_number\"><field name=\"NUM\">120</field></shadow></value><value name=\"Aw8#sQCkdB=1SR_aHSwI\"><shadow type=\"math_number\"><field name=\"NUM\">6</field></shadow></value><next><block type=\"set_current_tilemap\"><value name=\"tilemap\"><shadow type=\"tiles_tilemap_editor\"><field name=\"tilemap\">tilemap`level0`</field><data>{\"commentRefs\":[],\"fieldData\":{\"tilemap\":\"level2\"}}</data></shadow></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"9.bC@QLz*P]Lh-oQ`rGE\">player sprite</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`mySpriteHeart`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image3\"}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value></block></value><next><block type=\"game_control_sprite\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><value name=\"sprite\"><shadow type=\"variables_get\"><field name=\"VAR\" id=\"9.bC@QLz*P]Lh-oQ`rGE\">player sprite</field></shadow></value><next><block type=\"camerafollow\"><value name=\"sprite\"><shadow type=\"variables_get\"><field name=\"VAR\" id=\"9.bC@QLz*P]Lh-oQ`rGE\">player sprite</field></shadow></value></block></next></block></next></block></next></block></next></block></statement></block><block type=\"function_definition\" collapsed=\"true\" x=\"570\" y=\"370\"><mutation name=\"check win or lose\" functionid=\"d[6+;--(NZqfa8C9VGy9\"></mutation><field name=\"function_name\">check win or lose</field><statement name=\"STACK\"><block type=\"controls_if\"><mutation elseif=\"1\"></mutation><value name=\"IF0\"><shadow type=\"logic_boolean\"><field name=\"BOOL\">TRUE</field></shadow><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"Sprite_blockCombine_get\"><field name=\"property\">Sprite.width</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"9.bC@QLz*P]Lh-oQ`rGE\">player sprite</field></block></value></block></value><value name=\"B\"><shadow type=\"math_number\"><field name=\"NUM\">120</field></shadow><block type=\"variables_get\"><field name=\"VAR\" id=\"bPmDVcop@Oyxvr{dn[e!\">win_size</field></block></value></block></value><statement name=\"DO0\"><block type=\"sprites_destroy_all_sprites_of_kind\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Arrow</field></shadow></value><next><block type=\"sprites_destroy_all_sprites_of_kind\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Valentine</field></shadow></value><next><block type=\"gameOver\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><value name=\"win\"><shadow type=\"toggleWinLose\"><field name=\"win\">true</field></shadow></value></block></next></block></next></block></statement><value name=\"IF1\"><shadow type=\"logic_boolean\"><field name=\"BOOL\">TRUE</field></shadow><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"Sprite_blockCombine_get\"><field name=\"property\">Sprite.width</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"9.bC@QLz*P]Lh-oQ`rGE\">player sprite</field></block></value></block></value><value name=\"B\"><shadow type=\"math_number\"><field name=\"NUM\">6</field></shadow><block type=\"variables_get\"><field name=\"VAR\" id=\";MGT;j4qK[4MM8Q=`s76\">lose_size</field></block></value></block></value><statement name=\"DO1\"><block type=\"gameOver\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><value name=\"win\"><shadow type=\"toggleWinLose\"><field name=\"win\">false</field></shadow></value></block></statement></block></statement></block><block type=\"function_definition\" collapsed=\"true\" x=\"390\" y=\"510\"><mutation name=\"send valentine\" functionid=\"CIbT5=v+?`-?6l/I.INL\"><arg name=\"val-image\" id=\".6W~p*vQ{[^JfLsZG3bq\" type=\"Image\"></arg><arg name=\"arrowNum\" id=\"v=%ozE_8dPE8ZA92NV=3\" type=\"number\"></arg><arg name=\"arrow-image\" id=\"wmRBWEz42vw)8q^Vw0j9\" type=\"Image\"></arg></mutation><field name=\"function_name\">send valentine</field><value name=\".6W~p*vQ{[^JfLsZG3bq\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Image\"></mutation><field name=\"VALUE\">val-image</field></shadow></value><value name=\"v=%ozE_8dPE8ZA92NV=3\"><shadow type=\"argument_reporter_number\"><field name=\"VALUE\">arrowNum</field></shadow></value><value name=\"wmRBWEz42vw)8q^Vw0j9\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Image\"></mutation><field name=\"VALUE\">arrow-image</field></shadow></value><statement name=\"STACK\"><block type=\"variables_set\"><field name=\"VAR\" id=\"QDd[+OF4NQI}C/g,g.X_\">divWidth</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><shadow type=\"math_number\"><field name=\"NUM\">100</field></shadow></value><value name=\"B\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"argument_reporter_number\"><field name=\"VALUE\">arrowNum</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"6@W!*|SOdOjC5b1V+L*Y\">redheart</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreateprojectilefromside\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`cupid hearts`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image1\"}}</data></shadow><block type=\"argument_reporter_custom\"><mutation typename=\"Image\"></mutation><field name=\"VALUE\">val-image</field></block></value><value name=\"vx\"><shadow type=\"spriteSpeedPicker\"></shadow><block type=\"device_random\"><value name=\"min\"><shadow type=\"math_number\"><field name=\"NUM\">-20</field></shadow></value><value name=\"limit\"><shadow type=\"math_number\"><field name=\"NUM\">20</field></shadow></value></block></value><value name=\"vy\"><shadow type=\"spriteSpeedPicker\"></shadow><block type=\"device_random\"><value name=\"min\"><shadow type=\"math_number\"><field name=\"NUM\">30</field></shadow></value><value name=\"limit\"><shadow type=\"math_number\"><field name=\"NUM\">60</field></shadow></value></block></value></block></value><next><block type=\"spritesetpos\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"6@W!*|SOdOjC5b1V+L*Y\">redheart</field></block></value><value name=\"x\"><shadow type=\"positionPicker\"></shadow><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"device_random\"><value name=\"min\"><shadow type=\"math_number\"><field name=\"NUM\">-64</field></shadow></value><value name=\"limit\"><shadow type=\"math_number\"><field name=\"NUM\">64</field></shadow></value></block></value><value name=\"B\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"cameraproperty\"><field name=\"property\">CameraProperty.X</field></block></value></block></value><value name=\"y\"><shadow type=\"positionPicker\"></shadow><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><shadow type=\"math_number\"><field name=\"NUM\">-34</field></shadow></value><value name=\"B\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"cameraproperty\"><field name=\"property\">CameraProperty.Y</field></block></value></block></value><next><block type=\"spritesetkind\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"6@W!*|SOdOjC5b1V+L*Y\">redheart</field></block></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Valentine</field></shadow></value><next><block type=\"Sprite_blockCombine_set\"><field name=\"property\">Sprite.lifespan</field><value name=\"mySprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"6@W!*|SOdOjC5b1V+L*Y\">redheart</field></block></value><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">5000</field></shadow></value><next><block type=\"pxt_controls_for\"><value name=\"VAR\"><shadow type=\"variables_get_reporter\"><field name=\"VAR\" id=\"X1Y#bim)aK#1_3dX^j7~\">index</field></shadow></value><value name=\"TO\"><shadow type=\"math_whole_number\"><field name=\"NUM\">2</field></shadow><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><shadow type=\"math_number\" disabled=\"true\"><field name=\"NUM\">0</field></shadow><block type=\"argument_reporter_number\"><field name=\"VALUE\">arrowNum</field></block></value><value name=\"B\"><shadow type=\"math_number\"><field name=\"NUM\">1</field></shadow></value></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"X!F#!ktI-N@uYzLFK59K\">arrow</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreateprojectilefromsprite\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">assets.image`arrow`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":\"myImages.image2\"}}</data></shadow><block type=\"argument_reporter_custom\"><mutation typename=\"Image\"></mutation><field name=\"VALUE\">arrow-image</field></block></value><value name=\"sprite\"><shadow type=\"variables_get\"><field name=\"VAR\" id=\"6@W!*|SOdOjC5b1V+L*Y\">redheart</field></shadow></value><value name=\"vx\"><shadow type=\"spriteSpeedPicker\"></shadow><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><shadow type=\"math_number\"><field name=\"NUM\">50</field></shadow><block type=\"variables_get\"><field name=\"VAR\" id=\"QDd[+OF4NQI}C/g,g.X_\">divWidth</field></block></value><value name=\"B\"><shadow type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"variables_get\"><field name=\"VAR\" id=\"X1Y#bim)aK#1_3dX^j7~\">index</field></block></value></block></value><value name=\"B\"><shadow type=\"math_number\"><field name=\"NUM\">50</field></shadow></value></block></value><value name=\"vy\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">75</field></shadow></value></block></value><next><block type=\"spritesetkind\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"X!F#!ktI-N@uYzLFK59K\">arrow</field></block></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Arrow</field></shadow></value></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></statement></block><block type=\"function_definition\" x=\"670\" y=\"650\"><mutation name=\"set win lose size\" functionid=\"R*,ixy75I9Sel3NIU.%W\"><arg name=\"winsize\" id=\"{teM4C%e?UQcAz9RyjVs\" type=\"number\"></arg><arg name=\"losesize\" id=\"Aw8#sQCkdB=1SR_aHSwI\" type=\"number\"></arg></mutation><field name=\"function_name\">set win lose size</field><value name=\"{teM4C%e?UQcAz9RyjVs\"><shadow type=\"argument_reporter_number\"><field name=\"VALUE\">winsize</field></shadow></value><value name=\"Aw8#sQCkdB=1SR_aHSwI\"><shadow type=\"argument_reporter_number\"><field name=\"VALUE\">losesize</field></shadow></value><statement name=\"STACK\"><block type=\"variables_set\"><field name=\"VAR\" id=\"bPmDVcop@Oyxvr{dn[e!\">win_size</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">120</field></shadow><block type=\"argument_reporter_number\"><field name=\"VALUE\">winsize</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\";MGT;j4qK[4MM8Q=`s76\">lose_size</field><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">6</field></shadow><block type=\"argument_reporter_number\"><field name=\"VALUE\">losesize</field></block></value></block></next></block></statement></block><block type=\"spritesoverlap\" x=\"-90\" y=\"710\"><value name=\"HANDLER_DRAG_PARAM_sprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"></mutation><field name=\"VALUE\">sprite</field></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value><value name=\"HANDLER_DRAG_PARAM_otherSprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"></mutation><field name=\"VALUE\">otherSprite</field></shadow></value><value name=\"otherKind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Arrow</field></shadow></value><statement name=\"HANDLER\"><block type=\"spritedestroy\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><value name=\"sprite\"><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"></mutation><field name=\"VALUE\">otherSprite</field></block></value><next><block type=\"sprite_scale_by_pixels_ex\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><field name=\"direction\">ScaleDirection.Uniformly</field><field name=\"anchor\">ScaleAnchor.Middle</field><value name=\"sprite\"><shadow type=\"variables_get\"><field name=\"VAR\" id=\"9.bC@QLz*P]Lh-oQ`rGE\">mySprite</field></shadow><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"></mutation><field name=\"VALUE\">sprite</field></block></value><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">-7</field></shadow></value></block></next></block></statement></block><block type=\"spritesoverlap\" x=\"-90\" y=\"910\"><value name=\"HANDLER_DRAG_PARAM_sprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"></mutation><field name=\"VALUE\">sprite</field></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value><value name=\"HANDLER_DRAG_PARAM_otherSprite\"><shadow type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"></mutation><field name=\"VALUE\">otherSprite</field></shadow></value><value name=\"otherKind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Valentine</field></shadow></value><statement name=\"HANDLER\"><block type=\"spritedestroy\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><value name=\"sprite\"><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"></mutation><field name=\"VALUE\">otherSprite</field></block></value><next><block type=\"sprite_scale_by_pixels_ex\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"false\"></mutation><field name=\"direction\">ScaleDirection.Uniformly</field><field name=\"anchor\">ScaleAnchor.Middle</field><value name=\"sprite\"><shadow type=\"variables_get\"><field name=\"VAR\" id=\"9.bC@QLz*P]Lh-oQ`rGE\">mySprite</field></shadow><block type=\"argument_reporter_custom\"><mutation typename=\"Sprite\"></mutation><field name=\"VALUE\">sprite</field></block></value><value name=\"value\"><shadow type=\"math_number\"><field name=\"NUM\">15</field></shadow></value></block></next></block></statement></block></xml>",
  "main.ts": "",
  "pxt.json": "{\n    \"name\": \"Flee My Valentine - Copy\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"sprite-scaling\": \"*\",\n        \"arcade-character-animations\": \"github:microsoft/arcade-character-animations#v0.0.2\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.8.11\",\n        \"tag\": \"v1.8.11\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/df6017b22f777b1f9bdb974af68b285d6344ba73\",\n        \"target\": \"1.8.11\",\n        \"pxt\": \"7.4.18\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"tile1\": {\n        \"data\": \"hwQQABAAAABVVVVVVVVVVVVVVVVVVVVV1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVXVVVVVVVVVVdVVVVVVVVVV1VVQ==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true,\n        \"displayName\": \"myTile\"\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency16\"\n        ],\n        \"displayName\": \"level1\"\n    },\n    \"level3\": {\n        \"id\": \"level3\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency16\"\n        ],\n        \"displayName\": \"level3\"\n    },\n    \"level4\": {\n        \"id\": \"level4\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency16\"\n        ],\n        \"displayName\": \"level4\"\n    },\n    \"level2\": {\n        \"id\": \"level2\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTAxMDAwMTAwMDA4MDcwNzA3MDcwNzA3MDcwNzA3MDcwNzA3MDcwNzA2MDEwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDUwMTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwNTAxMDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA1MDEwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDUwMTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwNTAxMDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA1MDEwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDUwMTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwNTAxMDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA1MDEwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDUwMTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwNTAxMDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA1MDEwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDUwMTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwOTA5MDkwNTAyMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzA0MjIyMjIyMjIyMjIyMjIyMjAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMDIwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAwMjAwMjAwMDAwMDAwMDAwMDIwMjIyMjIyMjIyMjIyMjIyMg==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"sprites.dungeon.greenOuterWest0\",\n            \"sprites.dungeon.greenOuterSouthEast\",\n            \"sprites.dungeon.greenOuterSouth0\",\n            \"sprites.dungeon.greenOuterSouthWest\",\n            \"sprites.dungeon.greenOuterEast1\",\n            \"sprites.dungeon.greenOuterNorthEast\",\n            \"sprites.dungeon.greenOuterNorth1\",\n            \"sprites.dungeon.greenOuterNorthWest\",\n            \"myTiles.tile1\"\n        ],\n        \"displayName\": \"level0\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n    //% fixedInstance jres blockIdentity=images._tile\n    export const tile1 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"level1\":\n            case \"level1\":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`, [myTiles.transparency16], TileScale.Sixteen);\n            case \"level3\":\n            case \"level3\":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`, [myTiles.transparency16], TileScale.Sixteen);\n            case \"level4\":\n            case \"level4\":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`, [myTiles.transparency16], TileScale.Sixteen);\n            case \"level0\":\n            case \"level2\":return tiles.createTilemap(hex`1000100008070707070707070707070707070706010909090909090909090909090909050109090909090909090909090909090501090909090909090909090909090905010909090909090909090909090909050109090909090909090909090909090501090909090909090909090909090905010909090909090909090909090909050109090909090909090909090909090501090909090909090909090909090905010909090909090909090909090909050109090909090909090909090909090501090909090909090909090909090905010909090909090909090909090909050109090909090909090909090909090502030303030303030303030303030304`, img`\n2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 \n2 . . . . . . . . . . . . . . 2 \n2 . . . . . . . . . . . . . . 2 \n2 . . . . . . . . . . . . . . 2 \n2 . . . . . . . . . . . . . . 2 \n2 . . . . . . . . . . . . . . 2 \n2 . . . . . . . . . . . . . . 2 \n2 . . . . . . . . . . . . . . 2 \n2 . . . . . . . . . . . . . . 2 \n2 . . . . . . . . . . . . . . 2 \n2 . . . . . . . . . . . . . . 2 \n2 . . . . . . . . . . . . . . 2 \n2 . . . . . . . . . . . . . . 2 \n2 . . . . . . . . . . . . . . 2 \n2 . . . . . . . . . . . . . . 2 \n2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 \n`, [myTiles.transparency16,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthWest,myTiles.tile1], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n            case \"myTile\":\n            case \"tile1\":return tile1;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```

